"use client";

/* eslint-disable @next/next/no-img-element */
import { AlertTriangle, ChevronLeft, ChevronRight, CloudOff, Eraser, Flag, Grid3x3, Loader2, Maximize, Send, ShieldCheck, Timer, Wifi, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "../ui/interactive";
import { buttonClass, cx } from "../ui/primitives";
import { QuestionView } from "./question-view";
import { isAnswered, type AnswerValue, type RenderedQuestion } from "./types";

interface Props {
  attemptId: string;
  examTitle: string;
  studentName: string;
  markUrl: string;
  platformName: string;
  serverNow: string;
  deadlineAt: string;
  autosaveSeconds: number;
  fullscreenGuidance: boolean;
  questions: (RenderedQuestion & { response: AnswerValue; flagged: boolean })[];
}

type SaveState = "saved" | "saving" | "pending" | "offline" | "error";

/**
 * Professional CBT interface (§33–§35).
 * - The SERVER owns the clock: the countdown is offset-corrected from server time
 *   and the server rejects late answers and auto-submits on expiry.
 * - Answers autosave continuously; unsent changes survive refresh/network loss
 *   in sessionStorage and are re-sent on reconnect (safe temporary state only).
 * - Browser-detectable anomalies are reported, never "prevented".
 */
export function CbtClient(p: Props) {
  const router = useRouter();
  const storeKey = `pps:cbt:${p.attemptId}`;
  const sessionKey = `pps:cbt-session:${p.attemptId}`;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>(() => Object.fromEntries(p.questions.map((q) => [q.id, q.response])));
  const [flags, setFlags] = useState<Record<string, boolean>>(() => Object.fromEntries(p.questions.map((q) => [q.id, q.flagged])));
  const [save, setSave] = useState<SaveState>("saved");
  const [online, setOnline] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fatal, setFatal] = useState<string | null>(null);
  const [conflict, setConflict] = useState(false);
  const [fsPrompt, setFsPrompt] = useState(p.fullscreenGuidance);

  // Server clock offset is measured after mount; until then "now" is the server's time.
  const offset = useRef(0);
  const deadlineMs = new Date(p.deadlineAt).getTime();
  const [now, setNow] = useState(() => new Date(p.serverNow).getTime());
  const dirty = useRef<Map<string, { attemptQuestionId: string; response: AnswerValue; flagged: boolean; responseMs: number }>>(new Map());
  const shownAt = useRef<number>(0);
  const timeOn = useRef<Record<string, number>>({});
  const clientSessionId = useRef<string>("");
  const submittedRef = useRef(false);
  const fsPromptSeen = useRef(false);

  const q = p.questions[index];
  const total = p.questions.length;
  const answeredCount = p.questions.filter((x) => isAnswered(answers[x.id])).length;
  const flaggedCount = p.questions.filter((x) => flags[x.id]).length;
  const remainingMs = Math.max(0, deadlineMs - now);

  /* ---------- session identity (single active exam session) */
  useEffect(() => {
    offset.current = new Date(p.serverNow).getTime() - Date.now();
    shownAt.current = Date.now();
    let id = sessionStorage.getItem(sessionKey);
    if (!id) {
      // New window or device: claim the attempt (the server records a takeover).
      id = crypto.randomUUID();
      sessionStorage.setItem(sessionKey, id);
      void fetch(`/api/v1/attempts/${p.attemptId}/session`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ clientSessionId: id }) });
    }
    clientSessionId.current = id;
    // Re-apply unsent answers from a previous page load.
    try {
      const pending = JSON.parse(sessionStorage.getItem(storeKey) ?? "null") as Record<string, { response: AnswerValue; flagged: boolean; responseMs: number }> | null;
      if (pending) {
        for (const [qid, v] of Object.entries(pending)) dirty.current.set(qid, { attemptQuestionId: qid, ...v });
        setTimeout(() => {
          setAnswers((a) => ({ ...a, ...Object.fromEntries(Object.entries(pending).map(([k, v]) => [k, v.response])) }));
          setFlags((f) => ({ ...f, ...Object.fromEntries(Object.entries(pending).map(([k, v]) => [k, v.flagged])) }));
          setSave("pending");
        }, 0);
      }
    } catch {
      /* ignore corrupted local state */
    }
  }, [sessionKey, storeKey, p.attemptId, p.serverNow]);

  const persistLocal = useCallback(() => {
    const obj = Object.fromEntries(Array.from(dirty.current.entries()).map(([k, v]) => [k, { response: v.response, flagged: v.flagged, responseMs: v.responseMs }]));
    if (Object.keys(obj).length) sessionStorage.setItem(storeKey, JSON.stringify(obj));
    else sessionStorage.removeItem(storeKey);
  }, [storeKey]);

  /* ---------- networking */
  const post = useCallback(async (path: string, body: unknown) => {
    const r = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), keepalive: path.endsWith("/events") });
    const j = await r.json().catch(() => ({ ok: false, error: { message: "Network error" } }));
    return { status: r.status, ...j } as { status: number; ok: boolean; data?: Record<string, unknown>; error?: { code: string; message: string } };
  }, []);

  const flush = useCallback(async (): Promise<boolean> => {
    if (!dirty.current.size) {
      setSave("saved");
      return true;
    }
    if (!navigator.onLine) {
      setSave("offline");
      return false;
    }
    const batch = Array.from(dirty.current.values());
    setSave("saving");
    try {
      const r = await post(`/api/v1/attempts/${p.attemptId}/answers`, { clientSessionId: clientSessionId.current, answers: batch });
      if (r.ok) {
        for (const b of batch) if (dirty.current.get(b.attemptQuestionId) === b) dirty.current.delete(b.attemptQuestionId);
        persistLocal();
        if (r.data?.serverNow) offset.current = new Date(String(r.data.serverNow)).getTime() - Date.now();
        setSave(dirty.current.size ? "pending" : "saved");
        return true;
      }
      if (r.error?.code === "ATTEMPT_CLOSED") {
        submittedRef.current = true;
        sessionStorage.removeItem(storeKey);
        router.replace(`/cbt/${p.attemptId}`);
        router.refresh();
        return false;
      }
      if (r.error?.code === "CONFLICT") setConflict(true);
      if (r.status === 401) setFatal("Your session has ended. Sign in again to continue — your saved answers are safe.");
      setSave("error");
      return false;
    } catch {
      setSave("offline");
      return false;
    }
  }, [p.attemptId, persistLocal, post, router, storeKey]);

  const report = useCallback((type: string) => {
    if (submittedRef.current) return;
    void post(`/api/v1/attempts/${p.attemptId}/events`, { type }).catch(() => undefined);
  }, [p.attemptId, post]);

  /* ---------- answering */
  const record = useCallback(
    (qid: string, response: AnswerValue, flagged: boolean) => {
      const spent = (timeOn.current[qid] ?? 0) + (Date.now() - shownAt.current);
      dirty.current.set(qid, { attemptQuestionId: qid, response, flagged, responseMs: Math.min(spent, 3_600_000) });
      persistLocal();
      setSave("pending");
    },
    [persistLocal],
  );

  const setAnswer = (v: AnswerValue) => {
    setAnswers((a) => ({ ...a, [q.id]: v }));
    record(q.id, v, flags[q.id] ?? false);
  };
  const toggleFlag = () => {
    const f = !flags[q.id];
    setFlags((x) => ({ ...x, [q.id]: f }));
    record(q.id, answers[q.id] ?? null, f);
  };
  const clearAnswer = () => setAnswer(null);

  const go = useCallback(
    (i: number) => {
      const cur = p.questions[index];
      timeOn.current[cur.id] = (timeOn.current[cur.id] ?? 0) + (Date.now() - shownAt.current);
      shownAt.current = Date.now();
      setIndex(Math.max(0, Math.min(total - 1, i)));
      setPaletteOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [index, p.questions, total],
  );

  /* ---------- submit */
  const submit = useCallback(
    async (auto = false) => {
      if (submittedRef.current && !auto) return;
      setSubmitting(true);
      await flush();
      submittedRef.current = true;
      try {
        const r = await post(`/api/v1/attempts/${p.attemptId}/submit`, {});
        sessionStorage.removeItem(storeKey);
        if (r.ok && r.data?.resultId) router.replace(`/student/results/${r.data.resultId}?submitted=${auto ? "auto" : "1"}`);
        else {
          router.replace(`/cbt/${p.attemptId}`);
          router.refresh();
        }
      } catch {
        submittedRef.current = false;
        setSubmitting(false);
        setFatal("We could not reach the server to submit. Your answers are saved — check your connection and try again. The server will submit automatically when time runs out.");
      }
    },
    [flush, p.attemptId, post, router, storeKey],
  );

  /* ---------- timers */
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now() + offset.current), 500);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => void flush(), Math.max(3, p.autosaveSeconds) * 1000);
    return () => clearInterval(t);
  }, [flush, p.autosaveSeconds]);
  useEffect(() => {
    if (save !== "pending") return;
    const t = setTimeout(() => void flush(), 1500);
    return () => clearTimeout(t);
  }, [save, answers, flags, flush]);
  useEffect(() => {
    if (remainingMs <= 0 && !submittedRef.current) void submit(true);
  }, [remainingMs, submit]);

  /* ---------- anomaly detection + connectivity */
  useEffect(() => {
    const vis = () => document.visibilityState === "hidden" && report("TAB_HIDDEN");
    const blur = () => report("WINDOW_BLUR");
    const fs = () => !document.fullscreenElement && fsPromptSeen.current && report("FULLSCREEN_EXIT");
    const block = (type: string) => (e: Event) => {
      e.preventDefault();
      report(type);
    };
    const copy = block("COPY_ATTEMPT");
    const paste = block("PASTE_ATTEMPT");
    const ctx = block("CONTEXT_MENU");
    const off = () => {
      setOnline(false);
      setSave("offline");
    };
    const on = () => {
      setOnline(true);
      report("ONLINE");
      void flush();
    };
    const unload = (e: BeforeUnloadEvent) => {
      if (dirty.current.size && !submittedRef.current) {
        e.preventDefault();
      }
    };
    document.addEventListener("visibilitychange", vis);
    window.addEventListener("blur", blur);
    document.addEventListener("fullscreenchange", fs);
    document.addEventListener("copy", copy);
    document.addEventListener("paste", paste);
    document.addEventListener("contextmenu", ctx);
    window.addEventListener("offline", off);
    window.addEventListener("online", on);
    window.addEventListener("beforeunload", unload);
    if (!navigator.onLine) setTimeout(off, 0);
    return () => {
      document.removeEventListener("visibilitychange", vis);
      window.removeEventListener("blur", blur);
      document.removeEventListener("fullscreenchange", fs);
      document.removeEventListener("copy", copy);
      document.removeEventListener("paste", paste);
      document.removeEventListener("contextmenu", ctx);
      window.removeEventListener("offline", off);
      window.removeEventListener("online", on);
      window.removeEventListener("beforeunload", unload);
    };
  }, [flush, report]);

  /* ---------- keyboard shortcuts */
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (reviewOpen || confirmOpen || (e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "SELECT") return;
      const k = e.key.toLowerCase();
      if (k === "n" || e.key === "ArrowRight") go(index + 1);
      else if (k === "p" || e.key === "ArrowLeft") go(index - 1);
      else if (k === "f") toggleFlag();
      else if ((q.type === "MCQ" || q.type === "TRUE_FALSE") && /^[a-h]$/.test(k)) {
        const opt = q.options.find((o) => o.label.toLowerCase() === k);
        if (opt) setAnswer({ optionId: opt.id });
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  });

  const timeText = useMemo(() => {
    const s = Math.floor(remainingMs / 1000);
    const h = Math.floor(s / 3600),
      m = Math.floor((s % 3600) / 60),
      sec = s % 60;
    return `${h ? `${String(h).padStart(2, "0")}:` : ""}${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }, [remainingMs]);
  const low = remainingMs < 5 * 60_000;
  const critical = remainingMs < 60_000;

  const unanswered = p.questions.filter((x) => !isAnswered(answers[x.id]));

  const palette = (
    <div>
      <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
        {p.questions.map((x, i) => {
          const ans = isAnswered(answers[x.id]);
          return (
            <button
              key={x.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Question ${i + 1}${ans ? ", answered" : ", unanswered"}${flags[x.id] ? ", flagged" : ""}${i === index ? ", current" : ""}`}
              aria-current={i === index ? "step" : undefined}
              className={cx(
                "relative grid h-10 place-items-center rounded-lg text-sm font-bold tabular-nums transition",
                i === index ? "ring-2 ring-navy-800 ring-offset-2" : "",
                ans ? "bg-royal-600 text-white" : "bg-white text-navy-800 ring-1 ring-line",
              )}
            >
              {i + 1}
              {flags[x.id] && <span className="absolute -right-1 -top-1 size-3 rounded-full bg-gold-500 ring-2 ring-white" aria-hidden />}
            </button>
          );
        })}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted">
        <li className="flex items-center gap-2"><span className="size-3 rounded bg-royal-600" /> Answered ({answeredCount})</li>
        <li className="flex items-center gap-2"><span className="size-3 rounded bg-white ring-1 ring-line" /> Unanswered ({total - answeredCount})</li>
        <li className="flex items-center gap-2"><span className="size-3 rounded-full bg-gold-500" /> Flagged ({flaggedCount})</li>
        <li className="flex items-center gap-2"><span className="size-3 rounded ring-2 ring-navy-800" /> Current</li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-dvh bg-surface pb-28 lg:pb-8">
      {/* Sticky header with server-synced timer */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-5">
          <img src={p.markUrl} alt="Precious PS Academy crest" className="size-9 shrink-0 rounded-lg object-contain" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.7rem] font-extrabold tracking-[0.12em] text-gold-600">{p.platformName}</p>
            <p className="truncate text-sm font-bold text-navy-800">{p.examTitle}</p>
            <p className="hidden truncate text-xs text-muted sm:block">{p.studentName}</p>
          </div>
          <div
            role="timer"
            aria-live={critical ? "assertive" : "off"}
            aria-label={`Time remaining ${timeText}`}
            className={cx("flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-lg font-bold tabular-nums sm:text-xl", critical ? "animate-pulse bg-danger-600 text-white" : low ? "bg-warn-50 text-warn-600" : "bg-navy-800 text-white")}
          >
            <Timer className="size-5" aria-hidden />
            {timeText}
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 pb-2 text-xs sm:px-5">
          <span className="font-semibold text-navy-800">
            Question {index + 1} of {total}
          </span>
          <span className="flex items-center gap-1.5 text-muted" aria-live="polite">
            {!online ? (
              <><CloudOff className="size-3.5 text-danger-600" /> Offline — answers kept on this device</>
            ) : save === "saving" ? (
              <><Loader2 className="size-3.5 animate-spin" /> Saving…</>
            ) : save === "pending" ? (
              <><Loader2 className="size-3.5" /> Unsaved changes</>
            ) : save === "error" ? (
              <><AlertTriangle className="size-3.5 text-danger-600" /> Save failed — retrying</>
            ) : (
              <><ShieldCheck className="size-3.5 text-success-600" /> All answers saved</>
            )}
          </span>
        </div>
        <div className="h-1 bg-slate-100" aria-hidden>
          <div className="h-full bg-royal-600 transition-all" style={{ width: `${(answeredCount / total) * 100}%` }} />
        </div>
      </header>

      {(fatal || conflict || !online) && (
        <div className="mx-auto mt-3 max-w-6xl px-3 sm:px-5">
          <div role="alert" className="flex items-start gap-3 rounded-xl border border-amber-200 bg-warn-50 px-4 py-3 text-sm text-warn-600">
            {online ? <AlertTriangle className="mt-0.5 size-4 shrink-0" /> : <Wifi className="mt-0.5 size-4 shrink-0" />}
            <div className="flex-1">
              {fatal ??
                (conflict
                  ? "This examination is open in another window or device. Answers from this window are not being saved."
                  : "You are offline. Keep answering — your answers are stored on this device and will be saved automatically when you reconnect. The timer continues on the server.")}
            </div>
            {conflict && (
              <button
                className="font-bold underline"
                onClick={async () => {
                  await post(`/api/v1/attempts/${p.attemptId}/session`, { clientSessionId: clientSessionId.current });
                  setConflict(false);
                  void flush();
                }}
              >
                Use this window
              </button>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-5 px-3 py-4 sm:px-5 lg:grid-cols-[1fr_17rem]">
        <section aria-labelledby="q-heading" className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 id="q-heading" className="text-sm font-extrabold uppercase tracking-wide text-royal-600">
              Question {index + 1}
            </h2>
            <span className="text-xs font-semibold text-muted">
              {q.marks} mark{q.marks === 1 ? "" : "s"}
            </span>
          </div>
          <QuestionView key={q.id} q={q} value={answers[q.id]} onChange={setAnswer} disabled={submitting} />
          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-4">
            <button type="button" onClick={toggleFlag} aria-pressed={Boolean(flags[q.id])} className={buttonClass(flags[q.id] ? "gold" : "secondary", "sm")}>
              <Flag className="size-4" /> {flags[q.id] ? "Flagged" : "Flag"}
            </button>
            <button type="button" onClick={clearAnswer} disabled={!isAnswered(answers[q.id])} className={buttonClass("secondary", "sm")}>
              <Eraser className="size-4" /> Clear answer
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="mt-4 hidden items-center justify-between gap-2 lg:flex">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className={buttonClass("secondary")}>
              <ChevronLeft className="size-4" /> Previous
            </button>
            <div className="flex gap-2">
              <button type="button" onClick={() => setReviewOpen(true)} className={buttonClass("secondary")}>
                Review
              </button>
              {index < total - 1 ? (
                <button type="button" onClick={() => go(index + 1)} className={buttonClass("primary")}>
                  Next <ChevronRight className="size-4" />
                </button>
              ) : (
                <button type="button" onClick={() => setConfirmOpen(true)} className={buttonClass("navy")}>
                  <Send className="size-4" /> Submit
                </button>
              )}
            </div>
          </div>
          <p className="mt-4 hidden text-xs text-muted lg:block">Shortcuts: A–D select · N / → next · P / ← previous · F flag</p>
        </section>

        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-4 rounded-2xl border border-line bg-white p-4 shadow-card">
            <p className="text-sm font-bold text-navy-800">Question palette</p>
            {palette}
            <button type="button" onClick={() => setConfirmOpen(true)} className={buttonClass("navy", "md", "w-full")}>
              <Send className="size-4" /> Submit examination
            </button>
          </div>
        </aside>
      </div>

      {/* Mobile bottom bar */}
      <nav aria-label="Question navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-lift lg:hidden">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className={buttonClass("secondary", "lg")}>
            <ChevronLeft className="size-5" /> Prev
          </button>
          <button type="button" onClick={() => setPaletteOpen(true)} className={buttonClass("secondary", "lg", "px-4")} aria-label="Open question palette">
            <Grid3x3 className="size-5" />
          </button>
          {index < total - 1 ? (
            <button type="button" onClick={() => go(index + 1)} className={buttonClass("primary", "lg")}>
              Next <ChevronRight className="size-5" />
            </button>
          ) : (
            <button type="button" onClick={() => setConfirmOpen(true)} className={buttonClass("navy", "lg")}>
              Submit
            </button>
          )}
        </div>
      </nav>

      {paletteOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Question palette">
          <button className="absolute inset-0 bg-navy-950/50" aria-label="Close palette" onClick={() => setPaletteOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80dvh] overflow-y-auto rounded-t-3xl bg-white p-5 pb-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-bold text-navy-800">Questions</p>
              <button onClick={() => setPaletteOpen(false)} aria-label="Close" className="rounded-lg p-1">
                <X className="size-5" />
              </button>
            </div>
            {palette}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button type="button" className={buttonClass("secondary")} onClick={() => { setPaletteOpen(false); setReviewOpen(true); }}>
                Review
              </button>
              <button type="button" className={buttonClass("navy")} onClick={() => { setPaletteOpen(false); setConfirmOpen(true); }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal open={reviewOpen} onClose={() => setReviewOpen(false)} title="Review your answers" wide>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-royal-50 p-3"><p className="text-xl font-extrabold text-royal-700">{answeredCount}</p><p className="text-xs text-muted">Answered</p></div>
            <div className="rounded-xl bg-surface p-3"><p className="text-xl font-extrabold text-navy-800">{total - answeredCount}</p><p className="text-xs text-muted">Unanswered</p></div>
            <div className="rounded-xl bg-gold-50 p-3"><p className="text-xl font-extrabold text-gold-600">{flaggedCount}</p><p className="text-xs text-muted">Flagged</p></div>
          </div>
          {palette}
          <p className="text-xs text-muted">Tap a number to go to that question.</p>
        </div>
      </Modal>

      <Modal open={confirmOpen} onClose={() => !submitting && setConfirmOpen(false)} title="Submit examination?">
        <div className="space-y-4 text-sm">
          <p className="text-muted">
            You have answered <strong className="text-navy-800">{answeredCount}</strong> of <strong className="text-navy-800">{total}</strong> questions.
          </p>
          {unanswered.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-warn-50 p-3 text-warn-600">
              <p className="font-semibold">{unanswered.length} question(s) unanswered:</p>
              <p className="mt-1 flex flex-wrap gap-1">
                {unanswered.slice(0, 30).map((x) => (
                  <button key={x.id} className="rounded bg-white px-2 py-0.5 font-bold ring-1 ring-amber-200" onClick={() => { setConfirmOpen(false); go(p.questions.indexOf(x)); }}>
                    {p.questions.indexOf(x) + 1}
                  </button>
                ))}
              </p>
            </div>
          )}
          {flaggedCount > 0 && <p className="text-muted">{flaggedCount} question(s) are flagged for review.</p>}
          <p className="font-semibold text-navy-800">Once submitted, you cannot change your answers.</p>
          <div className="flex justify-end gap-2">
            <button type="button" className={buttonClass("secondary")} disabled={submitting} onClick={() => setConfirmOpen(false)}>
              Keep working
            </button>
            <button type="button" className={buttonClass("navy")} disabled={submitting} onClick={() => submit(false)}>
              {submitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />} Submit now
            </button>
          </div>
        </div>
      </Modal>

      {fsPrompt && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lift">
            <p className="text-lg font-extrabold text-navy-800">Before you begin</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
              <li>The timer is controlled by the examination server and keeps running if you leave.</li>
              <li>Your answers save automatically. If your network drops, keep going — they are kept on this device.</li>
              <li>Leaving this window, switching tabs and copy/paste are recorded for the examination office.</li>
            </ul>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className={buttonClass("primary")}
                onClick={async () => {
                  fsPromptSeen.current = true;
                  setFsPrompt(false);
                  try {
                    await document.documentElement.requestFullscreen?.();
                  } catch {
                    /* not supported (e.g. iPhone) */
                  }
                }}
              >
                <Maximize className="size-4" /> Enter full screen
              </button>
              <button type="button" className={buttonClass("secondary")} onClick={() => setFsPrompt(false)}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {submitting && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-white/80 backdrop-blur-sm" role="status" aria-live="assertive">
          <div className="flex flex-col items-center gap-3 text-navy-800">
            <Loader2 className="size-8 animate-spin text-royal-600" />
            <p className="font-bold">Submitting your examination…</p>
          </div>
        </div>
      )}
    </div>
  );
}
