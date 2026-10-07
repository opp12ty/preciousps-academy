"use server";

import { action, type ActionResult } from "@/server/http";
import { activateCode } from "@/server/services/access";
import { changePassword } from "@/server/services/auth";
import { revokeOtherOwnSessions, revokeOwnSession, updateOwnProfile } from "@/server/services/people";
import { createParentLink, revokeParentLink } from "@/server/services/engagement";
import { markRead, setPreference } from "@/server/services/notifications";
import { revalidatePath } from "next/cache";
import { reportConnection, respondToLinkRequest, revokeLink } from "@/server/services/guardians";
import { respondToSchedule } from "@/server/services/schedules";
import { requestPromotion } from "@/server/services/promotions";
import { submitAppeal } from "@/server/services/appeals";

export async function activateCodeAction(_: ActionResult | null, form: FormData) {
  return action({ role: "student" }, async (actor, ctx) => {
    const p = await activateCode(actor, String(form.get("code") ?? ""), ctx);
    return { expiresAt: p.currentExpiresAt.toISOString(), days: p.durationDays };
  }, "Access activated. Welcome aboard!");
}

export async function submitAppealAction(resultId: string, _: ActionResult | null, form: FormData) {
  return action({ role: "student" }, async (actor, ctx) => {
    await submitAppeal(actor, resultId, { questions: String(form.get("questions") ?? ""), reason: String(form.get("reason") ?? "") }, ctx);
    revalidatePath(`/student/results/${resultId}`);
  }, "Appeal sent. The examination office will reply here and in your notifications.");
}

export async function changePasswordAction(_: ActionResult | null, form: FormData) {
  return action({ role: "any", allowLocked: true }, async (actor, ctx, s) => {
    await changePassword(actor, { currentPassword: form.get("currentPassword"), newPassword: form.get("newPassword"), confirmPassword: form.get("confirmPassword") }, s.sessionId, ctx);
  }, "Password changed. Other devices have been signed out.");
}

export async function updateProfileAction(_: ActionResult | null, form: FormData) {
  return action({ role: "any", allowLocked: true }, async (actor, ctx) => {
    await updateOwnProfile(actor, { phone: form.get("phone"), middleName: form.get("middleName") ?? undefined, state: form.get("state") ?? undefined, schoolName: form.get("schoolName") ?? undefined, locale: form.get("locale") || undefined, avatarAssetId: form.get("avatarAssetId") || undefined }, ctx);
  }, "Profile updated.");
}

export async function revokeSessionAction(sessionId: string) {
  return action({ role: "any", allowLocked: true }, async (actor, ctx, s) => {
    if (sessionId === s.sessionId) throw new Error("Use Logout to end your current session.");
    await revokeOwnSession(actor, sessionId, ctx);
  }, "Session signed out.");
}

export async function revokeOtherSessionsAction() {
  return action({ role: "any", allowLocked: true }, async (actor, ctx, s) => {
    const count = await revokeOtherOwnSessions(actor, s.sessionId, ctx);
    return { count };
  }, "All other devices have been signed out.");
}

export async function setPreferenceAction(category: string, channel: "inApp" | "email", value: boolean) {
  return action({ role: "any", allowLocked: true }, async (actor) => setPreference(actor.id, category, channel, value), "Preference saved.");
}

export async function markReadAction(id: string) {
  return action({ role: "any", allowLocked: true }, async (actor) => markRead(actor.id, id === "all" ? "all" : id, actor.schoolId));
}

/* -------------------------------------------------------- parent connections */

export async function linkRespondAction(requestId: string, accept: boolean) {
  return action({ role: "student" }, async (actor, ctx) => {
    const r = await respondToLinkRequest(actor, requestId, accept, ctx);
    revalidatePath("/student", "layout");
    return r;
  }, accept ? "You accepted the request." : "You rejected the request. Nothing was shared.");
}
export async function linkRemoveAction(parentUserId: string) {
  return action({ role: "student" }, async (actor, ctx) => {
    await revokeLink(actor, parentUserId, actor.id, "Removed by the student", ctx);
    revalidatePath("/student/connections");
  }, "Connection removed.");
}
export async function linkReportAction(parentUserId: string) {
  return action({ role: "student" }, async (actor, ctx) => reportConnection(actor, parentUserId, "Reported from Parent Connections", ctx), "The school has been told. A member of staff will look into it.");
}
export async function scheduleRespondAction(id: string, change: "ACKNOWLEDGE" | "COMPLETE") {
  return action({ role: "student" }, async (actor, ctx) => {
    await respondToSchedule(actor, id, change, ctx);
    revalidatePath("/student/timetable");
  }, change === "COMPLETE" ? "Marked as done." : "Noted.");
}

export async function promotionRequestAction(_: ActionResult | null, form: FormData) {
  return action({ role: "student" }, async (actor, ctx) => {
    const r = await requestPromotion(actor, { departmentId: String(form.get("departmentId") ?? "") || null }, ctx);
    revalidatePath("/student", "layout");
    return r;
  }, "Done.");
}

export async function createParentLinkAction(label: string, days: number) {
  return action({ role: "student" }, async (actor, ctx) => createParentLink(actor, { label, days }, ctx));
}

export async function revokeParentLinkAction(id: string) {
  return action({ role: "student" }, async (actor, ctx) => {
    await revokeParentLink(actor, id, ctx);
  });
}
