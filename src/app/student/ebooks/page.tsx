import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { ebookShelf } from "@/server/services/ebooks";
import { Card, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "E-books" };

const SPINES = ["#1d4ed8", "#047857", "#b91c1c", "#a8841e", "#7c3aed", "#0f766e", "#c2410c", "#be185d", "#0b1f4b"];

export default async function EbookShelf() {
  const s = await requireStudentPage();
  const all = await ebookShelf(s.actor);
  const hasCore = all.some((b) => b.core);
  const books = hasCore ? all.filter((b) => b.core) : all;
  const more = hasCore ? all.filter((b) => !b.core) : [];
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Study Materials" title="My E-books" description="One e-book for each of your subjects, following the NERDC scheme term by term. Every chapter ends with Classwork and an Assignment, and exam classes get revision and CBT exam prep. Mark each chapter as read to move along your learning path." />
      {books.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((b, i) => {
            const pct = b.topics ? Math.round((b.read / b.topics) * 100) : 0;
            return (
              <li key={b.id}>
                <Link href={`/student/ebooks/${b.id}`} className="pop group flex h-full overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-lift">
                  <span aria-hidden className="relative w-4 shrink-0" style={{ background: SPINES[i % SPINES.length] }}><span className="kente-band absolute inset-x-0 top-3 h-2 opacity-80" /></span>
                  <span className="flex min-w-0 flex-1 flex-col p-4">
                    <BookOpen className="size-6" style={{ color: SPINES[i % SPINES.length] }} aria-hidden />
                    <span className="mt-2 text-base font-extrabold text-navy-800">{b.name}</span>
                    <span className="text-xs text-muted">{b.topics} chapters · {b.read} read</span>
                    <span className="mt-auto pt-3"><span className="block h-1.5 overflow-hidden rounded-full bg-surface"><span className="block h-full rounded-full" style={{ width: `${pct}%`, background: SPINES[i % SPINES.length] }} /></span></span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      {more.length > 0 && (
        <details className="rounded-2xl border border-line bg-white p-4 shadow-card">
          <summary className="cursor-pointer text-sm font-bold text-royal-600">More subjects and trades ({more.length})</summary>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{more.map((b) => <li key={b.id}><Link href={`/student/ebooks/${b.id}`} className="flex items-center justify-between rounded-xl bg-surface px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-royal-50"><span className="truncate">{b.name}</span><span className="text-xs text-muted">{b.read}/{b.topics}</span></Link></li>)}</ul>
        </details>
      )}
      {!all.length && (
        <Card><EmptyState icon={<BookOpen className="size-6" />} title="No e-books yet" description="E-books appear when your class has topics and lessons." /></Card>
      )}
    </div>
  );
}
