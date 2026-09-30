import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, FileQuestion, Percent, RotateCcw, ShieldCheck } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { StartExamButton } from "@/components/student/start-exam";
import { Alert, buttonClass, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Examination instructions" };

export default async function ExamIntroPage({ params }: PageProps<"/student/exams/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  const [exams, access] = await Promise.all([listStudentExams(s.actor), getAccessState(s.user.id)]);
  const e = exams.find((x) => x.id === id);
  if (!e) notFound();
  const locked = e.requiresAccess && access.status !== "ACTIVE";
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader breadcrumbs={[{ href: "/student/exams", label: "Examinations" }, { label: e.title }]} eyebrow={e.subject} title={e.title} description={e.description ?? undefined} />
      <Card className="p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: FileQuestion, v: e.questionCount, l: "Questions" },
            { icon: Clock, v: `${e.durationMinutes} min`, l: "Duration" },
            { icon: Percent, v: `${e.passMark}%`, l: "Pass mark" },
            { icon: RotateCcw, v: `${e.attemptsUsed}/${e.maxAttempts}`, l: "Attempts used" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl bg-surface p-4 text-center">
              <x.icon className="mx-auto size-5 text-royal-600" aria-hidden />
              <p className="mt-2 text-lg font-extrabold text-navy-800">{x.v}</p>
              <p className="text-xs text-muted">{x.l}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-7 text-base font-bold text-navy-800">Instructions</h2>
        <ul className="mt-3 space-y-2.5 text-sm text-ink">
          {[
            "Your questions are drawn at random for you. Once you begin, your question set is fixed — refreshing will not change it.",
            "The timer is kept by the examination server. It keeps running if you close the page or lose your connection.",
            "Answers save automatically. If your internet drops, keep answering — they are stored on this device and sent when you reconnect.",
            "Use the palette to jump between questions and flag any you want to revisit. Review before you submit.",
            "When time runs out, your examination is submitted automatically.",
            "Leaving the exam window, switching tabs and copy/paste are recorded for the examination office.",
          ].map((t) => (
            <li key={t} className="flex gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success-600" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 border-t border-line pt-6">
          {locked ? (
            <Alert tone="warning" title="Access required">
              {access.message}{" "}
              <Link href="/student#activate" className="font-bold underline">
                Activate a code
              </Link>
            </Alert>
          ) : e.liveAttemptId ? (
            <Link href={`/cbt/${e.liveAttemptId}`} className={buttonClass("gold", "lg")}>
              Resume examination
            </Link>
          ) : e.canStart ? (
            <StartExamButton examId={e.id} />
          ) : (
            <Alert tone="info">{e.window === "OPEN" ? "You have used all attempts for this examination." : e.window === "UPCOMING" ? "This examination has not opened yet." : "This examination has closed."}</Alert>
          )}
          <p className="mt-4 flex items-center gap-2 text-xs text-muted">
            <ShieldCheck className="size-4 text-royal-600" aria-hidden /> Scoring is done on the server. Your result is protected and only visible to you and authorised staff.
          </p>
        </div>
      </Card>
    </div>
  );
}
