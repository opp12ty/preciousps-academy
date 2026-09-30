import { api } from "@/server/http";
import { getAccessState } from "@/server/services/access";

/** Server-authoritative access state; the dashboard countdown re-syncs from here (§15, Rule 5). */
export const GET = api({ auth: "student", allowPasswordChange: true }, async ({ actor }) => getAccessState(actor!.id));
