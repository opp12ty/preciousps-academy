import { can } from "@/core/permissions";
import { AppError } from "@/server/errors";
import { api, fileResponse } from "@/server/http";
import { centralTemplateWorkbook } from "@/server/services/central";

/** GET ?only=words | resources — the blank central upload workbook (the full one when "only" is left out). */
export const GET = api({ auth: "staff" }, async ({ req, actor }) => {
  const q = req.nextUrl.searchParams.get("only");
  const only = q === "words" || q === "resources" || q === "hub" ? q : "all";
  if (!can(actor, "curriculum.manage") && !can(actor, "learning.manage") && !can(actor, "resources.manage")) throw new AppError("FORBIDDEN", "Permission denied.");
  const name = only === "words" ? "PreciousPS_Dictionary_Idioms_Template.xlsx" : only === "resources" ? "PreciousPS_Resources_Template.xlsx" : only === "hub" ? "PreciousPS_Articles_Quiz_Template.xlsx" : "PreciousPS_Central_Upload_Template.xlsx";
  return fileResponse(await centralTemplateWorkbook(actor!.schoolId, only), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", name);
});
