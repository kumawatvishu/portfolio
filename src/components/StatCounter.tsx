"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const step = Math.max(1, Math.round(target / 36));
          let cur = 0;
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(timer);
            }
            setValue(cur);
          }, 24);
          io.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
