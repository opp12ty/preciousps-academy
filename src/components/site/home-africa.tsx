import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cx } from "../ui/primitives";

/** A kente-inspired band of gold, green, red and black, drawn with CSS only (no image download). */
export function KenteBand({ className }: { className?: string }) {
  return <div aria-hidden className={cx("kente-band h-3 w-full", className)} />;
}

const STAGES = [
  { years: "Primary 1–6", age: "Ages 6–11", title: "Basic Education (Primary)", body: "Literacy, numeracy, science, our languages and values. Ends with the Common Entrance into secondary school.", exam: "Common Entrance", colour: "#047857" },
  { years: "JSS 1–3", age: "Ages 12–14", title: "Junior Secondary", body: "Broad subjects, pre-vocational skills and trades. Ends with the BECE.", exam: "BECE", colour: "#c8a02f" },
  { years: "SSS 1–3", age: "Ages 15–17", title: "Senior Secondary", body: "Science, Commercial or Arts, plus a trade subject. Ends with WAEC/NECO and the UTME.", exam: "WAEC · NECO · JAMB", colour: "#b91c1c" },
  { years: "4 years +", age: "Ages 18+", title: "Tertiary", body: "University, polytechnic or college of education, after JAMB, JUPEB or IJMB.", exam: "Degree · HND · NCE", colour: "#0b1f4b" },
];

/** The Nigerian 6-3-3-4 system at a glance, and how Precious PS supports each stage. */
export function EducationSystem() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ea]">
      <div aria-hidden className="adinkra-dots absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Our educational system</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">The Nigerian 6-3-3-4 journey, fully covered</h2>
          <p className="mt-3 text-muted">Six years of primary, three of junior secondary, three of senior secondary and four of tertiary education. Precious PS follows the NERDC curriculum at every step.</p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
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

const CULTURE = [
  { emoji: "🥁", title: "Music and rhythm", body: "From the talking drum and juju to highlife and Afrobeat, Africa gave the world its rhythm." },
  { emoji: "🎭", title: "Festivals", body: "Osun-Osogbo, Argungu, the New Yam Festival, Durbar, Eyo and the Calabar Carnival." },
  { emoji: "🗣️", title: "Our languages", body: "Hausa, Igbo and Yoruba, alongside Arabic, French and English, are taught on Precious PS." },
  { emoji: "👑", title: "Great kingdoms", body: "Benin, Oyo, Kanem-Bornu, Mali and Songhai: centres of art, trade and learning." },
  { emoji: "🧵", title: "Art and craft", body: "Adire, Akwete and aso-oke cloth, Benin bronzes and Nok terracotta." },
  { emoji: "🦉", title: "Wisdom of proverbs", body: "“It takes a village to raise a child.” Hundreds of proverbs with meanings, in Study Materials." },
];

/** Promotes African culture and heritage, linking to what learners can explore. */
export function AfricanCulture({ dark }: { dark: boolean }) {
  return (
    <section className={cx("relative overflow-hidden text-white", dark ? "bg-gradient-to-br from-[#2a1406] via-[#3d1d08] to-navy-950" : "bg-gradient-to-br from-[#5a2a0a] via-[#7a3a10] to-[#3d1d08]")}>
      <div aria-hidden className="mudcloth absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Proudly African</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Learning rooted in our culture</h2>
          <p className="mt-3 text-white/80">Every learner should know where they come from. Precious PS celebrates the history, languages, art and wisdom of Nigeria and Africa.</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE.map((c) => (
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
  );
}
