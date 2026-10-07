import type { Metadata } from "next";
import Link from "next/link";
import { requireStaffPage } from "@/server/http";
import { can } from "@/core/permissions";
import { CENTRAL_SHEET_GUIDE } from "@/server/services/central";
import { CentralUpload } from "@/components/admin/central-upload";
import { Alert, Card, CardHeader, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Central Upload" };

export default async function CentralUploadPage() {
  const s = await requireStaffPage();
  const allowed = can(s.actor, "curriculum.manage") || can(s.actor, "learning.manage") || can(s.actor, "resources.manage");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Academics" title="Central upload" description="One Excel workbook for everything. Fill in the sheets you need, upload the file, and every row goes to the section it belongs to." />
      {!allowed ? (
        <Alert tone="warning">Your account does not have permission to upload content. Ask the Super Admin to give you a role that includes it.</Alert>
      ) : (
        <>
          <Card>
            <CardHeader title="Upload a workbook" description="Step 1: Upload & check — every row is checked and nothing is created. Step 2: Import everything that passed." />
            <div className="p-5">
              <CentralUpload templateHref="/api/v1/admin/central-template" note="The template lists every subject and class in your school, and its Scheme of Work sheet already has a row for each Primary subject, class and term. One file may hold many subjects. Keep each file under 4 MB; split a very large one into two." />
            </div>
          </Card>
          <Card>
            <CardHeader title="Where each sheet goes" description="A workbook may contain any of these sheets. Sheets you leave out or leave empty are ignored." />
            <Table>
              <thead><tr><Th>Sheet in the workbook</Th><Th>Goes to</Th></tr></thead>
              <tbody>
                {CENTRAL_SHEET_GUIDE.map((g) => (
                  <tr key={g.sheet}><Td className="font-semibold text-navy-800">{g.sheet}</Td><Td>{g.goes}</Td></tr>
                ))}
              </tbody>
            </Table>
          </Card>
          <Alert tone="info">
            <strong>Good to know.</strong> Questions arrive as Pending Review and lessons, exams and assignments as drafts, unless you tick “Approve and publish straight away”. Uploading the same file twice does not duplicate topics, questions, words or links. Files such as PDF, Word, PowerPoint and Excel study materials are still added under <Link href="/admin/materials" className="font-semibold underline">Study Materials</Link>, and single-subject packs under <Link href="/admin/content-packs" className="font-semibold underline">Content Packs</Link>, exactly as before.
          </Alert>
        </>
      )}
    </div>
  );
}
