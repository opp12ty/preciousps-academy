import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { STUDENT_IMPORT_COLUMNS, STUDENT_IMPORT_MAX_ROWS } from "@/server/services/student-import";
import { StudentImport } from "@/components/admin/student-import";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Import Students" };
// Creating accounts hashes one password per student, so a batch may take longer than the default limit.
export const maxDuration = 60;

export default async function StudentImportPage() {
  await requireStaffPage("students.manage");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Import students" breadcrumbs={[{ href: "/admin/students", label: "Students" }, { label: "Import" }]} description="Register a whole class or the whole school from one Excel sheet, instead of each student filling the registration form." />
      <Card>
        <CardHeader title="Upload the student list" description="Step 1: Upload & check — every row is checked and nothing is created. Step 2: Create the accounts that passed." />
        <div className="p-5"><StudentImport /></div>
      </Card>
      <Card>
        <CardHeader title="How it works" />
        <ol className="list-decimal space-y-2 p-5 pl-9 text-sm text-navy-800">
          <li>Download the template. Its second sheet lists your school&apos;s own class and department codes.</li>
          <li>Fill one row per student. The columns are: {STUDENT_IMPORT_COLUMNS.join(", ")}. Only First Name, Last Name and Class are required.</li>
          <li>Upload the file. Rows with a mistake are listed with the reason; the rest are ready.</li>
          <li>Create the accounts, then download the login slips. Each student gets a temporary password and must choose a new one at first sign-in.</li>
          <li>Give the students access codes as usual, or use “Give access to a class” on the Access Codes page.</li>
        </ol>
      </Card>
      <Alert tone="info">
        <strong>Good to know.</strong> At most {STUDENT_IMPORT_MAX_ROWS} students per file. A student with no e-mail signs in with the Student ID. An e-mail, Student ID or username that is already registered is refused, and so is a student whose exact name is already in the same class, so uploading the same file twice does not create duplicates. If a student loses the temporary password, issue a new one from the student&apos;s profile.
      </Alert>
    </div>
  );
}
