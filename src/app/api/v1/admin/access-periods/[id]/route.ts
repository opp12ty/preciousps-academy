import { api, readJson } from "@/server/http";
import { adjustAccess } from "@/server/services/access";

/**
 * POST { action: EXTEND|REDUCE|SET_DURATION|SET_EXPIRY|END|SUSPEND|RESTORE|REVOKE|REACTIVATE, days?, expiresAt?, reason }
 * Recalculated on the server, recorded with before/after values, audited, and pushed to the student's dashboard.
 */
export const POST = api<{ id: string }>({ auth: "staff", perm: "codes.manage" }, async ({ req, params, actor, ctx }) => adjustAccess(actor!, params.id, await readJson(req), ctx));
