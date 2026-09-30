"use client";

import { CheckCircle2, Loader2, RotateCcw, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonClass, cx } from "../ui/primitives";
import { QuestionView } from "./question-view";
import { isAnswered, type AnswerValue, type RenderedQuestion } from "./types";

interface Feedback {
  questionId: string;
  isCorrect: boolean;
  answered: boolean;
  correctOptionIds: string[];
  correctPairs?: Record<string, string>;
  explanationHtml: string | null;
}
interface Outcome {
  percentage: number;
  score: number;
  totalMarks: number;
  passed: boolean;
  correct: number;
  attemptNumber: number;
  threshold?: number;
  feedback: Feedback[] | null;
}

/** Classwork / assignment runner: answer all questions, submit once, server marks instantly. */
export function ObjectiveRunner({ questions, endpoint, passLabel, canRetry, submitLabel = "Submit for marking", locked }: { questions: RenderedQuestion[]; endpoint: string; passLabel: string; canRetry: boolean; submitLabel?: string; locked?: string }) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [started] = useState(() => Date.now());
  const answered = questions.filter((q) => isAnswered(answers[q.id])).length;
  const byQ = new Map(outcome?.feedback?.map((f) => [f.questionId, f]));

  if (locked) return <p className="rounded-xl bg-surface px-4 py-3 text-sm text-muted">{locked}</p>;

  return (
    <div className="space-y-5">
      {outcome && (
        <div role="status" className={cx("flex flex-wrap items-center gap-4 rounded-2xl border p-5", outcome.passed ? "border-emerald-200 bg-success-50" : "border-amber-200 bg-warn-50")}>
          {outcome.passed ? <CheckCircle2 className="size-9 text-success-600" aria-hidden /> : <XCircle className="size-9 text-warn-600" aria-hidden />}
          <div className="flex-1">
            <p className={cx("text-lg font-extrabold", outcome.passed ? "text-success-600" : "text-warn-600")}>
              {outcome.percentage}% — {outcome.passed ? "Well done! " + passLabel : "Not yet. Review the explanations and try again."}
            </p>
            <p className="text-sm text-muted">
              Score {outcome.score}/{outcome.totalMarks} · attempt {outcome.attemptNumber}
              {outcome.threshold !== undefined && ` · mastery threshold ${outcome.threshold}%`}
            </p>
          </div>
          {canRetry && !outcome.passed && (
            <button
              type="button"
              className={buttonClass("secondary")}
              onClick={() => {
                setOutcome(null);
                setAnswers({});
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <RotateCcw className="size-4" /> Try again
            </button>
          )}
        </div>
      )}
      <ol className="space-y-4">
        {questions.map((q, i) => {
          const f = byQ.get(q.id);
          return (
            <li key={q.id} className={cx("rounded-2xl border bg-white p-5 shadow-card", f ? (f.isCorrect ? "border-emerald-200" : "border-red-200") : "border-line")}>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-royal-600">Question {i + 1}</p>
              <QuestionView q={q} value={answers[q.id]} onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} disabled={Boolean(outcome) || pending} review={f ? { correctOptionIds: f.correctOptionIds, correctPairs: f.correctPairs, isCorrect: f.isCorrect } : undefined} />
              {f?.explanationHtml && (
                <div className="mt-4 rounded-xl bg-royal-50 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-royal-700">Explanation</p>
                  <div className="prose-pps mt-1 text-sm" dangerouslySetInnerHTML={{ __html: f.explanationHtml }} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {error && (
        <p role="alert" className="rounded-xl bg-danger-50 px-4 py-3 text-sm text-danger-600">
          {error}
        </p>
      )}
      {!outcome && (
        <div className="sticky bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur">
          <p className="pl-2 text-sm text-muted">
            {answered}/{questions.length} answered
          </p>
          <button
            type="button"
            disabled={pending}
            className={buttonClass("primary")}
            onClick={async () => {
              if (answered < questions.length && !confirm(`You have answered ${answered} of ${questions.length}. Submit anyway?`)) return;
              setPending(true);
              setError(null);
              try {
                const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers, timeSpentSec: Math.round((Date.now() - started) / 1000) }) });
                const j = await r.json();
                if (!j.ok) throw new Error(j.error?.message ?? "Submission failed.");
                setOutcome(j.data);
                window.scrollTo({ top: 0, behavior: "smooth" });
                router.refresh();
              } catch (e) {
                setError((e as Error).message);
              } finally {
                setPending(false);
              }
            }}
          >
            {pending && <Loader2 className="size-4 animate-spin" />}
            {submitLabel}
          </button>
        </div>
      )}
    </div>
  );
}
