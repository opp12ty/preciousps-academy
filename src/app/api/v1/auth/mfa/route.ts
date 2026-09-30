import { api, readJson } from "@/server/http";
import { verifyMfa } from "@/server/services/auth";

export const POST = api({ auth: "any", allowMfaPending: true, allowPasswordChange: true }, async ({ req, session, ctx }) => {
  const { code } = (await readJson(req)) as { code?: string };
  await verifyMfa(session!.sessionId, session!.user.id, String(code ?? ""), ctx);
  return { verified: true };
});
