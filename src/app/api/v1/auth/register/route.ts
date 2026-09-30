import { api, readJson } from "@/server/http";
import { registerStudent } from "@/server/services/auth";

export const POST = api({ auth: "none" }, async ({ req, ctx }) => registerStudent(await readJson(req), ctx));
