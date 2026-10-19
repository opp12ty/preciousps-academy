import type { Metadata } from "next";
import Link from "next/link";
import { KeyRound } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listCodes } from "@/server/services/access";
import { getSetting } from "@/server/settings";
import { getCatalog } from "@/server/services/curriculum";
import { ClassAccess } from "@/components/admin/class-access";
import { CodeFeaturesForm, CodeRowActions, GenerateCodes } from "@/components/admin/code-controls";
import { AdjustAccessButton } from "@/components/admin/student-controls";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Badge, Card, CardHeader, cx, EmptyState, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Access Codes" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(d)) : "—");

export default async function AccessCodesPage({ searchParams }: PageProps<"/admin/access-codes">) {
  const s = await requireStaffPage("codes.view");
  const sp = spRecord(await searchParams);
  const [cfg, cat, list] = await Promise.all([getSetting(s.user.schoolId, "accessCodes"), getCatalog(s.user.schoolId), listCodes(s.actor, { status: sp.status, search: sp.search, batchId: sp.batchId, audience: sp.audience, page: Number(sp.page ?? 1) })]);
  const a = s.actor;
  const tabs = ["", "UNUSED", "ACTIVE", "EXPIRED", "SUSPENDED", "REVOKED"];
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Access" title="Access codes" description={`Each code grants ${cfg.defaultDays} days (default) of CBT, Study Centre, practice, assignments and analytics — starting at first activation. One code, one student. Parent codes open the parent portal and school codes open a school account; each kind of code works only on its own kind of account.`} />
      {can(a, "codes.generate") && (
        <Card>
          <CardHeader title="Generate codes" description="Cryptographically random, unique, non-sequential. Bulk generation supported." />
          <div className="p-5">
            <GenerateCodes defaultDays={cfg.defaultDays} maxBulk={cfg.maxBulk} canPremium={can(s.actor, "premium.manage")} />
          </div>
        </Card>
      )}
      {can(a, "codes.generate") && (
        <Card>
          <CardHeader title="Give access to a class" description="Generates a code for each student of the class who has no access, and activates it on their account in one step." />
          <div className="p-5">
            <ClassAccess classes={cat.classes.map((c) => ({ id: c.id, name: c.name }))} departments={cat.departments.map((d) => ({ id: d.id, name: d.name }))} defaultDays={cfg.defaultDays} />
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
      <nav aria-label="Who the code is for" className="no-scrollbar flex gap-2 overflow-x-auto">
        {[["", "Everyone"], ["STUDENT", "Student codes"], ["PARENT", "Parent codes"], ["SCHOOL", "School codes"]].map(([v, l]) => (
          <Link key={v || "all"} href={`/admin/access-codes${qs({ ...sp, audience: v || undefined, page: undefined })}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", (sp.audience ?? "") === v ? "bg-royal-600 text-white ring-royal-600" : "bg-white text-navy-800 ring-line hover:bg-surface")}>
            {l}
          </Link>
        ))}
      </nav>
      <FilterBar action="/admin/access-codes" values={sp} exportHref={`/api/v1/admin/export/codes${qs({ status: sp.status })}`} filters={[{ type: "search", name: "search", placeholder: "Last 4 characters, full code, or e-mail/name" }]} />
      <Card>
        {list.rows.length ? (
          <Table>
            <thead>
              <tr>
                <Th>Code</Th>
                <Th>Status</Th>
                <Th>Days</Th>
                <Th>Created</Th>
                <Th>Activated by</Th>
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
                  <Td>{r.durationDays}{r.tier === "PREMIUM" && <Badge tone="gold" className="ml-1.5">Premium</Badge>}{r.audience === "PARENT" && <Badge tone="blue" className="ml-1.5">Parent</Badge>}{r.audience === "SCHOOL" && <Badge tone="navy" className="ml-1.5">School</Badge>}</Td>
                  <Td className="whitespace-nowrap text-xs text-muted">{fmt(r.createdAt)}</Td>
                  <Td>{r.studentId ? <Link href={r.audience === "PARENT" ? "/admin/parents?tab=parents" : `/admin/students/${r.studentId}`} className="text-sm font-semibold text-royal-600 hover:underline">{r.studentName}</Link> : <span className="text-muted">—</span>}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(r.activatedAt)}</Td>
                  <Td className="whitespace-nowrap text-xs">{fmt(r.expiresAt)}{r.originalExpiresAt && r.expiresAt && +new Date(r.originalExpiresAt) !== +new Date(r.expiresAt) && <p className="text-muted">orig. {fmt(r.originalExpiresAt)}</p>}</Td>
                  <Td className="text-right">
                    <div className="flex flex-col items-end gap-1.5">
                      {can(a, "codes.manage") && r.audience !== "PARENT" && (
                        <details className="relative text-left">
                          <summary className="cursor-pointer list-none rounded-lg px-2 py-1 text-xs font-semibold text-royal-600 ring-1 ring-line hover:bg-royal-50">Features{r.features ? ` (${r.features.length})` : ""}</summary>
                          <div className="absolute right-0 z-20 mt-2 w-[min(46rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift"><CodeFeaturesForm id={r.id} features={r.features} hub={{ session: r.hubSessionMinutes, cooldown: r.hubCooldownMinutes, unlimited: r.hubUnlimited }} canPremium={can(a, "premium.manage")} /></div>
                        </details>
                      )}
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
