import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { toPublicError } from "@/server/errors";
import { certificateFor } from "@/server/services/records";
import { CertificateView } from "@/components/certificate";
import { Alert } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Certificate" };

export default async function CertificatePage({ params }: PageProps<"/student/certificate/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let c;
  try {
    c = await certificateFor({ id: s.user.id, schoolId: s.user.schoolId, staff: false }, id);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning" title="No certificate for this result">{p.message}</Alert>;
  }
  const brand = await getBrand();
  return (
    <div className="space-y-4">
      <Link href={`/student/results/${id}`} className="no-print inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Back to the result</Link>
      <CertificateView brand={brand} c={{ kind: "Certificate of Achievement", name: c.name, line: `for scoring ${c.percentage}% (Grade ${c.grade}) in ${c.exam}.`, detail: [c.subject, c.className, c.studentNumber ? `Student ID ${c.studentNumber}` : null].filter(Boolean).join(" · "), number: c.number, date: c.date, verificationCode: c.verificationCode, seal: `Grade ${c.grade}` }} />
    </div>
  );
}
