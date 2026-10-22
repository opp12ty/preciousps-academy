import { and, eq } from "drizzle-orm";
import { can } from "@/core/permissions";
import { api, fileResponse } from "@/server/http";
import { getDb } from "@/server/db";
import { results } from "@/server/db/schema";
import { AppError } from "@/server/errors";
import { securityEvent } from "@/server/audit";
import { resultSlipPdf } from "@/server/services/exports";
import { downloadAccess, featureWithheld } from "@/server/services/access";
import { FEATURE_DENIED } from "@/core/features";

/** Result slip PDF: the owning student (once released) or staff with results.view. */
export const GET = api<{ id: string }>({ auth: "any" }, async ({ params, actor, ctx }) => {
  const [r] = await getDb().select().from(results).where(and(eq(results.id, params.id), eq(results.schoolId, actor!.schoolId)));
  if (!r) throw new AppError("NOT_FOUND", "Result not found.");
  const isOwner = actor!.userType === "STUDENT" && r.userId === actor!.id;
  if (!isOwner && !can(actor, "results.view")) {
    await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: actor!.id, schoolId: actor!.schoolId, detail: { resultId: params.id, via: "slip" } }, ctx);
    throw new AppError("NOT_FOUND", "Result not found.");
  }
  if (isOwner && (!r.releasedAt || r.isVoided)) throw new AppError("FORBIDDEN", "This result has not been released.");
  if (isOwner && (await featureWithheld(actor!.id, "RESULTS"))) throw new AppError("FORBIDDEN", FEATURE_DENIED);
  if (isOwner) {
    const dl = await downloadAccess(actor!, "resultSlips");
    if (!dl.allowed) throw new AppError("FORBIDDEN", `To download your result slip, contact Admin on ${dl.phone}${dl.needsCode ? " to get an access code for it" : ""}.`);
  }
  const { pdf, fileName } = await resultSlipPdf(r.id, actor!.schoolId);
  return fileResponse(pdf, "application/pdf", fileName, true);
});
