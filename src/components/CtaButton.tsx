"use client";

import type { ReactNode } from "react";
import { useQuiz } from "./quiz/QuizProvider";

export function CtaButton({
  children,
  className = "",
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  const { open } = useQuiz();
  return (
    <button
      type="button"
      onClick={open}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-base font-extrabold text-slate-900 transition hover:bg-cyan-300 ${
        pulse
          ? "cta-pulse"
          : "shadow-[0_0_24px_rgba(34,211,238,0.4)] hover:shadow-[0_0_36px_rgba(34,211,238,0.6)]"
      } ${className}`}
    >
      <span className="pointer-events-none absolute -inset-px rounded-full ring-1 ring-cyan-200/50" />
      <span className="relative">{children}</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
        className="relative h-4 w-4 -scale-x-100 transition group-hover:translate-x-0.5"
      >
        <path
          d="M4 10h12m0 0-4-4m4 4-4 4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
