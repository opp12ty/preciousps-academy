"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { listStudentExams } from "@/server/services/exams";
import { cx, inputClass } from "../ui/primitives";
import { ExamGrid } from "./exam-list";

type Exam = Awaited<ReturnType<typeof listStudentExams>>[number];

const TYPE_LABEL: Record<string, string> = { PRACTICE: "Practice", MOCK: "Mock", SCHOOL_EXAM: "School exam", CLASS_TEST: "Class test", CONTINUOUS_ASSESSMENT: "C.A.", JAMB: "JAMB", WAEC: "WAEC", NECO: "NECO", BECE: "BECE", CUSTOM: "Custom", IELTS: "IELTS-style", TOEFL: "TOEFL-style", SAT: "SAT-style", CHECKPOINT: "Checkpoint-style" };
const STATUS = [
  { value: "READY", label: "Ready to start" },
  { value: "RESUME", label: "In progress" },
  { value: "NEW", label: "Not attempted yet" },
  { value: "UPCOMING", label: "Upcoming" },
  { value: "DONE", label: "No attempts left / closed" },
];
const uniq = (xs: (string | null)[]) => [...new Set(xs.filter((x): x is string => Boolean(x)))].sort((a, b) => a.localeCompare(b));

function matchesStatus(e: Exam, status: string) {
  if (status === "RESUME") return Boolean(e.liveAttemptId);
  if (status === "READY") return e.canStart;
  if (status === "NEW") return e.attemptsUsed === 0 && e.window !== "CLOSED";
  if (status === "UPCOMING") return e.window === "UPCOMING";
  if (status === "DONE") return !e.canStart && e.window !== "UPCOMING";
  return true;
}

/**
 * Student-facing list of tests with instant filters. The list already holds only what the student
 * may sit (their class, department and section), so the filters narrow it; they never widen it.
 */
export function ExamBrowser({ exams, hasAccess, empty }: { exams: Exam[]; hasAccess: boolean; empty: string }) {
  const [q, setQ] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [cls, setCls] = useState("");
  const [dept, setDept] = useState("");
  const [status, setStatus] = useState("");

  const subjects = useMemo(() => uniq(exams.map((e) => e.subject)), [exams]);
  const types = useMemo(() => uniq(exams.map((e) => e.examType)), [exams]);
  const classes = useMemo(() => uniq(exams.map((e) => e.className)), [exams]);
  const depts = useMemo(() => uniq(exams.map((e) => e.department)), [exams]);
  const hasGeneralClass = exams.some((e) => !e.className);
  const hasGeneralDept = exams.some((e) => !e.department);

  const shown = exams.filter((e) => {
    const text = q.trim().toLowerCase();
    if (text && !`${e.title} ${e.subject} ${e.description ?? ""} ${e.year ?? ""}`.toLowerCase().includes(text)) return false;
    if (subject && e.subject !== subject) return false;
    if (type && e.examType !== type) return false;
    if (cls && (cls === "__ALL__" ? e.className !== null : e.className !== cls)) return false;
    if (dept && (dept === "__ALL__" ? e.department !== null : e.department !== dept)) return false;
    return matchesStatus(e, status);
  });
  const active = [q.trim(), subject, type, cls, dept, status].filter(Boolean).length;
  const clear = () => {
    setQ("");
    setSubject("");
    setType("");
    setCls("");
    setDept("");
    setStatus("");
  };

  // Nothing to filter: keep the page clean.
  if (exams.length < 2) return <ExamGrid exams={exams} hasAccess={hasAccess} empty={empty} />;

  const select = (label: string, value: string, set: (v: string) => void, all: string, options: { value: string; label: string }[]) => (
    <label className="block text-xs font-semibold text-navy-800">
      {label}
      <select value={value} onChange={(e) => set(e.target.value)} className={cx(inputClass, "mt-1")}>
        <option value="">{all}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <>
      <div className="mb-5 rounded-2xl border border-line bg-white p-4 shadow-card">
        {types.length > 1 && (
          <div className="no-scrollbar -mx-1 mb-3 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Type of test">
            {["", ...types].map((t) => (
              <button
                key={t || "all"}
                type="button"
                aria-pressed={type === t}
                onClick={() => setType(t)}
                className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold transition", type === t ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}
              >
                {t ? (TYPE_LABEL[t] ?? t) : "All types"}
                <span className={cx("ml-1.5 text-xs", type === t ? "text-white/70" : "text-muted")}>{t ? exams.filter((e) => e.examType === t).length : exams.length}</span>
              </button>
            ))}
          </div>
        )}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block text-xs font-semibold text-navy-800 lg:col-span-1">
            Search
            <span className="relative mt-1 block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Title, subject or year" className={cx(inputClass, "pl-9")} />
            </span>
          </label>
          {select("Subject", subject, setSubject, "All subjects", subjects.map((s) => ({ value: s, label: s })))}
          {classes.length > 0 && select("Class", cls, setCls, "All classes", [...(hasGeneralClass ? [{ value: "__ALL__", label: "General (open to every class)" }] : []), ...classes.map((c) => ({ value: c, label: `${c} only` }))])}
          {depts.length > 0 && select("Department", dept, setDept, "All departments", [...(hasGeneralDept ? [{ value: "__ALL__", label: "General (open to every department)" }] : []), ...depts.map((d) => ({ value: d, label: `${d} only` }))])}
          {select("Status", status, setStatus, "All statuses", STATUS)}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted" aria-live="polite">
          <span>
            Showing <strong className="text-navy-800">{shown.length}</strong> of {exams.length}
          </span>
          {active > 0 && (
            <button type="button" onClick={clear} className="inline-flex items-center gap-1 font-semibold text-royal-600 hover:underline">
              <X className="size-4" /> Clear filters
            </button>
          )}
        </div>
      </div>
      <ExamGrid exams={shown} hasAccess={hasAccess} empty={active ? "Nothing matches these filters. Clear them to see everything available to you." : empty} />
    </>
  );
}
