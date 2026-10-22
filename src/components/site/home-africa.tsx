import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cx } from "../ui/primitives";
export interface Stage { years: string; age: string; title: string; body: string; exam: string; colour: string }
export interface CultureCard { emoji: string; title: string; body: string }
export interface ValueCard { title: string; word: string; meaning: string; practice: string }
export interface SectionText { eyebrow: string; heading: string; intro: string }
import { FarmFamily } from "./farm-family";

/** A kente-inspired band of gold, green, red and black, drawn with CSS only (no image download). */
export function KenteBand({ className }: { className?: string }) {
  return <div aria-hidden className={cx("kente-band h-3 w-full", className)} />;
}



/** The Nigerian 6-3-3-4 system at a glance, and how Precious PS supports each stage. */
/** An uploaded banner picture, lazy-loaded so it never slows the first view. */
function Banner({ id, alt }: { id?: string; alt: string }) {
  if (!id || !/^[0-9a-f-]{36}$/i.test(id)) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/api/v1/assets/${id}`} alt={alt} loading="lazy" decoding="async" className="block max-h-[420px] w-full object-cover" />;
}

export function EducationSystem({ pictureId, caption = "", text, stages }: { pictureId?: string; caption?: string; text: SectionText; stages: Stage[] }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ea]">
      <Banner id={pictureId} alt={caption} />
      <div aria-hidden className="adinkra-dots absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{text.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">{text.heading}</h2>
          <p className="mt-3 text-muted">{text.intro}</p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="reveal relative overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <span aria-hidden className="absolute inset-x-0 top-0 h-2" style={{ background: s.colour }} />
              <span className="absolute right-4 top-4 font-display text-5xl font-extrabold text-black/5">{i + 1}</span>
              <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: s.colour }}>{s.years} · {s.age}</p>
              <h3 className="mt-2 text-lg font-extrabold text-navy-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <p className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: s.colour }}>{s.exam}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}



/** Promotes African culture and heritage, linking to what learners can explore. */
export function AfricanCulture({ dark, pictureId, caption = "", text, cards }: { dark: boolean; pictureId?: string; caption?: string; text: SectionText; cards: CultureCard[] }) {
  return (
    <>
    <Banner id={pictureId} alt={caption} />
    <section className={cx("relative overflow-hidden text-white", dark ? "bg-gradient-to-br from-[#2a1406] via-[#3d1d08] to-navy-950" : "bg-gradient-to-br from-[#5a2a0a] via-[#7a3a10] to-[#3d1d08]")}>
      <div aria-hidden className="mudcloth absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{text.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{text.heading}</h2>
          <p className="mt-3 text-white/80">{text.intro}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="reveal rounded-2xl bg-white/[0.07] p-5 ring-1 ring-gold-400/25 backdrop-blur-sm transition hover:bg-white/[0.12]">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-2xl" aria-hidden>{c.emoji}</span>
              <h3 className="mt-3 text-lg font-extrabold text-gold-400">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/80">{c.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-extrabold text-[#2a1406] hover:bg-gold-500">Explore our heritage on Precious PS <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </div>
    </section>
    </>
  );
}

/** African discipline and values, with the family walking to the farm. */
export function AfricanValues({ pictureId, caption = "", text, values }: { pictureId?: string; caption?: string; text: SectionText; values: ValueCard[] }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ea]">
      {pictureId && /^[0-9a-f-]{36}$/i.test(pictureId) ? <Banner id={pictureId} alt={caption} /> : <FarmFamily className="block h-auto w-full" />}
      <div aria-hidden className="adinkra-dots absolute inset-x-0 bottom-0 top-1/3 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{text.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#3d1d08] sm:text-4xl">{text.heading}</h2>
          <p className="mt-3 text-muted">{text.intro}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.slice(0, 6).map(({ title, word, meaning, practice }) => (
            <li key={title} className="reveal rounded-2xl border-l-4 border-gold-500 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9a3412]">{word}</p>
              <h3 className="mt-1 text-lg font-extrabold text-navy-800">{title}</h3>
              <p className="mt-1 text-sm text-muted">{meaning}</p>
              <p className="mt-2 text-sm font-semibold text-navy-800">{practice}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
