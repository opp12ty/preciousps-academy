"use client";

import { useEffect, useState } from "react";

/** The current time and date in Lagos, updated every second. Renders nothing until mounted, so no mismatch. */
export function LiveClock({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  if (!now) return null;
  const time = new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(now);
  const date = new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now);
  return (
    <div className={className} aria-label={`Lagos time ${time}, ${date}`}>
      <p className="text-[0.62rem] font-bold uppercase tracking-wider text-muted">Lagos time · WAT</p>
      <p className="font-mono text-lg font-bold tabular-nums text-royal-600" aria-live="off">{time}</p>
      <p className="text-xs font-semibold text-navy-800">{date}</p>
    </div>
  );
}
