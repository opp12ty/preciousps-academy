"use client";

import { Bot, Loader2, Rocket, Send, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { devAskAction, devClearErrorsAction, devRedeployAction } from "@/app/admin/actions";
import { ConfirmAction } from "../ui/interactive";
import { Alert, buttonClass, cx, inputClass } from "../ui/primitives";

type Turn = { role: "user" | "assistant"; text: string; used?: string[] };

const SUGGESTIONS = ["Is the latest deployment live, and what did it change?", "Why did the last deployment fail?", "What errors have users met today?", "Look up error reference …", "How big is the database?"];

/** Ask about errors, GitHub and Vercel in plain language. Read-only apart from redeploy and opening an issue, each only on request. */
export function DeveloperAssistant({ ready }: { ready: boolean }) {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const box = useRef<HTMLDivElement>(null);
  const ask = async (text: string) => {
    const question = text.trim();
    if (!question || busy) return;
    setBusy(true);
    setError("");
    setQ("");
    const history = turns.map(({ role, text: t }) => ({ role, text: t }));
    setTurns((t) => [...t, { role: "user", text: question }]);
    const r = await devAskAction(history, question);
    if (r.ok) {
      const d = r.data as { answer: string; used: string[] };
      setTurns((t) => [...t, { role: "assistant", text: d.answer, used: d.used }]);
    } else setError(r.error);
    setBusy(false);
    setTimeout(() => box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" }), 50);
  };
  if (!ready) return <Alert tone="info" title="The assistant is not switched on">Add <code>ANTHROPIC_API_KEY</code> to the project&apos;s environment variables in Vercel and redeploy. Everything else on this page works without it.</Alert>;
  return (
    <div className="space-y-3">
      <div ref={box} className="scroll-75 space-y-3 rounded-xl border border-line bg-surface p-3" aria-live="polite">
        {turns.length === 0 && (
          <div className="flex flex-wrap gap-2 p-2">
            {SUGGESTIONS.map((s) => <button key={s} type="button" className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 ring-1 ring-line hover:bg-royal-50" onClick={() => (s.endsWith("…") ? setQ(s.replace("…", "")) : ask(s))}>{s}</button>)}
          </div>
        )}
        {turns.map((t, i) => (
          <div key={i} className={cx("max-w-[92%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed", t.role === "user" ? "ml-auto bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line")}>
            <p className="whitespace-pre-wrap">{t.text}</p>
            {t.used && t.used.length > 0 && <p className="mt-1.5 text-[0.68rem] text-muted">Looked up: {[...new Set(t.used)].join(", ").replace(/_/g, " ")}</p>}
          </div>
        ))}
        {busy && <p className="flex items-center gap-2 px-2 text-sm text-muted"><Loader2 className="size-4 animate-spin" /> Looking that up…</p>}
      </div>
      {error && <Alert tone="danger">{error}</Alert>}
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); void ask(q); }}>
        <input className={inputClass} value={q} onChange={(e) => setQ(e.target.value)} maxLength={2000} placeholder="Ask in your own words, e.g. Why did the last deployment fail?" aria-label="Question for the developer assistant" />
        <button className={buttonClass("primary")} disabled={busy || q.trim().length < 2}><Send className="size-4" /> Ask</button>
      </form>
      <p className="flex items-start gap-1.5 text-xs text-muted"><Bot className="mt-0.5 size-3.5 shrink-0" aria-hidden /> It can read the error log, GitHub commits, Vercel deployments and build output, start a redeploy and open a GitHub issue when you ask. It cannot edit the code or touch student data.</p>
    </div>
  );
}

export function RedeployButton({ ready }: { ready: boolean }) {
  if (!ready) return null;
  return <ConfirmAction label="Redeploy now" icon={<Rocket className="size-4" />} variant="primary" confirmVariant="primary" confirmLabel="Start deployment" title="Start a new deployment?" description="Vercel builds and publishes the current code again. The site stays up while it builds. Use this after changing an environment variable." run={() => devRedeployAction()} />;
}

export function ClearErrorsButton() {
  return <ConfirmAction label="Clear the log" icon={<Trash2 className="size-4" />} title="Clear the error log?" description="Every recorded error is removed. Do this after a fault has been fixed, so that new ones stand out." run={() => devClearErrorsAction()} />;
}

