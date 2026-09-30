import { api } from "@/server/http";
import { globalSearch } from "@/server/services/search";

export const GET = api({ auth: "staff" }, async ({ req, actor }) => globalSearch(actor!, req.nextUrl.searchParams.get("q") ?? ""));
