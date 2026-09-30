import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { studentProfileAdmin } from "@/server/services/people";
import { getCatalog } from "@/server/services/curriculum";
import { getSetting } from "@/server/settings";
import { toPublicError } from "@/server/errors";
import { updateStudentAction } from "../../actions";
import { AdjustAccessButton, AssignAccessButton, StudentSecurityControls } from "@/components/admin/student-controls";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextField } from "@/components/ui/form";
import { Badge, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Student profile" };
const fmt = (d: Date | string | null | undefined) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(d)) : "—");

export default async function StudentDetail({ params }: PageProps<"/admin/students/[id]">) {
  const s = await requireStaffPage("students.view");
  const { id } = await params;
  let p;
  try {
    p = await studentProfileAdmin(s.actor, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const [cat, codesCfg] = await Promise.all([getCatalog(s.user.schoolId), getSetting(s.user.schoolId, "accessCodes")]);
  const a = s.actor;
  const canManage = can(a, "students.manage");
  const canCodes = can(a, "codes.manage");
  return (
    <div className="space-y-6">
      <PageHeader
        breadcrumbs={[{ href: "/admin/students", label: "Students" }, { label: `${p.firstName} ${p.lastName}` }]}
        title={`${p.firstName} ${p.middleName ? `${p.middleName} ` : ""}${p.lastName}`}
        description={`${p.email} · ${p.student.studentNumber} · registered ${fmt(p.createdAt)}`}
        actions={
          <>
            <StatusBadge status={p.status} />
            {p.mustChangePassword && <Badge tone="amber">Password change required</Badge>}
            {p.lockedUntil && new Date(p.lockedUntil) > new Date() && <Badge tone="red">Locked</Badge>}
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4"><p className="text-xs uppercase tracking-wide text-muted">Access</p><p className="mt-1"><StatusBadge status={p.access.status === "NONE" ? "No code" : p.access.status} /></p><p className="mt-1 text-xs text-muted">Expires {fmt(p.access.expiresAt)}</p></Card>
        <Card className="p-4"><p className="text-xs uppercase tracking-wide text-muted">Examinations</p><p className="mt-1 text-2xl font-extrabold text-navy-800">{p.results.length}</p></Card>
        <Card className="p-4"><p className="text-xs uppercase tracking-wide text-muted">Lessons completed</p><p className="mt-1 text-2xl font-extrabold text-navy-800">{p.learning.completed}</p></Card>
        <Card className="p-4"><p className="text-xs uppercase tracking-wide text-muted">Last login</p><p className="mt-1 text-sm font-bold text-navy-800">{fmt(p.lastLoginAt)}</p><p className="text-xs text-muted">{p.failedLoginCount} recent failed sign-in(s)</p></Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader title="Registration details" description="Everything except the password, which is never retrievable." />
          <div className="p-5">
            <ActionForm action={updateStudentAction.bind(null, p.id)} className="grid gap-4 sm:grid-cols-2">
              <TextField label="First name" name="firstName" defaultValue={p.firstName} required readOnly={!canManage} />
              <TextField label="Middle name" name="middleName" defaultValue={p.middleName ?? ""} readOnly={!canManage} />
              <TextField label="Last name" name="lastName" defaultValue={p.lastName} required readOnly={!canManage} />
              <TextField label="Email" name="email" type="email" defaultValue={p.email} required readOnly={!canManage} />
              <TextField label="Phone" name="phone" defaultValue={p.phone ?? ""} readOnly={!canManage} />
              <TextField label="Student ID" name="studentNumber" defaultValue={p.student.studentNumber} required readOnly={!canManage} />
              <SelectField label="Class" name="classId" defaultValue={p.student.classId ?? ""} placeholder="—" options={cat.classes.map((c) => ({ value: c.id, label: c.name }))} disabled={!canManage} />
              <SelectField label="Department" name="departmentId" defaultValue={p.student.departmentId ?? ""} placeholder="—" options={cat.departments.map((d) => ({ value: d.id, label: d.name }))} disabled={!canManage} />
              <TextField label="School" name="schoolName" defaultValue={p.student.schoolName ?? ""} readOnly={!canManage} />
              <TextField label="State" name="state" defaultValue={p.student.state ?? ""} readOnly={!canManage} />
              <TextField label="Country" name="country" defaultValue={p.student.country ?? ""} readOnly={!canManage} />
              <div className="text-sm text-muted">
                DOB: {p.student.dateOfBirth ?? "—"} · Gender: {p.student.gender ?? "—"} · Username: {p.student.username ?? "—"}
              </div>
              {a.userType === "SUPER_ADMIN" && (
                <div className="sm:col-span-2">
                  <CheckboxField name="allowConcurrentCodes" label="Allow more than one active access code (exception)" defaultChecked={p.student.allowConcurrentCodes} />
                </div>
              )}
              {canManage && (
                <div className="sm:col-span-2">
                  <SubmitButton>Save changes</SubmitButton>
                </div>
              )}
            </ActionForm>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Account security" />
            <div className="p-5">
              <StudentSecurityControls userId={p.id} status={p.status} canSecurity={can(a, "students.security")} canManage={canManage} isSuper={a.userType === "SUPER_ADMIN"} />
            </div>
          </Card>
          <Card>
            <CardHeader title="Access & codes" action={can(a, "codes.generate") && p.access.status !== "ACTIVE" && <AssignAccessButton userId={p.id} defaultDays={codesCfg.defaultDays} />} />
            {p.accessHistory.length ? (
              <ul className="divide-y divide-line">
                {p.accessHistory.map((h) => (
                  <li key={h.id} className="px-5 py-4 text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs">Code …{h.codeSuffix}</span>
                      <StatusBadge status={h.effective} />
                      <span className="text-xs text-muted">{h.durationDays} days</span>
                      <span className="ml-auto">{canCodes && <AdjustAccessButton periodId={h.id} />}</span>
                    </div>
                    <dl className="mt-2 grid grid-cols-3 gap-2 text-xs">
                      <div><dt className="text-muted">Activated</dt><dd className="font-semibold">{fmt(h.activatedAt)}</dd></div>
                      <div><dt className="text-muted">Original expiry</dt><dd className="font-semibold">{fmt(h.originalExpiresAt)}</dd></div>
                      <div><dt className="text-muted">Current expiry</dt><dd className="font-semibold">{fmt(h.currentExpiresAt)}</dd></div>
                    </dl>
                    {h.extensions.length > 0 && (
                      <ul className="mt-2 space-y-1 rounded-lg bg-surface p-2 text-xs">
                        {h.extensions.map((x) => (
                          <li key={x.id}>
                            <strong>{x.action}</strong> {x.deltaDays !== null && `(${x.deltaDays > 0 ? "+" : ""}${x.deltaDays}d)`} · {fmt(x.previousExpiresAt)} → {fmt(x.newExpiresAt)} · “{x.reason}” · {fmt(x.createdAt)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState title="No access codes yet" />
            )}
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader title="Examination history & results" />
        {p.results.length ? (
          <Table>
            <thead><tr><Th>Examination</Th><Th>Date</Th><Th>Attempt</Th><Th>Score</Th><Th>Grade</Th><Th>Status</Th><Th /></tr></thead>
            <tbody>
              {p.results.map((r) => (
                <tr key={r.id}>
                  <Td className="font-semibold">{r.examTitle}</Td>
                  <Td className="text-xs text-muted">{fmt(r.createdAt)}</Td>
                  <Td>{r.attemptNumber}</Td>
                  <Td className="tabular-nums">{r.percentage}%</Td>
                  <Td><Badge tone={r.passed ? "green" : "red"}>{r.grade}</Badge></Td>
                  <Td><StatusBadge status={r.isVoided ? "VOIDED" : r.releasedAt ? "PUBLISHED" : "PENDING_REVIEW"} /></Td>
                  <Td>{can(a, "results.view") && <Link className="text-sm font-semibold text-royal-600 hover:underline" href={`/admin/results/${r.id}`}>Review</Link>}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No examinations taken yet" />
        )}
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader title="Sessions & login history" />
          <ul className="max-h-80 divide-y divide-line overflow-y-auto">
            {p.sessions.map((x) => (
              <li key={x.id} className="px-5 py-3 text-xs">
                <p className="font-semibold text-navy-800">{fmt(x.createdAt)} · {x.ip ?? "unknown IP"}</p>
                <p className="truncate text-muted">{x.userAgent}</p>
                <p className="text-muted">{x.revokedAt ? `Ended (${x.revokedReason?.toLowerCase().replace(/_/g, " ")})` : new Date(x.expiresAt) > new Date() ? `Active · last seen ${fmt(x.lastSeenAt)}` : "Expired"}</p>
              </li>
            ))}
            {!p.sessions.length && <li className="px-5 py-4 text-sm text-muted">No sessions.</li>}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Security events & activity" />
          <ul className="max-h-80 divide-y divide-line overflow-y-auto">
            {p.securityEvents.map((e) => (
              <li key={e.id} className="flex items-center gap-2 px-5 py-2.5 text-xs">
                <StatusBadge status={e.severity} /> <span className="font-semibold">{e.type}</span> <span className="ml-auto text-muted">{fmt(e.createdAt)}</span>
              </li>
            ))}
            {p.activity.map((e, i) => (
              <li key={i} className="px-5 py-2.5 text-xs">
                <span className="font-semibold text-navy-800">{e.action}</span> {e.summary && <span className="text-muted">· {e.summary}</span>}
                <span className="block text-muted">{fmt(e.createdAt)} · {e.ip ?? ""}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <p className="text-xs text-muted">
        Learning: {p.learning.completed} lessons completed, {p.learning.inProgress} in progress, classwork average {p.learning.classworkAverage ?? "—"}%. Assignments: {p.assignments.n} submissions, average {p.assignments.avg ?? "—"}%.
      </p>
    </div>
  );
}
