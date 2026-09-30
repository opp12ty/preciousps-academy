import type { Metadata } from "next";
import { Download } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { adminDashboard, questionAnalytics, REPORTS, runReport } from "@/server/services/analytics";
import { BarList, ColumnChart, Donut, GRADE_COLORS } from "@/components/charts";
import { Badge, buttonClass, Card, CardHeader, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Analytics & Reports" };

export default async function AnalyticsPage() {
  const s = await requireStaffPage("analytics.view");
  const [dash, subjects, questionsLow] = await Promise.all([adminDashboard(s.user.schoolId), runReport(s.user.schoolId, "subject-performance"), questionAnalytics(s.user.schoolId, 12)]);
  const reports = REPORTS.filter((r) => !["admin-activity", "security-activity"].includes(r.kind) || can(s.actor, "super.audit"));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Insight" title="Analytics & reports" description="Performance across subjects, questions and students. Every report exports to CSV, Excel or PDF." />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Examination activity (14 days)" />
          <div className="p-5"><ColumnChart label="Results per day" data={dash.daily.map((d) => ({ x: d.day, y: d.results }))} /></div>
        </Card>
        <Card>
          <CardHeader title="Grade distribution" />
          <div className="p-5"><Donut label="Grades" segments={dash.gradeDist.map((g) => ({ label: `Grade ${g.grade}`, value: g.n, color: GRADE_COLORS[g.grade] ?? "#94a3b8" }))} /></div>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Subject performance" />
          <div className="p-5">
            <BarList items={(subjects as { subject: string; average: number | null; results: number }[]).filter((x) => x.average !== null).map((x) => ({ label: x.subject, value: x.average!, hint: `${x.results} results` }))} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Questions that may need review" description="Lowest accuracy — potentially difficult or ambiguous (never auto-deleted)" />
          <Table>
            <thead><tr><Th>Ref</Th><Th>Subject</Th><Th>Attempted</Th><Th>Correct</Th><Th>Flagged</Th></tr></thead>
            <tbody>
              {questionsLow.map((q) => (
                <tr key={q.id}>
                  <Td><a className="font-mono text-xs font-bold text-royal-600 hover:underline" href={`/admin/questions/${q.id}`}>{q.ref}</a><p className="line-clamp-1 max-w-xs text-xs text-muted">{q.stem}</p></Td>
                  <Td className="text-xs">{q.subject}</Td>
                  <Td>{q.attempted}</Td>
                  <Td><Badge tone={(q.correct_pct ?? 0) < 30 ? "red" : "amber"}>{q.correct_pct ?? 0}%</Badge></Td>
                  <Td>{q.flag_pct ?? 0}%</Td>
                </tr>
              ))}
              {!questionsLow.length && <tr><Td colSpan={5} className="text-center text-sm text-muted">Not enough attempts yet.</Td></tr>}
            </tbody>
          </Table>
        </Card>
      </div>
      <Card>
        <CardHeader title="Reports" description="Generated from live data at the moment of export." />
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <li key={r.kind} className="bg-white p-5">
              <p className="font-bold text-navy-800">{r.title}</p>
              <p className="mt-1 text-xs text-muted">{r.description}</p>
              <div className="mt-3 flex gap-1.5">
                {(["csv", "xlsx", "pdf"] as const).map((f) => (
                  <a key={f} href={`/api/v1/admin/export/report?report=${r.kind}&format=${f}`} className={buttonClass("secondary", "sm")}>
                    <Download className="size-3.5" /> {f.toUpperCase()}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
