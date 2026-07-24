"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let st = 0;
    let raf = 0;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(56,225,198,0.5)";
      ctx.lineWidth = 2;
      const baseY = canvas.height * 0.5;
      for (let x = 0; x <= canvas.width; x += 4) {
        const spike = Math.sin(x * 0.03 + st) > 0.965 ? Math.sin(st * 10 + x) * 30 : 0;
        const y = baseY + Math.sin(x * 0.02 + st) * 10 + spike;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      st += 0.025;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
