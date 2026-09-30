import type { Metadata } from "next";
import { Pencil, Plus } from "lucide-react";
import { PERMISSIONS, type Permission } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listRoles } from "@/server/services/people";
import { upsertRoleAction } from "../actions";
import { DeleteRoleButton } from "@/components/admin/action-wrappers";
import { ActionForm, SubmitButton, TextField } from "@/components/ui/form";
import { Badge, buttonClass, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Roles & Permissions" };

const GROUPS = Array.from(new Set(Object.values(PERMISSIONS).map((p) => p.group)));

function PermissionMatrix({ selected }: { selected: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {GROUPS.map((g) => (
        <fieldset key={g} className="rounded-xl border border-line p-3">
          <legend className="px-1 text-xs font-bold uppercase tracking-wide text-muted">{g}</legend>
          {(Object.keys(PERMISSIONS) as Permission[])
            .filter((k) => PERMISSIONS[k].group === g)
            .map((k) => (
              <label key={k} className="flex items-start gap-2 py-1 text-sm">
                <input type="checkbox" name="permissions" value={k} defaultChecked={selected.includes(k)} className="mt-0.5 size-4 accent-royal-600" />
                <span><span className="text-navy-800">{PERMISSIONS[k].description}</span> <code className="text-[0.65rem] text-muted">{k}</code></span>
              </label>
            ))}
        </fieldset>
      ))}
    </div>
  );
}

export default async function RolesPage() {
  const s = await requireStaffPage("super.roles");
  const roles = await listRoles(s.user.schoolId);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Roles & permissions" description="Granular, server-enforced RBAC. Super Admin capabilities (administrators, roles, settings, branding, content, audit, security, exports) can never be assigned to a role." />
      <Card>
        <CardHeader title="Create a role" />
        <div className="p-5">
          <ActionForm action={upsertRoleAction.bind(null, null)} resetOnSuccess className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2"><TextField label="Role name" name="name" required /><TextField label="Description" name="description" /></div>
            <PermissionMatrix selected={[]} />
            <SubmitButton><Plus className="size-4" /> Create role</SubmitButton>
          </ActionForm>
        </div>
      </Card>
      {roles.map((r) => (
        <Card key={r.id}>
          <CardHeader
            title={<span className="flex items-center gap-2">{r.name} {r.isSystem && <Badge tone="navy">System role</Badge>} <Badge>{r.members} member(s)</Badge></span>}
            description={r.description ?? undefined}
            action={!r.isSystem && <DeleteRoleButton roleId={r.id} />}
          />
          <div className="p-5">
            <div className="mb-3 flex flex-wrap gap-1.5">
              {r.permissions.map((p) => <Badge key={p} tone="blue">{p}</Badge>)}
              {!r.permissions.length && <span className="text-sm text-muted">No permissions.</span>}
            </div>
            <details>
              <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer w-fit")}><Pencil className="size-4" /> Edit permissions</summary>
              <ActionForm action={upsertRoleAction.bind(null, r.id)} className="mt-4 space-y-4" successMessage="Role updated — effective immediately.">
                <div className="grid gap-4 sm:grid-cols-2"><TextField label="Role name" name="name" required defaultValue={r.name} /><TextField label="Description" name="description" defaultValue={r.description ?? ""} /></div>
                <PermissionMatrix selected={r.permissions} />
                <SubmitButton size="sm">Save role</SubmitButton>
              </ActionForm>
            </details>
          </div>
        </Card>
      ))}
    </div>
  );
}
