import type { Metadata } from "next";
import Link from "next/link";
import { MonitorCheck, Plus } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listExamsAdmin } from "@/server/services/exams";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { SECTION_SHORT, type Section } from "@/core/sections";
import { Badge, buttonClass, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Examinations" };

export default async function ExamsAdmin({ searchParams }: PageProps<"/admin/examinations">) {
  const s = await requireStaffPage("exams.view");
  const sp = spRecord(await searchParams);
  const rows = await listExamsAdmin(s.actor, { status: sp.status, search: sp.search, level: sp.level });
  return (
    <>
      <PageHeader eyebrow="Assessment" title="Examinations" description="Configure, publish and monitor CBT examinations. Question sets are drawn at random from approved questions for every attempt." actions={can(s.actor, "exams.manage") && <Link href="/admin/examinations/new" className={buttonClass("primary")}><Plus className="size-4" /> New examination</Link>} />
      <FilterBar action="/admin/examinations" values={sp} filters={[{ type: "search", name: "search", placeholder: "Title" }, { type: "select", name: "level", label: "Section", options: [{ value: "JUNIOR_SECONDARY", label: "JSS" }, { value: "SENIOR_SECONDARY", label: "SS" }, { value: "ALL", label: "All sections" }] }, { type: "select", name: "status", label: "Status", options: [{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft" }, { value: "ARCHIVED", label: "Archived" }] }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Examination</Th><Th>Type</Th><Th>Questions</Th><Th>Pool</Th><Th>Duration</Th><Th>Attempts</Th><Th>Average</Th><Th>Status</Th></tr></thead>
            <tbody>
              {rows.map(({ e, subject, className, department, attempts, avg, pool }) => (
                <tr key={e.id} className="hover:bg-surface">
                  <Td>
                    <Link href={`/admin/examinations/${e.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{e.title}</Link>
                    <p className="text-xs text-muted">{e.level ? SECTION_SHORT[e.level as Section] ?? e.level : "JSS & SS"} · {subject} · {className ?? "All classes"} · {department ?? "All departments"}{e.year ? ` · ${e.year}` : ""}</p>
                  </Td>
                  <Td><Badge tone="navy">{e.examType.replace(/_/g, " ")}</Badge></Td>
                  <Td>{e.questionCount}</Td>
                  <Td><Badge tone={pool >= e.questionCount ? "green" : "red"}>{pool}</Badge></Td>
                  <Td>{e.durationMinutes} min</Td>
                  <Td>{attempts}</Td>
                  <Td>{avg !== null ? `${avg}%` : "—"}</Td>
                  <Td><StatusBadge status={e.status} /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<MonitorCheck className="size-6" />} title="No examinations" />
        )}
      </Card>
    </>
  );
}
