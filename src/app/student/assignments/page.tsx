import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { listStudentAssignments } from "@/server/services/assignments";
import { AssignmentList } from "@/components/student/assignment-list";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Assignments" };

export default async function AssignmentsPage() {
  const s = await requireStudentPage();
  const rows = await listStudentAssignments(s.actor, "ASSIGNMENT");
  return (
    <>
      <PageHeader eyebrow="Homework" title="Assignments" description="Objective assignments are marked instantly. Check due dates and attempt limits." />
      <AssignmentList rows={rows} empty="Your teachers have not published any assignments for your class yet." />
    </>
  );
}
