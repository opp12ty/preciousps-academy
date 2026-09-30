import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listAssignmentsAdmin } from "@/server/services/assignments";
import { AdminAssignmentTable } from "@/components/admin/assignment-list-admin";
import { buttonClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Classwork" };

export default async function ClassworkAdmin() {
  const s = await requireStaffPage("assignments.manage");
  const rows = await listAssignmentsAdmin(s.user.schoolId, "CLASSWORK");
  return (
    <>
      <PageHeader eyebrow="Assessment" title="Classwork" description="Teacher-set classwork. Lesson classwork is attached directly to lessons in the Study Centre." actions={<><Link href="/admin/lessons" className={buttonClass("secondary")}>Lesson classwork</Link><Link href="/admin/assignments/new?kind=CLASSWORK" className={buttonClass("primary")}><Plus className="size-4" /> New classwork</Link></>} />
      <AdminAssignmentTable rows={rows} />
    </>
  );
}
