import { api, fileResponse } from "@/server/http";
import { studentImportTemplate } from "@/server/services/student-import";

/** GET — the blank workbook for registering many students at once. */
export const GET = api({ auth: "staff", perm: "students.manage" }, async ({ actor }) =>
  fileResponse(await studentImportTemplate(actor!.schoolId), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "PreciousPS_Student_Import_Template.xlsx"),
);
