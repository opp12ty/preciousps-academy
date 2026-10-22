import Link from "next/link";
import { Medal, Sparkles, Sun } from "lucide-react";
import type { Bite } from "@/server/services/daily";
import type { Value } from "@/content/african-values";
import { cx } from "./ui/primitives";

const LOOK: Record<string, { label: string; from: string; to: string; href: string }> = {
  WORD: { label: "Word of the day", from: "#1d4ed8", to: "#0ea5e9", href: "dictionary" },
  IDIOM: { label: "Idiom of the day", from: "#7c3aed", to: "#c026d3", href: "idioms" },
  PROVERB: { label: "Proverb of the day", from: "#a8841e", to: "#d97706", href: "proverbs" },
  COMMON_ERROR: { label: "Fix this error", from: "#047857", to: "#0d9488", href: "common-errors" },
};

/** Four colourful cards with today's word, idiom, proverb and common error. Rendered on the server: no extra downloads. */
export function DailyBites({ bites, linkBase, value }: { bites: Bite[]; linkBase?: string; value?: Value }) {
  if (!bites.length && !value) return null;
  return (
    <section aria-labelledby="bites-title" className="space-y-3">
      <h2 id="bites-title" className="flex items-center gap-2 text-lg font-extrabold text-navy-800"><Sparkles className="size-5 text-gold-500" aria-hidden /> Today&rsquo;s learning bites</h2>
      {value && (
        <div className="pop relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3d1d08] via-[#7a3a10] to-[#9a3412] p-4 text-white shadow-card">
          <div aria-hidden className="mudcloth absolute inset-0 opacity-20" />
          <div aria-hidden className="kente-band absolute inset-x-0 bottom-0 h-1.5" />
          <p className="relative text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold-400">African value of the day · {value[1]}</p>
          <p className="relative mt-1 text-xl font-extrabold">{value[0]}</p>
          <p className="relative mt-0.5 text-sm text-white/85">{value[2]} <strong className="text-gold-400">Today:</strong> {value[3]}</p>
        </div>
      )}
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {bites.map((b, i) => {
          const look = LOOK[b.kind] ?? LOOK.WORD;
          const inner = (
            <>
              <span aria-hidden className="absolute -right-6 -top-6 size-24 rounded-full bg-white/15" />
              <span className="relative flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/85">{look.label}<span className="text-2xl" aria-hidden>{b.picture}</span></span>
              {b.kind === "COMMON_ERROR" ? (
                <span className="relative mt-2 block">
                  <span className="block text-sm text-white/80 line-through decoration-white/60">✗ {b.term}</span>
                  <span className="mt-1 block text-lg font-extrabold leading-snug">✓ {b.example}</span>
                  <span className="mt-1 block text-xs text-white/85">{b.meaning}</span>
                </span>
              ) : (
                <span className="relative mt-2 block">
                  <span className="block text-lg font-extrabold leading-snug">{b.term}</span>
                  {b.tag && b.kind !== "IDIOM" && <span className="block text-xs italic text-white/80">{b.tag}</span>}
                  <span className="mt-1 block text-sm text-white/90">{b.meaning}</span>
                  {b.example && <span className="mt-2 block border-l-2 border-white/50 pl-2 text-xs italic text-white/85">{b.example}</span>}
                </span>
              )}
            </>
          );
          const cls = cx("pop relative block h-full overflow-hidden rounded-2xl p-4 text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift", i % 4 === 1 && "pop-2", i % 4 === 2 && "pop-3", i % 4 === 3 && "pop-4");
          const style = { background: `linear-gradient(135deg, ${look.from}, ${look.to})` };
          return (
            <li key={b.kind}>
              {linkBase ? <Link prefetch={false} href={`${linkBase}/${look.href}`} className={cls} style={style}>{inner}</Link> : <div className={cls} style={style}>{inner}</div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** A bright banner when the school holiday is on or coming soon. */
export function HolidayBanner({ label, active, daysToGo, daysLeft, href }: { label: string; active: boolean; daysToGo: number; daysLeft: number; href: string }) {
  if (!active && daysToGo > 14) return null;
  return (
    <Link prefetch={false} href={href} className="pop relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 p-4 text-white shadow-card transition hover:shadow-lift">
      <Sun className="float size-10 shrink-0 text-white/90" aria-hidden />
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/85">{active ? "Holiday time!" : `Holiday in ${daysToGo} day${daysToGo === 1 ? "" : "s"}`}</span>
        <span className="block text-lg font-extrabold">{label}: {active ? `${daysLeft} day${daysLeft === 1 ? "" : "s"} left. Open your Holiday Programme →` : "see the Holiday Programme →"}</span>
      </span>
    </Link>
  );
}

const PLACE = ["", "🥇", "🥈", "🥉"];

/** The Precious PS Examination top three of a class: names only, as celebrated on the dashboard. */
export function ClassChampions({ className, title, top }: { className: string; title: string; top: { name: string; position: number; me?: boolean }[] }) {
  if (!top.length) return null;
  return (
    <section className="pop overflow-hidden rounded-2xl border border-gold-400/50 bg-gradient-to-br from-gold-50 to-white p-4 shadow-card">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-600"><Medal className="size-4" aria-hidden /> {className} champions · {title}</p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-3">
        {top.map((t) => (
          <li key={`${t.position}-${t.name}`} className={cx("flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-line", t.me && "ring-2 ring-gold-500")}>
            <span className="text-2xl" aria-hidden>{PLACE[t.position] ?? "🏅"}</span>
            <span className="min-w-0"><span className="block truncate text-sm font-bold text-navy-800">{t.name}{t.me ? " (you!)" : ""}</span><span className="block text-xs text-muted">{["", "First", "Second", "Third"][t.position] ?? ""} place</span></span>
          </li>
        ))}
      </ol>
    </section>
  );
}
