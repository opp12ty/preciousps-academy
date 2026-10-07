"use client";

import { CheckCircle2, Loader2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useState } from "react";
import { quizAnswerAction, quizStartAction } from "@/app/hub-actions";
import type { QuizMode, quizView } from "@/server/services/hub";
import { Alert, buttonClass, Card, cx } from "./ui/primitives";

type View = Awaited<ReturnType<typeof quizView>>;
export interface QuizGame {
  mode: QuizMode;
  title: string;
  text: string;
  locked?: boolean;
}

/** One question at a time. Every answer is marked on the server; this screen only shows the result. */
export function QuizRunner({ games, lockedMessage }: { games: QuizGame[]; lockedMessage?: string }) {
  const [view, setView] = useState<View | null>(null);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [at, setAt] = useState(0);

  const start = async (mode: QuizMode) => {
    setBusy(mode);
    setError("");
    const r = await quizStartAction(mode);
    if (r.ok) {
      const v = r.data as View;
      setView(v);
      const next = v.questions.findIndex((q) => q.chosen === null);
      setAt(next < 0 ? 0 : next);
    } else setError(r.error);
    setBusy("");
  };
  const answer = async (choice: number) => {
    if (!view || busy) return;
    setBusy("answer");
    const r = await quizAnswerAction(view.attemptId, at, choice);
    if (r.ok) setView(r.data as View);
    else setError(r.error);
    setBusy("");
  };

  if (!view) {
    return (
      <div className="space-y-4">
        {error && <Alert tone="danger">{error}</Alert>}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {games.map((g) => (
            <Card key={g.mode} className="flex flex-col p-5">
              <span className="grid size-12 place-items-center rounded-xl bg-royal-50 text-royal-600"><Trophy className="size-6" aria-hidden /></span>
              <h2 className="mt-3 text-lg font-extrabold text-navy-800">{g.title}</h2>
              <p className="mt-1 text-sm text-muted">{g.text}</p>
              <div className="mt-auto pt-4">
                {g.locked ? (
                  <p className="text-xs font-semibold text-muted">{lockedMessage}</p>
                ) : (
                  <button type="button" disabled={Boolean(busy)} className={buttonClass("primary", "sm")} onClick={() => void start(g.mode)}>
                    {busy === g.mode && <Loader2 className="size-4 animate-spin" />} Play
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (view.finished && view.summary) {
    const s = view.summary;
    return (
      <Card className="mx-auto max-w-2xl p-6 sm:p-8">
        <div className="text-center">
          <Trophy className="mx-auto size-12 text-gold-500" aria-hidden />
          <h2 className="mt-3 text-2xl font-extrabold text-navy-800">{s.score} out of {s.total} · {s.percent}%</h2>
          <p className="mt-1 font-semibold text-royal-600">{s.band}</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-success-50 p-3 text-sm"><p className="font-bold text-success-600">Strengths</p><p className="text-navy-800">{s.strengths.join(", ") || "Keep building them"}</p></div>
          <div className="rounded-xl bg-warn-50 p-3 text-sm"><p className="font-bold text-warn-600">Needs more practice</p><p className="text-navy-800">{s.weak.join(", ") || "None this time"}</p></div>
        </div>
        <ol className="mt-5 space-y-2 text-sm">
          {view.questions.map((q, i) => (
            <li key={i} className="rounded-xl border border-line p-3">
              <p className="font-semibold text-navy-800">{i + 1}. {q.stem}</p>
              <p className={cx("mt-1", q.correct ? "text-success-600" : "text-danger-600")}>Your answer: {q.chosen !== null ? q.options[q.chosen] : "—"}{!q.correct && q.correctIndex != null ? ` · Correct answer: ${q.options[q.correctIndex]}` : ""}</p>
              {q.explanation && <p className="mt-1 text-muted">{q.explanation}</p>}
            </li>
          ))}
        </ol>
        <div className="mt-5 flex justify-center gap-2">
          {!["DAILY"].includes(view.mode) && <button type="button" className={buttonClass("primary")} onClick={() => void start(view.mode)}><RotateCcw className="size-4" /> Play again</button>}
          <button type="button" className={buttonClass("ghost")} onClick={() => setView(null)}>All games</button>
        </div>
      </Card>
    );
  }

  const q = view.questions[at];
  const answered = q.chosen !== null;
  const done = view.questions.filter((x) => x.chosen !== null).length;
  return (
    <Card className="mx-auto max-w-2xl p-5 sm:p-7">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-navy-800">{view.label} · Question {at + 1} of {view.questions.length}</span>
        <span className="text-muted">{q.category}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface"><div className="h-full rounded-full bg-royal-600 transition-all" style={{ width: `${(done / view.questions.length) * 100}%` }} /></div>
      {error && <Alert tone="danger" className="mt-3">{error}</Alert>}
      <p className="mt-5 text-lg font-bold text-navy-800">{q.stem}</p>
      <div className="mt-4 grid gap-2">
        {q.options.map((o, i) => {
          const isAnswer = answered && q.correctIndex === i;
          const isChosen = q.chosen === i;
          return (
            <button key={i} type="button" disabled={answered || Boolean(busy)} onClick={() => void answer(i)} className={cx("flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition", answered ? (isAnswer || (isChosen && q.correct) ? "border-success-600 bg-success-50 text-success-600" : isChosen ? "border-danger-600 bg-danger-50 text-danger-600" : "border-line bg-white text-muted") : "border-line bg-white text-navy-800 hover:border-royal-600 hover:bg-royal-50")}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-xs font-bold text-navy-800">{"ABCD"[i]}</span>
              {o}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-4 rounded-xl bg-surface p-3 text-sm" aria-live="polite">
          <p className={cx("flex items-center gap-1.5 font-bold", q.correct ? "text-success-600" : "text-danger-600")}>{q.correct ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />} {q.correct ? "Correct" : "Not correct"}</p>
          {q.explanation && <p className="mt-1 text-navy-800">{q.explanation}</p>}
        </div>
      )}
      <div className="mt-5 flex justify-between">
        <button type="button" className="text-xs font-semibold text-muted hover:underline" onClick={() => setView(null)}>Leave (your place is kept)</button>
        {answered && at < view.questions.length - 1 && <button type="button" className={buttonClass("primary", "sm")} onClick={() => setAt(at + 1)}>Next question</button>}
      </div>
    </Card>
  );
}
