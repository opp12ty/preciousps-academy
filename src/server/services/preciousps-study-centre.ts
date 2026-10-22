import { and, asc, desc, eq, gte, inArray, isNull, lt, or } from "drizzle-orm";
import { getDb } from "../db";
import { assets, classes, fscAttempts, fscBooks, fscUnits, students, subjects, terms, users, type FscCbtQuestion, type FscTheoryQuestion } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { sha256 } from "../crypto";
import { escapeHtml, htmlBlocks, parseFscBook, sanitizeHtml, textBlocks, type Block } from "@/core/fsc-import";
import type { Q } from "@/content/packs/types";
import { markTheory } from "@/core/theory-marking";
import { parseStarQuestions } from "@/core/question-parser";
import { requireFeature } from "./access";
import { pdfText, pptxSlides, wordText } from "./imports";
import { studentScope } from "./scope";
import { sessionFromLabel } from "./preciousps-exams";

/**
 * The Precious PS Study Centre: e-books the Admin uploads (Word, PDF or PowerPoint), split into units with
 * Classwork, Assignment and a Term Review CBT. It is an addendum for every subscriber, separate from
 * school work: scores never reach report cards, only Rewards & Loyalty and the Precious PS Study Centre Top 3.
 */

const UUID = /^[0-9a-f-]{36}$/i;
const IMAGE_TYPES: Record<string, string> = { "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif", "image/webp": "webp" };
/** How a book's score is made up: classwork, assignments and the Term Review. */
export const FSC_WEIGHTS = { CLASSWORK: 25, ASSIGNMENT: 25, REVIEW: 50 } as const;

const norm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

/* ---------------------------------------------------------------- import */

async function bookBlocks(actor: Actor, fileName: string, bytes: Buffer, notices: string[]): Promise<Block[]> {
  const ext = fileName.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "docx") {
    const mammoth = await import("mammoth");
    let skipped = 0;
    const { value } = await mammoth.convertToHtml(
      { buffer: bytes },
      {
        convertImage: mammoth.images.imgElement(async (img) => {
          const type = IMAGE_TYPES[img.contentType];
          const data = Buffer.from(await img.read("base64"), "base64");
          if (!type || data.length > 3 * 1_048_576) {
            skipped++;
            return { src: "" };
          }
          const [row] = await getDb()
            .insert(assets)
            .values({ schoolId: actor.schoolId, kind: "IMAGE", fileName: `ebook-picture.${type}`, mimeType: img.contentType, size: data.length, sha256: sha256(data), data, isPublic: false, uploadedBy: actor.id })
            .returning({ id: assets.id });
          return { src: `/api/v1/assets/${row.id}`, alt: "" };
        }),
      },
    );
    if (skipped) notices.push(`${skipped} picture(s) could not be shown (an unusual picture format or larger than 3 MB). Save them as PNG or JPG in Word and upload again.`);
    return htmlBlocks(value);
  }
  if (ext === "pdf") return textBlocks(await pdfText(bytes));
  if (ext === "pptx") return textBlocks((await pptxSlides(bytes)).join("\n"));
  if (ext === "doc") return textBlocks((await wordText("doc", bytes)).text);
  throw new AppError("VALIDATION", "Upload the e-book as a Word (.docx), PDF or PowerPoint (.pptx) file.");
}

export interface FscImportInput { kind?: string | null; assetId: string; classId?: string | null; subjectId?: string | null; termId?: string | null; title?: string | null; bookId?: string | null }

/** Reads an uploaded e-book and saves it as units (a new book, or a new version of `bookId` keeping students' scores). */
export async function importFscBook(actor: Actor, input: FscImportInput, ctx: ReqCtx) {
  if (!UUID.test(input.assetId)) throw new AppError("VALIDATION", "Upload the e-book file first.");
  const db = getDb();
  const [file] = await db.select().from(assets).where(and(eq(assets.id, input.assetId), eq(assets.schoolId, actor.schoolId), eq(assets.kind, "DOCUMENT")));
  if (!file) throw new AppError("VALIDATION", "Upload the e-book file again.");
  const notices: string[] = [];
  const story = input.kind === "STORY";
  const book = parseFscBook(await bookBlocks(actor, file.fileName, file.data as Buffer, notices));
  // A story book needs no classwork or Term Review; only missing chapters matter.
  notices.push(...book.notices.filter((n) => !story || /^No units/.test(n)));
  if (!book.units.length) throw new AppError("VALIDATION", `No units were found in ${file.fileName}. Start each unit with a line such as “UNIT 1 | WEEK 1”, or use headings for each unit.`);

  // Class, subject and term from the choices, else from the book's cover (e.g. "MATHEMATICS", "JSS 1 - First Term").
  const cover = `${book.title ?? ""} ${book.subtitle ?? ""} ${file.fileName.replace(/_/g, " ")}`;
  const pick = (v?: string | null) => (v && UUID.test(v) ? v : null);
  let classId = pick(input.classId);
  let subjectId = pick(input.subjectId);
  let termId = pick(input.termId);
  if (!classId || !subjectId || !termId) {
    const [cls, subs, trs] = await Promise.all([
      db.select({ id: classes.id, code: classes.code, name: classes.name }).from(classes).where(and(eq(classes.schoolId, actor.schoolId), isNull(classes.archivedAt))),
      db.select({ id: subjects.id, name: subjects.name }).from(subjects).where(and(eq(subjects.schoolId, actor.schoolId), isNull(subjects.archivedAt))),
      db.select({ id: terms.id, name: terms.name }).from(terms).where(and(eq(terms.schoolId, actor.schoolId), isNull(terms.archivedAt))).orderBy(asc(terms.sortOrder)),
    ]);
    const c = norm(cover);
    classId ??= cls.filter((x) => c.includes(norm(x.code)) || c.includes(norm(x.name))).sort((a, b) => norm(b.code).length - norm(a.code).length)[0]?.id ?? null;
    subjectId ??= subs.filter((x) => norm(x.name).length > 3 && c.includes(norm(x.name))).sort((a, b) => b.name.length - a.name.length)[0]?.id ?? null;
    const t = /\b(first|second|third|1st|2nd|3rd)\s+term\b/i.exec(cover)?.[1]?.toLowerCase();
    const ti = t ? ["first", "second", "third"].findIndex((w, i) => t === w || t === ["1st", "2nd", "3rd"][i]) : -1;
    termId ??= ti >= 0 ? (trs[ti]?.id ?? null) : null;
    if (!classId) notices.push("The class could not be read from the book; choose it below.");
    if (!subjectId) notices.push("The subject could not be read from the book; choose it below.");
    if (!termId) notices.push("The term could not be read from the book; choose it below.");
  }
  const titleCase = (s: string) => (s === s.toUpperCase() ? s.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase()) : s);
  const title = input.title?.trim() || [book.title, book.subtitle].filter((x): x is string => Boolean(x)).map(titleCase).join(" · ") || file.fileName.replace(/\.[a-z]+$/i, "");
  const values = {
    ...(input.bookId ? {} : { kind: story ? "STORY" : "EBOOK" }),
    classId,
    subjectId,
    termId,
    title: title.slice(0, 200),
    subtitle: book.subtitle,
    introHtml: sanitizeHtml(book.introHtml),
    sourceAssetId: file.id,
    sourceName: file.fileName,
    review: book.review as FscCbtQuestion[],
    notices,
    updatedAt: new Date(),
  };
  const unitRows = book.units.map((u, i) => ({ position: i + 1, title: u.title.slice(0, 200), subtitle: u.subtitle, week: u.week, bodyHtml: sanitizeHtml(u.html.join("\n")), advanced: u.advanced, advancedAnswer: u.advancedAnswer, classwork: u.classwork, assignment: u.assignment }));

  const id = await db.transaction(async (tx) => {
    if (input.bookId && UUID.test(input.bookId)) {
      const [old] = await tx.update(fscBooks).set(values).where(and(eq(fscBooks.id, input.bookId), eq(fscBooks.schoolId, actor.schoolId))).returning({ id: fscBooks.id });
      if (!old) throw new AppError("NOT_FOUND", "E-book not found.");
      // Units are updated in place so learners keep the scores they already have.
      const existing = await tx.select({ id: fscUnits.id, position: fscUnits.position }).from(fscUnits).where(eq(fscUnits.bookId, old.id)).orderBy(asc(fscUnits.position));
      for (const u of unitRows) {
        const same = existing.find((e) => e.position === u.position);
        if (same) await tx.update(fscUnits).set(u).where(eq(fscUnits.id, same.id));
        else await tx.insert(fscUnits).values({ ...u, bookId: old.id });
      }
      const extra = existing.filter((e) => e.position > unitRows.length).map((e) => e.id);
      if (extra.length) await tx.delete(fscUnits).where(inArray(fscUnits.id, extra));
      return old.id;
    }
    const [row] = await tx.insert(fscBooks).values({ ...values, schoolId: actor.schoolId, status: "DRAFT", createdBy: actor.id }).returning({ id: fscBooks.id });
    await tx.insert(fscUnits).values(unitRows.map((u) => ({ ...u, bookId: row.id })));
    return row.id;
  });
  await audit({ actor, action: input.bookId ? "fsc.reimported" : "fsc.imported", entityType: "fsc_book", entityId: id, summary: `${title}: ${unitRows.length} units, ${book.review.length} CBT questions` }, ctx);
  return {
    id,
    title,
    units: unitRows.length,
    classwork: unitRows.reduce((n, u) => n + u.classwork.length, 0),
    assignment: unitRows.reduce((n, u) => n + u.assignment.length, 0),
    review: book.review.length,
    notices,
  };
}

/* ---------------------------------------------------------------- admin */

export async function listFscBooks(schoolId: string, f: { classId?: string; status?: string } = {}) {
  const db = getDb();
  const rows = await db
    .select({ b: fscBooks, className: classes.name, classOrder: classes.sortOrder, subject: subjects.name, term: terms.name, termOrder: terms.sortOrder })
    .from(fscBooks)
    .leftJoin(classes, eq(classes.id, fscBooks.classId))
    .leftJoin(subjects, eq(subjects.id, fscBooks.subjectId))
    .leftJoin(terms, eq(terms.id, fscBooks.termId))
    .where(and(eq(fscBooks.schoolId, schoolId), f.classId && UUID.test(f.classId) ? eq(fscBooks.classId, f.classId) : undefined, f.status ? eq(fscBooks.status, f.status) : undefined))
    .orderBy(asc(classes.sortOrder), asc(subjects.name), asc(terms.sortOrder), desc(fscBooks.createdAt));
  const ids = rows.map((r) => r.b.id);
  const units = ids.length ? await db.select({ bookId: fscUnits.bookId, classwork: fscUnits.classwork, assignment: fscUnits.assignment }).from(fscUnits).where(inArray(fscUnits.bookId, ids)) : [];
  return rows.map((r) => {
    const mine = units.filter((u) => u.bookId === r.b.id);
    return { ...r, units: mine.length, questions: mine.reduce((n, u) => n + u.classwork.length + u.assignment.length, 0), review: r.b.review.length };
  });
}

export async function fscBookAdmin(schoolId: string, id: string) {
  if (!UUID.test(id)) throw new AppError("NOT_FOUND", "E-book not found.");
  const db = getDb();
  const [b] = await db.select().from(fscBooks).where(and(eq(fscBooks.id, id), eq(fscBooks.schoolId, schoolId)));
  if (!b) throw new AppError("NOT_FOUND", "E-book not found.");
  const units = await db.select().from(fscUnits).where(eq(fscUnits.bookId, id)).orderBy(asc(fscUnits.position));
  return { book: b, units };
}

async function ownBook(actor: Actor, id: string) {
  if (!UUID.test(id)) throw new AppError("NOT_FOUND", "E-book not found.");
  const [b] = await getDb().select({ id: fscBooks.id, title: fscBooks.title }).from(fscBooks).where(and(eq(fscBooks.id, id), eq(fscBooks.schoolId, actor.schoolId)));
  if (!b) throw new AppError("NOT_FOUND", "E-book not found.");
  return b;
}

export async function setFscStatus(actor: Actor, id: string, status: "PUBLISHED" | "DRAFT", ctx: ReqCtx) {
  const b = await ownBook(actor, id);
  await getDb().update(fscBooks).set({ status, updatedAt: new Date() }).where(eq(fscBooks.id, id));
  await audit({ actor, action: `fsc.${status.toLowerCase()}`, entityType: "fsc_book", entityId: id, summary: b.title }, ctx);
}

export async function deleteFscBook(actor: Actor, id: string, ctx: ReqCtx) {
  const b = await ownBook(actor, id);
  await getDb().delete(fscBooks).where(eq(fscBooks.id, id));
  await audit({ actor, action: "fsc.deleted", entityType: "fsc_book", entityId: id, summary: b.title }, ctx);
}

export async function updateFscBook(actor: Actor, id: string, d: { title: string; classId: string | null; subjectId: string | null; termId: string | null; review?: string }, ctx: ReqCtx) {
  const b = await ownBook(actor, id);
  const title = d.title.trim();
  if (title.length < 2) throw new AppError("VALIDATION", "Give the e-book a title.");
  const set: Partial<typeof fscBooks.$inferInsert> = { title: title.slice(0, 200), classId: d.classId && UUID.test(d.classId) ? d.classId : null, subjectId: d.subjectId && UUID.test(d.subjectId) ? d.subjectId : null, termId: d.termId && UUID.test(d.termId) ? d.termId : null, updatedAt: new Date() };
  if (d.review !== undefined) {
    const qs = parseStarQuestions(d.review).map((q) => ({ stem: q.stem, options: q.options.map((o) => ({ label: o.label, text: o.text })), answer: q.options.find((o) => o.isCorrect)?.label ?? "", explanation: q.explanation }));
    const bad = qs.filter((q) => !q.answer || q.options.length < 2).length;
    if (bad) throw new AppError("VALIDATION", `${bad} Term Review question(s) need at least two options and a * before the correct one.`);
    set.review = qs;
  }
  await getDb().update(fscBooks).set(set).where(eq(fscBooks.id, id));
  await audit({ actor, action: "fsc.updated", entityType: "fsc_book", entityId: id, summary: b.title }, ctx);
}

/** Questions written one per line: "1. question" and, under it, "= model answer". */
export function theoryToText(list: FscTheoryQuestion[]) {
  return list.map((q, i) => `${i + 1}. ${q.q}${q.a ? `\n= ${q.a}` : ""}`).join("\n");
}
export function textToTheory(text: string): FscTheoryQuestion[] {
  const out: FscTheoryQuestion[] = [];
  for (const raw of text.split(/\r?\n/)) {
    const l = raw.trim();
    if (!l) continue;
    const ans = /^=\s*(.*)$/.exec(l);
    const q = /^\d{1,3}\s*[.)]\s*(.+)$/.exec(l);
    if (ans && out.length) out[out.length - 1].a = [out[out.length - 1].a, ans[1]].filter(Boolean).join(" ");
    else if (q) out.push({ q: q[1].trim(), a: "" });
    else if (out.length) out[out.length - 1].q += ` ${l}`;
  }
  return out;
}

export async function updateFscUnit(actor: Actor, unitId: string, d: { title: string; subtitle: string; advanced: string; advancedAnswer: string; classwork: string; assignment: string }, ctx: ReqCtx) {
  if (!UUID.test(unitId)) throw new AppError("NOT_FOUND", "Unit not found.");
  const db = getDb();
  const [u] = await db.select({ id: fscUnits.id, bookId: fscUnits.bookId }).from(fscUnits).innerJoin(fscBooks, eq(fscBooks.id, fscUnits.bookId)).where(and(eq(fscUnits.id, unitId), eq(fscBooks.schoolId, actor.schoolId)));
  if (!u) throw new AppError("NOT_FOUND", "Unit not found.");
  if (d.title.trim().length < 2) throw new AppError("VALIDATION", "Give the unit a title.");
  await db
    .update(fscUnits)
    .set({ title: d.title.trim().slice(0, 200), subtitle: d.subtitle.trim() || null, advanced: d.advanced.trim() || null, advancedAnswer: d.advancedAnswer.trim() || null, classwork: textToTheory(d.classwork), assignment: textToTheory(d.assignment) })
    .where(eq(fscUnits.id, unitId));
  await audit({ actor, action: "fsc.unit_updated", entityType: "fsc_book", entityId: u.bookId, summary: d.title }, ctx);
}

/* ---------------------------------------------------------------- students */

async function learnerBooks(actor: Actor) {
  await requireFeature(actor.id, "STUDY_CENTRE");
  const scope = await studentScope(actor.id);
  return { scope, cond: and(eq(fscBooks.schoolId, actor.schoolId), eq(fscBooks.status, "PUBLISHED"), scope.classId ? or(isNull(fscBooks.classId), eq(fscBooks.classId, scope.classId)) : isNull(fscBooks.classId)) };
}

/** Each learner's first attempt at each piece of work (the one that counts for the Top 3). */
function firstAttempts<T extends { userId: string; bookId: string; unitId: string | null; kind: string; createdAt: Date }>(rows: T[]) {
  const seen = new Map<string, T>();
  for (const r of [...rows].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())) {
    const key = `${r.userId}|${r.bookId}|${r.unitId ?? "-"}|${r.kind}`;
    if (!seen.has(key)) seen.set(key, r);
  }
  return [...seen.values()];
}

/** A learner's score for one book (out of 100): classwork 25, assignments 25, Term Review 50. Work not done counts as 0. */
function bookScore(units: { id: string; classwork: unknown[]; assignment: unknown[] }[], reviewCount: number, firsts: { unitId: string | null; kind: string; percentage: number }[]) {
  const parts: { w: number; v: number }[] = [];
  for (const kind of ["CLASSWORK", "ASSIGNMENT"] as const) {
    const withWork = units.filter((u) => (kind === "CLASSWORK" ? u.classwork : u.assignment).length);
    if (!withWork.length) continue;
    const sum = withWork.reduce((n, u) => n + (firsts.find((f) => f.kind === kind && f.unitId === u.id)?.percentage ?? 0), 0);
    parts.push({ w: FSC_WEIGHTS[kind], v: sum / withWork.length });
  }
  if (reviewCount) parts.push({ w: FSC_WEIGHTS.REVIEW, v: firsts.find((f) => f.kind === "REVIEW")?.percentage ?? 0 });
  const w = parts.reduce((n, p) => n + p.w, 0);
  return w ? Math.round((parts.reduce((n, p) => n + p.w * p.v, 0) / w) * 10) / 10 : 0;
}

export async function fscLibrary(actor: Actor) {
  const { cond } = await learnerBooks(actor);
  const db = getDb();
  const books = await db
    .select({ b: fscBooks, subject: subjects.name, term: terms.name, termOrder: terms.sortOrder })
    .from(fscBooks)
    .leftJoin(subjects, eq(subjects.id, fscBooks.subjectId))
    .leftJoin(terms, eq(terms.id, fscBooks.termId))
    .where(cond)
    .orderBy(asc(terms.sortOrder), asc(subjects.name), asc(fscBooks.title));
  const ids = books.map((x) => x.b.id);
  const [units, mine] = ids.length
    ? await Promise.all([
        db.select({ id: fscUnits.id, bookId: fscUnits.bookId, classwork: fscUnits.classwork, assignment: fscUnits.assignment }).from(fscUnits).where(inArray(fscUnits.bookId, ids)),
        db.select({ userId: fscAttempts.userId, bookId: fscAttempts.bookId, unitId: fscAttempts.unitId, kind: fscAttempts.kind, percentage: fscAttempts.percentage, createdAt: fscAttempts.createdAt }).from(fscAttempts).where(and(eq(fscAttempts.userId, actor.id), inArray(fscAttempts.bookId, ids))),
      ])
    : [[], []];
  const firsts = firstAttempts(mine);
  return books.map(({ b, subject, term }) => {
    const kind = b.kind;
    const us = units.filter((u) => u.bookId === b.id);
    const f = firsts.filter((x) => x.bookId === b.id);
    const done = us.filter((u) => (!u.classwork.length || f.some((x) => x.unitId === u.id && x.kind === "CLASSWORK")) && (!u.assignment.length || f.some((x) => x.unitId === u.id && x.kind === "ASSIGNMENT"))).length;
    return { id: b.id, kind, title: b.title, subject, term, units: us.length, unitsDone: done, reviewDone: f.some((x) => x.kind === "REVIEW"), hasReview: b.review.length > 0, score: f.length ? bookScore(us, b.review.length, f) : null };
  });
}

export async function fscBook(actor: Actor, bookId: string) {
  if (!UUID.test(bookId)) throw new AppError("NOT_FOUND", "E-book not found.");
  const { cond } = await learnerBooks(actor);
  const db = getDb();
  const [row] = await db.select({ b: fscBooks, subject: subjects.name, term: terms.name }).from(fscBooks).leftJoin(subjects, eq(subjects.id, fscBooks.subjectId)).leftJoin(terms, eq(terms.id, fscBooks.termId)).where(and(cond, eq(fscBooks.id, bookId)));
  if (!row) throw new AppError("NOT_FOUND", "E-book not found.");
  const [units, mine] = await Promise.all([
    db.select({ id: fscUnits.id, position: fscUnits.position, title: fscUnits.title, subtitle: fscUnits.subtitle, week: fscUnits.week, classwork: fscUnits.classwork, assignment: fscUnits.assignment }).from(fscUnits).where(eq(fscUnits.bookId, bookId)).orderBy(asc(fscUnits.position)),
    db.select({ userId: fscAttempts.userId, bookId: fscAttempts.bookId, unitId: fscAttempts.unitId, kind: fscAttempts.kind, percentage: fscAttempts.percentage, createdAt: fscAttempts.createdAt }).from(fscAttempts).where(and(eq(fscAttempts.userId, actor.id), eq(fscAttempts.bookId, bookId))),
  ]);
  const firsts = firstAttempts(mine);
  const pct = (unitId: string | null, kind: string) => firsts.find((f) => f.unitId === unitId && f.kind === kind)?.percentage ?? null;
  return {
    id: row.b.id,
    kind: row.b.kind,
    title: row.b.title,
    subtitle: row.b.subtitle,
    subject: row.subject,
    term: row.term,
    introHtml: row.b.introHtml,
    reviewCount: row.b.review.length,
    reviewScore: pct(null, "REVIEW"),
    score: firsts.length ? bookScore(units, row.b.review.length, firsts) : null,
    units: units.map((u) => ({ id: u.id, position: u.position, title: u.title, subtitle: u.subtitle, week: u.week, classwork: u.classwork.length ? pct(u.id, "CLASSWORK") : undefined, assignment: u.assignment.length ? pct(u.id, "ASSIGNMENT") : undefined })),
  };
}

export async function fscUnit(actor: Actor, bookId: string, unitId: string) {
  if (!UUID.test(unitId)) throw new AppError("NOT_FOUND", "Unit not found.");
  const book = await fscBook(actor, bookId);
  const db = getDb();
  const [u] = await db.select().from(fscUnits).where(and(eq(fscUnits.id, unitId), eq(fscUnits.bookId, bookId)));
  if (!u) throw new AppError("NOT_FOUND", "Unit not found.");
  const last = async (kind: string) =>
    (await db.select({ answers: fscAttempts.answers, percentage: fscAttempts.percentage, createdAt: fscAttempts.createdAt }).from(fscAttempts).where(and(eq(fscAttempts.userId, actor.id), eq(fscAttempts.unitId, unitId), eq(fscAttempts.kind, kind))).orderBy(desc(fscAttempts.createdAt)).limit(1))[0] ?? null;
  const [cw, as] = await Promise.all([last("CLASSWORK"), last("ASSIGNMENT")]);
  const i = book.units.findIndex((x) => x.id === unitId);
  return {
    book,
    unit: { id: u.id, position: u.position, title: u.title, subtitle: u.subtitle, week: u.week, bodyHtml: u.bodyHtml, bodyMd: u.bodyMd, advanced: u.advanced, advancedAnswer: cw || as ? u.advancedAnswer : null },
    // Model answers are shown only once the learner has submitted that work.
    classwork: { questions: u.classwork.map((q) => ({ q: q.q, options: q.options ?? null })), last: cw ? { ...(cw.answers as WorkResult), percentage: cw.percentage } : null },
    assignment: { questions: u.assignment.map((q) => ({ q: q.q, options: q.options ?? null })), last: as ? { ...(as.answers as WorkResult), percentage: as.percentage } : null },
    prev: book.units[i - 1] ?? null,
    next: book.units[i + 1] ?? null,
  };
}

export interface WorkResult { items: { q: string; answer: string; model: string; mark: number | null }[] }

export async function submitFscWork(actor: Actor, unitId: string, kind: "CLASSWORK" | "ASSIGNMENT", answers: string[]) {
  if (!UUID.test(unitId)) throw new AppError("NOT_FOUND", "Unit not found.");
  const db = getDb();
  const [u] = await db.select({ u: fscUnits, bookId: fscBooks.id }).from(fscUnits).innerJoin(fscBooks, eq(fscBooks.id, fscUnits.bookId)).where(eq(fscUnits.id, unitId));
  if (!u) throw new AppError("NOT_FOUND", "Unit not found.");
  await fscBook(actor, u.bookId); // the learner may open this book
  const list = kind === "CLASSWORK" ? u.u.classwork : u.u.assignment;
  if (!list.length) throw new AppError("VALIDATION", "There are no questions here.");
  const given = list.map((_, i) => String(answers[i] ?? "").slice(0, 2000));
  if (given.every((a) => !a.trim())) throw new AppError("VALIDATION", "Answer at least one question before you submit.");
  // Multiple choice is marked exactly; written answers against the model answer.
  const items = list.map((q, i) => ({ q: q.q, answer: given[i], model: q.a, mark: q.options?.length ? (given[i].trim() === q.a.trim() ? 1 : 0) : markTheory(given[i], q.a) }));
  const marked = items.filter((x) => x.mark !== null);
  const score = marked.reduce((n, x) => n + (x.mark ?? 0), 0);
  const total = marked.length;
  // Questions without a model answer count as done when answered.
  const percentage = total ? Math.round((score / total) * 1000) / 10 : Math.round((given.filter((a) => a.trim()).length / given.length) * 1000) / 10;
  await db.insert(fscAttempts).values({ schoolId: actor.schoolId, userId: actor.id, bookId: u.bookId, unitId, kind, score, total, percentage, answers: { items } satisfies WorkResult });
  return { percentage, score, total, items };
}

export async function fscReview(actor: Actor, bookId: string) {
  const book = await fscBook(actor, bookId);
  const [b] = await getDb().select({ review: fscBooks.review }).from(fscBooks).where(eq(fscBooks.id, bookId));
  return { book, questions: b.review.map((q) => ({ stem: q.stem, options: q.options })) };
}

export async function submitFscReview(actor: Actor, bookId: string, answers: Record<string, string>) {
  await fscBook(actor, bookId);
  const [b] = await getDb().select({ review: fscBooks.review }).from(fscBooks).where(eq(fscBooks.id, bookId));
  if (!b.review.length) throw new AppError("VALIDATION", "This e-book has no Term Review CBT.");
  const items = b.review.map((q, i) => ({ stem: q.stem, chosen: String(answers[i] ?? ""), answer: q.answer, options: q.options, explanation: q.explanation ?? null }));
  const score = items.filter((x) => x.chosen === x.answer).length;
  const percentage = Math.round((score / items.length) * 1000) / 10;
  await getDb().insert(fscAttempts).values({ schoolId: actor.schoolId, userId: actor.id, bookId, unitId: null, kind: "REVIEW", score, total: items.length, percentage, answers: { items } });
  return { score, total: items.length, percentage, items };
}

/* ---------------------------------------------------------------- Top 3 */

export interface FscRanked { userId: string; name: string; studentNumber: string; percentage: number; books: number; position: number }

/**
 * The Precious PS Study Centre places in every class for each term and the session: a learner's term score is
 * the average of their book scores for that class and term (books not opened count as 0). First attempts only.
 */
export async function fscRankings(schoolId: string, sessionLabel?: string, classId?: string) {
  const db = getDb();
  const session = sessionFromLabel(sessionLabel);
  const books = await db
    .select({ id: fscBooks.id, classId: fscBooks.classId, termId: fscBooks.termId, review: fscBooks.review, className: classes.name, classOrder: classes.sortOrder, term: terms.name, termOrder: terms.sortOrder })
    .from(fscBooks)
    .innerJoin(classes, eq(classes.id, fscBooks.classId))
    .leftJoin(terms, eq(terms.id, fscBooks.termId))
    .where(and(eq(fscBooks.schoolId, schoolId), eq(fscBooks.status, "PUBLISHED"), classId && UUID.test(classId) ? eq(fscBooks.classId, classId) : undefined));
  if (!books.length) return { session: session.label, classes: [] };
  const ids = books.map((b) => b.id);
  const [units, attempts] = await Promise.all([
    db.select({ id: fscUnits.id, bookId: fscUnits.bookId, classwork: fscUnits.classwork, assignment: fscUnits.assignment }).from(fscUnits).where(inArray(fscUnits.bookId, ids)),
    db
      .select({ userId: fscAttempts.userId, bookId: fscAttempts.bookId, unitId: fscAttempts.unitId, kind: fscAttempts.kind, percentage: fscAttempts.percentage, createdAt: fscAttempts.createdAt, first: users.firstName, last: users.lastName, num: students.studentNumber, accountKind: students.accountKind, studentClass: students.classId })
      .from(fscAttempts)
      .innerJoin(users, eq(users.id, fscAttempts.userId))
      .innerJoin(students, eq(students.userId, fscAttempts.userId))
      .where(and(inArray(fscAttempts.bookId, ids), gte(fscAttempts.createdAt, session.start), lt(fscAttempts.createdAt, session.end), isNull(users.deletedAt))),
  ]);
  const firsts = firstAttempts(attempts.filter((a) => a.accountKind !== "SCHOOL"));
  const people = new Map(firsts.map((a) => [a.userId, { name: `${a.first} ${a.last}`.trim(), num: a.num }]));
  const rank = (rows: Omit<FscRanked, "position">[]): FscRanked[] => {
    const sorted = rows.sort((a, b) => b.percentage - a.percentage || b.books - a.books);
    let pos = 0;
    return sorted.map((r, i) => {
      if (i === 0 || r.percentage !== sorted[i - 1].percentage) pos = i + 1;
      return { ...r, position: pos };
    });
  };
  const byClass = new Map<string, { classId: string; className: string; order: number; terms: { termId: string | null; term: string; order: number; ranking: FscRanked[] }[]; overall: FscRanked[] }>();
  const termGroups = new Map<string, typeof books>();
  for (const b of books) termGroups.set(`${b.classId}|${b.termId ?? ""}`, [...(termGroups.get(`${b.classId}|${b.termId ?? ""}`) ?? []), b]);
  for (const [key, group] of termGroups) {
    const [cId] = key.split("|");
    const g = byClass.get(cId) ?? { classId: cId, className: group[0].className, order: group[0].classOrder, terms: [], overall: [] };
    const userIds = [...new Set(firsts.filter((f) => group.some((b) => b.id === f.bookId)).map((f) => f.userId))];
    const ranking = rank(
      userIds.map((uid) => {
        const scores = group.map((b) => {
          const f = firsts.filter((x) => x.userId === uid && x.bookId === b.id);
          return f.length ? bookScore(units.filter((u) => u.bookId === b.id), b.review.length, f) : 0;
        });
        return { userId: uid, name: people.get(uid)!.name, studentNumber: people.get(uid)!.num, percentage: Math.round((scores.reduce((n, v) => n + v, 0) / group.length) * 10) / 10, books: scores.filter((v) => v > 0).length };
      }),
    );
    g.terms.push({ termId: group[0].termId, term: group[0].term ?? "Any term", order: group[0].termOrder ?? 99, ranking });
    byClass.set(cId, g);
  }
  const out = [...byClass.values()].map((g) => {
    g.terms.sort((a, b) => a.order - b.order);
    // The session: the terms added together (a term with no work counts as 0).
    const totals = new Map<string, Omit<FscRanked, "position">>();
    for (const t of g.terms)
      for (const r of t.ranking) {
        const cur = totals.get(r.userId) ?? { ...r, percentage: 0, books: 0 };
        cur.percentage += r.percentage;
        cur.books += r.books;
        totals.set(r.userId, cur);
      }
    g.overall = rank([...totals.values()].map((r) => ({ ...r, percentage: Math.round((r.percentage / g.terms.length) * 10) / 10 })));
    return g;
  });
  return { session: session.label, classes: out.sort((a, b) => a.order - b.order) };
}

/** The current Top 3 of a learner's class in the Precious PS Study Centre (session so far). */
export async function fscClassTop(actor: Actor) {
  const scope = await studentScope(actor.id);
  if (!scope.classId) return null;
  const r = await fscRankings(actor.schoolId, undefined, scope.classId);
  const c = r.classes[0];
  if (!c) return null;
  return { session: r.session, top: c.overall.filter((x) => x.position <= 3), me: c.overall.find((x) => x.userId === actor.id) ?? null, count: c.overall.length };
}

/* ---------------------------------------------------------------- books from the content packs */

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
/** The four options of a pack question in a fixed shuffled order (the same every time). */
const optionsOf = (q: Q) => [q[2], q[3], q[4], q[5]].sort((x, y) => hash(q[1] + x) - hash(q[1] + y));
const TERM_WORD = ["First", "Second", "Third"];
const HOW_TO = [
  "Read the objectives first. They tell you what you will be able to do at the end of the unit.",
  "Study the notes and the worked examples. Cover each answer and try it yourself first.",
  "Do the Classwork, then the Assignment. Your first submission counts for the Precious PS Top 3.",
  "Try the Advanced Corner when you feel confident.",
  "Finish with the Term Review CBT.",
];

/**
 * Makes a Precious PS Study Centre e-book (draft) for every class, subject and term of the NERDC content packs
 * that has none yet. Books the Admin imported are never touched. Works in batches: run it again to continue.
 */
export async function generateFscFromPacks(actor: Actor, ctx: ReqCtx, budgetMs = 45_000) {
  const started = Date.now();
  const { ALL_PACKS } = await import("@/content/packs");
  const db = getDb();
  const [cls, subs, trs, have] = await Promise.all([
    db.select({ id: classes.id, code: classes.code, name: classes.name }).from(classes).where(and(eq(classes.schoolId, actor.schoolId), isNull(classes.archivedAt))),
    db.select({ id: subjects.id, code: subjects.code }).from(subjects).where(and(eq(subjects.schoolId, actor.schoolId), isNull(subjects.archivedAt))),
    db.select({ id: terms.id }).from(terms).where(and(eq(terms.schoolId, actor.schoolId), isNull(terms.archivedAt))).orderBy(asc(terms.sortOrder)),
    db.select({ classId: fscBooks.classId, subjectId: fscBooks.subjectId, termId: fscBooks.termId }).from(fscBooks).where(eq(fscBooks.schoolId, actor.schoolId)),
  ]);
  const taken = new Set(have.map((h) => `${h.classId}|${h.subjectId}|${h.termId}`));
  let created = 0;
  let skipped = 0;
  for (const pack of ALL_PACKS) {
    const subject = subs.find((x) => norm(x.code) === norm(pack.code));
    if (!subject) continue;
    for (const plan of pack.terms) {
      const c = cls.find((x) => norm(x.code) === norm(plan.classCode));
      const term = trs[plan.term - 1];
      if (!c || !term || !plan.topics.length) continue;
      if (taken.has(`${c.id}|${subject.id}|${term.id}`)) {
        skipped++;
        continue;
      }
      if (Date.now() - started > budgetMs) return { created, skipped, more: true };
      const senior = /^SS/i.test(plan.classCode);
      const used = new Set<string>();
      const size = senior ? 20 : 10;
      // Each unit keeps its share of questions back for the Term Review; the rest go to Classwork and Assignment.
      const share = Math.ceil(size / plan.topics.length);
      const units = plan.topics.map((t, i) => {
        const order = [...t.questions].sort((a, b) => "EMH".indexOf(a[0]) - "EMH".indexOf(b[0]));
        const keep = Math.min(share, Math.max(0, t.questions.length - 2));
        const adv = [...order].reverse().find((q) => q[0] === "H") ?? t.jamb?.[0];
        const free = order.filter((q) => q !== adv).slice(0, Math.max(0, t.questions.length - keep - (adv && t.questions.includes(adv) ? 1 : 0)));
        const cw = free.slice(0, Math.min(5, Math.ceil(free.length / 2)));
        const as = free.slice(cw.length, cw.length + 5);
        [...cw, ...as].forEach((q) => used.add(q[1]));
        if (adv) used.add(adv[1]);
        const mcq = (q: Q): FscTheoryQuestion => ({ q: q[1], a: q[2], options: optionsOf(q) });
        const notes = [`## What you will learn`, ...t.objectives.map((o) => `- ${o}`), "", t.lesson.notes, "", t.lesson.examples ? `## Worked Examples\n\n${t.lesson.examples}` : ""].join("\n");
        return {
          position: i + 1,
          title: t.title.slice(0, 200),
          subtitle: t.subtopics.join(", ").slice(0, 300) || null,
          week: `Week ${t.week}`,
          bodyHtml: "",
          bodyMd: notes,
          advanced: adv ? `${adv[1]} (${optionsOf(adv).join("; ")})` : null,
          advancedAnswer: adv ? `${adv[2]}. ${adv[6]}` : null,
          classwork: cw.map(mcq),
          assignment: as.map(mcq),
        };
      });
      // Term Review: questions not used in the units, taken in turn from every unit.
      // Questions not used in the units first; when a term has few questions, unit questions are revised too.
      const fresh = plan.topics.map((t) => [...t.questions].filter((q) => !used.has(q[1])).sort((a, b) => "MHE".indexOf(a[0]) - "MHE".indexOf(b[0])));
      const reused = plan.topics.map((t) => [...t.questions].filter((q) => used.has(q[1]) && t.jamb?.[0] !== q));
      const pools = fresh.map((p, i) => [...p, ...reused[i]]);
      const review: FscCbtQuestion[] = [];
      for (let round = 0; review.length < size && pools.some((p) => p.length > round); round++)
        for (const p of pools) {
          const q = p[round];
          if (q && review.length < size) {
            const opts = optionsOf(q);
            const labels = ["A", "B", "C", "D"];
            review.push({ stem: q[1], options: opts.map((o, k) => ({ label: labels[k], text: o })), answer: labels[opts.indexOf(q[2])], explanation: q[6] });
          }
        }
      const title = `${pack.name} · ${c.name} - ${TERM_WORD[plan.term - 1]} Term`;
      const intro = [
        `<h2>How to use this e-book</h2><ul>${HOW_TO.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`,
        `<h2>${TERM_WORD[plan.term - 1]} Term scheme of work</h2><table><tr><td>Week</td><td>Topic</td><td>Content</td></tr>${plan.topics.map((t) => `<tr><td>${t.week}</td><td>${escapeHtml(t.title)}</td><td>${escapeHtml(t.subtopics.join("; "))}</td></tr>`).join("")}</table>`,
      ].join("");
      await db.transaction(async (tx) => {
        const [row] = await tx
          .insert(fscBooks)
          .values({ schoolId: actor.schoolId, classId: c.id, subjectId: subject.id, termId: term.id, title, subtitle: `${c.name} - ${TERM_WORD[plan.term - 1]} Term`, introHtml: intro, sourceName: `NERDC content pack: ${pack.name} ${pack.version}`, review, notices: [], status: "DRAFT", createdBy: actor.id })
          .returning({ id: fscBooks.id });
        await tx.insert(fscUnits).values(units.map((u) => ({ ...u, bookId: row.id })));
      });
      taken.add(`${c.id}|${subject.id}|${term.id}`);
      created++;
    }
  }
  await audit({ actor, action: "fsc.generated", entityType: "fsc_book", summary: `${created} Precious PS e-book(s) made from the content packs` }, ctx);
  return { created, skipped, more: false };
}

/** Publishes every draft e-book (optionally of one class). */
export async function publishAllFsc(actor: Actor, ctx: ReqCtx, classId?: string) {
  const rows = await getDb()
    .update(fscBooks)
    .set({ status: "PUBLISHED", updatedAt: new Date() })
    .where(and(eq(fscBooks.schoolId, actor.schoolId), eq(fscBooks.status, "DRAFT"), classId && UUID.test(classId) ? eq(fscBooks.classId, classId) : undefined))
    .returning({ id: fscBooks.id });
  await audit({ actor, action: "fsc.published_all", entityType: "fsc_book", summary: `${rows.length} Precious PS e-book(s) published` }, ctx);
  return { published: rows.length };
}
