// Client-safe module (no `fs`, no server-only imports) so the chat UI can
// import the role type + prompt chips directly. `ChatRole` is defined here as
// the single source of truth; the server-only system-prompt builder imports it
// from here (never the reverse) to avoid pulling server code into the bundle.

export type ChatRole = "pm" | "designer" | "engineer";

export type ChatLanguage = "en" | "zh";

// Three universal starters (no role selection). Process- and craft-forward to
// open a substantive conversation for any visitor.
export const SUGGESTED_QUESTIONS: string[] = [
  "Walk me through your design process.",
  "How do you approach an ambiguous problem?",
  "How do you handle feedback?",
];
