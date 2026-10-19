"use client";

import { BatteryCharging, ChevronLeft, ChevronRight, Laptop, Phone, Printer, Tablet } from "lucide-react";
import { useEffect, useState } from "react";
import { cx } from "../ui/primitives";

export interface PromoSlide { eyebrow: string; title: string; body: string; cta: string; link: string; icon: string }

const ICONS: Record<string, typeof Laptop> = { laptop: Laptop, tablet: Tablet, printer: Printer, battery: BatteryCharging, phone: Phone };
const THEMES = ["from-navy-900 via-navy-800 to-royal-700", "from-royal-700 via-navy-800 to-navy-900", "from-navy-800 via-royal-700 to-navy-900", "from-navy-900 via-royal-700 to-navy-800"];
/** Only telephone, mail and ordinary web links are followed; anything else is dropped. */
const safe = (l: string) => (/^(tel:\+?[0-9 ]+|mailto:[^\s]+|https:\/\/[^\s]+|\/[^\s]*)$/i.test(l.trim()) ? l.trim() : null);

/** The moving banner on the parent's first page. It pauses under the pointer and for people who prefer no motion. */
export function PromoCarousel({ slides, seconds }: { slides: PromoSlide[]; seconds: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  useEffect(() => {
    if (n < 2 || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), Math.max(3, seconds) * 1000);
    return () => clearInterval(t);
  }, [n, paused, seconds]);
  if (!n) return null;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  return (
    <section aria-roledescription="carousel" aria-label="Offers from Fodan Softnet" className="relative overflow-hidden rounded-2xl shadow-card" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="grid">
        {slides.map((s, k) => {
          const Icon = ICONS[s.icon] ?? Laptop;
          const href = safe(s.link);
          const on = k === i;
          return (
            <div key={k} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`} aria-hidden={!on} className={cx("col-start-1 row-start-1 flex items-center gap-4 bg-gradient-to-br px-5 py-5 text-white transition-all duration-700 ease-out sm:gap-6 sm:px-8 sm:py-7", THEMES[k % THEMES.length], on ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0")}>
              <span className={cx("grid size-16 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20 transition-transform duration-700 sm:size-24", on ? "scale-100 rotate-0" : "scale-75 -rotate-6")}>
                <Icon className="size-8 text-gold-400 sm:size-12" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold-400">{s.eyebrow}</p>
                <p className="mt-1 text-lg font-extrabold leading-snug sm:text-2xl">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/80">{s.body}</p>
                {href && s.cta && (
                  <a href={href} tabIndex={on ? 0 : -1} className="mt-3 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-4 py-2 text-sm font-extrabold text-navy-900 hover:bg-gold-500">
                    <Phone className="size-4" aria-hidden /> {s.cta}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {n > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute left-1.5 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:grid"><ChevronLeft className="size-5" /></button>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute right-1.5 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:grid"><ChevronRight className="size-5" /></button>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {slides.map((_, k) => (
              <button key={k} type="button" onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`} aria-current={k === i} className={cx("h-1.5 rounded-full transition-all", k === i ? "w-6 bg-gold-400" : "w-1.5 bg-white/40 hover:bg-white/70")} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
