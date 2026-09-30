import type { Metadata } from "next";
import Link from "next/link";
import { KeyRound } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listCodes } from "@/server/services/access";
import { getSetting } from "@/server/settings";
import { CodeRowActions, GenerateCodes } from "@/components/admin/code-controls";
import { AdjustAccessButton } from "@/components/admin/student-controls";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Card, CardHeader, cx, EmptyState, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Access Codes" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(d)) : "—");

export default async function AccessCodesPage({ searchParams }: PageProps<"/admin/access-codes">) {
  const s = await requireStaffPage("codes.view");
  const sp = spRecord(await searchParams);
  const [cfg, list] = await Promise.all([getSetting(s.user.schoolId, "accessCodes"), listCodes(s.actor, { status: sp.status, search: sp.search, batchId: sp.batchId, page: Number(sp.page ?? 1) })]);
  const a = s.actor;
  const tabs = ["", "UNUSED", "ACTIVE", "EXPIRED", "SUSPENDED", "REVOKED"];
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Access" title="Access codes" description={`Each code grants ${cfg.defaultDays} days (default) of CBT, Study Centre, practice, assignments and analytics — starting at first activation. One code, one student.`} />
      {can(a, "codes.generate") && (
        <Card>
          <CardHeader title="Generate codes" description="Cryptographically random, unique, non-sequential. Bulk generation supported." />
          <div className="p-5">
            <GenerateCodes defaultDays={cfg.defaultDays} maxBulk={cfg.maxBulk} />
          </div>
        </Card>
      )}
      <nav aria-label="Status" className="no-scrollbar flex gap-2 overflow-x-auto">
        {tabs.map((t) => (
          <Link key={t || "all"} href={`/admin/access-codes${qs({ ...sp, status: t || undefined, page: undefined })}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", (sp.status ?? "") === t ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>
            {t ? t.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()) : "All"} <span className="opacity-70">{t ? (list.counts[t] ?? 0) : Object.values(list.counts).reduce((x, y) => x + y, 0)}</span>
          </Link>
        ))}
      </nav>
      <FilterBar action="/admin/access-codes" values={sp} exportHref={`/api/v1/admin/export/codes${qs({ status: sp.status })}`} filters={[{ type: "search", name: "search", placeholder: "Last 4 characters, full code, or student email/name" }]} />
      <Card>
        {list.rows.length ? (
          <Table>
            <thead>
              <tr>
                <Th>Code</Th>
                <Th>Status</Th>
                <Th>Days</Th>
                <Th>Created</Th>
                <Th>Student</Th>
                <Th>Activated</Th>
                <Th>Expires</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {list.rows.map((r) => (
                <tr key={r.id} className="align-top">
                  <Td className="font-mono text-sm font-bold text-navy-800">…{r.suffix}{r.note && <p className="font-sans text-xs font-normal text-muted">{r.note}</p>}</Td>
                  <Td><StatusBadge status={r.status} /></Td>
                  <Td>{r.durationDays}</Td>
                  <Td className="whitespace-nowrap text-xs text-muted">{fmt(r.createdAt)}</Td>
                  <Td>{r.studentId ? <Link href={`/admin/students/${r.studentId}`} className="text-sm font-semibold text-royal-600 hover:underline">{r.studentName}</Link> : <span className="text-muted">—</span>}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(r.activatedAt)}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(r.expiresAt)}{r.originalExpiresAt && r.expiresAt && +new Date(r.originalExpiresAt) !== +new Date(r.expiresAt) && <p className="text-muted">orig. {fmt(r.originalExpiresAt)}</p>}</Td>
                  <Td className="text-right">
                    <div className="flex flex-col items-end gap-1.5">
                      {can(a, "codes.manage") && <CodeRowActions id={r.id} status={r.status} activated={Boolean(r.studentId)} canReveal={can(a, "codes.generate")} />}
                      {can(a, "codes.manage") && r.periodId && <AdjustAccessButton periodId={r.periodId} label="Adjust period" />}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<KeyRound className="size-6" />} title="No codes found" />
        )}
        <Pagination page={list.page} pageSize={list.pageSize} total={list.total} href={(p) => `/admin/access-codes${qs(sp, { page: p })}`} />
      </Card>
    </div>
  );
}
