import { api, readJson } from "@/server/http";
import { parentPost, parentRoomFeed } from "@/server/services/community";

/** Parent community room. The service refuses anyone who is not a parent, and any room that is not a parent room. */
export const GET = api<{ id: string }>({ auth: "any" }, async ({ params, actor }) => parentRoomFeed(actor!, params.id));

export const POST = api<{ id: string }>({ auth: "any" }, async ({ req, params, actor, ctx }) => {
  const { body } = (await readJson(req, 8_000)) as { body?: unknown };
  return parentPost(actor!, params.id, body, ctx);
});
