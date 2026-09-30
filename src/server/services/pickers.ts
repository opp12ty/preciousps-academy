import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { getDb } from "../db";
import { lessons, questions, subjects, topics } from "../db/schema";

/** Lightweight option lists for admin pickers (bounded — never the whole bank). */
export async function approvedQuestionOptions(schoolId: string, opts: { subjectId?: string; limit?: number } = {}) {
  return getDb()
    .select({ id: questions.id, ref: questions.ref, stem: questions.stem, topic: topics.title, subjectId: questions.subjectId })
    .from(questions)
    .leftJoin(topics, eq(topics.id, questions.topicId))
    .where(and(eq(questions.schoolId, schoolId), eq(questions.status, "APPROVED"), opts.subjectId ? eq(questions.subjectId, opts.subjectId) : undefined))
    .orderBy(asc(topics.title), desc(questions.createdAt))
    .limit(opts.limit ?? 500);
}

export async function topicOptions(schoolId: string) {
  return getDb()
    .select({ id: topics.id, title: topics.title, subject: subjects.name, subjectId: topics.subjectId })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .where(eq(topics.schoolId, schoolId))
    .orderBy(asc(subjects.name), asc(topics.sortOrder), asc(topics.title));
}

export async function lessonOptions(schoolId: string, topicIds?: string[]) {
  return getDb()
    .select({ id: lessons.id, title: lessons.title, topicId: lessons.topicId })
    .from(lessons)
    .where(and(eq(lessons.schoolId, schoolId), topicIds?.length ? inArray(lessons.topicId, topicIds) : undefined))
    .orderBy(asc(lessons.sortOrder));
}
