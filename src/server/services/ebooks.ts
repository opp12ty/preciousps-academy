import { and, asc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { getDb } from "../db";
import { classes, departmentSubjects, ebookReads, lessons, questionOptions, questions, resourceLinks, subjects, terms, topics } from "../db/schema";
import { AppError } from "../errors";
import type { Actor } from "../audit";
import { studentScope } from "./scope";

/**
 * Precious PS e-books: one per subject and class, built from the published lessons of the NERDC scheme of
 * work, term by term and topic by topic. Every chapter ends with Classwork (with answers to check)
 * and an Assignment. Examination classes get a Revision and CBT Exam Prep section each term with the
 * correct option marked *, and JAMB, IJMB and JUPEB practice where the bank has it. PDFs uploaded by
 * the school under Study Materials for the subject appear with the e-book, filed by topic.
 */

const EXAM_CLASSES: Record<string, string> = { BASIC4: "Common Entrance", BASIC5: "Common Entrance", BASIC6: "Common Entrance", JSS2: "BECE", JSS3: "BECE", SS2: "WAEC · NECO · JAMB", SS3: "WAEC · NECO · JAMB" };
const norm = (c: string) => c.toUpperCase().replace(/[^A-Z0-9]/g, "");

export interface EbookQuestion { stem: string; options: { label: string; text: string; correct: boolean }[]; explanation: string | null }
export interface EbookChapter { topicId: string; title: string; lessons: { id: string; title: string; summary: string | null; body: string; examples: string | null }[]; classwork: EbookQuestion[]; assignment: EbookQuestion[]; files: { id: string; title: string; assetId: string }[]; read: boolean }
export interface EbookTerm { termId: string; name: string; chapters: EbookChapter[]; revision: EbookQuestion[]; external: { label: string; questions: EbookQuestion[] }[] }

async function loadQuestions(ids: string[]): Promise<Map<string, EbookQuestion>> {
  if (!ids.length) return new Map();
  const db = getDb();
  const [qs, opts] = await Promise.all([
    db.select({ id: questions.id, stem: questions.stem, explanation: questions.explanation }).from(questions).where(inArray(questions.id, ids)),
    db.select({ q: questionOptions.questionId, label: questionOptions.label, text: questionOptions.text, correct: questionOptions.isCorrect, so: questionOptions.sortOrder }).from(questionOptions).where(inArray(questionOptions.questionId, ids)).orderBy(asc(questionOptions.sortOrder)),
  ]);
  return new Map(qs.map((q) => [q.id, { stem: q.stem, explanation: q.explanation, options: opts.filter((o) => o.q === q.id).map((o) => ({ label: o.label, text: o.text, correct: o.correct })) }]));
}

/** Picks n approved multiple-choice questions for a set of topics, the same ones every time for a given seed. */
async function pick(schoolId: string, subjectId: string, topicIds: string[], n: number, seed: string, examType?: string) {
  if (!topicIds.length && !examType) return [];
  const rows = await getDb()
    .select({ id: questions.id })
    .from(questions)
    .where(and(eq(questions.schoolId, schoolId), eq(questions.subjectId, subjectId), eq(questions.status, "APPROVED"), inArray(questions.type, ["MCQ", "TRUE_FALSE"]), topicIds.length ? inArray(questions.topicId, topicIds) : undefined, examType ? eq(questions.examType, examType as "JAMB") : undefined))
    .orderBy(sql`md5(${questions.id}::text || ${seed})`)
    .limit(n);
  return rows.map((r) => r.id);
}

/**
 * One term of a subject's e-book (so the page stays light on any phone), with a contents list of every
 * term. Pass termId, or a topicId to open the term that holds that chapter; otherwise the term of the
 * school calendar, or the first term.
 */
export async function ebookFor(actor: Actor, subjectId: string, opts: { termId?: string; topicId?: string; part?: "revision" | "external"; currentTerm?: string; classIdOverride?: string } = {}) {
  const db = getDb();
  const scope = await studentScope(actor.id);
  const classId = opts.classIdOverride ?? scope.classId;
  if (!classId) throw new AppError("NOT_FOUND", "Choose a class first.");
  const [[subject], [cls]] = await Promise.all([
    db.select().from(subjects).where(and(eq(subjects.id, subjectId), eq(subjects.schoolId, actor.schoolId))),
    db.select().from(classes).where(eq(classes.id, classId)),
  ]);
  if (!subject || !cls) throw new AppError("NOT_FOUND", "E-book not found.");
  const tps = await db
    .select({ id: topics.id, title: topics.title, termId: topics.termId, term: terms.name, termOrder: terms.sortOrder })
    .from(topics)
    .innerJoin(terms, eq(terms.id, topics.termId))
    .where(and(eq(topics.schoolId, actor.schoolId), eq(topics.subjectId, subjectId), eq(topics.classId, classId), eq(topics.status, "PUBLISHED"), scope.departmentId && !opts.classIdOverride ? or(isNull(topics.departmentId), eq(topics.departmentId, scope.departmentId)) : undefined))
    .orderBy(asc(terms.sortOrder), asc(topics.sortOrder), asc(topics.title));
  const allIds = tps.map((t) => t.id);
  const reads = allIds.length ? await db.select({ topicId: ebookReads.topicId }).from(ebookReads).where(and(eq(ebookReads.userId, actor.id), inArray(ebookReads.topicId, allIds))) : [];
  const readSet = new Set(reads.map((r) => r.topicId));
  const termIds = [...new Set(tps.map((t) => t.termId!))];
  // Chapter numbers run through the whole book.
  const number = new Map(tps.map((t, i) => [t.id, i + 1]));
  const contents = termIds.map((termId) => ({ termId, name: tps.find((t) => t.termId === termId)!.term, chapters: tps.filter((t) => t.termId === termId).map((t) => ({ topicId: t.id, title: t.title, n: number.get(t.id)!, read: readSet.has(t.id) })) }));
  const byTopic = opts.topicId ? tps.find((t) => t.id === opts.topicId)?.termId : undefined;
  const byCalendar = opts.currentTerm ? tps.find((t) => t.term === opts.currentTerm)?.termId : undefined;
  const termId = (opts.termId && termIds.includes(opts.termId) ? opts.termId : undefined) ?? byTopic ?? byCalendar ?? termIds[0];
  const examLabel = EXAM_CLASSES[norm(cls.code)] ?? null;
  const senior = ["SS2", "SS3"].includes(norm(cls.code));
  const isLast = termId === termIds[termIds.length - 1];
  const inTerm = tps.filter((t) => t.termId === termId);
  // One chapter (or the revision / exam-practice part) per page keeps every page small.
  const part = opts.part === "revision" && examLabel ? "revision" : opts.part === "external" && senior && isLast ? "external" : null;
  const chosen = part ? null : (inTerm.find((t) => t.id === opts.topicId) ?? inTerm.find((t) => !readSet.has(t.id)) ?? inTerm[0] ?? null);
  const mine = chosen ? [chosen] : [];
  const ids = mine.map((t) => t.id);
  const termTopicIds = inTerm.map((t) => t.id);
  const [ls, files] = await Promise.all([
    ids.length ? db.select({ id: lessons.id, topicId: lessons.topicId, title: lessons.title, summary: lessons.summary, body: lessons.body, examples: lessons.examples }).from(lessons).where(and(inArray(lessons.topicId, ids), eq(lessons.status, "PUBLISHED"))).orderBy(asc(lessons.sortOrder)) : [],
    db.select({ id: resourceLinks.id, title: resourceLinks.title, assetId: resourceLinks.assetId, topicId: resourceLinks.topicId }).from(resourceLinks).where(and(eq(resourceLinks.schoolId, actor.schoolId), eq(resourceLinks.subjectId, subjectId), eq(resourceLinks.status, "PUBLISHED"), sql`${resourceLinks.assetId} IS NOT NULL`, or(isNull(resourceLinks.classId), eq(resourceLinks.classId, classId)))),
  ]);
  const perTopic = await Promise.all(mine.map((t) => pick(actor.schoolId, subjectId, [t.id], 10, `ebook:${t.id}`)));
  const revisionIds = part === "revision" && termId ? await pick(actor.schoolId, subjectId, termTopicIds, 25, `rev:${termId}`) : [];
  const external = part === "external" ? await Promise.all(["JAMB", "IJMB", "JUPEB"].map((x) => pick(actor.schoolId, subjectId, [], 20, `ext:${x}:${classId}`, x))) : [];
  const bank = await loadQuestions([...perTopic.flat(), ...revisionIds, ...external.flat()]);
  const q = (list: string[]) => list.map((id) => bank.get(id)).filter((x): x is EbookQuestion => Boolean(x && x.options.length));
  const term: (EbookTerm & { firstChapter: number }) | null = termId
    ? {
        termId,
        name: inTerm[0]?.term ?? "",
        firstChapter: number.get(mine[0]?.id ?? "") ?? 1,
        chapters: mine.map((t, i) => ({ topicId: t.id, title: t.title, lessons: ls.filter((l) => l.topicId === t.id), classwork: q(perTopic[i].slice(0, 5)), assignment: q(perTopic[i].slice(5, 10)), files: files.filter((f) => f.topicId === t.id && f.assetId).map((f) => ({ id: f.id, title: f.title, assetId: f.assetId! })), read: readSet.has(t.id) })),
        revision: examLabel ? q(revisionIds) : [],
        external: (["JAMB", "IJMB", "JUPEB"] as const).map((label, k) => ({ label, questions: q(external[k] ?? []) })).filter((x) => x.questions.length),
      }
    : null;
  const order = inTerm.map((t) => t.id);
  const at = chosen ? order.indexOf(chosen.id) : -1;
  const nav = { prevTopic: at > 0 ? order[at - 1] : null, nextTopic: at >= 0 && at < order.length - 1 ? order[at + 1] : null, hasRevision: Boolean(examLabel), hasExternal: senior && isLast, part };
  return { subject: { id: subject.id, name: subject.name }, className: cls.name, examLabel, contents, term, nav, wholeBookFiles: files.filter((f) => !f.topicId && f.assetId).map((f) => ({ id: f.id, title: f.title, assetId: f.assetId! })) };
}

/** The e-book address that opens the right term at a topic's chapter. */
export const chapterHref = (subjectId: string, topicId: string) => `/student/ebooks/${subjectId}?topic=${topicId}#topic-${topicId}`;

/** The subjects that have an e-book for the learner's class. */
export async function ebookShelf(actor: Actor) {
  const scope = await studentScope(actor.id);
  if (!scope.classId) return [];
  const rows = await getDb()
    .select({ id: subjects.id, name: subjects.name, topics: sql<number>`count(DISTINCT ${topics.id})::int`, read: sql<number>`count(DISTINCT ${ebookReads.topicId})::int` })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .leftJoin(ebookReads, and(eq(ebookReads.topicId, topics.id), eq(ebookReads.userId, actor.id)))
    .where(and(eq(topics.schoolId, actor.schoolId), eq(topics.classId, scope.classId), eq(topics.status, "PUBLISHED"), isNull(subjects.archivedAt), scope.departmentId ? or(isNull(topics.departmentId), eq(topics.departmentId, scope.departmentId)) : isNull(topics.departmentId)))
    .groupBy(subjects.id, subjects.name, subjects.sortOrder)
    .orderBy(asc(subjects.sortOrder), asc(subjects.name));
  const core = scope.departmentId ? new Set((await getDb().select({ id: departmentSubjects.subjectId }).from(departmentSubjects).where(and(eq(departmentSubjects.departmentId, scope.departmentId), eq(departmentSubjects.isCore, true)))).map((r) => r.id)) : new Set<string>();
  return rows.map((r) => ({ ...r, core: core.has(r.id) }));
}
