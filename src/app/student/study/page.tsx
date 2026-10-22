import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Headphones, Lock, NotebookPen, Target, Trophy } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { learningSummary, mySubjects } from "@/server/services/study";
import { Alert, Card, PageHeader, ProgressBar } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Centre" };

/** The learning path, drawn so that a pupil can see what comes next. */
const PATH = [
  { icon: BookOpen, title: "Read", body: "Short notes with pictures and worked examples.", colour: "#1d4ed8" },
  { icon: Headphones, title: "Listen", body: "Your teacher's recorded explanation.", colour: "#7c3aed" },
  { icon: NotebookPen, title: "Classwork", body: "Try the questions; each answer is explained.", colour: "#c2410c" },
  { icon: Target, title: "Reach the mark", body: "Score the mastery mark to unlock the next lesson.", colour: "#047857" },
  { icon: Trophy, title: "Earn points", body: "Every lesson adds to your loyalty points.", colour: "#a8841e" },
];

export default async function StudyCentrePage() {
  const s = await requireStudentPage();
  const [subjects, access, summary] = await Promise.all([mySubjects(s.actor), getAccessState(s.user.id), learningSummary(s.user.id)]);
  const active = access.status === "ACTIVE";
  return (
    <>
      <PageHeader eyebrow="Study Centre" title="Learn at your own pace" description="Follow the guided path: lesson → study material → classwork → assessment → next lesson. Reach the mastery score to move on." />
      <ol aria-label="How the Study Centre works" className="pop mb-6 grid gap-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:grid-cols-5">
        {PATH.map((p, i) => (
          <li key={p.title} className="relative flex items-center gap-3 sm:flex-col sm:text-center">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-card" style={{ background: p.colour }}><p.icon className="size-6" aria-hidden /></span>
            <div className="min-w-0">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-600">Step {i + 1}</p>
              <p className="text-sm font-extrabold text-navy-800">{p.title}</p>
              <p className="text-xs leading-snug text-muted">{p.body}</p>
            </div>
            {i < PATH.length - 1 && <ArrowRight aria-hidden className="absolute -right-3 top-4 hidden size-5 text-line sm:block" />}
          </li>
        ))}
      </ol>
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
