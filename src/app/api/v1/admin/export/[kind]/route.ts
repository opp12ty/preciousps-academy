import { and, desc, eq, inArray } from "drizzle-orm";
import { can } from "@/core/permissions";
import { api, fileResponse } from "@/server/http";
import { getDb } from "@/server/db";
import { activationCodes, classes, departments, students, users } from "@/server/db/schema";
import { AppError } from "@/server/errors";
import { decrypt } from "@/server/crypto";
import { audit } from "@/server/audit";
import { recordExport, toCsv, toPdfTable, toXlsx, lagos, type ExportFormat } from "@/server/services/exports";
import { listResults, resultsBaseQuery, resultConditions, type ResultFilter } from "@/server/services/exams";
import { studentConditions, type StudentFilter } from "@/server/services/people";
import { listQuestions } from "@/server/services/questions";
import { REPORTS, runReport, type ReportKind } from "@/server/services/analytics";
import { results } from "@/server/db/schema";

/**
 * GET /api/v1/admin/export/{students|results|codes|questions|report}?format=csv|xlsx|pdf&…filters
 * Every export is permission-checked, rate-limited and recorded in export history + audit log.
 */
export const GET = api<{ kind: string }>({ auth: "staff" }, async ({ req, params, actor, ctx }) => {
  const sp = req.nextUrl.searchParams;
  const format = (["csv", "xlsx", "pdf"].includes(sp.get("format") ?? "") ? sp.get("format") : "csv") as ExportFormat;
  const filters = Object.fromEntries(sp.entries());
  const db = getDb();
  let rows: Record<string, unknown>[] = [];
  let title = "";

  switch (params.kind) {
    case "students": {
      if (!can(actor, "students.view")) throw new AppError("FORBIDDEN", "Permission denied.");
      title = "Students";
      const f: StudentFilter = { search: sp.get("search") ?? undefined, classId: sp.get("classId") ?? undefined, departmentId: sp.get("departmentId") ?? undefined, status: sp.get("status") ?? undefined, access: (sp.get("access") as StudentFilter["access"]) ?? undefined };
      const list = await db
        .select({ first: users.firstName, last: users.lastName, email: users.email, phone: users.phone, num: students.studentNumber, cls: classes.name, dep: departments.name, status: users.status, created: users.createdAt, lastLogin: users.lastLoginAt })
        .from(users)
        .innerJoin(students, eq(students.userId, users.id))
        .leftJoin(classes, eq(classes.id, students.classId))
        .leftJoin(departments, eq(departments.id, students.departmentId))
        .where(and(...studentConditions(actor!.schoolId, f)))
        .orderBy(users.lastName)
        .limit(20_000);
      rows = list.map((r) => ({ "Student ID": r.num, "First name": r.first, "Last name": r.last, Email: r.email, Phone: r.phone, Class: r.cls, Department: r.dep, Status: r.status, Registered: r.created, "Last login": r.lastLogin }));
      break;
    }
    case "results": {
      if (!can(actor, "results.export")) throw new AppError("FORBIDDEN", "Permission denied.");
      title = "Examination results";
      const f: ResultFilter = { search: sp.get("search") ?? undefined, examId: sp.get("examId") ?? undefined, grade: sp.get("grade") ?? undefined, from: sp.get("from") ?? undefined, to: sp.get("to") ?? undefined, status: (sp.get("status") as ResultFilter["status"]) ?? undefined, classId: sp.get("classId") ?? undefined, departmentId: sp.get("departmentId") ?? undefined };
      void listResults;
      const list = await resultsBaseQuery(db).where(and(...resultConditions(actor!.schoolId, f))).orderBy(desc(results.createdAt)).limit(20_000);
      rows = list.map((r) => ({ Student: r.studentName, "Student ID": r.studentNumber, Class: r.className, Department: r.department, Examination: r.examTitle, Subject: r.subject, Score: `${r.score}/${r.totalMarks}`, "%": r.percentage, Grade: r.grade, Correct: r.correct, Incorrect: r.incorrect, Unanswered: r.unanswered, Attempt: r.attemptNumber, Status: r.isVoided ? "VOID" : r.releasedAt ? "Released" : "Pending", Date: r.createdAt }));
      break;
    }
    case "codes": {
      if (!can(actor, "codes.view")) throw new AppError("FORBIDDEN", "Permission denied.");
      title = "Access codes";
      const reveal = sp.get("reveal") === "1" && can(actor, "codes.generate");
      const status = sp.get("status");
      const batch = sp.get("batchId");
      const list = await db
        .select({ c: activationCodes, email: users.email, first: users.firstName, last: users.lastName })
        .from(activationCodes)
        .leftJoin(users, eq(users.id, activationCodes.activatedBy))
        .where(and(eq(activationCodes.schoolId, actor!.schoolId), status ? inArray(activationCodes.status, [status as "UNUSED"]) : undefined, batch ? eq(activationCodes.batchId, batch) : undefined))
        .orderBy(desc(activationCodes.createdAt))
        .limit(20_000);
      rows = list.map((r) => ({ Code: reveal ? decrypt(r.c.codeEnc) : `…${r.c.codeSuffix}`, Status: r.c.status, Days: r.c.durationDays, Batch: r.c.batchId, Note: r.c.note, Created: r.c.createdAt, Activated: r.c.activatedAt, Student: r.email ? `${r.first} ${r.last} <${r.email}>` : "" }));
      if (reveal) await audit({ actor, action: "codes.revealed_export", entityType: "code_batch", entityId: batch ?? "all", summary: `${rows.length} codes revealed in export` }, ctx);
      break;
    }
    case "questions": {
      if (!can(actor, "questions.view")) throw new AppError("FORBIDDEN", "Permission denied.");
      title = "Question bank";
      const all: Record<string, unknown>[] = [];
      for (let page = 1; page <= 200; page++) {
        const r = await listQuestions(actor!, { status: sp.get("status") ?? undefined, subjectId: sp.get("subjectId") ?? undefined, search: sp.get("search") ?? undefined, page, pageSize: 100 });
        all.push(...r.rows.map((q) => ({ Ref: q.ref, Subject: q.subject, Topic: q.topic, Type: q.type, Difficulty: q.difficulty, Year: q.year, Status: q.status, Copyright: q.copyrightStatus, Question: q.stem, Attempted: q.timesAttempted, "Correct %": q.timesAttempted ? Math.round((1000 * q.timesCorrect) / q.timesAttempted) / 10 : "" })));
        if (r.rows.length < 100) break;
      }
      rows = all;
      break;
    }
    case "report": {
      if (!can(actor, "analytics.view")) throw new AppError("FORBIDDEN", "Permission denied.");
      const k = sp.get("report") as ReportKind;
      const meta = REPORTS.find((r) => r.kind === k);
      if (!meta) throw new AppError("VALIDATION", "Unknown report.");
      if ((k === "admin-activity" || k === "security-activity") && !can(actor, "super.audit")) throw new AppError("FORBIDDEN", "Permission denied.");
      title = meta.title;
      rows = await runReport(actor!.schoolId, k);
      break;
    }
    default:
      throw new AppError("NOT_FOUND", "Unknown export.");
  }

  await recordExport(actor!, params.kind === "report" ? `report:${sp.get("report")}` : params.kind, format, rows.length, filters, ctx);
  const stamp = new Date().toISOString().slice(0, 10);
  const base = `PreciousPS_${title.replace(/\W+/g, "_")}_${stamp}`;
  if (!rows.length) rows = [{ Info: "No records match the selected filters." }];
  if (format === "xlsx") return fileResponse(toXlsx(rows, title), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", `${base}.xlsx`);
  if (format === "pdf") return fileResponse(await toPdfTable(title, rows.slice(0, 3000), actor!.schoolId, `Exported by ${actor!.name} · ${lagos(new Date())} WAT`), "application/pdf", `${base}.pdf`);
  return fileResponse(toCsv(rows), "text/csv; charset=utf-8", `${base}.csv`);
});
