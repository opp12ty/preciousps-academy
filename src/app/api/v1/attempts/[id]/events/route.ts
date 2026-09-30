import { api, readJson } from "@/server/http";
import { recordAttemptEvent } from "@/server/services/exams";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const { type } = (await readJson(req, 2_000)) as { type?: string };
  await recordAttemptEvent(actor!, params.id, String(type ?? ""), ctx);
  return { recorded: true };
});
