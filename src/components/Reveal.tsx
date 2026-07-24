"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}
