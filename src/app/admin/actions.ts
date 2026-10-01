"use server";

/**
 * Admin server actions. Every action re-checks the role/permission on the
 * server (the UI hiding a button is never the security boundary).
 */
import { revalidatePath } from "next/cache";
import { action, type ActionResult } from "@/server/http";
import { AppError } from "@/server/errors";
import { readFormFile } from "@/server/files";
import type { ContentKey } from "@/content/defaults";
import { putSetting, type SettingKey } from "@/server/settings";
import { audit } from "@/server/audit";
import { clearAllRateLimits } from "@/server/rate-limit";
import * as authSvc from "@/server/services/auth";
import * as access from "@/server/services/access";
import * as people from "@/server/services/people";
import * as curriculum from "@/server/services/curriculum";
import * as questions from "@/server/services/questions";
import * as exams from "@/server/services/exams";
import * as assignments from "@/server/services/assignments";
import * as resources from "@/server/services/resources";
import * as imports from "@/server/services/imports";
import * as content from "@/server/services/content";
import * as notifications from "@/server/services/notifications";
import * as ai from "@/server/services/ai";
import * as study from "@/server/services/study";
import * as packs from "@/server/services/content-packs";
import { revokeSession } from "@/server/auth/session";
import { getDb } from "@/server/db";
import { securityEvents, sessions } from "@/server/db/schema";
import { and, eq, isNull } from "drizzle-orm";
import { totpQrDataUrl } from "@/server/auth/totp";

const str = (f: FormData, k: string) => {
  const v = f.get(k);
  return v === null ? undefined : String(v);
};
/** Section select: "ALL" → every section (""), "AUTO" → follow class/topic (undefined). */
const section = (f: FormData) => {
  const v = str(f, "level");
  return v === "ALL" ? "" : v === "AUTO" ? undefined : v;
};
const bool = (f: FormData, k: string) => f.get(k) === "on" || f.get(k) === "true";
const num = (f: FormData, k: string) => {
  const v = f.get(k);
  return v === null || v === "" ? undefined : Number(v);
};
const all = (f: FormData, k: string) => f.getAll(k).map(String).filter(Boolean);

/* ------------------------------------------------------------ students */

export async function updateStudentAction(id: string, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "students.manage" }, (a, ctx) =>
    people.updateStudentAdmin(a, id, {
      firstName: str(f, "firstName"),
      middleName: str(f, "middleName"),
      lastName: str(f, "lastName"),
      email: str(f, "email"),
      phone: str(f, "phone"),
      studentNumber: str(f, "studentNumber"),
      classId: str(f, "classId") || null,
      departmentId: str(f, "departmentId") || null,
      schoolName: str(f, "schoolName"),
      state: str(f, "state"),
      country: str(f, "country"),
      ...(a.userType === "SUPER_ADMIN" ? { allowConcurrentCodes: bool(f, "allowConcurrentCodes") } : {}),
    }, ctx), "Student updated.");
}
export async function setAccountStatusAction(userId: string, status: "ACTIVE" | "SUSPENDED", reason: string) {
  return action({ role: "staff", perm: "students.manage" }, (a, ctx) => authSvc.adminSetAccountStatus(a, userId, status, reason, ctx), status === "ACTIVE" ? "Account reactivated." : "Account suspended.");
}
export async function issueResetLinkAction(userId: string) {
  return action({ role: "staff", perm: "students.security" }, async (a, ctx) => {
    const r = await authSvc.adminIssueResetLink(a, userId, ctx);
    return { url: r.url };
  }, "Reset link issued. The user must set a new password.");
}
export async function tempPasswordAction(userId: string, reason: string) {
  return action({ role: "staff", perm: "students.security" }, (a, ctx) => authSvc.adminSetTemporaryPassword(a, userId, reason, ctx), "Temporary password generated.");
}
export async function forcePasswordChangeAction(userId: string) {
  return action({ role: "staff", perm: "students.security" }, (a, ctx) => authSvc.adminForcePasswordChange(a, userId, ctx), "User must change password at next login.");
}
export async function revokeUserSessionsAction(userId: string) {
  return action({ role: "staff", perm: "students.security" }, async (a, ctx) => ({ count: await authSvc.adminRevokeSessions(a, userId, ctx) }), "All sessions revoked.");
}
export async function removeStudentAction(userId: string, reason: string) {
  return action({ role: "staff", perm: "super.admins" }, (a, ctx) => people.softDeleteStudent(a, userId, reason, ctx), "Student removed.");
}
export async function overrideProgressAction(userId: string, lessonId: string, status: "COMPLETED" | "NOT_STARTED") {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => study.overrideProgress(a, userId, lessonId, status, ctx), "Progress updated.");
}

/* -------------------------------------------------------- access codes */

export async function generateCodesAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "codes.generate" }, (a, ctx) => access.generateCodes(a, { count: num(f, "count") ?? 1, durationDays: num(f, "durationDays"), note: str(f, "note") || undefined }, ctx));
}
export async function codeStatusAction(codeId: string, op: "SUSPEND" | "REVOKE" | "RESTORE", reason: string) {
  return action({ role: "staff", perm: "codes.manage" }, (a, ctx) => access.setCodeStatus(a, codeId, op, reason, ctx).then(() => undefined), "Code updated.");
}
export async function revealCodeAction(codeId: string) {
  return action({ role: "staff", perm: "codes.generate" }, (a, ctx) => access.revealCode(a, codeId, ctx));
}
export async function adjustAccessAction(periodId: string, payload: Record<string, unknown>) {
  return action({ role: "staff", perm: "codes.manage" }, (a, ctx) => access.adjustAccess(a, periodId, payload, ctx).then(() => undefined), "Access updated and synchronised to the student's dashboard.");
}
export async function assignAccessAction(userId: string, days: number | undefined, reason: string) {
  return action({ role: "staff", perm: "codes.generate" }, (a, ctx) => access.assignAccessToStudent(a, userId, days, reason, ctx).then(() => undefined), "Access assigned and activated.");
}
export async function updateUnusedDurationAction(days: number) {
  return action({ role: "staff", perm: "super.settings" }, async (a, ctx) => ({ count: await access.updateUnusedCodeDuration(a, "ALL_UNUSED", days, ctx) }), "Unused codes updated.");
}

/* ------------------------------------------------------ administrators */

export async function createAdminAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "super.admins" }, (a, ctx) =>
    people.createAdmin(a, { firstName: str(f, "firstName"), lastName: str(f, "lastName"), email: str(f, "email"), phone: str(f, "phone"), userType: str(f, "userType") ?? "ADMIN", roleIds: all(f, "roleIds"), password: str(f, "password") || undefined }, ctx),
  );
}
export async function setAdminRolesAction(userId: string, roleIds: string[]) {
  return action({ role: "staff", perm: "super.roles" }, (a, ctx) => people.setAdminRoles(a, userId, roleIds, ctx), "Roles updated.");
}
export async function setStaffStatusAction(userId: string, status: "ACTIVE" | "SUSPENDED", reason: string) {
  return action({ role: "staff", perm: "super.admins" }, (a, ctx) => authSvc.adminSetAccountStatus(a, userId, status, reason, ctx), "Administrator updated.");
}
export async function staffTempPasswordAction(userId: string, reason: string) {
  return action({ role: "staff", perm: "super.admins" }, (a, ctx) => authSvc.adminSetTemporaryPassword(a, userId, reason, ctx), "Temporary password generated.");
}
export async function upsertRoleAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "super.roles" }, (a, ctx) => people.upsertRole(a, id, { name: str(f, "name"), description: str(f, "description"), permissions: all(f, "permissions") }, ctx).then(() => undefined), "Role saved.");
}
export async function deleteRoleAction(id: string) {
  return action({ role: "staff", perm: "super.roles" }, (a, ctx) => people.deleteRole(a, id, ctx), "Role deleted.");
}

/* ---------------------------------------------------------- curriculum */

export async function upsertCatalogAction(kind: "department" | "class" | "term" | "subject", id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, async (a, ctx) => {
    const base = { name: str(f, "name"), code: str(f, "code"), description: str(f, "description"), sortOrder: num(f, "sortOrder") ?? 0 };
    if (kind === "department") await curriculum.upsertDepartment(a, id, { ...base, level: section(f) }, ctx);
    if (kind === "class") await curriculum.upsertClass(a, id, { ...base, level: str(f, "level") }, ctx);
    if (kind === "term") await curriculum.upsertTerm(a, id, { name: base.name, sortOrder: base.sortOrder, startsOn: str(f, "startsOn") || null, endsOn: str(f, "endsOn") || null }, ctx);
    if (kind === "subject") await curriculum.upsertSubject(a, id, { ...base, departmentIds: all(f, "departmentIds") }, ctx);
    revalidatePath("/admin", "layout");
  }, "Saved.");
}
export async function archiveCatalogAction(kind: "department" | "class" | "term" | "subject", id: string, archived: boolean) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => curriculum.setArchived(a, kind, id, archived, ctx), archived ? "Archived." : "Restored.");
}
export async function upsertTopicAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) =>
    curriculum.upsertTopic(a, id, {
      subjectId: str(f, "subjectId"),
      classId: str(f, "classId"),
      termId: str(f, "termId"),
      departmentId: str(f, "departmentId"),
      level: section(f),
      title: str(f, "title"),
      description: str(f, "description"),
      syllabusRef: str(f, "syllabusRef"),
      sortOrder: num(f, "sortOrder") ?? 0,
      isMandatory: bool(f, "isMandatory"),
      prerequisiteTopicId: str(f, "prerequisiteTopicId"),
      status: str(f, "status") ?? "PUBLISHED",
    }, ctx).then(() => undefined), "Topic saved.");
}
export async function upsertSubtopicAction(topicId: string, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => curriculum.upsertSubtopic(a, null, { topicId, title: str(f, "title"), sortOrder: num(f, "sortOrder") ?? 0 }, ctx).then(() => undefined), "Subtopic added.");
}
export async function deleteSubtopicAction(id: string) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => curriculum.deleteSubtopic(a, id, ctx), "Subtopic removed.");
}
export async function upsertLessonAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, async (a, ctx) => {
    const l = await curriculum.upsertLesson(a, id, {
      topicId: str(f, "topicId"),
      subtopicId: str(f, "subtopicId"),
      title: str(f, "title"),
      summary: str(f, "summary"),
      body: str(f, "body") ?? "",
      examples: str(f, "examples"),
      videoUrl: str(f, "videoUrl"),
      audioUrl: str(f, "audioUrl"),
      estimatedMinutes: num(f, "estimatedMinutes") ?? 20,
      sortOrder: num(f, "sortOrder") ?? 0,
      isMandatory: bool(f, "isMandatory"),
      prerequisiteLessonId: str(f, "prerequisiteLessonId"),
      masteryThreshold: num(f, "masteryThreshold") ?? null,
      isLocked: bool(f, "isLocked"),
      status: str(f, "status") ?? "DRAFT",
      questionIds: all(f, "questionIds"),
    }, ctx);
    return { id: l.id };
  }, "Lesson saved.");
}
export async function addLessonResourceAction(lessonId: string, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => curriculum.addLessonResource(a, lessonId, { title: str(f, "title"), kind: str(f, "kind"), url: str(f, "url"), assetId: str(f, "assetId") }, ctx).then(() => undefined), "Material added.");
}
export async function removeLessonResourceAction(id: string) {
  return action({ role: "staff", perm: "curriculum.manage" }, (a, ctx) => curriculum.removeLessonResource(a, id, ctx), "Material removed.");
}

/* ------------------------------------------------------------ questions */

function questionPayload(f: FormData) {
  const type = str(f, "type") ?? "MCQ";
  const texts = all(f, "optionText");
  const matches = f.getAll("optionMatch").map(String);
  const correct = new Set(all(f, "correct"));
  const options = texts.map((text, i) => ({ text, isCorrect: correct.has(String(i)), matchText: matches[i] || null })).filter((o) => o.text.trim());
  let answerSpec: Record<string, unknown> | null = null;
  if (type === "NUMERIC") answerSpec = { value: num(f, "numericValue"), tolerance: num(f, "numericTolerance") ?? 0 };
  if (type === "FILL_BLANK") answerSpec = { accepted: (str(f, "accepted") ?? "").split("|").map((x) => x.trim()).filter(Boolean) };
  return {
    subjectId: str(f, "subjectId"),
    classId: str(f, "classId"),
    departmentId: str(f, "departmentId"),
    level: section(f),
    topicId: str(f, "topicId"),
    subtopicId: str(f, "subtopicId"),
    year: str(f, "year") ? Number(str(f, "year")) : null,
    examType: str(f, "examType") || null,
    difficulty: str(f, "difficulty"),
    type,
    stem: str(f, "stem"),
    imageAssetId: str(f, "imageAssetId"),
    explanation: str(f, "explanation"),
    marks: num(f, "marks") ?? 1,
    options: type === "NUMERIC" || type === "FILL_BLANK" ? [] : options,
    answerSpec,
    source: str(f, "source"),
    copyrightStatus: str(f, "copyrightStatus"),
    licenseInfo: str(f, "licenseInfo"),
    status: str(f, "status"),
  };
}
export async function saveQuestionAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: id ? "questions.edit" : "questions.create" }, async (a, ctx) => {
    const q = id ? await questions.updateQuestion(a, id, questionPayload(f), ctx) : await questions.createQuestion(a, questionPayload(f), ctx);
    return { id: q.id };
  }, "Question saved.");
}
export async function reviewQuestionsAction(ids: string[], decision: "APPROVED" | "REJECTED" | "ARCHIVED" | "PENDING_REVIEW" | "DRAFT", note?: string) {
  const perm = decision === "ARCHIVED" ? "questions.archive" : decision === "DRAFT" || decision === "PENDING_REVIEW" ? "questions.edit" : "questions.review";
  return action({ role: "staff", perm }, async (a, ctx) => ({ count: await questions.reviewQuestions(a, ids, decision, note, ctx) }), "Questions updated.");
}

/* -------------------------------------------------------------- imports */

export async function previewImportAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "questions.import" }, async (a, ctx) => {
    const file = await readFormFile(f);
    const r = await imports.previewImport(a, file, { subjectId: str(f, "subjectId"), classId: str(f, "classId"), departmentId: str(f, "departmentId"), level: section(f), year: str(f, "year"), examType: str(f, "examType") || null, source: str(f, "source"), copyrightStatus: str(f, "copyrightStatus") ?? "ORIGINAL", licenseInfo: str(f, "licenseInfo") }, ctx);
    return { importId: r.importId };
  });
}
export async function editImportItemAction(importId: string, index: number, payload: Record<string, unknown>) {
  return action({ role: "staff", perm: "questions.import" }, (a) => imports.editImportItem(a, importId, index, payload).then(() => undefined), "Item updated and re-validated.");
}
export async function commitImportAction(importId: string, selected: number[] | "ALL_VALID") {
  return action({ role: "staff", perm: "questions.import" }, (a, ctx) => imports.commitImport(a, importId, selected, ctx));
}

/* ------------------------------------------------------------------ AI */

export async function aiGenerateAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "questions.ai" }, (a, ctx) =>
    ai.generateQuestions(a, { subjectId: str(f, "subjectId"), classId: str(f, "classId"), level: section(f), topicId: str(f, "topicId"), topicText: str(f, "topicText"), difficulty: str(f, "difficulty"), count: num(f, "count") ?? 5, type: str(f, "type") ?? "MCQ" }, ctx),
  );
}

/* --------------------------------------------------------- examinations */

function examPayload(f: FormData) {
  const years = all(f, "poolYears").map(Number).filter(Boolean);
  const topicIds = all(f, "poolTopicIds");
  const difficulties = all(f, "poolDifficulties");
  return {
    title: str(f, "title"),
    description: str(f, "description"),
    subjectId: str(f, "subjectId"),
    classId: str(f, "classId"),
    departmentId: str(f, "departmentId"),
    level: section(f),
    year: str(f, "year") ? Number(str(f, "year")) : null,
    examType: str(f, "examType"),
    questionCount: num(f, "questionCount"),
    durationMinutes: num(f, "durationMinutes"),
    totalMarks: num(f, "totalMarks") ?? null,
    passMark: num(f, "passMark") ?? 50,
    randomizeQuestions: bool(f, "randomizeQuestions"),
    randomizeOptions: bool(f, "randomizeOptions"),
    negativeMarking: num(f, "negativeMarking") ?? 0,
    startsAt: str(f, "startsAt") ? new Date(`${str(f, "startsAt")}:00+01:00`) : null,
    endsAt: str(f, "endsAt") ? new Date(`${str(f, "endsAt")}:00+01:00`) : null,
    maxAttempts: num(f, "maxAttempts") ?? 1,
    requiresAccess: bool(f, "requiresAccess"),
    resultVisibility: str(f, "resultVisibility") ?? "IMMEDIATE",
    showExplanations: bool(f, "showExplanations"),
    poolFilter: years.length || topicIds.length || difficulties.length || bool(f, "poolMatchClass") ? { years, topicIds, difficulties, matchClass: bool(f, "poolMatchClass") } : null,
  };
}
export async function saveExamAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "exams.manage" }, async (a, ctx) => {
    const e = id ? await exams.updateExam(a, id, examPayload(f), ctx) : await exams.createExam(a, examPayload(f), ctx);
    return { id: e.id };
  }, "Examination saved.");
}
export async function setExamStatusAction(id: string, status: "DRAFT" | "PUBLISHED" | "ARCHIVED") {
  return action({ role: "staff", perm: "exams.publish" }, (a, ctx) => exams.setExamStatus(a, id, status, ctx), status === "PUBLISHED" ? "Examination published." : "Examination updated.");
}
export async function releaseResultsAction(examId: string, release: boolean) {
  return action({ role: "staff", perm: "results.manage" }, async (a, ctx) => ({ count: await exams.releaseResults(a, examId, release, ctx) }), release ? "Results released to students." : "Results withheld.");
}
export async function forceSubmitAction(attemptId: string) {
  return action({ role: "staff", perm: "exams.attempts" }, (a, ctx) => exams.adminForceSubmit(a, attemptId, ctx).then(() => undefined), "Attempt submitted.");
}
export async function voidResultAction(resultId: string, reason: string) {
  return action({ role: "staff", perm: "results.manage" }, (a, ctx) => exams.voidResult(a, resultId, reason, ctx), "Attempt voided. The student may retake if attempts allow.");
}
export async function remarksAction(resultId: string, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "results.manage" }, (a, ctx) => exams.setResultRemarks(a, resultId, str(f, "remarks") ?? "", ctx), "Remarks saved.");
}

/* --------------------------------------------------------- assignments */

export async function saveAssignmentAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "assignments.manage" }, async (a, ctx) => {
    const r = await assignments.upsertAssignment(a, id, {
      title: str(f, "title"),
      instructions: str(f, "instructions"),
      subjectId: str(f, "subjectId"),
      classId: str(f, "classId"),
      departmentId: str(f, "departmentId"),
      level: section(f),
      topicId: str(f, "topicId"),
      lessonId: str(f, "lessonId"),
      kind: str(f, "kind") ?? "ASSIGNMENT",
      startsAt: str(f, "startsAt") ? new Date(`${str(f, "startsAt")}:00+01:00`) : null,
      dueAt: str(f, "dueAt") ? new Date(`${str(f, "dueAt")}:00+01:00`) : null,
      attemptLimit: num(f, "attemptLimit") ?? 1,
      passMark: num(f, "passMark") ?? 50,
      autoMark: true,
      showResult: bool(f, "showResult"),
      showExplanations: bool(f, "showExplanations"),
      status: str(f, "status") ?? "DRAFT",
      questionIds: all(f, "questionIds"),
    }, ctx);
    return { id: r.id };
  }, "Saved.");
}

/* ------------------------------------------------------------ resources */

export async function saveResourceAction(id: string | null, _: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "resources.manage" }, (a, ctx) =>
    resources.upsertResource(a, id, {
      title: str(f, "title"),
      description: str(f, "description"),
      subjectId: str(f, "subjectId"),
      departmentId: str(f, "departmentId"),
      classId: str(f, "classId"),
      level: section(f),
      topicId: str(f, "topicId"),
      resourceType: str(f, "resourceType"),
      url: str(f, "url"),
      assetId: str(f, "assetId"),
      thumbnailUrl: str(f, "thumbnailUrl"),
      platform: str(f, "platform"),
      durationMinutes: num(f, "durationMinutes") ?? null,
      isRecommended: bool(f, "isRecommended"),
      status: str(f, "status") ?? "DRAFT",
    }, ctx).then(() => undefined), "Resource saved.");
}
export async function resourceStatusAction(id: string, status: "DRAFT" | "PUBLISHED" | "ARCHIVED") {
  return action({ role: "staff", perm: "resources.manage" }, (a, ctx) => resources.setResourceStatus(a, id, status, ctx), "Resource updated.");
}

/* ------------------------------------------------------- notifications */

export async function broadcastAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "notifications.send" }, (a, ctx) =>
    notifications.broadcast(a, { category: (str(f, "category") ?? "ANNOUNCEMENT") as "ANNOUNCEMENT", title: str(f, "title") ?? "", body: str(f, "body") ?? "", link: str(f, "link") || undefined, audience: { classId: str(f, "classId") || null, departmentId: str(f, "departmentId") || null, level: section(f) || null } }, ctx).then(() => undefined), "Announcement sent.");
}

/* ----------------------------------------------- settings, CMS, branding */

export async function saveSettingAction(key: SettingKey, value: unknown) {
  return action({ role: "staff", perm: "super.settings" }, async (a, ctx) => {
    await putSetting(a.schoolId, key, value, a.id);
    await audit({ actor: a, action: "settings.updated", entityType: "setting", entityId: key, metadata: value }, ctx);
    revalidatePath("/", "layout");
  }, "Settings saved.");
}
export async function saveContentAction(key: ContentKey, value: unknown) {
  return action({ role: "staff", perm: "super.content" }, async (a, ctx) => {
    await content.putContent(a, key, value as never, ctx);
    revalidatePath("/", "layout");
  }, "Content published.");
}
export async function restoreContentAction(key: ContentKey, version: number) {
  return action({ role: "staff", perm: "super.content" }, async (a, ctx) => {
    await content.restoreContentVersion(a, key, version, ctx);
    revalidatePath("/", "layout");
  }, "Previous version restored.");
}

/* ------------------------------------------------------------ security */

export async function beginTotpAction() {
  return action({ role: "staff" }, async (a) => {
    const secret = await authSvc.beginTotpEnrolment(a);
    const { qr, uri } = await totpQrDataUrl(secret, a.email);
    return { secret, qr, uri };
  });
}
export async function confirmTotpAction(code: string) {
  return action({ role: "staff" }, async (a, ctx) => ({ recoveryCodes: await authSvc.confirmTotpEnrolment(a, code, ctx) }), "Two-factor authentication enabled.");
}
export async function regenerateRecoveryAction() {
  return action({ role: "staff" }, async (a, ctx) => ({ recoveryCodes: await authSvc.regenerateRecoveryCodes(a, ctx) }), "New recovery codes generated.");
}
export async function disableTotpAction(password: string) {
  return action({ role: "staff" }, (a, ctx) => authSvc.disableTotp(a, password, ctx), "Two-factor authentication disabled.");
}
export async function revokeAnySessionAction(sessionId: string) {
  return action({ role: "staff", perm: "super.security" }, async (a, ctx) => {
    const [s] = await getDb().select({ id: sessions.id, userId: sessions.userId }).from(sessions).where(and(eq(sessions.id, sessionId), isNull(sessions.revokedAt)));
    if (!s) throw new AppError("NOT_FOUND", "Session not found.");
    await revokeSession(s.id, "ADMIN_REVOKED");
    await audit({ actor: a, action: "security.session_revoked", entityType: "session", entityId: s.id, metadata: { userId: s.userId } }, ctx);
  }, "Session revoked.");
}
export async function resolveSecurityEventAction(id: string) {
  return action({ role: "staff", perm: "super.security" }, async (a, ctx) => {
    await getDb().update(securityEvents).set({ resolvedAt: new Date(), resolvedBy: a.id }).where(eq(securityEvents.id, id));
    await audit({ actor: a, action: "security.event_resolved", entityType: "security_event", entityId: id }, ctx);
  }, "Marked as resolved.");
}

/* ------------------------------------------------------------ content packs */

export async function previewPackAction(_: ActionResult | null, f: FormData) {
  return action({ role: "staff", perm: "curriculum.manage" }, async (a, ctx) => {
    const r = await packs.previewPack(a, await readFormFile(f), ctx);
    return { importId: r.importId };
  });
}
export async function commitPackAction(importId: string) {
  return action({ role: "staff", perm: "curriculum.manage" }, async (a, ctx) => {
    const c = await packs.commitPack(a, importId, ctx);
    revalidatePath("/admin", "layout");
    return c;
  }, "Content pack imported. Review and approve the questions, then publish.");
}
export async function approvePackAction(importId: string) {
  return action({ role: "staff", perm: "questions.review" }, async (a, ctx) => {
    const n = await packs.approvePackQuestions(a, importId, ctx);
    return { approved: n };
  }, "Questions approved.");
}
export async function publishPackAction(importId: string) {
  return action({ role: "staff", perm: "curriculum.manage" }, async (a, ctx) => {
    const r = await packs.publishPack(a, importId, ctx);
    revalidatePath("/admin", "layout");
    return r;
  }, "Published. Anything that could not be published yet is listed on this page.");
}

export async function flushOutboxAction() {
  return action({ role: "staff", perm: "super.settings" }, async (a, ctx) => {
    const r = await notifications.flushOutbox(a, ctx);
    revalidatePath("/admin/notifications");
    return r;
  }, "Held e-mails were retried — check the outbox for results.");
}
export async function sendTestEmailAction() {
  return action({ role: "staff", perm: "super.settings" }, async (a, ctx) => {
    await notifications.sendTestEmail(a, ctx);
  }, "Test e-mail sent to your address.");
}

export async function clearRateLimitsAction() {
  return action({ role: "staff", perm: "super.security" }, async (a, ctx) => {
    const n = await clearAllRateLimits();
    await audit({ actor: a, action: "security.rate_limits_cleared", entityType: "rate_limit", entityId: a.schoolId, summary: `Cleared ${n} rate-limit counters` }, ctx);
    return { cleared: n };
  }, "All rate-limit blocks were cleared.");
}
