import type { Metadata } from "next";
import { eq } from "drizzle-orm";
import { requireStudentPage } from "@/server/http";
import { getDb } from "@/server/db";
import { classes, departments, students, users } from "@/server/db/schema";
import { getAccessState } from "@/server/services/access";
import { learningSummary } from "@/server/services/study";
import { studentPerformance } from "@/server/services/analytics";
import { ProfileForm } from "@/components/account";
import { Card, CardHeader, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Profile" };

export default async function ProfilePage() {
  const s = await requireStudentPage();
  const [row] = await getDb()
    .select({ u: users, st: students, cls: classes.name, dep: departments.name })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(eq(users.id, s.user.id));
  const [access, learning, perf] = await Promise.all([getAccessState(s.user.id), learningSummary(s.user.id), studentPerformance(s.user.id)]);
  const fields: [string, string | null | undefined][] = [
    ["Full name", [row.u.firstName, row.u.middleName, row.u.lastName].filter(Boolean).join(" ")],
    ["Email", row.u.email],
    ["Phone", row.u.phone],
    ["Student ID", row.st.studentNumber],
    ["Class", row.cls],
    ["Department", row.dep],
    ["School", row.st.schoolName],
    ["Username", row.st.username],
  ];
  return (
    <div className="space-y-6">
      <PageHeader title="My profile" description="Your class, department and Student ID are managed by the school. Contact the Super Admin to change them." />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <CardHeader title="Account details" />
          <dl className="divide-y divide-line">
            {fields.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[8rem_1fr] gap-3 px-5 py-3 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="font-semibold text-navy-800">{v || "—"}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[8rem_1fr] gap-3 px-5 py-3 text-sm">
              <dt className="text-muted">Access</dt>
              <dd><StatusBadge status={access.status === "NONE" ? "No code" : access.status} /></dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-3 px-5 py-3 text-sm">
              <dt className="text-muted">Progress</dt>
              <dd className="font-semibold text-navy-800">
                {learning.completed} lessons · {perf.overall.exams} exams · avg {perf.overall.avg ?? "—"}%
              </dd>
            </div>
          </dl>
        </Card>
        <Card>
          <CardHeader title="Edit profile" />
          <div className="p-5">
            <ProfileForm initial={{ phone: row.u.phone ?? "", middleName: row.u.middleName ?? "", state: row.st.state ?? "", schoolName: row.st.schoolName ?? "", locale: row.u.locale, avatarAssetId: row.u.avatarAssetId }} />
          </div>
        </Card>
      </div>
    </div>
  );
}
