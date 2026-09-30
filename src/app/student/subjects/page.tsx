import type { Metadata } from "next";
import Link from "next/link";
import { requireStudentPage } from "@/server/http";
import { mySubjects } from "@/server/services/study";
import { studentPerformance } from "@/server/services/analytics";
import { Card, PageHeader, ProgressBar } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Subjects" };

export default async function MySubjectsPage() {
  const s = await requireStudentPage();
  const [subjects, perf] = await Promise.all([mySubjects(s.actor), studentPerformance(s.user.id)]);
  const bySubject = new Map(perf.bySubject.map((b) => [b.subject, b]));
  return (
    <>
      <PageHeader eyebrow="Curriculum" title="My subjects" description="Subjects for your department, with your lesson progress and examination average." />
      <div className="grid gap-4 md:grid-cols-2">
        {subjects.map((sub) => {
          const p = bySubject.get(sub.name);
          const pct = sub.lessons ? Math.round((sub.completed / sub.lessons) * 100) : 0;
          return (
            <Card key={sub.id} className="p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-navy-800 text-xs font-extrabold text-gold-400">{sub.code}</span>
                <div className="flex-1">
                  <p className="font-bold text-navy-800">{sub.name}</p>
                  <p className="text-xs text-muted">{sub.description}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-lg bg-surface py-2">
                  <p className="text-base font-extrabold text-navy-800">
                    {sub.completed}/{sub.lessons}
                  </p>
                  lessons
                </div>
                <div className="rounded-lg bg-surface py-2">
                  <p className="text-base font-extrabold text-navy-800">{p?.avg ?? "—"}{p && "%"}</p>
                  exam average
                </div>
                <div className="rounded-lg bg-surface py-2">
                  <p className="text-base font-extrabold text-navy-800">{p?.exams ?? 0}</p>
                  exams taken
                </div>
              </div>
              <div className="mt-4">
                <ProgressBar value={pct} label={`${sub.name} lesson progress`} />
              </div>
              <Link href={`/student/study/${sub.id}`} className="mt-4 inline-block text-sm font-semibold text-royal-600 hover:underline">
                Open lessons →
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
}
