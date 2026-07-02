"use client";

import type { ReactNode } from "react";
import ChatPanel from "app/components/chat/chat-panel";
import { PersonalizeProvider } from "app/components/chat/personalize-context";
import {
  ChatBubble,
  TypingIndicator,
  FollowupChips,
} from "app/components/chat/chat-bubble";
import TailorOfferButton from "app/components/chat/tailor-offer-button";
import PersonalizeIntake from "app/components/chat/personalize-intake";
import PersonalizedResult from "app/components/chat/personalized-result";
import type { PersonalizeResponse } from "app/lib/personalize-types";

const noop = () => {};

// A labelled frame around each showcased feature, captioned with the source
// file(s) it renders so the audit doubles as a map back to the code.
function Frame({
  title,
  sources,
  note,
  children,
}: {
  title: string;
  sources: string[];
  note?: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        {note && <p className="text-sm text-gray-500 max-w-2xl">{note}</p>}
        <p className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-400 font-mono">
          {sources.map((s) => (
            <code
              key={s}
              className="bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5"
            >
              {s}
            </code>
          ))}
        </p>
      </div>
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 md:p-6">
        {children}
      </div>
    </section>
  );
}

// Mock conversation for the "with history" state.
const MOCK_THREAD: { role: "user" | "assistant"; text: string }[] = [
  {
    role: "user",
    text: "I'm a design lead evaluating you as a potential hire.",
  },
  {
    role: "assistant",
    text: "Glad you're here. I work **end-to-end** — from research through production-ready code — so I can carry an idea from a messy problem all the way to a shipped, accessible interface. Want to dig into a specific project, like [Obran](/project/obran)?",
  },
  { role: "user", text: "How do you approach design systems?" },
  {
    role: "assistant",
    text: "I treat a design system as a **product**, not a sticker sheet: shared tokens, documented components, and tight design-to-code parity so the team moves faster without drifting. The [UMD Libraries design system](/project/umdlib-design-system) is a good example.",
  },
];

// Sample follow-up suggestions (the model emits these per reply via the
// [[FOLLOWUPS]] sentinel; see chat-panel.tsx).
const MOCK_FOLLOWUPS = [
  "How did you keep design and code in sync?",
  "What did adoption look like across teams?",
  "Can I see the components?",
];

export default function AuditGallery({ reco }: { reco: PersonalizeResponse }) {
  return (
    <div className="flex flex-col gap-16">
      {/* 1. Live chat — empty state */}
      <Frame
        title="Chat — empty state (live)"
        note="The real ChatPanel, interactive. Shows the input, suggested questions, and the upfront “Get a portfolio tailored to you” CTA."
        sources={["app/components/chat/chat-panel.tsx"]}
      >
        <PersonalizeProvider>
          <ChatPanel className="max-w-2xl" />
        </PersonalizeProvider>
      </Frame>

      {/* 2. Chat with history */}
      <Frame
        title="Chat — with history"
        note="A conversation in progress: user bubbles, assistant markdown, the model-suggested follow-up chips, the model-offered tailored CTA, and the typing indicator."
        sources={[
          "app/components/chat/chat-bubble.tsx",
          "app/components/chat/tailor-offer-button.tsx",
        ]}
      >
        <div className="max-w-2xl flex flex-col gap-4 px-4 py-5">
          {MOCK_THREAD.map((m, i) => (
            <ChatBubble key={i} role={m.role} text={m.text} />
          ))}
          <FollowupChips items={MOCK_FOLLOWUPS} onSelect={noop} />
          <TailorOfferButton
            variant="inline"
            onClick={noop}
            className="animate-blur-in"
          />
          <TypingIndicator />
        </div>
      </Frame>

      {/* 3. Tailor options (the in-chat entry points) */}
      <Frame
        title="Tailor options in the chat"
        note="The three entry points to the tailored view: the empty-state hero CTA, the model-offered inline CTA, and the compact icon button shown in the input row mid-conversation."
        sources={["app/components/chat/tailor-offer-button.tsx"]}
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              hero
            </span>
            <TailorOfferButton variant="hero" onClick={noop} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              inline
            </span>
            <TailorOfferButton variant="inline" onClick={noop} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              icon
            </span>
            <TailorOfferButton variant="icon" onClick={noop} />
          </div>
        </div>
      </Frame>

      {/* 4. The tailor panel (intake) */}
      <Frame
        title="Tailor panel (intake)"
        note="The full intake form: role, lens, focus, scope, and free-text context. Buttons are inert here."
        sources={["app/components/chat/personalize-intake.tsx"]}
      >
        <div className="max-w-2xl">
          <PersonalizeIntake
            defaultRole="designer"
            language="en"
            busy={false}
            onSubmit={noop}
            onCancel={noop}
          />
        </div>
      </Frame>

      {/* 5. The result */}
      <Frame
        title="Result — tailored section"
        note="The standalone, full-width result as it appears on the homepage (rendered here with sample data)."
        sources={[
          "app/components/chat/personalized-result.tsx",
          "app/components/chat/personalized-view.tsx",
          "app/components/project-card.tsx",
        ]}
      >
        {/* Negative margin to let the full-bleed section fill the dashed frame. */}
        <div className="-m-4 md:-m-6">
          <PersonalizedResult data={reco} onRefine={noop} />
        </div>
      </Frame>
    </div>
  );
}
