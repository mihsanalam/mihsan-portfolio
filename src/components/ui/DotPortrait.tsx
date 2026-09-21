"use client";

import { useEffect, useRef } from "react";

/**
 * DotPortrait — a premium dot-matrix portrait.
 *
 * The source photograph is drawn to an offscreen canvas, each pixel's
 * luminance is analyzed, and the portrait is reconstructed as a grid of tiny
 * horizontal cyan dots: brighter areas become larger, brighter dots; dark
 * background pixels are skipped entirely. Includes a slow, elegant idle
 * animation and an extremely subtle desktop pointer interaction.
 *
 * Self-contained: native Canvas APIs only, no dependencies.
 */

// ── Source ─────────────────────────────────────────────────────────────────
// The portrait photo (public/images/hero.webp) — dark navy studio shot.
const IMAGE_SRC = "/images/hero.webp";
// Shown (as dim flat dots) until the portrait file exists, so the layout
// never renders an empty box.
const FALLBACK_SRC = "/images/silhouette.svg";

// ── Blue-background keying ────────────────────────────────────────────────
// Only needed for photos with a bright blue backdrop (e.g. the old ID shot).
// hero.webp has a near-black studio backdrop removed by BG_CUTOFF instead, so
// these are set high enough to never trigger (they would eat the navy blazer).
const KEY_BLUE_MIN = 0.6; // min blue channel (0..1) for a background pixel
const KEY_DOMINANCE = 0.3; // how much blue must exceed red & green

// ── Dot style ──────────────────────────────────────────────────────────────
const DOT_SPACING = 6; // px between grid samples — lower = denser
const MIN_DOT_SIZE = 0.7; // base dash size (nearly uniform, like the ref)
const MAX_DOT_SIZE = 1.2;
const DOT_COLOR = "#35D6C8"; // glowing highlight dots
const DIM_COLOR = "#3D5A80"; // dim silhouette dashes (muted steel blue)
const BG_CUTOFF = 0.14; // luminance at/below this is treated as background
const LUMINANCE_GAMMA = 0.85; // <1 lifts mid-tones, >1 pushes them down
const MIN_ALPHA = 0.18; // dimmest visible dot (silhouette fill)
const MAX_ALPHA = 0.4; // cap for non-highlight dots (stays subtle)
const HIGHLIGHT_THRESHOLD = 0.5; // luminance where the teal glow starts
// Face zone (fractions of canvas size) — highlights concentrate here so the
// white shirt doesn't out-glow the face, like the reference. Tuned for
// hero.webp: 3:4 portrait, face sits in the upper third when contain-fit.
const FACE_X = 0.5;
const FACE_Y = 0.3;
const FACE_R = 0.15; // radius as a fraction of canvas width
const PORTRAIT_SCALE = 0.82; // fraction of the canvas the portrait fills

// ── Motion ─────────────────────────────────────────────────────────────────
const WOBBLE_PX = 0.5; // idle drift amplitude
const FLICKER = 0.1; // idle opacity variation (0..1)
const MOUSE_RADIUS = 110; // pointer influence radius in px
const MOUSE_PUSH = 3; // max px dots retreat from the cursor
const MOUSE_BOOST = 0.35; // max brightness increase near the cursor

type Dot = {
  hx: number; // home x
  hy: number; // home y
  size: number;
  alpha: number;
  glow: number; // 0..1 — above 0 the dot renders as a bright teal highlight
  phase: number;
  speed: number;
  shade: number; // static per-dot randomness
};

type DotPortraitProps = {
  // Tailwind size classes for the canvas box, e.g. "w-64 h-64 sm:w-80 sm:h-80"
  className?: string;
};

export default function DotPortrait({
  className = "w-64 h-64 sm:w-80 sm:h-80",
}: DotPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef(0);
  const visibleRef = useRef(true);
  const pointerRef = useRef({ x: -9999, y: -9999, inside: false });
  const sizesRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let disposed = false;

    // ── Sizing (devicePixelRatio-aware) ─────────────────────────────────
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizesRef.current = { w: rect.width, h: rect.height };
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ── Image processing: pixels → dots ─────────────────────────────────
    const sample = (img: HTMLImageElement) => {
      const { w, h } = sizesRef.current;
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) return;

      // Contain-fit, centered — preserves aspect ratio, no distortion
      const boxW = w * PORTRAIT_SCALE;
      const boxH = h * PORTRAIT_SCALE;
      const ratio = Math.min(boxW / img.width, boxH / img.height);
      const dw = img.width * ratio;
      const dh = img.height * ratio;
      octx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);

      const data = octx.getImageData(0, 0, w, h).data;
      const dots: Dot[] = [];

      for (let y = 0; y < h; y += DOT_SPACING) {
        for (let x = 0; x < w; x += DOT_SPACING) {
          const i = (y * w + x) * 4;
          const r = data[i] / 255;
          const gr = data[i + 1] / 255;
          const b = data[i + 2] / 255;
          // Key out the blue studio backdrop
          if (b > KEY_BLUE_MIN && b - r > KEY_DOMINANCE && b - gr > KEY_DOMINANCE)
            continue;
          const luma = (0.2126 * r + 0.7152 * gr + 0.0722 * b);
          // Background (near-black) produces no dots
          if (luma <= BG_CUTOFF) continue;
          const g = Math.pow(
            (luma - BG_CUTOFF) / (1 - BG_CUTOFF),
            LUMINANCE_GAMMA
          );
          // Only the brightest dots inside the face zone glow
          let glow = 0;
          const fdx = x - w * FACE_X;
          const fdy = y - h * FACE_Y;
          if (
            luma > HIGHLIGHT_THRESHOLD &&
            Math.hypot(fdx, fdy) < w * FACE_R
          ) {
            glow = (luma - HIGHLIGHT_THRESHOLD) / (1 - HIGHLIGHT_THRESHOLD);
            glow *= glow;
          }
          dots.push({
            hx: x,
            hy: y,
            size: MIN_DOT_SIZE + (MAX_DOT_SIZE - MIN_DOT_SIZE) * g,
            alpha: MIN_ALPHA + (MAX_ALPHA - MIN_ALPHA) * g,
            glow,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.6,
            shade: Math.random(),
          });
        }
      }
      dotsRef.current = dots;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tick(); // single static frame, no animation loop
      }
    };

    const load = (src: string, allowFallback: boolean) => {
      const img = new Image();
      img.onload = () => {
        if (!disposed) sample(img);
      };
      img.onerror = () => {
        if (!disposed && allowFallback) load(FALLBACK_SRC, false);
      };
      img.src = src;
    };

    // ── Pointer interaction (fine pointers / desktop only) ──────────────
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        inside: true,
      };
    };
    const onPointerLeave = () => {
      pointerRef.current = { x: -9999, y: -9999, inside: false };
    };

    // ── Render loop ─────────────────────────────────────────────────────
    const tick = () => {
      const { w, h } = sizesRef.current;
      ctx.clearRect(0, 0, w, h);

      const t = performance.now() / 1000;
      const ptr = pointerRef.current;
      ctx.fillStyle = DOT_COLOR;

      for (const d of dotsRef.current) {
        // Slow idle drift
        const wobX = Math.cos(t * d.speed + d.phase) * WOBBLE_PX;
        const wobY = Math.sin(t * d.speed * 0.9 + d.phase) * WOBBLE_PX;

        // Subtle pointer influence, computed from the home position so dots
        // glide back smoothly on their own when the cursor leaves
        let ox = 0;
        let oy = 0;
        let boost = 0;
        if (ptr.inside) {
          const dxh = d.hx - ptr.x;
          const dyh = d.hy - ptr.y;
          const dist = Math.hypot(dxh, dyh);
          if (dist < MOUSE_RADIUS && dist > 0.01) {
            const f = 1 - dist / MOUSE_RADIUS;
            ox = (dxh / dist) * f * MOUSE_PUSH;
            oy = (dyh / dist) * f * MOUSE_PUSH;
            boost = f * MOUSE_BOOST;
          }
        }

        // Gentle opacity breathing
        const flick =
          1 -
          FLICKER / 2 +
          FLICKER * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase));

        if (d.glow > 0.02) {
          // Highlight dot: soft teal halo + bright core
          ctx.fillStyle = DOT_COLOR;
          ctx.globalAlpha = 0.08 + 0.14 * d.glow + boost * 0.3;
          ctx.beginPath();
          ctx.arc(d.hx + ox, d.hy + oy, 3.2, 0, Math.PI * 2);
          ctx.fill();

          ctx.globalAlpha = Math.min(
            1,
            (0.3 + 0.65 * d.glow) * flick + boost * 0.5
          );
          const s = d.size + d.glow * 0.7 + boost * 0.3;
          ctx.fillRect(
            d.hx + wobX + ox - s,
            d.hy + wobY + oy - s * 0.55,
            s * 2,
            s * 1.1
          );
        } else {
          // Dim, nearly uniform silhouette dash (the reference look)
          ctx.fillStyle = DIM_COLOR;
          ctx.globalAlpha = Math.min(1, d.alpha * flick + boost * 0.35);
          const s = d.size + d.shade * 0.15;
          ctx.fillRect(
            d.hx + wobX + ox - s,
            d.hy + wobY + oy - s * 0.55,
            s * 2,
            s * 1.1
          );
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      if (!visibleRef.current) return;
      tick();
    };

    // ── Pause when off-screen or tab hidden ─────────────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const onVisibility = () => {
      visibleRef.current = !document.hidden;
    };

    // ── Init ────────────────────────────────────────────────────────────
    resize();
    load(IMAGE_SRC, true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      loop();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      load(IMAGE_SRC, true);
    });
    resizeObserver.observe(container);

    if (finePointer) {
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerleave", onPointerLeave);
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      role="img"
      aria-label="Portrait reconstructed from dots"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}