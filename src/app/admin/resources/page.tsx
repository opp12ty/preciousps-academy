import type { Metadata } from "next";
import { ExternalLink, Pencil } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listResources } from "@/server/services/resources";
import { getCatalog } from "@/server/services/curriculum";
import { resourceStatusAction } from "../actions";
import { ResourceForm } from "@/components/admin/resource-form";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { ActionButton } from "@/components/ui/interactive";
import { Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Resources" };

export default async function ResourcesAdmin({ searchParams }: PageProps<"/admin/resources">) {
  const s = await requireStaffPage("resources.manage");
  const sp = spRecord(await searchParams);
  const [cat, rows] = await Promise.all([getCatalog(s.user.schoolId), listResources(s.user.schoolId, { search: sp.search, subjectId: sp.subjectId, type: sp.type, status: sp.status })]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Study Centre" title="Resource Centre" description="Curate external learning resources. Links are validated (https only, no private addresses) and content is rendered as text." />
      <Card>
        <CardHeader title="Add a resource" />
        <div className="p-5"><ResourceForm subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} /></div>
      </Card>
      <FilterBar action="/admin/resources" values={sp} filters={[{ type: "search", name: "search", placeholder: "Title or description" }, { type: "select", name: "subjectId", label: "Subject", options: o(cat.subjects) }, { type: "select", name: "type", label: "Type", options: ["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"].map((v) => ({ value: v, label: v.toLowerCase() })) }, { type: "select", name: "status", label: "Status", options: [{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft" }, { value: "ARCHIVED", label: "Archived" }] }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Resource</Th><Th>Platform</Th><Th>Subject</Th><Th>Audience</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ r, subject, className, department }) => (
                <tr key={r.id} id={r.id} className="align-top">
                  <Td className="max-w-sm"><p className="font-semibold text-navy-800">{r.title} {r.isRecommended && <Badge tone="gold">Recommended</Badge>}</p><p className="line-clamp-2 text-xs text-muted">{r.description}</p></Td>
                  <Td><Badge tone="blue">{r.resourceType.toLowerCase()}</Badge><p className="mt-1 text-xs text-muted">{r.platform}</p></Td>
                  <Td className="text-sm">{subject ?? "Any"}</Td>
                  <Td className="text-xs">{className ?? "All"} · {department ?? "All"}</Td>
                  <Td><StatusBadge status={r.status} /></Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <a href={r.url ?? `/api/v1/assets/${r.assetId}`} target="_blank" rel="noopener noreferrer" className={buttonClass("ghost", "sm")}><ExternalLink className="size-4" /></a>
                      <details className="relative text-left">
                        <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                        <div className="absolute right-0 z-20 mt-2 w-[min(52rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift">
                          <ResourceForm r={r} subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} />
                        </div>
                      </details>
                      {r.status !== "PUBLISHED" ? <ActionButton run={resourceStatusAction.bind(null, r.id, "PUBLISHED")}>Publish</ActionButton> : <ActionButton run={resourceStatusAction.bind(null, r.id, "DRAFT")}>Unpublish</ActionButton>}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No resources" />
        )}
      </Card>
    </div>
  );
}
