import { api, readJson } from "@/server/http";
import { claimAttemptSession } from "@/server/services/exams";

/** Claim the live attempt for this window/device (recorded when it replaces another session). */
export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const { clientSessionId } = (await readJson(req, 2_000)) as { clientSessionId?: string };
  return claimAttemptSession(actor!, params.id, String(clientSessionId ?? ""), ctx);
});
