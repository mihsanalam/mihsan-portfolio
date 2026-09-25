"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  phase: number;
  a: number;
  r: number;
  g: number;
  b: number;
  /** Pre-computed `rgb(...)` string — no per-frame string allocation. */
  fill: string;
  glow: number;
};

type PixelParticleImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

/*
 * Tunables: the artwork is turned into a grid of chunky pixels. The grid gap is
 * derived from the rendered box so the particle count stays bounded on every
 * screen size (a fixed gap produced ~8.000 particles on desktop) and the block
 * size follows the gap so the mosaic keeps looking solid.
 */
const BASE_GAP = 5;
const MAX_PARTICLES = 4200;
const POINTER_RADIUS = 18;
const POINTER_RADIUS_SQ = POINTER_RADIUS * POINTER_RADIUS;
const REPULSION = 0.22;
const RETURN_SPEED = 0.12;
const PARTICLE_OPACITY = 0.98;
const RED_ACCENT_STRENGTH = 0.12;
const MAX_DPR = 1.5;
/** The idle brightness pulse only needs ~30fps. */
const IDLE_FRAME_MS = 1000 / 30;

/**
 * Renders `src` to a canvas as a grid of pixels that scatter away from the
 * pointer and settle back.
 *
 * Performance notes:
 * - A real, priority-loaded `<Image>` paints first so the hero has an immediate
 *   LCP candidate instead of waiting for JS + canvas decode. The canvas fades
 *   in on top once it has drawn its first frame.
 * - The whole grid is read with a single `getImageData` call instead of one
 *   call per sample point (that alone was ~8.000 GPU readbacks per resize).
 * - `prefers-reduced-motion` gets one static frame and no animation loop.
 * - The loop is suspended while the canvas is off-screen or the tab is hidden,
 *   and drops to ~30fps once the pointer has settled.
 */
export default function PixelParticleImage({
  src = "/images/hero-scene.webp",
  alt = "",
  className = "",
}: PixelParticleImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const sourceRef = useRef<HTMLCanvasElement | null>(null);
  const startedRef = useRef(false);
  const visibleRef = useRef(true);
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cssWidth = 1;
    let cssHeight = 1;
    let lastIdlePaint = 0;
    let resizeFrame: number | null = null;

    const img = new window.Image();
    img.decoding = "async";
    // Only ask for CORS when the artwork really lives on another origin: a
    // same-origin image never taints the canvas, and staying non-CORS keeps
    // this request on the same cache entry as the <Image> rendered above.
    if (!src.startsWith("/") && !src.startsWith(window.location.origin)) {
      img.crossOrigin = "anonymous";
    }

    const resizeCanvas = () => {
      const rect = wrap.getBoundingClientRect();
      cssWidth = Math.max(1, rect.width);
      cssHeight = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sampleImage = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;

      const width = Math.max(1, Math.round(cssWidth));
      const height = Math.max(1, Math.round(cssHeight));

      // One reusable off-screen canvas, allocated once per mount.
      const source = sourceRef.current ?? document.createElement("canvas");
      sourceRef.current = source;
      source.width = width;
      source.height = height;

      const sourceCtx = source.getContext("2d", { willReadFrequently: true });
      if (!sourceCtx) return;

      sourceCtx.clearRect(0, 0, width, height);

      // object-cover fit
      const imageRatio = img.naturalWidth / img.naturalHeight;
      const boxRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (imageRatio > boxRatio) {
        drawHeight = height;
        drawWidth = height * imageRatio;
        offsetX = (width - drawWidth) / 2;
      } else {
        drawWidth = width;
        drawHeight = width / imageRatio;
        offsetY = (height - drawHeight) / 2;
      }

      sourceCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Single readback for the entire grid.
      const pixels = sourceCtx.getImageData(0, 0, width, height).data;

      let gap = Math.max(BASE_GAP, Math.ceil(Math.sqrt((width * height) / MAX_PARTICLES)));
      if (reduceMotion) gap += 1;
      const blockSize = reduceMotion ? Math.min(6, gap) : Math.max(3, gap - 1);

      const nextParticles: Particle[] = [];

      for (let y = gap * 0.5; y < height; y += gap) {
        for (let x = gap * 0.5; x < width; x += gap) {
          const px = Math.min(x | 0, width - 1);
          const py = Math.min(y | 0, height - 1);
          const offset = (py * width + px) * 4;
          const alpha = pixels[offset + 3] / 255;

          if (alpha <= 0.04) continue;

          const r = pixels[offset];
          const g = pixels[offset + 1];
          const b = pixels[offset + 2];

          nextParticles.push({
            x,
            y,
            originX: x,
            originY: y,
            size: blockSize,
            phase: Math.random() * Math.PI * 2,
            a: alpha,
            r,
            g,
            b,
            fill: `rgb(${r}, ${g}, ${b})`,
            glow: 0,
          });
        }
      }

      particlesRef.current = nextParticles;
    };

    const render = (time: number, force = false) => {
      const particles = particlesRef.current;
      if (particles.length === 0) return;

      const pointer = pointerRef.current;
      const active = pointer.active;
      let moving = false;

      // Pass 1 — integrate motion (pure math, nothing touches the canvas).
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        let targetX = particle.originX;
        let targetY = particle.originY;
        let glow = 0;

        if (active) {
          const dx = pointer.x - particle.originX;
          const dy = pointer.y - particle.originY;
          const distSq = dx * dx + dy * dy;

          if (distSq < POINTER_RADIUS_SQ) {
            const distance = Math.sqrt(distSq);
            const falloff = 1 - distance / POINTER_RADIUS;
            const angle = Math.atan2(dy, dx);
            const displacement = Math.min(5, falloff * 4.5 * REPULSION * 5);

            targetX = particle.originX + Math.cos(angle) * displacement;
            targetY = particle.originY + Math.sin(angle) * displacement;
            glow = Math.min(1, falloff * RED_ACCENT_STRENGTH);
          }
        }

        particle.x += (targetX - particle.x) * RETURN_SPEED;
        particle.y += (targetY - particle.y) * RETURN_SPEED;
        particle.glow = glow;

        if (
          !moving &&
          (Math.abs(particle.x - particle.originX) > 0.1 ||
            Math.abs(particle.y - particle.originY) > 0.1)
        ) {
          moving = true;
        }
      }

      // Pass 2 — skip painting while nothing moves; the only thing still
      // changing is the slow brightness pulse, so ~30fps is plenty. `force`
      // covers the very first frame, where there is nothing on the canvas yet.
      if (!force && !reduceMotion && !moving && !active && time - lastIdlePaint < IDLE_FRAME_MS) {
        return;
      }
      if (!moving && !active) lastIdlePaint = time;

      ctx.clearRect(0, 0, cssWidth, cssHeight);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const brightness = 0.7 + Math.sin(time * 0.002 + particle.phase) * 0.18;

        ctx.globalAlpha = Math.min(1, particle.a * PARTICLE_OPACITY * brightness);
        ctx.fillStyle =
          particle.glow > 0
            ? `rgb(${Math.min(255, particle.r + particle.glow * 35)}, ${Math.min(
                255,
                particle.g + particle.glow * 10
              )}, ${Math.min(255, particle.b + particle.glow * 5)})`
            : particle.fill;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      }

      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      if (!startedRef.current) return;
      render(time);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (startedRef.current || reduceMotion) return;
      startedRef.current = true;
      frameRef.current = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      startedRef.current = false;
    };

    const syncRunState = () => {
      if (visibleRef.current && !document.hidden) start();
      else stop();
    };

    const paintFirstFrame = () => {
      render(0, true);
      setPainted(true);
      syncRunState();
    };

    const handleResize = () => {
      if (resizeFrame !== null) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = null;
        resizeCanvas();
        sampleImage();
        if (reduceMotion) render(0);
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointerRef.current.x = event.clientX - rect.left;
      pointerRef.current.y = event.clientY - rect.top;
      pointerRef.current.active = true;
    };

    const handlePointerEnd = () => {
      pointerRef.current.active = false;
      pointerRef.current.x = 0;
      pointerRef.current.y = 0;
    };

    img.onload = () => {
      resizeCanvas();
      sampleImage();
      paintFirstFrame();
    };

    img.onerror = () => {
      console.error("Failed to load pixel particle image source:", src);
    };

    resizeCanvas();
    img.src = src;

    wrap.addEventListener("pointermove", handlePointerMove);
    wrap.addEventListener("pointerleave", handlePointerEnd);
    wrap.addEventListener("pointerup", handlePointerEnd);
    wrap.addEventListener("pointercancel", handlePointerEnd);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(wrap);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0]?.isIntersecting ?? true;
        syncRunState();
      },
      { rootMargin: "120px" }
    );
    intersectionObserver.observe(wrap);

    document.addEventListener("visibilitychange", syncRunState);

    return () => {
      stop();
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerEnd);
      wrap.removeEventListener("pointerup", handlePointerEnd);
      wrap.removeEventListener("pointercancel", handlePointerEnd);
      document.removeEventListener("visibilitychange", syncRunState);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      particlesRef.current = [];
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={`relative h-full w-full overflow-hidden ${className}`}>
      {/*
        Static, optimised and priority-loaded: paints immediately (LCP) and is
        also the single source the canvas samples from — same URL, so the
        second request is served from the browser cache.
      */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        unoptimized
        sizes="(max-width: 640px) 80vw, 448px"
        className={`object-cover transition-opacity duration-700 ${
          painted ? "opacity-0" : "opacity-100"
        }`}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 block h-full w-full transition-opacity duration-700 ${
          painted ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

