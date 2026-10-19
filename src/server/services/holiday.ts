import { and, asc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { BUILT_IN_ACTIVITIES, DEFAULT_HOLIDAY_DATES, HOLIDAY_KEYS, HOLIDAYS, TASK_KINDS, type HolidayKey } from "@/content/holiday";
import { SECTIONS } from "@/core/sections";
import { getDb } from "../db";
import { classes, departmentSubjects, guardianLinks, holidayProgress, holidayTasks, settings, students, subjects, terms, topics, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireParentAccess } from "./access";
import { broadcast, notifyUser } from "./notifications";

/**
 * Holiday Programme. During the Christmas, Easter and long vacation breaks every learner (and every
 * school account) gets: revision of the term just ended, a preview of next term's topics (both built
 * from the class's scheme of work), the school's holiday activities, and tasks set by their parents.
 * Holiday dates come from the term dates in Admin → Terms, or the usual Nigerian calendar.
 */

export interface HolidayWindow { key: HolidayKey; label: string; year: number; starts: string; ends: string; active: boolean; daysToGo: number; daysLeft: number }

const iso = (d: Date) => d.toISOString().slice(0, 10);
const day = (s: string) => new Date(`${s}T00:00:00Z`);
const addDays = (s: string, n: number) => iso(new Date(day(s).getTime() + n * 86_400_000));
const pad = (n: number) => String(n).padStart(2, "0");
const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** The holiday in progress today, or else the next one to come. */
export async function holidayCalendar(schoolId: string, today = iso(new Date())): Promise<HolidayWindow> {
  const rows = await getDb().select({ sortOrder: terms.sortOrder, startsOn: terms.startsOn, endsOn: terms.endsOn }).from(terms).where(and(eq(terms.schoolId, schoolId), isNull(terms.archivedAt))).orderBy(asc(terms.sortOrder));
  const [t1, t2, t3] = rows;
  const y = Number(today.slice(0, 4));
  const windows: { key: HolidayKey; starts: string; ends: string }[] = [];
  for (const yr of [y - 1, y, y + 1])
    for (const key of HOLIDAY_KEYS) {
      const d = DEFAULT_HOLIDAY_DATES[key];
      const endYear = d.end[0] < d.start[0] ? yr + 1 : yr;
      windows.push({ key, starts: `${yr}-${pad(d.start[0])}-${pad(d.start[1])}`, ends: `${endYear}-${pad(d.end[0])}-${pad(d.end[1])}` });
    }
  // Term dates entered in the backend replace the usual calendar for the holiday they bound.
  const fromTerms = (key: HolidayKey, ended?: string | null, next?: string | null) => {
    if (!ended || !DATE.test(ended)) return;
    const starts = addDays(ended, 1);
    const ends = next && DATE.test(next) && next > ended ? addDays(next, -1) : addDays(starts, key === "LONG" ? 50 : 20);
    const at = windows.findIndex((w) => w.key === key && Math.abs(day(w.starts).getTime() - day(starts).getTime()) < 120 * 86_400_000);
    if (at >= 0) windows[at] = { key, starts, ends };
    else windows.push({ key, starts, ends });
  };
  fromTerms("CHRISTMAS", t1?.endsOn, t2?.startsOn);
  fromTerms("EASTER", t2?.endsOn, t3?.startsOn);
  fromTerms("LONG", t3?.endsOn, t1?.startsOn);
  windows.sort((a, b) => a.starts.localeCompare(b.starts));
  const w = windows.find((x) => x.starts <= today && today <= x.ends) ?? windows.find((x) => x.starts > today) ?? windows[windows.length - 1];
  const ms = (a: string, b: string) => Math.round((day(b).getTime() - day(a).getTime()) / 86_400_000);
  const active = w.starts <= today && today <= w.ends;
  return { key: w.key, label: HOLIDAYS[w.key].label, year: Number(w.starts.slice(0, 4)), starts: w.starts, ends: w.ends, active, daysToGo: active ? 0 : ms(today, w.starts), daysLeft: active ? ms(today, w.ends) + 1 : 0 };
}

/* ------------------------------------------------------------------ the student's programme */

interface TopicItem { topicId: string; title: string; subject: string; lessonId: string | null }

async function topicsFor(schoolId: string, classId: string, termOrder: number, departmentId: string | null, perSubject: number) {
  const db = getDb();
  const [term] = await db.select({ id: terms.id }).from(terms).where(and(eq(terms.schoolId, schoolId), eq(terms.sortOrder, termOrder), isNull(terms.archivedAt)));
  if (!term) return [] as { subject: string; subjectId: string; topics: TopicItem[] }[];
  const rows = await db
    .select({ topicId: topics.id, title: topics.title, subject: subjects.name, subjectId: subjects.id, subjectOrder: subjects.sortOrder, lessonId: sql<string | null>`(SELECT l.id FROM lessons l WHERE l.topic_id = ${topics.id} AND l.status = 'PUBLISHED' ORDER BY l.sort_order LIMIT 1)` })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .where(and(eq(topics.schoolId, schoolId), eq(topics.classId, classId), eq(topics.termId, term.id), eq(topics.status, "PUBLISHED"), isNull(subjects.archivedAt), departmentId ? or(isNull(topics.departmentId), eq(topics.departmentId, departmentId)) : isNull(topics.departmentId)))
    .orderBy(asc(subjects.sortOrder), asc(subjects.name), asc(topics.sortOrder), asc(topics.title));
  const by = new Map<string, TopicItem[]>();
  for (const r of rows) {
    const list = by.get(r.subject) ?? [];
    if (list.length < perSubject) list.push({ topicId: r.topicId, title: r.title, subject: r.subject, lessonId: r.lessonId });
    by.set(r.subject, list);
  }
  return [...by.entries()].map(([subject, t]) => ({ subject, subjectId: rows.find((r) => r.subject === subject)!.subjectId, topics: t }));
}

/** The student's department subjects, core first. Students without a department see every subject. */
async function subjectOrder(departmentId: string | null) {
  if (!departmentId) return null;
  const rows = await getDb().select({ id: departmentSubjects.subjectId, core: departmentSubjects.isCore }).from(departmentSubjects).where(eq(departmentSubjects.departmentId, departmentId));
  return rows.length ? new Map(rows.map((r) => [r.id, r.core])) : null;
}
const arrange = <T extends { subjectId: string }>(groups: T[], order: Map<string, boolean> | null) =>
  order ? groups.filter((g) => order.has(g.subjectId)).sort((a, b) => Number(order.get(b.subjectId)) - Number(order.get(a.subjectId))) : groups;

/** Tasks that apply to one learner this holiday: the school's (class, section or everyone) and their parents'. */
async function tasksForStudent(schoolId: string, studentUserId: string, classId: string | null, level: string | null, h: HolidayWindow) {
  return getDb()
    .select({ t: holidayTasks, setter: sql<string | null>`(SELECT trim(u.first_name || ' ' || u.last_name) FROM users u WHERE u.id = ${holidayTasks.createdBy})` })
    .from(holidayTasks)
    .where(
      and(
        eq(holidayTasks.schoolId, schoolId),
        eq(holidayTasks.holiday, h.key),
        inArray(holidayTasks.year, [0, h.year]),
        eq(holidayTasks.active, true),
        or(
          eq(holidayTasks.studentUserId, studentUserId),
          and(
            eq(holidayTasks.setBy, "SCHOOL"),
            classId ? or(eq(holidayTasks.classId, classId), isNull(holidayTasks.classId)) : isNull(holidayTasks.classId),
            or(isNull(holidayTasks.level), level ? eq(holidayTasks.level, level) : sql`false`),
          ),
        ),
      ),
    )
    .orderBy(asc(holidayTasks.setBy), asc(holidayTasks.createdAt));
}

const itemKey = (taskId: string) => `task:${taskId}`;

export async function studentHoliday(actor: Actor) {
  const db = getDb();
  const [me] = await db
    .select({ classId: students.classId, departmentId: students.departmentId, level: classes.level, sortOrder: classes.sortOrder, className: classes.name, kind: students.accountKind })
    .from(students)
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(eq(students.userId, actor.id));
  if (!me) throw new AppError("FORBIDDEN", "The Holiday Programme is for learners.");
  const h = await holidayCalendar(actor.schoolId);
  const info = HOLIDAYS[h.key];
  let revision: Awaited<ReturnType<typeof topicsFor>> = [];
  let nextTerm: Awaited<ReturnType<typeof topicsFor>> = [];
  let nextClassName = me.className;
  const order = await subjectOrder(me.departmentId);
  if (me.classId) {
    revision = arrange(await topicsFor(actor.schoolId, me.classId, info.after, me.departmentId, 6), order);
    let nextClassId: string | null = me.classId;
    if (h.key === "LONG") {
      const [n] = await db.select({ id: classes.id, name: classes.name }).from(classes).where(and(eq(classes.schoolId, actor.schoolId), isNull(classes.archivedAt), sql`${classes.sortOrder} > ${me.sortOrder ?? 0}`)).orderBy(asc(classes.sortOrder)).limit(1);
      nextClassId = n?.id ?? null;
      nextClassName = n?.name ?? null;
    }
    if (nextClassId) nextTerm = arrange(await topicsFor(actor.schoolId, nextClassId, info.next, me.departmentId, 3), order);
  }
  const tasks = await tasksForStudent(actor.schoolId, actor.id, me.classId, me.level, h);
  const done = await db.select().from(holidayProgress).where(eq(holidayProgress.studentUserId, actor.id));
  const doneMap = new Map(done.map((d) => [d.itemKey, d]));
  const list = tasks.map(({ t, setter }) => ({ ...t, setter, done: doneMap.get(itemKey(t.id)) ?? null }));
  return { holiday: h, blurb: info.blurb, className: me.className, nextClassName, isSchool: me.kind === "SCHOOL", revision, nextTerm, school: list.filter((t) => t.setBy === "SCHOOL"), parents: list.filter((t) => t.setBy === "PARENT") };
}

export async function markHolidayTask(actor: Actor, taskId: string, done: boolean, note?: string) {
  const db = getDb();
  const [me] = await db.select({ classId: students.classId, level: classes.level }).from(students).leftJoin(classes, eq(classes.id, students.classId)).where(eq(students.userId, actor.id));
  if (!me) throw new AppError("FORBIDDEN", "Only learners can tick holiday tasks.");
  const h = await holidayCalendar(actor.schoolId);
  const mine = await tasksForStudent(actor.schoolId, actor.id, me.classId, me.level, h);
  const task = mine.find((x) => x.t.id === taskId)?.t;
  if (!task) throw new AppError("NOT_FOUND", "This task is not on your holiday list.");
  if (!done) {
    await db.delete(holidayProgress).where(and(eq(holidayProgress.studentUserId, actor.id), eq(holidayProgress.itemKey, itemKey(taskId))));
    return;
  }
  const clean = note?.trim().slice(0, 1000) || null;
  await db.insert(holidayProgress).values({ studentUserId: actor.id, itemKey: itemKey(taskId), note: clean }).onConflictDoUpdate({ target: [holidayProgress.studentUserId, holidayProgress.itemKey], set: { note: clean, doneAt: new Date() } });
  if (task.setBy === "PARENT" && task.createdBy)
    await notifyUser({ schoolId: actor.schoolId, userId: task.createdBy, category: "ASSIGNMENT", title: `${actor.name} finished a holiday task`, body: `${task.title}${clean ? `: "${clean.slice(0, 160)}"` : ""}`, link: "/parent/holiday" });
}

/* ------------------------------------------------------------------ parents */

const parentTaskSchema = z.object({
  studentUserId: z.string().uuid("Choose a child."),
  kind: z.enum(Object.keys(TASK_KINDS) as [keyof typeof TASK_KINDS, ...(keyof typeof TASK_KINDS)[]]).default("ACTIVITY"),
  title: z.string().trim().min(3, "Give the task a short title.").max(120),
  instructions: z.string().trim().max(2000).optional().or(z.literal("")),
  dueOn: z.string().trim().regex(DATE).optional().or(z.literal("")),
});

async function parentChildren(parent: Actor) {
  if (parent.userType !== "PARENT") throw new AppError("FORBIDDEN", "This area is for parents and guardians.");
  await requireParentAccess(parent.id);
  return getDb()
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, classId: students.classId, level: classes.level, className: classes.name })
    .from(guardianLinks)
    .innerJoin(users, eq(users.id, guardianLinks.studentUserId))
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(and(eq(guardianLinks.parentUserId, parent.id), isNull(users.deletedAt)))
    .orderBy(users.firstName);
}

/** Each linked child's holiday list with what they have finished, and the tasks this parent set. */
export async function parentHoliday(parent: Actor) {
  const kids = await parentChildren(parent);
  const h = await holidayCalendar(parent.schoolId);
  const db = getDb();
  const ids = kids.map((k) => k.id);
  const done = ids.length ? await db.select().from(holidayProgress).where(inArray(holidayProgress.studentUserId, ids)) : [];
  const children = await Promise.all(
    kids.map(async (k) => {
      const tasks = await tasksForStudent(parent.schoolId, k.id, k.classId, k.level, h);
      const mine = done.filter((d) => d.studentUserId === k.id);
      const items = tasks.map(({ t, setter }) => ({ ...t, setter, done: mine.find((d) => d.itemKey === itemKey(t.id)) ?? null }));
      return { ...k, items, finished: items.filter((i) => i.done).length };
    }),
  );
  return { holiday: h, blurb: HOLIDAYS[h.key].blurb, children };
}

export async function createParentTask(parent: Actor, raw: unknown, ctx: ReqCtx) {
  const d = parentTaskSchema.parse(raw);
  const kids = await parentChildren(parent);
  const child = kids.find((k) => k.id === d.studentUserId);
  if (!child) throw new AppError("FORBIDDEN", "You can only set tasks for your own linked children.");
  const h = await holidayCalendar(parent.schoolId);
  const [row] = await getDb()
    .insert(holidayTasks)
    .values({ schoolId: parent.schoolId, createdBy: parent.id, setBy: "PARENT", studentUserId: child.id, holiday: h.key, year: h.year, kind: d.kind, title: d.title, instructions: d.instructions || null, dueOn: d.dueOn || null })
    .returning();
  await notifyUser({ schoolId: parent.schoolId, userId: child.id, category: "ASSIGNMENT", title: `Holiday task from ${parent.name}`, body: d.title, link: "/student/holiday" });
  await audit({ actor: parent, action: "holiday.parent_task", entityType: "holiday_task", entityId: row.id, summary: `${d.title} for ${child.firstName}` }, ctx);
  return row;
}

export async function deleteParentTask(parent: Actor, id: string) {
  await parentChildren(parent);
  const r = await getDb().delete(holidayTasks).where(and(eq(holidayTasks.id, id), eq(holidayTasks.createdBy, parent.id), eq(holidayTasks.setBy, "PARENT"))).returning({ id: holidayTasks.id });
  if (!r.length) throw new AppError("NOT_FOUND", "Task not found.");
}

/* ------------------------------------------------------------------ the school (backend) */

const schoolTaskSchema = z.object({
  holiday: z.enum(HOLIDAY_KEYS as [HolidayKey, ...HolidayKey[]]),
  everyYear: z.boolean().default(true),
  kind: z.enum(Object.keys(TASK_KINDS) as [keyof typeof TASK_KINDS, ...(keyof typeof TASK_KINDS)[]]).default("ACTIVITY"),
  title: z.string().trim().min(3).max(120),
  instructions: z.string().trim().max(4000).optional().or(z.literal("")),
  link: z.string().trim().max(300).regex(/^(\/|https:\/\/)/, "Links start with / (a page in the app) or https://").optional().or(z.literal("")),
  classId: z.string().uuid().optional().or(z.literal("")),
  level: z.enum(SECTIONS).optional().or(z.literal("")),
  dueOn: z.string().trim().regex(DATE).optional().or(z.literal("")),
  active: z.boolean().default(true),
});

export async function listHolidayTasksAdmin(schoolId: string, holiday?: string) {
  const db = getDb();
  const conds = [eq(holidayTasks.schoolId, schoolId), eq(holidayTasks.setBy, "SCHOOL")];
  if (holiday && holiday in HOLIDAYS) conds.push(eq(holidayTasks.holiday, holiday));
  const rows = await db
    .select({ t: holidayTasks, className: classes.name, finished: sql<number>`(SELECT count(*)::int FROM holiday_progress p WHERE p.item_key = 'task:' || ${holidayTasks.id}::text)` })
    .from(holidayTasks)
    .leftJoin(classes, eq(classes.id, holidayTasks.classId))
    .where(and(...conds))
    .orderBy(asc(holidayTasks.holiday), asc(holidayTasks.level), asc(holidayTasks.createdAt));
  const [parents] = await db.select({ n: sql<number>`count(*)::int` }).from(holidayTasks).where(and(eq(holidayTasks.schoolId, schoolId), eq(holidayTasks.setBy, "PARENT")));
  return { rows, parentTasks: parents?.n ?? 0 };
}

export async function upsertSchoolTask(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = schoolTaskSchema.parse(raw);
  const db = getDb();
  if (d.classId) {
    const [c] = await db.select({ id: classes.id }).from(classes).where(and(eq(classes.id, d.classId), eq(classes.schoolId, actor.schoolId)));
    if (!c) throw new AppError("VALIDATION", "Unknown class.");
  }
  const h = await holidayCalendar(actor.schoolId);
  const values = {
    holiday: d.holiday,
    year: d.everyYear ? 0 : d.holiday === h.key ? h.year : Number(h.starts.slice(0, 4)),
    kind: d.kind,
    title: d.title,
    instructions: d.instructions || null,
    link: d.link || null,
    classId: d.classId || null,
    level: d.classId ? null : d.level || null,
    dueOn: d.dueOn || null,
    active: d.active,
  };
  let row;
  if (id) {
    [row] = await db.update(holidayTasks).set(values).where(and(eq(holidayTasks.id, id), eq(holidayTasks.schoolId, actor.schoolId), eq(holidayTasks.setBy, "SCHOOL"))).returning();
    if (!row) throw new AppError("NOT_FOUND", "Task not found.");
  } else {
    [row] = await db.insert(holidayTasks).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id, setBy: "SCHOOL" }).returning();
    if (row.active && row.holiday === h.key)
      await broadcast(actor, { category: "ASSIGNMENT", title: `Holiday task: ${row.title}`, body: "Open the Holiday Programme to see it.", link: "/student/holiday", audience: { classId: row.classId, level: row.level } }, ctx).catch(() => undefined);
  }
  await audit({ actor, action: id ? "holiday.task_updated" : "holiday.task_created", entityType: "holiday_task", entityId: row.id, summary: row.title }, ctx);
  return row;
}

export async function deleteSchoolTask(actor: Actor, id: string, ctx: ReqCtx) {
  const r = await getDb().delete(holidayTasks).where(and(eq(holidayTasks.id, id), eq(holidayTasks.schoolId, actor.schoolId), eq(holidayTasks.setBy, "SCHOOL"))).returning({ title: holidayTasks.title });
  if (!r.length) throw new AppError("NOT_FOUND", "Task not found.");
  await audit({ actor, action: "holiday.task_deleted", entityType: "holiday_task", entityId: id, summary: r[0].title }, ctx);
}

const SEEDED = "holiday:seeded:v1";

/** Loads the built-in Precious PS holiday activities once per school. Staff may then edit or delete them freely. */
export async function seedHolidayProgramme(schoolId: string) {
  const db = getDb();
  const [mark] = await db.select({ key: settings.key }).from(settings).where(and(eq(settings.schoolId, schoolId), eq(settings.key, SEEDED)));
  if (mark) return 0;
  const rows = BUILT_IN_ACTIVITIES.flatMap((a) =>
    (a.holiday === "ALL" ? HOLIDAY_KEYS : [a.holiday]).map((holiday) => ({ schoolId, setBy: "SCHOOL", holiday, year: 0, level: a.level, kind: a.kind, title: a.title, instructions: a.instructions, link: a.link ?? null })),
  );
  await db.insert(holidayTasks).values(rows);
  await db.insert(settings).values({ schoolId, key: SEEDED, value: { at: new Date().toISOString(), count: rows.length } }).onConflictDoNothing();
  return rows.length;
}
