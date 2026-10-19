import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { toPublicError } from "@/server/errors";
import { reportCard } from "@/server/services/records";
import { ReportCardView } from "@/components/report-card";

export const metadata: Metadata = { title: "Report Card" };

export default async function AdminReportCard({ params, searchParams }: PageProps<"/admin/students/[id]/report-card">) {
  const s = await requireStaffPage("results.view");
  const { id } = await params;
  const sp = await searchParams;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();
  const term = typeof sp.term === "string" && /^[0-2]$/.test(sp.term) ? Number(sp.term) : undefined;
  let card;
  try {
    card = await reportCard(s.user.schoolId, id, term);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const brand = await getBrand();
  return (
    <div className="space-y-4">
      <Link href={`/admin/students/${id}`} className="no-print inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Back to the student</Link>
      <ReportCardView card={card} brand={brand} base={`/admin/students/${id}/report-card`} />
    </div>
  );
}
