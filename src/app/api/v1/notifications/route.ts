import { api, readJson } from "@/server/http";
import { listNotifications, markRead } from "@/server/services/notifications";

export const GET = api({ auth: "any" }, async ({ actor }) => listNotifications(actor!.id, actor!.schoolId, 30));

export const POST = api({ auth: "any" }, async ({ req, actor }) => {
  const { id } = (await readJson(req)) as { id?: string };
  await markRead(actor!.id, id === "all" || !id ? "all" : id, actor!.schoolId);
  return { ok: true };
});
