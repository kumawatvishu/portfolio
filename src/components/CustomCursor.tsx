"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Actual mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // Smoothed cursor position
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // Linear interpolation (lerp) for smooth movement
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.2;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "black",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
