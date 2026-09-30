import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Lock } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { learningSummary, mySubjects } from "@/server/services/study";
import { Alert, Card, PageHeader, ProgressBar } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Centre" };

export default async function StudyCentrePage() {
  const s = await requireStudentPage();
  const [subjects, access, summary] = await Promise.all([mySubjects(s.actor), getAccessState(s.user.id), learningSummary(s.user.id)]);
  const active = access.status === "ACTIVE";
  return (
    <>
      <PageHeader eyebrow="Precious PS Study Centre" title="Learn at your own pace" description="Follow the guided path: lesson → study material → classwork → assessment → next lesson. Reach the mastery score to move on." />
      {!active && (
        <Alert tone="warning" className="mb-6" title="Access required">
          {access.message}
        </Alert>
      )}
      {summary.current && active && (
        <Link href={`/student/study/lesson/${summary.current.id}`} className="mb-6 flex items-center justify-between gap-4 rounded-2xl bg-navy-800 p-5 text-white shadow-card hover:bg-navy-700">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">Continue where you stopped</p>
            <p className="mt-1 text-lg font-bold">{summary.current.title}</p>
            <p className="text-sm text-white/70">{summary.current.topic}</p>
          </div>
          <BookOpen className="size-8 text-gold-400" aria-hidden />
        </Link>
      )}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {subjects.map((sub) => {
          const pct = sub.lessons ? Math.round((sub.completed / sub.lessons) * 100) : 0;
          const body = (
            <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-royal-50 text-xs font-extrabold text-royal-700">{sub.code}</span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-navy-800">{sub.name}</p>
                  <p className="text-xs text-muted">{sub.lessons ? `${sub.completed}/${sub.lessons} lessons` : "Lessons coming soon"}</p>
                </div>
                {!active && <Lock className="ml-auto size-4 text-muted" aria-label="Locked" />}
              </div>
              {sub.description && <p className="mt-3 line-clamp-2 text-sm text-muted">{sub.description}</p>}
              <div className="mt-4">
                <ProgressBar value={pct} label={`${sub.name} progress`} tone={pct === 100 ? "green" : "royal"} />
                <p className="mt-1 text-right text-xs font-semibold text-muted">{pct}%</p>
              </div>
            </Card>
          );
          return active ? (
            <Link key={sub.id} href={`/student/study/${sub.id}`}>
              {body}
            </Link>
          ) : (
            <div key={sub.id}>{body}</div>
          );
        })}
      </div>
    </>
  );
}
