// Pure function (no fs) — receives the grounding context as an argument, mirroring
// system-prompt.ts. Builds the system message for the /api/personalize structured
// generation: tailor an "about" blurb + pick 3 projects with reasons.
import { PERSONA, languageRule } from "./system-prompt";
import type { IntakeInput } from "./personalize-types";

function lensGuidance(lens: IntakeInput["lens"], note?: string): string {
  const base = {
    coworker: "They're sizing me up as a potential coworker — a peer they'd collaborate with day to day.",
    manager: "They're evaluating me as someone they might hire and manage — focus on how I'd fit and grow on a team.",
    report: "They're imagining me as their manager or lead — focus on how I guide, mentor, and set direction.",
    other: "They're evaluating me in some other capacity.",
  }[lens];
  return note ? `${base} They added: "${note}"` : base;
}

function focusGuidance(focus: IntakeInput["focus"], note?: string): string {
  const base = {
    research: "Foreground research depth: how I learn from users and turn findings into decisions.",
    craft: "Foreground interaction craft: the quality and detail of the interfaces I design and build.",
    systems: "Foreground design systems: how I create reusable, scalable, consistent UI foundations.",
    strategy: "Foreground product strategy: framing problems, prioritization, and business impact.",
    delivery: "Foreground shipping & delivery: working with engineering and getting things to production.",
    other: "Foreground whatever ability best fits what they describe.",
  }[focus];
  return note ? `${base} They added: "${note}"` : base;
}

function scopeGuidance(scope: IntakeInput["scope"], note?: string): string {
  const base = {
    ic: "They want to see hands-on individual-contributor craft.",
    lead: "They want to see lead/mentor scope — guiding others and raising the bar.",
    strategic: "They want to see strategic, 0→1, ambiguous problem work.",
    any: "No strong preference on seniority/scope.",
    other: "They want to see some other kind of scope.",
  }[scope];
  return note ? `${base} They added: "${note}"` : base;
}

export function buildPersonalizePrompt(
  intake: IntakeInput,
  context: string,
  language: IntakeInput["language"] = "en",
): string {
  const visitor = [
    intake.visitorRole && `Visitor's role: ${intake.visitorRole}`,
    `Relationship lens: ${lensGuidance(intake.lens, intake.lensNote)}`,
    `What they want to see: ${focusGuidance(intake.focus, intake.focusNote)}`,
    `Seniority/scope: ${scopeGuidance(intake.scope, intake.scopeNote)}`,
    intake.context && `Extra context they shared: "${intake.context}"`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    PERSONA,
    "",
    "# Task",
    "Given the visitor profile below, produce a personalized portfolio view as structured data:",
    "1. `about` — 2–4 sentences, first person, on how I work and approach product design, tailored",
    "   to THIS visitor and what they care about. Plain prose; no markdown headings or lists.",
    "2. `picks` — choose the THREE projects from the list below that best fit this visitor. For each,",
    "   write a `reason` (1–2 sentences) explaining why it's worth THEIR time, referencing what they",
    "   said they care about. Put markdown **bold** on 1–3 key phrases in each reason. Use the exact",
    "   `slug` from the project list — never invent a slug.",
    "- Only recommend real projects from the list. Pick distinct projects (no duplicates).",
    "- Be specific and grounded; never invent facts beyond what's provided.",
    "",
    "# Visitor profile",
    visitor,
    "",
    languageRule(language),
    "",
    "# What you know about Alfred",
    context,
  ].join("\n");
}
