import { api } from "@/server/http";
import { listStudentExams } from "@/server/services/exams";

export const GET = api({ auth: "student" }, async ({ actor, req }) => {
  const types = req.nextUrl.searchParams.get("types")?.split(",").filter(Boolean);
  return listStudentExams(actor!, { types });
});
