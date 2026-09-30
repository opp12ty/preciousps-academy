import { api, readJson } from "@/server/http";
import { generateCodes, listCodes } from "@/server/services/access";

/** GET ?status=&search=&page= — list codes. POST { count, durationDays?, note? } — generate codes (returned once). */
export const GET = api({ auth: "staff", perm: "codes.view" }, async ({ req, actor }) => {
  const sp = req.nextUrl.searchParams;
  return listCodes(actor!, { status: sp.get("status") ?? undefined, search: sp.get("search") ?? undefined, page: Number(sp.get("page") ?? 1) });
});

export const POST = api({ auth: "staff", perm: "codes.generate" }, async ({ req, actor, ctx }) => {
  const b = (await readJson(req)) as { count?: number; durationDays?: number; note?: string };
  return generateCodes(actor!, { count: Number(b.count ?? 1), durationDays: b.durationDays, note: b.note }, ctx);
});
