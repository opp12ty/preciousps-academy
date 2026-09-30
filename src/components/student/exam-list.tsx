import Link from "next/link";
import { CalendarClock, Clock, FileQuestion, Lock, RotateCcw } from "lucide-react";
import type { listStudentExams } from "@/server/services/exams";
import { Badge, buttonClass, Card, EmptyState } from "../ui/primitives";

type Exam = Awaited<ReturnType<typeof listStudentExams>>[number];
const TYPE_LABEL: Record<string, string> = { PRACTICE: "Practice", MOCK: "Mock", SCHOOL_EXAM: "School exam", CLASS_TEST: "Class test", CONTINUOUS_ASSESSMENT: "C.A.", JAMB: "JAMB", WAEC: "WAEC", NECO: "NECO", BECE: "BECE", CUSTOM: "Custom" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d) : "");

export function ExamGrid({ exams, hasAccess, empty }: { exams: Exam[]; hasAccess: boolean; empty: string }) {
  if (!exams.length) return <Card><EmptyState icon={<FileQuestion className="size-6" />} title="Nothing here yet" description={empty} /></Card>;
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {exams.map((e) => {
        const locked = e.requiresAccess && !hasAccess;
        return (
          <Card key={e.id} className="flex flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <Badge tone={e.examType === "MOCK" || e.examType === "JAMB" || e.examType === "WAEC" || e.examType === "NECO" || e.examType === "BECE" ? "navy" : "blue"}>{TYPE_LABEL[e.examType]}</Badge>
              {e.window !== "OPEN" && <Badge tone={e.window === "UPCOMING" ? "amber" : "neutral"}>{e.window === "UPCOMING" ? "Upcoming" : "Closed"}</Badge>}
            </div>
            <h3 className="mt-3 text-base font-bold text-navy-800">{e.title}</h3>
            <p className="text-sm text-muted">
              {e.subject}
              {e.year ? ` · ${e.year}` : ""}
            </p>
            <ul className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <li className="rounded-lg bg-surface py-2">
                <FileQuestion className="mx-auto size-4 text-royal-600" aria-hidden />
                <span className="mt-1 block font-bold text-navy-800">{e.questionCount}</span>questions
              </li>
              <li className="rounded-lg bg-surface py-2">
                <Clock className="mx-auto size-4 text-royal-600" aria-hidden />
                <span className="mt-1 block font-bold text-navy-800">{e.durationMinutes}</span>minutes
              </li>
              <li className="rounded-lg bg-surface py-2">
                <RotateCcw className="mx-auto size-4 text-royal-600" aria-hidden />
                <span className="mt-1 block font-bold text-navy-800">
                  {e.attemptsUsed}/{e.maxAttempts}
                </span>
                attempts
              </li>
            </ul>
            {(e.startsAt || e.endsAt) && (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <CalendarClock className="size-3.5" aria-hidden />
                {e.startsAt && `Opens ${fmt(e.startsAt)}`} {e.endsAt && `· Closes ${fmt(e.endsAt)}`}
              </p>
            )}
            <div className="mt-auto pt-5">
              {locked ? (
                <Link href="/student#activate" className={buttonClass("secondary", "md", "w-full")}>
                  <Lock className="size-4" /> Activate access to start
                </Link>
              ) : e.liveAttemptId ? (
                <Link href={`/cbt/${e.liveAttemptId}`} className={buttonClass("gold", "md", "w-full")}>
                  Resume examination
                </Link>
              ) : e.canStart ? (
                <Link href={`/student/exams/${e.id}`} className={buttonClass("primary", "md", "w-full")}>
                  View & start
                </Link>
              ) : (
                <span className={buttonClass("secondary", "md", "w-full opacity-60")}>{e.window === "OPEN" ? "No attempts left" : e.window === "UPCOMING" ? "Not yet open" : "Closed"}</span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
