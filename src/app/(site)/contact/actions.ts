"use server";

import { reqCtx, type ActionResult } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { createEnquiry } from "@/server/services/engagement";

export async function sendEnquiryAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  try {
    const g = (k: string) => String(form.get(k) ?? "");
    await createEnquiry({ name: g("name"), phone: g("phone"), email: g("email"), topic: g("topic"), message: g("message"), website: g("website") }, await reqCtx());
    return { ok: true, message: "Thank you! Your message has been received. We will contact you soon." };
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
}
