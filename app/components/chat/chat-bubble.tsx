"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LuCornerDownRight } from "react-icons/lu";

// One chat message. User turns are dark right-aligned bubbles; assistant turns
// are left-aligned markdown. Shared by the live ChatPanel and the design audit
// gallery so both reflect the same markup.
export function ChatBubble({
  role,
  text,
}: {
  role: "user" | "assistant";
  text: string;
}) {
  if (role === "user") {
    return (
      <div className="animate-blur-in flex justify-end">
        <div className="max-w-[85%] rounded-md bg-blue-500 text-white px-3.5 py-2 text-sm">
          {text}
        </div>
      </div>
    );
  }
  return (
    <div className="animate-blur-in flex justify-start">
      <div className="chat-markdown max-w-[85%] text-gray-900 text-sm">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

// Suggested follow-up questions rendered as clickable chips beneath the latest
// reply. The model emits them via a sentinel (see chat-panel.tsx); shared here
// so the live ChatPanel and the audit gallery render identical markup.
export function FollowupChips({
  items,
  onSelect,
}: {
  items: string[];
  onSelect: (question: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <div className="animate-blur-in flex flex-col gap-4">
      {items.map((q) => (
        <button
          key={q}
          type="button"
          onClick={() => onSelect(q)}
          className="text-sm text-gray-500 hover:text-black transition-colors text-left flex flex-row items-center gap-1 cursor-pointer"
        >
          <LuCornerDownRight />
          {q}
        </button>
      ))}
    </div>
  );
}

// The "Alfred is typing" three-dot indicator.
export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 text-gray-400">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce" />
    </div>
  );
}
