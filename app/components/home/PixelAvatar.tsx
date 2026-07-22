"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 24;

// palette: . bg, h hair, s skin, d skin-shadow, e eye, w shirt, c collar-shadow, b brow, m mouth
const PALETTE: Record<string, string> = {
  ".": "#161616",
  h: "#1f1d1b",
  H: "#2e2a26",
  s: "#e6b28a",
  d: "#cf9a72",
  e: "#241f1c",
  w: "#f2f0ec",
  c: "#d8d5cf",
  b: "#33291f",
  m: "#b97a5e",
  g: "#101010",
};

const ROWS = [
  "........................",
  "........hhhhhhhh........",
  "......hhhhhhhhhhhh......",
  ".....hhhHHhhhhHHhhh.....",
  "....hhHHHhhhhhhHHhhh....",
  "....hhHhssssssssHhhh....",
  "....hhsssssssssssshh....",
  "....hsssssssssssssdh....",
  "....hsbbsssssssbbsdh....",
  "....hsessssssssessdh....",
  "....hssssssssssssddh....",
  ".....ssssdssdssssdd.....",
  ".....ssssssssssssdd.....",
  ".....sssssmmmssssd......",
  "......ssssssssssdd......",
  ".......ssssssssdd.......",
  ".......gsssssssg........",
  "......wwcssssdcww.......",
  ".....wwwwcssdcwwww......",
  "....wwwwwwcccwwwwww.....",
  "...wwwwwwwwwwwwwwwww....",
  "...wwwwwwwcwcwwwwwww....",
  "..wwwwwwwwcwcwwwwwwww...",
  "..wwwwwwwwwwwwwwwwwww...",
];

function drawAvatar(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const px = canvas.width / GRID_SIZE;
  ctx.fillStyle = PALETTE["."];
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ROWS.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === ".") continue;
      ctx.fillStyle = PALETTE[ch] ?? PALETTE["."];
      ctx.fillRect(x * px, y * px, px + 0.5, px + 0.5);
    }
  });

  // subtle cyan scanline accent
  ctx.fillStyle = "rgba(34,211,238,0.05)";
  for (let y = 0; y < GRID_SIZE; y += 2) {
    ctx.fillRect(0, y * px, canvas.width, px / 2);
  }
}

export default function PixelAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) drawAvatar(canvasRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3.5">
      <div className="rounded-[14px] border border-[#262626] bg-[#121212] p-3.5 shadow-[0_0_60px_rgba(34,211,238,0.07)]">
        <canvas
          ref={canvasRef}
          width={264}
          height={264}
          role="img"
          aria-label="Pixel-art portrait of Tom"
          className="block h-[264px] w-[264px] rounded-md [image-rendering:pixelated]"
        />
      </div>
      <div className="text-[11px] text-neutral-600">
        tom.png — 24×24, hand-placed pixels
      </div>
    </div>
  );
}
