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
import { createExam, getAttemptView, getStudentResult, listStudentResults, jambOverview, listResults, listStudentExams, saveAnswers, setExamStatus, setupJambTests, startAttempt, submitAttempt, updateExam } from "@/server/services/exams";
import { upsertTopic } from "@/server/services/curriculum";
import { completeReading, mySubjects, openLesson, subjectOutline, submitClasswork } from "@/server/services/study";
import { broadcast, listNotifications } from "@/server/services/notifications";
import { listStudentAssignments, submitAssignment, upsertAssignment } from "@/server/services/assignments";
import { listResources, upsertResource } from "@/server/services/resources";
import { commitImport, previewImport } from "@/server/services/imports";
import { approvePackQuestions, commitPack, previewPack, publishPack } from "@/server/services/content-packs";
import { resultSlipPdf, toCsv } from "@/server/services/exports";
import { can } from "@/core/permissions";
import { getDefaultSchoolId, putSetting, SETTING_DEFAULTS } from "@/server/settings";
import { createDefaultRooms, forumState, liftSuspension, listMessagesAdmin, listStudentRooms, moderateMessage, postMessage, roomFeed, suspendStudent } from "@/server/services/forum";
import { recordAttemptEvent } from "@/server/services/exams";
import { registerParent } from "@/server/services/auth";
import { bulkPromote, decidePromotion, listPromotionsAdmin, promotionOverview, promotionState, requestPromotion, sessionFor } from "@/server/services/promotions";
import { adminDecideLinkRequest, childReport, generateGuardianCode, linkChild, listChildren, listLinkRequestsAdmin, listParentRequests, listStudentConnections, requestChildLink, respondToLinkRequest, revokeLink } from "@/server/services/guardians";
import { assignAccessToClass, assignAccessToParent, getParentAccess, requireFeature, requireParentAccess, transferAccess, updateCodeEntitlements } from "@/server/services/access";
import { importStudentRows, previewStudentImport, STUDENT_IMPORT_COLUMNS, studentImportTemplate } from "@/server/services/student-import";
import { appealOfResult, decideAppeal, listAppeals, openAppealCount, submitAppeal } from "@/server/services/appeals";
import { REPORTS, runReport } from "@/server/services/analytics";
import { sendDailyReminders } from "@/server/services/reminders";
import { featureWithheld } from "@/server/services/access";
import { answerQuiz, getStudentArticle, hubState, listParentArticles, listStudentArticles, restoreArticleVersion, startHubSession, startQuiz, upsertArticle } from "@/server/services/hub";
import { createParentRooms, listParentRooms, listReports, parentPost, parentRoomFeed, reportMessage } from "@/server/services/community";
import { createSchedule, listSchedulesForStudent, respondToSchedule } from "@/server/services/schedules";
import { gameData, gradeOf, listEntriesForStudent, loadStarterEntries, upsertEntry } from "@/server/services/wordbank";
import { setupInternational } from "@/server/services/international";
import { CENTRAL_COLUMNS, centralTemplateWorkbook, importCentralExtras, previewCentral, RESOURCE_COLUMNS, WORD_COLUMNS } from "@/server/services/central";
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

async function register(tag: string, classCode = "SS2", deptCode = "SCI", rctx = ctx) {
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
    rctx,
  );
  const l = await login({ identifier: email, password: STRONG }, "student", rctx);
  return (await session(l.token)).actor;
}

/** Opens the parent portal for a test parent, the way the school does: a parent access code, activated. */
async function openPortal(parent: Actor, rctx = ctx) {
  const [code] = (await generateCodes(superAdmin, { count: 1, audience: "PARENT" }, rctx)).codes;
  await activateCode(parent, code, rctx);
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
  await seedPlatform({ sampleContent: true, primarySchool: true });
  // Most scenarios register students with chosen IDs; automatic IDs have their own test below.
  await putSetting(await getDefaultSchoolId(), "examination", { ...SETTING_DEFAULTS.examination, studentIdAuto: false }, crypto.randomUUID());
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
    // Questions open to every section (no level) may be drawn too; Senior Secondary ones never are.
    expect(picked.every((q) => q.level === "JUNIOR_SECONDARY" || q.level === null)).toBe(true);
    const [ssExam] = await db.select().from(S.examinations).where(eq(S.examinations.title, "Mathematics Mock Examination (2025)"));
    await expectCode(startAttempt(jss2, ssExam.id, crypto.randomUUID(), jssCtx), "FORBIDDEN");
    await expectCode(startAttempt(ss, exam.id, crypto.randomUUID(), jssCtx), "FORBIDDEN");
  });

  it("offers JAMB-only tests of 50 questions that draw nothing but JAMB questions", async () => {
    const row = (await jambOverview(superAdmin)).filter((r) => r.approved >= 5).sort((a, b) => b.approved - a.approved)[0];
    expect(row).toBeTruthy();
    const first = await setupJambTests(superAdmin, [row.id], ctx);
    expect(first.created).toBe(1);
    const find = async () => (await db.select().from(S.examinations).where(and(eq(S.examinations.subjectId, row.id), eq(S.examinations.title, `JAMB ${row.name}`))))[0];
    let test = await find();
    expect(test.questionCount).toBe(50);
    expect(test.examType).toBe("JAMB");
    // Too few approved JAMB questions: the test waits as a draft instead of padding with other questions.
    if (row.approved < 50) {
      expect(first.waiting).toHaveLength(1);
      expect(test.status).toBe("DRAFT");
      expect((await listStudentExams(ss, { jambOnly: true })).map((e) => e.title)).not.toContain(test.title);
    }
    await db.update(S.examinations).set({ questionCount: 5 }).where(eq(S.examinations.id, test.id));
    const again = await setupJambTests(superAdmin, [row.id], ctx);
    expect(again.created).toBe(0);
    expect((await find()).status).toBe("PUBLISHED");
    // Editing through the ordinary exam form must not drop the JAMB-only restriction.
    await updateExam(superAdmin, test.id, { title: test.title, subjectId: row.id, level: "SENIOR_SECONDARY", examType: "JAMB", questionCount: 5, durationMinutes: 10, maxAttempts: 100, poolFilter: null }, ctx);
    test = await find();
    expect(test.poolFilter).toEqual({ examTypes: ["JAMB"] });

    const ssTitles = (await listStudentExams(ss, { jambOnly: true })).map((e) => e.title);
    expect(ssTitles).toContain(test.title);
    expect(ssTitles).not.toContain("JAMB UTME Mathematics Practice"); // typed JAMB, but drawn from the whole bank
    expect(await listStudentExams(jss2, { jambOnly: true })).toHaveLength(0);

    const [code] = (await generateCodes(superAdmin, { count: 1 }, ctx)).codes;
    await activateCode(ss, code, jssCtx);
    const { attemptId } = await startAttempt(ss, test.id, crypto.randomUUID(), jssCtx);
    const picked = await db.select({ examType: S.questions.examType }).from(S.attemptQuestions).innerJoin(S.questions, eq(S.questions.id, S.attemptQuestions.questionId)).where(eq(S.attemptQuestions.attemptId, attemptId));
    expect(picked).toHaveLength(5);
    expect(picked.every((q) => q.examType === "JAMB")).toBe(true);
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

describe("Student forum", () => {
  const fctx = { ip: "10.50.0.1", userAgent: "vitest" };
  let ss: Actor;
  let jss: Actor;
  let roomId: string;
  const always = { enabled: true, classBased: false, openHour: 0, closeHour: 24, dailyMinutes: 120, maxMessageLength: 500, slowModeSeconds: 0, blockLinks: true, blockedWords: "nude, betting", autoSuspendAfter: 3, autoSuspendDays: 2, rules: "Keep to school work." };

  beforeAll(async () => {
    await putSetting(superAdmin.schoolId, "forum", always, superAdmin.id);
    ss = await register("forumss", "SS2", "SCI", { ...fctx, ip: "10.50.0.2" });
    jss = await register("forumjs", "JSS1", "JSS", { ...fctx, ip: "10.50.0.3" });
    const [code] = (await generateCodes(superAdmin, { count: 1 }, fctx)).codes;
    await activateCode(ss, code, fctx);
  });

  it("gives each section its own rooms", async () => {
    expect((await createDefaultRooms(superAdmin, fctx)).created).toBeGreaterThan(8);
    expect((await createDefaultRooms(superAdmin, fctx)).created).toBe(0); // safe to press twice
    const ssRooms = (await listStudentRooms(ss)).map((r) => r.name);
    const jssRooms = (await listStudentRooms(jss)).map((r) => r.name);
    expect(ssRooms).toContain("JAMB (UTME)");
    expect(ssRooms).not.toContain("BECE");
    expect(jssRooms).toContain("BECE");
    expect(jssRooms).not.toContain("JAMB (UTME)");
    roomId = (await listStudentRooms(ss)).find((r) => r.name === "Teach each other")!.id;
    const jssOnly = (await listStudentRooms(jss)).find((r) => r.name === "BECE")!.id;
    await expectCode(roomFeed(ss, jssOnly), "NOT_FOUND");
  });

  it("posts school talk and refuses personal details, keeping the attempts for staff", async () => {
    await postMessage(ss, roomId, "Can someone explain the quadratic formula?", fctx);
    await expectCode(postMessage(ss, roomId, "call me 0803 123 4567", fctx), "VALIDATION");
    await expectCode(postMessage(ss, roomId, "where do you live?", fctx), "VALIDATION");
    const feed = await roomFeed(ss, roomId);
    expect(feed.messages.map((m) => m.body)).toEqual(["Can someone explain the quadratic formula?"]);
    expect(feed.messages[0].author).toBe("Student F."); // first name and initial only
    const staffView = await listMessagesAdmin(superAdmin.schoolId, { roomId });
    expect(staffView.filter((m) => m.m.status === "BLOCKED")).toHaveLength(2);
    // A student without active access cannot read or post.
    await expectCode(roomFeed(jss, (await listStudentRooms(jss))[0].id), "ACCESS_REQUIRED");
  });

  it("lets moderators delete messages and suspend students", async () => {
    const [mine] = (await roomFeed(ss, roomId)).messages;
    await moderateMessage(superAdmin, mine.id, "DELETE", "Off topic", fctx);
    expect((await roomFeed(ss, roomId)).messages).toHaveLength(0);
    const sus = await suspendStudent(superAdmin, { userId: ss.id, reason: "Repeated off-topic posts", days: 1 }, fctx);
    expect((await forumState(ss)).suspended).toBe(true);
    await expectCode(postMessage(ss, roomId, "hello again", fctx), "FORBIDDEN");
    await liftSuspension(superAdmin, sus.id, fctx);
    await postMessage(ss, roomId, "Thank you, I will keep to school work.", fctx);
  });

  it("suspends automatically after repeated blocked messages", async () => {
    await expectCode(postMessage(ss, roomId, "any betting tips", fctx), "VALIDATION"); // third blocked message today
    const st = await forumState(ss);
    expect(st.suspended).toBe(true);
    expect(st.blocked).toMatch(/Automatic/);
  });

  it("opens only within the set hours and the daily allowance", async () => {
    await putSetting(superAdmin.schoolId, "forum", { ...always, openHour: 10, closeHour: 22 }, superAdmin.id);
    const other = await register("forumhrs", "SS2", "SCI", { ...fctx, ip: "10.50.0.4" });
    expect((await forumState(other, { now: new Date("2026-10-05T22:30:00Z") })).blocked).toMatch(/10am to 10pm/); // 11:30pm in Lagos
    expect((await forumState(other, { now: new Date("2026-10-05T08:30:00Z") })).canUse).toBe(false); // 9:30am
    const noon = new Date("2026-10-05T11:00:00Z");
    expect((await forumState(other, { now: noon })).canUse).toBe(true);
    await db.insert(S.forumUsage).values({ userId: other.id, day: "2026-10-05", seconds: 2 * 3600, lastSeenAt: noon });
    expect((await forumState(other, { now: new Date("2026-10-05T11:00:05Z") })).blocked).toMatch(/2 hours/);
    await putSetting(superAdmin.schoolId, "forum", always, superAdmin.id);
  });
});

describe("Examination lockdown and calculator", () => {
  it("submits the attempt when the student leaves the screen too often, and shows the calculator for Mathematics", async () => {
    const lctx = { ip: "10.60.0.1", userAgent: "vitest" };
    await putSetting(superAdmin.schoolId, "examination", { ...SETTING_DEFAULTS.examination, studentIdAuto: false, maxScreenLeaves: 3, calculatorSubjectCodes: "MTH, PHY" }, superAdmin.id);
    const st = await register("lockdown", "SS2", "SCI", lctx);
    const [code] = (await generateCodes(superAdmin, { count: 1 }, lctx)).codes;
    await activateCode(st, code, lctx);
    const [mth] = await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH"));
    const exam = await createExam(superAdmin, { title: "Lockdown Maths Check", subjectId: mth.id, level: "SENIOR_SECONDARY", examType: "PRACTICE", questionCount: 5, durationMinutes: 10, maxAttempts: 3 }, lctx);
    await setExamStatus(superAdmin, exam.id, "PUBLISHED", lctx);
    const { attemptId } = await startAttempt(st, exam.id, crypto.randomUUID(), lctx);
    const view = await getAttemptView(st, attemptId, lctx);
    expect(view.status).toBe("IN_PROGRESS");
    if (view.status === "IN_PROGRESS") {
      expect(view.calculator).toBe(true);
      expect(view.lockdown).toBe(true);
    }
    expect(await recordAttemptEvent(st, attemptId, "SCREEN_LEFT", lctx)).toMatchObject({ leaves: 1, submitted: false });
    expect(await recordAttemptEvent(st, attemptId, "SCREEN_LEFT", lctx)).toMatchObject({ leaves: 2, submitted: false });
    const last = await recordAttemptEvent(st, attemptId, "SCREEN_LEFT", lctx);
    expect(last).toMatchObject({ leaves: 3, submitted: true });
    const [a] = await db.select().from(S.examinationAttempts).where(eq(S.examinationAttempts.id, attemptId));
    expect(a.status).toBe("AUTO_SUBMITTED");
  });

  it("submits the attempt when the student does not return before the countdown ends", async () => {
    const lctx = { ip: "10.60.0.9", userAgent: "vitest" };
    await putSetting(superAdmin.schoolId, "examination", { ...SETTING_DEFAULTS.examination, studentIdAuto: false, maxScreenLeaves: 5, returnCountdownSeconds: 10 }, superAdmin.id);
    const st = await register("countdown", "SS2", "SCI", lctx);
    const [code] = (await generateCodes(superAdmin, { count: 1 }, lctx)).codes;
    await activateCode(st, code, lctx);
    const [exam] = await db.select().from(S.examinations).where(eq(S.examinations.title, "Lockdown Maths Check"));
    const sit = async () => (await startAttempt(st, exam.id, crypto.randomUUID(), lctx)).attemptId;
    const status = async (id: string) => (await db.select().from(S.examinationAttempts).where(eq(S.examinationAttempts.id, id)))[0].status;

    // Back in time: carries on.
    const first = await sit();
    await recordAttemptEvent(st, first, "SCREEN_LEFT", lctx);
    expect(await recordAttemptEvent(st, first, "SCREEN_RETURNED", lctx)).toMatchObject({ submitted: false });
    // A browser claiming the countdown ran out too early is ignored.
    await recordAttemptEvent(st, first, "SCREEN_LEFT", lctx);
    expect(await recordAttemptEvent(st, first, "AWAY_TIMEOUT", lctx)).toMatchObject({ submitted: false });
    // Away for longer than the countdown (the server's own record is backdated here): submitted on return.
    await db.update(S.attemptEvents).set({ createdAt: new Date(Date.now() - 30_000) }).where(and(eq(S.attemptEvents.attemptId, first), eq(S.attemptEvents.type, "SCREEN_RETURNED")));
    await db.update(S.attemptEvents).set({ createdAt: new Date(Date.now() - 20_000) }).where(and(eq(S.attemptEvents.attemptId, first), eq(S.attemptEvents.type, "SCREEN_LEFT")));
    expect(await recordAttemptEvent(st, first, "SCREEN_RETURNED", lctx)).toMatchObject({ submitted: true });
    expect(await status(first)).toBe("AUTO_SUBMITTED");

    // Countdown reaches 0 while away: submitted.
    const second = await sit();
    await recordAttemptEvent(st, second, "SCREEN_LEFT", lctx);
    await db.update(S.attemptEvents).set({ createdAt: new Date(Date.now() - 10_500) }).where(and(eq(S.attemptEvents.attemptId, second), eq(S.attemptEvents.type, "SCREEN_LEFT")));
    expect(await recordAttemptEvent(st, second, "AWAY_TIMEOUT", lctx)).toMatchObject({ submitted: true });
    expect(await status(second)).toBe("AUTO_SUBMITTED");
  });
});

describe("Automatic Student IDs", () => {
  it("issues sequential Student IDs at registration that work for signing in, with the username too", async () => {
    const ictx = { ip: "10.70.0.1", userAgent: "vitest" };
    await putSetting(superAdmin.schoolId, "examination", { ...SETTING_DEFAULTS.examination, studentIdAuto: true, studentIdPrefix: "PPS", studentIdIncludeYear: true, studentIdDigits: 4 }, superAdmin.id);
    const [cls] = await db.select().from(S.classes).where(eq(S.classes.code, "SS1"));
    const [dep] = await db.select().from(S.departments).where(eq(S.departments.code, "ART"));
    const year = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos", year: "numeric" }).format(new Date());
    const base = { lastName: "Auto", phone: "08030000123", classId: cls.id, departmentId: dep.id, password: STRONG, confirmPassword: STRONG, acceptTerms: true };
    // A typed ID is ignored when IDs are automatic.
    const a = await registerStudent({ ...base, firstName: "Ade", email: "auto1@students.test", studentNumber: "MY-OWN-ID", username: "ade.auto" }, ictx);
    const b = await registerStudent({ ...base, firstName: "Bisi", email: "auto2@students.test" }, { ...ictx, ip: "10.70.0.2" });
    expect(a.studentNumber).toMatch(new RegExp(`^PPS/${year}/\\d{4}$`));
    expect(Number(b.studentNumber.slice(-4))).toBe(Number(a.studentNumber.slice(-4)) + 1);
    for (const id of [a.studentNumber, a.studentNumber.toLowerCase(), "ade.auto", "auto1@students.test"]) {
      const l = await login({ identifier: id, password: STRONG }, "student", { ...ictx, ip: "10.70.0.3" });
      expect((await session(l.token)).user.id).toBe(a.userId);
    }
    await putSetting(superAdmin.schoolId, "examination", { ...SETTING_DEFAULTS.examination, studentIdAuto: false }, superAdmin.id);
    await expectCode(registerStudent({ ...base, firstName: "Chi", email: "auto3@students.test" }, { ...ictx, ip: "10.70.0.4" }), "VALIDATION"); // ID required again
  });
});

describe("Primary school, parents, Premium and the learning hub", () => {
  const at = (n: number) => ({ ip: `10.80.0.${n}`, userAgent: "vitest" });
  let pupil: Actor;

  it("places a Basic 4 pupil in the Primary section with the primary subjects", async () => {
    pupil = await register("primarykid", "BASIC4", "PRY", at(1));
    const subs = (await mySubjects(pupil)).map((x) => x.code);
    expect(subs).toEqual(expect.arrayContaining(["QRE", "VRE", "MTH", "ENG", "BST", "SCS"]));
    expect(subs).not.toContain("PHY");
    const names = (await db.select().from(S.classes).orderBy(S.classes.sortOrder)).map((c) => c.name);
    expect(names.slice(0, 7)).toEqual(["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5", "Basic 6", "JSS 1"]);
  });

  it("keeps a class-based forum to the pupil's own class", async () => {
    const [code] = (await generateCodes(superAdmin, { count: 1 }, at(2))).codes;
    await activateCode(pupil, code, at(2));
    await createDefaultRooms(superAdmin, at(2));
    await putSetting(superAdmin.schoolId, "forum", { ...SETTING_DEFAULTS.forum, openHour: 0, closeHour: 24, classBased: true }, superAdmin.id);
    const rooms = await listStudentRooms(pupil);
    expect(rooms.length).toBe(4);
    expect(rooms.every((r) => r.name.startsWith("Basic 4 — "))).toBe(true);
    const other = await register("primaryfive", "BASIC5", "PRY", at(3));
    const [code2] = (await generateCodes(superAdmin, { count: 1 }, at(3))).codes;
    await activateCode(other, code2, at(3));
    await expectCode(roomFeed(other, rooms[0].id), "NOT_FOUND");
    await putSetting(superAdmin.schoolId, "forum", { ...SETTING_DEFAULTS.forum, openHour: 0, closeHour: 24, classBased: false }, superAdmin.id);
    expect((await listStudentRooms(pupil)).map((r) => r.name)).toContain("Common Entrance");
  });

  it("shows dictionary entries by class and builds games from them", async () => {
    expect((await loadStarterEntries(superAdmin.schoolId, superAdmin.id)).created).toBe(0); // seeded already
    const [b5] = await db.select().from(S.classes).where(eq(S.classes.code, "BASIC5"));
    await upsertEntry(superAdmin, null, { kind: "WORD", term: "harvest", partOfSpeech: "noun", meaning: "The time when crops are gathered.", picture: "🌾", classId: b5.id }, at(4));
    await expectCode(upsertEntry(superAdmin, null, { kind: "WORD", term: "Harvest", meaning: "Again." }, at(4)), "DUPLICATE");
    const mine = await listEntriesForStudent(pupil, { kind: "WORD" });
    expect(mine.length).toBeGreaterThan(100);
    expect(mine.map((e) => e.term)).not.toContain("harvest"); // Basic 5 only
    const game = await gameData(pupil);
    expect(game.grade).toBe(4);
    expect(game.words.length).toBeGreaterThan(50);
    expect(game.phrases.length).toBeGreaterThan(100);
    expect(gradeOf("SS2", null)).toBe(11);
  });

  it("never links a parent on the strength of a code or an ID alone", async () => {
    const r = await registerParent({ firstName: "Grace", lastName: "Parent", email: "grace@parents.test", phone: "08031112222", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(5));
    expect(r.linked).toBe(false);
    const l = await login({ identifier: "grace@parents.test", password: STRONG }, "student", at(5));
    const parent = (await session(l.token)).actor;
    expect(parent.userType).toBe("PARENT");
    await openPortal(parent, at(5));
    await expectCode(login({ identifier: "grace@parents.test", password: STRONG }, "backend", at(5)), "INVALID_CREDENTIALS");
    expect(can(parent, "students.view")).toBe(false);
    // A school link code counts as school verification, but the child must still agree.
    const { code } = await generateGuardianCode(superAdmin, pupil.id, at(5));
    expect(code).toMatch(/^PG-[A-Z2-9]{4}-[A-Z2-9]{4}$/);
    await linkChild(parent, code.toLowerCase(), "Mother", at(5));
    expect(await listChildren(parent.id)).toHaveLength(0);
    await expectCode(childReport(parent, pupil.id, at(5)), "NOT_FOUND");
    const [req] = (await listStudentConnections(pupil.id)).pending;
    await respondToLinkRequest(pupil, req.id, true, at(5));
    expect((await listChildren(parent.id)).map((k) => k.className)).toEqual(["Basic 4"]);
    expect((await childReport(parent, pupil.id, at(5))).summary.examsTaken).toBe(0);
    await expectCode(startAttempt(parent, examId, crypto.randomUUID(), at(6)), "FORBIDDEN");
  });

  it("opens international practice only to Premium codes", async () => {
    const st = await register("premiumss", "SS3", "SCI", at(7));
    const [standard] = (await generateCodes(superAdmin, { count: 1 }, at(7))).codes;
    await activateCode(st, standard, at(7));
    const setup = await setupInternational(superAdmin, at(7));
    expect(setup.exams).toBe(7);
    expect(setup.questions).toBeGreaterThan(100);
    expect((await setupInternational(superAdmin, at(7))).exams).toBe(0); // safe to run again
    expect((await listStudentExams(st)).some((e) => e.examType === "IELTS")).toBe(false); // never in the ordinary lists
    const intl = await listStudentExams(st, { premium: true });
    expect(intl.map((e) => e.examType).sort()).toEqual(["IELTS", "SAT", "TOEFL"]); // SS section
    const ielts = intl.find((e) => e.examType === "IELTS")!;
    await expectCode(startAttempt(st, ielts.id, crypto.randomUUID(), at(7)), "ACCESS_REQUIRED");
    expect((await getAccessState(st.id)).premium).toBe(false);
    await expectCode(generateCodes(resultAdmin, { count: 1, tier: "PREMIUM" }, at(7)), "FORBIDDEN");
    const [premium] = (await generateCodes(superAdmin, { count: 1, tier: "PREMIUM" }, at(7))).codes;
    await activateCode(st, premium, at(7)); // an upgrade on top of standard access
    expect((await getAccessState(st.id)).premium).toBe(true);
    const { attemptId } = await startAttempt(st, ielts.id, crypto.randomUUID(), at(7));
    expect(attemptId).toBeTruthy();
    const primaryIntl = await listStudentExams(pupil, { premium: true });
    expect(primaryIntl.every((e) => e.examType === "CHECKPOINT")).toBe(true);
    expect(primaryIntl).toHaveLength(2);
  });
});

describe("Central upload workbook", () => {
  const cctx = { ip: "10.90.0.1", userAgent: "vitest" };
  const xlsx = (wb: XLSX.WorkBook) => ({ name: "central.xlsx", bytes: XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer });
  const question = (subject: string, cls: string, topic: string, n: number) => [subject, cls, "", "", "PRACTICE", topic, "", `Central question ${subject} ${n}: what is ${n} + ${n}?`, String(n * 2), String(n * 2 + 1), String(n * 2 + 2), String(n * 2 + 3), "A", `Adding ${n} and ${n} gives ${n * 2}.`, "1", "EASY", "Precious PS original", "ORIGINAL"];

  it("offers a template that lists every Primary subject", async () => {
    const wb = XLSX.read(await centralTemplateWorkbook(superAdmin.schoolId), { type: "buffer" });
    expect(wb.SheetNames).toEqual(["Read Me", "Subjects", "Classes", "Scheme of Work", "Lessons", "Questions", "Exams", "Assignments", "Dictionary", "Idioms", "Cliches", "Phrasal Verbs", "Resources", "Articles", "Quiz Questions"]);
    const scheme = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets["Scheme of Work"], { defval: "" });
    const codes = new Set(scheme.map((r) => r.Subject));
    for (const code of ["MTH", "ENG", "QRE", "VRE", "BST", "SCS", "PHE", "CRS", "IRS", "HIS", "CCA", "BDL", "PVS", "FRE", "ARB", "YOR", "IGB", "HAU"]) expect(codes.has(code), code).toBe(true);
    expect(scheme.filter((r) => r.Subject === "BST")).toHaveLength(18); // 6 classes × 3 terms
    expect(scheme.filter((r) => r.Subject === "BDL").map((r) => r.Class)).not.toContain("Basic 1"); // starts in Basic 4
    expect(Object.keys(scheme[0])).toEqual(CENTRAL_COLUMNS.scheme);
    const words = XLSX.read(await centralTemplateWorkbook(superAdmin.schoolId, "words"), { type: "buffer" });
    expect(words.SheetNames).toEqual(["Read Me", "Dictionary", "Idioms", "Cliches", "Phrasal Verbs"]);
  });

  it("sends each row of one workbook to the section it belongs to", async () => {
    const wb = XLSX.utils.book_new();
    const add = (name: string, rows: unknown[][]) => XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), name);
    add("Scheme of Work", [
      CENTRAL_COLUMNS.scheme,
      ["BST", "Basic 4", "1", "1", "Central living things", "Plants; Animals", "Name living things; Group living things; Describe a plant", "Y"],
      ["SCS", "Basic 4", "1", "1", "Central family life", "Members; Duties", "Name family members; State duties; Draw a family tree", "Y"],
      ["SCS", "Basic 4", "2", "1", "", "", "", "Y"], // template row never filled in: ignored
      ["NOPE", "Basic 4", "1", "1", "Unknown subject topic", "A; B", "Do one; Do two; Do three", "Y"],
    ]);
    add("Questions", [CENTRAL_COLUMNS.questions, ...[1, 2, 3].map((n) => question("BST", "Basic 4", "Central living things", n)), ...[4, 5].map((n) => question("SCS", "Basic 4", "Central family life", n))]);
    add("Dictionary", [WORD_COLUMNS, ["lantern", "noun", "A lamp that can be carried.", "He lit the lantern.", "🏮", "Primary", "Basic 4", "Published"], ["apple", "noun", "A round fruit that grows on a tree.", "", "🍎", "All", "", ""], ["broken", "", "", "", "", "", "", ""]]);
    add("Idioms", [WORD_COLUMNS, ["Central idiom of the day", "", "An idiom added from the central sheet.", "", "", "Everywhere", "", ""]]);
    add("Resources", [RESOURCE_COLUMNS, ["Central reading list", "Books for Basic 4", "ENG", "Basic 4", "", "website", "https://example.org/reading", "Yes", "No", "Published"], ["Bad link", "", "", "", "", "", "http://example.org", "", "", ""]]);

    const report = await previewCentral(superAdmin, xlsx(wb), cctx);
    expect(report.subjects.map((x) => x.ref).sort()).toEqual(["BST", "NOPE", "SCS"]);
    const bst = report.subjects.find((x) => x.ref === "BST")!;
    expect(bst.errors).toEqual([]);
    expect(bst.counts).toMatchObject({ topics: 1, questions: 3 });
    expect(report.subjects.find((x) => x.ref === "SCS")!.counts).toMatchObject({ topics: 1, questions: 2 });
    expect(report.subjects.find((x) => x.ref === "NOPE")!.errors.length).toBeGreaterThan(0);
    expect(report.words.counts).toMatchObject({ WORD: 2, IDIOM: 0 });
    expect(report.words.issues.map((x) => x.sheet).sort()).toEqual(["Dictionary", "Idioms"]);
    expect(report.resources).toMatchObject({ count: 1 });
    expect(report.resources.issues).toHaveLength(1);

    // The subjects that passed are imported exactly like content packs.
    for (const sub of report.subjects.filter((x) => !x.errors.length)) await commitPack(superAdmin, sub.importId!, cctx);
    const [topic] = await db.select().from(S.topics).where(eq(S.topics.title, "Central living things"));
    const [bstSubject] = await db.select().from(S.subjects).where(eq(S.subjects.code, "BST"));
    expect(topic.subjectId).toBe(bstSubject.id);
    expect(topic.level).toBe("PRIMARY");
    expect(await db.select().from(S.questions).where(eq(S.questions.topicId, topic.id))).toHaveLength(3);

    const extras = await importCentralExtras(superAdmin, xlsx(wb), cctx);
    expect(extras).toMatchObject({ wordsAdded: 1, wordsUpdated: 1, resourcesAdded: 1 }); // "apple" was in the starter set
    const [lantern] = await db.select().from(S.wordEntries).where(eq(S.wordEntries.term, "lantern"));
    expect(lantern).toMatchObject({ kind: "WORD", level: "PRIMARY", status: "PUBLISHED" });
    expect((await importCentralExtras(superAdmin, xlsx(wb), cctx)).resourcesSkipped).toBe(1); // not added twice

    // An administrator without those permissions has the sheets skipped, not imported.
    const limited = await previewCentral(resultAdmin, xlsx(wb), cctx);
    expect(limited.curriculumAllowed).toBe(false);
    expect(limited.subjects).toEqual([]);
    expect(limited.words.allowed).toBe(false);
    expect(await importCentralExtras(resultAdmin, xlsx(wb), cctx)).toMatchObject({ wordsAdded: 0, wordsUpdated: 0, resourcesAdded: 0 });
  });

  it("creates the default administrator roles, which stay editable", async () => {
    const all = await listRoles(superAdmin.schoolId);
    const keys = all.map((r) => r.key);
    for (const k of ["primary_school_admin", "content_upload_admin", "study_materials_admin", "homepage_content_admin", "parents_admin", "access_code_admin", "premium_admin", "reports_officer"]) expect(keys, k).toContain(k);
    const officer = all.find((r) => r.key === "reports_officer")!;
    await upsertRole(superAdmin, officer.id, { name: "Reports Officer", description: "Edited by the Super Admin.", permissions: ["analytics.view", "results.view"] }, cctx);
    const after = (await listRoles(superAdmin.schoolId)).find((r) => r.key === "reports_officer")!;
    expect(after.name).toBe("Reports Officer");
    expect(after.permissions.sort()).toEqual(["analytics.view", "results.view"]);
  });
});

describe("Secure family linking, entitlements, hubs and communities", () => {
  const at = (n: number) => ({ ip: `10.95.0.${n}`, userAgent: "vitest" });
  const policy = (linkPolicy: "CHILD" | "CHILD_AND_SCHOOL" | "SCHOOL", extra = {}) => putSetting(superAdmin.schoolId, "parents", { ...SETTING_DEFAULTS.parents, linkPolicy, ...extra }, superAdmin.id);
  let childA: Actor;
  let childB: Actor;
  let mum: Actor;
  let stranger: Actor;
  const parent = async (tag: string, n: number) => {
    await registerParent({ firstName: "Pat", lastName: tag, email: `${tag}@parents.test`, phone: "08031110000", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(n));
    const a = (await session((await login({ identifier: `${tag}@parents.test`, password: STRONG }, "student", at(n))).token)).actor;
    await openPortal(a, at(n));
    return a;
  };
  const withCode = async (st: Actor, opts: Parameters<typeof generateCodes>[1], n: number) => {
    const [code] = (await generateCodes(superAdmin, opts, at(n))).codes;
    await activateCode(st, code, at(n));
  };

  beforeAll(async () => {
    childA = await register("linkchilda", "JSS2", "JSS", at(1));
    childB = await register("linkchildb", "SS2", "SCI", at(2));
    mum = await parent("mum", 3);
    stranger = await parent("stranger", 4);
    await policy("CHILD");
  });

  it("holds a request as pending and shows the parent nothing", async () => {
    const sent = await requestChildLink(mum, "PPS/linkchilda", "Mother", at(3));
    const unknown = await requestChildLink(mum, "PPS/nobody-here", "Mother", at(3));
    expect(unknown).toEqual(sent); // the form cannot be used to find out who is a student
    expect(await listChildren(mum.id)).toHaveLength(0);
    await expectCode(childReport(mum, childA.id, at(3)), "NOT_FOUND");
    const mine = await listParentRequests(mum.id);
    expect(mine).toHaveLength(1);
    expect(mine[0]).toMatchObject({ status: "PENDING", studentNumber: "PPS/linkchilda" });
    await requestChildLink(mum, "PPS/linkchilda", "Mother", at(3));
    expect(await listParentRequests(mum.id)).toHaveLength(1); // asking again does not pile up requests
  });

  it("lets only the addressed, signed-in student decide", async () => {
    const { pending } = await listStudentConnections(childA.id);
    expect(pending).toHaveLength(1);
    expect(pending[0].firstName).toBe("Pat");
    expect(pending[0].email).not.toContain("mum@"); // masked
    await expectCode(respondToLinkRequest(childB, pending[0].id, true, at(2)), "NOT_FOUND"); // another student
    await expectCode(respondToLinkRequest(mum, pending[0].id, true, at(3)), "FORBIDDEN"); // the parent cannot accept for the child
    await expectCode(respondToLinkRequest(superAdmin, pending[0].id, true, at(3)), "FORBIDDEN");
    expect(await listChildren(mum.id)).toHaveLength(0);
    // The student rejects: nothing is shared and the request is closed.
    expect((await respondToLinkRequest(childA, pending[0].id, false, at(1))).status).toBe("REJECTED");
    await expectCode(childReport(mum, childA.id, at(3)), "NOT_FOUND");
    await expectCode(respondToLinkRequest(childA, pending[0].id, true, at(1)), "CONFLICT"); // cannot be reopened
    await requestChildLink(mum, "PPS/linkchilda", "Mother", at(3)); // too soon after a rejection
    expect((await listStudentConnections(childA.id)).pending).toHaveLength(0);
  });

  it("activates the right relationship on acceptance and removes it at once on revocation", async () => {
    await requestChildLink(mum, "linkchildb@students.test", "Mother", at(3));
    const [req] = (await listStudentConnections(childB.id)).pending;
    expect((await respondToLinkRequest(childB, req.id, true, at(2))).status).toBe("ACCEPTED");
    expect((await listChildren(mum.id)).map((k) => k.id)).toEqual([childB.id]);
    expect((await childReport(mum, childB.id, at(3))).child.id).toBe(childB.id);
    await expectCode(childReport(mum, childA.id, at(3)), "NOT_FOUND"); // not the other child
    await expectCode(childReport(stranger, childB.id, at(4)), "NOT_FOUND"); // not another parent
    expect((await listStudentConnections(childB.id)).active).toHaveLength(1);
    // Timetable: only for a linked child, and the child answers it.
    const sched = await createSchedule(mum, childB.id, { title: "Mathematics revision", date: "2026-10-06", startTime: "17:00", endTime: "17:45", priority: "HIGH" }, at(3));
    await expectCode(createSchedule(stranger, childB.id, { title: "Reading", date: "2026-10-06" }, at(4)), "NOT_FOUND");
    await expectCode(createSchedule(mum, childA.id, { title: "Reading", date: "2026-10-06" }, at(3)), "NOT_FOUND");
    expect(await listSchedulesForStudent(childB.id, "2026-10-04")).toHaveLength(1);
    await expectCode(respondToSchedule(childA, sched.id, "COMPLETE", at(1)), "NOT_FOUND");
    expect((await respondToSchedule(childB, sched.id, "COMPLETE", at(2))).status).toBe("COMPLETED");
    // The student may not remove the connection unless the school allows it; the parent and staff may.
    await expectCode(revokeLink(childB, mum.id, childB.id, undefined, at(2)), "FORBIDDEN");
    await expectCode(revokeLink(stranger, mum.id, childB.id, undefined, at(4)), "FORBIDDEN");
    await revokeLink(mum, mum.id, childB.id, "No longer needed", at(3));
    await expectCode(childReport(mum, childB.id, at(3)), "NOT_FOUND");
    await expectCode(createSchedule(mum, childB.id, { title: "Reading", date: "2026-10-07" }, at(3)), "NOT_FOUND");
    expect((await listParentRequests(mum.id)).some((r) => r.status === "REVOKED")).toBe(true);
  });

  it("supports school verification policies and records every step", async () => {
    await policy("CHILD_AND_SCHOOL");
    const dad = await parent("dad", 5);
    await requestChildLink(dad, "PPS/linkchildb", "Father", at(5));
    const [req] = (await listStudentConnections(childB.id)).pending;
    expect((await respondToLinkRequest(childB, req.id, true, at(2))).status).toBe("PENDING"); // the school has not verified yet
    expect(await listChildren(dad.id)).toHaveLength(0);
    await expectCode(adminDecideLinkRequest(superAdmin, crypto.randomUUID(), true, undefined, at(5)), "NOT_FOUND");
    expect((await adminDecideLinkRequest(superAdmin, req.id, true, "Seen at the school office", at(5))).status).toBe("ACCEPTED");
    expect(await listChildren(dad.id)).toHaveLength(1);
    // School-only policy: verification alone is enough, and a refusal closes the request.
    await policy("SCHOOL");
    await requestChildLink(stranger, "PPS/linkchildb", "Uncle", at(4));
    const waiting = (await listLinkRequestsAdmin(superAdmin.schoolId, "PENDING")).find((x) => x.r.parentUserId === stranger.id)!;
    expect(waiting.child?.studentNumber).toBe("PPS/linkchildb");
    expect((await adminDecideLinkRequest(superAdmin, waiting.r.id, false, "Not known to the school", at(5))).status).toBe("REJECTED");
    expect(await listChildren(stranger.id)).toHaveLength(0);
    await policy("CHILD", { childCanRemove: true });
    await revokeLink(childB, dad.id, childB.id, undefined, at(2)); // now allowed by the school
    expect(await listChildren(dad.id)).toHaveLength(0);
    const actions = (await db.select({ action: S.auditLogs.action }).from(S.auditLogs).where(sql`${S.auditLogs.action} LIKE 'guardian.%'`)).map((x) => x.action);
    for (const k of ["guardian.link_requested", "guardian.child_accepted", "guardian.child_rejected", "guardian.admin_approved", "guardian.admin_rejected", "guardian.link_activated", "guardian.unlinked"]) expect(actions, k).toContain(k);
  });

  it("opens features from the one central access code, enforced on the server", async () => {
    await withCode(childA, { count: 1, features: ["CBT", "RESULTS"] }, 1);
    expect((await getAccessState(childA.id)).features.sort()).toEqual(["CBT", "RESULTS"]);
    await requireFeature(childA.id, "CBT");
    await expectCode(requireFeature(childA.id, "STUDY_CENTRE"), "ACCESS_REQUIRED");
    await expectCode(hubState(childA), "ACCESS_REQUIRED");
    await expectCode(startQuiz(childA, "QUIZ", at(1), "2026-10-04"), "ACCESS_REQUIRED");
    await expectCode(listStudentRooms(childA).then(() => roomFeed(childA, crypto.randomUUID())), "ACCESS_REQUIRED");
    // A code made before entitlements existed (no feature list) opens the standard set.
    await withCode(childB, { count: 1 }, 2);
    const std = (await getAccessState(childB.id)).features;
    expect(std).toEqual(expect.arrayContaining(["CBT", "STUDY_CENTRE", "KNOWLEDGE_HUB", "QUIZ_ARENA", "COMMUNITY"]));
    expect(std).not.toContain("INTERNATIONAL");
    // Editing the code changes what it opens, and the change is audited.
    const [row] = await db.select().from(S.activationCodes).where(eq(S.activationCodes.activatedBy, childA.id));
    await updateCodeEntitlements(superAdmin, row.id, { features: ["CBT", "KNOWLEDGE_HUB", "QUIZ_ARENA"], hubSessionMinutes: 10, hubCooldownMinutes: 20 }, at(1));
    expect(await hubState(childA)).toMatchObject({ sessionMinutes: 10, cooldownMinutes: 20, active: false });
    await expectCode(updateCodeEntitlements(resultAdmin, row.id, { features: ["INTERNATIONAL"] }, at(1)), "FORBIDDEN");
  });

  it("times Knowledge Hub sessions and cooldowns on the server", async () => {
    const t0 = new Date("2026-10-05T12:00:00Z");
    const later = (min: number) => new Date(t0.getTime() + min * 60_000);
    await expectCode(listStudentArticles(childB, {}, t0), "FORBIDDEN"); // no session yet
    expect(await startHubSession(childB, at(2), t0)).toMatchObject({ active: true, secondsLeft: 1800 });
    const list = await listStudentArticles(childB, {}, later(10));
    expect(list.length).toBeGreaterThan(5);
    expect((await getStudentArticle(childB, list[0].id, later(29))).title).toBe(list[0].title);
    await expectCode(getStudentArticle(childB, list[0].id, later(31)), "FORBIDDEN"); // session over
    expect(await hubState(childB, later(31))).toMatchObject({ active: false, cooldownSeconds: 59 * 60 });
    await expectCode(startHubSession(childB, at(2), later(45)), "FORBIDDEN"); // still cooling down
    expect((await startHubSession(childB, at(2), later(91))).active).toBe(true);
    // Unlimited override on the code.
    const [row] = await db.select().from(S.activationCodes).where(eq(S.activationCodes.activatedBy, childB.id));
    await updateCodeEntitlements(superAdmin, row.id, { features: null, hubUnlimited: true }, at(2));
    expect(await hubState(childB, later(300))).toMatchObject({ unlimited: true, active: true });
    // A JSS student is not shown senior-secondary articles.
    await startHubSession(childA, at(1), t0);
    const titles = (await listStudentArticles(childA, {}, later(1))).map((x) => x.title);
    expect(titles).toContain("The three arms of government");
    expect(titles).not.toContain("How artificial intelligence works");
  });

  it("marks quizzes on the server and keeps student and parent games apart", async () => {
    const quiz = await startQuiz(childB, "QUIZ", at(2), "2026-10-05");
    expect(quiz.questions).toHaveLength(20);
    expect(quiz.questions[0]).not.toHaveProperty("correctIndex"); // answers stay on the server
    const one = await answerQuiz(childB, quiz.attemptId, 0, 0);
    expect(one.questions[0]).toHaveProperty("correct");
    expect(one.questions[0].explanation).toBeTruthy();
    await expectCode(answerQuiz(childB, quiz.attemptId, 0, 1), "CONFLICT"); // no second try
    await expectCode(answerQuiz(childA, quiz.attemptId, 1, 0), "NOT_FOUND"); // not your quiz
    let last = one;
    for (let i = 1; i < 20; i++) last = await answerQuiz(childB, quiz.attemptId, i, 1);
    expect(last.finished).toBe(true);
    expect(last.summary).toMatchObject({ total: 20 });
    const daily = await startQuiz(childB, "DAILY", at(2), "2026-10-05");
    expect((await startQuiz(childB, "DAILY", at(2), "2026-10-05")).attemptId).toBe(daily.attemptId); // one a day
    await expectCode(startQuiz(childB, "PARENTING", at(2), "2026-10-05"), "FORBIDDEN");
    await expectCode(startQuiz(mum, "QUIZ", at(3), "2026-10-05"), "FORBIDDEN");
    expect((await startQuiz(mum, "PARENTING", at(3), "2026-10-05")).questions.length).toBeGreaterThan(5); // free for parents
  });

  it("runs parent content through review and keeps earlier versions", async () => {
    const draft = await upsertArticle(superAdmin, null, { section: "LEARNING", category: "Reading", title: "Reading with your child", summary: "Ten minutes of shared reading a day builds vocabulary.", body: "Read aloud together every evening and talk about the story afterwards. Ask what might happen next." }, at(6));
    expect(draft.status).toBe("DRAFT");
    expect((await listParentArticles(mum)).map((x) => x.title)).not.toContain("Reading with your child");
    await expectCode(listParentArticles(childB), "FORBIDDEN"); // parent learning is not for students
    const live = await upsertArticle(superAdmin, draft.id, { section: "LEARNING", category: "Reading", title: "Reading with your child", summary: "Ten minutes of shared reading a day builds vocabulary.", body: "Second edition: read aloud together every evening and talk about the story afterwards.", status: "PUBLISHED" }, at(6));
    expect(live).toMatchObject({ status: "PUBLISHED", version: 2 });
    expect((await listParentArticles(mum, { section: "LEARNING" })).map((x) => x.title)).toContain("Reading with your child");
    expect((await listParentArticles(mum, { section: "PSYCHOLOGY" })).length).toBeGreaterThan(3);
    await restoreArticleVersion(superAdmin, draft.id, 1, at(6));
    const [back] = await db.select().from(S.hubArticles).where(eq(S.hubArticles.id, draft.id));
    expect(back).toMatchObject({ version: 3, status: "REVIEW" });
    expect(back.body).toContain("Read aloud together every evening and talk");
  });

  it("keeps the parent community and the student forum completely separate", async () => {
    expect((await createParentRooms(superAdmin, at(6))).created).toBe(4);
    expect((await createParentRooms(superAdmin, at(6))).created).toBe(0);
    const { rooms } = await listParentRooms(mum);
    expect(rooms).toHaveLength(4);
    await expectCode(listParentRooms(childB), "FORBIDDEN");
    await expectCode(roomFeed(childB, rooms[0].id), "NOT_FOUND"); // a student cannot open a parent room
    await expectCode(postMessage(childB, rooms[0].id, "Hello parents", at(2)), "NOT_FOUND");
    expect((await listStudentRooms(childB)).map((r) => r.id)).not.toContain(rooms[0].id);
    const [studentRoom] = await db.select().from(S.forumRooms).where(eq(S.forumRooms.audience, "STUDENT"));
    await expectCode(parentRoomFeed(mum, studentRoom.id), "NOT_FOUND"); // a parent cannot open a student room
    await expectCode(parentPost(mum, studentRoom.id, "Hello students", at(3)), "NOT_FOUND");
    const { id } = await parentPost(mum, rooms[0].id, "How do you help a child who dislikes reading?", at(3));
    await expectCode(parentPost(mum, rooms[0].id, "Call me on 0803 123 4567", at(3)), "VALIDATION");
    await expectCode(parentPost(mum, rooms[0].id, "Are you single? Let us chat on whatsapp", at(3)), "VALIDATION");
    const feed = await parentRoomFeed(stranger, rooms[0].id);
    expect(feed.messages.map((m) => m.body)).toEqual(["How do you help a child who dislikes reading?"]);
    expect(feed.messages[0].author).toBe("Pat m.");
    await reportMessage(stranger, id, "SPAM", "Test report", at(4));
    await expectCode(reportMessage(childB, id, "SPAM", undefined, at(2)), "NOT_FOUND"); // students cannot reach parent messages
    expect(await listReports(superAdmin.schoolId)).toHaveLength(1);
  });
});

describe("Promotion to the next class, and linking by an activated access code", () => {
  const at = (n: number) => ({ ip: `10.96.0.${n}`, userAgent: "vitest" });
  const rules = (extra = {}) => putSetting(superAdmin.schoolId, "promotion", { ...SETTING_DEFAULTS.promotion, ...extra }, superAdmin.id);
  // Students here register "today"; the next promotion period that can apply to them is next year's.
  const Y = new Date().getUTCFullYear() + 1;
  const inPeriod = new Date(Date.UTC(Y, 7, 20, 10)); // 20 August
  const midSession = new Date(Date.UTC(Y, 2, 2, 10)); // 2 March
  const classOf = async (a: Actor) => {
    const [r] = await db.select({ code: S.classes.code }).from(S.students).innerJoin(S.classes, eq(S.classes.id, S.students.classId)).where(eq(S.students.userId, a.id));
    return r.code;
  };
  let ss2: Actor;
  let jss3: Actor;

  beforeAll(async () => {
    ss2 = await register("promosstwo", "SS2", "SCI", at(1));
    jss3 = await register("promojssthree", "JSS3", "JSS", at(2));
    await rules();
  });

  it("works out the session from the Nigerian school year", () => {
    expect(sessionFor(new Date("2026-09-14T09:00:00Z"), "08-01", "Africa/Lagos")).toBe("2026/2027");
    expect(sessionFor(new Date("2027-07-30T09:00:00Z"), "08-01", "Africa/Lagos")).toBe("2026/2027");
    expect(sessionFor(new Date("2027-08-02T09:00:00Z"), "08-01", "Africa/Lagos")).toBe("2027/2028");
  });

  it("refuses promotion outside the period, and for a student who registered inside it", async () => {
    await expectCode(requestPromotion(ss2, {}, at(1), midSession), "FORBIDDEN");
    expect(await classOf(ss2)).toBe("SS2");
    await rules({ windowStart: "01-01", windowEnd: "12-31" }); // a period that contains today's registration
    const st = await promotionState(ss2, new Date());
    expect(st.canRequest).toBe(false);
    await expectCode(requestPromotion(ss2, {}, at(1), new Date()), "FORBIDDEN");
    await rules();
  });

  it("only raises a request: the class changes when staff approve, and only once in a session", async () => {
    const r = await requestPromotion(ss2, {}, at(1), inPeriod);
    expect(r).toMatchObject({ status: "PENDING", to: "SSS 3" });
    expect(await classOf(ss2)).toBe("SS2"); // nothing has moved yet
    await expectCode(requestPromotion(ss2, {}, at(1), inPeriod), "FORBIDDEN"); // already waiting
    const [row] = await listPromotionsAdmin(superAdmin.schoolId, "PENDING");
    await expectCode(decidePromotion(qbAdmin, "00000000-0000-4000-8000-000000000000", true, undefined, at(9)), "NOT_FOUND");
    await decidePromotion(superAdmin, row.p.id, true, undefined, at(9));
    expect(await classOf(ss2)).toBe("SS3");
    await expectCode(decidePromotion(superAdmin, row.p.id, true, undefined, at(9)), "CONFLICT");
    // Same session: no second step. SS3 is also the final class.
    await expectCode(requestPromotion(ss2, {}, at(1), new Date(inPeriod.getTime() + 86_400_000)), "FORBIDDEN");
    expect(await classOf(ss2)).toBe("SS3");
  });

  it("a rejected student stays put and may ask again", async () => {
    await expectCode(requestPromotion(jss3, {}, at(2), inPeriod), "VALIDATION"); // SS1 has several departments: one must be chosen
    const [sci] = await db.select().from(S.departments).where(eq(S.departments.code, "SCI"));
    await requestPromotion(jss3, { departmentId: sci.id }, at(2), inPeriod);
    const [row] = await listPromotionsAdmin(superAdmin.schoolId, "PENDING");
    await decidePromotion(superAdmin, row.p.id, false, "Result not yet released", at(9));
    expect(await classOf(jss3)).toBe("JSS3");
    expect((await promotionState(jss3, inPeriod)).canRequest).toBe(true);
  });

  it("even with self-promotion on, a student moves one class, once", async () => {
    await rules({ mode: "AUTO" });
    const one = await register("promojssone", "JSS1", "JSS", at(3));
    await requestPromotion(one, {}, at(3), inPeriod);
    expect(await classOf(one)).toBe("JSS2");
    await expectCode(requestPromotion(one, {}, at(3), inPeriod), "FORBIDDEN");
    expect(await classOf(one)).toBe("JSS2");
    await rules();
  });

  it("staff promote a whole class, mark repeaters, and cannot promote the same student twice", async () => {
    const a = await register("promobone", "BASIC4", "PRY", at(4));
    const b = await register("promobtwo", "BASIC4", "PRY", at(5));
    const [b4] = await db.select().from(S.classes).where(eq(S.classes.code, "BASIC4"));
    const [b5] = await db.select().from(S.classes).where(eq(S.classes.code, "BASIC5"));
    const before = (await promotionOverview(superAdmin.schoolId, inPeriod)).classes.find((c) => c.id === b4.id)!;
    expect(before.waiting).toBe(before.total);
    const out = await bulkPromote(superAdmin, b4.id, [b.id], at(9), inPeriod);
    expect(out).toMatchObject({ repeated: 1, to: "Basic 5" });
    expect(await classOf(a)).toBe("BASIC5");
    expect(await classOf(b)).toBe("BASIC4");
    // Promoting Basic 5 afterwards must not carry the newly promoted pupil on to Basic 6.
    const again = await bulkPromote(superAdmin, b5.id, [], at(9), inPeriod);
    expect(again.skipped).toBeGreaterThanOrEqual(1);
    expect(await classOf(a)).toBe("BASIC5");
    await expectCode(requestPromotion(b, {}, at(5), inPeriod), "FORBIDDEN"); // marked to repeat this session
  });

  it("an access code names a child only after that child has activated it, and the child must still accept", async () => {
    await putSetting(superAdmin.schoolId, "parents", { ...SETTING_DEFAULTS.parents, linkPolicy: "CHILD" }, superAdmin.id);
    await registerParent({ firstName: "Pat", lastName: "codeparent", email: "codeparent@parents.test", phone: "08031110000", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(6));
    const mum = (await session((await login({ identifier: "codeparent@parents.test", password: STRONG }, "student", at(6))).token)).actor;
    await openPortal(mum, at(6));
    const child = await register("promocodechild", "SS1", "SCI", at(7));
    const [used, unused] = (await generateCodes(superAdmin, { count: 2 }, at(9))).codes;
    await activateCode(child, used, at(7));
    const nothing = await requestChildLink(mum, unused, "Mother", at(6));
    expect(await listParentRequests(mum.id)).toHaveLength(0); // an unused code belongs to nobody
    const sent = await requestChildLink(mum, used.toLowerCase(), "Mother", at(6));
    expect(sent).toEqual(nothing); // and the reply does not say which codes are real
    expect(await listParentRequests(mum.id)).toHaveLength(1);
    expect(await listChildren(mum.id)).toHaveLength(0); // holding the code is not proof of parenthood
    await expectCode(childReport(mum, child.id, at(6)), "NOT_FOUND");
    const [req] = (await listStudentConnections(child.id)).pending;
    await respondToLinkRequest(child, req.id, true, at(7));
    expect(await listChildren(mum.id)).toHaveLength(1);
  });
});

describe("Parent access codes", () => {
  const at = (n: number) => ({ ip: `10.97.0.${n}`, userAgent: "vitest" });
  const DAY = 86_400_000;
  let dad: Actor;
  let child: Actor;

  beforeAll(async () => {
    await putSetting(superAdmin.schoolId, "parents", { ...SETTING_DEFAULTS.parents, linkPolicy: "CHILD" }, superAdmin.id);
    await registerParent({ firstName: "Dan", lastName: "Locked", email: "locked@parents.test", phone: "08031110000", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(1));
    dad = (await session((await login({ identifier: "locked@parents.test", password: STRONG }, "student", at(1))).token)).actor;
    child = await register("lockedchild", "JSS1", "JSS", at(2));
  });

  it("a new parent account is locked until a parent access code is activated", async () => {
    const a = await getParentAccess(dad.id);
    expect(a).toMatchObject({ active: false, source: "NONE", status: "NONE" });
    await expectCode(requireParentAccess(dad.id), "ACCESS_REQUIRED");
    await expectCode(childReport(dad, child.id, at(1)), "ACCESS_REQUIRED");
    await expectCode(listParentArticles(dad), "ACCESS_REQUIRED");
    await expectCode(listParentRooms(dad), "ACCESS_REQUIRED");
    await expectCode(startQuiz(dad, "PARENTING", at(1), "2026-10-05"), "ACCESS_REQUIRED");
  });

  it("student and parent codes cannot be swapped", async () => {
    const [studentCode] = (await generateCodes(superAdmin, { count: 1 }, at(3))).codes;
    const [parentCode] = (await generateCodes(superAdmin, { count: 1, audience: "PARENT", durationDays: 60 }, at(3))).codes;
    await expectCode(activateCode(dad, studentCode, at(1)), "INVALID_CODE");
    await expectCode(activateCode(child, parentCode, at(2)), "INVALID_CODE");
    expect((await getParentAccess(dad.id)).active).toBe(false);
    expect((await getAccessState(child.id)).status).toBe("NONE");
    // Both codes are still unused and work for the right kind of account.
    await activateCode(child, studentCode, at(2));
    const period = await activateCode(dad, parentCode, at(1));
    expect(period.durationDays).toBe(60);
    const a = await getParentAccess(dad.id);
    expect(a).toMatchObject({ active: true, source: "CODE" });
    expect(new Date(a.until!).getTime()).toBeGreaterThan(Date.now() + 59 * DAY);
    expect(await listParentArticles(dad)).toBeInstanceOf(Array);
    // A parent's activated code never identifies a student for linking.
    await requestChildLink(dad, parentCode, "Father", at(1));
    expect(await listParentRequests(dad.id)).toHaveLength(0);
  });

  it("the portal locks again when the code runs out or is suspended, and the school can reopen it", async () => {
    const [p] = await db.select().from(S.studentAccessPeriods).where(eq(S.studentAccessPeriods.userId, dad.id));
    await adjustAccess(superAdmin, p.id, { action: "SUSPEND", reason: "Fees query" }, at(4));
    expect(await getParentAccess(dad.id)).toMatchObject({ active: false, status: "SUSPENDED" });
    await expectCode(listParentRooms(dad), "ACCESS_EXPIRED");
    await adjustAccess(superAdmin, p.id, { action: "RESTORE", reason: "Resolved" }, at(4));
    expect((await getParentAccess(dad.id)).active).toBe(true);
    await adjustAccess(superAdmin, p.id, { action: "END", reason: "Period over" }, at(4));
    expect((await getParentAccess(dad.id)).active).toBe(false);
    await expectCode(childReport(dad, child.id, at(1)), "ACCESS_EXPIRED");
    await assignAccessToParent(superAdmin, dad.id, 30, "Renewed at the office", at(4));
    expect(await getParentAccess(dad.id)).toMatchObject({ active: true, source: "CODE" });
    await expectCode(assignAccessToParent(superAdmin, child.id, 30, "Not a parent", at(4)), "NOT_FOUND");
  });

  it("parents registered before codes were introduced keep the portal for their free period only", async () => {
    await registerParent({ firstName: "Old", lastName: "Timer", email: "oldtimer@parents.test", phone: "08031110000", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(5));
    const old = (await session((await login({ identifier: "oldtimer@parents.test", password: STRONG }, "student", at(5))).token)).actor;
    await db.update(S.users).set({ parentGraceUntil: new Date(Date.now() + 30 * DAY) }).where(eq(S.users.id, old.id));
    const a = await getParentAccess(old.id);
    expect(a).toMatchObject({ active: true, source: "GRACE", endsSoon: false });
    expect((await listParentRooms(old)).rooms).toBeInstanceOf(Array);
    await db.update(S.users).set({ parentGraceUntil: new Date(Date.now() - 1000) }).where(eq(S.users.id, old.id));
    expect(await getParentAccess(old.id)).toMatchObject({ active: false, source: "NONE" });
    await expectCode(listParentRooms(old), "ACCESS_REQUIRED");
    await openPortal(old, at(5));
    expect((await getParentAccess(old.id)).source).toBe("CODE");
  });

  it("the code list tells parent codes from student codes", async () => {
    const parents = await listCodes(superAdmin, { audience: "PARENT", pageSize: 100 });
    expect(parents.rows.length).toBeGreaterThan(0);
    expect(parents.rows.every((r) => r.audience === "PARENT")).toBe(true);
    const students = await listCodes(superAdmin, { audience: "STUDENT", pageSize: 100 });
    expect(students.rows.every((r) => r.audience === "STUDENT")).toBe(true);
  });
});

describe("Launch upgrades: bulk import, class access, transfer, appeals and reports", () => {
  const at = (n: number) => ({ ip: `10.98.0.${n}`, userAgent: "vitest" });
  const sheet = (rows: unknown[][]) => {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([[...STUDENT_IMPORT_COLUMNS], ...rows]), "Students");
    return { name: "students.xlsx", bytes: XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer };
  };
  const asStudent = async (userId: string): Promise<Actor> => {
    const [u] = await db.select().from(S.users).where(eq(S.users.id, userId));
    return { id: u.id, schoolId: u.schoolId, userType: "STUDENT", permissions: new Set(), name: `${u.firstName} ${u.lastName}`, email: u.email };
  };

  it("registers a class from a spreadsheet, with temporary passwords that must be changed", async () => {
    expect((await studentImportTemplate(superAdmin.schoolId)).length).toBeGreaterThan(1000);
    const file = sheet([
      ["Bola", "", "Importone", "Basic 5", "", "bola.import@students.test", "08030000001", "Female", "21/05/2015", "IMP/001", ""],
      ["Chidi", "", "Importtwo", "BASIC5", "", "", "", "M", "2015-03-02", "IMP/002", ""],
      ["Dupe", "", "Importthree", "No Such Class", "", "", "", "", "", "IMP/003", ""],
      ["Efe", "", "Importfour", "Basic 5", "", "not-an-email", "", "", "", "IMP/004", ""],
      ["Femi", "", "Importfive", "Basic 5", "", "", "", "", "", "IMP/001", ""],
    ]);
    const pre = await previewStudentImport(superAdmin, file, at(1));
    expect(pre.ready.map((r) => r.firstName)).toEqual(["Bola", "Chidi"]);
    expect(pre.ready[0].dateOfBirth).toBe("2015-05-21");
    expect(pre.problems.map((x) => x.row)).toEqual([4, 5, 6]);
    const out = await importStudentRows(superAdmin, pre.ready, at(1));
    expect(out.failed).toEqual([]);
    expect(out.created).toHaveLength(2);
    // The pupil with no e-mail signs in with the Student ID and the temporary password.
    const chidi = out.created.find((c) => c.name.startsWith("Chidi"))!;
    expect(chidi.login).toBe("IMP/002");
    const l = await login({ identifier: "IMP/002", password: chidi.temporaryPassword }, "student", at(2));
    const sess = await session(l.token);
    expect(sess.user.mustChangePassword).toBe(true);
    expect(sess.user.userType).toBe("STUDENT");
    // Uploading the same file again creates nobody.
    const again = await previewStudentImport(superAdmin, file, at(1));
    expect(again.ready).toHaveLength(0);
    await expect(importStudentRows(superAdmin, [], at(1))).rejects.toThrow();
  });

  it("gives a whole class access in one go, and only to those without it", async () => {
    const [cls] = await db.select().from(S.classes).where(eq(S.classes.code, "BASIC5"));
    const first = await assignAccessToClass(superAdmin, { classId: cls.id, days: 45, reason: "Term fees paid" }, at(3));
    expect(first.assigned).toBeGreaterThanOrEqual(2);
    expect(first.failed).toBe(0);
    const [bola] = await db.select().from(S.users).where(eq(S.users.email, "bola.import@students.test"));
    const st = await getAccessState(bola.id);
    expect(st.status).toBe("ACTIVE");
    expect(st.durationDays).toBe(45);
    let left = first.remaining;
    for (let i = 0; i < 20 && left > 0; i++) left = (await assignAccessToClass(superAdmin, { classId: cls.id, days: 45, reason: "Term fees paid" }, at(3))).remaining;
    const none = await assignAccessToClass(superAdmin, { classId: cls.id, reason: "Run again" }, at(3));
    expect(none).toMatchObject({ assigned: 0, remaining: 0 });
    await expect(assignAccessToClass(superAdmin, { classId: cls.id, reason: "" }, at(3))).rejects.toThrow();
  });

  it("moves a code activated on the wrong account to the right student", async () => {
    const wrong = await register("transferwrong", "JSS1", "JSS", at(4));
    const right = await register("transferright", "JSS1", "JSS", at(5));
    const [code] = (await generateCodes(superAdmin, { count: 1, durationDays: 90 }, at(6))).codes;
    await activateCode(wrong, code, at(4));
    const [p] = await db.select().from(S.studentAccessPeriods).where(eq(S.studentAccessPeriods.userId, wrong.id));
    await expectCode(transferAccess(superAdmin, p.id, "PPS/nobody", "Wrong account", at(6)), "NOT_FOUND");
    await expectCode(transferAccess(superAdmin, p.id, "PPS/transferwrong", "Wrong account", at(6)), "CONFLICT");
    const r = await transferAccess(superAdmin, p.id, "pps/transferright", "Activated on a sibling's account", at(6));
    expect(r.expiresAt.getTime()).toBe(p.currentExpiresAt.getTime()); // no days added or lost
    expect((await getAccessState(wrong.id)).status).toBe("NONE");
    expect((await getAccessState(right.id)).status).toBe("ACTIVE");
    await expectCode(requireActiveAccess(wrong.id), "ACCESS_REQUIRED");
    // A student who already has access cannot receive a second period.
    const [code2] = (await generateCodes(superAdmin, { count: 1 }, at(6))).codes;
    await activateCode(wrong, code2, at(4));
    const [p2] = await db.select().from(S.studentAccessPeriods).where(eq(S.studentAccessPeriods.userId, wrong.id));
    await expectCode(transferAccess(superAdmin, p2.id, "PPS/transferright", "Second one", at(6)), "CONFLICT");
  });

  it("a parent can enter the access code while registering", async () => {
    const [good] = (await generateCodes(superAdmin, { count: 1, audience: "PARENT" }, at(7))).codes;
    const ok = await registerParent({ firstName: "Reg", lastName: "Withcode", email: "withcode@parents.test", phone: "08031110000", accessCode: good, password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(8));
    expect(ok.accessError).toBeNull();
    expect((await getParentAccess(ok.userId)).active).toBe(true);
    const bad = await registerParent({ firstName: "Reg", lastName: "Badcode", email: "badcode@parents.test", phone: "08031110000", accessCode: "PPS-AAAA-BBBB-CCCC", password: STRONG, confirmPassword: STRONG, acceptTerms: true }, at(9));
    expect(bad.accessError).toBeTruthy(); // the account exists; only the code was refused
    expect((await getParentAccess(bad.userId)).active).toBe(false);
  });

  it("a student appeals a released result once, and staff reply without the score changing", async () => {
    const [r] = await db.select().from(S.results).where(and(eq(S.results.isVoided, false), sql`${S.results.releasedAt} IS NOT NULL`)).limit(1);
    expect(r).toBeTruthy();
    await db.update(S.results).set({ releasedAt: new Date() }).where(eq(S.results.id, r.id));
    const owner = await asStudent(r.userId);
    const other = await register("appealother", "JSS1", "JSS", at(10));
    await expectCode(submitAppeal(other, r.id, { reason: "This is not my result but I want to appeal it." }, at(10)), "NOT_FOUND");
    await expect(submitAppeal(owner, r.id, { reason: "Too short" }, at(11))).rejects.toThrow();
    const before = await openAppealCount(superAdmin.schoolId);
    await submitAppeal(owner, r.id, { questions: "3, 7", reason: "Question 3 has two correct options and I chose one of them." }, at(11));
    expect(await openAppealCount(superAdmin.schoolId)).toBe(before + 1);
    await expectCode(submitAppeal(owner, r.id, { reason: "I would like to appeal the same result a second time." }, at(11)), "CONFLICT");
    const mine = await appealOfResult(owner.id, r.id);
    expect(mine?.status).toBe("OPEN");
    await expectCode(decideAppeal(superAdmin, mine!.id, "UPHELD", "ok", at(12)), "VALIDATION");
    await decideAppeal(superAdmin, mine!.id, "UPHELD", "You are right. Question 3 has been corrected and your result will be reviewed.", at(12));
    await expectCode(decideAppeal(superAdmin, mine!.id, "REJECTED", "Changing my mind after answering.", at(12)), "CONFLICT");
    const [after] = await db.select().from(S.results).where(eq(S.results.id, r.id));
    expect(after.percentage).toBe(r.percentage);
    expect((await listAppeals(superAdmin.schoolId, "UPHELD")).rows.some((x) => x.a.id === mine!.id)).toBe(true);
    // Outside the appeal period nothing can be sent.
    const [old] = await db.select().from(S.results).where(and(eq(S.results.isVoided, false), sql`${S.results.id} <> ${r.id}`)).limit(1);
    if (old) {
      await db.update(S.results).set({ releasedAt: new Date(Date.now() - 30 * 86_400_000) }).where(eq(S.results.id, old.id));
      await expectCode(submitAppeal(await asStudent(old.userId), old.id, { reason: "This result is a month old and I only noticed now." }, at(13)), "CONFLICT");
    }
  });

  it("every report runs against live data", async () => {
    for (const r of REPORTS) expect(await runReport(superAdmin.schoolId, r.kind)).toBeInstanceOf(Array);
    const signups = await runReport(superAdmin.schoolId, "registrations");
    expect(signups).toHaveLength(26);
    const parents = await runReport(superAdmin.schoolId, "parent-accounts");
    expect(parents.length).toBeGreaterThan(0);
  });
});

describe("Feature switches for results and resources, and daily reminders", () => {
  const at = (n: number) => ({ ip: `10.99.0.${n}`, userAgent: "vitest" });

  it("a code set up without Results or Learning Resources keeps those closed", async () => {
    const limited = await register("featlimited", "JSS1", "JSS", at(1));
    const full = await register("featfull", "JSS1", "JSS", at(2));
    // No access at all: past results stay readable, so nothing is withheld.
    expect(await featureWithheld(limited.id, "RESULTS")).toBe(false);
    const [narrow] = (await generateCodes(superAdmin, { count: 1, features: ["CBT", "STUDY_CENTRE"] }, at(3))).codes;
    const [standard] = (await generateCodes(superAdmin, { count: 1 }, at(3))).codes;
    await activateCode(limited, narrow, at(1));
    await activateCode(full, standard, at(2));
    expect(await featureWithheld(limited.id, "RESULTS")).toBe(true);
    expect(await featureWithheld(full.id, "RESULTS")).toBe(false);
    expect(await listStudentResults(limited)).toEqual([]);
    await expectCode(listEntriesForStudent(limited, { kind: "WORD" }), "ACCESS_REQUIRED");
    expect(await listEntriesForStudent(full, { kind: "WORD" })).toBeInstanceOf(Array);
  });

  it("reminds a class once about an examination and an assignment, and a student about today's timetable", async () => {
    const [mth] = await db.select().from(S.subjects).where(eq(S.subjects.code, "MTH"));
    const [exam] = await db.select().from(S.examinations).where(eq(S.examinations.status, "PUBLISHED")).limit(1);
    expect(exam).toBeTruthy();
    await db.update(S.examinations).set({ startsAt: new Date(Date.now() + 6 * 3_600_000), endsAt: new Date(Date.now() + 5 * 86_400_000) }).where(eq(S.examinations.id, exam.id));
    const [asg] = await db.select().from(S.assignments).where(and(eq(S.assignments.status, "PUBLISHED"), eq(S.assignments.subjectId, mth.id))).limit(1);
    if (asg) await db.update(S.assignments).set({ dueAt: new Date(Date.now() + 10 * 3_600_000) }).where(eq(S.assignments.id, asg.id));
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" }).format(new Date());
    const [link] = await db.select().from(S.guardianLinks).limit(1);
    expect(link).toBeTruthy();
    await db.insert(S.studySchedules).values({ schoolId: superAdmin.schoolId, parentUserId: link.parentUserId, studentUserId: link.studentUserId, title: "Reminder test reading", date: today, startTime: "16:00" });
    const first = await sendDailyReminders();
    expect(first).toBeGreaterThanOrEqual(2);
    const title = `Examination soon: ${exam.title}`;
    const count = async () => (await db.select().from(S.notifications).where(eq(S.notifications.title, title))).length;
    expect(await count()).toBe(1);
    const mine = await db.select().from(S.notifications).where(and(eq(S.notifications.userId, link.studentUserId), eq(S.notifications.title, "Today on your study timetable")));
    expect(mine.some((n) => n.body.includes("16:00 Reminder test reading"))).toBe(true);
    await sendDailyReminders();
    expect(await count()).toBe(1); // class notices are not repeated
    await db.update(S.examinations).set({ startsAt: null, endsAt: null }).where(eq(S.examinations.id, exam.id));
  });
});
