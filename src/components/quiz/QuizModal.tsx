"use client";

import { useEffect, useState } from "react";
import { useQuiz } from "./QuizProvider";
import { questions, type Classification, type Question } from "./questions";

type Answer = { question: string; answer: string };

export function QuizModal() {
  const { isOpen, close } = useQuiz();
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [classification, setClassification] = useState<Classification | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStepIdx(0);
      setAnswers({});
      setClassification(null);
      setShowResult(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const question = questions[stepIdx];
  const progress = ((stepIdx + 1) / questions.length) * 100;

  const onAnswer = (q: Question, value: string, cls?: Classification) => {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    if (cls) setClassification(cls);
    if (q.isFinal) {
      setShowResult(true);
      return;
    }
    if (stepIdx < questions.length - 1) {
      setStepIdx(stepIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#04060c]/95 px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="שאלון התאמה"
    >
      <div className="relative mx-auto w-full max-w-2xl">
        <div className="mb-8 flex items-center justify-between gap-4" dir="rtl">
          <button
            type="button"
            onClick={close}
            aria-label="סגירה"
            className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-white/10"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path d="m6 6 8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>

          {!showResult && (
            <div className="flex-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-center text-xs text-slate-400">
                שאלה {stepIdx + 1} מתוך {questions.length}
              </p>
            </div>
          )}

          {(stepIdx > 0 || showResult) && (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-slate-300 transition hover:bg-white/5"
            >
              חזרה
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
                <path d="m12 5-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {showResult ? (
          <ResultScreen classification={classification} answers={answers} />
        ) : (
          <QuestionStep key={question.id} question={question} onAnswer={onAnswer} />
        )}
      </div>
    </div>
  );
}

function QuestionStep({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (q: Question, value: string, cls?: Classification) => void;
}) {
  const [picked, setPicked] = useState<string[]>([]);

  const isMulti = question.type === "multiple";

  const toggle = (label: string) => {
    setPicked((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div dir="rtl">
      <h3 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
        {question.title}
      </h3>
      {question.subtitle && (
        <p className="mt-2 text-center text-sm text-slate-400">{question.subtitle}</p>
      )}

      <div className="mx-auto mt-8 max-w-lg space-y-3">
        {question.options.map((opt) => {
          const label = opt.label;
          const selected = isMulti && picked.includes(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => {
                if (isMulti) {
                  toggle(label);
                } else {
                  onAnswer(question, label, opt.classification);
                }
              }}
              className={`flex w-full items-center gap-3 rounded-xl border p-4 text-right transition ${
                selected
                  ? "border-cyan-400 bg-cyan-400/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              }`}
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                  selected ? "border-cyan-400 bg-cyan-400" : "border-white/20"
                }`}
              >
                {selected && (
                  <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3 text-slate-900" aria-hidden>
                    <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-base font-medium">{label}</span>
            </button>
          );
        })}

        {isMulti && (
          <button
            type="button"
            disabled={picked.length === 0}
            onClick={() => onAnswer(question, picked.join(", "))}
            className="mt-4 w-full rounded-xl bg-cyan-400 py-4 text-base font-extrabold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            המשך
          </button>
        )}
      </div>
    </div>
  );
}

function ResultScreen({
  classification,
  answers,
}: {
  classification: Classification | null;
  answers: Record<string, string>;
}) {
  const isDIY = classification === "diy";
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        classification: classification ?? "managed",
        answers,
      };
      if (typeof window !== "undefined") {
        // eslint-disable-next-line no-console
        console.log("[LinkBoost lead]", payload);
      }
      await new Promise((r) => setTimeout(r, 600));
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div dir="rtl" className="py-12 text-center">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/40">
          <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-cyan-300" aria-hidden>
            <path
              d="m6 12 4 4 8-8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-white">
          {isDIY ? "המדריך בדרך אליכם" : "מעולה, נדבר בקרוב"}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
          {isDIY
            ? "שלחנו לכם לאימייל מדריך מסודר לבניית קישורים. כשתרצו שניקח את זה מכם, אנחנו כאן."
            : "יועץ קישורים בכיר יחזור אליכם תוך 24 שעות לשיחה קצרה. נבנה יחד תהליך שעובד."}
        </p>
      </div>
    );
  }

  return (
    <div dir="rtl" className="mx-auto max-w-lg">
      <div
        className={`mb-7 rounded-2xl border p-5 ${
          isDIY ? "border-white/10 bg-white/5" : "border-cyan-400/40 bg-cyan-400/10"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
              isDIY ? "bg-white/10 text-slate-200" : "bg-cyan-400/20 text-cyan-300"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              {isDIY ? (
                <path
                  d="M4 5a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm10-2v6h6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0v8m-5-3 5 3 5-3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-extrabold leading-tight text-white">
              {isDIY
                ? "נראה שאתם מעדיפים להמשיך לבד"
                : "בדיוק בשביל זה אנחנו פה"}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              {isDIY
                ? "אין בעיה. נשלח לכם מדריך מסודר שיעזור לבנות קישורים נכון. בכל שלב שתרצו שניקח את זה מכם — דברו איתנו."
                : "בואו נדבר ונבנה לכם מערך קישורים שעובד עבור הלקוחות שלכם. בלי כאב ראש, בלי ספקים מזדמנים, בלי הפתעות."}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-3">
        <h4 className="mb-4 text-center text-base font-extrabold text-white">
          {isDIY ? "שלחו לי את המדריך" : "קבעו שיחת ייעוץ חינמית"}
        </h4>

        <div className="grid grid-cols-2 gap-3">
          <QuizInput
            required
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="שם מלא"
          />
          <QuizInput
            value={form.company}
            onChange={(v) => setForm({ ...form, company: v })}
            placeholder="שם סוכנות / חברה"
          />
        </div>
        <QuizInput
          required
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="אימייל"
        />
        <QuizInput
          required
          type="tel"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          placeholder="טלפון"
        />

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-xl bg-cyan-400 py-5 text-base font-extrabold text-slate-900 shadow-[0_0_28px_rgba(34,211,238,0.4)] transition hover:bg-cyan-300 disabled:opacity-60"
        >
          {submitting ? "שולחים…" : isDIY ? "שלחו לי את המדריך" : "קבעו לי שיחה"}
        </button>
        <p className="text-center text-xs text-slate-400">לא נשלח לכם ספאם, לעולם.</p>
      </form>
    </div>
  );
}

function QuizInput({
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
}) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      dir="rtl"
      className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
    />
  );
}
