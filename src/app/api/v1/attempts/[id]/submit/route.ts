import { api } from "@/server/http";
import { submitAttempt } from "@/server/services/exams";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ params, actor, ctx }) => {
  const r = await submitAttempt(actor!, params.id, ctx);
  return { resultId: r.id };
});
