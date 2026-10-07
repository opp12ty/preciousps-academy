"use client";

import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cx } from "../ui/primitives";

export interface AnnouncementItem {
  tag: string;
  text: string;
  linkLabel: string;
  link: string;
}

/** Announcement strip at the very top of the homepage. Items come from Admin → Homepage & Content → Homepage → Announcements. */
export function AnnouncementCarousel({ items, seconds }: { items: AnnouncementItem[]; seconds: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;
  const current = index % count;
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), Math.min(60, Math.max(3, seconds)) * 1000);
    return () => window.clearInterval(id);
  }, [paused, count, seconds]);
  const go = (step: number) => setIndex((i) => (((i + step) % count) + count) % count);
  return (
    <section aria-roledescription="carousel" aria-label="Announcements" className="bg-gold-500 text-navy-900" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2 sm:px-6">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-400 sm:inline-flex">
          <Megaphone className="size-3.5" aria-hidden /> Announcements
        </span>
        <Megaphone className="size-4 shrink-0 sm:hidden" aria-hidden />
        <div className="grid min-w-0 flex-1 overflow-hidden" aria-live="polite">
          {items.map((a, i) => {
            const active = i === current;
            return (
              <p key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} aria-hidden={!active} className={cx("col-start-1 row-start-1 text-sm font-semibold leading-snug transition-all duration-500 ease-out motion-reduce:transition-none", active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0")}>
                {a.tag && <span className="mr-2 rounded bg-navy-900/90 px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">{a.tag}</span>}
                {a.text}
                {a.link && (
                  <Link href={a.link} tabIndex={active ? 0 : -1} className="ml-2 whitespace-nowrap font-extrabold underline underline-offset-2">
                    {a.linkLabel || "Read more"}
                  </Link>
                )}
              </p>
            );
          })}
        </div>
        {count > 1 && (
          <div className="flex shrink-0 items-center gap-1">
            <button type="button" aria-label="Previous announcement" onClick={() => go(-1)} className="grid size-7 place-items-center rounded-full bg-navy-900/10 hover:bg-navy-900/20"><ChevronLeft className="size-4" /></button>
            <span className="hidden text-xs font-bold tabular-nums sm:inline">{current + 1}/{count}</span>
            <button type="button" aria-label="Next announcement" onClick={() => go(1)} className="grid size-7 place-items-center rounded-full bg-navy-900/10 hover:bg-navy-900/20"><ChevronRight className="size-4" /></button>
          </div>
        )}
      </div>
    </section>
  );
}
