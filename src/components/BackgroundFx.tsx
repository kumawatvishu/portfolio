"use client";

import { useEffect, useRef } from "react";

type Line = { y: number; speed: number; amp: number; freq: number; color: string; width: number };

const LINES: Line[] = [
  { y: 0.16, speed: 0.5, amp: 12, freq: 0.012, color: "rgba(56,225,198,0.28)", width: 1.3 },
  { y: 0.4, speed: 0.32, amp: 20, freq: 0.008, color: "rgba(56,225,198,0.13)", width: 1 },
];

export default function BackgroundFx() {
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let t = 0;
    let raf = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      LINES.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        const baseY = height * line.y;
        for (let x = 0; x <= width; x += 4) {
          const spike = Math.sin(x * 0.02 + t * line.speed) > 0.97 ? Math.sin(t * 8 + x) * line.amp * 2 : 0;
          const y = baseY + Math.sin(x * line.freq + t * line.speed) * line.amp + spike;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      t += 0.018;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="glow" ref={glowRef} />
      <canvas id="pulseCanvas" ref={canvasRef} />
    </>
  );
}
