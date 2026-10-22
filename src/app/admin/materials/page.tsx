import type { Metadata } from "next";
import { Download, FileText, Pencil } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { listResources, MATERIAL_TYPES, materialType } from "@/server/services/resources";
import { getCatalog } from "@/server/services/curriculum";
import { resourceStatusAction } from "../actions";
import { HOSTING_LIMIT_MB, MaterialForm } from "@/components/admin/material-form";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { ActionButton } from "@/components/ui/interactive";
import { Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Materials" };

const typeOptions = Object.entries(MATERIAL_TYPES).map(([value, t]) => ({ value, label: t.label }));

export default async function MaterialsAdmin({ searchParams }: PageProps<"/admin/materials">) {
  const s = await requireStaffPage("resources.manage");
  const sp = spRecord(await searchParams);
  const [cat, rows, uploads] = await Promise.all([
    getCatalog(s.user.schoolId),
    listResources(s.user.schoolId, { kind: "FILE", search: sp.search, subjectId: sp.subjectId, classId: sp.classId, fileType: sp.fileType, status: sp.status }),
    getSetting(s.user.schoolId, "uploads"),
  ]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  const opts = { subjects: o(cat.subjects), classes: o(cat.classes), departments: o(cat.departments), maxFileMb: uploads.maxFileMb };
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Academics"
        title="Study materials & e-book files"
        description={`Upload e-books and study materials (PDF, Word, PowerPoint, Excel or MP3) for any class from Primary 1 to SS3. Choose the class, the subject and where it goes in the e-book: the whole book, or a chapter of a term. Students see it in that chapter of their e-book and under Learn → Study Materials. Each file can be up to ${Math.min(uploads.maxFileMb, HOSTING_LIMIT_MB)} MB; split a big book into one file per term or chapter.`}
      />
      <Card>
        <CardHeader title="Add a material" />
        <div className="p-5">
          <MaterialForm {...opts} />
        </div>
      </Card>
      <FilterBar
        action="/admin/materials"
        values={sp}
        filters={[
          { type: "search", name: "search", placeholder: "Title or description" },
          { type: "select", name: "classId", label: "Class", options: opts.classes },
          { type: "select", name: "subjectId", label: "Subject", options: opts.subjects },
          { type: "select", name: "fileType", label: "File type", options: typeOptions },
          { type: "select", name: "status", label: "Status", options: [{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft" }, { value: "ARCHIVED", label: "Archived" }] },
        ]}
      />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Material</Th><Th>File</Th><Th>Subject</Th><Th>Audience</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ r, subject, topic, className, department, fileName, fileSize }) => {
                const type = materialType(fileName);
                return (
                  <tr key={r.id} id={r.id} className="align-top">
                    <Td className="max-w-sm"><p className="font-semibold text-navy-800">{r.title} {r.isRecommended && <Badge tone="gold">Recommended</Badge>}</p><p className="line-clamp-2 text-xs text-muted">{r.description}</p></Td>
                    <Td><Badge tone="blue">{type ? MATERIAL_TYPES[type].label : "File"}</Badge><p className="mt-1 max-w-48 truncate text-xs text-muted">{fileName} · {fileSize ? `${(fileSize / 1_048_576).toFixed(1)} MB` : ""}</p></Td>
                    <Td className="text-sm">{subject ?? "Any"}</Td>
                    <Td className="text-xs">{className ?? "All classes"} · {department ?? "All departments"}<p className="mt-1 text-muted">{topic ? `E-book chapter: ${topic}` : "Whole book"}</p></Td>
                    <Td><StatusBadge status={r.status} /></Td>
                    <Td className="text-right">
                      <div className="flex flex-wrap justify-end gap-1.5">
                        <a href={`/api/v1/assets/${r.assetId}`} target="_blank" rel="noopener noreferrer" aria-label="Open file" className={buttonClass("ghost", "sm")}><Download className="size-4" /></a>
                        <details className="relative text-left">
                          <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                          <div className="absolute right-0 z-20 mt-2 w-[min(52rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift">
                            <MaterialForm m={{ ...r, fileName }} {...opts} />
                          </div>
                        </details>
                        {r.status !== "PUBLISHED" ? <ActionButton run={resourceStatusAction.bind(null, r.id, "PUBLISHED")}>Publish</ActionButton> : <ActionButton run={resourceStatusAction.bind(null, r.id, "DRAFT")}>Unpublish</ActionButton>}
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<FileText className="size-6" />} title="No study materials yet" description="Upload the first one with the form above." />
        )}
      </Card>
    </div>
  );
}
