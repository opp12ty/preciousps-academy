import { api } from "@/server/http";
import { completeReading } from "@/server/services/study";

export const POST = api<{ id: string }>({ auth: "student" }, async ({ params, actor, ctx }) => {
  await completeReading(actor!, params.id, ctx);
  return { completed: true };
});
