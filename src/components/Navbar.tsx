"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const pillRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [ready, setReady] = useState(false);

  const positionPill = () => {
    const active = NAV_LINKS.find((l) => l.href === pathname) ?? NAV_LINKS[0];
    const link = linkRefs.current[active.href];
    const pill = pillRef.current;
    if (!link || !pill) return;
    pill.style.transform = `translateX(${link.offsetLeft - 5}px)`;
    pill.style.width = `${link.offsetWidth}px`;
  };

  useLayoutEffect(() => {
    positionPill();
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("resize", positionPill);
    return () => window.removeEventListener("resize", positionPill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="brand">
          <span className="dot" />
          bhanwar.dev
        </Link>
        <div className="navlinks">
          <div id="nav-pill" ref={pillRef} style={{ opacity: ready ? 1 : 0 }} />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[link.href] = el;
              }}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="navright">
          <a href={PROFILE.github} target="_blank" rel="noopener" className="nav-icon" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.03 3.26 9.29 7.79 10.8.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.17.69-3.84-1.53-3.84-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.18-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener" className="nav-icon" aria-label="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <Link href="/contact" className="navcta">
            Get in touch →
          </Link>
        </div>
      </div>
    </nav>
  );
}
