import "server-only";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";
import { cache } from "react";
import { can, type Permission, type SuperCapability } from "@/core/permissions";
import { securityEvent, type Actor, type ReqCtx } from "./audit";
import { resolveSessionToken, type ResolvedSession } from "./auth/session";
import { AppError, toPublicError } from "./errors";
import { getSetting } from "./settings";

export const SESSION_COOKIE = process.env.NODE_ENV === "production" ? "__Host-pps_session" : "pps_session";

export async function reqCtx(): Promise<ReqCtx> {
  const h = await headers();
  return {
    ip: (h.get("x-forwarded-for")?.split(",")[0] ?? h.get("x-real-ip") ?? "").trim() || null,
    userAgent: h.get("user-agent"),
  };
}

export function reqCtxFrom(req: NextRequest): ReqCtx {
  return {
    ip: (req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "").trim() || null,
    userAgent: req.headers.get("user-agent"),
  };
}

export async function setSessionCookie(token: string, expiresAt: Date) {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearSessionCookie() {
  (await cookies()).delete(SESSION_COOKIE);
}

/** Per-request memoised session lookup (server components & actions). */
export const getSession = cache(async (): Promise<ResolvedSession | null> => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return resolveSessionToken(token);
});

/* ---------------------------------------------------------- page guards */

export async function requireStudentPage(opts: { allowPasswordChange?: boolean } = {}) {
  const s = await getSession();
  if (!s || s.mfaPending) redirect("/login");
  if (s.user.userType !== "STUDENT") redirect("/admin");
  if (s.user.mustChangePassword && !opts.allowPasswordChange) redirect("/student/security?force=1");
  return s;
}

export async function requireStaffPage(perm?: Permission | SuperCapability, opts: { allowSetup?: boolean } = {}) {
  const s = await getSession();
  if (!s) redirect("/backend");
  if (s.mfaPending) redirect("/backend/verify");
  if (s.user.userType === "STUDENT") redirect("/student");
  if (!opts.allowSetup) {
    if (s.user.mustChangePassword) redirect("/admin/security?force=password");
    if (s.user.userType === "SUPER_ADMIN" && !s.user.totpEnabled) {
      const cfg = await getSetting(s.user.schoolId, "authentication");
      if (cfg.requireSuperAdmin2fa) redirect("/admin/security?force=2fa");
    }
  }
  if (perm && !can(s.actor, perm)) {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "MEDIUM", userId: s.user.id, schoolId: s.user.schoolId, detail: { perm, via: "page" } }, await reqCtx());
    redirect("/admin?denied=1");
  }
  return s;
}

/* -------------------------------------------------------- server actions */

export type ActionResult<T = unknown> = { ok: true; data?: T; message?: string } | { ok: false; error: string; fields?: Record<string, string[]> };

/**
 * Wraps a server action: resolves the session, enforces role/permission on
 * the server, converts errors to safe messages. (Next.js server actions
 * already enforce same-origin POSTs, which covers CSRF.)
 */
export async function action<T>(
  guard: { role: "student" | "staff" | "any"; perm?: Permission | SuperCapability },
  fn: (actor: Actor, ctx: ReqCtx, session: ResolvedSession) => Promise<T>,
  message?: string,
): Promise<ActionResult<T>> {
  try {
    const s = await getSession();
    if (!s || s.mfaPending) throw new AppError("UNAUTHENTICATED", "Your session has expired. Please sign in again.");
    const ctx = await reqCtx();
    if (guard.role === "student" && s.user.userType !== "STUDENT") throw new AppError("FORBIDDEN", "This action is for students.");
    if (guard.role === "staff" && s.user.userType === "STUDENT") {
      await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: s.user.id, schoolId: s.user.schoolId, detail: { via: "action" } }, ctx);
      throw new AppError("FORBIDDEN", "Permission denied.");
    }
    if (guard.perm && !can(s.actor, guard.perm)) {
      await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: s.user.id, schoolId: s.user.schoolId, detail: { perm: guard.perm, via: "action" } }, ctx);
      throw new AppError("FORBIDDEN", "You do not have permission to do that.");
    }
    const data = await fn(s.actor, ctx, s);
    return { ok: true, data, message };
  } catch (e) {
    if (isRedirect(e)) throw e;
    const p = toPublicError(e);
    return { ok: false, error: p.message, fields: p.fields };
  }
}

function isRedirect(e: unknown) {
  return typeof e === "object" && e !== null && "digest" in e && String((e as { digest: unknown }).digest).startsWith("NEXT_REDIRECT");
}

/* ------------------------------------------------------------ API routes */

type ApiAuth = "none" | "student" | "staff" | "any";

function sameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return req.headers.get("sec-fetch-site") !== "cross-site";
  try {
    return new URL(origin).host === (req.headers.get("x-forwarded-host") ?? req.headers.get("host"));
  } catch {
    return false;
  }
}

/**
 * API-first handler (§59): the same endpoints serve the web app (cookie) and
 * future mobile apps (Authorization: Bearer). Cookie-authenticated unsafe
 * methods must be same-origin (CSRF protection).
 */
export function api<P = Record<string, string>>(
  opts: { auth: ApiAuth; perm?: Permission | SuperCapability; allowMfaPending?: boolean; allowPasswordChange?: boolean },
  fn: (args: { req: NextRequest; params: P; actor: Actor | null; session: ResolvedSession | null; ctx: ReqCtx }) => Promise<Response | unknown>,
) {
  return async (req: NextRequest, context: { params: Promise<P> }) => {
    const ctx = reqCtxFrom(req);
    try {
      const bearer = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
      const token = bearer ?? req.cookies.get(SESSION_COOKIE)?.value;
      const unsafe = !["GET", "HEAD", "OPTIONS"].includes(req.method);
      if (unsafe && !bearer && !sameOrigin(req)) {
        await securityEvent({ type: "UNAUTHORIZED_API", severity: "MEDIUM", detail: { reason: "cross_origin", path: req.nextUrl.pathname } }, ctx);
        throw new AppError("FORBIDDEN", "Cross-site request blocked.");
      }
      let session: ResolvedSession | null = null;
      if (opts.auth !== "none") {
        session = await resolveSessionToken(token);
        if (!session) throw new AppError("UNAUTHENTICATED", "Please sign in.");
        if (session.mfaPending && !opts.allowMfaPending) throw new AppError("MFA_REQUIRED", "Two-factor verification required.");
        if (session.user.mustChangePassword && !opts.allowPasswordChange) throw new AppError("PASSWORD_CHANGE_REQUIRED", "You must change your password first.");
        const t = session.user.userType;
        if ((opts.auth === "student" && t !== "STUDENT") || (opts.auth === "staff" && t === "STUDENT")) {
          await securityEvent({ type: "UNAUTHORIZED_API", severity: "HIGH", userId: session.user.id, schoolId: session.user.schoolId, detail: { path: req.nextUrl.pathname } }, ctx);
          throw new AppError("FORBIDDEN", "Permission denied.");
        }
        if (opts.perm && !can(session.actor, opts.perm)) {
          await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: session.user.id, schoolId: session.user.schoolId, detail: { perm: opts.perm, path: req.nextUrl.pathname } }, ctx);
          throw new AppError("FORBIDDEN", "You do not have permission to do that.");
        }
      }
      const out = await fn({ req, params: await context.params, actor: session?.actor ?? null, session, ctx });
      if (out instanceof Response) return out;
      return NextResponse.json({ ok: true, data: out ?? null }, { headers: { "Cache-Control": "no-store" } });
    } catch (e) {
      const p = toPublicError(e);
      return NextResponse.json({ ok: false, error: { code: p.code, message: p.message, fields: p.fields } }, { status: p.status, headers: { "Cache-Control": "no-store" } });
    }
  };
}

export async function readJson(req: NextRequest, maxBytes = 256_000): Promise<unknown> {
  const len = Number(req.headers.get("content-length") ?? 0);
  if (len > maxBytes) throw new AppError("VALIDATION", "Request too large.");
  const text = await req.text();
  if (text.length > maxBytes) throw new AppError("VALIDATION", "Request too large.");
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    throw new AppError("VALIDATION", "Invalid JSON body.");
  }
}

export function fileResponse(body: Buffer | string, type: string, fileName: string, inline = false) {
  const safe = fileName.replace(/[^\w.\-]+/g, "_");
  return new Response(typeof body === "string" ? body : new Uint8Array(body), {
    headers: {
      "Content-Type": type,
      "Content-Disposition": `${inline ? "inline" : "attachment"}; filename="${safe}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
