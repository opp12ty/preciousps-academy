import { api } from "@/server/http";
import { studentProfileAdmin } from "@/server/services/people";

/** Full student record for administrators — never includes password material. */
export const GET = api<{ id: string }>({ auth: "staff", perm: "students.view" }, async ({ params, actor }) => studentProfileAdmin(actor!, params.id));
