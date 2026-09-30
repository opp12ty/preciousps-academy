import { and, asc, eq, inArray, isNull, sql } from "drizzle-orm";
import type { AnyPgColumn } from "drizzle-orm/pg-core";
import { z } from "zod";
import { getDb } from "../db";
import { classes, departments, departmentSubjects, lessonQuestions, lessonResources, lessons, questions, subjects, subtopics, terms, topics } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { SECTIONS } from "@/core/sections";
import { resolveSection } from "./scope";

const code = z
  .string()
  .trim()
  .min(2)
  .max(12)
  .regex(/^[A-Za-z0-9_-]+$/, "Letters, numbers, - and _ only.")
  .transform((s) => s.toUpperCase());
const uuidOpt = z
  .string()
  .uuid()
  .nullish()
  .or(z.literal("").transform(() => null));

/* ---------------------------------------------------------- lookups */

export async function getCatalog(schoolId: string, opts: { includeArchived?: boolean } = {}) {
  const db = getDb();
  const arch = (col: AnyPgColumn) => (opts.includeArchived ? undefined : isNull(col));
  const [deps, cls, trs, subs, links] = await Promise.all([
    db.select().from(departments).where(and(eq(departments.schoolId, schoolId), arch(departments.archivedAt))).orderBy(asc(departments.sortOrder), asc(departments.name)),
    db.select().from(classes).where(and(eq(classes.schoolId, schoolId), arch(classes.archivedAt))).orderBy(asc(classes.sortOrder), asc(classes.name)),
    db.select().from(terms).where(and(eq(terms.schoolId, schoolId), arch(terms.archivedAt))).orderBy(asc(terms.sortOrder)),
    db.select().from(subjects).where(and(eq(subjects.schoolId, schoolId), arch(subjects.archivedAt))).orderBy(asc(subjects.sortOrder), asc(subjects.name)),
    db.select().from(departmentSubjects),
  ]);
  return {
    departments: deps,
    classes: cls,
    terms: trs,
    subjects: subs.map((s) => ({ ...s, departmentIds: links.filter((l) => l.subjectId === s.id).map((l) => l.departmentId) })),
  };
}

/* ------------------------------------------ departments / classes / terms */

const simpleSchema = z.object({ name: z.string().trim().min(2).max(80), code, description: z.string().trim().max(500).nullish(), sortOrder: z.coerce.number().int().min(0).max(999).default(0) });

const sectionOpt = z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null));

export async function upsertDepartment(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = simpleSchema.extend({ level: sectionOpt }).parse(raw);
  const db = getDb();
  const row = id
    ? (await db.update(departments).set(d).where(and(eq(departments.id, id), eq(departments.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(departments).values({ ...d, schoolId: actor.schoolId }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Department not found.");
  await audit({ actor, action: id ? "curriculum.department_updated" : "curriculum.department_created", entityType: "department", entityId: row.id, summary: row.name }, ctx);
  return row;
}

export async function upsertClass(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = simpleSchema.extend({ level: z.enum(SECTIONS).default("SENIOR_SECONDARY") }).omit({ description: true }).parse(raw);
  const db = getDb();
  const row = id
    ? (await db.update(classes).set(d).where(and(eq(classes.id, id), eq(classes.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(classes).values({ ...d, schoolId: actor.schoolId }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Class not found.");
  await audit({ actor, action: id ? "curriculum.class_updated" : "curriculum.class_created", entityType: "class", entityId: row.id, summary: row.name }, ctx);
  return row;
}

export async function upsertTerm(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = z
    .object({ name: z.string().trim().min(2).max(40), sortOrder: z.coerce.number().int().min(0).max(99).default(0), startsOn: z.string().trim().max(10).nullish(), endsOn: z.string().trim().max(10).nullish() })
    .parse(raw);
  const db = getDb();
  const row = id
    ? (await db.update(terms).set(d).where(and(eq(terms.id, id), eq(terms.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(terms).values({ ...d, schoolId: actor.schoolId }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Term not found.");
  await audit({ actor, action: id ? "curriculum.term_updated" : "curriculum.term_created", entityType: "term", entityId: row.id, summary: row.name }, ctx);
  return row;
}

export async function upsertSubject(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = simpleSchema.extend({ departmentIds: z.array(z.string().uuid()).max(20).default([]) }).parse(raw);
  const db = getDb();
  return db.transaction(async (tx) => {
    const { departmentIds, ...fields } = d;
    const row = id
      ? (await tx.update(subjects).set(fields).where(and(eq(subjects.id, id), eq(subjects.schoolId, actor.schoolId))).returning())[0]
      : (await tx.insert(subjects).values({ ...fields, schoolId: actor.schoolId }).returning())[0];
    if (!row) throw new AppError("NOT_FOUND", "Subject not found.");
    const valid = departmentIds.length
      ? await tx.select({ id: departments.id }).from(departments).where(and(inArray(departments.id, departmentIds), eq(departments.schoolId, actor.schoolId)))
      : [];
    await tx.delete(departmentSubjects).where(eq(departmentSubjects.subjectId, row.id));
    if (valid.length) await tx.insert(departmentSubjects).values(valid.map((v) => ({ departmentId: v.id, subjectId: row.id })));
    await audit({ actor, action: id ? "curriculum.subject_updated" : "curriculum.subject_created", entityType: "subject", entityId: row.id, summary: row.name }, ctx, tx);
    return row;
  });
}

type ArchivableTable = typeof departments | typeof classes | typeof terms | typeof subjects;
const ARCHIVABLE: Record<string, ArchivableTable> = { department: departments, class: classes, term: terms, subject: subjects };

export async function setArchived(actor: Actor, kind: keyof typeof ARCHIVABLE, id: string, archived: boolean, ctx: ReqCtx) {
  const table = ARCHIVABLE[kind];
  if (!table) throw new AppError("VALIDATION", "Unknown item.");
  const res = await getDb()
    .update(table)
    .set({ archivedAt: archived ? new Date() : null })
    .where(and(eq(table.id, id), eq(table.schoolId, actor.schoolId)))
    .returning({ id: table.id });
  if (!res.length) throw new AppError("NOT_FOUND", "Not found.");
  await audit({ actor, action: `curriculum.${kind}_${archived ? "archived" : "restored"}`, entityType: kind, entityId: id }, ctx);
}

/* -------------------------------------------------- topics & subtopics */

export const topicSchema = z.object({
  subjectId: z.string().uuid(),
  classId: uuidOpt,
  termId: uuidOpt,
  departmentId: uuidOpt,
  level: sectionOpt,
  title: z.string().trim().min(2).max(160),
  description: z.string().trim().max(2000).nullish(),
  syllabusRef: z.string().trim().max(120).nullish(),
  sortOrder: z.coerce.number().int().min(0).max(9999).default(0),
  isMandatory: z.boolean().default(true),
  prerequisiteTopicId: uuidOpt,
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("PUBLISHED"),
});

export async function upsertTopic(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = topicSchema.parse(raw);
  const db = getDb();
  const [s] = await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.id, d.subjectId), eq(subjects.schoolId, actor.schoolId)));
  if (!s) throw new AppError("VALIDATION", "Unknown subject.");
  if (id && d.prerequisiteTopicId === id) throw new AppError("VALIDATION", "A topic cannot be its own prerequisite.");
  const values = { ...d, level: await resolveSection(actor.schoolId, d.classId, d.level) };
  const row = id
    ? (await db.update(topics).set({ ...values, updatedAt: new Date() }).where(and(eq(topics.id, id), eq(topics.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(topics).values({ ...values, schoolId: actor.schoolId }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Topic not found.");
  await audit({ actor, action: id ? "curriculum.topic_updated" : "curriculum.topic_created", entityType: "topic", entityId: row.id, summary: row.title }, ctx);
  return row;
}

export async function upsertSubtopic(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = z.object({ topicId: z.string().uuid(), title: z.string().trim().min(2).max(160), sortOrder: z.coerce.number().int().min(0).default(0) }).parse(raw);
  const db = getDb();
  const [t] = await db.select({ id: topics.id }).from(topics).where(and(eq(topics.id, d.topicId), eq(topics.schoolId, actor.schoolId)));
  if (!t) throw new AppError("VALIDATION", "Unknown topic.");
  const row = id ? (await db.update(subtopics).set(d).where(eq(subtopics.id, id)).returning())[0] : (await db.insert(subtopics).values(d).returning())[0];
  await audit({ actor, action: id ? "curriculum.subtopic_updated" : "curriculum.subtopic_created", entityType: "subtopic", entityId: row.id, summary: row.title }, ctx);
  return row;
}

export async function deleteSubtopic(actor: Actor, id: string, ctx: ReqCtx) {
  const db = getDb();
  const [st] = await db.select({ id: subtopics.id, topicId: subtopics.topicId }).from(subtopics).innerJoin(topics, eq(topics.id, subtopics.topicId)).where(and(eq(subtopics.id, id), eq(topics.schoolId, actor.schoolId)));
  if (!st) throw new AppError("NOT_FOUND", "Subtopic not found.");
  await db.delete(subtopics).where(eq(subtopics.id, id));
  await audit({ actor, action: "curriculum.subtopic_deleted", entityType: "subtopic", entityId: id }, ctx);
}

export async function reorder(actor: Actor, kind: "topic" | "lesson" | "subject", orderedIds: string[], ctx: ReqCtx) {
  const db = getDb();
  const table = kind === "topic" ? topics : kind === "lesson" ? lessons : subjects;
  await db.transaction(async (tx) => {
    for (let i = 0; i < orderedIds.length; i++) {
      await tx.update(table).set({ sortOrder: i }).where(and(eq(table.id, orderedIds[i]), eq(table.schoolId, actor.schoolId)));
    }
  });
  await audit({ actor, action: `curriculum.${kind}_reordered`, entityType: kind, metadata: { count: orderedIds.length } }, ctx);
}

export async function listTopics(schoolId: string, f: { subjectId?: string; classId?: string; includeDrafts?: boolean }) {
  const db = getDb();
  const conds = [eq(topics.schoolId, schoolId)];
  if (f.subjectId) conds.push(eq(topics.subjectId, f.subjectId));
  if (f.classId) conds.push(eq(topics.classId, f.classId));
  if (!f.includeDrafts) conds.push(eq(topics.status, "PUBLISHED"));
  const rows = await db
    .select({
      t: topics,
      subject: subjects.name,
      className: classes.name,
      term: terms.name,
      lessonCount: sql<number>`(SELECT count(*)::int FROM lessons l WHERE l.topic_id = ${topics.id})`,
      questionCount: sql<number>`(SELECT count(*)::int FROM questions q WHERE q.topic_id = ${topics.id} AND q.status = 'APPROVED')`,
    })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .leftJoin(classes, eq(classes.id, topics.classId))
    .leftJoin(terms, eq(terms.id, topics.termId))
    .where(and(...conds))
    .orderBy(asc(subjects.name), asc(topics.sortOrder), asc(topics.title));
  const ids = rows.map((r) => r.t.id);
  const subs = ids.length ? await db.select().from(subtopics).where(inArray(subtopics.topicId, ids)).orderBy(asc(subtopics.sortOrder)) : [];
  return rows.map((r) => ({ ...r, subtopics: subs.filter((s) => s.topicId === r.t.id) }));
}

/* ------------------------------------------------------------ lessons */

const safeUrl = z
  .string()
  .trim()
  .max(1000)
  .url("Enter a valid URL.")
  .refine((u) => /^https:\/\//i.test(u), "Only https:// links are allowed.")
  .nullish()
  .or(z.literal("").transform(() => null));

export const lessonSchema = z.object({
  topicId: z.string().uuid(),
  subtopicId: uuidOpt,
  title: z.string().trim().min(2).max(160),
  summary: z.string().trim().max(600).nullish(),
  body: z.string().max(60_000).default(""),
  examples: z.string().max(20_000).nullish(),
  videoUrl: safeUrl,
  audioUrl: safeUrl,
  estimatedMinutes: z.coerce.number().int().min(1).max(600).default(20),
  sortOrder: z.coerce.number().int().min(0).default(0),
  isMandatory: z.boolean().default(true),
  prerequisiteLessonId: uuidOpt,
  masteryThreshold: z.coerce.number().int().min(1).max(100).nullish(),
  isLocked: z.boolean().default(false),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  questionIds: z.array(z.string().uuid()).max(50).default([]),
});

export async function upsertLesson(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = lessonSchema.parse(raw);
  const db = getDb();
  const [t] = await db.select({ id: topics.id, subjectId: topics.subjectId }).from(topics).where(and(eq(topics.id, d.topicId), eq(topics.schoolId, actor.schoolId)));
  if (!t) throw new AppError("VALIDATION", "Unknown topic.");
  if (id && d.prerequisiteLessonId === id) throw new AppError("VALIDATION", "A lesson cannot be its own prerequisite.");
  const { questionIds, ...fields } = d;
  return db.transaction(async (tx) => {
    let row;
    if (id) {
      const [cur] = await tx.select({ version: lessons.version }).from(lessons).where(and(eq(lessons.id, id), eq(lessons.schoolId, actor.schoolId)));
      if (!cur) throw new AppError("NOT_FOUND", "Lesson not found.");
      [row] = await tx.update(lessons).set({ ...fields, version: cur.version + 1, updatedAt: new Date() }).where(eq(lessons.id, id)).returning();
    } else {
      [row] = await tx.insert(lessons).values({ ...fields, schoolId: actor.schoolId, createdBy: actor.id }).returning();
    }
    // Classwork: only approved questions of this school may be attached.
    const valid = questionIds.length
      ? await tx.select({ id: questions.id }).from(questions).where(and(inArray(questions.id, questionIds), eq(questions.schoolId, actor.schoolId), eq(questions.status, "APPROVED")))
      : [];
    const validSet = new Set(valid.map((v) => v.id));
    await tx.delete(lessonQuestions).where(eq(lessonQuestions.lessonId, row.id));
    const ordered = questionIds.filter((q) => validSet.has(q));
    if (ordered.length) await tx.insert(lessonQuestions).values(ordered.map((q, i) => ({ lessonId: row.id, questionId: q, sortOrder: i })));
    await audit({ actor, action: id ? "curriculum.lesson_updated" : "curriculum.lesson_created", entityType: "lesson", entityId: row.id, summary: `${row.title} (${row.status})` }, ctx, tx);
    return row;
  });
}

export async function addLessonResource(actor: Actor, lessonId: string, raw: unknown, ctx: ReqCtx) {
  const d = z
    .object({ title: z.string().trim().min(2).max(160), kind: z.enum(["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"]), url: safeUrl, assetId: uuidOpt })
    .refine((x) => x.url || x.assetId, { message: "Provide a link or upload a file." })
    .parse(raw);
  const db = getDb();
  const [l] = await db.select({ id: lessons.id }).from(lessons).where(and(eq(lessons.id, lessonId), eq(lessons.schoolId, actor.schoolId)));
  if (!l) throw new AppError("NOT_FOUND", "Lesson not found.");
  const [row] = await db.insert(lessonResources).values({ lessonId, ...d }).returning();
  await audit({ actor, action: "curriculum.lesson_resource_added", entityType: "lesson", entityId: lessonId, summary: d.title }, ctx);
  return row;
}

export async function removeLessonResource(actor: Actor, resourceId: string, ctx: ReqCtx) {
  const db = getDb();
  const [r] = await db
    .select({ id: lessonResources.id, lessonId: lessonResources.lessonId })
    .from(lessonResources)
    .innerJoin(lessons, eq(lessons.id, lessonResources.lessonId))
    .where(and(eq(lessonResources.id, resourceId), eq(lessons.schoolId, actor.schoolId)));
  if (!r) throw new AppError("NOT_FOUND", "Resource not found.");
  await db.delete(lessonResources).where(eq(lessonResources.id, resourceId));
  await audit({ actor, action: "curriculum.lesson_resource_removed", entityType: "lesson", entityId: r.lessonId }, ctx);
}

export async function listLessonsAdmin(schoolId: string, f: { topicId?: string; subjectId?: string; status?: string }) {
  const db = getDb();
  const conds = [eq(lessons.schoolId, schoolId)];
  if (f.topicId) conds.push(eq(lessons.topicId, f.topicId));
  if (f.subjectId) conds.push(eq(topics.subjectId, f.subjectId));
  if (f.status) conds.push(eq(lessons.status, f.status as "DRAFT"));
  return db
    .select({
      l: lessons,
      topic: topics.title,
      subject: subjects.name,
      classwork: sql<number>`(SELECT count(*)::int FROM lesson_questions lq WHERE lq.lesson_id = ${lessons.id})`,
      completions: sql<number>`(SELECT count(*)::int FROM learning_progress lp WHERE lp.lesson_id = ${lessons.id} AND lp.status = 'COMPLETED')`,
    })
    .from(lessons)
    .innerJoin(topics, eq(topics.id, lessons.topicId))
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .where(and(...conds))
    .orderBy(asc(subjects.name), asc(topics.sortOrder), asc(lessons.sortOrder));
}

export async function getLessonAdmin(schoolId: string, id: string) {
  const db = getDb();
  const [l] = await db.select().from(lessons).where(and(eq(lessons.id, id), eq(lessons.schoolId, schoolId)));
  if (!l) throw new AppError("NOT_FOUND", "Lesson not found.");
  const res = await db.select().from(lessonResources).where(eq(lessonResources.lessonId, id)).orderBy(asc(lessonResources.sortOrder));
  const qs = await db
    .select({ id: questions.id, ref: questions.ref, stem: questions.stem })
    .from(lessonQuestions)
    .innerJoin(questions, eq(questions.id, lessonQuestions.questionId))
    .where(eq(lessonQuestions.lessonId, id))
    .orderBy(asc(lessonQuestions.sortOrder));
  return { ...l, resources: res, questions: qs };
}
