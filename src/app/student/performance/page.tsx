import type { Metadata } from "next";
import { Award, Gauge, Timer, TrendingDown, TrendingUp } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { studentPerformance } from "@/server/services/analytics";
import { BarList, TrendChart } from "@/components/charts";
import { Badge, Card, CardHeader, PageHeader, Stat } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Performance" };

export default async function PerformancePage() {
  const s = await requireStudentPage();
  const p = await studentPerformance(s.user.id);
  const secs = p.overall.avgResponseMs ? Math.round(p.overall.avgResponseMs / 1000) : null;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Analytics" title="My performance" description="Subject and topic analysis from your released results, classwork and assignments." />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <Stat label="Average score" value={p.overall.avg !== null ? `${p.overall.avg}%` : "—"} icon={<Gauge className="size-5" />} />
        <Stat label="Best score" value={p.overall.best !== null ? `${p.overall.best}%` : "—"} icon={<Award className="size-5" />} tone="gold" />
        <Stat label="Accuracy" value={p.overall.accuracy !== null ? `${p.overall.accuracy}%` : "—"} icon={<TrendingUp className="size-5" />} tone="green" />
        <Stat label="Avg. time / question" value={secs !== null ? `${secs}s` : "—"} icon={<Timer className="size-5" />} tone="navy" />
        <Stat
          label="Improvement"
          value={p.improvement === null ? "—" : `${p.improvement > 0 ? "+" : ""}${p.improvement}%`}
          hint="Last 3 vs first 3 exams"
          icon={p.improvement !== null && p.improvement < 0 ? <TrendingDown className="size-5" /> : <TrendingUp className="size-5" />}
          tone={p.improvement !== null && p.improvement < 0 ? "red" : "green"}
        />
      </div>
      <Card>
        <CardHeader title="Improvement trend" />
        <div className="p-5">
          <TrendChart label="Examination score trend" points={p.trend.map((t) => ({ x: t.date, y: t.percentage }))} />
        </div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Subject performance" />
          <div className="p-5">
            <BarList items={p.bySubject.map((b) => ({ label: b.subject, value: b.avg, hint: `${b.exams} exam${b.exams === 1 ? "" : "s"}` }))} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Topic performance" description="Accuracy per topic across your examinations" />
          <div className="max-h-96 overflow-y-auto p-5">
            <BarList items={p.topics.map((t) => ({ label: `${t.topic}`, value: t.accuracy, hint: t.subject }))} emptyText="Topic analysis appears after you answer questions in a few examinations." />
          </div>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Weak areas — practise these" />
          <ul className="divide-y divide-line">
            {p.weak.length ? (
              p.weak.map((w) => (
                <li key={w.topic} className="flex items-center justify-between px-5 py-3 text-sm">
                  <span className="font-semibold text-navy-800">{w.topic} <span className="font-normal text-muted">· {w.subject}</span></span>
                  <Badge tone="red">{w.accuracy}%</Badge>
                </li>
              ))
            ) : (
              <li className="px-5 py-4 text-sm text-muted">No weak areas detected yet.</li>
            )}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Strong areas" />
          <ul className="divide-y divide-line">
            {p.strong.length ? (
              p.strong.map((w) => (
                <li key={w.topic} className="flex items-center justify-between px-5 py-3 text-sm">
                  <span className="font-semibold text-navy-800">{w.topic} <span className="font-normal text-muted">· {w.subject}</span></span>
                  <Badge tone="green">{w.accuracy}%</Badge>
                </li>
              ))
            ) : (
              <li className="px-5 py-4 text-sm text-muted">Keep practising to build your strengths.</li>
            )}
          </ul>
        </Card>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Study Centre" value={`${p.study.completed}/${p.study.started}`} hint="Lessons completed / started" />
        <Stat label="Practice (classwork)" value={p.practice.avg !== null ? `${p.practice.avg}%` : "—"} hint={`${p.practice.attempts} attempts`} tone="gold" />
        <Stat label="Assignments" value={p.assignments.avg !== null ? `${p.assignments.avg}%` : "—"} hint={`${p.assignments.attempts} submissions`} tone="green" />
      </div>
    </div>
  );
}
