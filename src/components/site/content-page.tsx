import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { PageBlock } from "@/content/defaults";
import { buttonClass } from "../ui/primitives";
import { RichText } from "../rich-text";

export function PageHero({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}

/** Renders any CMS-managed page block (About, CBT Practice, JAMB/WAEC/NECO…). */
export function ContentPage({ page, children }: { page: PageBlock; children?: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-extrabold text-navy-800">{s.heading}</h2>
              <RichText text={s.body} className="mt-2 text-muted" />
            </section>
          ))}
          {children}
        </div>
        <aside className="space-y-4">
          {page.highlights.length > 0 && (
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-gold-600">Highlights</p>
              <ul className="mt-3 space-y-2.5">
                {page.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm font-medium text-navy-800">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success-600" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl bg-navy-800 p-6 text-white">
            <p className="font-bold">Ready to begin?</p>
            <p className="mt-1 text-sm text-white/75">Create your account and activate your access code to unlock everything.</p>
            <Link href={page.cta.href} className={buttonClass("gold", "md", "mt-4 w-full")}>
              {page.cta.label}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
