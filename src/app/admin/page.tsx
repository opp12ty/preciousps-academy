import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BookOpen, ClipboardList, FileQuestion, KeyRound, MonitorCheck, ShieldAlert, Timer, UserCheck, Users, UserX } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { adminDashboard } from "@/server/services/analytics";
import { ColumnChart, Donut, GRADE_COLORS } from "@/components/charts";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, Stat } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Admin Dashboard" };
const fmt = (d: Date | string) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(d));

export default async function AdminDashboard({ searchParams }: PageProps<"/admin">) {
  const s = await requireStaffPage();
  const sp = await searchParams;
  const d = await adminDashboard(s.user.schoolId);
  const st = d.stats;
  const a = s.actor;
  return (
    <div className="space-y-6">
      {sp.denied && <Alert tone="danger" title="Permission denied">You do not have access to that area. The attempt has been logged.</Alert>}
      <PageHeader
        eyebrow={s.user.userType === "SUPER_ADMIN" ? "Super Admin control centre" : "Administration"}
        title={`Welcome, ${s.user.firstName}`}
        description="Live overview of students, access, assessments and security."
        actions={
          <>
            {can(a, "codes.generate") && (
              <Link href="/admin/access-codes" className={buttonClass("gold")}>
                <KeyRound className="size-4" /> Generate codes
              </Link>
            )}
            {can(a, "exams.manage") && (
              <Link href="/admin/examinations/new" className={buttonClass("primary")}>
                <MonitorCheck className="size-4" /> New examination
              </Link>
            )}
          </>
        }
      />
      {st.security_alerts > 0 && can(a, "super.security") && (
        <Alert tone="danger" title={`${st.security_alerts} unresolved high-severity security alert(s) in the last 7 days`}>
          <Link href="/admin/security-events" className="font-bold underline">
            Review security events
          </Link>
        </Alert>
      )}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Total students" value={st.students.toLocaleString()} icon={<Users className="size-5" />} />
        <Stat label="Active students" value={st.active_students.toLocaleString()} hint="Valid access now" icon={<UserCheck className="size-5" />} tone="green" />
        <Stat label="Expired students" value={st.expired_students.toLocaleString()} icon={<UserX className="size-5" />} tone="red" />
        <Stat label="Live exam sessions" value={st.live_attempts} icon={<Timer className="size-5" />} tone="navy" />
        <Stat label="Active codes" value={st.active_codes.toLocaleString()} hint={`${st.unused_codes} unused · ${st.expired_codes} expired`} icon={<KeyRound className="size-5" />} tone="gold" />
        <Stat label="Published exams" value={st.exams} icon={<MonitorCheck className="size-5" />} />
        <Stat label="Approved questions" value={st.questions.toLocaleString()} hint={`${st.pending_reviews} awaiting review`} icon={<FileQuestion className="size-5" />} tone="green" />
        <Stat label="Avg. score (30 days)" value={`${st.avg_30d}%`} hint={`${st.assignments} active assignments · ${st.study_7d} study events (7d)`} icon={<BookOpen className="size-5" />} tone="gold" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Results per day" description="Last 14 days (WAT)" />
          <div className="p-5">
            <ColumnChart label="Results per day" data={d.daily.map((x) => ({ x: x.day, y: x.results }))} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Grade distribution" />
          <div className="p-5">
            <Donut label="Grade distribution" segments={d.gradeDist.map((g) => ({ label: `Grade ${g.grade}`, value: g.n, color: GRADE_COLORS[g.grade] ?? "#94a3b8" }))} />
          </div>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Recent results" action={can(a, "results.view") && <Link href="/admin/results" className="text-sm font-semibold text-royal-600 hover:underline">All results</Link>} />
          {d.recentResults.length ? (
            <ul className="divide-y divide-line">
              {d.recentResults.map((r) => (
                <li key={r.id} className="flex items-center gap-3 px-5 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-navy-800">{r.student}</p>
                    <p className="truncate text-xs text-muted">
                      {r.exam} · {fmt(r.created_at)}
                    </p>
                  </div>
                  <span className="text-sm font-bold tabular-nums">{r.percentage}%</span>
                  <Badge tone={r.grade === "F" ? "red" : r.grade === "A" ? "green" : "blue"}>{r.grade}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No results yet" />
          )}
        </Card>
        <Card>
          <CardHeader title="Recent administrative activity" action={can(a, "super.audit") && <Link href="/admin/audit-logs" className="text-sm font-semibold text-royal-600 hover:underline">Audit log</Link>} />
          {d.recentActivity.length ? (
            <ul className="divide-y divide-line">
              {d.recentActivity.map((r, i) => (
                <li key={i} className="px-5 py-3">
                  <p className="text-sm font-semibold text-navy-800">
                    {r.actor ?? "System"} <span className="font-normal text-muted">· {r.action}</span>
                  </p>
                  <p className="truncate text-xs text-muted">
                    {r.summary} · {fmt(r.created_at)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No activity yet" />
          )}
        </Card>
      </div>
      {st.pending_reviews > 0 && can(a, "questions.review") && (
        <Card className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="size-6 text-gold-500" aria-hidden />
            <p className="text-sm">
              <strong className="text-navy-800">{st.pending_reviews} question(s)</strong> are waiting for review. Only approved questions can appear in examinations.
            </p>
          </div>
          <Link href="/admin/questions?status=PENDING_REVIEW" className={buttonClass("primary", "sm")}>
            <ClipboardList className="size-4" /> Review now
          </Link>
        </Card>
      )}
      {can(a, "super.security") && (
        <p className="flex items-center gap-2 text-xs text-muted">
          <ShieldAlert className="size-4" aria-hidden /> All administrative actions on this platform are recorded in the append-only audit log.
        </p>
      )}
    </div>
  );
}
