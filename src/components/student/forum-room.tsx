"use client";

import { Clock, Loader2, Lock, Send, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { roomFeed } from "@/server/services/forum";
import { reportMessageAction } from "@/app/hub-actions";
import { buttonClass, cx } from "../ui/primitives";

type Feed = Awaited<ReturnType<typeof roomFeed>>;
const POLL_MS = 5_000;

const clock = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h ? `${h}h ${String(m).padStart(2, "0")}m` : `${m}m ${String(s % 60).padStart(2, "0")}s`;
};
const time = (iso: string) => new Intl.DateTimeFormat("en-NG", { hour: "numeric", minute: "2-digit", day: "numeric", month: "short" }).format(new Date(iso));

/** One open forum room. The server decides everything; this only shows it and asks again every few seconds. */
export function ForumRoom({ initial, apiBase = "/api/v1/forum/rooms", timed = true }: { initial: Feed; apiBase?: string; timed?: boolean }) {
  const [reported, setReported] = useState<string[]>([]);
  const report = async (id: string) => {
    const reason = window.prompt("Why are you reporting this message? Type one of: HARASSMENT, INAPPROPRIATE, SCAM, PRIVACY, SUSPICIOUS, CHILD_SAFETY, SPAM, MISLEADING", "INAPPROPRIATE");
    if (!reason) return;
    const r = await reportMessageAction(id, reason.trim().toUpperCase());
    if (r.ok) setReported((x) => [...x, id]);
    else setError(r.error);
  };
  const [feed, setFeed] = useState(initial);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [left, setLeft] = useState(initial.state.remainingSeconds);
  const list = useRef<HTMLDivElement>(null);
  const stick = useRef(true);
  const url = `${apiBase}/${initial.room.id}/messages`;

  const load = useCallback(async () => {
    if (document.visibilityState === "hidden") return; // time away from the page is not charged
    try {
      const r = await fetch(url, { cache: "no-store" }).then((x) => x.json());
      if (r.ok) {
        setFeed(r.data);
        setLeft(r.data.state.remainingSeconds);
      }
    } catch {
      /* offline: keep what is on screen and try again */
    }
  }, [url]);

  useEffect(() => {
    const poll = setInterval(load, POLL_MS);
    const tick = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => {
      clearInterval(poll);
      clearInterval(tick);
    };
  }, [load]);

  // Keep the newest message in view unless the student has scrolled up to read older ones.
  useEffect(() => {
    const el = list.current;
    if (el && stick.current) el.scrollTop = el.scrollHeight;
  }, [feed.messages.length]);

  const send = async () => {
    const body = text.trim();
    if (!body || sending) return;
    setSending(true);
    setError(null);
    try {
      const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ body }) }).then((x) => x.json());
      if (r.ok) {
        setText("");
        stick.current = true;
        await load();
      } else setError(r.error?.message ?? "The message could not be sent.");
    } catch {
      setError("You appear to be offline. Check your connection and try again.");
    }
    setSending(false);
  };

  const { state, room, messages } = feed;
  const max = state.maxMessageLength;
  return (
    <div className="flex h-[calc(100dvh-13rem)] min-h-[26rem] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-surface px-4 py-2.5 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-navy-800">
          <ShieldCheck className="size-4 text-success-600" aria-hidden /> Moderated room · staff can read every message
        </span>
        {state.canUse && timed && (
          <span className={cx("flex items-center gap-1.5 rounded-full px-2.5 py-1 font-bold tabular-nums", left < 600 ? "bg-warn-50 text-warn-600" : "bg-royal-50 text-royal-600")} aria-live="off">
            <Clock className="size-3.5" aria-hidden /> {clock(left)} left today
          </span>
        )}
      </div>

      {state.canUse ? (
        <div
          ref={list}
          onScroll={(e) => {
            const el = e.currentTarget;
            stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
          }}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          role="log"
          aria-live="polite"
          aria-label={`Messages in ${room.name}`}
        >
          {messages.length === 0 && <p className="py-10 text-center text-sm text-muted">No messages yet. Start the discussion with a question about school work.</p>}
          {messages.map((m) => (
            <div key={m.id} className={cx("flex", m.mine ? "justify-end" : "justify-start")}>
              <div className={cx("max-w-[85%] rounded-2xl px-3.5 py-2 sm:max-w-[70%]", m.staff ? "bg-gold-50 ring-1 ring-gold-400" : m.mine ? "bg-royal-600 text-white" : "bg-surface text-ink")}>
                <p className={cx("text-xs font-bold", m.mine && !m.staff ? "text-white/80" : "text-navy-800")}>
                  {m.mine && !m.staff ? "You" : m.author}
                  {m.className && !m.mine && <span className="font-medium text-muted"> · {m.className}</span>}
                </p>
                <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">{m.body}</p>
                <p className={cx("mt-0.5 text-right text-[0.65rem]", m.mine && !m.staff ? "text-white/70" : "text-muted")}>
                  {time(m.at)}
                  {!m.mine && !m.staff && (reported.includes(m.id) ? <span className="ml-2 font-semibold">Reported</span> : <button type="button" onClick={() => void report(m.id)} className="ml-2 font-semibold underline">Report</button>)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid flex-1 place-items-center p-6 text-center">
          <div>
            <Lock className="mx-auto size-8 text-muted" aria-hidden />
            <p className="mt-3 max-w-md font-semibold text-navy-800">{state.blocked}</p>
          </div>
        </div>
      )}

      {state.canUse &&
        (room.isLocked ? (
          <p className="border-t border-line bg-surface px-4 py-3 text-center text-sm text-muted">This room is locked. You can read it but not post.</p>
        ) : (
          <form
            className="border-t border-line p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            {error && (
              <p role="alert" className="mb-2 rounded-xl bg-danger-50 px-3 py-2 text-sm font-medium text-danger-600">
                {error}
              </p>
            )}
            <div className="flex items-end gap-2">
              <label className="sr-only" htmlFor="forum-message">
                Message
              </label>
              <textarea
                id="forum-message"
                rows={2}
                maxLength={max}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
                placeholder="Ask or answer a question about school work…"
                className="min-h-[2.75rem] flex-1 resize-none rounded-xl border border-line bg-surface px-3 py-2 text-sm focus:border-royal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-royal-100"
              />
              <button disabled={sending || !text.trim()} className={buttonClass("primary", "md")} aria-label="Send message">
                {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />} <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <p className="mt-1.5 flex justify-between text-[0.7rem] text-muted">
              <span>No phone numbers, e-mails, addresses, locations, links or social-media contacts.</span>
              <span className="tabular-nums">
                {text.length}/{max}
              </span>
            </p>
          </form>
        ))}
    </div>
  );
}
