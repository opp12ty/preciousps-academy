import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { featureWithheld } from "@/server/services/access";
import { reportCard } from "@/server/services/records";
import { FEATURE_DENIED } from "@/core/features";
import { ReportCardView } from "@/components/report-card";
import { Alert, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Report Card" };

export default async function StudentReportCard({ searchParams }: PageProps<"/student/report-card">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  if (await featureWithheld(s.user.id, "RESULTS")) {
    return (
      <div className="space-y-6">
        <PageHeader eyebrow="Records" title="Report card" />
        <Alert tone="warning">{FEATURE_DENIED}</Alert>
      </div>
    );
  }
  const term = typeof sp.term === "string" && /^[0-2]$/.test(sp.term) ? Number(sp.term) : undefined;
  const [card, brand] = await Promise.all([reportCard(s.user.schoolId, s.user.id, term), getBrand()]);
  return <ReportCardView card={card} brand={brand} base="/student/report-card" note="Your report card is worked out from your released results and submitted assignments. A later term's card includes the terms before it." />;
}
