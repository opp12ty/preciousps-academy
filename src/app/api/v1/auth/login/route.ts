import { NextResponse } from "next/server";
import { api, readJson, SESSION_COOKIE } from "@/server/http";
import { login } from "@/server/services/auth";

/**
 * POST { identifier, password, portal?: "student"|"backend", client?: "web"|"mobile" }
 * Web clients receive an httpOnly cookie; mobile clients receive the bearer token.
 */
export const POST = api({ auth: "none" }, async ({ req, ctx }) => {
  const body = (await readJson(req)) as { identifier?: string; password?: string; portal?: string; client?: string };
  const portal = body.portal === "backend" ? "backend" : "student";
  const r = await login({ identifier: body.identifier, password: body.password }, portal, ctx);
  const data = { mfaPending: r.mfaPending, mustChangePassword: r.mustChangePassword, userType: r.userType, expiresAt: r.expiresAt, ...(body.client === "mobile" ? { token: r.token } : {}) };
  const res = NextResponse.json({ ok: true, data }, { headers: { "Cache-Control": "no-store" } });
  if (body.client !== "mobile") {
    res.cookies.set(SESSION_COOKIE, r.token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", expires: r.expiresAt });
  }
  return res;
});
