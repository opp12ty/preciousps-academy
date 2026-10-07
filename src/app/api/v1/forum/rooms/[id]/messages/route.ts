import { api, readJson } from "@/server/http";
import { postMessage, roomFeed } from "@/server/services/forum";

/** Polled by the open room: recent messages plus whether the student may still use the forum. */
export const GET = api<{ id: string }>({ auth: "student" }, async ({ params, actor }) => roomFeed(actor!, params.id));

export const POST = api<{ id: string }>({ auth: "student" }, async ({ req, params, actor, ctx }) => {
  const { body } = (await readJson(req, 8_000)) as { body?: unknown };
  return postMessage(actor!, params.id, body, ctx);
});
