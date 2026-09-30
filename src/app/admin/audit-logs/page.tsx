import type { Metadata } from "next";
import { and, desc, eq, ilike, or, sql, type SQL } from "drizzle-orm";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { auditLogs, users } from "@/server/db/schema";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Badge, Card, PageHeader, Pagination, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Audit Logs" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "medium" }).format(d);

export default async function AuditLogsPage({ searchParams }: PageProps<"/admin/audit-logs">) {
  const s = await requireStaffPage("super.audit");
  const sp = spRecord(await searchParams);
  const page = Math.max(1, Number(sp.page ?? 1));
  const conds: (SQL | undefined)[] = [or(eq(auditLogs.schoolId, s.user.schoolId), sql`${auditLogs.schoolId} IS NULL`)];
  if (sp.search) conds.push(or(ilike(auditLogs.action, `%${sp.search}%`), ilike(auditLogs.summary, `%${sp.search}%`), ilike(auditLogs.entityId, `%${sp.search}%`)));
  if (sp.actorId) conds.push(eq(auditLogs.actorId, sp.actorId));
  if (sp.actorType) conds.push(eq(auditLogs.actorType, sp.actorType));
  if (sp.from) conds.push(sql`${auditLogs.createdAt} >= ${new Date(sp.from)}`);
  if (sp.to) conds.push(sql`${auditLogs.createdAt} <= ${new Date(`${sp.to}T23:59:59`)}`);
  const where = and(...conds);
  const db = getDb();
  const rows = await db
    .select({ a: auditLogs, actor: sql<string | null>`${users.firstName} || ' ' || ${users.lastName}` })
    .from(auditLogs)
    .leftJoin(users, eq(users.id, auditLogs.actorId))
    .where(where)
    .orderBy(desc(auditLogs.createdAt))
    .limit(50)
    .offset((page - 1) * 50);
  const [{ total }] = await db.select({ total: sql<number>`count(*)::int` }).from(auditLogs).where(where);
  return (
    <>
      <PageHeader eyebrow="Security" title="Audit logs" description="Append-only record of registrations, sign-ins, codes, questions, exams, results, permissions, security and administrative changes. The database rejects edits and deletions." />
      <FilterBar
        action="/admin/audit-logs"
        values={sp}
        filters={[
          { type: "search", name: "search", placeholder: "Action, summary or entity id (e.g. codes.activated)" },
          { type: "select", name: "actorType", label: "Actor", options: ["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT", "SYSTEM"].map((v) => ({ value: v, label: v.replace("_", " ").toLowerCase() })) },
          { type: "date", name: "from", label: "From" },
          { type: "date", name: "to", label: "To" },
        ]}
      />
      <Card>
        <Table>
          <thead><tr><Th>When</Th><Th>Actor</Th><Th>Action</Th><Th>Summary</Th><Th>Entity</Th><Th>IP</Th></tr></thead>
          <tbody>
            {rows.map(({ a, actor }) => (
              <tr key={a.id} className="align-top">
                <Td className="whitespace-nowrap text-xs">{fmt(a.createdAt)}</Td>
                <Td className="text-xs"><span className="font-semibold text-navy-800">{actor ?? "System"}</span><br /><span className="text-muted">{a.actorType?.toLowerCase()}</span></Td>
                <Td><Badge tone={a.action.startsWith("security") || a.action.includes("failed") ? "red" : a.action.startsWith("access") || a.action.startsWith("codes") ? "gold" : "blue"}>{a.action}</Badge></Td>
                <Td className="max-w-md text-xs">{a.summary}{a.metadata ? <details className="mt-1"><summary className="cursor-pointer text-muted">details</summary><pre className="mt-1 max-h-40 overflow-auto rounded bg-surface p-2 text-[0.7rem]">{JSON.stringify(a.metadata, null, 2)}</pre></details> : null}</Td>
                <Td className="font-mono text-[0.7rem] text-muted">{a.entityType}<br />{a.entityId?.slice(0, 13)}</Td>
                <Td className="font-mono text-xs text-muted">{a.ip}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination page={page} pageSize={50} total={total} href={(p) => `/admin/audit-logs${qs(sp, { page: p })}`} />
      </Card>
    </>
  );
}
