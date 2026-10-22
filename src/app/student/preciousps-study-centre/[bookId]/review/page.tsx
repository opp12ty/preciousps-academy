import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { fscReview } from "@/server/services/preciousps-study-centre";
import { FscReviewForm } from "@/components/fsc";
import { renderInline } from "@/components/rich-text";
import { Alert, EmptyState } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Term Review CBT" };

export default async function FscReviewPage({ params }: PageProps<"/student/preciousps-study-centre/[bookId]/review">) {
  const s = await requireStudentPage();
  const { bookId } = await params;
  let d;
  try {
    d = await fscReview(s.actor, bookId);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning">{p.message}</Alert>;
  }
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href={`/student/preciousps-study-centre/${d.book.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> {d.book.title}</Link>
      <header className="rounded-3xl bg-gradient-to-br from-navy-900 to-emerald-800 p-6 text-white shadow-lift">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Precious PS Study Centre</p>
        <h1 className="mt-1 font-display text-2xl font-extrabold">Term Review CBT</h1>
        <p className="mt-1 text-sm text-white/85">{d.questions.length} questions · choose one option each. {d.book.reviewScore !== null ? `Your first score, ${d.book.reviewScore}%, is the one that counts for the Top 3.` : "Your first attempt counts for the Top 3."}</p>
      </header>
      {d.questions.length ? <FscReviewForm bookId={d.book.id} questions={d.questions.map((q) => ({ stem: renderInline(q.stem), options: q.options.map((o) => ({ label: o.label, text: renderInline(o.text) })) }))} /> : <EmptyState title="No Term Review in this e-book" />}
    </div>
  );
}
