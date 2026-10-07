"use server";

import { revalidatePath } from "next/cache";
import { action, type ActionResult } from "@/server/http";
import { activateCode } from "@/server/services/access";
import { requestChildLink, revokeLink } from "@/server/services/guardians";
import { createSchedule, deleteSchedule } from "@/server/services/schedules";

/** Activates a parent access code. Allowed while the portal is locked: this is how it is unlocked. */
export async function activateParentCodeAction(_: ActionResult | null, form: FormData) {
  return action({ role: "parent", allowLocked: true }, async (actor, ctx) => {
    const p = await activateCode(actor, String(form.get("code") ?? ""), ctx);
    revalidatePath("/parent", "layout");
    return { expiresAt: p.currentExpiresAt.toISOString(), days: p.durationDays };
  }, "Parent access activated.");
}

/** Sends a link request. It never links the accounts by itself. */
export async function addChildAction(_: ActionResult | null, form: FormData) {
  return action({ role: "parent" }, async (actor, ctx) => {
    const r = await requestChildLink(actor, String(form.get("code") ?? ""), String(form.get("relationship") ?? "") || undefined, ctx);
    revalidatePath("/parent");
    return r;
  }, "Link request sent. Academic information becomes available only after the connection is confirmed.");
}
export async function removeChildAction(studentUserId: string) {
  return action({ role: "parent" }, async (actor, ctx) => {
    await revokeLink(actor, actor.id, studentUserId, "Removed by the parent", ctx);
    revalidatePath("/parent");
  }, "Connection removed.");
}
export async function scheduleCreateAction(studentUserId: string, _: ActionResult | null, form: FormData) {
  return action({ role: "parent" }, async (actor, ctx) => {
    const get = (k: string) => String(form.get(k) ?? "");
    const kind = get("kind") === "FLAG" ? "FLAG" : "ACTIVITY";
    await createSchedule(actor, studentUserId, { kind, title: (kind === "FLAG" ? get("flag") : get("title") === "Other activity" ? get("custom") : get("title")) || get("custom"), note: get("note"), date: get("date"), startTime: get("startTime"), endTime: get("endTime"), priority: get("priority") || "NORMAL", repeat: get("repeat") || "ONCE" }, ctx);
    revalidatePath(`/parent/child/${studentUserId}`);
  }, "Added. Your child has been notified.");
}
export async function scheduleDeleteAction(id: string, studentUserId: string) {
  return action({ role: "parent" }, async (actor, ctx) => {
    await deleteSchedule(actor, id, ctx);
    revalidatePath(`/parent/child/${studentUserId}`);
  }, "Removed.");
}
