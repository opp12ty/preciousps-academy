import { api, readJson } from "@/server/http";
import { submitClasswork } from "@/server/services/study";
import { renderBlocks } from "@/components/rich-text";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const r = await submitClasswork(actor!, params.id, await readJson(req), ctx);
  // Typeset explanations on the server so clients never need a math engine.
  return { ...r, feedback: r.feedback.map((f) => ({ ...f, explanationHtml: f.explanation ? renderBlocks(f.explanation) : null })) };
});
