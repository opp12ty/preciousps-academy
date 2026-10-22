"use client";

import { CheckCircle2, CircleDashed, Loader2, Send, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { submitFscReviewAction, submitFscWorkAction } from "@/app/student/actions";
import { buttonClass, cx, inputClass } from "./ui/primitives";
import { useToast } from "./ui/toast";

type Item = { q: string; answer: string; model: string; mark: number | null };
type Last = { items: Item[]; percentage: number } | null;

const MARK = {
  1: { icon: CheckCircle2, text: "Correct", tone: "text-success-600" },
  0.5: { icon: CircleDashed, text: "Partly correct", tone: "text-amber-600" },
  0: { icon: XCircle, text: "Not yet", tone: "text-danger-600" },
} as const;

/** Plain text of a stem that may hold $maths$ (results come back from the server as text). */
const plain = (s: string) => s.replace(/\$([^$]+)\$/g, "$1").replace(/\\(frac|dfrac)\{([^}]*)\}\{([^}]*)\}/g, "$2/$3").replace(/\\times/g, "×").replace(/\\div/g, "÷").replace(/\\[a-z]+/g, "");

export type FscQuestion = { html: string; options: { value: string; html: string }[] | null };

/** A unit's Classwork or Assignment: choices are marked exactly, written answers against the e-book's Answer Key. */
export function FscWorkForm({ unitId, kind, questions, last }: { unitId: string; kind: "CLASSWORK" | "ASSIGNMENT"; questions: FscQuestion[]; last: Last }) {
  const [answers, setAnswers] = useState<string[]>(() => questions.map((_, i) => last?.items[i]?.answer ?? ""));
  const [result, setResult] = useState<Last>(last);
  const [editing, setEditing] = useState(!last);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const submit = () =>
    start(async () => {
      const r = await submitFscWorkAction(unitId, kind, answers);
      if (!r.ok) return toast("error", r.error);
      setResult({ items: r.data!.items, percentage: r.data!.percentage });
      setEditing(false);
      toast("success", `Submitted: ${r.data!.percentage}%`);
      router.refresh();
    });

  if (result && !editing)
    return (
      <div className="space-y-3">
        <p className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-navy-800 ring-1 ring-line">Your score: {result.percentage}%</p>
        <ol className="space-y-3">
          {result.items.map((it, i) => {
            const m = it.mark === null ? null : MARK[it.mark as 0 | 0.5 | 1];
            return (
              <li key={i} className="rounded-xl bg-white p-3 text-sm ring-1 ring-line">
                <p className="font-semibold text-navy-800">{i + 1}. {plain(it.q)}</p>
                <p className="mt-1 text-navy-800"><span className="text-xs font-bold uppercase text-muted">Your answer: </span>{plain(it.answer) || "—"}</p>
                {it.model && <p className="mt-1 text-success-600"><span className="text-xs font-bold uppercase">{questions[i]?.options ? "Correct answer: " : "Model answer: "}</span>{plain(it.model)}</p>}
                {m && <p className={cx("mt-1 flex items-center gap-1 text-xs font-bold", m.tone)}><m.icon className="size-4" aria-hidden /> {m.text}</p>}
              </li>
            );
          })}
        </ol>
        <button type="button" onClick={() => setEditing(true)} className={buttonClass("secondary", "sm")}>Try again for practice</button>
        <p className="text-xs text-muted">Your first submission is the one that counts for the Top 3; trying again helps you learn.</p>
      </div>
    );

  return (
    <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); submit(); }}>
      {questions.map((q, i) =>
        q.options ? (
          <fieldset key={i} className="text-sm">
            <legend className="font-semibold text-navy-800">{i + 1}. <span dangerouslySetInnerHTML={{ __html: q.html }} /></legend>
            <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2">
              {q.options.map((o, k) => (
                <label key={k} className={cx("flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1", answers[i] === o.value ? "ring-royal-600" : "ring-line")}>
                  <input type="radio" name={`${kind}-${i}`} checked={answers[i] === o.value} onChange={() => setAnswers((a) => a.map((x, j) => (j === i ? o.value : x)))} className="accent-royal-600" />
                  <span>{"ABCD"[k]}. <span dangerouslySetInnerHTML={{ __html: o.html }} /></span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <label key={i} className="block text-sm">
            <span className="font-semibold text-navy-800">{i + 1}. <span dangerouslySetInnerHTML={{ __html: q.html }} /></span>
            <textarea value={answers[i]} onChange={(e) => setAnswers((a) => a.map((x, j) => (j === i ? e.target.value : x)))} rows={2} maxLength={2000} className={`${inputClass} mt-1`} />
          </label>
        ),
      )}
      <button disabled={pending} className={buttonClass("primary", "sm")}>{pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />} Submit {kind === "CLASSWORK" ? "classwork" : "assignment"}</button>
    </form>
  );
}

type Q = { stem: string; options: { label: string; text: string }[] };
type ReviewItem = { stem: string; chosen: string; answer: string; options: { label: string; text: string }[]; explanation: string | null };

/** The Term Review CBT of a Precious PS e-book. */
export function FscReviewForm({ bookId, questions }: { bookId: string; questions: Q[] }) {
  const [chosen, setChosen] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; total: number; percentage: number; items: ReviewItem[] } | null>(null);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const submit = () =>
    start(async () => {
      if (Object.keys(chosen).length < questions.length && !confirm(`You have answered ${Object.keys(chosen).length} of ${questions.length}. Submit anyway?`)) return;
      const r = await submitFscReviewAction(bookId, chosen);
      if (!r.ok) return toast("error", r.error);
      setResult(r.data as typeof result);
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.refresh();
    });

  if (result)
    return (
      <div className="space-y-4">
        <div className="rounded-2xl bg-navy-800 p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">Term Review CBT</p>
          <p className="mt-1 text-3xl font-extrabold">{result.score}/{result.total} · {result.percentage}%</p>
        </div>
        <ol className="space-y-3">
          {result.items.map((it, i) => (
            <li key={i} className="rounded-xl bg-white p-4 text-sm ring-1 ring-line">
              <p className="font-semibold text-navy-800">{i + 1}. {plain(it.stem)}</p>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                {it.options.map((o) => (
                  <li key={o.label} className={cx("rounded-lg px-2 py-1", o.label === it.answer ? "bg-emerald-50 font-bold text-success-600" : o.label === it.chosen ? "bg-red-50 text-danger-600" : "text-navy-800")}>
                    {o.label}. {plain(o.text)}{o.label === it.answer ? " ✓" : o.label === it.chosen ? " ✗" : ""}
                  </li>
                ))}
              </ul>
              {it.explanation && <p className="mt-1 text-xs text-muted">{plain(it.explanation)}</p>}
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => { setResult(null); setChosen({}); }} className={buttonClass("secondary", "sm")}>Try again for practice</button>
      </div>
    );

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submit(); }}>
      {questions.map((q, i) => (
        <fieldset key={i} className="rounded-xl bg-white p-4 ring-1 ring-line">
          <legend className="sr-only">Question {i + 1}</legend>
          <p className="text-sm font-semibold text-navy-800">{i + 1}. <span dangerouslySetInnerHTML={{ __html: q.stem }} /></p>
          <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {q.options.map((o) => (
              <label key={o.label} className={cx("flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm ring-1", chosen[i] === o.label ? "bg-royal-50 ring-royal-600" : "ring-line hover:bg-surface")}>
                <input type="radio" name={`q${i}`} checked={chosen[i] === o.label} onChange={() => setChosen((c) => ({ ...c, [i]: o.label }))} className="accent-royal-600" />
                {o.label}. <span dangerouslySetInnerHTML={{ __html: o.text }} />
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button disabled={pending} className={buttonClass("primary", "md")}>{pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />} Submit Term Review</button>
    </form>
  );
}
