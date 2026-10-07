import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ClipboardList, Download, FileQuestion, ListTree, MonitorCheck } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listPacks, type PackReport } from "@/server/services/content-packs";
import { PackUpload } from "@/components/admin/content-pack";
import { DIAGRAM_HELP } from "@/core/diagrams";
import { RichText } from "@/components/rich-text";
import { buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Content Packs" };

export default async function ContentPacksPage() {
  const s = await requireStaffPage("curriculum.manage");
  const list = await listPacks(s.user.schoolId);
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Academics"
        title="Content packs"
        description="Upload a complete subject in one workbook: scheme of work, lesson notes, question bank, examinations and assignments."
        // eslint-disable-next-line @next/next/no-html-link-for-pages -- file download from an API route
        actions={<a href="/api/v1/admin/content-pack-template" className={buttonClass("secondary")}><Download className="size-4" /> Blank template</a>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { icon: ListTree, t: "Scheme of work", d: "Topics and subtopics by class, term and week, with learning objectives." },
          { icon: BookOpen, t: "Lesson notes", d: "Notes and worked examples, created as drafts with auto-marked classwork." },
          { icon: FileQuestion, t: "Question bank", d: "Original questions with answers and explanations — enter Pending Review." },
          { icon: MonitorCheck, t: "Examinations", d: "Termly exams and mocks drawing at random from the pack's topics." },
          { icon: ClipboardList, t: "Assignments", d: "Homework spread across topics, created as drafts." },
        ].map((x) => (
          <Card key={x.t} className="p-4">
            <x.icon className="size-6 text-royal-600" aria-hidden />
            <p className="mt-2 font-bold text-navy-800">{x.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{x.d}</p>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader title="Upload a content pack" description="Steps: upload & check → import → review and approve questions → publish." />
        <div className="p-5">
          <PackUpload />
        </div>
      </Card>
      <Card>
        <CardHeader title="Content packs" />
        {list.length ? (
          <Table>
            <thead><tr><Th>File</Th><Th>Subject</Th><Th>Status</Th><Th>Items</Th><Th>Uploaded</Th><Th /></tr></thead>
            <tbody>
              {list.map((p) => {
                const r = p.report as PackReport;
                const stage = r.publishedAt ? "PUBLISHED" : p.status;
                return (
                  <tr key={p.id}>
                    <Td className="font-semibold text-navy-800">{p.fileName}</Td>
                    <Td>{r.subject?.name ?? "—"}</Td>
                    <Td><StatusBadge status={stage} /></Td>
                    <Td>{p.status === "COMMITTED" ? p.importedItems : p.totalItems}</Td>
                    <Td className="text-xs text-muted">{p.createdAt.toLocaleString("en-NG", { timeZone: "Africa/Lagos" })}</Td>
                    <Td><Link href={`/admin/content-packs/${p.id}`} className="font-semibold text-royal-600 hover:underline">Open</Link></Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<ListTree className="size-6" />} title="No content packs yet" description="Upload a subject pack to build its curriculum in one step." />
        )}
      </Card>
      <Card>
        <CardHeader title="Pictures and diagrams" description="Type any of these on a line of its own in lesson Notes, Worked Examples or a Question (in a pack workbook or in the editors) and it is drawn for the student. Add a caption after two bars: || caption." />
        <ul className="grid gap-4 p-5 md:grid-cols-2">
          {DIAGRAM_HELP.filter((d) => d.example.startsWith("[[diagram")).map((d) => (
            <li key={d.example} className="rounded-xl border border-line p-3">
              <code className="text-xs font-semibold text-navy-800">{d.example}</code>
              <p className="text-xs text-muted">{d.shows}</p>
              <RichText text={d.example} />
            </li>
          ))}
        </ul>
        <p className="px-5 pb-5 text-xs text-muted">Uploaded pictures: use the Add picture button in the lesson editor; it inserts a line such as [[image: … || caption]].</p>
      </Card>
    </div>
  );
}
