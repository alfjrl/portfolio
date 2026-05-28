// Client-safe module (no `fs`, no server-only imports) so the chat UI can
// import the role type + prompt chips directly. `ChatRole` is defined here as
// the single source of truth; the server-only system-prompt builder imports it
// from here (never the reverse) to avoid pulling server code into the bundle.

export type ChatRole = "pm" | "designer" | "engineer";

export const ROLES: { id: ChatRole; label: string }[] = [
  { id: "pm", label: "PM" },
  { id: "designer", label: "Designer" },
  { id: "engineer", label: "Engineer" },
];

export const SUGGESTED_QUESTIONS: Record<ChatRole, string[]> = {
  pm: [
    "How do you prioritize when everything feels urgent?",
    "Tell me about your PM work at Hyena.",
    "How do you measure the impact of your design work?",
    "How do you partner with engineering and stakeholders?",
  ],
  designer: [
    "Walk me through your work at UMD Libraries.",
    "How do you approach accessibility?",
    "What does your design process look like end-to-end?",
    "What's a project you're most proud of?",
  ],
  engineer: [
    "What's your front-end stack?",
    "How do you go from design to production code?",
    "Tell me about a project you built end-to-end.",
    "How do you handle technical constraints in design?",
  ],
};
