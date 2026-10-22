import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MonitorCheck } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { fscBook } from "@/server/services/preciousps-study-centre";
import { Alert, buttonClass, Card } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS e-book" };

const done = (v: number | null | undefined) => v === undefined || v !== null;

export default async function FscBookPage({ params }: PageProps<"/student/preciousps-study-centre/[bookId]">) {
  const s = await requireStudentPage();
  const { bookId } = await params;
  let b;
  try {
    b = await fscBook(s.actor, bookId);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning">{p.message}</Alert>;
  }
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/student/preciousps-study-centre" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Precious PS Study Centre</Link>
      <header className="rounded-3xl bg-gradient-to-br from-navy-900 to-emerald-800 p-6 text-white shadow-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Precious PS Study Centre{b.term ? ` · ${b.term}` : ""}</p>
        <h1 className="mt-1 font-display text-3xl font-extrabold">{b.title}</h1>
        {b.score !== null && <p className="mt-2 text-sm text-white/85">Your score in this book: <strong>{b.score}%</strong> (Classwork 25 · Assignments 25 · Term Review 50)</p>}
      </header>

      {b.introHtml && (
        <details className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <summary className="cursor-pointer text-sm font-bold text-royal-600">How to use this e-book and the scheme of work</summary>
          <div className="fsc-body mt-4" dangerouslySetInnerHTML={{ __html: b.introHtml }} />
        </details>
      )}

      <Card className="p-5">
        <p className="mb-3 text-sm font-extrabold text-navy-800">{b.kind === "STORY" ? "Chapters" : "Units"}</p>
        <ol className="space-y-2">
          {b.units.map((u) => {
            const complete = done(u.classwork) && done(u.assignment);
            return (
              <li key={u.id}>
                <Link href={`/student/preciousps-study-centre/${b.id}/unit/${u.id}`} className="flex items-center gap-3 rounded-xl bg-surface p-3 hover:bg-royal-50">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy-800 text-sm font-extrabold text-white">{u.position}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-navy-800">{u.title}</span>
                    <span className="block text-xs text-muted">{[u.week, typeof u.classwork === "number" ? `Classwork ${u.classwork}%` : null, typeof u.assignment === "number" ? `Assignment ${u.assignment}%` : null].filter(Boolean).join(" · ")}</span>
                  </span>
                  {complete && <CheckCircle2 className="size-5 shrink-0 text-success-600" aria-label="Done" />}
                </Link>
              </li>
            );
          })}
        </ol>
        {b.reviewCount > 0 && (
          <Link href={`/student/preciousps-study-centre/${b.id}/review`} className={buttonClass("gold", "md", "mt-4 w-full justify-center")}>
            <MonitorCheck className="size-4" /> Term Review CBT ({b.reviewCount} questions){b.reviewScore !== null ? ` · your score ${b.reviewScore}%` : ""}
          </Link>
        )}
      </Card>
    </div>
  );
}
