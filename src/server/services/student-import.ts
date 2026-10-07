import { and, eq, isNull, sql } from "drizzle-orm";
import * as XLSX from "xlsx";
import { z } from "zod";
import { getDb } from "../db";
import { classes, departments, students, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { generateTemporaryPassword, hashPassword } from "../auth/password";
import { AppError } from "../errors";
import { validateUpload } from "../files";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { createStudentAccount, nextStudentNumber } from "./auth";
import { resolvePlacement } from "./scope";

/**
 * Bulk registration of students from an Excel sheet. The school fills one row per student; every
 * row is checked first and nothing is created until the admin confirms. Each new account gets a
 * temporary password that is shown once and must be changed at first sign-in.
 */

export const STUDENT_IMPORT_SHEET = "Students";
export const STUDENT_IMPORT_COLUMNS = ["First Name", "Middle Name", "Last Name", "Class", "Department", "Email", "Phone", "Gender", "Date of Birth", "Student ID", "Username"] as const;
export const STUDENT_IMPORT_MAX_ROWS = 1000;
/** Students without an e-mail address get a placeholder so the account can exist; it receives no mail. */
export const NO_EMAIL_DOMAIN = "no-email.preciousps.invalid";

const norm = (v: unknown) => String(v ?? "").trim();
const key = (v: unknown) => norm(v).toLowerCase().replace(/[\s._-]+/g, "");

const rowSchema = z.object({
  firstName: z.string().trim().min(1, "First Name is required.").max(60).regex(/^[\p{L}\p{M}' .-]+$/u, "First Name: use letters only."),
  middleName: z.string().trim().max(60).regex(/^[\p{L}\p{M}' .-]*$/u, "Middle Name: use letters only."),
  lastName: z.string().trim().min(1, "Last Name is required.").max(60).regex(/^[\p{L}\p{M}' .-]+$/u, "Last Name: use letters only."),
  className: z.string().trim().min(1, "Class is required.").max(60),
  department: z.string().trim().max(60),
  email: z.string().trim().toLowerCase().max(160).refine((v) => !v || z.string().email().safeParse(v).success, "Email is not a valid address."),
  phone: z.string().trim().refine((v) => !v || /^\+?[0-9 ()-]{7,20}$/.test(v), "Phone is not a valid number."),
  gender: z.string().trim(),
  dateOfBirth: z.string().trim(),
  studentNumber: z.string().trim().max(40).regex(/^[A-Za-z0-9/_-]*$/, "Student ID: letters, numbers, / - _ only."),
  username: z.string().trim().max(40).regex(/^[A-Za-z0-9._-]*$/, "Username: letters, numbers, dot, dash and underscore only."),
});
export type StudentImportRow = z.infer<typeof rowSchema> & { row: number };

export interface StudentImportPreview {
  fileName: string;
  ready: StudentImportRow[];
  problems: { row: number; name: string; issues: string[] }[];
  autoIds: boolean;
}

export interface StudentImportResult {
  created: { row: number; name: string; className: string; studentNumber: string; login: string; temporaryPassword: string }[];
  failed: { row: number; name: string; error: string }[];
}

/** Excel serial dates and common text dates to YYYY-MM-DD; anything unreadable is reported. */
function dateOf(v: unknown): string | null {
  if (v === "" || v === null || v === undefined) return "";
  if (v instanceof Date && !Number.isNaN(v.getTime())) return v.toISOString().slice(0, 10);
  if (typeof v === "number" && v > 1000 && v < 80_000) return new Date(Date.UTC(1899, 11, 30) + v * 86_400_000).toISOString().slice(0, 10);
  const s = norm(v);
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/); // day first, as written in Nigeria
  if (m) return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  return null;
}

async function catalogue(schoolId: string) {
  const db = getDb();
  const [cls, deps] = await Promise.all([
    db.select({ id: classes.id, name: classes.name, code: classes.code }).from(classes).where(and(eq(classes.schoolId, schoolId), isNull(classes.archivedAt))),
    db.select({ id: departments.id, name: departments.name, code: departments.code }).from(departments).where(and(eq(departments.schoolId, schoolId), isNull(departments.archivedAt))),
  ]);
  const find = <T extends { name: string; code: string }>(list: T[], v: string) => list.find((x) => key(x.code) === key(v) || key(x.name) === key(v)) ?? null;
  return { cls, deps, classOf: (v: string) => find(cls, v), departmentOf: (v: string) => find(deps, v) };
}

/** The empty workbook the school fills in, with a second sheet listing its own classes and departments. */
export async function studentImportTemplate(schoolId: string): Promise<Buffer> {
  const { cls, deps } = await catalogue(schoolId);
  const cfg = await getSetting(schoolId, "examination");
  const wb = XLSX.utils.book_new();
  const sample = ["Adaeze", "", "Okafor", cls[0]?.code ?? "JSS1", "", "adaeze@example.com", "08030000000", "Female", "2014-05-21", cfg.studentIdAuto ? "" : "PPS/0001", ""];
  const sheet = XLSX.utils.aoa_to_sheet([[...STUDENT_IMPORT_COLUMNS], sample]);
  sheet["!cols"] = STUDENT_IMPORT_COLUMNS.map((c) => ({ wch: Math.max(14, c.length + 4) }));
  XLSX.utils.book_append_sheet(wb, sheet, STUDENT_IMPORT_SHEET);
  const guide = [
    ["How to fill the Students sheet"],
    ["One row per student. Delete the sample row before you upload."],
    ["First Name, Last Name and Class are required. Everything else may be left empty."],
    ["Class: type the class code or name exactly as listed below."],
    ["Department: needed only for classes with more than one department (for example SS1 to SS3)."],
    ["Email: leave empty for a pupil without one. The pupil then signs in with the Student ID."],
    [cfg.studentIdAuto ? "Student ID: leave empty. The system gives each student the next number." : "Student ID: required, and different for every student."],
    ["Date of Birth: YYYY-MM-DD or DD/MM/YYYY. Gender: Male or Female."],
    [`At most ${STUDENT_IMPORT_MAX_ROWS} students in one file.`],
    [],
    ["Class code", "Class name"],
    ...cls.map((c) => [c.code, c.name]),
    [],
    ["Department code", "Department name"],
    ...deps.map((d) => [d.code, d.name]),
  ];
  const g = XLSX.utils.aoa_to_sheet(guide);
  g["!cols"] = [{ wch: 28 }, { wch: 60 }];
  XLSX.utils.book_append_sheet(wb, g, "Read me");
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

/** Reads and checks the sheet. Nothing is created here. */
export async function previewStudentImport(actor: Actor, file: { name: string; bytes: Buffer }, ctx: ReqCtx): Promise<StudentImportPreview> {
  await rateLimit("upload", actor.id, ctx);
  const up = await getSetting(actor.schoolId, "uploads");
  const v = await validateUpload(file, ["xlsx", "csv"], up.maxFileMb * 1_048_576);
  let wb: XLSX.WorkBook;
  try {
    wb = XLSX.read(v.bytes, { type: "buffer", cellDates: true });
  } catch {
    throw new AppError("IMPORT_ERROR", "We could not read this file. Save it as .xlsx and try again.");
  }
  const ws = wb.Sheets[STUDENT_IMPORT_SHEET] ?? wb.Sheets[wb.SheetNames[0]];
  if (!ws) throw new AppError("IMPORT_ERROR", "The workbook has no sheets.");
  const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { defval: "", raw: true });
  if (!raw.length) throw new AppError("IMPORT_ERROR", "The Students sheet is empty. Add one row per student under the headings.");
  if (raw.length > STUDENT_IMPORT_MAX_ROWS) throw new AppError("IMPORT_ERROR", `This file has ${raw.length} rows. Upload at most ${STUDENT_IMPORT_MAX_ROWS} students at a time.`);
  // Headings are matched loosely: "first name", "FirstName" and "First_Name" are the same column.
  const cell = (r: Record<string, unknown>, col: string) => {
    const k = Object.keys(r).find((h) => key(h) === key(col));
    return k ? r[k] : "";
  };
  const headers = Object.keys(raw[0]);
  for (const need of ["First Name", "Last Name", "Class"]) if (!headers.some((h) => key(h) === key(need))) throw new AppError("IMPORT_ERROR", `The sheet has no "${need}" column. Download the template and keep its headings.`);

  const cfg = await getSetting(actor.schoolId, "examination");
  const cat = await catalogue(actor.schoolId);
  const db = getDb();
  const [emails, numbers, names] = await Promise.all([
    db.select({ v: sql<string>`lower(${users.email})` }).from(users),
    db.select({ v: sql<string>`lower(${students.studentNumber})` }).from(students).where(eq(students.schoolId, actor.schoolId)),
    db.select({ v: sql<string>`lower(${students.username})` }).from(students).where(and(eq(students.schoolId, actor.schoolId), sql`${students.username} IS NOT NULL`)),
  ]);
  const existing = await db.select({ v: sql<string>`lower(${users.firstName} || '|' || coalesce(${users.middleName}, '') || '|' || ${users.lastName}) || '|' || ${students.classId}` }).from(users).innerJoin(students, eq(students.userId, users.id)).where(and(eq(users.schoolId, actor.schoolId), isNull(users.deletedAt)));
  const people = new Set(existing.map((x) => x.v));
  const seen = { email: new Set(emails.map((x) => x.v)), number: new Set(numbers.map((x) => x.v)), username: new Set(names.map((x) => x.v)) };

  const ready: StudentImportRow[] = [];
  const problems: StudentImportPreview["problems"] = [];
  raw.forEach((r, i) => {
    const row = i + 2; // the heading is row 1
    const dob = dateOf(cell(r, "Date of Birth"));
    const g = norm(cell(r, "Gender")).toUpperCase();
    const candidate = {
      firstName: norm(cell(r, "First Name")),
      middleName: norm(cell(r, "Middle Name")),
      lastName: norm(cell(r, "Last Name")),
      className: norm(cell(r, "Class")),
      department: norm(cell(r, "Department")),
      email: norm(cell(r, "Email")),
      phone: norm(cell(r, "Phone")),
      gender: g.startsWith("M") ? "MALE" : g.startsWith("F") ? "FEMALE" : "",
      dateOfBirth: dob ?? "",
      studentNumber: cfg.studentIdAuto ? "" : norm(cell(r, "Student ID")),
      username: norm(cell(r, "Username")),
    };
    if (!Object.values(candidate).some(Boolean)) return; // a blank line
    const issues: string[] = [];
    const parsed = rowSchema.safeParse(candidate);
    if (!parsed.success) issues.push(...parsed.error.issues.map((x) => x.message));
    if (dob === null) issues.push("Date of Birth could not be read. Use YYYY-MM-DD.");
    if (g && !candidate.gender) issues.push("Gender must be Male or Female.");
    const cls = candidate.className ? cat.classOf(candidate.className) : null;
    if (candidate.className && !cls) issues.push(`Class "${candidate.className}" is not one of the school's classes.`);
    if (candidate.department && !cat.departmentOf(candidate.department)) issues.push(`Department "${candidate.department}" is not one of the school's departments.`);
    if (!cfg.studentIdAuto && !candidate.studentNumber) issues.push("Student ID is required.");
    const d = parsed.success ? parsed.data : null;
    if (d) {
      for (const [field, label, value] of [["email", "Email", d.email], ["number", "Student ID", d.studentNumber.toLowerCase()], ["username", "Username", d.username.toLowerCase()]] as const) {
        if (!value) continue;
        if (seen[field].has(value)) issues.push(`${label} "${value}" is already registered, or appears twice in this file.`);
        else seen[field].add(value);
      }
    }
    if (d && cls) {
      // Stops the same class list being imported twice when it has no e-mails or Student IDs to compare.
      const who = `${d.firstName}|${d.middleName}|${d.lastName}`.toLowerCase() + `|${cls.id}`;
      if (people.has(who)) issues.push(`A student with this exact name is already in ${cls.name}, or appears twice in this file. If this is a different student, add a middle name.`);
      else people.add(who);
    }
    const name = `${candidate.firstName} ${candidate.lastName}`.trim() || "(no name)";
    if (issues.length || !d) problems.push({ row, name, issues });
    else ready.push({ ...d, row });
  });
  if (!ready.length && !problems.length) throw new AppError("IMPORT_ERROR", "The Students sheet is empty. Add one row per student under the headings.");
  return { fileName: v.name, ready, problems, autoIds: cfg.studentIdAuto };
}

/**
 * Creates the accounts for one batch of checked rows. Every row is validated again here, so nothing
 * the browser sends is trusted. A row that fails does not stop the others.
 */
export async function importStudentRows(actor: Actor, rawRows: unknown, ctx: ReqCtx): Promise<StudentImportResult> {
  const rows = z.array(rowSchema.extend({ row: z.number().int().min(1).max(100_000) })).min(1).max(25).parse(rawRows);
  const cfg = await getSetting(actor.schoolId, "examination");
  const cat = await catalogue(actor.schoolId);
  const out: StudentImportResult = { created: [], failed: [] };
  for (const r of rows) {
    const name = `${r.firstName} ${r.lastName}`;
    try {
      const cls = cat.classOf(r.className);
      if (!cls) throw new AppError("VALIDATION", `Class "${r.className}" is not one of the school's classes.`);
      const dep = r.department ? cat.departmentOf(r.department) : null;
      if (r.department && !dep) throw new AppError("VALIDATION", `Department "${r.department}" is not one of the school's departments.`);
      const placement = await resolvePlacement(actor.schoolId, cls.id, dep?.id);
      if (!cfg.studentIdAuto && r.studentNumber.length < 2) throw new AppError("VALIDATION", "Student ID is required.");
      const temporaryPassword = generateTemporaryPassword();
      const passwordHash = await hashPassword(temporaryPassword);
      for (let attempt = 0; ; attempt++) {
        const studentNumber = cfg.studentIdAuto ? await nextStudentNumber(actor.schoolId, cfg) : r.studentNumber;
        const email = r.email || `${studentNumber.toLowerCase().replace(/[^a-z0-9]+/g, "-")}@${NO_EMAIL_DOMAIN}`;
        try {
          const made = await createStudentAccount(
            actor.schoolId,
            { firstName: r.firstName, middleName: r.middleName || undefined, lastName: r.lastName, email, phone: r.phone || "", dateOfBirth: r.dateOfBirth || undefined, gender: (r.gender || undefined) as "MALE" | "FEMALE" | undefined, studentNumber, schoolName: undefined, classId: placement.classId, departmentId: placement.departmentId ?? undefined, state: undefined, country: "Nigeria", username: r.username || undefined, password: "", confirmPassword: "", acceptTerms: true },
            placement,
            passwordHash,
            ctx,
          );
          await getDb().update(users).set({ mustChangePassword: true }).where(eq(users.id, made.userId));
          out.created.push({ row: r.row, name, className: cls.name, studentNumber, login: r.email || studentNumber, temporaryPassword });
          break;
        } catch (e) {
          const dupNumber = e instanceof AppError && e.code === "DUPLICATE" && Boolean(e.fields?.studentNumber);
          if (cfg.studentIdAuto && dupNumber && attempt < 5) continue;
          throw e;
        }
      }
    } catch (e) {
      out.failed.push({ row: r.row, name, error: e instanceof AppError ? e.message : "This student could not be created." });
    }
  }
  if (out.created.length) await audit({ actor, action: "students.bulk_imported", entityType: "user", summary: `${out.created.length} student account(s) created from a spreadsheet`, metadata: { created: out.created.length, failed: out.failed.length } }, ctx);
  return out;
}
