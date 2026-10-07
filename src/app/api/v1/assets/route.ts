import { can, isStaffType } from "@/core/permissions";
import { api } from "@/server/http";
import { AppError } from "@/server/errors";
import { readFormFile } from "@/server/files";
import { storeAsset, type AssetKind } from "@/server/services/assets";

/** Multipart upload: fields `file` and `kind` (BRAND | IMAGE | DOCUMENT | QUESTION_IMAGE | AVATAR). */
export const POST = api({ auth: "any" }, async ({ req, actor, ctx }) => {
  const form = await req.formData();
  const kind = String(form.get("kind") ?? "IMAGE") as AssetKind;
  if (!["BRAND", "IMAGE", "DOCUMENT", "QUESTION_IMAGE", "AVATAR"].includes(kind)) throw new AppError("VALIDATION", "Unknown asset type.");
  if (!isStaffType(actor!.userType) && kind !== "AVATAR") throw new AppError("FORBIDDEN", "Permission denied.");
  if (kind === "BRAND" && !can(actor, "super.branding")) throw new AppError("FORBIDDEN", "Only the Super Admin can change branding.");
  if (isStaffType(actor!.userType) && kind !== "BRAND" && !can(actor, "questions.create") && !can(actor, "curriculum.manage") && !can(actor, "resources.manage") && !can(actor, "learning.manage") && !can(actor, "content.manage")) {
    throw new AppError("FORBIDDEN", "Permission denied.");
  }
  return storeAsset(actor!, await readFormFile(form), kind, ctx);
});
