import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireStaffPage } from "@/server/http";
import { getImport, type ImportReport } from "@/server/services/imports";
import { toPublicError } from "@/server/errors";
import { ImportPreview } from "@/components/admin/import-preview";
import { Alert, Card, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Import preview" };

export default async function ImportPreviewPage({ params }: PageProps<"/admin/imports/[id]">) {
  const s = await requireStaffPage("questions.import");
  const { id } = await params;
  let imp;
  try {
    imp = await getImport(s.actor, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const report = imp.report as ImportReport;
  const committed = imp.status === "COMMITTED";
  return (
    <div className="space-y-5">
      <PageHeader breadcrumbs={[{ href: "/admin/imports", label: "Imports" }, { label: imp.fileName }]} title={imp.fileName} description={`${imp.fileType.toUpperCase()} · ${(imp.fileSize / 1024).toFixed(0)} KB`} actions={<StatusBadge status={committed ? "COMPLETED" : imp.status === "RESOURCE" ? "DRAFT" : "PENDING_REVIEW"} />} />
      {committed && <Alert tone="success" title="Import committed">{imp.importedItems} question(s) were imported into PENDING_REVIEW.</Alert>}
      {report.notices.map((n) => (
        <Alert key={n} tone="info">{n}</Alert>
      ))}
      <Card className="p-5">
        <ImportPreview importId={imp.id} items={report.items} committed={committed} resource={report.mode === "RESOURCE" ? report.resource : undefined} />
      </Card>
    </div>
  );
}
