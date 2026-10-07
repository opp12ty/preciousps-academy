"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cx } from "../ui/primitives";

export interface CarouselSlide {
  title: string;
  text: string;
  linkLabel: string;
  link: string;
}

/** Homepage information carousel. Slides come from Admin → Homepage & Content → Homepage → Carousel. */
export function HomeCarousel({ slides, seconds, dark }: { slides: CarouselSlide[]; seconds: number; dark?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const current = index % count;

  useEffect(() => {
    if (paused || count < 2) return;
    // People who ask their device for less motion change slides themselves.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), Math.min(60, Math.max(3, seconds)) * 1000);
    return () => window.clearInterval(id);
  }, [paused, count, seconds]);

  const go = (step: number) => setIndex((i) => (((i + step) % count) + count) % count);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Latest information"
      className={dark ? "bg-navy-900" : "border-b border-line bg-surface"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
        {count > 1 && (
          <button type="button" aria-label="Previous slide" onClick={() => go(-1)} className={cx("hidden size-9 shrink-0 place-items-center rounded-full sm:grid", dark ? "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20" : "bg-white text-navy-800 shadow-card ring-1 ring-line hover:bg-royal-50")}>
            <ChevronLeft className="size-5" />
          </button>
        )}
        <div className="min-w-0 flex-1">
          {/* Every slide shares one grid cell, so the box is as tall as the tallest slide and never jumps. */}
          <div className={cx("grid overflow-hidden rounded-2xl", dark ? "glass" : "bg-white shadow-card ring-1 ring-line")}>
            {slides.map((s, i) => {
              const active = i === current;
              return (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={!active}
                  className={cx(
                    "col-start-1 row-start-1 flex flex-col items-center justify-center gap-1.5 px-4 py-4 text-center transition-all duration-700 ease-out motion-reduce:transition-none sm:px-8",
                    active ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0",
                  )}
                >
                  <p className={cx("text-lg font-extrabold tracking-tight sm:text-xl", dark ? "text-white" : "text-navy-800")}>{s.title}</p>
                  {s.text && <p className={cx("max-w-2xl text-sm leading-relaxed", dark ? "text-white/70" : "text-muted")}>{s.text}</p>}
                  {s.link && s.linkLabel && (
                    <Link href={s.link} tabIndex={active ? 0 : -1} className={cx("mt-1 inline-flex items-center gap-1.5 text-sm font-bold hover:underline", dark ? "text-gold-400" : "text-royal-600")}>
                      {s.linkLabel} <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          {count > 1 && (
            <div className="mt-3 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === current}
                  onClick={() => setIndex(i)}
                  className={cx("h-2 rounded-full transition-all duration-300", i === current ? (dark ? "w-6 bg-gold-400" : "w-6 bg-royal-600") : dark ? "w-2 bg-white/25 hover:bg-white/45" : "w-2 bg-navy-800/20 hover:bg-navy-800/40")}
                />
              ))}
            </div>
          )}
        </div>
        {count > 1 && (
          <button type="button" aria-label="Next slide" onClick={() => go(1)} className={cx("hidden size-9 shrink-0 place-items-center rounded-full sm:grid", dark ? "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20" : "bg-white text-navy-800 shadow-card ring-1 ring-line hover:bg-royal-50")}>
            <ChevronRight className="size-5" />
          </button>
        )}
      </div>
    </section>
  );
}
