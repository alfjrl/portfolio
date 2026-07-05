import type { Metadata } from "next";
import ChatPanel from "app/components/chat/chat-panel";
import { PersonalizeProvider } from "app/components/chat/personalize-context";
import PersonalizedSection from "app/components/chat/personalized-section";

export const metadata: Metadata = {
  title: "Ask Alfred",
  description:
    "Chat with an AI version of Alfred about his work, projects, and design process.",
};

export default function ChatPage() {
  return (
    <PersonalizeProvider>
      <section>
        <div className="max-w-[1280px] w-full md:mx-auto border-x border-line">
          <div className="px-4 py-16 md:py-24">
            <div className="md:px-24">
              <h1 className="text-3xl md:text-4xl font-serif mb-3 text-ink">
                Ask me anything about my work.
              </h1>
              <p className="text-muted mb-8 md:text-lg">
                A chat trained on my portfolio — projects, process, and
                background. Choose the lens that fits you and start asking.
              </p>
              <ChatPanel className="max-w-2xl" />
            </div>
          </div>
        </div>
        {/* Tailored results populate here once generated. */}
        <PersonalizedSection />
      </section>
    </PersonalizeProvider>
  );
}
