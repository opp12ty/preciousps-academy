import { api } from "@/server/http";
import { getAttemptView } from "@/server/services/exams";

export const GET = api<{ id: string }>({ auth: "student" }, async ({ params, actor, ctx }) => getAttemptView(actor!, params.id, ctx));
