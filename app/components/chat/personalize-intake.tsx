"use client";

import { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { RiSparkling2Fill } from "react-icons/ri";
import {
  VISITOR_ROLE_OPTIONS,
  LENS_OPTIONS,
  FOCUS_OPTIONS,
  SCOPE_OPTIONS,
  type IntakeInput,
  type LensId,
  type FocusId,
  type ScopeId,
} from "app/lib/personalize-types";
import type { ChatRole, ChatLanguage } from "app/lib/suggested-questions";

type PersonalizeIntakeProps = {
  defaultRole: ChatRole;
  language: ChatLanguage;
  busy: boolean;
  onSubmit: (intake: IntakeInput) => void;
  onCancel: () => void;
};

const CHAT_ROLES: ReadonlySet<string> = new Set(["pm", "designer", "engineer"]);

// Static intake copy in each reply language. The option chips localize via each
// option's `labelZh` (see personalize-types.ts); everything else lives here.
const COPY = {
  en: {
    heading: "Let me tailor this to you",
    sub: "A few quick questions, then I'll put together a short read on how I work plus three case studies picked for you.",
    roleQ: "What's your role?",
    other: "Other",
    rolePlaceholder: "Tell me your role",
    lensQ: "How are you evaluating me?",
    lensPlaceholder: "In what capacity?",
    focusQ: "What do you most want to see?",
    focusPlaceholder: "What would you like to see?",
    scopeQ: "What scope interests you?",
    scopePlaceholder: "What scope are you after?",
    contextLabel: "Anything specific?",
    optional: "(optional)",
    contextPlaceholder: "Industry, team size, a problem space you care about…",
    submitBusy: "Putting it together…",
    submit: "Show me my tailored view",
    cancel: "Back to chat",
  },
  zh: {
    heading: "讓我為你量身打造",
    sub: "幾個簡單的問題，接著我會為你整理一段關於我如何工作的簡介，以及三個為你挑選的案例研究。",
    roleQ: "你的職位是？",
    other: "其他",
    rolePlaceholder: "請告訴我你的職位",
    lensQ: "你想從什麼角度了解我？",
    lensPlaceholder: "以什麼身分？",
    focusQ: "你最想看到什麼？",
    focusPlaceholder: "你想看到什麼？",
    scopeQ: "你對什麼樣的職責範圍感興趣？",
    scopePlaceholder: "想看什麼樣的職責範圍？",
    contextLabel: "有什麼特別想了解的嗎？",
    optional: "（選填）",
    contextPlaceholder: "產業、團隊規模、你在意的問題領域…",
    submitBusy: "正在整理…",
    submit: "顯示為你量身打造的內容",
    cancel: "返回對話",
  },
} as const;

function Dropdown({
  id,
  label,
  value,
  onChange,
  options,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{ id: string; label: string }>;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-900">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-1.5 pr-9 text-sm text-gray-900 focus:outline-none focus:border-gray-400"
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
        <FiChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
      {children}
    </div>
  );
}

export default function PersonalizeIntake({
  defaultRole,
  language,
  busy,
  onSubmit,
  onCancel,
}: PersonalizeIntakeProps) {
  // Q1 visitor role — chip id or "other" with free text.
  const [roleId, setRoleId] = useState<string>(defaultRole);
  const [roleOther, setRoleOther] = useState("");

  // Q2 lens
  const [lens, setLens] = useState<LensId>("coworker");
  const [lensNote, setLensNote] = useState("");

  // Q3 focus
  const [focus, setFocus] = useState<FocusId>("craft");
  const [focusNote, setFocusNote] = useState("");

  // Q4 scope
  const [scope, setScope] = useState<ScopeId>("any");
  const [scopeNote, setScopeNote] = useState("");

  // Q5 free-text context
  const [context, setContext] = useState("");

  const submit = () => {
    if (busy) return;

    const visitorLabel =
      roleId === "other"
        ? roleOther.trim()
        : VISITOR_ROLE_OPTIONS.find((o) => o.id === roleId)?.label;

    // role drives the system prompt's roleEmphasis() — only pm/designer/engineer
    // map to it; for recruiter/founder/other keep the panel's current role.
    const role: ChatRole = CHAT_ROLES.has(roleId)
      ? (roleId as ChatRole)
      : defaultRole;

    onSubmit({
      role,
      language,
      visitorRole: visitorLabel || undefined,
      lens,
      lensNote:
        lens === "other" || lensNote.trim()
          ? lensNote.trim() || undefined
          : undefined,
      focus,
      focusNote: focusNote.trim() || undefined,
      scope,
      scopeNote: scopeNote.trim() || undefined,
      context: context.trim() || undefined,
    });
  };

  const textInputClass =
    "w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400";

  const t = COPY[language];
  const optionLabel = (o: { label: string; labelZh: string }) =>
    language === "zh" ? o.labelZh : o.label;

  return (
    <div className="animate-blur-in flex flex-col gap-6">
      <div>
        <h3 className="text-xl md:text-2xl font-serif text-gray-900">
          {t.heading}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{t.sub}</p>
      </div>

      <Dropdown
        id="personalize-role"
        label={t.roleQ}
        value={roleId}
        onChange={setRoleId}
        options={[
          ...VISITOR_ROLE_OPTIONS.map((o) => ({
            id: o.id,
            label: optionLabel(o),
          })),
          { id: "other", label: t.other },
        ]}
      >
        {roleId === "other" && (
          <input
            type="text"
            value={roleOther}
            onChange={(e) => setRoleOther(e.target.value)}
            placeholder={t.rolePlaceholder}
            className={textInputClass}
          />
        )}
      </Dropdown>

      <Dropdown
        id="personalize-lens"
        label={t.lensQ}
        value={lens}
        onChange={(v) => setLens(v as LensId)}
        options={LENS_OPTIONS.map((o) => ({ id: o.id, label: optionLabel(o) }))}
      >
        {lens === "other" && (
          <input
            type="text"
            value={lensNote}
            onChange={(e) => setLensNote(e.target.value)}
            placeholder={t.lensPlaceholder}
            className={textInputClass}
          />
        )}
      </Dropdown>

      <Dropdown
        id="personalize-focus"
        label={t.focusQ}
        value={focus}
        onChange={(v) => setFocus(v as FocusId)}
        options={FOCUS_OPTIONS.map((o) => ({
          id: o.id,
          label: optionLabel(o),
        }))}
      >
        {focus === "other" && (
          <input
            type="text"
            value={focusNote}
            onChange={(e) => setFocusNote(e.target.value)}
            placeholder={t.focusPlaceholder}
            className={textInputClass}
          />
        )}
      </Dropdown>

      <Dropdown
        id="personalize-scope"
        label={t.scopeQ}
        value={scope}
        onChange={(v) => setScope(v as ScopeId)}
        options={SCOPE_OPTIONS.map((o) => ({
          id: o.id,
          label: optionLabel(o),
        }))}
      >
        {scope === "other" && (
          <input
            type="text"
            value={scopeNote}
            onChange={(e) => setScopeNote(e.target.value)}
            placeholder={t.scopePlaceholder}
            className={textInputClass}
          />
        )}
      </Dropdown>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="personalize-context"
          className="text-sm font-semibold text-gray-900"
        >
          {t.contextLabel}{" "}
          <span className="font-normal text-gray-400">{t.optional}</span>
        </label>
        <input
          id="personalize-context"
          type="text"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder={t.contextPlaceholder}
          className={textInputClass}
        />
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          type="button"
          onClick={submit}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {busy ? t.submitBusy : t.submit}
          {!busy && <FiArrowRight size={16} />}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={busy}
          className="text-sm text-gray-500 hover:text-black disabled:opacity-40 transition-colors"
        >
          {t.cancel}
        </button>
      </div>
    </div>
  );
}
