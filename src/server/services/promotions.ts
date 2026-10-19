import { and, asc, desc, eq, inArray, isNull, sql } from "drizzle-orm";
import { getDb } from "../db";
import { assignmentAttempts, awards, classes, departments, examinationAttempts, hubSessions, learningAttempts, learningProgress, loyaltyPoints, promotions, quizAttempts, results, students, studySchedules, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { notifyUser } from "./notifications";
import { resolvePlacement, sectionCond } from "./scope";

/**
 * Promotion from one class to the next. The rules that stop it being used to cheat:
 *   1. a student can only move to the NEXT class, never back and never past one;
 *   2. only once in an academic session;
 *   3. only inside the promotion window the school sets (by default the long vacation and the
 *      first weeks of the new session: 1 August to 31 October);
 *   4. a student who registered during that window chose the new session's class already;
 *   5. unless the school switches on self-promotion, staff must approve each request;
 *   6. every request, approval, rejection and repeat is written to the audit log.
 *
 * Whenever a student's class changes, their work starts afresh in the new class (see resetActivity).
 * The access code and its remaining days are never touched by a class change.
 */

/**
 * Starts a student afresh after a class change. Lesson progress, classwork, assignments, quizzes,
 * the study timetable and loyalty points are cleared, and an examination in progress is closed.
 * Moving UP keeps released results as the record of the class just finished. A CORRECTION (a move
 * down, or sideways, made by staff because the wrong class was chosen) also voids the results, since
 * they were earned in a class the student was never meant to be in. Voided results stay in the
 * records for audit but no longer count anywhere. Access periods and codes are left exactly as they are.
 */
export async function resetActivity(userId: string, mode: "PROMOTION" | "CORRECTION") {
  const db = getDb();
  await db.transaction(async (tx) => {
    await tx.delete(learningProgress).where(eq(learningProgress.userId, userId));
    await tx.delete(learningAttempts).where(eq(learningAttempts.userId, userId));
    await tx.delete(assignmentAttempts).where(eq(assignmentAttempts.userId, userId));
    await tx.delete(quizAttempts).where(eq(quizAttempts.userId, userId));
    await tx.delete(hubSessions).where(eq(hubSessions.userId, userId));
    await tx.delete(studySchedules).where(eq(studySchedules.studentUserId, userId));
    await tx.delete(loyaltyPoints).where(eq(loyaltyPoints.userId, userId));
    await tx.update(examinationAttempts).set({ status: "VOIDED", voidReason: "Class changed" }).where(and(eq(examinationAttempts.userId, userId), eq(examinationAttempts.status, "IN_PROGRESS")));
    if (mode === "CORRECTION") {
      await tx.update(results).set({ isVoided: true, voidReason: "Class corrected by the school" }).where(and(eq(results.userId, userId), eq(results.isVoided, false)));
      await tx.delete(awards).where(and(eq(awards.userId, userId), sql`${awards.publishedAt} IS NULL`));
    }
  });
}

/**
 * Staff move one student to any class: down (demotion), up, or across. For correcting a class chosen
 * by mistake at registration. Never available to students or parents. It also uses up the student's
 * one promotion for the session, so the correction cannot be undone by a self-promotion.
 */
export async function moveStudentClass(actor: Actor, userId: string, raw: { classId: string; departmentId?: string | null; reason: string }, ctx: ReqCtx, now = new Date()) {
  const reason = (raw.reason ?? "").trim();
  if (reason.length < 5) throw new AppError("VALIDATION", "Record a reason of at least 5 characters.");
  const db = getDb();
  const [st] = await db.select({ classId: students.classId, departmentId: students.departmentId, kind: students.accountKind, firstName: users.firstName, lastName: users.lastName }).from(students).innerJoin(users, eq(users.id, students.userId)).where(and(eq(students.userId, userId), eq(students.schoolId, actor.schoolId), isNull(users.deletedAt)));
  if (!st) throw new AppError("NOT_FOUND", "Student not found.");
  if (st.kind === "SCHOOL") throw new AppError("FORBIDDEN", "A school account switches class from its own dashboard.");
  const placement = await resolvePlacement(actor.schoolId, raw.classId, raw.departmentId || null, db);
  if (placement.classId === st.classId && placement.departmentId === st.departmentId) throw new AppError("CONFLICT", "The student is already in that class and department.");
  const rungs = await ladder(actor.schoolId);
  const from = rungs.findIndex((c) => c.id === st.classId);
  const to = rungs.findIndex((c) => c.id === placement.classId);
  const direction = to > from ? "PROMOTED" : to < from ? "DEMOTED" : "MOVED";
  const [cfg, { timezone }] = await Promise.all([getSetting(actor.schoolId, "promotion"), getSetting(actor.schoolId, "localization")]);
  const session = sessionFor(now, cfg.windowStart, timezone);
  const values = { schoolId: actor.schoolId, userId, fromClassId: st.classId ?? placement.classId, toClassId: placement.classId, toDepartmentId: placement.departmentId, session, status: "APPROVED", method: "CORRECTION", note: reason.slice(0, 300), decidedBy: actor.id, decidedAt: now };
  await db.insert(promotions).values(values).onConflictDoUpdate({ target: [promotions.userId, promotions.session], set: values });
  await db.update(students).set({ classId: placement.classId, departmentId: placement.departmentId }).where(eq(students.userId, userId));
  await resetActivity(userId, direction === "PROMOTED" ? "PROMOTION" : "CORRECTION");
  const name = rungs[to]?.name ?? "the new class";
  await audit({ actor, action: `promotion.${direction.toLowerCase()}_by_staff`, entityType: "user", entityId: userId, summary: `${st.firstName} ${st.lastName}: ${rungs[from]?.name ?? "?"} → ${name} — ${reason}`, metadata: { fromClassId: st.classId, toClassId: placement.classId, departmentId: placement.departmentId, session } }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId, category: "ANNOUNCEMENT", title: `Your class is now ${name}`, body: `The school has placed you in ${name}. Your lessons, classwork and tests now follow this class and your earlier activity has been cleared so that you start afresh. Your access code and its remaining days are unchanged.`, link: "/student" });
  return { direction, to: name };
}



const md = (d: Date, tz: string) => new Intl.DateTimeFormat("en-CA", { timeZone: tz, month: "2-digit", day: "2-digit" }).format(d); // "MM-DD"
const yearOf = (d: Date, tz: string) => Number(new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric" }).format(d));

/** The academic session a date belongs to for promotion: from the window's opening month, "2026/2027". */
export function sessionFor(now: Date, windowStart: string, tz: string) {
  const y = yearOf(now, tz);
  return md(now, tz) >= windowStart ? `${y}/${y + 1}` : `${y - 1}/${y}`;
}
export const inWindow = (now: Date, cfg: { windowStart: string; windowEnd: string }, tz: string) => md(now, tz) >= cfg.windowStart && md(now, tz) <= cfg.windowEnd;

async function ladder(schoolId: string) {
  return getDb().select({ id: classes.id, name: classes.name, level: classes.level, sortOrder: classes.sortOrder }).from(classes).where(and(eq(classes.schoolId, schoolId), isNull(classes.archivedAt))).orderBy(asc(classes.sortOrder));
}

export interface PromotionState {
  enabled: boolean;
  session: string;
  open: boolean;
  window: string;
  current: { id: string; name: string } | null;
  next: { id: string; name: string } | null;
  /** Departments to choose from in the next class (e.g. Science, Commercial, Arts for SS1). Empty when there is no choice. */
  departments: { id: string; name: string }[];
  record: { status: string; note: string | null; toClass: string | null } | null;
  canRequest: boolean;
  reason: string | null;
  selfService: boolean;
  keepDepartmentId: string | null;
}

/** Everything the student's promotion screen needs, and the single place eligibility is decided. */
export async function promotionState(student: Actor, now = new Date()): Promise<PromotionState> {
  const db = getDb();
  const [cfg, { timezone }] = await Promise.all([getSetting(student.schoolId, "promotion"), getSetting(student.schoolId, "localization")]);
  const session = sessionFor(now, cfg.windowStart, timezone);
  const open = cfg.enabled && inWindow(now, cfg, timezone);
  const [st] = await db.select({ classId: students.classId, departmentId: students.departmentId, createdAt: students.createdAt }).from(students).where(eq(students.userId, student.id));
  const rungs = await ladder(student.schoolId);
  const at = rungs.findIndex((c) => c.id === st?.classId);
  const current = at >= 0 ? rungs[at] : null;
  const next = at >= 0 && at < rungs.length - 1 ? rungs[at + 1] : null;
  const [row] = await db.select({ status: promotions.status, note: promotions.note, toClassId: promotions.toClassId }).from(promotions).where(and(eq(promotions.userId, student.id), eq(promotions.session, session)));
  const opts = next ? await db.select({ id: departments.id, name: departments.name }).from(departments).where(and(eq(departments.schoolId, student.schoolId), isNull(departments.archivedAt), sectionCond(departments.level, next.level))) : [];
  // A student keeps the department they are in (Science stays Science); a choice is needed only on entering a new section.
  const keeps = opts.some((o) => o.id === st?.departmentId) ? st!.departmentId : null;
  // The first day of this year's window, in school time, as a comparable date string.
  const openedOn = `${session.slice(0, 4)}-${cfg.windowStart}`;
  const joinedOn = st ? new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(st.createdAt) : "";
  const reason = !cfg.enabled
    ? "Promotion is switched off at the moment."
    : !current
      ? "Your class is not set. Please contact the school."
      : row && row.status !== "REJECTED"
        ? row.status === "PENDING"
          ? "Your request is waiting for the school to approve it."
          : row.status === "REPEAT"
            ? `The school has recorded that you remain in ${current.name} for the ${session} session.`
            : `You have already been promoted for the ${session} session.`
        : !next
          ? `${current.name} is the final class. There is no class to be promoted to.`
          : cfg.mode === "ADMIN"
            ? "The school promotes students itself. You do not need to do anything."
            : !open
              ? `Promotion opens from ${cfg.windowStart.slice(3)}/${cfg.windowStart.slice(0, 2)} to ${cfg.windowEnd.slice(3)}/${cfg.windowEnd.slice(0, 2)} each year.`
              : joinedOn >= openedOn
                ? `You registered for the ${session} session in ${current.name}, so there is nothing to promote yet.`
                : null;
  return { enabled: cfg.enabled, session, open, window: `${cfg.windowStart} to ${cfg.windowEnd}`, current: current && { id: current.id, name: current.name }, next: next && { id: next.id, name: next.name }, departments: opts.length > 1 && !keeps ? opts : [], keepDepartmentId: keeps, record: row ? { status: row.status, note: row.note, toClass: rungs.find((c) => c.id === row.toClassId)?.name ?? null } : null, canRequest: !reason, reason, selfService: cfg.mode === "AUTO" };
}

async function apply(db: ReturnType<typeof getDb>, userId: string, placement: { classId: string; departmentId: string | null }) {
  await db.update(students).set({ classId: placement.classId, departmentId: placement.departmentId }).where(eq(students.userId, userId));
  // A new class means a fresh start; released results stay as the record of the class just finished.
  await resetActivity(userId, "PROMOTION");
}

/** The student asks to move up. Under the default policy this only creates a request for staff. */
export async function requestPromotion(student: Actor, raw: { departmentId?: string | null }, ctx: ReqCtx, now = new Date()) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only a student can request promotion.");
  const [kind] = await getDb().select({ k: students.accountKind }).from(students).where(eq(students.userId, student.id));
  if (kind?.k === "SCHOOL") throw new AppError("FORBIDDEN", "A school account switches class from its dashboard and is not promoted.");
  const st = await promotionState(student, now);
  if (!st.canRequest || !st.next || !st.current) throw new AppError("FORBIDDEN", st.reason ?? "You cannot request promotion now.");
  const db = getDb();
  // Checks that the department belongs to the next class (and picks it when there is only one).
  const placement = await resolvePlacement(student.schoolId, st.next.id, st.keepDepartmentId ?? (raw.departmentId || null), db);
  const auto = st.selfService;
  const values = { schoolId: student.schoolId, userId: student.id, fromClassId: st.current.id, toClassId: st.next.id, toDepartmentId: placement.departmentId, session: st.session, status: auto ? "APPROVED" : "PENDING", method: auto ? "SELF" : "REQUEST", requestedAt: now, decidedAt: auto ? now : null, decidedBy: null, note: null };
  await db.insert(promotions).values(values).onConflictDoUpdate({ target: [promotions.userId, promotions.session], set: values });
  if (auto) await apply(db, student.id, placement);
  await audit({ actor: student, action: auto ? "promotion.self_promoted" : "promotion.requested", entityType: "user", entityId: student.id, summary: `${st.current.name} → ${st.next.name} (${st.session})` }, ctx);
  return { status: values.status, to: st.next.name };
}

/** Staff approve or reject a waiting request. */
export async function decidePromotion(actor: Actor, id: string, approve: boolean, note: string | undefined, ctx: ReqCtx) {
  const db = getDb();
  const [p] = await db.select().from(promotions).where(and(eq(promotions.id, id), eq(promotions.schoolId, actor.schoolId)));
  if (!p) throw new AppError("NOT_FOUND", "Request not found.");
  if (p.status !== "PENDING") throw new AppError("CONFLICT", "This request has already been decided.");
  // The student must still be in the class the request was made from.
  const [st] = await db.select({ classId: students.classId }).from(students).where(eq(students.userId, p.userId));
  if (approve && st?.classId !== p.fromClassId) throw new AppError("CONFLICT", "This student's class has changed since the request. Reject it and ask the student to request again.");
  await db.update(promotions).set({ status: approve ? "APPROVED" : "REJECTED", decidedBy: actor.id, decidedAt: new Date(), note: note?.trim().slice(0, 300) || null }).where(eq(promotions.id, id));
  if (approve) await apply(db, p.userId, { classId: p.toClassId, departmentId: p.toDepartmentId });
  const [to] = await db.select({ name: classes.name }).from(classes).where(eq(classes.id, p.toClassId));
  await audit({ actor, action: approve ? "promotion.approved" : "promotion.rejected", entityType: "user", entityId: p.userId, summary: `${approve ? "Promoted to" : "Not promoted to"} ${to?.name} (${p.session})`, metadata: { note } }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId: p.userId, category: "ANNOUNCEMENT", title: approve ? `You have been promoted to ${to?.name}` : "Promotion request not approved", body: approve ? `Congratulations. Your class is now ${to?.name} for the ${p.session} session. Your lessons, tests and forum rooms now follow your new class.` : `Your request to move to ${to?.name} was not approved.${note ? ` Reason: ${note}` : ""} Please speak to the school.`, link: "/student/promotion" });
}

/**
 * Promotes every student of one class to the next class for the session, except those listed to
 * repeat. Students who already have a record for the session are left alone. Moving into a class
 * with more than one department (e.g. SS1) cannot be done in bulk: each student must choose.
 */
export async function bulkPromote(actor: Actor, classId: string, repeatUserIds: string[], ctx: ReqCtx, now = new Date()) {
  const db = getDb();
  const [cfg, { timezone }] = await Promise.all([getSetting(actor.schoolId, "promotion"), getSetting(actor.schoolId, "localization")]);
  const session = sessionFor(now, cfg.windowStart, timezone);
  const rungs = await ladder(actor.schoolId);
  const at = rungs.findIndex((c) => c.id === classId);
  if (at < 0) throw new AppError("VALIDATION", "Choose a class.");
  const next = rungs[at + 1];
  if (!next) throw new AppError("VALIDATION", `${rungs[at].name} is the final class.`);
  const opts = await db.select({ id: departments.id }).from(departments).where(and(eq(departments.schoolId, actor.schoolId), isNull(departments.archivedAt), sectionCond(departments.level, next.level)));
  const members = await db.select({ userId: students.userId, departmentId: students.departmentId }).from(students).innerJoin(users, eq(users.id, students.userId)).where(and(eq(students.schoolId, actor.schoolId), eq(students.classId, classId), isNull(users.deletedAt)));
  const done = members.length ? await db.select({ userId: promotions.userId, status: promotions.status }).from(promotions).where(and(eq(promotions.session, session), inArray(promotions.userId, members.map((m) => m.userId)))) : [];
  const out = { promoted: 0, repeated: 0, skipped: 0, needDepartment: 0, to: next.name, session };
  for (const m of members) {
    const prior = done.find((d) => d.userId === m.userId);
    if (prior && prior.status !== "REJECTED" && prior.status !== "PENDING") {
      out.skipped++;
      continue;
    }
    const repeat = repeatUserIds.includes(m.userId);
    // Keep the department when it exists in the next class; otherwise use the only one, or ask.
    const departmentId = opts.some((o) => o.id === m.departmentId) ? m.departmentId : opts.length === 1 ? opts[0].id : opts.length === 0 ? null : undefined;
    if (!repeat && departmentId === undefined) {
      out.needDepartment++;
      continue;
    }
    const values = { schoolId: actor.schoolId, userId: m.userId, fromClassId: classId, toClassId: repeat ? classId : next.id, toDepartmentId: repeat ? m.departmentId : (departmentId ?? null), session, status: repeat ? "REPEAT" : "APPROVED", method: "BULK", requestedAt: now, decidedAt: now, decidedBy: actor.id, note: null };
    await db.insert(promotions).values(values).onConflictDoUpdate({ target: [promotions.userId, promotions.session], set: values });
    if (!repeat) {
      await apply(db, m.userId, { classId: next.id, departmentId: departmentId ?? null });
      await notifyUser({ schoolId: actor.schoolId, userId: m.userId, category: "ANNOUNCEMENT", title: `You have been promoted to ${next.name}`, body: `Congratulations. Your class is now ${next.name} for the ${session} session.`, link: "/student/promotion" });
      out.promoted++;
    } else out.repeated++;
  }
  await audit({ actor, action: "promotion.bulk", entityType: "class", entityId: classId, summary: `${rungs[at].name} → ${next.name} (${session}): ${out.promoted} promoted, ${out.repeated} to repeat, ${out.needDepartment} must choose a department`, metadata: out }, ctx);
  return out;
}

export async function listPromotionsAdmin(schoolId: string, status = "PENDING") {
  const db = getDb();
  const rows = await db
    .select({ p: promotions, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, joined: students.createdAt })
    .from(promotions)
    .innerJoin(users, eq(users.id, promotions.userId))
    .innerJoin(students, eq(students.userId, promotions.userId))
    .where(and(eq(promotions.schoolId, schoolId), eq(promotions.status, status)))
    .orderBy(desc(promotions.requestedAt))
    .limit(500);
  const names = new Map((await ladder(schoolId)).map((c) => [c.id, c.name]));
  const depts = new Map((await db.select({ id: departments.id, name: departments.name }).from(departments).where(eq(departments.schoolId, schoolId))).map((d) => [d.id, d.name]));
  return rows.map((r) => ({ ...r, from: names.get(r.p.fromClassId) ?? "—", to: names.get(r.p.toClassId) ?? "—", department: r.p.toDepartmentId ? (depts.get(r.p.toDepartmentId) ?? null) : null }));
}

/** For each class: how many students there are and how many still have no promotion record this session. */
export async function promotionOverview(schoolId: string, now = new Date()) {
  const db = getDb();
  const [cfg, { timezone }] = await Promise.all([getSetting(schoolId, "promotion"), getSetting(schoolId, "localization")]);
  const session = sessionFor(now, cfg.windowStart, timezone);
  const rungs = await ladder(schoolId);
  const counts = await db.execute<{ class_id: string; total: number; waiting: number }>(sql`
    SELECT s.class_id, count(*)::int AS total,
           count(*) FILTER (WHERE p.id IS NULL OR p.status IN ('PENDING', 'REJECTED'))::int AS waiting
    FROM students s
    JOIN users u ON u.id = s.user_id AND u.deleted_at IS NULL
    LEFT JOIN promotions p ON p.user_id = s.user_id AND p.session = ${session}
    WHERE s.school_id = ${schoolId} AND s.class_id IS NOT NULL
    GROUP BY s.class_id`);
  return { session, open: cfg.enabled && inWindow(now, cfg, timezone), classes: rungs.map((c, i) => ({ id: c.id, name: c.name, next: rungs[i + 1]?.name ?? null, total: counts.rows.find((r) => r.class_id === c.id)?.total ?? 0, waiting: counts.rows.find((r) => r.class_id === c.id)?.waiting ?? 0 })) };
}

/** Students of a class with no settled record this session, for the "who repeats?" tick list. */
export async function classMembers(schoolId: string, classId: string) {
  return getDb().select({ id: users.id, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber }).from(students).innerJoin(users, eq(users.id, students.userId)).where(and(eq(students.schoolId, schoolId), eq(students.classId, classId), isNull(users.deletedAt))).orderBy(asc(users.lastName), asc(users.firstName)).limit(500);
}
