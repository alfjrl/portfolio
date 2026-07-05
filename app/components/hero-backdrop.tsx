"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed dot field behind the nav + hero. A faint static base layer plus a
 * brighter layer that's revealed in a soft spotlight around the cursor and
 * eases out when the pointer leaves. Height is measured to reach from the top
 * of the page (behind the sticky nav) down to the bottom of the hero (#hero);
 * the CSS mask fades the field out before that edge so there's no hard seam.
 */
export default function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  // Size the field to cover nav + hero.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const measure = () =>
      setHeight(hero.getBoundingClientRect().bottom + window.scrollY);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(hero);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Cursor spotlight: brighten dots near the pointer, ease out when it leaves.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return; // coalesce to one update per frame
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
        if (inside) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y}px`);
          el.style.setProperty("--spot", "1");
        } else {
          el.style.setProperty("--spot", "0");
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hero-backdrop pointer-events-none absolute top-0 left-0 w-full -z-10"
      style={height ? { height } : undefined}
    >
      <div className="hero-dots-base" />
      <div className="hero-dots-spot" />
    </div>
  );
}
