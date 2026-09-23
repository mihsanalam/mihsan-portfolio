"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  a: number;
  size: number;
  phase: number;
};

type PixelParticleImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const particleSize = 4;
const sampleGap = 5;
const mouseRadius = 18;
const repulsionStrength = 0.22;
const returnSpeed = 0.12;
const friction = 0.88;
const particleOpacity = 0.98;
const redAccentStrength = 0.12;

export default function PixelParticleImage({
  src = "/images/image.png",
  alt = "",
  className = "",
}: PixelParticleImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false, radius: mouseRadius });
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reduceMotionRef.current = prefersReducedMotion;

    const resizeCanvas = () => {
      const rect = wrap.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sampleImage = () => {
      const rect = wrap.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);

      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = width;
      sourceCanvas.height = height;
      const sourceCtx = sourceCanvas.getContext("2d");

      if (!sourceCtx) return;

      sourceCtx.clearRect(0, 0, width, height);
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

      const gap = prefersReducedMotion ? Math.max(6, sampleGap + 1) : sampleGap;
      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);
      const nextParticles: Particle[] = [];

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const px = x * gap + gap * 0.5;
          const py = y * gap + gap * 0.5;
          const color = sourceCtx.getImageData(Math.min(px, width - 1), Math.min(py, height - 1), 1, 1).data;
          const alpha = color[3] / 255;

          if (alpha <= 0.04) continue;

          nextParticles.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
            r: color[0],
            g: color[1],
            b: color[2],
            a: alpha,
            size: prefersReducedMotion ? particleSize + 1 : particleSize,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      particlesRef.current = nextParticles;
    };

    const draw = (time: number) => {
      const particles = particlesRef.current;
      const pointer = pointerRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        const dx = pointer.x - particle.originX;
        const dy = pointer.y - particle.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetX = particle.originX;
        let targetY = particle.originY;

        if (pointer.active && distance < mouseRadius) {
          const falloff = 1 - distance / mouseRadius;
          const angle = Math.atan2(dy, dx);
          const displacement = Math.min(5, falloff * 4.5 * repulsionStrength * 5);

          targetX = particle.originX + Math.cos(angle) * displacement;
          targetY = particle.originY + Math.sin(angle) * displacement;
        }

        particle.x += (targetX - particle.x) * returnSpeed;
        particle.y += (targetY - particle.y) * returnSpeed;

        const brightnessBoost = 0.7 + Math.sin(time * 0.002 + particle.phase) * 0.18;
        const glow = pointer.active && distance < mouseRadius ? Math.min(1, (1 - distance / mouseRadius) * redAccentStrength) : 0;
        const r = Math.min(255, particle.r + glow * 35);
        const g = Math.min(255, particle.g + glow * 10);
        const b = Math.min(255, particle.b + glow * 5);
        const alpha = Math.min(1, particle.a * particleOpacity * brightnessBoost);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      pointerRef.current.x = x;
      pointerRef.current.y = y;
      pointerRef.current.active = true;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.x = 0;
      pointerRef.current.y = 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!event.touches[0]) return;
      const touch = event.touches[0];
      handlePointerMove({
        clientX: touch.clientX,
        clientY: touch.clientY,
      } as PointerEvent);
    };

    const handleResize = () => {
      resizeCanvas();
      sampleImage();
    };

    img.onload = () => {
      handleResize();
      frameRef.current = window.requestAnimationFrame(draw);
    };

    img.onerror = () => {
      console.error("Failed to load pixel particle image source:", src);
    };

    resizeCanvas();
    wrap.addEventListener("pointermove", handlePointerMove);
    wrap.addEventListener("pointerleave", handlePointerLeave);
    wrap.addEventListener("touchmove", handleTouchMove, { passive: true });

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(wrap);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
      wrap.removeEventListener("touchmove", handleTouchMove);
      resizeObserver.disconnect();
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={`relative h-full w-full overflow-hidden ${className}`} aria-label={alt}>
      <canvas ref={canvasRef} className="h-full w-full block" aria-hidden="true" />
    </div>
  );
}
