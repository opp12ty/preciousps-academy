import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { examinations } from "@/server/db/schema";
import { listAttempts, poolSize } from "@/server/services/exams";
import { getCatalog } from "@/server/services/curriculum";
import { topicOptions } from "@/server/services/pickers";
import { getSettings } from "@/server/settings";
import { ExamForm, type ExamData } from "@/components/admin/exam-form";
import { ExamStatusControls } from "@/components/admin/exam-controls";
import { Alert, Badge, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Examination" };

export default async function ExamDetail({ params }: PageProps<"/admin/examinations/[id]">) {
  const s = await requireStaffPage("exams.view");
  const { id } = await params;
  const [e] = await getDb().select().from(examinations).where(and(eq(examinations.id, id), eq(examinations.schoolId, s.user.schoolId)));
  if (!e) notFound();
  const [pool, cat, topics, st, attempts] = await Promise.all([poolSize(e), getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), getSettings(s.user.schoolId, ["examination", "academicCalendar", "results"]), listAttempts(s.actor, { examId: id })]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  const data: ExamData = { ...e, startsAt: e.startsAt?.toISOString() ?? null, endsAt: e.endsAt?.toISOString() ?? null, poolFilter: e.poolFilter as ExamData["poolFilter"] };
  const a = s.actor;
  return (
    <div className="space-y-6">
      <PageHeader breadcrumbs={[{ href: "/admin/examinations", label: "Examinations" }, { label: e.title }]} title={e.title} actions={<><StatusBadge status={e.status} /><Badge>v{e.version}</Badge></>} />
      <Card className="flex flex-wrap items-center justify-between gap-4 p-5">
        <div className="flex flex-wrap gap-6 text-sm">
          <div><p className="text-xs text-muted">Approved pool</p><p className="text-xl font-extrabold text-navy-800">{pool}</p></div>
          <div><p className="text-xs text-muted">Questions per attempt</p><p className="text-xl font-extrabold text-navy-800">{e.questionCount}</p></div>
          <div><p className="text-xs text-muted">Attempts</p><p className="text-xl font-extrabold text-navy-800">{attempts.total}</p></div>
          <div><p className="text-xs text-muted">Results</p><p className="text-sm font-bold text-navy-800">{e.resultVisibility === "IMMEDIATE" ? "Immediate" : e.resultsReleasedAt ? "Released" : "Not released"}</p></div>
        </div>
        <ExamStatusControls id={e.id} status={e.status} canPublish={can(a, "exams.publish")} canRelease={can(a, "results.manage")} resultVisibility={e.resultVisibility} />
      </Card>
      {pool < e.questionCount && <Alert tone="warning" title="Pool too small">This exam needs {e.questionCount} approved questions but only {pool} match. <Link className="font-bold underline" href="/admin/questions?status=PENDING_REVIEW">Review pending questions</Link> or lower the count.</Alert>}
      {pool >= e.questionCount && pool < e.questionCount * 2 && e.randomizeQuestions && <Alert tone="info">Tip: with a pool only {Math.round((pool / e.questionCount) * 10) / 10}× the question count, students will see many of the same questions. A pool of 3× or more gives better variety.</Alert>}
      {can(a, "exams.manage") && (
        <Card className="p-5 sm:p-6">
          <ExamForm exam={data} subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} topics={topics} years={st.academicCalendar.years} defaults={{ duration: st.examination.defaultDurationMinutes, count: st.examination.defaultQuestionCount, visibility: st.results.defaultVisibility }} />
        </Card>
      )}
      <Card>
        <CardHeader title="Recent attempts" action={<Link href={`/admin/attempts?examId=${e.id}`} className="text-sm font-semibold text-royal-600 hover:underline">All attempts</Link>} />
        <Table>
          <thead><tr><Th>Student</Th><Th>Attempt</Th><Th>Status</Th><Th>Score</Th><Th>Anomalies</Th><Th>Started</Th></tr></thead>
          <tbody>
            {attempts.rows.slice(0, 15).map((r) => (
              <tr key={r.id}>
                <Td className="font-semibold">{r.studentName}</Td>
                <Td>{r.attemptNumber}</Td>
                <Td><StatusBadge status={r.status} /></Td>
                <Td>{r.percentage !== null ? `${r.percentage}%` : "—"}</Td>
                <Td>{r.suspiciousEvents > 0 ? <Badge tone="amber">{r.suspiciousEvents}</Badge> : "0"}</Td>
                <Td className="text-xs text-muted">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "short" }).format(r.startedAt)}</Td>
              </tr>
            ))}
            {!attempts.rows.length && <tr><Td colSpan={6} className="text-center text-sm text-muted">No attempts yet.</Td></tr>}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
