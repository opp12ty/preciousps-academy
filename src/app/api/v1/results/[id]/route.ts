import { api } from "@/server/http";
import { getStudentResult } from "@/server/services/exams";

export const GET = api<{ id: string }>({ auth: "student" }, async ({ params, actor, ctx }) => getStudentResult(actor!, params.id, ctx));
