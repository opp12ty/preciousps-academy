"use client";

import { KeyRound, UserPlus } from "lucide-react";
import { useState } from "react";
import { createAdminAction, setAdminRolesAction, staffTempPasswordAction } from "@/app/admin/actions";
import { ActionForm, PasswordField, SelectField, SubmitButton, TextField } from "../ui/form";
import { ConfirmAction, Modal, RevealOnce } from "../ui/interactive";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";
import { useRouter } from "next/navigation";

export function CreateAdminForm({ roles }: { roles: { id: string; name: string; description: string | null }[] }) {
  const [temp, setTemp] = useState<string | null>(null);
  return (
    <div className="space-y-4">
      <ActionForm action={createAdminAction} resetOnSuccess onSuccess={(r) => r.ok && setTemp((r.data as { temporaryPassword: string | null }).temporaryPassword)} successMessage="Administrator created." className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TextField label="First name" name="firstName" required />
          <TextField label="Last name" name="lastName" required />
          <TextField label="Email" name="email" type="email" required />
          <TextField label="Phone" name="phone" type="tel" />
          <SelectField label="Account type" name="userType" options={[{ value: "ADMIN", label: "Administrator" }, { value: "TEACHER", label: "Teacher" }]} />
          <div className="sm:col-span-2 lg:col-span-3">
            <PasswordField label="Initial password (optional)" name="password" autoComplete="new-password" required={false} showStrength hint="Leave blank to generate a secure temporary password. Either way, they must change it at first sign-in." />
          </div>
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-navy-800">Roles</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {roles.map((r) => (
              <label key={r.id} className="flex items-start gap-3 rounded-xl border border-line p-3 text-sm">
                <input type="checkbox" name="roleIds" value={r.id} className="mt-0.5 size-4 accent-royal-600" />
                <span><span className="font-semibold text-navy-800">{r.name}</span><span className="block text-xs text-muted">{r.description}</span></span>
              </label>
            ))}
          </div>
        </fieldset>
        <SubmitButton><UserPlus className="size-4" /> Create administrator</SubmitButton>
      </ActionForm>
      {temp && <RevealOnce title="Temporary password (shown once)" values={[temp]} note="Share it securely. The administrator must change it at first sign-in. It cannot be displayed again." />}
    </div>
  );
}

export function EditRolesButton({ userId, roles, current }: { userId: string; roles: { id: string; name: string }[]; current: string[] }) {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(current);
  const [pending, setPending] = useState(false);
  const toast = useToast();
  const router = useRouter();
  return (
    <>
      <button type="button" className={buttonClass("secondary", "sm")} onClick={() => setOpen(true)}>Roles</button>
      <Modal open={open} onClose={() => setOpen(false)} title="Assign roles">
        <div className="space-y-2">
          {roles.map((r) => (
            <label key={r.id} className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm">
              <input type="checkbox" className="size-4 accent-royal-600" checked={sel.includes(r.id)} onChange={() => setSel((x) => (x.includes(r.id) ? x.filter((y) => y !== r.id) : [...x, r.id]))} />
              {r.name}
            </label>
          ))}
          <div className="flex justify-end gap-2 pt-2">
            <button className={buttonClass("secondary")} onClick={() => setOpen(false)}>Cancel</button>
            <button
              className={buttonClass("primary")}
              disabled={pending}
              onClick={async () => {
                setPending(true);
                const r = await setAdminRolesAction(userId, sel);
                setPending(false);
                if (r.ok) { toast("success", "Roles updated — effective immediately."); setOpen(false); router.refresh(); } else toast("error", r.error);
              }}
            >
              Save roles
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function StaffTempPassword({ userId }: { userId: string }) {
  const [temp, setTemp] = useState<string | null>(null);
  return (
    <>
      <ConfirmAction
        label="Reset password"
        icon={<KeyRound className="size-4" />}
        title="Generate a temporary password?"
        description="All their sessions are signed out; they must set a new password at next sign-in."
        reason
        confirmVariant="primary"
        run={async ({ reason }) => {
          const r = await staffTempPasswordAction(userId, reason);
          if (r.ok) setTemp((r.data as { temporaryPassword: string }).temporaryPassword);
          return r;
        }}
      />
      {temp && <RevealOnce title="Temporary password (shown once)" values={[temp]} />}
    </>
  );
}
