import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { reqCtx, requireParentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { childReport } from "@/server/services/guardians";
import { ACTIVITIES, FLAGS, listSchedulesForParent } from "@/server/services/schedules";
import { RemoveChildButton, ScheduleDelete, ScheduleForm } from "@/components/family-controls";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, Stat, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Child Activity" };

export default async function ChildPage({ params }: PageProps<"/parent/child/[id]">) {
  const s = await requireParentPage();
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();
  const [report, cfg] = await Promise.all([childReport(s.actor, id, await reqCtx()).catch(() => null), getSetting(s.user.schoolId, "parents")]);
  if (!report) notFound();
  const { child, summary } = report;
  const schedules = await listSchedulesForParent(s.actor, id, await reqCtx());
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" }).format(new Date());
  return (
    <div className="space-y-6">
      <Link href="/parent" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> My children</Link>
      <PageHeader eyebrow={[child.className, child.department].filter(Boolean).join(" · ") || "Student"} title={`${child.firstName} ${child.lastName}`} description={`Student ID ${child.studentNumber}. Last sign-in: ${child.lastLoginAt ? fmtLagos(child.lastLoginAt) : "not yet"}.`} />
      {cfg.showResults && <Link href={`/parent/child/${id}/report-card`} className={buttonClass("primary", "sm")}>Open report card</Link>}
      {child.status !== "ACTIVE" && <Alert tone="warning">This account is suspended. Please contact the school.</Alert>}
      {child.access.status !== "ACTIVE" && <Alert tone="warning">Your child has no active access code, so lessons and tests are locked. Please contact the school for an access code.</Alert>}
      {report.forumSuspension && <Alert tone="warning">Suspended from the student forum{report.forumSuspension.until ? ` until ${fmtLagos(report.forumSuspension.until)}` : ""}: {report.forumSuspension.reason}</Alert>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Tests and exams taken" value={summary.examsTaken} />
        <Stat label="Average score" value={summary.average === null ? "—" : `${summary.average}%`} tone="gold" />
        <Stat label="Passed" value={summary.passed} tone="green" />
        <Stat label="Lessons completed" value={summary.lessonsCompleted} tone="navy" />
      </div>
      {report.examsInProgress > 0 && <Alert tone="info">An examination is in progress right now.</Alert>}
      {cfg.showResults && (
        <Card>
          <CardHeader title="Recent results" description="Released results for tests and examinations, newest first." />
          {report.recent.length ? (
            <Table>
              <thead><tr><Th>Test</Th><Th>Subject</Th><Th>Score</Th><Th>Grade</Th><Th>Result</Th><Th>Date</Th></tr></thead>
              <tbody>
                {report.recent.map((r) => (
                  <tr key={r.id}>
                    <Td className="font-semibold text-navy-800">{r.title}</Td>
                    <Td>{r.subject}</Td>
                    <Td>{Math.round(r.percentage)}%</Td>
                    <Td>{r.grade}</Td>
                    <Td><Badge tone={r.passed ? "green" : "red"}>{r.passed ? "Passed" : "Not passed"}</Badge></Td>
                    <Td className="whitespace-nowrap text-xs">{fmtLagos(r.createdAt)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState title="No results yet" description="Results appear here as your child completes tests and examinations." />
          )}
        </Card>
      )}
      <Card>
        <CardHeader title="Study timetable and reminders" description="Plan study activities or add a supportive flag. Your child is notified and can mark each one as seen or done. This never changes any official result." />
        <div className="border-b border-line p-5"><ScheduleForm studentUserId={child.id} activities={ACTIVITIES} flags={FLAGS} today={today} /></div>
        {schedules.length ? (
          <Table>
            <thead><tr><Th>Activity</Th><Th>When</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {schedules.map((x) => (
                <tr key={x.id}>
                  <Td className="font-semibold text-navy-800">{x.title}{x.kind === "FLAG" && <Badge tone="gold" className="ml-1.5">Flag</Badge>}{x.note && <p className="text-xs font-normal text-muted">{x.note}</p>}</Td>
                  <Td className="whitespace-nowrap text-sm">{x.date}{x.startTime ? ` · ${x.startTime}${x.endTime ? `–${x.endTime}` : ""}` : ""}{x.repeat !== "ONCE" ? ` · ${x.repeat === "DAILY" ? "daily" : "weekly"}` : ""}</Td>
                  <Td><Badge tone={x.status === "COMPLETED" ? "green" : x.status === "ACKNOWLEDGED" ? "blue" : "amber"}>{x.status === "COMPLETED" ? "Completed" : x.status === "ACKNOWLEDGED" ? "Acknowledged" : "Scheduled"}</Badge></Td>
                  <Td className="text-right"><ScheduleDelete id={x.id} studentUserId={child.id} /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="Nothing scheduled yet" description="Add the first activity above." />
        )}
      </Card>
      {cfg.showStudyProgress && (
        <Card>
          <CardHeader title="Where your child needs help" description="Worked out from the questions your child has answered in tests and examinations. The weakest topics come first." />
          {report.recommend.weak.length ? (
            <div className="grid gap-5 p-5 md:grid-cols-2">
              <ul className="space-y-2">
                {report.recommend.weak.map((w) => (
                  <li key={w.topic_id} className="flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5 text-sm">
                    <span><span className="font-semibold text-navy-800">{w.topic}</span><span className="block text-xs text-muted">{w.subject}</span></span>
                    <Badge tone={w.accuracy < 40 ? "red" : w.accuracy < 60 ? "amber" : "green"}>{Math.round(w.accuracy)}% correct</Badge>
                  </li>
                ))}
              </ul>
              <div className="text-sm">
                <p className="font-semibold text-navy-800">What to do</p>
                {report.recommend.lessons.length ? (
                  <>
                    <p className="mt-1 text-muted">Ask your child to study these lessons in the Study Centre, then try a practice test on the topic:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-navy-800">{report.recommend.lessons.map((l) => <li key={l.id}>{l.title} <span className="text-xs text-muted">({l.topic})</span></li>)}</ul>
                  </>
                ) : (
                  <p className="mt-1 text-muted">Ask your child to revise these topics and try a practice test on each. You can add a reminder to the study timetable below.</p>
                )}
              </div>
            </div>
          ) : (
            <p className="p-5 text-sm text-muted">There are not enough answered questions yet. Recommendations appear after your child has taken a few tests.</p>
          )}
        </Card>
      )}
      {cfg.showStudyProgress && (
        <Card>
          <CardHeader title="Study progress" description="Lessons opened and completed in each subject." />
          {report.study.length ? (
            <Table>
              <thead><tr><Th>Subject</Th><Th>Lessons completed</Th><Th>Lessons started</Th><Th>Last studied</Th></tr></thead>
              <tbody>
                {report.study.map((x) => (
                  <tr key={x.subject}>
                    <Td className="font-semibold text-navy-800">{x.subject}</Td>
                    <Td>{x.completed}</Td>
                    <Td>{x.started}</Td>
                    <Td className="whitespace-nowrap text-xs">{x.last ? fmtLagos(new Date(x.last)) : "—"}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState title="No lessons yet" description="Study progress appears here once your child opens a lesson." />
          )}
        </Card>
      )}
      <div className="flex justify-end"><RemoveChildButton studentUserId={child.id} name={child.firstName} /></div>
    </div>
  );
}
