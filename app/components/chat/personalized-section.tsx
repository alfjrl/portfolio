"use client";

import { useEffect, useRef } from "react";
import PersonalizedResult from "app/components/chat/personalized-result";
import { usePersonalize } from "app/components/chat/personalize-context";

// Standalone, full-width results section wired to the personalize context.
// Renders nothing until the visitor has a tailored view, then scrolls into view.
export default function PersonalizedSection() {
  const { phase, reco, refine } = usePersonalize();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "result" && reco) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [phase, reco]);

  if (!reco) return null;

  return (
    <div ref={ref} id="tailored-for-you" className="scroll-mt-20">
      <PersonalizedResult data={reco} onRefine={refine} />
    </div>
  );
}
