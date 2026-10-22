import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ClipboardList, Lightbulb, NotebookPen } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { fscUnit } from "@/server/services/preciousps-study-centre";
import { FscWorkForm, type FscQuestion } from "@/components/fsc";
import { RichText, renderInline } from "@/components/rich-text";
import { Alert, buttonClass } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS e-book unit" };

export default async function FscUnitPage({ params }: PageProps<"/student/preciousps-study-centre/[bookId]/unit/[unitId]">) {
  const s = await requireStudentPage();
  const { bookId, unitId } = await params;
  let d;
  try {
    d = await fscUnit(s.actor, bookId, unitId);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning">{p.message}</Alert>;
  }
  const { book, unit } = d;
  const base = `/student/preciousps-study-centre/${book.id}`;
  const word = book.kind === "STORY" ? "Chapter" : "Unit";
  const qs = (list: { q: string; options: string[] | null }[]): FscQuestion[] => list.map((x) => ({ html: renderInline(x.q), options: x.options?.map((o) => ({ value: o, html: renderInline(o) })) ?? null }));
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Link href={base} className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> {book.title}</Link>
      <header className="rounded-3xl bg-gradient-to-br from-navy-900 to-royal-700 p-6 text-white shadow-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{word} {unit.position}{unit.week ? ` · ${unit.week}` : ""}</p>
        <h1 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">{unit.title}</h1>
        {unit.subtitle && <p className="mt-1 text-sm text-white/85">{unit.subtitle}</p>}
      </header>

      {unit.bodyMd ? (
        <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8"><RichText text={unit.bodyMd} /></div>
      ) : (
        <div className="fsc-body rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8" dangerouslySetInnerHTML={{ __html: unit.bodyHtml }} />
      )}

      {unit.advanced && (
        <div className="rounded-2xl border-l-4 border-gold-500 bg-gold-50/60 p-5">
          <p className="flex items-center gap-2 text-sm font-extrabold text-gold-600"><Lightbulb className="size-5" aria-hidden /> Advanced Corner</p>
          <p className="mt-1 text-navy-800" dangerouslySetInnerHTML={{ __html: renderInline(unit.advanced) }} />
          {unit.advancedAnswer ? <p className="mt-2 text-sm text-success-600"><strong>Model answer:</strong> <span dangerouslySetInnerHTML={{ __html: renderInline(unit.advancedAnswer) }} /></p> : <p className="mt-2 text-xs text-muted">The model answer opens after you submit the Classwork or Assignment.</p>}
        </div>
      )}

      {d.classwork.questions.length > 0 && (
        <section className="rounded-2xl bg-surface p-5">
          <h2 className="mb-3 flex items-center gap-2 font-extrabold text-navy-800"><NotebookPen className="size-5 text-emerald-600" aria-hidden /> Classwork {unit.position}</h2>
          <FscWorkForm unitId={unit.id} kind="CLASSWORK" questions={qs(d.classwork.questions)} last={d.classwork.last} />
        </section>
      )}
      {d.assignment.questions.length > 0 && (
        <section className="rounded-2xl bg-royal-50 p-5">
          <h2 className="mb-3 flex items-center gap-2 font-extrabold text-navy-800"><ClipboardList className="size-5 text-royal-600" aria-hidden /> Assignment {unit.position}</h2>
          <FscWorkForm unitId={unit.id} kind="ASSIGNMENT" questions={qs(d.assignment.questions)} last={d.assignment.last} />
        </section>
      )}

      <nav className="flex flex-wrap justify-between gap-2">
        {d.prev ? <Link href={`${base}/unit/${d.prev.id}`} className={buttonClass("secondary", "sm")}>← {word} {d.prev.position}</Link> : <span />}
        {d.next ? <Link href={`${base}/unit/${d.next.id}`} className={buttonClass("primary", "sm")}>{word} {d.next.position} →</Link> : book.reviewCount > 0 ? <Link href={`${base}/review`} className={buttonClass("gold", "sm")}>Term Review CBT →</Link> : null}
      </nav>
    </article>
  );
}
