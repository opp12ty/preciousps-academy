/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReportCard } from "@/server/services/records";
import { PrintButton } from "./print-button";
import { Ring } from "./charts";
import { cx } from "./ui/primitives";

const ordinal = (n: number) => `${n}${["th", "st", "nd", "rd"][n % 100 > 10 && n % 100 < 14 ? 0 : Math.min(n % 10, 4) % 4 === n % 10 ? n % 10 : 0] ?? "th"}`;
const cell = (v: number | null) => (v === null ? "—" : `${v}%`);
const tone = (v: number | null) => (v === null ? "#94a3b8" : v >= 70 ? "#047857" : v >= 50 ? "#1d4ed8" : v >= 40 ? "#b45309" : "#c62828");

/**
 * A term report card. The card of a later term carries the earlier terms beside it, so the third
 * term card is the report for the whole session. Prints on one A4 page.
 */
export function ReportCardView({ card, brand, base, note }: { card: ReportCard; brand: { logoUrl: string; schoolName: string }; base: string; note?: string }) {
  const many = card.terms.length > 1;
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <nav aria-label="Term" className="flex flex-wrap gap-2">
          {[0, 1, 2].map((i) => (
            <Link key={i} href={`${base}?term=${i}`} aria-current={card.term.index === i ? "page" : undefined} className={cx("rounded-full px-4 py-1.5 text-sm font-semibold ring-1", card.term.index === i ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>
              {["First", "Second", "Third"][i]} term
            </Link>
          ))}
        </nav>
        <PrintButton label="Print / save as PDF" />
      </div>
      {note && <p className="no-print text-sm text-muted">{note}</p>}
      <article className="print-card overflow-hidden rounded-2xl border-2 border-navy-800 bg-white shadow-card">
        <header className="relative bg-navy-800 px-6 py-5 text-white">
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-gold-400 via-royal-500 to-gold-400" aria-hidden />
          <div className="flex flex-wrap items-center gap-4">
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white p-1.5"><img src={brand.logoUrl} alt="" className="size-full object-contain" /></span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-400">{brand.schoolName}</p>
              <h1 className="font-display text-2xl font-extrabold">Student Report Card</h1>
              <p className="text-sm text-white/80">{card.term.name} · {card.session} session{many ? " · includes earlier terms" : ""}</p>
            </div>
          </div>
        </header>
        <div className="grid gap-5 p-6 md:grid-cols-[1fr_auto]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div><dt className="text-xs uppercase tracking-wide text-muted">Student</dt><dd className="font-bold text-navy-800">{card.student.name}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Student ID</dt><dd className="font-mono font-semibold">{card.student.studentNumber}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Class</dt><dd className="font-semibold">{[card.student.className, card.student.department].filter(Boolean).join(" · ") || "—"}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Position in class</dt><dd className="font-semibold">{card.position ? `${ordinal(card.position.place)} of ${card.position.outOf}` : "—"}</dd></div>
          </dl>
          <div className="flex items-start justify-center gap-5">
            <Ring value={card.termAverage} label="Term average" colour={tone(card.termAverage)} size={88} />
            {many && <Ring value={card.cumulativeAverage} label="Session so far" colour={tone(card.cumulativeAverage)} size={88} />}
          </div>
        </div>
        <div className="overflow-x-auto border-t border-line">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead className="bg-royal-50 text-xs uppercase tracking-wide text-navy-800">
              <tr>
                <th className="px-4 py-2.5">Subject</th>
                {many && card.terms.slice(0, -1).map((t) => <th key={t.name} className="px-3 py-2.5 text-right">{t.name.replace(/ term/i, "")}</th>)}
                <th className="px-3 py-2.5 text-right">Exams</th>
                <th className="px-3 py-2.5 text-right">Assignments</th>
                <th className="px-3 py-2.5 text-right">{many ? "This term" : "Score"}</th>
                {many && <th className="px-3 py-2.5 text-right">Cumulative</th>}
                <th className="px-3 py-2.5 text-center">Grade</th>
                <th className="px-4 py-2.5">Remark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {card.subjects.map((s) => (
                <tr key={s.subject}>
                  <td className="px-4 py-2.5 font-semibold text-navy-800">{s.subject}</td>
                  {many && s.byTerm.slice(0, -1).map((v, i) => <td key={i} className="px-3 py-2.5 text-right tabular-nums text-muted">{cell(v)}</td>)}
                  <td className="px-3 py-2.5 text-right tabular-nums">{cell(s.exams)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{cell(s.assignments)}</td>
                  <td className="px-3 py-2.5 text-right font-bold tabular-nums" style={{ color: tone(s.score) }}>{cell(s.score)}</td>
                  {many && <td className="px-3 py-2.5 text-right font-bold tabular-nums" style={{ color: tone(s.cumulative) }}>{cell(s.cumulative)}</td>}
                  <td className="px-3 py-2.5 text-center font-extrabold text-navy-800">{s.grade}</td>
                  <td className="px-4 py-2.5 text-muted">{s.remark}</td>
                </tr>
              ))}
              {!card.subjects.length && <tr><td colSpan={8} className="px-4 py-8 text-center text-muted">No released result or submitted assignment in this period yet.</td></tr>}
            </tbody>
            {card.subjects.length > 0 && (
              <tfoot className="bg-surface font-bold text-navy-800">
                <tr>
                  <td className="px-4 py-2.5">Average</td>
                  {many && card.termAverages.slice(0, -1).map((v, i) => <td key={i} className="px-3 py-2.5 text-right tabular-nums">{cell(v)}</td>)}
                  <td /><td />
                  <td className="px-3 py-2.5 text-right tabular-nums">{cell(card.termAverage)}</td>
                  {many && <td className="px-3 py-2.5 text-right tabular-nums">{cell(card.cumulativeAverage)}</td>}
                  <td className="px-3 py-2.5 text-center">{card.grade}</td>
                  <td className="px-4 py-2.5">{card.remark}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        <footer className="grid gap-4 border-t border-line p-6 text-xs text-muted sm:grid-cols-2">
          <p>Term score: examinations and tests carry 70% and assignments and classwork 30%; where only one exists, it is the score. Only released results count. Position is among classmates with results this term.</p>
          <div className="flex items-end justify-between gap-6 sm:justify-end">
            <p className="border-t border-navy-800 pt-1 text-navy-800">Class teacher</p>
            <p className="border-t border-navy-800 pt-1 text-navy-800">Head of school</p>
          </div>
        </footer>
      </article>
    </div>
  );
}
