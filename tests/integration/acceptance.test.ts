/**
 * Acceptance sequence (§85) exercised end-to-end against a real, migrated
 * PostgreSQL engine through the same service layer the web app and API use.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { and, eq, inArray, sql } from "drizzle-orm";
import JSZip from "jszip";
import * as XLSX from "xlsx";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { freshDb } from "../support/db";
import type { DB } from "@/server/db";
import * as S from "@/server/db/schema";
import type { Actor } from "@/server/audit";
import { AppError } from "@/server/errors";
import { seedPlatform } from "@/server/seed";
import { resolveSessionToken } from "@/server/auth/session";
import { currentTotp } from "@/server/auth/totp";
import {
  beginTotpEnrolment,
  bootstrapSuperAdmin,
  checkOwnerEmail,
  changePassword,
  confirmTotpEnrolment,
  login,
  registerStudent,
  verifyMfa,
  adminSetTemporaryPassword,
} from "@/server/services/auth";
import { activateCode, adjustAccess, generateCodes, getAccessState, listCodes, requireActiveAccess } from "@/server/services/access";
import { createAdmin, listRoles, revokeOtherOwnSessions, setAdminRoles, studentProfileAdmin, updateStudentAdmin, upsertRole } from "@/server/services/people";
import { createQuestion, reviewQuestions } from "@/server/services/questions";
import { createExam, getAttemptView, getStudentResult, listResults, listStudentExams, saveAnswers, setExamStatus, startAttempt, submitAttempt } from "@/server/services/exams";
import { upsertTopic } from "@/server/services/curriculum";
import { completeReading, mySubjects, openLesson, subjectOutline, submitClasswork } from "@/server/services/study";
import { broadcast, listNotifications } from "@/server/services/notifications";
import { listStudentAssignments, submitAssignment, upsertAssignment } from "@/server/services/assignments";
import { listResources, upsertResource } from "@/server/services/resources";
import { commitImport, previewImport } from "@/server/services/imports";
import { approvePackQuestions, commitPack, previewPack, publishPack } from "@/server/services/content-packs";
import { resultSlipPdf, toCsv } from "@/server/services/exports";
import { can } from "@/core/permissions";
import type { AttemptQuestionSnapshot } from "@/core/exam-engine";

const ctx = { ip: "127.0.0.1", userAgent: "vitest" };
let db: DB;
let close: () => Promise<void>;
const STRONG = "Harmattan#2026x";

async function session(token: string) {
  const s = await resolveSessionToken(token);
  if (!s) throw new Error("no session");
  return s;
}

async function expectCode(p: Promise<unknown>, code: string) {
  await expect(p).rejects.toSatisfy((e: unknown) => e instanceof AppError && e.code === code);
}

async function register(tag: string, classCode = "SS2", deptCode = "SCI") {
  const [cls] = await db.select().from(S.classes).where(eq(S.classes.code, classCode));
  const [dep] = await db.select().from(S.departments).where(eq(S.departments.code, deptCode));
  const email = `${tag}@students.test`;
  await registerStudent(
    {
      firstName: "Student",
      lastName: tag.toUpperCase(),
      email,
      phone: "08030000000",
      studentNumber: `PPS/${tag}`,
      classId: cls.id,
      departmentId: dep.id,
      country: "Nigeria",
      password: STRONG,
      confirmPassword: STRONG,
      acceptTerms: true,
    },
    ctx,
  );
  const l = await login({ identifier: email, password: STRONG }, "student", ctx);
  return (await session(l.token)).actor;
}

let superAdmin: Actor;
let qbAdmin: Actor;
let examAdmin: Actor;
let resultAdmin: Actor;
let studentA: Actor;
let studentB: Actor;
let examId: string;
let codeA: string;
let resultA: string;

beforeAll(async () => {
  ({ db, close } = await freshDb());
  process.env.SETUP_TOKEN = "test-setup-token-0123456789";
  process.env.SUPERADMIN_EMAIL = "super@preciousps.test";
  await seedPlatform({ sampleContent: true });
}, 180_000);

afterAll(async () => close());

describe("Super Admin & RBAC", () => {
  it("creates the Super Admin only for the owner e-mail with the setup key, once", async () => {
    // Someone registered a student account with the owner e-mail before setup (e.g. while exploring).
    const [cls] = await db.select().from(S.classes).where(eq(S.classes.code, "SS1"));
    const [dep] = await db.select().from(S.departments).where(eq(S.departments.code, "SCI"));
    const early = { ip: "10.30.0.1", userAgent: "vitest" };
    await registerStudent({ firstName: "Early", lastName: "Owner", email: "Super@preciousps.test", phone: "08030000077", studentNumber: "PPS/EARLY", classId: cls.id, departmentId: dep.id, password: "Old-pass#2026", confirmPassword: "Old-pass#2026", acceptTerms: true }, early);
    const oldSession = await login({ identifier: "super@preciousps.test", password: "Old-pass#2026" }, "student", early);
    await expectCode(checkOwnerEmail("eve@x.test", ctx), "FORBIDDEN");
    expect(await checkOwnerEmail("  SUPER@preciousps.test ", ctx)).toBe("super@preciousps.test");
    // Correct key but not the owner e-mail: rejected. Owner e-mail without names: defaults applied.
    await expectCode(bootstrapSuperAdmin({ setupToken: process.env.SETUP_TOKEN, email: "eve@x.test", password: STRONG, confirmPassword: STRONG }, ctx), "FORBIDDEN");
    await expectCode(bootstrapSuperAdmin({ setupToken: "wrong", firstName: "Ada", lastName: "Okafor", email: "super@preciousps.test", password: STRONG, confirmPassword: STRONG }, ctx), "FORBIDDEN");
    await bootstrapSuperAdmin({ setupToken: process.env.SETUP_TOKEN, firstName: "Ada", lastName: "Okafor", email: "super@preciousps.test", password: STRONG, confirmPassword: STRONG }, ctx);
    await expectCode(bootstrapSuperAdmin({ setupToken: process.env.SETUP_TOKEN, email: "super@preciousps.test", password: STRONG, confirmPassword: STRONG }, ctx), "CONFLICT");
    // The setup key took over that account: it is now the Super Admin; student profile and old sessions are gone.
    const [u] = await db.select().from(S.users).where(sql`lower(${S.users.email}) = 'super@preciousps.test'`);
    expect(u.userType).toBe("SUPER_ADMIN");
    expect(await db.select().from(S.students).where(eq(S.students.userId, u.id))).toHaveLength(0);
    expect(await resolveSessionToken(oldSession.token)).toBeNull();
    await expectCode(login({ identifier: "super@preciousps.test", password: "Old-pass#2026" }, "backend", early), "INVALID_CREDENTIALS");
    expect(u.passwordHash).toMatch(/^\$argon2id\$/);
    expect(u.passwordHash).not.toContain(STRONG);
  });

  it("secures the Super Admin with 2FA and requires it at login", async () => {
    let l = await login({ identifier: "super@preciousps.test", password: STRONG }, "backend", ctx);
    let s = await session(l.token);
    superAdmin = s.actor;
    const secret = await beginTotpEnrolment(superAdmin);
    const recovery = await confirmTotpEnrolment(superAdmin, currentTotp(secret), ctx);
    expect(recovery).toHaveLength(10);
    l = await login({ identifier: "super@preciousps.test", password: STRONG }, "backend", ctx);
    expect(l.mfaPending).toBe(true);
    s = await session(l.token);
    await expectCode(verifyMfa(s.sessionId, s.user.id, "000000", ctx), "INVALID_CREDENTIALS");
    await verifyMfa(s.sessionId, s.user.id, recovery[0], ctx); // recovery code works once
    expect((await session(l.token)).mfaPending).toBe(false);
    const l2 = await login({ identifier: "super@preciousps.test", password: STRONG }, "backend", ctx);
    const s2 = await session(l2.token);
    await expectCode(verifyMfa(s2.sessionId, s2.user.id, recovery[0], ctx), "INVALID_CREDENTIALS");
  });

  it("signs out every other device but keeps the current one", async () => {
    const a = await login({ identifier: "super@preciousps.test", password: STRONG }, "backend", ctx);
    const b = await login({ identifier: "super@preciousps.test", password: STRONG }, "backend", ctx);
    const current = await session(b.token);
    expect(await revokeOtherOwnSessions(current.actor, current.sessionId, ctx)).toBeGreaterThanOrEqual(1);
    expect(await resolveSessionToken(a.token)).toBeNull();
    expect(await resolveSessionToken(b.token)).not.toBeNull();
  });

  it("students cannot sign in through the backend portal and vice-versa", async () => {
    await expectCode(login({ identifier: "super@preciousps.test", password: STRONG }, "student", ctx), "INVALID_CREDENTIALS");
  });

  it("creates three administrators with scoped permissions", async () => {
    const roles = await listRoles(superAdmin.schoolId);
    const role = (k: string) => roles.find((r) => r.key === k)!.id;
    const mk = async (email: string, key: string) => {
      const { id, temporaryPassword } = await createAdmin(superAdmin, { firstName: "Admin", lastName: key, email, roleIds: [role(key)] }, ctx);
      expect(temporaryPassword).toBeTruthy();
      const l = await login({ identifier: email, password: temporaryPassword! }, "backend", ctx);
      expect(l.mustChangePassword).toBe(true);
      const s = await session(l.token);
      await changePassword(s.actor, { currentPassword: temporaryPassword, newPassword: STRONG, confirmPassword: STRONG }, s.sessionId, ctx);
      return { ...s.actor, id } as Actor;
    };
    qbAdmin = await mk("qb@preciousps.test", "question_bank_admin");
    examAdmin = await mk("exam@preciousps.test", "exam_admin");
    resultAdmin = await mk("results@preciousps.test", "student_result_admin");
    expect(can(qbAdmin, "questions.review")).toBe(true);
    expect(can(qbAdmin, "exams.manage")).toBe(false);
    expect(can(examAdmin, "exams.publish")).toBe(true);
    expect(can(resultAdmin, "codes.generate")).toBe(true);
    expect(can(resultAdmin, "questions.create")).toBe(false);
  });

  it("ordinary admins cannot reach Super Admin functionality", async () => {
    await expectCode(createAdmin(qbAdmin, { firstName: "X", lastName: "Y", email: "x@y.test", roleIds: [] }, ctx), "FORBIDDEN");
    await expectCode(upsertRole(examAdmin, null, { name: "God mode", permissions: ["super.settings"] }, ctx), "FORBIDDEN");
    await expectCode(setAdminRoles(resultAdmin, qbAdmin.id, [], ctx), "FORBIDDEN");
    expect(can(resultAdmin, "super.settings")).toBe(false);
    const [ev] = await db.select().from(S.securityEvents).where(eq(S.securityEvents.type, "PRIVILEGE_ESCALATION")).limit(1);
    expect(ev).toBeTruthy();
    // Super-only permissions can never be smuggled into a role.
    const r = await upsertRole(superAdmin, null, { name: "Custom", permissions: ["questions.view", "super.settings"] }, ctx);
    const perms = await db.select().from(S.rolePermissions).where(eq(S.rolePermissions.roleId, r.id));
    expect(perms.map((p) => p.permissionKey)).toEqual(["questions.view"]);
  });
});

describe("Curriculum, question bank and examination set-up", () => {
  it("creates curriculum and questions; only approved questions enter pools", async () => {
    const [mth] = await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH"));
    const topic = await upsertTopic(qbAdmin, null, { subjectId: mth.id, title: "Logic", status: "PUBLISHED" }, ctx);
    const q = await createQuestion(
      qbAdmin,
      { subjectId: mth.id, topicId: topic.id, stem: "If p is true and q is false, what is the truth value of p ∧ q?", options: [{ text: "True" }, { text: "False", isCorrect: true }, { text: "Undefined" }, { text: "Both" }], status: "DRAFT", copyrightStatus: "ORIGINAL" },
      ctx,
    );
    expect(q.status).toBe("DRAFT");
    await reviewQuestions(qbAdmin, [q.id], "APPROVED", undefined, ctx);
    const [after] = await db.select().from(S.questions).where(eq(S.questions.id, q.id));
    expect(after.status).toBe("APPROVED");
    await expect(createQuestion(qbAdmin, { subjectId: mth.id, stem: "If p is true and q is false, what is the truth value of p ∧ q?", options: [{ text: "True" }, { text: "False", isCorrect: true }, { text: "Undefined" }, { text: "Both" }] }, ctx)).rejects.toThrow(/already exists/);
  });

  it("creates and publishes the 2025 Mathematics examination with 40 randomised questions", async () => {
    const [mth] = await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH"));
    const e = await createExam(examAdmin, { title: "2025 Mathematics Examination", subjectId: mth.id, year: 2025, examType: "SCHOOL_EXAM", questionCount: 40, durationMinutes: 60, passMark: 50, randomizeQuestions: true, randomizeOptions: true, maxAttempts: 1, requiresAccess: true }, ctx);
    await setExamStatus(examAdmin, e.id, "PUBLISHED", ctx);
    examId = e.id;
  });
});

describe("Access codes", () => {
  it("generates UNUSED codes and binds a code to exactly one student", async () => {
    const { codes } = await generateCodes(resultAdmin, { count: 3 }, ctx);
    codeA = codes[0];
    const list = await listCodes(superAdmin, { status: "UNUSED" });
    expect(list.total).toBeGreaterThanOrEqual(3);
    studentA = await register("a");
    studentB = await register("b");
    await expectCode(startAttempt(studentA, examId, null, ctx), "ACCESS_REQUIRED");
    const p = await activateCode(studentA, codeA.toLowerCase().replace(/-/g, " "), ctx);
    expect(Math.round((p.currentExpiresAt.getTime() - p.activatedAt.getTime()) / 86_400_000)).toBe(30);
    const state = await getAccessState(studentA.id);
    expect(state.status).toBe("ACTIVE");
    expect(state.remaining!.days).toBe(29);
    const [row] = await db.select().from(S.activationCodes).where(eq(S.activationCodes.activatedBy, studentA.id));
    expect(row.status).toBe("ACTIVE");
    expect(row.codeEnc).not.toContain(codeA);
  });

  it("rejects Student B using Student A's code and records the attempt", async () => {
    await expectCode(activateCode(studentB, codeA, ctx), "INVALID_CODE");
    const ev = await db.select().from(S.securityEvents).where(eq(S.securityEvents.type, "CODE_REUSE_ATTEMPT"));
    expect(ev.length).toBe(1);
    await expectCode(activateCode(studentB, "PPS-2222-3333-4444", ctx), "INVALID_CODE");
  });

  it("prevents a race: the same code activated concurrently succeeds once", async () => {
    const { codes } = await generateCodes(superAdmin, { count: 1 }, ctx);
    const c = await register("c");
    const d = await register("d");
    const res = await Promise.allSettled([activateCode(c, codes[0], ctx), activateCode(d, codes[0], ctx)]);
    expect(res.filter((r) => r.status === "fulfilled")).toHaveLength(1);
  });

  it("blocks a second simultaneously active code", async () => {
    const { codes } = await generateCodes(superAdmin, { count: 1 }, ctx);
    await expectCode(activateCode(studentA, codes[0], ctx), "CONFLICT");
  });
});

describe("CBT engine", () => {
  let attemptId: string;
  it("assigns a random, immutable set and recovers after refresh", async () => {
    const { attemptId: id, resumed } = await startAttempt(studentA, examId, "11111111-1111-4111-8111-111111111111", ctx);
    expect(resumed).toBe(false);
    attemptId = id;
    const v1 = await getAttemptView(studentA, id, ctx);
    if (v1.status !== "IN_PROGRESS") throw new Error("expected live attempt");
    expect(v1.questions).toHaveLength(40);
    expect(JSON.stringify(v1)).not.toMatch(/correctOptionIds|isCorrect|explanation/);
    // "Refresh": starting again resumes the same attempt with the same questions.
    const again = await startAttempt(studentA, examId, "11111111-1111-4111-8111-111111111111", ctx);
    expect(again).toEqual({ attemptId: id, resumed: true });
    const v2 = await getAttemptView(studentA, id, ctx);
    if (v2.status !== "IN_PROGRESS") throw new Error();
    expect(v2.questions.map((q) => q.questionId)).toEqual(v1.questions.map((q) => q.questionId));
    expect(v2.questions[0].options).toEqual(v1.questions[0].options);
  });

  it("gives Student B a different combination", async () => {
    const [code] = (await generateCodes(superAdmin, { count: 1 }, ctx)).codes;
    await activateCode(studentB, code, ctx);
    const { attemptId: b } = await startAttempt(studentB, examId, null, ctx);
    const a = await db.select({ q: S.attemptQuestions.questionId }).from(S.attemptQuestions).where(eq(S.attemptQuestions.attemptId, attemptId));
    const bq = await db.select({ q: S.attemptQuestions.questionId }).from(S.attemptQuestions).where(eq(S.attemptQuestions.attemptId, b));
    const setA = new Set(a.map((x) => x.q));
    expect(bq.filter((x) => setA.has(x.q)).length).toBeLessThan(40);
  });

  it("rejects manipulated payloads and foreign sessions", async () => {
    const qs = await db.select().from(S.attemptQuestions).where(eq(S.attemptQuestions.attemptId, attemptId));
    const other = await db.select().from(S.questionOptions).limit(1);
    await expectCode(saveAnswers(studentA, attemptId, { answers: [{ attemptQuestionId: qs[0].id, response: { optionId: other[0].id } }] }, ctx), "VALIDATION");
    await expectCode(saveAnswers(studentB, attemptId, { answers: [] }, ctx), "NOT_FOUND"); // IDOR
    await expectCode(saveAnswers(studentA, attemptId, { clientSessionId: "22222222-2222-4222-8222-222222222222", answers: [] }, ctx), "CONFLICT");
  });

  it("scores on the server: 30 correct, 5 wrong, 5 blank", async () => {
    const qs = await db.select().from(S.attemptQuestions).where(eq(S.attemptQuestions.attemptId, attemptId));
    const answers = qs.slice(0, 35).map((q, i) => {
      const s = q.snapshot as AttemptQuestionSnapshot;
      if (s.type === "NUMERIC") return { attemptQuestionId: q.id, response: { value: i < 30 ? String(s.answerSpec!.value) : "999" }, responseMs: 20_000 };
      const wrong = s.options.find((o) => !s.correctOptionIds.includes(o.id))!;
      return { attemptQuestionId: q.id, response: { optionId: i < 30 ? s.correctOptionIds[0] : wrong.id }, flagged: i === 3, responseMs: 20_000, score: 100 };
    });
    await saveAnswers(studentA, attemptId, { clientSessionId: "11111111-1111-4111-8111-111111111111", answers }, ctx);
    const r = await submitAttempt(studentA, attemptId, ctx);
    expect(r).toMatchObject({ correctCount: 30, incorrectCount: 5, unansweredCount: 5, percentage: 75, grade: "A", passed: true, score: 30, totalMarks: 40 });
    resultA = r.id;
    // Idempotent: second submit returns the same result.
    expect((await submitAttempt(studentA, attemptId, ctx)).id).toBe(r.id);
    await expectCode(saveAnswers(studentA, attemptId, { answers: [] }, ctx), "ATTEMPT_CLOSED");
    await expectCode(startAttempt(studentA, examId, null, ctx), "ATTEMPT_LIMIT");
  });

  it("student can view own result; another student cannot", async () => {
    const mine = await getStudentResult(studentA, resultA, ctx);
    expect(mine.visible).toBe(true);
    await expectCode(getStudentResult(studentB, resultA, ctx), "NOT_FOUND");
    const idor = await db.select().from(S.securityEvents).where(eq(S.securityEvents.type, "IDOR_ATTEMPT"));
    expect(idor.length).toBeGreaterThanOrEqual(2);
  });

  it("auto-submits on server timeout, ignoring the browser clock", async () => {
    const [bAttempt] = await db.select().from(S.examinationAttempts).where(and(eq(S.examinationAttempts.userId, studentB.id), eq(S.examinationAttempts.status, "IN_PROGRESS")));
    await db.execute(sql`UPDATE examination_attempts SET started_at = now() - interval '2 hours', deadline_at = now() - interval '1 hour' WHERE id = ${bAttempt.id}`);
    await expectCode(saveAnswers(studentB, bAttempt.id, { answers: [] }, ctx), "ATTEMPT_CLOSED");
    const [after] = await db.select().from(S.examinationAttempts).where(eq(S.examinationAttempts.id, bAttempt.id));
    expect(after.status).toBe("AUTO_SUBMITTED");
    expect(after.submissionMethod).toBe("TIMEOUT");
  });
});

describe("Access administration", () => {
  it("extends, expires and renews access with a full audit trail", async () => {
    const [p] = await db.select().from(S.studentAccessPeriods).where(eq(S.studentAccessPeriods.userId, studentA.id));
    await adjustAccess(superAdmin, p.id, { action: "EXTEND", days: 15, reason: "Scholarship extension" }, ctx);
    expect((await getAccessState(studentA.id)).remaining!.days).toBe(44);
    await expect(adjustAccess(superAdmin, p.id, { action: "EXTEND", days: 1, reason: "x" }, ctx)).rejects.toThrow(/at least|>=3/); // a reason is mandatory
    await adjustAccess(superAdmin, p.id, { action: "END", reason: "Simulated expiry" }, ctx);
    const s = await getAccessState(studentA.id);
    expect(s.status).toBe("ENDED");
    expect(s.message).toContain("08169267383");
    await expectCode(requireActiveAccess(studentA.id), "ACCESS_EXPIRED");
    await expectCode(openLesson(studentA, (await db.select().from(S.lessons).limit(1))[0].id, ctx), "ACCESS_EXPIRED");
    // Historical result remains visible after expiry.
    expect((await getStudentResult(studentA, resultA, ctx)).visible).toBe(true);
    const [fresh] = (await generateCodes(superAdmin, { count: 1, durationDays: 60 }, ctx)).codes;
    const np = await activateCode(studentA, fresh, ctx);
    expect(np.durationDays).toBe(60);
    expect((await getAccessState(studentA.id)).status).toBe("ACTIVE");
    const ext = await db.select().from(S.accessExtensions).where(eq(S.accessExtensions.periodId, p.id));
    expect(ext.map((e) => e.action)).toEqual(expect.arrayContaining(["EXTEND", "END"]));
    const logs = await db.select({ a: S.auditLogs.action }).from(S.auditLogs);
    const actions = new Set(logs.map((l) => l.a));
    for (const a of ["codes.generated", "codes.activated", "exam.started", "exam.submitted", "access.extend", "access.end", "question.approved", "rbac.admin_created", "security.2fa_enabled"]) expect(actions).toContain(a);
    await expect(db.execute(sql`DELETE FROM audit_logs`)).rejects.toSatisfy((e: unknown) => /append-only/.test(String((e as { cause?: Error }).cause?.message ?? (e as Error).message)));
  });

  it("Super Admin sees profile data but never a password", async () => {
    const prof = await studentProfileAdmin(superAdmin, studentA.id);
    expect(prof.email).toBe("a@students.test");
    expect(JSON.stringify(prof)).not.toMatch(/argon2|passwordHash|Harmattan/);
    const { temporaryPassword } = await adminSetTemporaryPassword(superAdmin, studentB.id, "Student forgot password", ctx);
    const l = await login({ identifier: "b@students.test", password: temporaryPassword }, "student", ctx);
    expect(l.mustChangePassword).toBe(true);
  });

  it("exports results and produces a PDF result slip", async () => {
    const list = await listResults(superAdmin, {});
    expect(list.rows.length).toBeGreaterThanOrEqual(2);
    expect(toCsv(list.rows as unknown as Record<string, unknown>[])).toContain("studentName");
    const { pdf } = await resultSlipPdf(resultA, superAdmin.schoolId);
    expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
  });
});

describe("Study Centre, assignments and resources", () => {
  it("keeps lessons scoped to the student class, and completes one via auto-marked classwork", async () => {
    const [ss1] = await db.select().from(S.lessons).where(eq(S.lessons.title, "Laws of Indices"));
    await expectCode(openLesson(studentA, ss1.id, ctx), "FORBIDDEN");
    const [lesson] = await db.select().from(S.lessons).where(eq(S.lessons.title, "Solving Quadratic Equations by Factorisation"));
    const view = await openLesson(studentA, lesson.id, ctx);
    expect(view.classwork.length).toBeGreaterThan(0);
    const answers: Record<string, unknown> = {};
    for (const q of view.classwork) {
      const correct = await db.select().from(S.questionOptions).where(and(eq(S.questionOptions.questionId, q.questionId), eq(S.questionOptions.isCorrect, true)));
      answers[q.questionId] = { optionId: correct[0].id };
    }
    const r = await submitClasswork(studentA, lesson.id, { answers }, ctx);
    expect(r).toMatchObject({ passed: true, percentage: 100 });
    const [p] = await db.select().from(S.learningProgress).where(and(eq(S.learningProgress.userId, studentA.id), eq(S.learningProgress.lessonId, lesson.id)));
    expect(p.status).toBe("COMPLETED");
  });

  it("creates, submits and marks an assignment", async () => {
    const [mth] = await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH"));
    const qs = await db.select({ id: S.questions.id }).from(S.questions).where(and(eq(S.questions.subjectId, mth.id), eq(S.questions.status, "APPROVED"), eq(S.questions.type, "MCQ"))).limit(4);
    const a = await upsertAssignment(superAdmin, null, { title: "Weekend practice", subjectId: mth.id, questionIds: qs.map((q) => q.id), status: "PUBLISHED", attemptLimit: 1 }, ctx);
    const answers: Record<string, unknown> = {};
    for (const q of qs.slice(0, 2)) {
      const [c] = await db.select().from(S.questionOptions).where(and(eq(S.questionOptions.questionId, q.id), eq(S.questionOptions.isCorrect, true)));
      answers[q.id] = { optionId: c.id };
    }
    const r = await submitAssignment(studentA, a.id, { answers }, ctx);
    expect(r).toMatchObject({ percentage: 50, passed: true, attemptNumber: 1 });
    await expectCode(submitAssignment(studentA, a.id, { answers }, ctx), "ATTEMPT_LIMIT");
  });

  it("adds a validated external resource visible in the Resource Centre", async () => {
    await expect(upsertResource(superAdmin, null, { title: "Bad", resourceType: "WEBSITE", url: "javascript:alert(1)" }, ctx)).rejects.toThrow();
    await expect(upsertResource(superAdmin, null, { title: "Local", resourceType: "WEBSITE", url: "https://127.0.0.1/x" }, ctx)).rejects.toThrow();
    const r = await upsertResource(superAdmin, null, { title: "Quadratics video", resourceType: "VIDEO", url: "https://www.youtube.com/watch?v=abc", status: "PUBLISHED" }, ctx);
    expect(r.platform).toBe("YouTube");
    const list = await listResources(studentA.schoolId, { forUserId: studentA.id });
    expect(list.some((x) => x.r.id === r.id)).toBe(true);
  });
});

async function makeDocx(text: string) {
  const zip = new JSZip();
  const paras = text
    .split("\n")
    .map((l) => `<w:p><w:r><w:t xml:space="preserve">${l.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</w:t></w:r></w:p>`)
    .join("");
  zip.file("[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`);
  zip.file("_rels/.rels", `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`);
  zip.file("word/document.xml", `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${paras}</w:body></w:document>`);
  return zip.generateAsync({ type: "nodebuffer" });
}

describe("Question imports", () => {
  it("imports Word questions using the ★ convention", async () => {
    const [eng] = await db.select().from(S.subjects).where(eq(S.subjects.code, "ENG"));
    const docx = await makeDocx(
      ["1. Which word is a noun?", "A. quickly", "★ B. happiness", "C. run", "D. blue", "Explanation: 'Happiness' names a feeling.", "", "2. Pick the verb.", "★A. jump", "★B. table", "C. red", "", "3. Pick the adjective.", "A. sing", "B. slowly", "C. tall", "D. and"].join("\n"),
    );
    const { importId, report } = await previewImport(superAdmin, { name: "english.docx", bytes: docx }, { subjectId: eng.id, copyrightStatus: "TEACHER_AUTHORED" }, ctx);
    expect(report.items).toHaveLength(3);
    expect(report.items[0].errors).toEqual([]);
    expect(report.items[0].options.find((o) => o.isCorrect)?.text).toBe("happiness");
    expect(report.items[1].errors.join()).toMatch(/more than one/i);
    expect(report.items[2].errors.join()).toMatch(/No option is marked/);
    const res = await commitImport(superAdmin, importId, "ALL_VALID", ctx);
    expect(res.imported).toBe(1);
    const [q] = await db.select().from(S.questions).where(eq(S.questions.importId, importId));
    expect(q.status).toBe("PENDING_REVIEW");
    expect(q.stem).not.toContain("★");
  });

  it("validates and imports Excel rows", async () => {
    const ws = XLSX.utils.json_to_sheet([
      { Subject: "Economics", Class: "SS2", Question: "Scarcity means…", A: "limited resources relative to wants", B: "unlimited resources", C: "free goods", D: "barter", "Correct Answer": "A", Difficulty: "EASY", "Copyright Status": "ORIGINAL" },
      { Subject: "Astrology", Question: "", A: "x", "Correct Answer": "E" },
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Questions");
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
    const { importId, report } = await previewImport(superAdmin, { name: "bank.xlsx", bytes: buf }, {}, ctx);
    expect(report.items[0].errors).toEqual([]);
    expect(report.items[1].errors.length).toBeGreaterThanOrEqual(3);
    expect((await commitImport(superAdmin, importId, "ALL_VALID", ctx)).imported).toBe(1);
  });

  it("imports PDF questions into PENDING_REVIEW", async () => {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage([595, 842]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    ["1. What is the chemical symbol for sodium?", "A. S", "B. Na", "C. So", "D. Sd"].forEach((l, i) => page.drawText(l, { x: 50, y: 780 - i * 20, size: 12, font }));
    const bytes = Buffer.from(await pdf.save());
    const [chm] = await db.select().from(S.subjects).where(eq(S.subjects.code, "CHM"));
    const { report } = await previewImport(superAdmin, { name: "chem.pdf", bytes }, { subjectId: chm.id }, ctx);
    // No ★ in this PDF, so the importer must refuse to guess.
    expect(report.items[0].errors.join()).toMatch(/No option is marked/);
  });

  it("rejects disguised and macro-laden uploads", async () => {
    await expect(previewImport(superAdmin, { name: "evil.docx", bytes: Buffer.from("MZ this is an exe") }, {}, ctx)).rejects.toThrow(/does not match/);
    const zip = new JSZip();
    zip.file("word/document.xml", "<w:document/>");
    zip.file("word/vbaProject.bin", "macro");
    await expect(previewImport(superAdmin, { name: "macro.docx", bytes: await zip.generateAsync({ type: "nodebuffer" }) }, {}, ctx)).rejects.toThrow(/macros/);
    const mal = await db.select().from(S.securityEvents).where(eq(S.securityEvents.type, "MALICIOUS_UPLOAD"));
    expect(mal.length).toBeGreaterThanOrEqual(2);
  });
});

describe("Authentication hardening", () => {
  it("locks an account after repeated failures without revealing whether it exists", async () => {
    for (let i = 0; i < 5; i++) await expectCode(login({ identifier: "c@students.test", password: "Wrong-pass-123!" }, "student", ctx), "INVALID_CREDENTIALS");
    await expectCode(login({ identifier: "c@students.test", password: STRONG }, "student", { ...ctx, ip: "10.0.0.9" }), "ACCOUNT_LOCKED");
    await expectCode(login({ identifier: "nobody@x.test", password: STRONG }, "student", { ...ctx, ip: "10.0.0.8" }), "INVALID_CREDENTIALS");
  });

  it("rejects weak registration passwords", async () => {
    const [cls] = await db.select().from(S.classes).limit(1);
    const [dep] = await db.select().from(S.departments).limit(1);
    await expect(
      registerStudent({ firstName: "W", lastName: "K", email: "weak@x.test", phone: "08030000001", studentNumber: "W1", classId: cls.id, departmentId: dep.id, password: "password12", confirmPassword: "password12", acceptTerms: true }, { ip: "10.9.9.9" }),
    ).rejects.toThrow();
  });
});

describe("Junior Secondary (JSS1–JSS3)", () => {
  const jssCtx = { ip: "10.20.0.1", userAgent: "vitest" };
  const classId = async (code: string) => (await db.select().from(S.classes).where(eq(S.classes.code, code)))[0].id;
  const deptId = async (code: string) => (await db.select().from(S.departments).where(eq(S.departments.code, code)))[0].id;
  const registerAt = async (tag: string, classCode: string, deptCode: string | undefined, ip: string) => {
    const email = `${tag}@students.test`;
    await registerStudent(
      { firstName: "Junior", lastName: tag.replace(/[^a-z]/gi, "").toUpperCase(), email, phone: "08030000009", studentNumber: `PPS/${tag}`, classId: await classId(classCode), departmentId: deptCode ? await deptId(deptCode) : "", password: STRONG, confirmPassword: STRONG, acceptTerms: true },
      { ...jssCtx, ip },
    );
    const l = await login({ identifier: email, password: STRONG }, "student", { ...jssCtx, ip });
    return (await session(l.token)).actor;
  };
  let jss2: Actor;
  let jss3: Actor;
  let ss: Actor;

  it("seeds JSS1–JSS3, one Junior Secondary department and the Basic Education subjects", async () => {
    const cls = await db.select().from(S.classes);
    expect(cls.filter((c) => c.level === "JUNIOR_SECONDARY").map((c) => c.code).sort()).toEqual(["JSS1", "JSS2", "JSS3"]);
    const [jssDept] = await db.select().from(S.departments).where(eq(S.departments.code, "JSS"));
    expect(jssDept.level).toBe("JUNIOR_SECONDARY");
    const [sci] = await db.select().from(S.departments).where(eq(S.departments.code, "SCI"));
    expect(sci.level).toBe("SENIOR_SECONDARY");
    const codes = (await db.select({ code: S.subjects.code }).from(S.subjects).innerJoin(S.departmentSubjects, eq(S.departmentSubjects.subjectId, S.subjects.id)).where(eq(S.departmentSubjects.departmentId, jssDept.id))).map((r) => r.code);
    expect(codes).toEqual(expect.arrayContaining(["MTH", "ENG", "BSC", "BTE", "SOS", "CIV"]));
    expect(codes).not.toContain("PHY");
  });

  it("registers JSS students without a department choice and rejects mismatched placements", async () => {
    jss2 = await registerAt("jss2a", "JSS2", undefined, "10.20.0.2");
    const [row] = await db.select().from(S.students).where(eq(S.students.userId, jss2.id));
    expect(row.departmentId).toBe(await deptId("JSS"));
    await expectCode(registerAt("jssbad", "JSS1", "SCI", "10.20.0.3"), "VALIDATION");
    await expectCode(registerAt("ssbad", "SS1", "JSS", "10.20.0.4"), "VALIDATION");
    await expectCode(registerAt("ssnodept", "SS1", undefined, "10.20.0.5"), "VALIDATION");
    jss3 = await registerAt("jss3a", "JSS3", undefined, "10.20.0.6");
    ss = await registerAt("ss2x", "SS2", "SCI", "10.20.0.7");
  });

  it("shows each section only its own examinations", async () => {
    const jssTitles = (await listStudentExams(jss2)).map((e) => e.title);
    expect(jssTitles).toEqual(expect.arrayContaining(["JSS Mathematics Practice Test", "Basic Science Practice Test"]));
    expect(jssTitles).not.toContain("Mathematics Mock Examination (2025)");
    expect(jssTitles).not.toContain("JAMB UTME Mathematics Practice");
    expect(jssTitles).not.toContain("BECE Mathematics Mock (JSS3)"); // JSS3 only
    expect((await listStudentExams(jss3)).map((e) => e.title)).toContain("BECE Mathematics Mock (JSS3)");
    const ssTitles = (await listStudentExams(ss)).map((e) => e.title);
    expect(ssTitles).toContain("Mathematics Mock Examination (2025)");
    expect(ssTitles.some((t) => /JSS|BECE|Basic Science/.test(t))).toBe(false);
  });

  it("draws JSS exams only from JSS questions and blocks cross-section attempts", async () => {
    const [code] = (await generateCodes(superAdmin, { count: 1 }, ctx)).codes;
    await activateCode(jss2, code, jssCtx);
    const [exam] = await db.select().from(S.examinations).where(eq(S.examinations.title, "JSS Mathematics Practice Test"));
    const { attemptId } = await startAttempt(jss2, exam.id, crypto.randomUUID(), jssCtx);
    const picked = await db.select({ level: S.questions.level }).from(S.attemptQuestions).innerJoin(S.questions, eq(S.questions.id, S.attemptQuestions.questionId)).where(eq(S.attemptQuestions.attemptId, attemptId));
    expect(picked).toHaveLength(15);
    expect(picked.every((q) => q.level === "JUNIOR_SECONDARY" || q.level === null)).toBe(true); // "all sections" questions are allowed; Senior Secondary ones never are
    const [ssExam] = await db.select().from(S.examinations).where(eq(S.examinations.title, "Mathematics Mock Examination (2025)"));
    await expectCode(startAttempt(jss2, ssExam.id, crypto.randomUUID(), jssCtx), "FORBIDDEN");
    await expectCode(startAttempt(ss, exam.id, crypto.randomUUID(), jssCtx), "FORBIDDEN");
  });

  it("keeps the Study Centre, assignments and resources within the student's section", async () => {
    const subjects = (await mySubjects(jss2)).map((s) => s.code);
    expect(subjects).toEqual(expect.arrayContaining(["BSC", "SOS", "MTH"]));
    expect(subjects).not.toContain("PHY");
    const mth = (await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH")))[0];
    const outline = await subjectOutline(jss2, mth.id);
    expect(outline.topics.every((t) => t.className === null || t.className.startsWith("JSS"))).toBe(true);
    const [ssLesson] = await db.select({ id: S.lessons.id }).from(S.lessons).where(eq(S.lessons.title, "Laws of Indices"));
    await expectCode(openLesson(jss2, ssLesson.id, jssCtx), "FORBIDDEN");
    await expectCode(completeReading(jss2, ssLesson.id, jssCtx), "FORBIDDEN");
    const titles = (await listResources(jss2.schoolId, { forUserId: jss2.id })).map((r) => r.r.title);
    expect(titles).toContain("Khan Academy — Arithmetic");
    expect(titles).not.toContain("Khan Academy — Biology");
    expect((await listStudentAssignments(ss)).some((a) => a.title.includes("JSS1"))).toBe(false);
  });

  it("targets announcements by section", async () => {
    await broadcast(superAdmin, { category: "ANNOUNCEMENT", title: "JSS assembly", body: "All JSS students meet in the hall.", audience: { level: "JUNIOR_SECONDARY" } }, ctx);
    expect((await listNotifications(jss2.id, jss2.schoolId)).some((n) => n.title === "JSS assembly")).toBe(true);
    expect((await listNotifications(ss.id, ss.schoolId)).some((n) => n.title === "JSS assembly")).toBe(false);
  });

  it("promotes JSS3 to SS1 only with a Senior Secondary department", async () => {
    const [u] = await db.select().from(S.users).where(eq(S.users.id, jss3.id));
    const [st] = await db.select().from(S.students).where(eq(S.students.userId, jss3.id));
    const base = { firstName: u.firstName, lastName: u.lastName, email: u.email, studentNumber: st.studentNumber };
    await expectCode(updateStudentAdmin(superAdmin, jss3.id, { ...base, classId: await classId("SS1"), departmentId: st.departmentId }, ctx), "VALIDATION");
    await expectCode(updateStudentAdmin(superAdmin, jss3.id, { ...base, classId: await classId("SS1") }, ctx), "VALIDATION");
    await updateStudentAdmin(superAdmin, jss3.id, { ...base, classId: await classId("SS1"), departmentId: await deptId("ART") }, ctx);
    expect((await listStudentExams(jss3)).map((e) => e.title)).not.toContain("BECE Mathematics Mock (JSS3)");
  });
});

describe("Content packs", () => {
  const packCtx = { ip: "10.40.0.1", userAgent: "vitest" };
  const book = (questionsTopic = "Colour and design") => {
    const wb = XLSX.utils.book_new();
    const add = (name: string, rows: unknown[][]) => XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), name);
    add("Pack", [["Field", "Value"], ["Subject", "CCA"], ["Version", "1.0"]]);
    add("Scheme of Work", [
      ["Class", "Term", "Week", "Topic", "Subtopics", "Learning Objectives", "Mandatory"],
      ["JSS1", "1", "1", "Colour and design", "Primary colours; Secondary colours", "Name the primary colours\nMix secondary colours", "Y"],
      ["JSS1", "1", "2", "Drawing tools", "Pencils; Erasers", "Use drawing tools safely", "Y"],
    ]);
    add("Lessons", [
      ["Class", "Topic", "Lesson Title", "Summary", "Minutes", "Notes", "Worked Examples", "Video URL"],
      ["JSS1", "Colour and design", "Understanding colour", "Primary and secondary colours.", "20", "## Primary colours\nRed, yellow and blue.", "Red + yellow = orange.", ""],
    ]);
    add("Questions", [
      ["Subject", "Class", "Department", "Year", "Exam Type", "Topic", "Subtopic", "Question", "A", "B", "C", "D", "Correct Answer", "Explanation", "Marks", "Difficulty", "Source", "Copyright Status"],
      ["", "JSS1", "", "", "PRACTICE", questionsTopic, "Primary colours", "Which of these is a primary colour?", "Green", "Blue", "Orange", "Purple", "B", "Blue is a primary colour.", "1", "EASY", "", "ORIGINAL"],
      ["", "JSS1", "", "", "PRACTICE", "Colour and design", "Secondary colours", "Mixing red and yellow gives ___", "orange", "green", "purple", "brown", "A", "Red + yellow = orange.", "1", "EASY", "", "ORIGINAL"],
      ["", "JSS1", "", "", "PRACTICE", "Drawing tools", "", "Which tool removes pencil marks?", "Ruler", "Eraser", "Brush", "Compass", "B", "An eraser rubs out pencil marks.", "1", "EASY", "", "ORIGINAL"],
    ]);
    add("Exams", [["Title", "Class", "Exam Type", "Classes Covered", "Terms Covered", "Questions", "Minutes", "Pass Mark", "Max Attempts", "Year", "Description"], ["JSS1 CCA — First Term Test", "JSS1", "SCHOOL_EXAM", "JSS1", "1", "3", "10", "50", "2", "", "Term 1 topics"]]);
    add("Assignments", [["Title", "Class", "Kind", "Topics", "Questions", "Attempts", "Pass Mark", "Instructions"], ["JSS1 CCA — Homework 1", "JSS1", "ASSIGNMENT", "Colour and design; Drawing tools", "3", "2", "50", "Answer all questions."]]);
    return { name: "CCA-pack.xlsx", bytes: XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer };
  };
  let packId: string;
  let jss1: Actor;

  it("rejects a pack whose rows do not match its scheme of work", async () => {
    const bad = await previewPack(superAdmin, book("Sculpture"), packCtx);
    expect(bad.report.errors.some((e) => /not in the scheme of work/.test(e.message))).toBe(true);
    await expectCode(commitPack(superAdmin, bad.importId, packCtx), "VALIDATION");
  });

  it("imports topics, lessons, questions, exams and assignments without exposing them", async () => {
    const p = await previewPack(superAdmin, book(), packCtx);
    expect(p.report.errors).toEqual([]);
    expect(p.report.counts).toMatchObject({ topics: 2, subtopics: 4, lessons: 1, questions: 3, exams: 1, assignments: 1 });
    packId = p.importId;
    const c = await commitPack(superAdmin, packId, packCtx);
    expect(c.questionIds).toHaveLength(3);
    const [t] = await db.select().from(S.topics).where(eq(S.topics.title, "Colour and design"));
    expect(t.level).toBe("JUNIOR_SECONDARY");
    expect(t.termId).not.toBeNull();
    const qs = await db.select().from(S.questions).where(inArray(S.questions.id, c.questionIds));
    expect(qs.every((q) => q.status === "PENDING_REVIEW" && q.level === "JUNIOR_SECONDARY")).toBe(true);
    const [lesson] = await db.select().from(S.lessons).where(eq(S.lessons.id, c.lessonIds[0]));
    expect(lesson.status).toBe("DRAFT");
    const [exam] = await db.select().from(S.examinations).where(eq(S.examinations.id, c.examIds[0]));
    expect(exam.status).toBe("DRAFT");
    await expectCode(commitPack(superAdmin, packId, packCtx), "CONFLICT");
  });

  it("publishes lessons at once but holds exams and assignments until questions are approved", async () => {
    let r = await publishPack(superAdmin, packId, packCtx);
    expect(r).toMatchObject({ lessons: 1, exams: 0, assignments: 0 });
    expect(r.notPublished.length).toBe(2);
    expect(await approvePackQuestions(superAdmin, packId, packCtx)).toBe(3);
    r = await publishPack(superAdmin, packId, packCtx);
    expect(r).toMatchObject({ exams: 1, assignments: 1, notPublished: [] });
    const [code] = (await generateCodes(superAdmin, { count: 1 }, ctx)).codes;
    const email = "packjss1@students.test";
    const [cls] = await db.select().from(S.classes).where(eq(S.classes.code, "JSS1"));
    await registerStudent({ firstName: "Pack", lastName: "Tester", email, phone: "08030000088", studentNumber: "PPS/PACK1", classId: cls.id, password: STRONG, confirmPassword: STRONG, acceptTerms: true }, packCtx);
    jss1 = (await session((await login({ identifier: email, password: STRONG }, "student", packCtx)).token)).actor;
    await activateCode(jss1, code, packCtx);
    expect((await listStudentExams(jss1)).map((e) => e.title)).toContain("JSS1 CCA — First Term Test");
    expect((await listStudentAssignments(jss1)).map((a) => a.title)).toContain("JSS1 CCA — Homework 1");
    const view = await openLesson(jss1, (await db.select().from(S.lessons).where(eq(S.lessons.title, "Understanding colour")))[0].id, packCtx);
    expect(view.classwork.length).toBe(2);
  });

  it("re-importing the same pack reuses topics and skips duplicates", async () => {
    const again = await previewPack(superAdmin, book(), packCtx);
    const c = await commitPack(superAdmin, again.importId, packCtx);
    expect(c).toMatchObject({ topicIds: [], questionIds: [], reusedTopics: 2, skippedDuplicates: 3 });
    expect(c.skippedExisting).toBe(3);
  });
});
