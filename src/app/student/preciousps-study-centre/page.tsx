import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Gift, Trophy } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { fscClassTop, fscLibrary } from "@/server/services/preciousps-study-centre";
import { Alert, Card, cx, EmptyState, ProgressBar } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS Study Centre" };

const MEDAL = ["", "bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950", "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900", "bg-gradient-to-br from-orange-300 to-orange-600 text-orange-950"];

export default async function FscHome() {
  const s = await requireStudentPage();
  let books;
  try {
    books = await fscLibrary(s.actor);
  } catch (e) {
    return <Alert tone="warning" title="Precious PS Study Centre">{toPublicError(e).message}</Alert>;
  }
  const top = await fscClassTop(s.actor).catch(() => null);
  const stories = books.filter((b) => b.kind === "STORY");
  books = books.filter((b) => b.kind !== "STORY");
  const terms = [...new Set(books.map((b) => b.term ?? "Any term"))];
  return (
    <div className="space-y-6">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-800 to-emerald-800 p-6 text-white shadow-lift sm:p-8">
        <div aria-hidden className="mudcloth absolute inset-0 opacity-[0.12]" />
        <div aria-hidden className="kente-band absolute inset-x-0 bottom-0 h-2" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Precious PS Academy · Fodan CBT</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">Precious PS Study Centre</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/85">Extra e-books to learn more, with Classwork, Assignments and a Term Review CBT in every book. It is not part of your school report card: every piece of work earns loyalty points, and the best three in each class are rewarded.</p>
          <Link href="/student/rewards" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold hover:bg-white/25"><Gift className="size-4" aria-hidden /> Rewards & Loyalty</Link>
        </div>
      </header>

      {top && top.top.length > 0 && (
        <Card className="p-5">
          <p className="mb-3 flex items-center gap-2 text-sm font-extrabold text-navy-800"><Trophy className="size-5 text-gold-600" aria-hidden /> Top 3 in your class · {top.session}</p>
          <ol className="grid gap-2 sm:grid-cols-3">
            {top.top.map((r) => (
              <li key={r.userId} className="flex items-center gap-2.5 rounded-xl bg-surface p-3">
                <span className={cx("grid size-9 shrink-0 place-items-center rounded-full text-xs font-extrabold", MEDAL[r.position])}>{["", "1st", "2nd", "3rd"][r.position]}</span>
                <span className="min-w-0"><span className="block truncate text-sm font-semibold text-navy-800">{r.name}</span><span className="text-xs text-muted">{r.percentage}%</span></span>
              </li>
            ))}
          </ol>
          {top.me && <p className="mt-3 text-xs text-muted">Your place: {top.me.position} of {top.count} · {top.me.percentage}%</p>}
        </Card>
      )}

      {stories.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-gold-600">Precious PS Story Books</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stories.map((b) => (
              <Link key={b.id} href={`/student/preciousps-study-centre/${b.id}`}>
                <Card className="h-full bg-gradient-to-br from-gold-50 to-white p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
                  <p className="text-2xl" aria-hidden>📖</p>
                  <p className="mt-1 font-bold text-navy-800">{b.title}</p>
                  <p className="text-xs text-muted">{b.unitsDone}/{b.units} chapters done{b.score !== null ? ` · Score ${b.score}%` : ""}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {books.length ? (
        terms.map((t) => (
          <section key={t} className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gold-600">{t}</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {books.filter((b) => (b.term ?? "Any term") === t).map((b) => {
                const pct = b.units ? Math.round((b.unitsDone / b.units) * 100) : 0;
                return (
                  <Link key={b.id} href={`/student/preciousps-study-centre/${b.id}`}>
                    <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><BookOpen className="size-5" aria-hidden /></span>
                        <div className="min-w-0">
                          <p className="truncate font-bold text-navy-800">{b.subject ?? b.title}</p>
                          <p className="truncate text-xs text-muted">{b.title}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <ProgressBar value={pct} label={`${b.title} progress`} tone={pct === 100 ? "green" : "royal"} />
                        <p className="mt-1 flex justify-between text-xs font-semibold text-muted"><span>{b.unitsDone}/{b.units} units{b.hasReview ? ` · Term Review ${b.reviewDone ? "✓" : "to do"}` : ""}</span><span>{b.score !== null ? `Score ${b.score}%` : ""}</span></p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        ))
      ) : stories.length ? null : (
        <Card><EmptyState icon={<BookOpen className="size-6" />} title="No Precious PS e-books for your class yet" description="New e-books appear here as soon as they are published." /></Card>
      )}
    </div>
  );
}
