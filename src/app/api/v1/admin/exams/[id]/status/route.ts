import { api, readJson } from "@/server/http";
import { AppError } from "@/server/errors";
import { setExamStatus } from "@/server/services/exams";

/** POST { status: DRAFT | PUBLISHED | ARCHIVED } */
export const POST = api<{ id: string }>({ auth: "staff", perm: "exams.publish" }, async ({ req, params, actor, ctx }) => {
  const { status } = (await readJson(req)) as { status?: string };
  if (status !== "DRAFT" && status !== "PUBLISHED" && status !== "ARCHIVED") throw new AppError("VALIDATION", "Invalid status.");
  await setExamStatus(actor!, params.id, status, ctx);
  return { status };
});
