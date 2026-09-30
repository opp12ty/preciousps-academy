import { api, readJson } from "@/server/http";
import { startAttempt } from "@/server/services/exams";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const body = (await readJson(req)) as { clientSessionId?: string };
  const sid = typeof body.clientSessionId === "string" && /^[0-9a-f-]{36}$/i.test(body.clientSessionId) ? body.clientSessionId : null;
  return startAttempt(actor!, params.id, sid, ctx);
});
