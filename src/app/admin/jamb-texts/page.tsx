import type { Metadata } from "next";
import { BookOpen, Download } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { JAMB_GENRES, listJambTexts } from "@/server/services/jamb-texts";
import { deleteJambTextAction, jambTextStatusAction } from "../actions";
import { JambTextForm } from "@/components/admin/fsc-import";
import { ActionButton } from "@/components/ui/interactive";
import { buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB Literature Texts" };

export default async function JambTextsAdmin() {
  const s = await requireStaffPage("exams.manage");
  const rows = await listJambTexts(s.user.schoolId);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Assessment · JAMB" title="JAMB literature texts" description="Add each prescribed literature book for the UTME as a PDF with its year. Students find them on the JAMB page, newest year first, and read them in the app; downloading follows Downloads Control. Upload only copies the school has the right to share." />
      <Card>
        <CardHeader title="Add a book" />
        <div className="p-5"><JambTextForm genres={Object.entries(JAMB_GENRES).map(([value, label]) => ({ value, label }))} /></div>
      </Card>
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Year</Th><Th>Book</Th><Th>Type</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ t, fileName, size }) => (
                <tr key={t.id}>
                  <Td className="font-bold">{t.year}</Td>
                  <Td><p className="font-semibold text-navy-800">{t.title}</p><p className="text-xs text-muted">{t.author ?? ""} · {fileName} · {(size / 1_048_576).toFixed(1)} MB</p></Td>
                  <Td className="text-sm">{JAMB_GENRES[t.genre as keyof typeof JAMB_GENRES] ?? t.genre}</Td>
                  <Td><StatusBadge status={t.status} /></Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <a href={`/api/v1/assets/${t.assetId}`} target="_blank" rel="noopener noreferrer" aria-label="Open PDF" className={buttonClass("ghost", "sm")}><Download className="size-4" /></a>
                      {t.status === "PUBLISHED" ? <ActionButton run={jambTextStatusAction.bind(null, t.id, "DRAFT")}>Hide</ActionButton> : <ActionButton run={jambTextStatusAction.bind(null, t.id, "PUBLISHED")}>Publish</ActionButton>}
                      <ActionButton run={deleteJambTextAction.bind(null, t.id)} variant="danger">Remove</ActionButton>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="No literature texts yet" description="Add the current JAMB books with the form above." />
        )}
      </Card>
    </div>
  );
}
