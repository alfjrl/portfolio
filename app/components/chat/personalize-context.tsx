"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type {
  IntakeInput,
  PersonalizeResponse,
} from "app/lib/personalize-types";

// Shared state so the chat intake (in the hero) and the standalone results
// section (lower on the page) can coordinate without being DOM siblings.
type Phase =
  | "idle" // nothing shown
  | "intake" // intake form open in the chat
  | "loading" // request in flight
  | "error" // request failed
  | "ratelimited" // hit the daily cap
  | "result"; // a tailored view is available

type PersonalizeContextValue = {
  phase: Phase;
  reco: PersonalizeResponse | null;
  open: () => void;
  cancel: () => void;
  refine: () => void;
  submit: (intake: IntakeInput) => Promise<void>;
};

const PersonalizeContext = createContext<PersonalizeContextValue | null>(null);

// Anchor id on the chat panel so the results section can scroll back to it.
export const CHAT_ANCHOR_ID = "ask-alfred";

export function PersonalizeProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reco, setReco] = useState<PersonalizeResponse | null>(null);

  const open = useCallback(() => setPhase("intake"), []);

  // Cancelling returns to the prior result if one exists, else to idle.
  const cancel = useCallback(
    () => setPhase((p) => (reco ? "result" : "idle")),
    [reco],
  );

  // Refine reopens the intake but keeps the current result visible, and scrolls
  // the visitor back up to the chat where the form lives.
  const refine = useCallback(() => {
    setPhase("intake");
    if (typeof document !== "undefined") {
      document
        .getElementById(CHAT_ANCHOR_ID)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const submit = useCallback(async (intake: IntakeInput) => {
    setPhase("loading");
    try {
      const res = await fetch("/api/personalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(intake),
      });
      if (res.status === 429) {
        setPhase("ratelimited");
        return;
      }
      if (!res.ok) {
        setPhase("error");
        return;
      }
      const data = (await res.json()) as PersonalizeResponse;
      setReco(data);
      setPhase("result");
    } catch {
      setPhase("error");
    }
  }, []);

  return (
    <PersonalizeContext.Provider
      value={{ phase, reco, open, cancel, refine, submit }}
    >
      {children}
    </PersonalizeContext.Provider>
  );
}

export function usePersonalize(): PersonalizeContextValue {
  const ctx = useContext(PersonalizeContext);
  if (!ctx) {
    throw new Error("usePersonalize must be used within a PersonalizeProvider");
  }
  return ctx;
}
