import { api, fileResponse } from "@/server/http";
import { packTemplateWorkbook } from "@/server/services/content-packs";

export const GET = api({ auth: "staff", perm: "curriculum.manage" }, async () =>
  fileResponse(packTemplateWorkbook(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "PreciousPS_Content_Pack_Template.xlsx"),
);
