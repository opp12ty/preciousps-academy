import { createHash } from "node:crypto";
import { and, eq, inArray, like, sql } from "drizzle-orm";
import { ALL_PACKS } from "@/content/packs";
import { examPlans, packWorkbook } from "@/content/packs/build";
import type { SubjectPack } from "@/content/packs/types";
import { getDb } from "../db";
import { classes, examinations, lessons, questions, settings, subjects, topics } from "../db/schema";
import type { Actor, ReqCtx } from "../audit";
import { approvePackQuestions, commitPack, previewPackWorkbook, publishPack } from "./content-packs";

/**
 * Installs every built-in Precious PS content pack (topics, lessons, questions, examinations and assignments)
 * without anyone building or uploading workbooks. Runs on every deploy from the seed; a pack is only
 * re-imported when its content changes, and re-importing reuses topics and skips existing lessons,
 * examinations and duplicate questions, so nothing is duplicated. Packs not reached within the time
 * budget are picked up on the next deploy.
 */
const fingerprint = (p: SubjectPack) => createHash("sha256").update(JSON.stringify(p)).digest("hex").slice(0, 24);
const markKey = (p: SubjectPack) => `pack:installed:v2:${p.code}:${p.name}`;

export async function installBuiltInPacks(actor: Actor, ctx: ReqCtx, opts: { budgetMs?: number; log?: (m: string) => void } = {}) {
  const log = opts.log ?? (() => undefined);
  const deadline = Date.now() + (opts.budgetMs ?? 20 * 60_000);
  const db = getDb();
  const done = await db.select({ key: settings.key, value: settings.value }).from(settings).where(eq(settings.schoolId, actor.schoolId));
  const marks = new Map(done.filter((d) => d.key.startsWith("pack:installed:v2:")).map((d) => [d.key, (d.value as { fp?: string }).fp]));
  const out = { installed: 0, unchanged: 0, failed: [] as string[], postponed: 0 };

  for (const pack of ALL_PACKS) {
    const fp = fingerprint(pack);
    if (marks.get(markKey(pack)) === fp) {
      out.unchanged++;
      continue;
    }
    if (Date.now() > deadline) {
      out.postponed++;
      continue;
    }
    try {
      // The subject must exist before the pack can be checked against it.
      await db.insert(subjects).values({ schoolId: actor.schoolId, code: pack.code, name: pack.name }).onConflictDoNothing();
      const { importId, report } = await previewPackWorkbook(actor, `Built-in: ${pack.name}`, packWorkbook(pack), 0, ctx);
      if (report.errors.length) {
        out.failed.push(`${pack.name}: ${report.errors[0].message}`);
        continue;
      }
      const created = await commitPack(actor, importId, ctx);
      if (created.questionIds.length) await approvePackQuestions(actor, importId, ctx);
      await publishPack(actor, importId, ctx);
      await publishEarlierImports(actor.schoolId, pack);
      await db
        .insert(settings)
        .values({ schoolId: actor.schoolId, key: markKey(pack), value: { fp, at: new Date().toISOString(), questions: created.questionIds.length, lessons: created.lessonIds.length } })
        .onConflictDoUpdate({ target: [settings.schoolId, settings.key], set: { value: { fp, at: new Date().toISOString(), questions: created.questionIds.length, lessons: created.lessonIds.length } } });
      out.installed++;
      log(`content pack ${pack.name}: ${created.topicIds.length} new topics, ${created.lessonIds.length} lessons, ${created.questionIds.length} questions`);
    } catch (e) {
      out.failed.push(`${pack.name}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  return out;
}

/** True when the pack has been installed with its current content (used by tests and the admin page). */
export async function packIsCurrent(schoolId: string, pack: SubjectPack) {
  const [row] = await getDb().select({ value: settings.value }).from(settings).where(and(eq(settings.schoolId, schoolId), eq(settings.key, markKey(pack))));
  return (row?.value as { fp?: string } | undefined)?.fp === fingerprint(pack);
}

/**
 * Packs uploaded by hand before automatic installation may have left lessons in draft, questions waiting
 * for review and examinations unpublished. Built-in content is original and already checked, so it is
 * published here too.
 */
async function publishEarlierImports(schoolId: string, pack: SubjectPack) {
  const db = getDb();
  const [subject] = await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.schoolId, schoolId), eq(subjects.code, pack.code)));
  if (!subject) return;
  const cls = await db.select({ id: classes.id }).from(classes).where(and(eq(classes.schoolId, schoolId), inArray(classes.code, pack.classes)));
  if (!cls.length) return;
  const topicRows = await db.select({ id: topics.id }).from(topics).where(and(eq(topics.schoolId, schoolId), eq(topics.subjectId, subject.id), inArray(topics.classId, cls.map((c) => c.id))));
  const titles = pack.terms.flatMap((t) => t.topics.map((tp) => tp.lesson.title.toLowerCase()));
  if (topicRows.length && titles.length) {
    await db
      .update(lessons)
      .set({ status: "PUBLISHED", updatedAt: new Date() })
      .where(and(inArray(lessons.topicId, topicRows.map((t) => t.id)), eq(lessons.status, "DRAFT"), inArray(sql`lower(${lessons.title})`, titles)));
  }
  await db
    .update(questions)
    .set({ status: "APPROVED", reviewedAt: new Date(), updatedAt: new Date() })
    .where(and(eq(questions.schoolId, schoolId), eq(questions.subjectId, subject.id), eq(questions.status, "PENDING_REVIEW"), like(questions.source, "Content pack:%"), sql`${questions.copyrightStatus} <> 'UNKNOWN'`));
  const examTitles = examPlans(pack).map((e) => e.title);
  if (!examTitles.length) return;
  const drafts = await db.select().from(examinations).where(and(eq(examinations.schoolId, schoolId), eq(examinations.status, "DRAFT"), inArray(examinations.title, examTitles)));
  if (!drafts.length) return;
  const { fitExamToPool } = await import("./exams");
  for (const e of drafts) if (await fitExamToPool(e)) await db.update(examinations).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(examinations.id, e.id));
}
