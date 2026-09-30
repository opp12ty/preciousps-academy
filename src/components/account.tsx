"use client";

import { Laptop, Loader2, Smartphone, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { changePasswordAction, revokeOtherSessionsAction, revokeSessionAction, updateProfileAction } from "@/app/student/actions";
import { ActionForm, NewPasswordPair, PasswordField, SelectField, SubmitButton, TextField } from "./ui/form";
import { ActionButton, ConfirmAction } from "./ui/interactive";
import { Badge, buttonClass } from "./ui/primitives";
import { useToast } from "./ui/toast";

export function ChangePasswordForm({ redirectTo }: { redirectTo?: string }) {
  return (
    <ActionForm action={changePasswordAction} className="max-w-md space-y-4" resetOnSuccess redirectTo={redirectTo}>
      <PasswordField label="Current password" name="currentPassword" autoComplete="current-password" />
      <NewPasswordPair name="newPassword" label="New password" />
      <SubmitButton>Change password</SubmitButton>
    </ActionForm>
  );
}

export function SessionsList({ sessions, currentId }: { sessions: { id: string; createdAt: string; lastSeenAt: string; ip: string | null; userAgent: string | null }[]; currentId: string }) {
  const others = sessions.filter((s) => s.id !== currentId).length;
  return (
    <>
      {others > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface px-5 py-3">
          <p className="text-sm text-muted">
            Signed in on {others} other device{others === 1 ? "" : "s"}.
          </p>
          <ConfirmAction
            label="Sign out all other devices"
            title="Sign out all other devices?"
            description="Every device except this one will be signed out immediately and will need your password (and two-factor code, if enabled) to sign in again."
            confirmLabel="Sign out other devices"
            run={() => revokeOtherSessionsAction()}
          />
        </div>
      )}
    <ul className="divide-y divide-line">
      {sessions.map((s) => {
        const mobile = /mobile|android|iphone/i.test(s.userAgent ?? "");
        return (
          <li key={s.id} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
            {mobile ? <Smartphone className="size-5 text-muted" aria-hidden /> : <Laptop className="size-5 text-muted" aria-hidden />}
            <div className="min-w-0 flex-1 text-sm">
              <p className="truncate font-semibold text-navy-800">{describeUa(s.userAgent)}</p>
              <p className="text-xs text-muted">
                {s.ip ?? "Unknown IP"} · last active {new Date(s.lastSeenAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })}
              </p>
            </div>
            {s.id === currentId ? <Badge tone="green">This device</Badge> : <ActionButton run={() => revokeSessionAction(s.id)}>Sign out</ActionButton>}
          </li>
        );
      })}
    </ul>
    </>
  );
}

function describeUa(ua: string | null) {
  if (!ua) return "Unknown device";
  const b = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : /Firefox\//.test(ua) ? "Firefox" : /Safari\//.test(ua) ? "Safari" : "Browser";
  const o = /Windows/.test(ua) ? "Windows" : /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /Mac OS/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "";
  return `${b}${o ? ` on ${o}` : ""}`;
}

export function ProfileForm({ initial }: { initial: { phone: string; middleName: string; state: string; schoolName: string; locale: string; avatarAssetId: string | null } }) {
  const [avatar, setAvatar] = useState(initial.avatarAssetId);
  const [uploading, setUploading] = useState(false);
  const toast = useToast();
  const router = useRouter();
  return (
    <ActionForm action={updateProfileAction} className="space-y-4">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {avatar ? <img src={`/api/v1/assets/${avatar}`} alt="Profile picture" className="size-16 rounded-2xl object-cover ring-1 ring-line" /> : <span className="grid size-16 place-items-center rounded-2xl bg-surface text-xs text-muted ring-1 ring-line">No photo</span>}
        <label className={buttonClass("secondary", "sm", "cursor-pointer")}>
          {uploading ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />} Upload photo
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="sr-only"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              setUploading(true);
              const fd = new FormData();
              fd.set("file", f);
              fd.set("kind", "AVATAR");
              const r = await fetch("/api/v1/assets", { method: "POST", body: fd }).then((x) => x.json());
              setUploading(false);
              if (r.ok) {
                setAvatar(r.data.id);
                toast("success", "Photo uploaded — save to apply.");
              } else toast("error", r.error.message);
            }}
          />
        </label>
        <input type="hidden" name="avatarAssetId" value={avatar ?? ""} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Phone number" name="phone" type="tel" defaultValue={initial.phone} required />
        <TextField label="Middle name" name="middleName" defaultValue={initial.middleName} />
        <TextField label="State" name="state" defaultValue={initial.state} />
        <TextField label="School" name="schoolName" defaultValue={initial.schoolName} />
        <SelectField label="Language" name="locale" defaultValue={initial.locale} options={[{ value: "en", label: "English" }, { value: "yo", label: "Yorùbá (coming soon)" }, { value: "ha", label: "Hausa (coming soon)" }, { value: "ig", label: "Igbo (coming soon)" }, { value: "fr", label: "Français (coming soon)" }]} />
      </div>
      <SubmitButton onClick={() => setTimeout(() => router.refresh(), 800)}>Save profile</SubmitButton>
    </ActionForm>
  );
}
