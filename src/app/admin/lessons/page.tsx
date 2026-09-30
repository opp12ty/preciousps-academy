import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getCatalog, listLessonsAdmin } from "@/server/services/curriculum";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { buttonClass, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Lessons" };

export default async function LessonsAdmin({ searchParams }: PageProps<"/admin/lessons">) {
  const s = await requireStaffPage("curriculum.manage");
  const sp = spRecord(await searchParams);
  const [cat, rows] = await Promise.all([getCatalog(s.user.schoolId), listLessonsAdmin(s.user.schoolId, { subjectId: sp.subjectId, status: sp.status })]);
  return (
    <>
      <PageHeader eyebrow="Study Centre" title="Lessons" description="Notes, examples, videos, audio, documents and auto-marked classwork." actions={<Link href="/admin/lessons/new" className={buttonClass("primary")}><Plus className="size-4" /> New lesson</Link>} />
      <FilterBar action="/admin/lessons" values={sp} filters={[{ type: "select", name: "subjectId", label: "Subject", options: cat.subjects.map((x) => ({ value: x.id, label: x.name })) }, { type: "select", name: "status", label: "Status", options: [{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft" }, { value: "ARCHIVED", label: "Archived" }] }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Lesson</Th><Th>Subject · Topic</Th><Th>Classwork</Th><Th>Completions</Th><Th>Status</Th><Th /></tr></thead>
            <tbody>
              {rows.map(({ l, subject, topic, classwork, completions }) => (
                <tr key={l.id}>
                  <Td className="font-semibold text-navy-800">{l.title}<p className="text-xs font-normal text-muted">v{l.version} · {l.estimatedMinutes} min{l.isLocked ? " · locked" : ""}</p></Td>
                  <Td className="text-sm">{subject} · <span className="text-muted">{topic}</span></Td>
                  <Td>{classwork} questions</Td>
                  <Td>{completions}</Td>
                  <Td><StatusBadge status={l.status} /></Td>
                  <Td><Link href={`/admin/lessons/${l.id}`} className="text-sm font-semibold text-royal-600 hover:underline">Edit</Link></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="No lessons yet" action={<Link href="/admin/lessons/new" className={buttonClass("primary")}>Create a lesson</Link>} />
        )}
      </Card>
    </>
  );
}
