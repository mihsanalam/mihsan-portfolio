"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive particle image for the Hero section.
 *
 * Renders thousands of tiny dots that assemble into a source image (the "M"
 * logo), idle-float in place, and explode outward when the user hovers —
 * then spring back to reassemble the shape.
 *
 * - Mouse + touch support
 * - Theme-aware colors (reads CSS variables from globals.css)
 * - Pauses when scrolled off-screen or when the tab is hidden
 * - devicePixelRatio-aware for crisp rendering
 */

type Particle = {
  // Current position
  x: number;
  y: number;
  // Home position (target on the shape)
  hx: number;
  hy: number;
  // Velocity
  vx: number;
  vy: number;
  // Per-particle idle wobble phase & speed
  phase: number;
  speed: number;
  size: number;
  color: string;
};

// Read a CSS custom property from :root (falls back to dark-theme values)
function readThemeColors(): { accent: string; accent2: string } {
  if (typeof window === "undefined") return { accent: "#7B6FE8", accent2: "#4FC3C3" };
  const style = getComputedStyle(document.documentElement);
  return {
    accent: style.getPropertyValue("--accent").trim() || "#7B6FE8",
    accent2: style.getPropertyValue("--accent-2").trim() || "#4FC3C3",
  };
}

const LOGO_SRC = "/images/mihsan_logo.png";
// Spacing between sampled dots in source-image pixels (lower = more dots)
const SAMPLE_GAP = 4;
// How strongly dots spring back to their home position
const RETURN_FORCE = 0.045;
// Velocity damping (air resistance)
const FRICTION = 0.86;
// Idle wobble amplitude in px
const WOBBLE = 1.4;
// Radius around the pointer (px) in which dots get pushed away
const INTERACT_RADIUS = 90;
const INTERACT_FORCE = 0.35;

type ParticleImageProps = {
  // Tailwind size classes, e.g. "w-64 h-64 sm:w-80 sm:h-80"
  className?: string;
  // Image the dots assemble into (defaults to the M logo)
  src?: string;
};

export default function ParticleImage({
  className = "w-64 h-64 sm:w-80 sm:h-80",
  src = LOGO_SRC,
}: ParticleImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
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

    // ── Sizing ────────────────────────────────────────────────────────
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

    // ── Build particles from the logo image ───────────────────────────
    const buildParticles = () => {
      const { w, h } = sizesRef.current;
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (disposed) return;
        // Draw the logo into an offscreen canvas fitted to the container
        const off = document.createElement("canvas");
        off.width = w;
        off.height = h;
        const octx = off.getContext("2d");
        if (!octx) return;
        const margin = 8;
        const side = Math.min(w, h) - margin * 2;
        const ox = (w - side) / 2;
        const oy = (h - side) / 2;
        octx.drawImage(img, ox, oy, side, side);

        // Sample the logo pixels into a dot grid
        const data = octx.getImageData(0, 0, w, h).data;
        const colors = readThemeColors();
        const particles: Particle[] = [];

        for (let y = 0; y < h; y += SAMPLE_GAP) {
          for (let x = 0; x < w; x += SAMPLE_GAP) {
            const i = (y * w + x) * 4;
            if (data[i + 3] > 128) {
              // Mostly brand purple, with a few teal dots mixed in
              const teal = ((x + y) / SAMPLE_GAP) % 7 < 1;
              particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                hx: x,
                hy: y,
                vx: 0,
                vy: 0,
                phase: Math.random() * Math.PI * 2,
                speed: 0.5 + Math.random() * 1.2,
                size: 0.9 + Math.random() * 0.9,
                color: teal ? colors.accent2 : colors.accent,
              });
            }
          }
        }
        particlesRef.current = particles;
      };
    };

    // ── Interaction ─────────────────────────────────────────────────────
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

    // ── Animation loop ──────────────────────────────────────────────────
    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      if (!visibleRef.current) return;

      const { w, h } = sizesRef.current;
      ctx.clearRect(0, 0, w, h);

      const pointer = pointerRef.current;
      const time = performance.now() / 1000;

      for (const p of particlesRef.current) {
        // Spring back toward home position
        p.vx += (p.hx - p.x) * RETURN_FORCE;
        p.vy += (p.hy - p.y) * RETURN_FORCE;

        // Push dots away from the pointer — the "breaking" effect
        if (pointer.inside) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < INTERACT_RADIUS && dist > 0.01) {
            const force = ((INTERACT_RADIUS - dist) / INTERACT_RADIUS) * INTERACT_FORCE;
            p.vx += (dx / dist) * force * 10;
            p.vy += (dy / dist) * force * 10;
          }
        }

        // Idle wobble so the shape feels alive when untouched
        const wobbleX = Math.cos(time * p.speed + p.phase) * WOBBLE;
        const wobbleY = Math.sin(time * p.speed + p.phase) * WOBBLE;

        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx + (wobbleX - (p.x - p.hx) * 0.02);
        p.y += p.vy + (wobbleY - (p.y - p.hy) * 0.02);

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
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
    buildParticles();
    tick();

    // Rebuild on container size change (responsive breakpoints)
    const resizeObserver = new ResizeObserver(() => {
      resize();
      buildParticles();
    });
    resizeObserver.observe(container);

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
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
      className={`relative cursor-pointer ${className}`}
      aria-label="Interactive particle animation of the Mihsan Alam logo"
      role="img"
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}