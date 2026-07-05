"use client";

import { useEffect, useRef, useState } from "react";
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

// Each question reads as a sentence the dropdown completes ("I'm a ___",
// "I'm your ___"). `stem` is the lead-in; the option labels (localized via each
// option's `labelZh` in personalize-types.ts) are the completion. Everything
// else lives here.
const COPY = {
  en: {
    heading: "Find what you are interested in, faster",
    sub: "Answer a few quick questions and I'll tailor this to you — a short take on how I'd work with you, plus the three projects most worth a look, each with project highlights.",
    roleStem: "I'm", // article ("a" / "an") is appended dynamically
    rolePlaceholder: "product designer, manager…",
    lensStem: "I'm your",
    lensPlaceholder: "mentor, skip-level…",
    focusStem: "I want to see your",
    focusPlaceholder: "accessibility, communication…",
    scopeStem: "I'm open to",
    scopePlaceholder: "anything, really…",
    other: "Other",
    contextLabel: "Anything specific?",
    optional: "(optional)",
    contextPlaceholder: "Industry, team size, a problem space you care about…",
    submitBusy: "Cooking…",
    submit: "Cook for me",
    cancel: "Back to chat",
  },
  zh: {
    heading: "幫你快速找到重點",
    sub: "回答幾個簡單問題，我會幫你整理出重點：一段關於我的簡介，加上最值得一看的三個專案及其highlights。",
    roleStem: "我是",
    rolePlaceholder: "產品設計師、產品經理…",
    lensStem: "我是你的",
    lensPlaceholder: "導師、隔級主管…",
    focusStem: "我想看你的",
    focusPlaceholder: "無障礙、溝通技巧…",
    scopeStem: "我感興趣的是",
    scopePlaceholder: "任何內容等等…",
    other: "其他",
    contextLabel: "有什麼特別想了解的嗎？",
    optional: "（選填）",
    contextPlaceholder: "產業、團隊規模、你在意的問題…",
    submitBusy: "Cooking…",
    submit: "Cook for me",
    cancel: "返回對話",
  },
} as const;

// An editable, in-place combobox. Picking a preset shows it as the sentence's
// completion; picking "Other" turns the control into a text field you type
// directly into, while the chevron still reopens the preset menu.
function Combobox({
  id,
  stem,
  value,
  onChange,
  options,
  otherText,
  onOtherTextChange,
  otherPlaceholder,
  otherId = "other",
}: {
  id: string;
  stem: string;
  value: string;
  onChange: (id: string) => void;
  options: ReadonlyArray<{ id: string; label: string }>;
  otherText: string;
  onOtherTextChange: (value: string) => void;
  otherPlaceholder: string;
  otherId?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isOther = value === otherId;
  const selected = options.find((o) => o.id === value);

  // Dismiss the menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Drop focus straight into the text field when "Other" becomes active.
  useEffect(() => {
    if (isOther) inputRef.current?.focus();
  }, [isOther]);

  const choose = (oid: string) => {
    onChange(oid);
    setOpen(false);
    if (oid === otherId) requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {stem}
      </label>
      <div ref={wrapRef} className="relative">
        <div className="flex items-center border-b border-accent">
          {isOther ? (
            <input
              id={id}
              ref={inputRef}
              type="text"
              value={otherText}
              onChange={(e) => onOtherTextChange(e.target.value)}
              placeholder={otherPlaceholder}
              className="w-44 max-w-[60vw] appearance-none border-none bg-transparent px-2 py-1 text-sm font-semibold text-accent-strong placeholder:font-normal placeholder:text-muted focus:outline-none"
            />
          ) : (
            <button
              id={id}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="appearance-none px-2 py-1 text-left text-sm font-semibold text-accent-strong focus:outline-none"
            >
              {selected?.label}
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Show options"
            aria-haspopup="listbox"
            aria-expanded={open}
            className="px-1 py-1 text-accent-strong"
          >
            <FiChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 top-full z-20 mt-1 w-max min-w-full max-w-[16rem] overflow-hidden rounded-md border border-line bg-white shadow-lg"
          >
            {options.map((o) => {
              const active = o.id === value;
              return (
                <li key={o.id} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => choose(o.id)}
                    className={`flex w-full items-center px-3 py-1.5 text-left text-sm font-semibold transition-colors ${
                      active
                        ? "bg-accent-soft text-accent-deep"
                        : "text-ink hover:bg-accent-soft hover:text-accent-deep"
                    }`}
                  >
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
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
  const [focus, setFocus] = useState<FocusId>("research");
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

    // Notes only exist in "Other" mode — gate them by id so a value typed and
    // then abandoned for a preset never leaks into the request.
    onSubmit({
      role,
      language,
      visitorRole: visitorLabel || undefined,
      lens,
      lensNote: lens === "other" ? lensNote.trim() || undefined : undefined,
      focus,
      focusNote: focus === "other" ? focusNote.trim() || undefined : undefined,
      scope,
      scopeNote: scope === "other" ? scopeNote.trim() || undefined : undefined,
      context: context.trim() || undefined,
    });
  };

  const t = COPY[language];
  const optionLabel = (o: { label: string; labelZh: string }) =>
    language === "zh" ? o.labelZh : o.label;

  // Q1 completes "I'm a / an ___": pick the article from the current completion
  // (live as they type in "Other" mode). Chinese has no article.
  const roleCompletion =
    roleId === "other"
      ? roleOther
      : (VISITOR_ROLE_OPTIONS.find((o) => o.id === roleId)?.label ?? "");
  const roleArticle = /^[aeiou]/i.test(roleCompletion.trim()) ? "an" : "a";
  const roleStem =
    language === "en" ? `${t.roleStem} ${roleArticle}` : t.roleStem;

  const textInputClass =
    "border-b-1 border-x-0 border-t-0 border-accent px-2 py-1 mb-4 text-sm font-semibold text-accent-strong placeholder:text-muted placeholder:font-normal focus:outline-none";

  return (
    <div className="animate-blur-in flex flex-col gap-4 bg-white">
      <div>
        <h2 className="text-lg md:text-xl text-ink font-bold mb-2">
          {t.heading}
        </h2>
        <p className="text-sm text-muted mb-2">{t.sub}</p>
      </div>

      <Combobox
        id="personalize-role"
        stem={roleStem}
        value={roleId}
        onChange={setRoleId}
        options={[
          ...VISITOR_ROLE_OPTIONS.map((o) => ({
            id: o.id,
            label: optionLabel(o),
          })),
          { id: "other", label: t.other },
        ]}
        otherText={roleOther}
        onOtherTextChange={setRoleOther}
        otherPlaceholder={t.rolePlaceholder}
      />

      <Combobox
        id="personalize-lens"
        stem={t.lensStem}
        value={lens}
        onChange={(v) => setLens(v as LensId)}
        options={LENS_OPTIONS.map((o) => ({ id: o.id, label: optionLabel(o) }))}
        otherText={lensNote}
        onOtherTextChange={setLensNote}
        otherPlaceholder={t.lensPlaceholder}
      />

      <Combobox
        id="personalize-focus"
        stem={t.focusStem}
        value={focus}
        onChange={(v) => setFocus(v as FocusId)}
        options={FOCUS_OPTIONS.map((o) => ({
          id: o.id,
          label: optionLabel(o),
        }))}
        otherText={focusNote}
        onOtherTextChange={setFocusNote}
        otherPlaceholder={t.focusPlaceholder}
      />

      <Combobox
        id="personalize-scope"
        stem={t.scopeStem}
        value={scope}
        onChange={(v) => setScope(v as ScopeId)}
        options={SCOPE_OPTIONS.map((o) => ({
          id: o.id,
          label: optionLabel(o),
        }))}
        otherText={scopeNote}
        onOtherTextChange={setScopeNote}
        otherPlaceholder={t.scopePlaceholder}
      />

      <div className="flex flex-col gap-2 px-2">
        <label
          htmlFor="personalize-context"
          className="text-sm font-semibold text-ink"
        >
          {t.contextLabel}{" "}
          <span className="font-normal text-muted">{t.optional}</span>
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

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={submit}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-xl bg-accent-strong px-4 py-2 text-sm font-semibold text-white hover:bg-accent-deep disabled:opacity-40 disabled:cursor-not-allowed transition-colors ease-in-out duration-200"
        >
          <RiSparkling2Fill />
          {busy ? t.submitBusy : t.submit}
          {/* {!busy && <FiArrowRight size={16} />} */}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={busy}
          className="text-sm text-muted hover:text-ink disabled:opacity-40 transition-colors"
        >
          {t.cancel}
        </button>
      </div>
    </div>
  );
}
