import { Check, Flag, X } from "lucide-react";
import type { attemptReview } from "@/server/services/exams";
import { renderInline } from "./rich-text";
import { RichText } from "./rich-text";
import { cx } from "./ui/primitives";

type Item = Awaited<ReturnType<typeof attemptReview>>[number];

/** Server-rendered answer review with correct answers and explanations (§37). */
export function ResultReview({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-4">
      {items.map((it) => {
        const resp = (it.response ?? null) as { optionId?: string; optionIds?: string[]; value?: string; text?: string } | null;
        const chosen = new Set(resp?.optionIds ?? (resp?.optionId ? [resp.optionId] : []));
        const state = it.isCorrect === null ? "blank" : it.isCorrect ? "right" : "wrong";
        return (
          <li key={it.position} className="rounded-2xl border border-line bg-white p-5 shadow-card print-card">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-royal-600">Question {it.position}</span>
              <span className={cx("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold", state === "right" ? "bg-success-50 text-success-600" : state === "wrong" ? "bg-danger-50 text-danger-600" : "bg-slate-100 text-slate-600")}>
                {state === "right" ? <Check className="size-3.5" /> : state === "wrong" ? <X className="size-3.5" /> : null}
                {state === "right" ? `Correct (+${it.marksAwarded})` : state === "wrong" ? `Incorrect (${it.marksAwarded})` : "Not answered"}
                {it.flagged && <Flag className="ml-1 size-3.5 text-gold-600" aria-label="Flagged" />}
              </span>
            </div>
            <RichText text={it.stem} className="text-[0.98rem]" />
            {it.options.length > 0 && (
              <ul className="mt-3 grid gap-1.5">
                {it.options.map((o) => {
                  const right = it.correctOptionIds.includes(o.id);
                  const picked = chosen.has(o.id);
                  return (
                    <li key={o.id} className={cx("flex items-start gap-2.5 rounded-lg border px-3 py-2 text-sm", right ? "border-emerald-300 bg-success-50" : picked ? "border-red-300 bg-danger-50" : "border-line")}>
                      <span className="font-bold text-navy-800">{o.displayLabel}.</span>
                      <span className="flex-1" dangerouslySetInnerHTML={{ __html: renderInline(o.text) }} />
                      {right && <span className="text-xs font-bold text-success-600">Correct answer</span>}
                      {picked && !right && <span className="text-xs font-bold text-danger-600">Your answer</span>}
                      {picked && right && <span className="sr-only">Your answer</span>}
                    </li>
                  );
                })}
              </ul>
            )}
            {(it.type === "NUMERIC" || it.type === "FILL_BLANK") && (
              <p className="mt-3 text-sm">
                Your answer: <strong>{resp?.value ?? resp?.text ?? "—"}</strong> · Accepted: <strong>{it.answerSpec?.value ?? it.answerSpec?.accepted?.join(", ")}</strong>
              </p>
            )}
            {it.explanation && (
              <div className="mt-3 rounded-xl bg-royal-50 px-4 py-3 text-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-royal-700">Explanation</p>
                <RichText text={it.explanation} className="mt-1 text-sm" />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
