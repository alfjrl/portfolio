"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

export default function HeroHeadline({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animate only when motion is OK.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(ref.current!, {
          type: "lines",
          // Stable class on each line so the generated mask wrappers get a
          // matching `.hero-line-mask` class (GSAP suffixes "-mask"). CSS uses
          // that to give descenders (the "g") room inside the clip box.
          linesClass: "hero-line",
          // mask:"lines" wraps each line in its own overflow:clip element — the
          // mask each line rises out from. Needed here because the lines move
          // (a line can't clip itself), so we don't hand-roll overflow:hidden.
          mask: "lines",
          autoSplit: true, // re-split on resize + after the webfont loads
          aria: "auto", // keep the full sentence readable to screen readers
          onSplit(self) {
            gsap.set(ref.current, { autoAlpha: 1 }); // reveal once split
            // Returning the tween lets autoSplit revert + recreate it (and
            // preserve progress) on each re-split.
            return gsap.from(self.lines, {
              yPercent: 100, // start fully below the line's mask
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.08,
            });
          },
        });

        return () => split.revert();
      });

      // Reduced motion / fallback: no animation, just show the text.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { autoAlpha: 1 });
      });
    },
    { scope: ref },
  );

  return (
    // <h1 ref={ref} className={`hero-reveal ${className}`}>
    //   I'm Alfred, a product designer who{" "}
    //   <span className="italic">engineers</span>.
    // </h1>
    <h1 ref={ref} className={`hero-reveal ${className}`}>
      I'm Alfred, a <span className="italic">data-driven</span> product
      designer.
    </h1>
  );
}
