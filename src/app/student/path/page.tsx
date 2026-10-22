import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle2, Circle, Route } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { learningPath, STEPS, type PathGroup, type StepKey } from "@/server/services/learning-path";
import { termWindows } from "@/server/services/records";
import { CaButton } from "@/components/learning";
import { Alert, buttonClass, Card, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Learning Path" };

function NextStep({ g, passMark }: { g: PathGroup; passMark: number }) {
  const t = g.topics.find((x) => !x.studied) ?? g.topics[0];
  switch (g.next) {
    case "study":
      return t?.firstLessonId ? <Link href={`/student/study/lesson/${t.firstLessonId}`} className={buttonClass("primary", "sm")}>Study “{t.title}”</Link> : <Link href={`/student/study/${g.subjectId}`} className={buttonClass("primary", "sm")}>Open the Study Centre</Link>;
    case "assignments": {
      const a = g.topics.flatMap((x) => x.assignment).find((x) => !x.ok);
      return a ? <Link href={`/student/assignments/${a.id}`} className={buttonClass("primary", "sm")}>{a.best === null ? "Do" : `Redo (best ${Math.round(a.best)}%, need ${passMark}%)`}: {a.title}</Link> : null;
    }
    case "ca1":
      return <CaButton subjectId={g.subjectId} termId={g.termId} stage={1} label={g.ca1.examId ? "Continue CBT Exam Prep (CA 1)" : "Start CBT Exam Prep (CA 1)"} />;
    case "materials": {
      const c = g.topics.find((x) => !x.read);
      return <Link href={`/student/ebooks/${g.subjectId}?term=${g.termId}${c ? `#topic-${c.id}` : ""}`} className={buttonClass("primary", "sm")}>Read “{c?.title ?? "the e-book"}” in the e-book</Link>;
    }
    case "ca2":
      return <CaButton subjectId={g.subjectId} termId={g.termId} stage={2} label={g.ca2.examId ? "Continue Revision CBT (CA 2)" : "Start Revision CBT (CA 2)"} />;
    case "exam":
      return g.examIds.length ? <Link href={`/student/exams/${g.examIds[0]}`} className={buttonClass("gold", "sm")}>Take the {g.term} examination</Link> : <span className="text-sm font-semibold text-success-600">All done. The term examination will appear here when it is published.</span>;
    default:
      return null;
  }
}

export default async function LearningPathPage({ searchParams }: PageProps<"/student/path">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const [path, cal] = await Promise.all([learningPath(s.actor), termWindows(s.user.schoolId)]);
  const termNames = [...new Set([...path.groups].sort((a, b) => a.termOrder - b.termOrder).map((g) => g.term))];
  const wanted = typeof sp.term === "string" ? sp.term : termNames.includes(cal.currentTerm) ? cal.currentTerm : termNames[0];
  const groups = path.groups.filter((g) => g.term === wanted);
  const hasCore = groups.some((g) => g.core);
  const main = hasCore ? groups.filter((g) => g.core) : groups;
  const more = hasCore ? groups.filter((g) => !g.core) : [];
  const complete = groups.filter((g) => g.next === "exam" || g.next === null).length;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Your companion" title="My Learning Path" description="Follow the steps in order for every subject. Each step opens the next, so you arrive at your examination fully prepared." />
      <Card className="overflow-hidden">
        <div className="kente-band h-1.5" aria-hidden />
        <ol className="grid gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((st, i) => (
            <li key={st.key} className="bg-white p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold-600"><span className="grid size-6 place-items-center rounded-full bg-navy-800 text-[0.7rem] text-white">{i + 1}</span>{st.label}</p>
              <p className="mt-1 text-xs text-muted">{st.key === "assignments" ? st.hint.replace("the pass mark", `${path.passMark}%`) : st.hint}</p>
            </li>
          ))}
        </ol>
        <p className="border-t border-line bg-surface px-4 py-2.5 text-xs text-muted">Report card: Assignment 10 + CA tests 30 (CA 1 and CA 2) + Examination 60. Practice, mock and Precious PS tests earn rewards and loyalty points but are not added to your report card.</p>
      </Card>
      {!path.enabled && <Alert tone="info">The school has switched the step-by-step rule off, so every test is open. The path is still the best way to prepare.</Alert>}
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
        {termNames.map((t) => <Link key={t} href={`/student/path?term=${encodeURIComponent(t)}`} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", t === wanted ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{t}</Link>)}
      </div>
      {groups.length ? (
        <>
          <p className="text-sm font-semibold text-navy-800">{complete} of {groups.length} subjects ready for the {wanted} examination.{more.length ? " Your department's core subjects are shown first." : ""}</p>
          <div className="grid gap-4 lg:grid-cols-2">
            {main.map((g) => (
              <Card key={`${g.subjectId}-${g.termId}`} className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0"><h2 className="text-lg font-extrabold text-navy-800">{g.subject}</h2><p className="text-xs text-muted">{g.topics.length} topics · {g.term}</p></div>
                  <span className="text-2xl font-extrabold tabular-nums text-royal-600">{g.percent}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface" role="progressbar" aria-valuenow={g.percent} aria-valuemin={0} aria-valuemax={100}><div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-gold-500 to-royal-600" style={{ width: `${g.percent}%` }} /></div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {STEPS.map((st) => {
                    const ok = g.done[st.key as StepKey];
                    const now = g.next === st.key;
                    return <li key={st.key} className={cx("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold", ok ? "bg-success-50 text-success-600" : now ? "bg-gold-100 text-navy-800 ring-1 ring-gold-400" : "bg-surface text-muted")}>{ok ? <CheckCircle2 className="size-3.5" /> : <Circle className="size-3.5" />}{st.label}</li>;
                  })}
                </ul>
                {(g.ca1.score !== null || g.ca2.score !== null) && <p className="mt-2 text-xs text-muted">CA 1: {g.ca1.score ?? "—"}% · CA 2: {g.ca2.score ?? "—"}%</p>}
                <details className="mt-3 text-sm">
                  <summary className="cursor-pointer font-semibold text-royal-600">Topics</summary>
                  <ul className="mt-2 space-y-1">
                    {g.topics.map((t) => (
                      <li key={t.id} className="flex flex-wrap items-center gap-x-2 text-xs">
                        <span className={t.studied ? "text-success-600" : "text-muted"}>{t.studied ? "✓" : "○"} Study</span>
                        <span className={t.assignment.every((a) => a.ok) ? "text-success-600" : "text-muted"}>{t.assignment.every((a) => a.ok) ? "✓" : "○"} Assignment</span>
                        <span className={t.read ? "text-success-600" : "text-muted"}>{t.read ? "✓" : "○"} E-book</span>
                        <span className="font-semibold text-navy-800">{t.title}</span>
                      </li>
                    ))}
                  </ul>
                </details>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                  <NextStep g={g} passMark={path.passMark} />
                  <Link href={`/student/ebooks/${g.subjectId}?term=${g.termId}`} className={buttonClass("ghost", "sm")}><BookOpen className="size-4" /> E-book</Link>
                </div>
              </Card>
            ))}
          </div>
          {more.length > 0 && (
            <details className="rounded-2xl border border-line bg-white p-4 shadow-card">
              <summary className="cursor-pointer text-sm font-bold text-royal-600">More subjects and trades ({more.length})</summary>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {more.map((g) => (
                  <li key={`${g.subjectId}-${g.termId}`} className="flex items-center justify-between gap-2 rounded-xl bg-surface px-3 py-2 text-sm">
                    <span className="min-w-0 truncate font-semibold text-navy-800">{g.subject}</span>
                    <span className="flex items-center gap-2"><span className="text-xs font-bold text-royal-600">{g.percent}%</span><Link href={`/student/study/${g.subjectId}`} className="text-xs font-semibold text-royal-600 hover:underline">Open</Link></span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </>
      ) : (
        <Card><EmptyState icon={<Route className="size-6" />} title="Nothing to show yet" description="Your class has no topics for this term yet." /></Card>
      )}
    </div>
  );
}
