import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listAssignmentsAdmin } from "@/server/services/assignments";
import { AdminAssignmentTable } from "@/components/admin/assignment-list-admin";
import { buttonClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Assignments" };

export default async function AssignmentsAdmin() {
  const s = await requireStaffPage("assignments.manage");
  const rows = await listAssignmentsAdmin(s.user.schoolId, "ASSIGNMENT");
  return (
    <>
      <PageHeader eyebrow="Assessment" title="Assignments" description="Objective homework by department, class, subject, topic or lesson — marked automatically." actions={<Link href="/admin/assignments/new" className={buttonClass("primary")}><Plus className="size-4" /> New assignment</Link>} />
      <AdminAssignmentTable rows={rows} />
    </>
  );
}
