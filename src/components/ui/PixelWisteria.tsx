"use client";
import React, { useEffect, useRef } from "react";

interface PixelWisteriaProps {
  size?: number; // final display size in px
  pixels?: number; // pixel-art resolution (square)
}

// A small red wisteria-like cluster rendered as pixel art onto a canvas.
export default function PixelWisteria({ size = 320, pixels = 24 }: PixelWisteriaProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const cols = pixels;
    const rows = pixels;
    const scale = Math.max(1, Math.floor(size / pixels));
    canvas.width = cols * scale;
    canvas.height = rows * scale;
    canvas.style.width = `${cols * scale}px`;
    canvas.style.height = `${rows * scale}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Disable smoothing for crisp pixelated look
    // @ts-ignore
    ctx.imageSmoothingEnabled = false;

    // Simple pixel-art map: characters map to colors
    // We'll draw a stylized hanging wisteria cluster centered on the canvas
    const palette: Record<string, string> = {
      ".": "#0b0d0f", // background (transparent look)
      "1": "#2b0b10", // deep maroon (shadow)
      "2": "#7f1f2d", // main crimson
      "3": "#b11226", // bright red highlight
      "4": "#d98a92", // light petal
      "5": "#3b1a22", // stem/branch
    };

    // Pixel map (24x24) - stylized cluster, '.' is background
    const map = [
      ".......................",
      ".......................",
      ".........11...........",
      ".........1221.........",
      "........12321.........",
      ".......123321.........",
      "......12233321........",
      ".....1123333321.......",
      "....112333333321......",
      "...11333333333321.....",
      "...123333333333321....",
      "..12333333333333321...",
      "..123333333333333321..",
      ".1122333333333333321..",
      ".1122333333333333321..",
      "...112233333333221....",
      "....112233333221.....",
      ".....115552221.......",
      "......1555221........",
      ".......15521.........",
      "........551..........",
      ".........5...........",
      ".....................",
      ".....................",
    ];

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++) {
      const row = map[y] || "".padEnd(cols, ".");
      for (let x = 0; x < cols; x++) {
        const ch = row.charAt(x) || ".";
        const color = palette[ch] || palette["."];
        if (ch === ".") continue; // leave background transparent-ish
        ctx.fillStyle = color;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
  }, [size, pixels]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Pixel-art red wisteria"
      style={{
        imageRendering: "pixelated",
        display: "block",
      }}
    />
  );
}
