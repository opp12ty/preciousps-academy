import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getSetting } from "@/server/settings";
import { reportCard } from "@/server/services/records";
import { isLinked } from "@/server/services/schedules";
import { ReportCardView } from "@/components/report-card";
import { downloadAccess } from "@/server/services/access";

export const metadata: Metadata = { title: "Report Card" };

export default async function ChildReportCard({ params, searchParams }: PageProps<"/parent/child/[id]/report-card">) {
  const s = await requireParentPage();
  const { id } = await params;
  const sp = await searchParams;
  // Only a confirmed parent of this child, and only while the school shows results to parents.
  if (!/^[0-9a-f-]{36}$/i.test(id) || !(await isLinked(s.user.id, id)) || !(await getSetting(s.user.schoolId, "parents")).showResults) notFound();
  const term = typeof sp.term === "string" && /^[0-2]$/.test(sp.term) ? Number(sp.term) : undefined;
  const [card, brand, dl] = await Promise.all([reportCard(s.user.schoolId, id, term), getBrand(), downloadAccess(s.user, "reportCards")]);
  return (
    <div className="space-y-4">
      <Link href={`/parent/child/${id}`} className="no-print inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Back to {card.student.name}</Link>
      <ReportCardView card={card} brand={brand} download={dl} base={`/parent/child/${id}/report-card`} />
    </div>
  );
}
