// Client-safe module (no `fs`, no server-only imports). Single source of truth
// for the personalize intake's option ids/labels and the response shapes shared
// between the /api/personalize route and the chat UI. The route narrows these
// ids into zod enums; the UI renders them as option chips.
import type { ChatRole, ChatLanguage } from "./suggested-questions";

// Each option carries an English (`label`) and Traditional Chinese (`labelZh`)
// label so the intake form can render in whichever reply language is active.
export const VISITOR_ROLE_OPTIONS = [
  { id: "pm", label: "PM", labelZh: "產品經理" },
  { id: "designer", label: "Designer", labelZh: "設計師" },
  { id: "engineer", label: "Engineer", labelZh: "工程師" },
  { id: "recruiter", label: "Recruiter", labelZh: "招募人員" },
  { id: "founder", label: "Founder / Exec", labelZh: "創辦人 / 主管" },
] as const;

export const LENS_OPTIONS = [
  { id: "coworker", label: "As a coworker", labelZh: "以同事身分" },
  { id: "manager", label: "As my manager", labelZh: "以我主管的身分" },
  { id: "report", label: "As my report", labelZh: "以我下屬的身分" },
  { id: "other", label: "Other", labelZh: "其他" },
] as const;

export const FOCUS_OPTIONS = [
  { id: "research", label: "Research depth", labelZh: "研究深度" },
  { id: "craft", label: "Interaction craft", labelZh: "互動細節" },
  { id: "systems", label: "Design systems", labelZh: "設計系統" },
  { id: "strategy", label: "Product strategy", labelZh: "產品策略" },
  { id: "delivery", label: "Shipping & delivery", labelZh: "交付與落地" },
  { id: "other", label: "Other", labelZh: "其他" },
] as const;

export const SCOPE_OPTIONS = [
  { id: "ic", label: "Hands-on IC craft", labelZh: "親自動手的執行" },
  { id: "lead", label: "Lead / mentor scope", labelZh: "帶領 / 指導範疇" },
  { id: "strategic", label: "Strategic / 0→1", labelZh: "策略 / 0→1" },
  { id: "any", label: "No preference", labelZh: "沒有偏好" },
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
