import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileSpreadsheet, FileText, Presentation, FileType2 } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listImports } from "@/server/services/imports";
import { getCatalog } from "@/server/services/curriculum";
import { getSetting } from "@/server/settings";
import { ImportUpload } from "@/components/admin/import-upload";
import { buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Question Imports" };

export default async function ImportsPage() {
  const s = await requireStaffPage("questions.import");
  const [cat, cal, list] = await Promise.all([getCatalog(s.user.schoolId), getSetting(s.user.schoolId, "academicCalendar"), listImports(s.user.schoolId)]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <div className="space-y-6">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- file download from an API route, not a page */}
      <PageHeader eyebrow="Question bank" title="Import questions" description="Upload, preview, correct and import. Everything imported enters PENDING_REVIEW." actions={<a href="/api/v1/admin/import-template" className={buttonClass("secondary")}><Download className="size-4" /> Excel template</a>} />
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { icon: FileText, t: "Word", d: "Number each question, letter each option, and put ★ immediately before the correct option: “★ B. Abuja”." },
          { icon: FileSpreadsheet, t: "Excel", d: "Use the template columns. Every row is validated before import; errors are listed by row." },
          { icon: Presentation, t: "PowerPoint", d: "Structured question slides are extracted; other decks become Study Centre resources." },
          { icon: FileType2, t: "PDF", d: "Text is extracted automatically. Scanned PDFs are detected and flagged for OCR." },
        ].map((x) => (
          <Card key={x.t} className="p-4">
            <x.icon className="size-6 text-royal-600" aria-hidden />
            <p className="mt-2 font-bold text-navy-800">{x.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{x.d}</p>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader title="Upload a file" />
        <div className="p-5">
          <ImportUpload subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} years={cal.years} />
        </div>
      </Card>
      <Card>
        <CardHeader title="Word format example" />
        <pre className="overflow-x-auto px-5 py-4 text-sm leading-relaxed text-navy-800">{`1. What is the capital of Nigeria?
A. Lagos
★ B. Abuja
C. Kano
D. Ibadan
Explanation: Abuja became the capital in 1991.
Topic: Nigerian geography
Difficulty: Easy`}</pre>
        <p className="border-t border-line px-5 py-3 text-xs text-muted">More than one ★ → the question is rejected. No ★ → an error is shown; the correct answer is never guessed.</p>
      </Card>
      <Card>
        <CardHeader title="Recent imports" />
        {list.length ? (
          <Table>
            <thead><tr><Th>File</Th><Th>Type</Th><Th>Status</Th><Th>Items</Th><Th>Valid</Th><Th>Imported</Th><Th>Date</Th><Th /></tr></thead>
            <tbody>
              {list.map((i) => (
                <tr key={i.id}>
                  <Td className="font-semibold">{i.fileName}</Td>
                  <Td className="uppercase">{i.fileType}</Td>
                  <Td><StatusBadge status={i.status === "PREVIEW" ? "DRAFT" : i.status === "COMMITTED" ? "COMPLETED" : i.status} /></Td>
                  <Td>{i.totalItems}</Td>
                  <Td>{i.validItems}</Td>
                  <Td>{i.importedItems}</Td>
                  <Td className="text-xs text-muted">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(i.createdAt)}</Td>
                  <Td><Link href={`/admin/imports/${i.id}`} className="text-sm font-semibold text-royal-600 hover:underline">{i.status === "PREVIEW" || i.status === "RESOURCE" ? "Review" : "Report"}</Link></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No imports yet" />
        )}
      </Card>
    </div>
  );
}
