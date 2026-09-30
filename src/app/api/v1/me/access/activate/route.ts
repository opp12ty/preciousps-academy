import { api, readJson } from "@/server/http";
import { activateCode, getAccessState } from "@/server/services/access";

/** POST { code } — activate an access code for the signed-in student (web or mobile). */
export const POST = api({ auth: "student" }, async ({ req, actor, ctx }) => {
  const { code } = (await readJson(req, 2_000)) as { code?: string };
  await activateCode(actor!, String(code ?? ""), ctx);
  return getAccessState(actor!.id);
});
