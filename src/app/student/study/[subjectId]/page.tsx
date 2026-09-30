import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CheckCircle2, Circle, Clock, Lock, PlayCircle } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { subjectOutline } from "@/server/services/study";
import { toPublicError } from "@/server/errors";
import { Badge, Card, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Subject outline" };

export default async function SubjectOutlinePage({ params }: PageProps<"/student/study/[subjectId]">) {
  const s = await requireStudentPage();
  const { subjectId } = await params;
  let o;
  try {
    o = await subjectOutline(s.actor, subjectId);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    redirect("/student/study");
  }
  return (
    <>
      <PageHeader breadcrumbs={[{ href: "/student/study", label: "Study Centre" }, { label: o.subject.name }]} title={o.subject.name} description={`${o.subject.description ?? ""} Mastery threshold: ${o.masteryThreshold}%.`} />
      {o.topics.length === 0 ? (
        <Card>
          <EmptyState title="Lessons are being prepared" description="Your teachers are adding lessons for this subject. Check back soon or practise in the meantime." />
        </Card>
      ) : (
        <div className="space-y-4">
          {o.topics.map((t, ti) => {
            const done = t.lessons.filter((l) => l.status === "COMPLETED").length;
            return (
              <Card key={t.id}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gold-600">
                      Topic {ti + 1}
                      {t.term ? ` · ${t.term}` : ""}
                      {t.className ? ` · ${t.className}` : ""}
                    </p>
                    <h2 className="text-base font-bold text-navy-800">{t.title}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {!t.isMandatory && <Badge>Optional</Badge>}
                    {t.locked ? <Badge tone="neutral"><Lock className="size-3" /> Locked</Badge> : <Badge tone={done === t.lessons.length && done > 0 ? "green" : "blue"}>{done}/{t.lessons.length} done</Badge>}
                  </div>
                </div>
                <ul className="divide-y divide-line">
                  {t.lessons.map((l) => {
                    const locked = t.locked || l.locked;
                    const inner = (
                      <div className="flex items-center gap-3 px-5 py-3.5">
                        {l.status === "COMPLETED" ? <CheckCircle2 className="size-5 shrink-0 text-success-600" aria-label="Completed" /> : locked ? <Lock className="size-5 shrink-0 text-muted" aria-label="Locked" /> : l.status === "IN_PROGRESS" ? <PlayCircle className="size-5 shrink-0 text-royal-600" aria-label="In progress" /> : <Circle className="size-5 shrink-0 text-slate-300" aria-label="Not started" />}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-navy-800">{l.title}</p>
                          {l.summary && <p className="line-clamp-1 text-xs text-muted">{l.summary}</p>}
                        </div>
                        {l.bestPercentage !== null && <span className="text-xs font-bold text-navy-800">{l.bestPercentage}%</span>}
                        <span className="hidden items-center gap-1 text-xs text-muted sm:flex">
                          <Clock className="size-3.5" aria-hidden />
                          {l.estimatedMinutes}m
                        </span>
                      </div>
                    );
                    return (
                      <li key={l.id}>
                        {locked ? (
                          <div className="opacity-60" title="Complete the previous lesson to unlock">
                            {inner}
                          </div>
                        ) : (
                          <Link href={`/student/study/lesson/${l.id}`} className="block hover:bg-surface">
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                  {t.lessons.length === 0 && <li className="px-5 py-4 text-sm text-muted">Lessons coming soon.</li>}
                </ul>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
