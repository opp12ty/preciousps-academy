import { randomInt } from "node:crypto";
import { and, desc, eq, inArray, isNull, sql } from "drizzle-orm";
import { getDb } from "../db";
import { studentAccessPeriods, classes, departments, guardianRequests, examinationAttempts, examinations, forumSuspensions, guardianCodes, guardianLinks, learningProgress, lessons, results, students, subjects, topics, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { getAccessState, requireParentAccess, studentOfAccessCode } from "./access";
import { notifyUser } from "./notifications";
import { getSetting } from "../settings";
import { recommendedPractice } from "./analytics";

/**
 * Parents and guardians. A parent account sees only the children linked to it, and a child is
 * linked with a one-time code that staff generate for that child — so nobody can attach
 * themselves to a student by guessing a name or Student ID.
 */

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I
const CODE_DAYS = 30;
const newCode = () => `PG-${Array.from({ length: 8 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("").replace(/(.{4})/, "$1-")}`;
export const normaliseGuardianCode = (raw: string) => raw.trim().toUpperCase().replace(/\s+/g, "");

export async function generateGuardianCode(actor: Actor, studentUserId: string, ctx: ReqCtx) {
  const db = getDb();
  const [st] = await db
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName })
    .from(users)
    .where(and(eq(users.id, studentUserId), eq(users.schoolId, actor.schoolId), eq(users.userType, "STUDENT"), isNull(users.deletedAt)));
  if (!st) throw new AppError("NOT_FOUND", "Student not found.");
  const expiresAt = new Date(Date.now() + CODE_DAYS * 86_400_000);
  for (let attempt = 0; ; attempt++) {
    try {
      const [row] = await db.insert(guardianCodes).values({ schoolId: actor.schoolId, code: newCode(), studentUserId, createdBy: actor.id, expiresAt }).returning();
      await audit({ actor, action: "guardian.code_generated", entityType: "user", entityId: studentUserId, summary: `Parent link code for ${st.firstName} ${st.lastName}` }, ctx);
      return { code: row.code, expiresAt, student: `${st.firstName} ${st.lastName}` };
    } catch (e) {
      const c = e as { code?: string; cause?: { code?: string } };
      if ((c.code === "23505" || c.cause?.code === "23505") && attempt < 5) continue;
      throw e;
    }
  }
}

export async function revokeGuardianCode(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb()
    .update(guardianCodes)
    .set({ revokedAt: new Date() })
    .where(and(eq(guardianCodes.id, id), eq(guardianCodes.schoolId, actor.schoolId), isNull(guardianCodes.usedAt), isNull(guardianCodes.revokedAt)))
    .returning({ id: guardianCodes.id });
  if (!row) throw new AppError("NOT_FOUND", "That code has already been used or cancelled.");
  await audit({ actor, action: "guardian.code_revoked", entityType: "guardian_code", entityId: id }, ctx);
}

/* ------------------------------------------------------------ link requests */

const REQUEST_DAYS = 30;
const RETRY_AFTER_REJECTION_DAYS = 7;
const MAX_PENDING = 10;
/** The same answer whether or not the student exists, so the form cannot be used to look students up. */
const SENT = { sent: true as const, message: "Link request sent. If the details are correct, the student will see your request. Academic information becomes available only after the connection is confirmed. An access code identifies a student only after that student has activated it on their own account." };
const maskEmail = (e: string) => e.replace(/^(.).*?(.?)@(.).*(\..+)$/, "$1•••$2@$3•••$4");

/**
 * Decides a request from the answers so far and the school's policy. Only here is a parent ever
 * linked to a student, so no caller can activate a relationship by any other route.
 */
async function settle(requestId: string, ctx: ReqCtx) {
  const db = getDb();
  const [r] = await db.select().from(guardianRequests).where(eq(guardianRequests.id, requestId));
  if (!r || r.status !== "PENDING") return r?.status ?? "PENDING";
  const { linkPolicy } = await getSetting(r.schoolId, "parents");
  const needChild = linkPolicy !== "SCHOOL";
  const needSchool = linkPolicy !== "CHILD";
  const now = new Date();
  const refused = r.childAccepted === false || r.adminApproved === false;
  const agreed = (!needChild || r.childAccepted === true) && (!needSchool || r.adminApproved === true);
  if (!refused && !agreed) return "PENDING";
  const status = refused ? "REJECTED" : "ACCEPTED";
  await db.transaction(async (tx) => {
    await tx.update(guardianRequests).set({ status, respondedAt: now, updatedAt: now }).where(eq(guardianRequests.id, r.id));
    if (status === "ACCEPTED") await tx.insert(guardianLinks).values({ parentUserId: r.parentUserId, studentUserId: r.studentUserId, relationship: r.relationship }).onConflictDoNothing();
  });
  await audit({ schoolId: r.schoolId, action: status === "ACCEPTED" ? "guardian.link_activated" : "guardian.link_rejected", entityType: "guardian_request", entityId: r.id, summary: `Parent–child link ${status.toLowerCase()}`, metadata: { parentUserId: r.parentUserId, studentUserId: r.studentUserId, policy: linkPolicy } }, ctx);
  await notifyUser({ schoolId: r.schoolId, userId: r.parentUserId, category: "SECURITY", title: status === "ACCEPTED" ? "Child connection confirmed" : "Child connection not accepted", body: status === "ACCEPTED" ? "Your connection with the student has been confirmed. You can now see the information the school allows." : "The request to link a student to your account was not accepted.", link: "/parent" });
  await notifyUser({ schoolId: r.schoolId, userId: r.studentUserId, category: "SECURITY", title: status === "ACCEPTED" ? "Parent connection established" : "Parent connection request closed", body: status === "ACCEPTED" ? "A parent or guardian is now connected to your account and can see your learning progress and results." : "A parent connection request on your account was rejected. No information was shared.", link: "/student/connections" });
  return status;
}

/**
 * A parent asks to be linked to a student, by Student ID, username or e-mail, or with a link code
 * issued by the school (which counts as school verification). This NEVER links the accounts by
 * itself: knowing an identifier or holding a code is not proof of being the parent.
 */
export async function requestChildLink(parent: Actor, identifier: string, relationship: string | undefined, ctx: ReqCtx) {
  if (parent.userType !== "PARENT") throw new AppError("FORBIDDEN", "Only parent and guardian accounts can add a child.");
  await rateLimit("codeActivation", `guardian:${parent.id}`, ctx);
  const raw = (identifier ?? "").trim();
  if (raw.length < 2 || raw.length > 160) throw new AppError("VALIDATION", "Enter the Student ID or the link code the school gave you.", { code: ["Enter the Student ID or link code."] });
  const db = getDb();
  const code = normaliseGuardianCode(raw);
  let studentUserId: string | null = null;
  let schoolVerified = false;
  if (/^PG-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
    const [c] = await db.select().from(guardianCodes).where(and(eq(guardianCodes.code, code), eq(guardianCodes.schoolId, parent.schoolId)));
    if (c && !c.revokedAt && !c.usedAt && c.expiresAt > new Date()) {
      studentUserId = c.studentUserId;
      schoolVerified = true; // staff issued this code for this child
      await db.update(guardianCodes).set({ usedBy: parent.id, usedAt: new Date() }).where(eq(guardianCodes.id, c.id));
    }
  } else if ((studentUserId = await studentOfAccessCode(parent.schoolId, raw))) {
    // The child's own activated access code names the child, nothing more: the child must still accept.
  } else {
    const key = raw.toLowerCase();
    const [st] = await db
      .select({ id: users.id })
      .from(users)
      .innerJoin(students, eq(students.userId, users.id))
      .where(and(eq(users.schoolId, parent.schoolId), eq(users.userType, "STUDENT"), isNull(users.deletedAt), sql`(lower(${students.studentNumber}) = ${key} OR lower(${students.username}) = ${key} OR lower(${users.email}) = ${key})`));
    studentUserId = st?.id ?? null;
  }
  if (!studentUserId) {
    await securityEvent({ type: "INVALID_ACCESS_CODE", userId: parent.id, schoolId: parent.schoolId, detail: { reason: "guardian_request_unknown_student" } }, ctx);
    return SENT;
  }
  const [linked] = await db.select({ p: guardianLinks.parentUserId }).from(guardianLinks).where(and(eq(guardianLinks.parentUserId, parent.id), eq(guardianLinks.studentUserId, studentUserId)));
  if (linked) return SENT;
  const earlier = await db.select().from(guardianRequests).where(and(eq(guardianRequests.parentUserId, parent.id), eq(guardianRequests.studentUserId, studentUserId))).orderBy(desc(guardianRequests.requestedAt));
  const now = new Date();
  if (earlier.some((r) => r.status === "BLOCKED")) return SENT;
  if (earlier.some((r) => r.status === "PENDING" && r.expiresAt > now)) return SENT;
  const lastNo = earlier.find((r) => r.status === "REJECTED");
  if (lastNo && now.getTime() - (lastNo.respondedAt ?? lastNo.requestedAt).getTime() < RETRY_AFTER_REJECTION_DAYS * 86_400_000) return SENT;
  // A student who has refused the same parent three times is not asked again; the school must step in.
  if (earlier.filter((r) => r.status === "REJECTED").length >= 3) {
    await db.insert(guardianRequests).values({ schoolId: parent.schoolId, parentUserId: parent.id, studentUserId, status: "BLOCKED", expiresAt: now, reason: "Refused three times" });
    return SENT;
  }
  const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(guardianRequests).where(and(eq(guardianRequests.parentUserId, parent.id), eq(guardianRequests.status, "PENDING")));
  if (n >= MAX_PENDING) throw new AppError("VALIDATION", "You have too many requests waiting. Wait for them to be answered, or contact the school.");
  const [req] = await db
    .insert(guardianRequests)
    .values({ schoolId: parent.schoolId, parentUserId: parent.id, studentUserId, relationship: relationship?.trim().slice(0, 40) || null, adminApproved: schoolVerified ? true : null, expiresAt: new Date(now.getTime() + REQUEST_DAYS * 86_400_000) })
    .returning({ id: guardianRequests.id });
  await audit({ actor: parent, action: "guardian.link_requested", entityType: "guardian_request", entityId: req.id, summary: "Parent asked to be linked to a student", metadata: { studentUserId, schoolVerified } }, ctx);
  await notifyUser({ schoolId: parent.schoolId, userId: studentUserId, category: "SECURITY", title: "Parent link request", body: "A parent or guardian has requested to link your account to their Precious PS parent account. Open Parent Connections to review the request.", link: "/student/connections" });
  await settle(req.id, ctx);
  return SENT;
}

/** Kept for older callers: adding a child now always goes through a request. */
export const linkChild = requestChildLink;

/** The student's own decision. Only the signed-in student the request is addressed to can make it. */
export async function respondToLinkRequest(student: Actor, requestId: string, accept: boolean, ctx: ReqCtx) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only the student can answer this request.");
  if (!/^[0-9a-f-]{36}$/i.test(requestId)) throw new AppError("NOT_FOUND", "Request not found.");
  const db = getDb();
  const [r] = await db.select().from(guardianRequests).where(and(eq(guardianRequests.id, requestId), eq(guardianRequests.studentUserId, student.id)));
  if (!r) {
    await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: student.id, schoolId: student.schoolId, detail: { requestId, via: "guardian_request" } }, ctx);
    throw new AppError("NOT_FOUND", "Request not found.");
  }
  if (r.status !== "PENDING" || r.expiresAt < new Date()) throw new AppError("CONFLICT", "This request is no longer open.");
  if (r.childAccepted !== null) throw new AppError("CONFLICT", "You have already answered this request.");
  await db.update(guardianRequests).set({ childAccepted: accept, childRespondedAt: new Date(), updatedAt: new Date() }).where(eq(guardianRequests.id, r.id));
  await audit({ actor: student, action: accept ? "guardian.child_accepted" : "guardian.child_rejected", entityType: "guardian_request", entityId: r.id, summary: accept ? "Student accepted a parent link request" : "Student rejected a parent link request", metadata: { parentUserId: r.parentUserId } }, ctx);
  return { status: await settle(r.id, ctx) };
}

/** School verification of a request (required under the CHILD_AND_SCHOOL and SCHOOL policies). */
export async function adminDecideLinkRequest(actor: Actor, requestId: string, approve: boolean, reason: string | undefined, ctx: ReqCtx) {
  const db = getDb();
  const [r] = await db.select().from(guardianRequests).where(and(eq(guardianRequests.id, requestId), eq(guardianRequests.schoolId, actor.schoolId)));
  if (!r) throw new AppError("NOT_FOUND", "Request not found.");
  if (r.status !== "PENDING") throw new AppError("CONFLICT", "This request is no longer open.");
  await db.update(guardianRequests).set({ adminApproved: approve, adminId: actor.id, adminAt: new Date(), reason: reason?.trim().slice(0, 300) || r.reason, updatedAt: new Date() }).where(eq(guardianRequests.id, r.id));
  await audit({ actor, action: approve ? "guardian.admin_approved" : "guardian.admin_rejected", entityType: "guardian_request", entityId: r.id, summary: approve ? "School verified a parent link request" : "School rejected a parent link request", metadata: { parentUserId: r.parentUserId, studentUserId: r.studentUserId, reason } }, ctx);
  return { status: await settle(r.id, ctx) };
}

/**
 * Ends an active relationship at once. Allowed for that parent, for staff, and for the student when
 * the school permits it. The parent loses access immediately because access is read from guardian_links.
 */
export async function revokeLink(actor: Actor, parentUserId: string, studentUserId: string, reason: string | undefined, ctx: ReqCtx) {
  const staff = actor.userType === "SUPER_ADMIN" || actor.permissions.has("parents.manage");
  const isParent = actor.userType === "PARENT" && actor.id === parentUserId;
  const isChild = actor.userType === "STUDENT" && actor.id === studentUserId && (await getSetting(actor.schoolId, "parents")).childCanRemove;
  if (!staff && !isParent && !isChild) throw new AppError("FORBIDDEN", "You cannot remove this connection. Please contact the school.");
  const db = getDb();
  const now = new Date();
  const removed = await db
    .delete(guardianLinks)
    .where(and(eq(guardianLinks.parentUserId, parentUserId), eq(guardianLinks.studentUserId, studentUserId), sql`${guardianLinks.studentUserId} IN (SELECT id FROM users WHERE school_id = ${actor.schoolId})`))
    .returning({ id: guardianLinks.studentUserId });
  if (!removed.length) throw new AppError("NOT_FOUND", "Connection not found.");
  await db.update(guardianRequests).set({ status: "REVOKED", revokedAt: now, revokedBy: actor.id, reason: reason?.trim().slice(0, 300) || null, updatedAt: now }).where(and(eq(guardianRequests.parentUserId, parentUserId), eq(guardianRequests.studentUserId, studentUserId), eq(guardianRequests.status, "ACCEPTED")));
  await audit({ actor, action: "guardian.unlinked", entityType: "user", entityId: studentUserId, summary: "Parent–child connection removed", metadata: { parentUserId, reason } }, ctx);
  for (const userId of [parentUserId, studentUserId]) await notifyUser({ schoolId: actor.schoolId, userId, category: "SECURITY", title: "Parent connection removed", body: "A parent–child connection on your account is no longer active.", link: userId === parentUserId ? "/parent" : "/student/connections" });
}

export const unlinkChild = (actor: Actor, parentUserId: string, studentUserId: string, ctx: ReqCtx) => revokeLink(actor, parentUserId, studentUserId, undefined, ctx);

/** A student tells the school that a connection or request looks wrong. */
export async function reportConnection(student: Actor, parentUserId: string, detail: string, ctx: ReqCtx) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only a student can report a parent connection.");
  await securityEvent({ type: "IDOR_ATTEMPT", severity: "MEDIUM", userId: student.id, schoolId: student.schoolId, detail: { reason: "parent_connection_concern", parentUserId, note: detail.slice(0, 300) } }, ctx);
  await audit({ actor: student, action: "guardian.concern_reported", entityType: "user", entityId: parentUserId, summary: "Student reported a parent connection concern", metadata: { detail: detail.slice(0, 300) } }, ctx);
}

async function expireOld(where: ReturnType<typeof and>) {
  await getDb().update(guardianRequests).set({ status: "EXPIRED", updatedAt: new Date() }).where(and(where, eq(guardianRequests.status, "PENDING"), sql`${guardianRequests.expiresAt} < now()`));
}

/** The parent's own requests. Until a request is accepted, only the Student ID and the status are shown. */
export async function listParentRequests(parentUserId: string) {
  await expireOld(eq(guardianRequests.parentUserId, parentUserId));
  const rows = await getDb()
    .select({ id: guardianRequests.id, status: guardianRequests.status, requestedAt: guardianRequests.requestedAt, childAccepted: guardianRequests.childAccepted, adminApproved: guardianRequests.adminApproved, studentNumber: students.studentNumber })
    .from(guardianRequests)
    .innerJoin(students, eq(students.userId, guardianRequests.studentUserId))
    .where(and(eq(guardianRequests.parentUserId, parentUserId), inArray(guardianRequests.status, ["PENDING", "REJECTED", "REVOKED", "EXPIRED"])))
    .orderBy(desc(guardianRequests.requestedAt))
    .limit(30);
  return rows;
}

/** What the student sees under Parent Connections. */
export async function listStudentConnections(studentUserId: string) {
  await expireOld(eq(guardianRequests.studentUserId, studentUserId));
  const db = getDb();
  const [pending, active] = await Promise.all([
    db
      .select({ id: guardianRequests.id, relationship: guardianRequests.relationship, requestedAt: guardianRequests.requestedAt, childAccepted: guardianRequests.childAccepted, firstName: users.firstName, lastName: users.lastName, email: users.email })
      .from(guardianRequests)
      .innerJoin(users, eq(users.id, guardianRequests.parentUserId))
      .where(and(eq(guardianRequests.studentUserId, studentUserId), eq(guardianRequests.status, "PENDING")))
      .orderBy(desc(guardianRequests.requestedAt)),
    db
      .select({ parentUserId: guardianLinks.parentUserId, relationship: guardianLinks.relationship, since: guardianLinks.createdAt, firstName: users.firstName, lastName: users.lastName })
      .from(guardianLinks)
      .innerJoin(users, eq(users.id, guardianLinks.parentUserId))
      .where(eq(guardianLinks.studentUserId, studentUserId)),
  ]);
  return { pending: pending.map((p) => ({ ...p, email: maskEmail(p.email) })), active };
}

export async function listLinkRequestsAdmin(schoolId: string, status?: string) {
  const db = getDb();
  await expireOld(eq(guardianRequests.schoolId, schoolId));
  const rows = await db
    .select({ r: guardianRequests, parentFirst: users.firstName, parentLast: users.lastName, parentEmail: users.email })
    .from(guardianRequests)
    .innerJoin(users, eq(users.id, guardianRequests.parentUserId))
    .where(and(eq(guardianRequests.schoolId, schoolId), status ? eq(guardianRequests.status, status) : undefined))
    .orderBy(desc(guardianRequests.requestedAt))
    .limit(300);
  const kids = rows.length
    ? await db.select({ id: users.id, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, className: classes.name }).from(users).leftJoin(students, eq(students.userId, users.id)).leftJoin(classes, eq(classes.id, students.classId)).where(inArray(users.id, rows.map((x) => x.r.studentUserId)))
    : [];
  return rows.map((x) => ({ ...x, child: kids.find((k) => k.id === x.r.studentUserId) ?? null }));
}

export async function listChildren(parentUserId: string) {
  const db = getDb();
  const rows = await db
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, status: users.status, lastLoginAt: users.lastLoginAt, studentNumber: students.studentNumber, className: classes.name, department: departments.name, relationship: guardianLinks.relationship })
    .from(guardianLinks)
    .innerJoin(users, eq(users.id, guardianLinks.studentUserId))
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(and(eq(guardianLinks.parentUserId, parentUserId), isNull(users.deletedAt)))
    .orderBy(users.firstName);
  return Promise.all(rows.map(async (r) => ({ ...r, access: await getAccessState(r.id) })));
}

/** Everything a parent sees about one child. Refuses children who are not linked to this parent. */
export async function childReport(parent: Actor, studentUserId: string, ctx: ReqCtx) {
  await requireParentAccess(parent.id);
  const db = getDb();
  const child = (await listChildren(parent.id)).find((c) => c.id === studentUserId);
  if (!child) {
    await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: parent.id, schoolId: parent.schoolId, detail: { studentUserId, via: "parent" } }, ctx);
    throw new AppError("NOT_FOUND", "Child not found.");
  }
  const [recommend, recent, study, suspension, inProgress] = await Promise.all([
    recommendedPractice(studentUserId, parent.schoolId),
    db
      .select({ id: results.id, title: examinations.title, examType: examinations.examType, subject: subjects.name, percentage: results.percentage, grade: results.grade, passed: results.passed, createdAt: results.createdAt, timeUsedSec: results.timeUsedSec })
      .from(results)
      .innerJoin(examinations, eq(examinations.id, results.examinationId))
      .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
      // Parents see what the student may see: released results that have not been voided.
      .where(and(eq(results.userId, studentUserId), eq(results.isVoided, false), sql`${results.releasedAt} IS NOT NULL`))
      .orderBy(desc(results.createdAt))
      .limit(30),
    db
      .select({ subject: subjects.name, completed: sql<number>`count(*) FILTER (WHERE ${learningProgress.status} = 'COMPLETED')::int`, started: sql<number>`count(*)::int`, last: sql<Date | null>`max(${learningProgress.updatedAt})` })
      .from(learningProgress)
      .innerJoin(lessons, eq(lessons.id, learningProgress.lessonId))
      .innerJoin(topics, eq(topics.id, lessons.topicId))
      .innerJoin(subjects, eq(subjects.id, topics.subjectId))
      .where(eq(learningProgress.userId, studentUserId))
      .groupBy(subjects.name)
      .orderBy(subjects.name),
    db.select({ reason: forumSuspensions.reason, until: forumSuspensions.until }).from(forumSuspensions).where(and(eq(forumSuspensions.userId, studentUserId), isNull(forumSuspensions.liftedAt))).orderBy(desc(forumSuspensions.createdAt)).limit(1),
    db.select({ n: sql<number>`count(*)::int` }).from(examinationAttempts).where(and(eq(examinationAttempts.userId, studentUserId), eq(examinationAttempts.status, "IN_PROGRESS"))),
  ]);
  const scored = recent.filter((r) => Number.isFinite(r.percentage));
  const activeSuspension = suspension.find((s) => !s.until || s.until > new Date()) ?? null;
  return {
    child,
    recent,
    study,
    /** Topics the child scores lowest in, with lessons that cover them. */
    recommend,
    forumSuspension: activeSuspension,
    examsInProgress: inProgress[0]?.n ?? 0,
    summary: {
      examsTaken: recent.length,
      average: scored.length ? Math.round(scored.reduce((n, r) => n + r.percentage, 0) / scored.length) : null,
      passed: recent.filter((r) => r.passed).length,
      lessonsCompleted: study.reduce((n, s) => n + s.completed, 0),
    },
  };
}

/* ------------------------------------------------------------------ staff */

export async function listGuardianCodes(schoolId: string) {
  return getDb()
    .select({ c: guardianCodes, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, className: classes.name })
    .from(guardianCodes)
    .innerJoin(users, eq(users.id, guardianCodes.studentUserId))
    .leftJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(eq(guardianCodes.schoolId, schoolId))
    .orderBy(desc(guardianCodes.createdAt))
    .limit(300);
}

export async function listParents(schoolId: string) {
  const db = getDb();
  const parents = await db
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, email: users.email, phone: users.phone, status: users.status, lastLoginAt: users.lastLoginAt, createdAt: users.createdAt })
    .from(users)
    .where(and(eq(users.schoolId, schoolId), eq(users.userType, "PARENT"), isNull(users.deletedAt)))
    .orderBy(desc(users.createdAt))
    .limit(500);
  const links = parents.length
    ? await db
        .select({ parentUserId: guardianLinks.parentUserId, studentUserId: guardianLinks.studentUserId, firstName: users.firstName, lastName: users.lastName, className: classes.name })
        .from(guardianLinks)
        .innerJoin(users, eq(users.id, guardianLinks.studentUserId))
        .leftJoin(students, eq(students.userId, users.id))
        .leftJoin(classes, eq(classes.id, students.classId))
        .where(inArray(guardianLinks.parentUserId, parents.map((p) => p.id)))
    : [];
  // Access for the whole list in two queries; getParentAccess() remains the authority for one parent.
  const ids = parents.map((p) => p.id);
  const [periods, grace] = ids.length
    ? await Promise.all([
        db.select({ userId: studentAccessPeriods.userId, status: studentAccessPeriods.status, until: studentAccessPeriods.currentExpiresAt }).from(studentAccessPeriods).where(inArray(studentAccessPeriods.userId, ids)).orderBy(desc(studentAccessPeriods.currentExpiresAt)),
        db.select({ id: users.id, grace: users.parentGraceUntil }).from(users).where(inArray(users.id, ids)),
      ])
    : [[], []];
  const now = new Date();
  const accessOf = (id: string) => {
    const mine = periods.filter((x) => x.userId === id);
    const live = mine.find((x) => x.status === "ACTIVE" && x.until > now);
    if (live) return { active: true, source: "CODE" as const, until: live.until.toISOString(), status: "ACTIVE" };
    const blocked = mine.find((x) => x.status === "SUSPENDED" || x.status === "REVOKED");
    const g = grace.find((x) => x.id === id)?.grace ?? null;
    if (!blocked && g && g > now) return { active: true, source: "GRACE" as const, until: g.toISOString(), status: mine.length ? "EXPIRED" : "NONE" };
    return { active: false, source: "NONE" as const, until: (mine[0]?.until ?? g)?.toISOString() ?? null, status: blocked?.status ?? (mine.length ? "EXPIRED" : "NONE") };
  };
  return parents.map((p) => ({ ...p, access: accessOf(p.id), children: links.filter((l) => l.parentUserId === p.id) }));
}

/** Students matching a name or Student ID, for the "generate a code" form. */
export async function findStudents(schoolId: string, q: string) {
  const term = q.trim();
  if (term.length < 2) return [];
  const like = `%${term.toLowerCase()}%`;
  return getDb()
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, className: classes.name })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(and(eq(users.schoolId, schoolId), eq(users.userType, "STUDENT"), isNull(users.deletedAt), sql`(lower(${users.firstName} || ' ' || ${users.lastName}) LIKE ${like} OR lower(${students.studentNumber}) LIKE ${like} OR lower(${users.email}) LIKE ${like})`))
    .orderBy(users.firstName)
    .limit(25);
}
