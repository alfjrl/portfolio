"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowUp, FiX } from "react-icons/fi";
import {
  ROLES,
  SUGGESTED_QUESTIONS,
  type ChatRole,
} from "app/lib/suggested-questions";

type ChatPanelProps = {
  className?: string;
  initialRole?: ChatRole;
  onClose?: () => void;
};

const RATE_LIMITED = "RATE_LIMITED";

function messageText(message: { parts: { type: string; text?: string }[] }) {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function ChatPanel({
  className = "",
  initialRole = "designer",
  onClose,
}: ChatPanelProps) {
  const [role, setRole] = useState<ChatRole>(initialRole);
  const [input, setInput] = useState("");

  // Detect the 429 (non-stream JSON) here so the UI can show a friendly notice.
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        fetch: async (input, init) => {
          const res = await fetch(input, init);
          if (res.status === 429) throw new Error(RATE_LIMITED);
          return res;
        },
      }),
    [],
  );

  const { messages, sendMessage, status, error, stop } = useChat({ transport });

  const isBusy = status === "submitted" || status === "streaming";
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed }, { body: { role } });
    setInput("");
  };

  const rateLimited = error?.message === RATE_LIMITED;
  const isEmpty = messages.length === 0;

  return (
    <div
      className={`flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden ${className}`}
    >
      {/* header: status + role selector */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
          <span className="relative inline-flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
          Ask Alfred
        </span>

        <div className="flex items-center gap-1.5">
          <div className="flex rounded-md border border-gray-200 p-0.5">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                  role === r.id
                    ? "bg-emerald-500 text-white"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close chat"
              className="p-1.5 text-gray-400 hover:text-black"
            >
              <FiX size={18} />
            </button>
          )}
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 min-h-[18rem]">
        {isEmpty ? (
          <div className="animate-blur-in">
            <p className="font-serif text-xl text-gray-900 mb-1">
              Hi, I'm Alfred. Ask me about my work.
            </p>
            <p className="text-sm text-gray-500 mb-5">
              Pick a lens above and tap a question to start.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS[role].map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`animate-blur-in flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {m.role === "user" ? (
                <div className="max-w-[85%] rounded-md bg-gray-900 text-white px-3.5 py-2 text-sm">
                  {messageText(m)}
                </div>
              ) : (
                <div className="chat-markdown max-w-[85%] text-gray-700 text-sm">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {messageText(m)}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          ))
        )}

        {status === "submitted" && (
          <div className="flex items-center gap-1 text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" />
          </div>
        )}

        {error && (
          <div className="rounded-md border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-600">
            {rateLimited
              ? "You've reached today's message limit — thanks for the interest! Reach me directly at alfred.jr.lin@gmail.com."
              : "Something went wrong on my end. Please try again in a moment."}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="border-t border-gray-200 p-3 flex items-end gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my work…"
          className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
        {isBusy ? (
          <button
            type="button"
            onClick={stop}
            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-black"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="rounded-md bg-emerald-500 p-2 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-600 transition-colors"
          >
            <FiArrowUp size={16} />
          </button>
        )}
      </form>
    </div>
  );
}
