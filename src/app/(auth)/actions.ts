"use server";

import { redirect } from "next/navigation";
import { AppError } from "@/server/errors";
import { toPublicError } from "@/server/errors";
import { clearSessionCookie, getSession, reqCtx, setSessionCookie, type ActionResult } from "@/server/http";
import { revokeSession } from "@/server/auth/session";
import { audit } from "@/server/audit";
import { bootstrapSuperAdmin, checkOwnerEmail, login, registerStudent, signInNewStudent, requestPasswordReset, resetPasswordWithToken, verifyMfa } from "@/server/services/auth";

const fd = (f: FormData) => Object.fromEntries(Array.from(f.keys()).map((k) => [k, f.get(k)?.toString() ?? ""]));

function safeNext(next: string | undefined, fallback: string) {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : fallback;
}

export async function registerAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  let ok = false;
  try {
    const ctx = await reqCtx();
    const data = fd(form);
    let l: { token: string; expiresAt: Date };
    try {
      const created = await registerStudent({ ...data, acceptTerms: data.acceptTerms === "on" }, ctx);
      l = await signInNewStudent(created.userId, ctx);
    } catch (e) {
      // A double-click or a dropped connection can leave the account created while the student saw an error.
      // If the same e-mail AND password already work, this is that student retrying: sign them in instead.
      const dup = e instanceof AppError && e.code === "DUPLICATE" && Boolean(e.fields?.email);
      if (!dup) throw e;
      l = await login({ identifier: data.email, password: data.password }, "student", ctx).catch(() => {
        throw e;
      });
    }
    await setSessionCookie(l.token, l.expiresAt);
    ok = true;
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
  if (ok) redirect("/student?welcome=1");
  return { ok: true };
}

async function doLogin(portal: "student" | "backend", form: FormData): Promise<ActionResult> {
  let dest = "";
  try {
    const data = fd(form);
    const r = await login({ identifier: data.identifier, password: data.password }, portal, await reqCtx());
    await setSessionCookie(r.token, r.expiresAt);
    if (r.mfaPending) dest = `/backend/verify${data.next ? `?next=${encodeURIComponent(data.next)}` : ""}`;
    else if (portal === "student") dest = r.mustChangePassword ? "/student/security?force=1" : safeNext(data.next, "/student");
    else dest = r.mustChangePassword ? "/admin/security?force=password" : safeNext(data.next, "/admin");
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
  redirect(dest);
}

export async function studentLoginAction(_: ActionResult | null, form: FormData) {
  return doLogin("student", form);
}
export async function backendLoginAction(_: ActionResult | null, form: FormData) {
  return doLogin("backend", form);
}

export async function mfaAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  let dest = "/admin";
  try {
    const s = await getSession();
    if (!s || !s.mfaPending) return { ok: false, error: "Your sign-in session has expired. Please sign in again." };
    await verifyMfa(s.sessionId, s.user.id, String(form.get("code") ?? ""), await reqCtx());
    dest = s.user.mustChangePassword ? "/admin/security?force=password" : safeNext(String(form.get("next") ?? ""), "/admin");
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message };
  }
  redirect(dest);
}

export async function logoutAction() {
  const s = await getSession();
  if (s) {
    await revokeSession(s.sessionId, "LOGOUT");
    await audit({ actor: s.actor, action: "auth.logout", entityType: "user", entityId: s.user.id }, await reqCtx());
  }
  await clearSessionCookie();
  redirect(s && s.user.userType !== "STUDENT" ? "/backend?signedOut=1" : "/login?signedOut=1");
}

export async function forgotAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  try {
    await requestPasswordReset(String(form.get("email") ?? ""), await reqCtx());
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "RATE_LIMITED") return { ok: false, error: p.message };
  }
  // Same response whether or not the account exists.
  return { ok: true, message: "If an account exists for that email, a reset link has been sent. If you do not receive it, contact the Super Admin." };
}

export async function resetAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  try {
    await resetPasswordWithToken(fd(form), await reqCtx());
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
  redirect("/login?reset=1");
}

/** First-run step 1: is this the owner's e-mail? */
export async function ownerCheckAction(emailInput: string): Promise<ActionResult> {
  try {
    await checkOwnerEmail(emailInput, await reqCtx());
    return { ok: true };
  } catch (e) {
    return { ok: false, error: toPublicError(e).message };
  }
}

/** First-run step 2: create the Super Admin with the owner's own password, then sign straight in. */
export async function setupAction(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  try {
    const data = fd(form);
    const ctx = await reqCtx();
    await bootstrapSuperAdmin(data, ctx);
    const l = await login({ identifier: data.email, password: data.password }, "backend", ctx);
    await setSessionCookie(l.token, l.expiresAt);
  } catch (e) {
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
  // Two-factor enrolment is the next (mandatory) step for the Super Admin.
  redirect("/admin/security?force=2fa");
}
