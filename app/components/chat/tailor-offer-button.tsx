"use client";

import { RiSparkling2Fill } from "react-icons/ri";
import { LuCornerDownRight } from "react-icons/lu";

// The in-chat entry points to the tailored portfolio view:
// - "hero":   large CTA in the empty state.
// - "inline": the model-offered CTA that appears mid-conversation.
// - "icon":   compact persistent button in the input row during a conversation.
type Variant = "hero" | "inline" | "icon";

export default function TailorOfferButton({
  variant,
  onClick,
  className = "",
}: {
  variant: Variant;
  onClick?: () => void;
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Get a portfolio tailored to you"
        title="Get a portfolio tailored to you"
        className={`rounded-xl border border-gray-200 px-2.5 py-1.5 min-h-[2rem] text-gray-800 hover:text-white hover:bg-gray-600 duration-200 hover:border-gray-600 transition-colors ${className}`}
      >
        <RiSparkling2Fill size={15} />
      </button>
    );
  }

  const label =
    variant === "hero"
      ? "Get a portfolio tailored to you"
      : "Show me a tailored portfolio";

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center gap-1 text-sm font-semibold text-blue-500 hover:text-blue-600 ease-in-out duration-200 transition-colors cursor-pointer ${className}`}
      >
        <LuCornerDownRight />
        {label}
        <RiSparkling2Fill size={15} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 self-start rounded-xl bg-blue-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-600 ease-in-out duration-200 transition-colors ${className}`}
    >
      <RiSparkling2Fill size={15} />
      {label}
    </button>
  );
}
