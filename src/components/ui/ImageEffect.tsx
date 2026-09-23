"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ImageEffect({
  src,
  alt = "",
  width = 320,
  height = 320,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let mouseX = 0,
      mouseY = 0,
      cx = 0,
      cy = 0;

    function onMove(e: MouseEvent) {
      const node = containerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }

    function onLeave() {
      mouseX = 0;
      mouseY = 0;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }

    function update() {
      rafId = null;
      cx += (mouseX - cx) * 0.12;
      cy += (mouseY - cy) * 0.12;
      const rotateX = -cy * 8;
      const rotateY = cx * 8;
      const translateX = cx * 8;
      const translateY = cy * 6;
      if (imgRef.current) {
        imgRef.current.style.transform = `perspective(900px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        imgRef.current.style.transition = "transform 0.06s linear";
      }
    }

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className} will-change-transform`}>
      <div ref={imgRef} className="rounded-lg overflow-hidden shadow-lg">
        <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            mixBlendMode: "overlay",
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.20) 100%)",
          }}
        />
      </div>
    </div>
  );
}
