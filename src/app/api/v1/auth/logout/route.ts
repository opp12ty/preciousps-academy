import { NextResponse } from "next/server";
import { api, SESSION_COOKIE } from "@/server/http";
import { revokeSession } from "@/server/auth/session";
import { audit } from "@/server/audit";

export const POST = api({ auth: "any", allowMfaPending: true, allowPasswordChange: true }, async ({ session, ctx }) => {
  await revokeSession(session!.sessionId, "LOGOUT");
  await audit({ actor: session!.actor, action: "auth.logout", entityType: "user", entityId: session!.user.id }, ctx);
  const res = NextResponse.json({ ok: true, data: null });
  res.cookies.delete(SESSION_COOKIE);
  return res;
});
