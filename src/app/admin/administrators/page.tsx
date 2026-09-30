import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { listAdmins, listRoles } from "@/server/services/people";
import { CreateAdminForm, EditRolesButton, StaffTempPassword } from "@/components/admin/admin-forms";
import { StaffStatusButton } from "@/components/admin/action-wrappers";
import { Badge, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Administrators" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d) : "Never");

export default async function AdministratorsPage() {
  const s = await requireStaffPage("super.admins");
  const [admins, roles] = await Promise.all([listAdmins(s.actor), listRoles(s.user.schoolId)]);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Administrators" description="Create administrators and teachers, assign roles, suspend access and review activity. Administrators can never receive Super Admin privileges." />
      <Card>
        <CardHeader title="Add an administrator" />
        <div className="p-5"><CreateAdminForm roles={roles.map((r) => ({ id: r.id, name: r.name, description: r.description }))} /></div>
      </Card>
      <Card>
        <CardHeader title="Staff accounts" />
        <Table>
          <thead><tr><Th>Name</Th><Th>Type</Th><Th>Roles</Th><Th>2FA</Th><Th>Status</Th><Th>Last sign-in</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {admins.map((u) => (
              <tr key={u.id} id={u.id} className="align-top">
                <Td className="font-semibold">{u.firstName} {u.lastName}<p className="text-xs font-normal text-muted">{u.email}</p></Td>
                <Td><Badge tone={u.userType === "SUPER_ADMIN" ? "gold" : "navy"}>{u.userType.replace("_", " ").toLowerCase()}</Badge></Td>
                <Td className="text-xs">{u.userType === "SUPER_ADMIN" ? "All permissions" : u.roles.map((r) => r.name).join(", ") || "—"}</Td>
                <Td>{u.totpEnabled ? <Badge tone="green">On</Badge> : <Badge tone="amber">Off</Badge>}</Td>
                <Td><StatusBadge status={u.status} />{u.mustChangePassword && <p className="text-xs text-warn-600">must change password</p>}</Td>
                <Td className="text-xs text-muted">{fmt(u.lastLoginAt)}</Td>
                <Td className="text-right">
                  {u.userType !== "SUPER_ADMIN" && (
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <EditRolesButton userId={u.id} roles={roles.map((r) => ({ id: r.id, name: r.name }))} current={u.roles.map((r) => r.id)} />
                      <StaffTempPassword userId={u.id} />
                      <StaffStatusButton userId={u.id} status={u.status} />
                      <a href={`/admin/audit-logs?actorId=${u.id}`} className="inline-flex h-9 items-center px-2 text-sm font-semibold text-royal-600 hover:underline">Activity</a>
                    </div>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
