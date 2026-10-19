"use client";

import { CalendarCheck2, CalendarClock, KeyRound, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { AccessState } from "@/server/services/access";
import { ActionForm, SubmitButton, TextField } from "../ui/form";
import { Badge, cx, statusTone } from "../ui/primitives";
import { activateCodeAction } from "@/app/student/actions";

const fmt = (iso?: string) => (iso ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(iso)) : "—");

/**
 * Access status + live countdown. The server is authoritative: we re-sync from
 * /api/v1/me/access every minute and on focus, and only use the local clock to
 * animate between syncs (offset-corrected against the server time).
 */
export function AccessCard({ initial, contact }: { initial: AccessState; contact: string }) {
  const [state, setState] = useState(initial);
  // Offset between server and device clocks, measured after mount (render stays pure).
  const offset = useRef<number | null>(null);
  const [now, setNow] = useState(() => new Date(initial.serverNow).getTime());
  const [syncing, setSyncing] = useState(false);

  const sync = useCallback(async () => {
    setSyncing(true);
    try {
      const r = await fetch("/api/v1/me/access", { cache: "no-store" });
      const j = await r.json();
      if (j.ok) {
        offset.current = new Date(j.data.serverNow).getTime() - Date.now();
        setState(j.data);
      }
    } finally {
      setSyncing(false);
    }
  }, []);

  useEffect(() => {
    offset.current ??= new Date(initial.serverNow).getTime() - Date.now();
    const tick = setInterval(() => setNow(Date.now() + (offset.current ?? 0)), 1000);
    const poll = setInterval(sync, 60_000);
    const onFocus = () => sync();
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(tick);
      clearInterval(poll);
      window.removeEventListener("focus", onFocus);
    };
  }, [sync, initial.serverNow]);

  const expires = state.expiresAt ? new Date(state.expiresAt).getTime() : 0;
  const left = Math.max(0, expires - now);
  const active = state.status === "ACTIVE" && left > 0;
  const d = Math.floor(left / 86_400_000),
    h = Math.floor((left % 86_400_000) / 3_600_000),
    m = Math.floor((left % 3_600_000) / 60_000),
    s = Math.floor((left % 60_000) / 1000);
  const total = (state.durationDays ?? 30) * 86_400_000;
  const pct = active && state.activatedAt ? Math.min(100, (left / Math.max(total, expires - new Date(state.activatedAt).getTime())) * 100) : 0;

  return (
    <div id="activate" className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className={cx("relative px-5 py-5 text-white", active ? "bg-navy-800" : "bg-slate-700")}>
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">Access status</p>
            <div className="mt-1.5 flex items-center gap-2">
              <Badge tone={active ? "green" : statusTone(state.status)} className="!ring-0">
                {active ? "Active" : state.status === "NONE" ? "No active code" : state.status.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
              </Badge>
              {state.codeSuffix && <span className="font-mono text-xs text-white/60">Code …{state.codeSuffix}</span>}
            </div>
          </div>
          <button type="button" onClick={sync} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white" aria-label="Refresh access status">
            <RefreshCw className={cx("size-3.5", syncing && "animate-spin")} aria-hidden /> Sync
          </button>
        </div>
        {active ? (
          <div className="relative mt-4" aria-live="off">
            <p className="sr-only">
              {d} days, {h} hours and {m} minutes remaining
            </p>
            <div className="grid grid-cols-4 gap-2 text-center" aria-hidden>
              {[
                [d, "Days"],
                [h, "Hours"],
                [m, "Mins"],
                [s, "Secs"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/10 py-2">
                  <p className="font-mono text-2xl font-bold tabular-nums">{String(v).padStart(2, "0")}</p>
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-white/60">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15" aria-hidden>
              <div className="h-full rounded-full bg-gold-400" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ) : (
          <p className="relative mt-3 text-sm text-white/85">{state.message}</p>
        )}
      </div>
      <div className="grid gap-4 px-5 py-4 text-sm sm:grid-cols-2">
        <div className="flex items-center gap-2.5">
          <CalendarCheck2 className="size-4 text-royal-600" aria-hidden />
          <div>
            <p className="text-xs text-muted">Activated</p>
            <p className="font-semibold text-navy-800">{fmt(state.activatedAt)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <CalendarClock className="size-4 text-gold-600" aria-hidden />
          <div>
            <p className="text-xs text-muted">Expires</p>
            <p className="font-semibold text-navy-800">{fmt(state.expiresAt)}</p>
          </div>
        </div>
      </div>
      {!active && (
        <div className="border-t border-line bg-surface px-5 py-4">
          <ActionForm action={activateCodeAction} resetOnSuccess onSuccess={() => sync()} className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <TextField className="flex-1" label="Enter access code" name="code" placeholder="PPS-XXXX-XXXX-XXXX" autoComplete="off" autoCapitalize="characters" spellCheck={false} required />
            <SubmitButton pendingText="Activating…">
              <KeyRound className="size-4" aria-hidden /> Activate
            </SubmitButton>
          </ActionForm>
          <p className="mt-3 text-xs text-muted">
            Need an Access Code? To get an access code, reach the Super Admin to get your code ({contact}).
          </p>
        </div>
      )}
    </div>
  );
}
