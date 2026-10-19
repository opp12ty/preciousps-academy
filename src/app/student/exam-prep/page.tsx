import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { PROGRAMMES, programmesForClass, type Programme } from "@/core/exam-programmes";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { studentScope } from "@/server/services/scope";
import { ExamBrowser } from "@/components/student/exam-browser";
import { Card, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Exam Preparation" };

/** External examinations for the student's own class only: the rule lives in core/exam-programmes. */
export default async function ExamPrepPage({ searchParams }: PageProps<"/student/exam-prep">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const scope = await studentScope(s.user.id);
  const mine = programmesForClass(scope.classCode);
  const chosen = (typeof sp.p === "string" && (mine as string[]).includes(sp.p) ? sp.p : mine[0]) as Programme | undefined;
  const [all, access] = await Promise.all([mine.length ? listStudentExams(s.actor, { types: mine }) : Promise.resolve([]), getAccessState(s.user.id)]);
  const count = (p: Programme) => all.filter((e) => e.examType === p).length;
  return (
    <>
      <PageHeader eyebrow="Test" title="Exam preparation" description="Practice papers for the examinations your class is preparing for. You only see the examinations meant for your class." />
      {!mine.length || !chosen ? (
        <Card>
          <EmptyState icon={<GraduationCap className="size-6" />} title="No external examination for your class yet" description="Common Entrance is for Basic 4 to 6, BECE for JSS 2 and 3, and WAEC, NECO, JAMB, JUPEB and IJMB for SS 2 and 3. Keep using Practice and Mock CBT; this page opens when you reach an examination class." />
        </Card>
      ) : (
        <>
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {mine.map((p) => {
              const g = PROGRAMMES[p];
              const on = p === chosen;
              return (
                <Link key={p} href={`/student/exam-prep?p=${p}`} aria-current={on ? "page" : undefined} className={cx("group relative overflow-hidden rounded-2xl border bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift", on ? "border-transparent ring-2 ring-royal-500" : "border-line")}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1.5" style={{ background: g.colour }} />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-extrabold text-navy-800">{g.label}</p>
                      <p className="text-xs text-muted">{g.long}</p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl text-base font-extrabold text-white" style={{ background: g.colour }}>{count(p)}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{g.blurb}</p>
                </Link>
              );
            })}
          </div>
          <h2 className="mb-3 text-lg font-extrabold text-navy-800">{PROGRAMMES[chosen].long}</h2>
          <ExamBrowser exams={all.filter((e) => e.examType === chosen)} hasAccess={access.status === "ACTIVE"} empty={`${PROGRAMMES[chosen].label} papers will appear here when the examination office publishes them.`} />
        </>
      )}
    </>
  );
}
