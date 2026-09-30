import { api, readJson } from "@/server/http";
import { rateLimit } from "@/server/rate-limit";
import { saveAnswers } from "@/server/services/exams";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  await rateLimit("examSave", actor!.id, ctx);
  return saveAnswers(actor!, params.id, await readJson(req), ctx);
});
