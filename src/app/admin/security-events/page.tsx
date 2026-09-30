import type { Metadata } from "next";
import { and, desc, eq, isNull, or, sql, type SQL } from "drizzle-orm";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { securityEvents, users } from "@/server/db/schema";
import { ResolveEventButton } from "@/components/admin/action-wrappers";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Card, CardHeader, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Security Events" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "medium" }).format(d);

export default async function SecurityEventsPage({ searchParams }: PageProps<"/admin/security-events">) {
  const s = await requireStaffPage("super.security");
  const sp = spRecord(await searchParams);
  const page = Math.max(1, Number(sp.page ?? 1));
  const db = getDb();
  const conds: (SQL | undefined)[] = [or(eq(securityEvents.schoolId, s.user.schoolId), isNull(securityEvents.schoolId))];
  if (sp.type) conds.push(eq(securityEvents.type, sp.type));
  if (sp.severity) conds.push(eq(securityEvents.severity, sp.severity as "HIGH"));
  if (sp.open === "1") conds.push(isNull(securityEvents.resolvedAt));
  const where = and(...conds);
  const [rows, [{ total }], summary] = await Promise.all([
    db.select({ e: securityEvents, email: users.email }).from(securityEvents).leftJoin(users, eq(users.id, securityEvents.userId)).where(where).orderBy(desc(securityEvents.createdAt)).limit(50).offset((page - 1) * 50),
    db.select({ total: sql<number>`count(*)::int` }).from(securityEvents).where(where),
    db.select({ type: securityEvents.type, n: sql<number>`count(*)::int` }).from(securityEvents).where(and(or(eq(securityEvents.schoolId, s.user.schoolId), isNull(securityEvents.schoolId)), sql`${securityEvents.createdAt} > now() - interval '7 days'`)).groupBy(securityEvents.type),
  ]);
  const TYPES = ["FAILED_LOGIN", "ACCOUNT_LOCKED", "INVALID_ACCESS_CODE", "CODE_REUSE_ATTEMPT", "CONCURRENT_SESSION", "SESSION_ANOMALY", "PRIVILEGE_ESCALATION", "UNAUTHORIZED_API", "SUSPICIOUS_EXAM_ACTIVITY", "IDOR_ATTEMPT", "RATE_LIMITED", "MALICIOUS_UPLOAD", "UNAUTHORIZED_RESOURCE", "MFA_FAILED"];
  return (
    <>
      <PageHeader eyebrow="Security" title="Security events" description="Failed logins, invalid codes, privilege escalation, IDOR and API manipulation attempts, suspicious exam activity, rate-limit violations and malicious uploads." />
      <Card className="mb-4">
        <CardHeader title="Last 7 days" />
        <div className="flex flex-wrap gap-2 p-4">
          {summary.map((x) => (
            <a key={x.type} href={`/admin/security-events${qs({ type: x.type })}`} className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-navy-800 ring-1 ring-line hover:bg-royal-50">{x.type.replace(/_/g, " ").toLowerCase()} · {x.n}</a>
          ))}
          {!summary.length && <span className="text-sm text-muted">No events in the last 7 days.</span>}
        </div>
      </Card>
      <FilterBar action="/admin/security-events" values={sp} filters={[{ type: "select", name: "type", label: "Type", options: TYPES.map((t) => ({ value: t, label: t.replace(/_/g, " ").toLowerCase() })) }, { type: "select", name: "severity", label: "Severity", options: ["INFO", "LOW", "MEDIUM", "HIGH", "CRITICAL"].map((v) => ({ value: v, label: v.toLowerCase() })) }, { type: "select", name: "open", label: "State", options: [{ value: "1", label: "Unresolved only" }] }]} />
      <Card>
        <Table>
          <thead><tr><Th>When</Th><Th>Type</Th><Th>Severity</Th><Th>User</Th><Th>Detail</Th><Th>IP</Th><Th /></tr></thead>
          <tbody>
            {rows.map(({ e, email }) => (
              <tr key={e.id} className="align-top">
                <Td className="whitespace-nowrap text-xs">{fmt(e.createdAt)}</Td>
                <Td className="text-xs font-semibold">{e.type.replace(/_/g, " ").toLowerCase()}</Td>
                <Td><StatusBadge status={e.severity} /></Td>
                <Td className="text-xs">{email ?? "—"}</Td>
                <Td className="max-w-xs text-[0.7rem] text-muted"><code>{e.detail ? JSON.stringify(e.detail).slice(0, 160) : ""}</code></Td>
                <Td className="font-mono text-xs">{e.ip}</Td>
                <Td>{e.resolvedAt ? <span className="text-xs text-success-600">Resolved</span> : <ResolveEventButton id={e.id} />}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination page={page} pageSize={50} total={total} href={(p) => `/admin/security-events${qs(sp, { page: p })}`} />
      </Card>
    </>
  );
}
