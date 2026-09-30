import { api, fileResponse } from "@/server/http";
import { excelTemplate } from "@/server/services/imports";

export const GET = api({ auth: "staff", perm: "questions.import" }, async () =>
  fileResponse(excelTemplate(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "PreciousPS_Question_Import_Template.xlsx"),
);
