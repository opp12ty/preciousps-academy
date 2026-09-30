import { api } from "@/server/http";
import { readFormFile } from "@/server/files";
import { commitImport, previewImport } from "@/server/services/imports";

/**
 * POST multipart { file, subjectId?, classId?, departmentId?, level? (JUNIOR_SECONDARY | SENIOR_SECONDARY), year?, examType?, source?, copyrightStatus?, commit?: "1" }
 * Returns the validated preview; with commit=1 also imports every valid item as PENDING_REVIEW.
 */
export const POST = api({ auth: "staff", perm: "questions.import" }, async ({ req, actor, ctx }) => {
  const form = await req.formData();
  const get = (k: string) => (form.get(k) === null ? undefined : String(form.get(k)));
  const { importId, report } = await previewImport(
    actor!,
    await readFormFile(form),
    { subjectId: get("subjectId"), classId: get("classId"), departmentId: get("departmentId"), level: get("level"), year: get("year"), examType: get("examType") || null, source: get("source"), copyrightStatus: get("copyrightStatus") ?? "ORIGINAL" },
    ctx,
  );
  const committed = get("commit") === "1" ? await commitImport(actor!, importId, "ALL_VALID", ctx).catch((e: Error) => ({ error: e.message })) : null;
  return { importId, mode: report.mode, notices: report.notices, items: report.items.map((i) => ({ source: i.source, stem: i.stem, options: i.options, errors: i.errors, warnings: i.warnings, duplicateOf: i.duplicateOf })), committed };
});
