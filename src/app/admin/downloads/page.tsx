import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Downloads Control" };

const MODES = [
  { value: "OPEN", label: "Open: everyone can download and print" },
  { value: "LOCKED", label: "Locked: read in the app only (contact Admin)" },
  { value: "CODE", label: "Only with an access code that includes Downloads" },
];

export default async function DownloadsControl() {
  const s = await requireStaffPage("resources.manage");
  const cfg = await getSetting(s.user.schoolId, "downloads");
  const fields: FieldSpec[] = [
    { key: "ebooks", label: "E-books (print / save as PDF)", type: "select", options: MODES },
    { key: "ebookFiles", label: "Uploaded e-book and study PDFs", type: "select", options: MODES },
    { key: "resultSlips", label: "Exam result slips", type: "select", options: MODES },
    { key: "reportCards", label: "Report cards", type: "select", options: MODES },
    { key: "contact", label: "Admin phone shown when a download is locked", type: "text" },
  ];
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Academics"
        title="Downloads control"
        description="Decide at any time what students and parents may download or print. Locked items can still be read in the app; the student is told to contact the Admin. Changes apply at once and are audited."
      />
      <Card>
        <CardHeader title="What can be downloaded" />
        <div className="p-5">
          <SettingsForm settingKey="downloads" initial={cfg} fields={fields} columns={1} />
        </div>
      </Card>
    </div>
  );
}
