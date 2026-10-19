"use client";

/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react";
import { cx } from "../ui/primitives";
import type { AnswerValue, RenderedQuestion } from "./types";

/**
 * Renders any supported question type with large touch targets (§33).
 * Used by the CBT, classwork and assignments. `review` mode shows correctness.
 */
export function QuestionView({
  q,
  value,
  onChange,
  disabled,
  review,
}: {
  q: RenderedQuestion;
  value: AnswerValue | undefined;
  onChange: (v: AnswerValue) => void;
  disabled?: boolean;
  review?: { correctOptionIds: string[]; correctPairs?: Record<string, string>; isCorrect?: boolean | null };
}) {
  const groupName = `q-${q.id}`;
  return (
    <div>
      <div className="prose-pps text-[1.05rem] text-ink" dangerouslySetInnerHTML={{ __html: q.stemHtml }} />
      {q.imageUrl && <img src={q.imageUrl} alt="Question diagram" className="mt-3 max-h-80 w-auto max-w-full rounded-xl border border-line bg-white object-contain" loading="lazy" />}

      {(q.type === "MCQ" || q.type === "TRUE_FALSE") && (
        <div role="radiogroup" aria-label="Options" className="mt-5 grid gap-2.5">
          {q.options.map((o) => {
            const selected = value && "optionId" in value && value.optionId === o.id;
            const isRight = review?.correctOptionIds.includes(o.id);
            return (
              <label
                key={o.id}
                className={cx(
                  "flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3 transition-colors",
                  review
                    ? isRight
                      ? "border-emerald-500 bg-success-50"
                      : selected
                        ? "border-red-400 bg-danger-50"
                        : "border-line bg-white"
                    : selected
                      ? "border-royal-600 bg-royal-50"
                      : "border-line bg-white hover:border-royal-100 hover:bg-surface",
                  disabled && !review && "cursor-not-allowed opacity-70",
                )}
              >
                <input type="radio" name={groupName} className="sr-only" checked={Boolean(selected)} disabled={disabled} onChange={() => onChange({ optionId: o.id })} />
                <span className={cx("grid size-8 shrink-0 place-items-center rounded-lg text-sm font-extrabold", selected ? "bg-royal-600 text-white" : "bg-surface text-navy-800 ring-1 ring-line")}>{o.label}</span>
                <span className="flex-1 pt-1 text-[0.98rem] leading-relaxed" dangerouslySetInnerHTML={{ __html: o.html }} />
                {review && isRight && <Check className="mt-1 size-5 text-success-600" aria-label="Correct answer" />}
              </label>
            );
          })}
        </div>
      )}

      {q.type === "MULTI_SELECT" && (
        <fieldset className="mt-5">
          <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Select all that apply</legend>
          <div className="grid gap-2.5">
            {q.options.map((o) => {
              const ids = value && "optionIds" in value ? value.optionIds : [];
              const checked = ids.includes(o.id);
              const isRight = review?.correctOptionIds.includes(o.id);
              return (
                <label key={o.id} className={cx("flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3", review ? (isRight ? "border-emerald-500 bg-success-50" : checked ? "border-red-400 bg-danger-50" : "border-line") : checked ? "border-royal-600 bg-royal-50" : "border-line bg-white hover:bg-surface")}>
                  <input type="checkbox" className="mt-1.5 size-5 accent-royal-600" checked={checked} disabled={disabled} onChange={() => onChange({ optionIds: checked ? ids.filter((x) => x !== o.id) : [...ids, o.id] })} />
                  <span className="font-bold text-navy-800">{o.label}.</span>
                  <span className="flex-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: o.html }} />
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {q.type === "NUMERIC" && (
        <label className="mt-5 block max-w-xs">
          <span className="text-sm font-semibold text-navy-800">Your answer</span>
          <input
            inputMode="decimal"
            className="mt-1.5 block w-full rounded-xl border-2 border-line px-4 py-3 text-lg font-semibold focus:border-royal-600 focus:outline-none"
            value={value && "value" in value ? value.value : ""}
            disabled={disabled}
            onChange={(e) => onChange({ value: e.target.value.slice(0, 40) })}
            placeholder="e.g. 0.75 or 3/4"
          />
        </label>
      )}

      {q.type === "FILL_BLANK" && (
        <label className="mt-5 block max-w-md">
          <span className="text-sm font-semibold text-navy-800">Fill in the blank</span>
          <input className="mt-1.5 block w-full rounded-xl border-2 border-line px-4 py-3 text-lg focus:border-royal-600 focus:outline-none" value={value && "text" in value ? value.text : ""} disabled={disabled} onChange={(e) => onChange({ text: e.target.value.slice(0, 200) })} />
        </label>
      )}

      {q.type === "MATCHING" && q.matchTargets && (
        <div className="mt-5 grid gap-3">
          {q.options.map((o) => {
            const pairs = value && "pairs" in value ? value.pairs : {};
            return (
              <div key={o.id} className="grid items-center gap-2 rounded-xl border border-line bg-white p-3 sm:grid-cols-2">
                <span className="text-sm font-semibold" dangerouslySetInnerHTML={{ __html: o.html }} />
                <select
                  className="rounded-lg border border-line px-3 py-2.5 text-sm"
                  value={pairs[o.id] ?? ""}
                  disabled={disabled}
                  aria-label="Match with"
                  onChange={(e) => {
                    const next = { ...pairs };
                    if (e.target.value) next[o.id] = e.target.value;
                    else delete next[o.id];
                    onChange({ pairs: next });
                  }}
                >
                  <option value="">Select a match…</option>
                  {q.matchTargets!.map((t) => (
                    <option key={t.key} value={t.key}>
                      {t.html.replace(/<[^>]+>/g, "")}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
