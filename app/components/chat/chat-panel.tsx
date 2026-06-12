"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { FiArrowUp } from "react-icons/fi";
import { LuCornerDownRight } from "react-icons/lu";
import {
  SUGGESTED_QUESTIONS,
  type ChatRole,
  type ChatLanguage,
} from "app/lib/suggested-questions";
import PersonalizeIntake from "app/components/chat/personalize-intake";
import {
  ChatBubble,
  TypingIndicator,
  FollowupChips,
} from "app/components/chat/chat-bubble";
import TailorOfferButton from "app/components/chat/tailor-offer-button";
import {
  usePersonalize,
  CHAT_ANCHOR_ID,
} from "app/components/chat/personalize-context";

type ChatPanelProps = {
  className?: string;
  initialRole?: ChatRole;
  onClose?: () => void;
  style?: CSSProperties;
};

const RATE_LIMITED = "RATE_LIMITED";

// Sentinel the chat model may emit (see system-prompt.ts PERSONALIZE_HINT) to
// offer the personalized portfolio view. Stripped before rendering; presence on
// the latest assistant message surfaces a CTA.
const OFFER = "[[OFFER_PERSONALIZED]]";

// Sentinel the model ends every reply with (see system-prompt.ts FOLLOWUPS_HINT):
// `[[FOLLOWUPS]] q1? | q2? | q3?`. Stripped from the visible text; the items
// become clickable chips under the latest reply.
const FOLLOWUPS_RE = /\[\[FOLLOWUPS\]\]\s*(.*)$/m;

// Pick the reply language from the visitor's own message: any CJK characters
// mean we answer in Traditional Chinese (we never reply in Simplified, even if
// they wrote Simplified); otherwise English.
const CJK_RE = /[㐀-鿿豈-﫿]/;
function detectLanguage(text: string): ChatLanguage {
  return CJK_RE.test(text) ? "zh" : "en";
}

function messageText(message: { parts: { type: string; text?: string }[] }) {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

// Strip both sentinels from a reply for display.
function displayText(text: string) {
  return text.replace(OFFER, "").replace(FOLLOWUPS_RE, "").trimEnd();
}

// Pull the suggested follow-ups (if any) out of an assistant reply.
function parseFollowups(text: string): string[] {
  const match = text.match(FOLLOWUPS_RE);
  if (!match) return [];
  return match[1]
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 3);
}

export default function ChatPanel({
  className = "",
  initialRole = "designer",
  onClose,
  style,
}: ChatPanelProps) {
  const [role] = useState<ChatRole>(initialRole);
  const [language, setLanguage] = useState<ChatLanguage>("en");
  const [input, setInput] = useState("");

  // Personalized portfolio flow lives in shared context so the intake (here) and
  // the standalone results section (elsewhere on the page) stay in sync.
  const { phase, open, cancel, submit } = usePersonalize();

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    // Reply in the language the visitor wrote in; reflect it on the button too.
    const lang = detectLanguage(trimmed);
    setLanguage(lang);
    sendMessage({ text: trimmed }, { body: { role, language: lang } });
    setInput("");
  };

  const rateLimited = error?.message === RATE_LIMITED;
  const isEmpty = messages.length === 0;

  // The intake form shows in the chat for these phases (its result lands in the
  // standalone section). "idle"/"result" mean nothing is open here.
  const intakeOpen =
    phase === "intake" ||
    phase === "loading" ||
    phase === "error" ||
    phase === "ratelimited";

  // Offer the tailored view when the model's latest reply carries the sentinel.
  const lastAssistant = [...messages].reverse().find((m) => m.role !== "user");
  const lastAssistantText = lastAssistant ? messageText(lastAssistant) : "";
  const showOfferCta = phase === "idle" && lastAssistantText.includes(OFFER);

  // Suggested follow-ups from the latest reply — shown as chips once it's done
  // streaming so the visitor has a one-tap way to keep the conversation going.
  const followups =
    !isBusy && !intakeOpen ? parseFollowups(lastAssistantText) : [];

  // Shared input form. Sits on top while empty (border below it), then drops to
  // the bottom once the conversation starts (border above it).
  const formEl = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send(input);
      }}
      className={`input-box p-3 flex items-end gap-2 rounded-2xl bg-white`}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isEmpty ? "Ask me everything!" : "What is on your mind?"}
        className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none border-none"
      />
      {/* Persistent entry to the tailored view during a conversation (the
          empty state has its own larger CTA). */}
      {!isEmpty && phase === "idle" && (
        <TailorOfferButton variant="icon" onClick={open} />
      )}
      {/* Reply-language button. Tap to switch manually; it also auto-updates to
          match the language the visitor writes in (detected on send). */}
      <button
        type="button"
        onClick={() => setLanguage((l) => (l === "en" ? "zh" : "en"))}
        aria-label={`Reply language: ${
          language === "en" ? "English" : "Traditional Chinese"
        }. Tap to switch.`}
        title="Switch reply language"
        className="rounded-xl border border-gray-200 px-2.5 py-1.5 text-xs min-h-[2rem] font-bold text-gray-700 hover:text-white hover:bg-gray-900 hover:border-gray-900 duration-200 transition-colors"
      >
        {language === "en" ? "EN" : "中"}
      </button>
      {isBusy ? (
        <button
          type="button"
          onClick={stop}
          className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:text-black"
        >
          Stop
        </button>
      ) : (
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send message"
          className="rounded-xl bg-blue-500 p-2 text-white disabled:opacity-60 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <FiArrowUp size={16} />
        </button>
      )}
    </form>
  );

  return (
    <div
      id={CHAT_ANCHOR_ID}
      className={`flex flex-col scroll-mt-20 ${
        isEmpty ? "pb-8" : "p-4 border border-gray-200 bg-white"
      } ${className}`}
      style={style}
    >
      {/* Compact chat panel — its own bounded, scrollable height. */}
      <div className={`flex flex-col max-h-[24rem] ${isEmpty ? "" : ""}`}>
        {isEmpty ? (
          /* empty state: input on top, suggested questions right beneath it */
          <>
            {formEl}
            <div className="animate-blur-in flex flex-col gap-4 px-4 py-5">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="text-sm text-gray-700 hover:text-black transition-colors text-left flex flex-row items-center gap-1 cursor-pointer"
                >
                  <LuCornerDownRight />
                  {q}
                </button>
              ))}
              {phase === "idle" && (
                <TailorOfferButton variant="hero" onClick={open} className="" />
              )}
            </div>
          </>
        ) : (
          /* conversation: messages scroll above, input drops to the bottom */
          <>
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 min-h-[18rem]"
            >
              {messages.map((m) => (
                <ChatBubble
                  key={m.id}
                  role={m.role === "user" ? "user" : "assistant"}
                  text={
                    m.role === "user"
                      ? messageText(m)
                      : displayText(messageText(m))
                  }
                />
              ))}

              {showOfferCta && (
                <TailorOfferButton
                  variant="inline"
                  onClick={open}
                  className="animate-blur-in"
                />
              )}

              <FollowupChips items={followups} onSelect={send} />

              {status === "submitted" && <TypingIndicator />}

              {error && (
                <div className="rounded-md border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700">
                  {rateLimited
                    ? "This has been a great, long chat — thanks for sticking around! We've hit today's message limit, but if you'd like to know more, I'd love to hear from you directly at alfred.jr.lin@gmail.com."
                    : "Something went wrong on my end. Please try again in a moment."}
                </div>
              )}
            </div>

            {formEl}
          </>
        )}
      </div>

      {/* Intake form — starts the customization right here in the chat. The
          result lands in the standalone <PersonalizedSection /> on the page. */}
      {intakeOpen && (
        <div className="mt-8 border-t border-gray-200 pt-8">
          <PersonalizeIntake
            defaultRole={role}
            language={language}
            busy={phase === "loading"}
            onSubmit={submit}
            onCancel={cancel}
          />
          {(phase === "error" || phase === "ratelimited") && (
            <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700">
              {phase === "ratelimited"
                ? "We've hit today's limit for tailored views — but I'd love to hear from you directly at alfred.jr.lin@gmail.com."
                : "Something went wrong putting that together. Please try again in a moment."}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
