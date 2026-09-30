import { api, readJson } from "@/server/http";
import { createExam, listExamsAdmin } from "@/server/services/exams";

export const GET = api({ auth: "staff", perm: "exams.view" }, async ({ actor }) => listExamsAdmin(actor!));
export const POST = api({ auth: "staff", perm: "exams.manage" }, async ({ req, actor, ctx }) => createExam(actor!, await readJson(req), ctx));
