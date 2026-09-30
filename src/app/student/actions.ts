"use server";

import { action, type ActionResult } from "@/server/http";
import { activateCode } from "@/server/services/access";
import { changePassword } from "@/server/services/auth";
import { revokeOtherOwnSessions, revokeOwnSession, updateOwnProfile } from "@/server/services/people";
import { markRead, setPreference } from "@/server/services/notifications";

export async function activateCodeAction(_: ActionResult | null, form: FormData) {
  return action({ role: "student" }, async (actor, ctx) => {
    const p = await activateCode(actor, String(form.get("code") ?? ""), ctx);
    return { expiresAt: p.currentExpiresAt.toISOString(), days: p.durationDays };
  }, "Access activated. Welcome aboard!");
}

export async function changePasswordAction(_: ActionResult | null, form: FormData) {
  return action({ role: "any" }, async (actor, ctx, s) => {
    await changePassword(actor, { currentPassword: form.get("currentPassword"), newPassword: form.get("newPassword"), confirmPassword: form.get("confirmPassword") }, s.sessionId, ctx);
  }, "Password changed. Other devices have been signed out.");
}

export async function updateProfileAction(_: ActionResult | null, form: FormData) {
  return action({ role: "any" }, async (actor, ctx) => {
    await updateOwnProfile(actor, { phone: form.get("phone"), middleName: form.get("middleName") ?? undefined, state: form.get("state") ?? undefined, schoolName: form.get("schoolName") ?? undefined, locale: form.get("locale") || undefined, avatarAssetId: form.get("avatarAssetId") || undefined }, ctx);
  }, "Profile updated.");
}

export async function revokeSessionAction(sessionId: string) {
  return action({ role: "any" }, async (actor, ctx, s) => {
    if (sessionId === s.sessionId) throw new Error("Use Logout to end your current session.");
    await revokeOwnSession(actor, sessionId, ctx);
  }, "Session signed out.");
}

export async function revokeOtherSessionsAction() {
  return action({ role: "any" }, async (actor, ctx, s) => {
    const count = await revokeOtherOwnSessions(actor, s.sessionId, ctx);
    return { count };
  }, "All other devices have been signed out.");
}

export async function setPreferenceAction(category: string, channel: "inApp" | "email", value: boolean) {
  return action({ role: "any" }, async (actor) => setPreference(actor.id, category, channel, value), "Preference saved.");
}

export async function markReadAction(id: string) {
  return action({ role: "any" }, async (actor) => markRead(actor.id, id === "all" ? "all" : id, actor.schoolId));
}
