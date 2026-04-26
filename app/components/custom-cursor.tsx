"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const elRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [phase, setPhase] = useState<"hidden" | "dot" | "expanded">("hidden");
  const [label, setLabel] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (phase === "hidden") return;
    setPhase("dot");
    hideTimer.current = setTimeout(() => setPhase("hidden"), 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const move = (x: number, y: number) => {
      el.style.left = `${x + 12}px`;
      el.style.top = `${y - 14}px`;
    };

    const onMove = (e: MouseEvent) => move(e.clientX, e.clientY);

    const onExpand = (e: Event) => {
      const { label: lbl, x, y } = (
        e as CustomEvent<{ label: string; x: number; y: number }>
      ).detail;
      if (hideTimer.current) clearTimeout(hideTimer.current);
      move(x, y);
      setLabel(lbl);
      setPhase("dot");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase("expanded")),
      );
    };

    const onCollapse = () => {
      setPhase("dot");
      hideTimer.current = setTimeout(() => setPhase("hidden"), 280);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("cursor:expand", onExpand);
    window.addEventListener("cursor:collapse", onCollapse);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("cursor:expand", onExpand);
      window.removeEventListener("cursor:collapse", onCollapse);
    };
  }, []);

  const isExpanded = phase === "expanded";
  const isHidden = phase === "hidden";

  return (
    <div
      ref={elRef}
      className="cursor-tag"
      style={{
        maxWidth: isExpanded ? "200px" : "10px",
        height: isExpanded ? "28px" : "10px",
        paddingLeft: isExpanded ? "12px" : "0",
        paddingRight: isExpanded ? "12px" : "0",
        opacity: isHidden ? 0 : 1,
        overflow: "hidden",
        background: "black",
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        transition:
          "max-width 0.25s ease, height 0.25s ease, padding-left 0.25s ease, padding-right 0.25s ease, opacity 0.15s ease",
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: "12px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.15s ease 0.1s",
          userSelect: "none",
        }}
      >
        {label}
      </span>
    </div>
  );
}
