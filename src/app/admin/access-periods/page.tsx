import type { Metadata } from "next";
import Link from "next/link";
import { and, desc, eq, gt, lte, sql } from "drizzle-orm";
import { can } from "@/core/permissions";
import { effectiveStatus } from "@/core/access-engine";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { activationCodes, studentAccessPeriods, users } from "@/server/db/schema";
import { getSetting } from "@/server/settings";
import { AdjustAccessButton } from "@/components/admin/student-controls";
import { DefaultDaysForm } from "@/components/admin/settings-forms";
import { qs, spRecord } from "@/components/admin/filters";
import { Card, CardHeader, cx, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Access Periods" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);

export default async function AccessPeriodsPage({ searchParams }: PageProps<"/admin/access-periods">) {
  const s = await requireStaffPage("codes.view");
  const sp = spRecord(await searchParams);
  const view = sp.view ?? "active";
  const now = new Date();
  const cond =
    view === "expiring"
      ? and(eq(studentAccessPeriods.status, "ACTIVE"), gt(studentAccessPeriods.currentExpiresAt, now), lte(studentAccessPeriods.currentExpiresAt, sql`now() + interval '7 days'`))
      : view === "active"
        ? and(eq(studentAccessPeriods.status, "ACTIVE"), gt(studentAccessPeriods.currentExpiresAt, now))
        : undefined;
  const rows = await getDb()
    .select({ p: studentAccessPeriods, name: sql<string>`${users.firstName} || ' ' || ${users.lastName}`, email: users.email, suffix: activationCodes.codeSuffix })
    .from(studentAccessPeriods)
    .innerJoin(users, eq(users.id, studentAccessPeriods.userId))
    .innerJoin(activationCodes, eq(activationCodes.id, studentAccessPeriods.codeId))
    .where(and(eq(studentAccessPeriods.schoolId, s.user.schoolId), cond))
    .orderBy(desc(studentAccessPeriods.activatedAt))
    .limit(300);
  const cfg = await getSetting(s.user.schoolId, "accessCodes");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Access" title="Access periods" description="Server-authoritative access windows. Changes are recalculated on the server, synchronised to each student's countdown and written to the audit log." />
      {can(s.actor, "super.settings") && (
        <Card>
          <CardHeader title="Default access period" description="Applies to newly generated codes. Existing periods are adjusted individually below." />
          <div className="p-5">
            <DefaultDaysForm current={cfg.defaultDays} allowMultiple={cfg.allowMultipleActive} maxBulk={cfg.maxBulk} />
          </div>
        </Card>
      )}
      <nav className="flex gap-2">
        {[
          ["active", "Active"],
          ["expiring", "Expiring in 7 days"],
          ["all", "All"],
        ].map(([v, l]) => (
          <Link key={v} href={`/admin/access-periods${qs({ view: v })}`} className={cx("rounded-full px-4 py-1.5 text-sm font-semibold ring-1", view === v ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line")}>
            {l}
          </Link>
        ))}
      </nav>
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Student</Th><Th>Code</Th><Th>Status</Th><Th>Days</Th><Th>Activated</Th><Th>Original expiry</Th><Th>Current expiry</Th><Th /></tr></thead>
            <tbody>
              {rows.map(({ p, name, email, suffix }) => (
                <tr key={p.id}>
                  <Td><Link href={`/admin/students/${p.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{name}</Link><p className="text-xs text-muted">{email}</p></Td>
                  <Td className="font-mono text-xs">…{suffix}</Td>
                  <Td><StatusBadge status={effectiveStatus(p, now)} /></Td>
                  <Td>{p.durationDays}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(p.activatedAt)}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(p.originalExpiresAt)}</Td>
                  <Td className="whitespace-nowrap text-xs font-semibold">{fmt(p.currentExpiresAt)}</Td>
                  <Td>{can(s.actor, "codes.manage") && <AdjustAccessButton periodId={p.id} label="Adjust" />}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No access periods in this view" />
        )}
      </Card>
    </div>
  );
}
