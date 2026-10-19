"use server";

import { revalidatePath } from "next/cache";
import { action, type ActionResult } from "@/server/http";
import { submitIdea } from "@/server/services/ideas";

/** Sends an idea to the Ideas Box (students, school accounts and parents). */
export async function submitIdeaAction(_: ActionResult | null, form: FormData) {
  return action({ role: "any" }, async (actor, ctx) => {
    await submitIdea(actor, { category: String(form.get("category") ?? "OTHER"), text: String(form.get("text") ?? "") }, ctx);
    revalidatePath("/student/ideas");
    revalidatePath("/parent/ideas");
  }, "Thank you! Your idea has been sent to the Precious PS team.");
}
