// Client-safe module (no `fs`, no server-only imports). Single source of truth
// for the personalize intake's option ids/labels and the response shapes shared
// between the /api/personalize route and the chat UI. The route narrows these
// ids into zod enums; the UI renders them as option chips.
import type { ChatRole, ChatLanguage } from "./suggested-questions";

// Each option carries an English (`label`) and Traditional Chinese (`labelZh`)
// label so the intake form can render in whichever reply language is active.
export const VISITOR_ROLE_OPTIONS = [
  { id: "pm", label: "PM", labelZh: "產品經理" },
  { id: "designer", label: "Designer", labelZh: "產品設計師" },
  { id: "engineer", label: "Engineer", labelZh: "工程師" },
  { id: "recruiter", label: "Recruiter", labelZh: "人資" },
  { id: "founder", label: "Founder / Exec", labelZh: "創辦人 / 主管" },
] as const;

// Labels read as the completion of a conversational stem in the intake form
// (e.g. "I'm your coworker", "I want to see your research depth"), so they're
// lowercase bare phrases. Only the *id* is sent to /api/personalize — these
// labels are UI-only — so rewording them never touches the prompt.
export const LENS_OPTIONS = [
  { id: "coworker", label: "coworker", labelZh: "同事" },
  { id: "manager", label: "manager", labelZh: "主管" },
  { id: "report", label: "report", labelZh: "下屬" },
  { id: "other", label: "Other", labelZh: "其他" },
] as const;

export const FOCUS_OPTIONS = [
  { id: "research", label: "user research", labelZh: "user research" },
  { id: "craft", label: "interaction design", labelZh: "interaction design" },
  { id: "systems", label: "design systems", labelZh: "design systems" },
  { id: "strategy", label: "product strategy", labelZh: "product strategy" },
  {
    id: "delivery",
    label: "shipping & delivery",
    labelZh: "shipping & delivery",
  },
  { id: "other", label: "Other", labelZh: "其他" },
] as const;

export const SCOPE_OPTIONS = [
  { id: "ic", label: "hands-on IC craft", labelZh: "親自動手的執行" },
  { id: "lead", label: "lead & mentor scope", labelZh: "帶領 / 指導範疇" },
  { id: "strategic", label: "strategic 0→1", labelZh: "策略 / 0→1" },
  { id: "any", label: "any scope", labelZh: "任何範疇" },
  { id: "other", label: "Other", labelZh: "其他" },
] as const;

export type LensId = (typeof LENS_OPTIONS)[number]["id"];
export type FocusId = (typeof FOCUS_OPTIONS)[number]["id"];
export type ScopeId = (typeof SCOPE_OPTIONS)[number]["id"];

export type IntakeInput = {
  // role drives the existing roleEmphasis() in the system prompt.
  role: ChatRole;
  language: ChatLanguage;
  visitorRole?: string; // chip id OR free text (Q1)
  lens: LensId; // relationship lens (Q2)
  lensNote?: string;
  focus: FocusId; // which ability to foreground (Q3)
  focusNote?: string;
  scope: ScopeId; // seniority / scope (Q4)
  scopeNote?: string;
  context?: string; // free-text context (Q5)
};

export type PersonalizedCard = {
  slug: string;
  href: string;
  title: string;
  cardDescription: string;
  coverImage: string;
  reason: string; // markdown with **bold** key phrases
};

export type PersonalizeResponse = {
  about: string;
  picks: PersonalizedCard[]; // exactly 3, all real projects
};
