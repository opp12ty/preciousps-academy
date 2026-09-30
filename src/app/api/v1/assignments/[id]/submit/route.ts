import { api, readJson } from "@/server/http";
import { submitAssignment } from "@/server/services/assignments";
import { renderBlocks } from "@/components/rich-text";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const r = await submitAssignment(actor!, params.id, await readJson(req), ctx);
  return { ...r, feedback: r.feedback?.map((f) => ({ ...f, explanationHtml: f.explanation ? renderBlocks(f.explanation) : null })) ?? null };
});
