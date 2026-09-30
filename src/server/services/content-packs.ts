import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import * as XLSX from "xlsx";
import { can } from "@/core/permissions";
import { questionFingerprint, validateExcelRow } from "@/core/question-parser";
import { PACK_COLUMNS, PACK_SHEETS } from "@/core/content-pack-format";
import { getDb, type Executor } from "../db";
import {
  assignmentQuestions,
  assignments,
  classes,
  examinations,
  lessonQuestions,
  lessons,
  questionImports,
  questionOptions,
  questions,
  questionVersions,
  subjects,
  subtopics,
  terms,
  topics,
} from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { validateUpload } from "../files";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { hashFor } from "./questions";

/**
 * Content packs: one Excel workbook per subject carrying its scheme of work (topics + subtopics by
 * class, term and week), lesson notes, an original question bank, examinations and assignments.
 *
 * Import is two-step like question imports (preview → commit) and follows the platform rules:
 * questions enter PENDING_REVIEW, lessons / exams / assignments are created as DRAFT, and nothing
 * reaches students until an administrator approves the questions and publishes the pack.
 */

export const PACK_FILE_TYPE = "content-pack";
export { PACK_COLUMNS, PACK_SHEETS };

type Row = Record<string, unknown>;
const cell = (r: Row, k: string) => {
  const hit = Object.keys(r).find((x) => x.trim().toLowerCase() === k.toLowerCase());
  return hit === undefined ? "" : String(r[hit] ?? "").trim();
};
const splitList = (v: string) =>
  v
    .split(/\r?\n|;/)
    .map((s) => s.replace(/^[-•*\d.)\s]+(?=\S)/, "").trim())
    .filter(Boolean);
const keyOf = (classCode: string, topic: string) => `${classCode.toUpperCase()}|${topic.trim().toLowerCase()}`;
const TERM_WORDS: Record<string, number> = { "1": 1, first: 1, "first term": 1, "2": 2, second: 2, "second term": 2, "3": 3, third: 3, "third term": 3 };

export interface PackTopicRow { row: number; classCode: string; term: number; week: number; title: string; subtopics: string[]; objectives: string[]; mandatory: boolean }
export interface PackLessonRow { row: number; classCode: string; topic: string; title: string; summary: string; minutes: number; notes: string; examples: string; videoUrl: string | null }
export interface PackQuestionRow {
  row: number;
  classCode: string;
  topic: string;
  subtopic: string | null;
  year: number | null;
  examType: string | null;
  stem: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string | null;
  marks: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  source: string | null;
  copyrightStatus: string;
}
export interface PackExamRow { row: number; title: string; classCode: string; examType: string; classesCovered: string[]; termsCovered: number[]; questionCount: number; minutes: number; passMark: number; maxAttempts: number; year: number | null; description: string | null }
export interface PackAssignmentRow { row: number; title: string; classCode: string; kind: "ASSIGNMENT" | "CLASSWORK"; topics: string[]; questionCount: number; attempts: number; passMark: number; instructions: string | null }

export interface PackIssue { sheet: string; row: number; message: string }
export interface PackReport {
  kind: "CONTENT_PACK";
  subject: { id: string; code: string; name: string } | null;
  version: string | null;
  counts: { topics: number; subtopics: number; lessons: number; questions: number; exams: number; assignments: number };
  errors: PackIssue[];
  warnings: PackIssue[];
  data: { topics: PackTopicRow[]; lessons: PackLessonRow[]; questions: PackQuestionRow[]; exams: PackExamRow[]; assignments: PackAssignmentRow[] };
  created?: {
    topicIds: string[];
    lessonIds: string[];
    questionIds: string[];
    examIds: string[];
    assignmentIds: string[];
    reusedTopics: number;
    skippedDuplicates: number;
    skippedExisting: number;
  };
  approvedAt?: string;
  publishedAt?: string;
  publishReport?: { lessons: number; exams: number; assignments: number; notPublished: string[] };
}

function sheetRows(wb: XLSX.WorkBook, name: string): Row[] {
  const ws = Object.entries(wb.Sheets).find(([n]) => n.trim().toLowerCase() === name.toLowerCase())?.[1];
  if (!ws) return [];
  return XLSX.utils.sheet_to_json<Row>(ws, { defval: "", raw: false });
}

/** Parses and validates a pack workbook. Pure apart from the lookups passed in (unit-testable). */
export function parsePackWorkbook(
  wb: XLSX.WorkBook,
  lookups: { subjects: { id: string; code: string; name: string }[]; classes: { code: string; name: string }[] },
): PackReport {
  const errors: PackIssue[] = [];
  const warnings: PackIssue[] = [];
  const err = (sheet: string, row: number, message: string) => errors.push({ sheet, row, message });
  const warn = (sheet: string, row: number, message: string) => warnings.push({ sheet, row, message });

  // Pack metadata
  const meta = new Map(sheetRows(wb, PACK_SHEETS.pack).map((r) => [cell(r, "Field").toLowerCase(), cell(r, "Value")]));
  const subjectRef = meta.get("subject") ?? "";
  const subject =
    lookups.subjects.find((s) => s.code.toLowerCase() === subjectRef.toLowerCase() || s.name.toLowerCase() === subjectRef.toLowerCase()) ?? null;
  if (!subjectRef) err(PACK_SHEETS.pack, 0, `The "${PACK_SHEETS.pack}" sheet must have a row: Field = Subject, Value = the subject code (e.g. MTH).`);
  else if (!subject) err(PACK_SHEETS.pack, 0, `Subject "${subjectRef}" does not exist. Create it under Academics → Subjects, or use its code.`);

  const classCode = (v: string) => lookups.classes.find((c) => c.code.toLowerCase() === v.toLowerCase() || c.name.toLowerCase() === v.toLowerCase())?.code ?? null;

  // Scheme of work
  const topicRows: PackTopicRow[] = [];
  const topicKeys = new Map<string, PackTopicRow>();
  sheetRows(wb, PACK_SHEETS.scheme).forEach((r, i) => {
    const row = i + 2;
    const cls = classCode(cell(r, "Class"));
    const title = cell(r, "Topic");
    const term = TERM_WORDS[cell(r, "Term").toLowerCase()] ?? 0;
    const week = Number(cell(r, "Week") || 0);
    if (!title && !cell(r, "Class")) return; // blank line
    if (!cls) return err(PACK_SHEETS.scheme, row, `Class "${cell(r, "Class")}" does not exist.`);
    if (!title) return err(PACK_SHEETS.scheme, row, "Topic is required.");
    if (title.length > 160) return err(PACK_SHEETS.scheme, row, "Topic must be 160 characters or fewer.");
    if (!term) return err(PACK_SHEETS.scheme, row, `Term "${cell(r, "Term")}" must be 1, 2 or 3.`);
    if (!Number.isInteger(week) || week < 1 || week > 15) return err(PACK_SHEETS.scheme, row, "Week must be a whole number from 1 to 15.");
    const key = keyOf(cls, title);
    if (topicKeys.has(key)) return err(PACK_SHEETS.scheme, row, `Topic "${title}" appears twice for ${cls} (also row ${topicKeys.get(key)!.row}).`);
    const t: PackTopicRow = {
      row,
      classCode: cls,
      term,
      week,
      title,
      subtopics: splitList(cell(r, "Subtopics")).slice(0, 30),
      objectives: splitList(cell(r, "Learning Objectives")).slice(0, 20),
      mandatory: !/^(n|no|false|0|optional)$/i.test(cell(r, "Mandatory")),
    };
    if (!t.objectives.length) warn(PACK_SHEETS.scheme, row, `No learning objectives for "${title}".`);
    topicKeys.set(key, t);
    topicRows.push(t);
  });
  if (!topicRows.length) err(PACK_SHEETS.scheme, 0, `The "${PACK_SHEETS.scheme}" sheet has no topics.`);

  const needTopic = (sheet: string, row: number, cls: string | null, topic: string) => {
    if (!cls) {
      err(sheet, row, "Class is required and must exist.");
      return false;
    }
    if (!topicKeys.has(keyOf(cls, topic))) {
      err(sheet, row, `Topic "${topic}" is not in the scheme of work for ${cls}.`);
      return false;
    }
    return true;
  };

  // Lessons
  const lessonRows: PackLessonRow[] = [];
  const lessonKeys = new Set<string>();
  sheetRows(wb, PACK_SHEETS.lessons).forEach((r, i) => {
    const row = i + 2;
    const cls = classCode(cell(r, "Class"));
    const topic = cell(r, "Topic");
    const title = cell(r, "Lesson Title");
    const notes = cell(r, "Notes");
    if (!title && !topic) return;
    if (!needTopic(PACK_SHEETS.lessons, row, cls, topic)) return;
    if (!title) return err(PACK_SHEETS.lessons, row, "Lesson Title is required.");
    if (!notes) return err(PACK_SHEETS.lessons, row, "Notes are required.");
    const key = `${keyOf(cls!, topic)}|${title.toLowerCase()}`;
    if (lessonKeys.has(key)) return err(PACK_SHEETS.lessons, row, `Lesson "${title}" appears twice for this topic.`);
    lessonKeys.add(key);
    const minutes = Number(cell(r, "Minutes") || 20);
    const videoUrl = cell(r, "Video URL") || null;
    if (videoUrl && !/^https:\/\//i.test(videoUrl)) return err(PACK_SHEETS.lessons, row, "Video URL must start with https://");
    lessonRows.push({ row, classCode: cls!, topic, title: title.slice(0, 160), summary: cell(r, "Summary"), minutes: Number.isFinite(minutes) && minutes > 0 ? Math.min(240, Math.round(minutes)) : 20, notes, examples: cell(r, "Worked Examples"), videoUrl });
  });

  // Questions — the same row rules as the Excel question import.
  const questionRows: PackQuestionRow[] = [];
  const fingerprints = new Map<string, number>();
  sheetRows(wb, PACK_SHEETS.questions).forEach((r, i) => {
    const row = i + 2;
    if (!cell(r, "Question") && !cell(r, "A")) return;
    const raw = { ...r };
    if (!cell(r, "Subject") && subject) raw.Subject = subject.code;
    const v = validateExcelRow(raw, row);
    for (const w of v.warnings) warn(PACK_SHEETS.questions, row, w);
    if (v.errors.length) return v.errors.forEach((e) => err(PACK_SHEETS.questions, row, e));
    if (subject && ![subject.code.toLowerCase(), subject.name.toLowerCase()].includes(v.data.subject.toLowerCase()))
      return err(PACK_SHEETS.questions, row, `Subject "${v.data.subject}" does not match this pack (${subject.code}).`);
    const cls = classCode(v.data.className ?? "");
    const topic = v.data.topic ?? "";
    if (!needTopic(PACK_SHEETS.questions, row, cls, topic)) return;
    const fp = questionFingerprint(v.data.stem, v.data.options);
    if (fingerprints.has(fp)) return err(PACK_SHEETS.questions, row, `Duplicate of row ${fingerprints.get(fp)}.`);
    fingerprints.set(fp, row);
    questionRows.push({
      row,
      classCode: cls!,
      topic,
      subtopic: v.data.subtopic || null,
      year: v.data.year ?? null,
      examType: v.data.examType ?? null,
      stem: v.data.stem,
      options: v.data.options.map((o) => ({ text: o.text, isCorrect: o.isCorrect })),
      explanation: v.data.explanation || null,
      marks: v.data.marks,
      difficulty: v.data.difficulty,
      source: v.data.source || null,
      copyrightStatus: v.data.copyrightStatus,
    });
  });

  const questionsFor = (classCodes: string[], termsCovered: number[]) =>
    questionRows.filter((q) => {
      const t = topicKeys.get(keyOf(q.classCode, q.topic))!;
      return classCodes.includes(q.classCode) && termsCovered.includes(t.term);
    }).length;

  // Exams
  const examRows: PackExamRow[] = [];
  sheetRows(wb, PACK_SHEETS.exams).forEach((r, i) => {
    const row = i + 2;
    const title = cell(r, "Title");
    if (!title) return;
    const cls = classCode(cell(r, "Class"));
    if (!cls) return err(PACK_SHEETS.exams, row, `Class "${cell(r, "Class")}" does not exist.`);
    const examType = cell(r, "Exam Type").toUpperCase().replace(/[\s-]+/g, "_") || "SCHOOL_EXAM";
    if (!["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM"].includes(examType))
      return err(PACK_SHEETS.exams, row, `Exam Type "${cell(r, "Exam Type")}" is not recognised.`);
    const covered = splitList(cell(r, "Classes Covered").replace(/,/g, ";")).map((c) => classCode(c));
    if (covered.some((c) => !c)) return err(PACK_SHEETS.exams, row, "Every class in Classes Covered must exist.");
    const classesCovered = (covered.length ? covered : [cls]) as string[];
    const termsRaw = cell(r, "Terms Covered");
    const termsCovered = /^all$/i.test(termsRaw) || !termsRaw ? [1, 2, 3] : splitList(termsRaw.replace(/,/g, ";")).map((t) => TERM_WORDS[t.toLowerCase()] ?? 0);
    if (termsCovered.some((t) => !t)) return err(PACK_SHEETS.exams, row, "Terms Covered must be All, or a list like 1, 2.");
    const n = (k: string, d: number) => {
      const x = Number(cell(r, k) || d);
      return Number.isFinite(x) ? x : NaN;
    };
    const e: PackExamRow = {
      row,
      title: title.slice(0, 160),
      classCode: cls,
      examType,
      classesCovered,
      termsCovered,
      questionCount: n("Questions", 30),
      minutes: n("Minutes", 45),
      passMark: n("Pass Mark", 50),
      maxAttempts: n("Max Attempts", 1),
      year: cell(r, "Year") ? Number(cell(r, "Year")) : null,
      description: cell(r, "Description") || null,
    };
    if (!Number.isInteger(e.questionCount) || e.questionCount < 1 || e.questionCount > 200) return err(PACK_SHEETS.exams, row, "Questions must be 1–200.");
    if (!Number.isInteger(e.minutes) || e.minutes < 1 || e.minutes > 600) return err(PACK_SHEETS.exams, row, "Minutes must be 1–600.");
    if (!(e.passMark >= 0 && e.passMark <= 100)) return err(PACK_SHEETS.exams, row, "Pass Mark must be 0–100.");
    if (!Number.isInteger(e.maxAttempts) || e.maxAttempts < 1 || e.maxAttempts > 100) return err(PACK_SHEETS.exams, row, "Max Attempts must be 1–100.");
    const pool = questionsFor(e.classesCovered, e.termsCovered);
    if (pool < e.questionCount) warn(PACK_SHEETS.exams, row, `"${title}" needs ${e.questionCount} questions but this pack has ${pool} for its topics; it can be published once enough are approved.`);
    examRows.push(e);
  });

  // Assignments
  const assignmentRows: PackAssignmentRow[] = [];
  sheetRows(wb, PACK_SHEETS.assignments).forEach((r, i) => {
    const row = i + 2;
    const title = cell(r, "Title");
    if (!title) return;
    const cls = classCode(cell(r, "Class"));
    if (!cls) return err(PACK_SHEETS.assignments, row, `Class "${cell(r, "Class")}" does not exist.`);
    const topicsList = splitList(cell(r, "Topics"));
    if (!topicsList.length) return err(PACK_SHEETS.assignments, row, "List at least one topic.");
    for (const t of topicsList) if (!topicKeys.has(keyOf(cls, t))) return err(PACK_SHEETS.assignments, row, `Topic "${t}" is not in the scheme of work for ${cls}.`);
    const count = Number(cell(r, "Questions") || 10);
    if (!Number.isInteger(count) || count < 1 || count > 100) return err(PACK_SHEETS.assignments, row, "Questions must be 1–100.");
    const available = questionRows.filter((q) => q.classCode === cls && topicsList.some((t) => t.toLowerCase() === q.topic.toLowerCase())).length;
    if (available < count) warn(PACK_SHEETS.assignments, row, `"${title}" asks for ${count} questions but its topics have ${available}; it will use ${available}.`);
    const kind = /classwork/i.test(cell(r, "Kind")) ? "CLASSWORK" : "ASSIGNMENT";
    const attempts = Number(cell(r, "Attempts") || 2);
    const passMark = Number(cell(r, "Pass Mark") || 50);
    assignmentRows.push({ row, title: title.slice(0, 160), classCode: cls, kind, topics: topicsList, questionCount: Math.min(count, Math.max(available, 1)), attempts: Number.isInteger(attempts) && attempts > 0 ? Math.min(attempts, 20) : 2, passMark: passMark >= 0 && passMark <= 100 ? passMark : 50, instructions: cell(r, "Instructions") || null });
  });

  return {
    kind: "CONTENT_PACK",
    subject,
    version: meta.get("version") || null,
    counts: {
      topics: topicRows.length,
      subtopics: topicRows.reduce((n, t) => n + t.subtopics.length, 0),
      lessons: lessonRows.length,
      questions: questionRows.length,
      exams: examRows.length,
      assignments: assignmentRows.length,
    },
    errors,
    warnings,
    data: { topics: topicRows, lessons: lessonRows, questions: questionRows, exams: examRows, assignments: assignmentRows },
  };
}

function requirePackPerms(actor: Actor) {
  if (!can(actor, "curriculum.manage") || !can(actor, "questions.import")) {
    throw new AppError("FORBIDDEN", "Content packs need the Curriculum and Question Import permissions.");
  }
}

export async function previewPack(actor: Actor, file: { name: string; bytes: Buffer }, ctx: ReqCtx) {
  requirePackPerms(actor);
  await rateLimit("upload", actor.id, ctx);
  const cfg = await getSetting(actor.schoolId, "uploads");
  const v = await validateUpload(file, ["xlsx"], cfg.maxFileMb * 1_048_576);
  let wb: XLSX.WorkBook;
  try {
    wb = XLSX.read(v.bytes, { type: "buffer" });
  } catch {
    throw new AppError("IMPORT_ERROR", "We could not read this workbook. Save it as .xlsx and try again.");
  }
  const db = getDb();
  const [subs, cls] = await Promise.all([
    db.select({ id: subjects.id, code: subjects.code, name: subjects.name }).from(subjects).where(eq(subjects.schoolId, actor.schoolId)),
    db.select({ code: classes.code, name: classes.name }).from(classes).where(eq(classes.schoolId, actor.schoolId)),
  ]);
  const report = parsePackWorkbook(wb, { subjects: subs, classes: cls });
  const total = report.counts.topics + report.counts.lessons + report.counts.questions + report.counts.exams + report.counts.assignments;
  const [row] = await db
    .insert(questionImports)
    .values({ schoolId: actor.schoolId, fileName: v.name, fileType: PACK_FILE_TYPE, fileSize: v.bytes.length, status: "PREVIEW", totalItems: total, validItems: report.errors.length ? 0 : total, report, createdBy: actor.id })
    .returning({ id: questionImports.id });
  await audit({ actor, action: "content_pack.previewed", entityType: "question_import", entityId: row.id, summary: `${v.name}: ${report.subject?.code ?? "?"} · ${total} item(s), ${report.errors.length} error(s)` }, ctx);
  return { importId: row.id, report };
}

async function loadPack(actor: Actor, importId: string) {
  const [imp] = await getDb().select().from(questionImports).where(and(eq(questionImports.id, importId), eq(questionImports.schoolId, actor.schoolId), eq(questionImports.fileType, PACK_FILE_TYPE)));
  if (!imp) throw new AppError("NOT_FOUND", "Content pack not found.");
  return { imp, report: imp.report as PackReport };
}

export async function getPack(actor: Actor, importId: string) {
  const { imp, report } = await loadPack(actor, importId);
  let status: { pendingQuestions: number; approvedQuestions: number; draftLessons: number; draftExams: number; draftAssignments: number } | null = null;
  const c = report.created;
  if (c) {
    const db = getDb();
    const byStatus = c.questionIds.length ? await db.select({ s: questions.status, n: sql<number>`count(*)::int` }).from(questions).where(inArray(questions.id, c.questionIds)).groupBy(questions.status) : [];
    const n = (s: string) => byStatus.find((x) => x.s === s)?.n ?? 0;
    const drafts = async (table: typeof lessons | typeof examinations | typeof assignments, ids: string[]) =>
      ids.length ? (await db.select({ n: sql<number>`count(*)::int` }).from(table).where(and(inArray(table.id, ids), eq(table.status, "DRAFT"))))[0].n : 0;
    status = {
      pendingQuestions: n("PENDING_REVIEW"),
      approvedQuestions: n("APPROVED"),
      draftLessons: await drafts(lessons, c.lessonIds),
      draftExams: await drafts(examinations, c.examIds),
      draftAssignments: await drafts(assignments, c.assignmentIds),
    };
  }
  return { imp, report, status };
}

export async function listPacks(schoolId: string) {
  return getDb()
    .select({ id: questionImports.id, fileName: questionImports.fileName, status: questionImports.status, totalItems: questionImports.totalItems, importedItems: questionImports.importedItems, createdAt: questionImports.createdAt, report: questionImports.report })
    .from(questionImports)
    .where(and(eq(questionImports.schoolId, schoolId), eq(questionImports.fileType, PACK_FILE_TYPE)))
    .orderBy(desc(questionImports.createdAt))
    .limit(100);
}

const chunks = <T,>(xs: T[], n: number) => Array.from({ length: Math.ceil(xs.length / n) }, (_, i) => xs.slice(i * n, i * n + n));
const LABELS = "ABCDEFGH";

/**
 * Creates everything in the pack. Existing topics (same subject, class and title) are reused, so a
 * pack can be re-imported after corrections without duplicating the curriculum; existing lessons,
 * exams and assignments with the same title are skipped, and duplicate questions are skipped.
 */
export async function commitPack(actor: Actor, importId: string, ctx: ReqCtx) {
  requirePackPerms(actor);
  const { imp, report } = await loadPack(actor, importId);
  if (imp.status !== "PREVIEW") throw new AppError("CONFLICT", "This content pack has already been imported.");
  if (report.errors.length) throw new AppError("VALIDATION", `Fix the ${report.errors.length} error(s) in the workbook and upload it again.`);
  if (!report.subject) throw new AppError("VALIDATION", "The pack has no valid subject.");
  const subject = report.subject;
  const withExams = can(actor, "exams.manage");
  const withAssignments = can(actor, "assignments.manage");

  const created = await getDb().transaction(async (tx) => {
    const cls = await tx.select({ id: classes.id, code: classes.code, level: classes.level }).from(classes).where(eq(classes.schoolId, actor.schoolId));
    const classBy = new Map(cls.map((c) => [c.code.toUpperCase(), c]));
    const termRows = await tx.select({ id: terms.id }).from(terms).where(eq(terms.schoolId, actor.schoolId)).orderBy(asc(terms.sortOrder));

    // 1. Topics & subtopics (reuse by subject + class + title)
    const existing = await tx.select({ id: topics.id, title: topics.title, classId: topics.classId }).from(topics).where(and(eq(topics.schoolId, actor.schoolId), eq(topics.subjectId, subject.id)));
    const topicId = new Map<string, string>();
    for (const t of existing) {
      const c = cls.find((x) => x.id === t.classId);
      if (c) topicId.set(keyOf(c.code, t.title), t.id);
    }
    let reusedTopics = 0;
    const newTopics = report.data.topics.filter((t) => {
      if (topicId.has(keyOf(t.classCode, t.title))) {
        reusedTopics++;
        return false;
      }
      return true;
    });
    const topicIds: string[] = [];
    for (const part of chunks(newTopics, 200)) {
      const rows = await tx
        .insert(topics)
        .values(
          part.map((t) => {
            const c = classBy.get(t.classCode)!;
            return {
              schoolId: actor.schoolId,
              subjectId: subject.id,
              classId: c.id,
              level: c.level,
              termId: termRows[t.term - 1]?.id ?? null,
              title: t.title,
              description: t.objectives.length ? `By the end of this topic, students should be able to:\n${t.objectives.map((o) => `- ${o}`).join("\n")}` : null,
              syllabusRef: `Term ${t.term}, Week ${t.week}`,
              sortOrder: t.term * 100 + t.week,
              isMandatory: t.mandatory,
              status: "PUBLISHED" as const,
            };
          }),
        )
        .returning({ id: topics.id });
      part.forEach((t, i) => {
        topicId.set(keyOf(t.classCode, t.title), rows[i].id);
        topicIds.push(rows[i].id);
      });
    }
    const allTopicIds = report.data.topics.map((t) => topicId.get(keyOf(t.classCode, t.title))!);
    const existingSubs = await tx.select({ topicId: subtopics.topicId, title: subtopics.title, id: subtopics.id }).from(subtopics).where(inArray(subtopics.topicId, allTopicIds));
    const subVals = report.data.topics.flatMap((t) => {
      const tid = topicId.get(keyOf(t.classCode, t.title))!;
      return t.subtopics
        .filter((s) => !existingSubs.some((e) => e.topicId === tid && e.title.toLowerCase() === s.toLowerCase()))
        .map((s, i) => ({ topicId: tid, title: s.slice(0, 160), sortOrder: i }));
    });
    const newSubs: { id: string; topicId: string; title: string }[] = [];
    for (const part of chunks(subVals, 500)) newSubs.push(...(await tx.insert(subtopics).values(part).returning({ id: subtopics.id, topicId: subtopics.topicId, title: subtopics.title })));
    const subtopicId = (tid: string, title: string | null) =>
      title ? [...existingSubs, ...newSubs].find((s) => s.topicId === tid && s.title.toLowerCase() === title.toLowerCase())?.id ?? null : null;

    // 2. Questions (bulk; duplicates of the existing bank are skipped)
    const prepared = report.data.questions.map((q) => ({ q, hash: hashFor({ subjectId: subject.id, stem: q.stem, options: q.options }) }));
    const dupRows = prepared.length
      ? await tx.select({ hash: questions.contentHash }).from(questions).where(and(eq(questions.schoolId, actor.schoolId), inArray(questions.contentHash, prepared.map((p) => p.hash))))
      : [];
    const dup = new Set(dupRows.map((d) => d.hash));
    const fresh = prepared.filter((p) => !dup.has(p.hash));
    const refs = fresh.length ? await tx.execute<{ n: string }>(sql`SELECT nextval('question_ref_seq')::text AS n FROM generate_series(1, ${fresh.length})`) : { rows: [] };
    const questionIds: string[] = [];
    const questionsByTopic = new Map<string, string[]>();
    let k = 0;
    for (const part of chunks(fresh, 300)) {
      const rows = await tx
        .insert(questions)
        .values(
          part.map(({ q, hash }) => {
            const c = classBy.get(q.classCode)!;
            const tid = topicId.get(keyOf(q.classCode, q.topic))!;
            return {
              schoolId: actor.schoolId,
              ref: `${subject.code}-${String(refs.rows[k++].n).padStart(6, "0")}`,
              subjectId: subject.id,
              classId: c.id,
              level: c.level,
              topicId: tid,
              subtopicId: subtopicId(tid, q.subtopic),
              year: q.year,
              examType: q.examType as "PRACTICE" | null,
              difficulty: q.difficulty,
              type: "MCQ" as const,
              stem: q.stem,
              explanation: q.explanation,
              marks: q.marks,
              source: q.source ?? `Content pack: ${imp.fileName}`,
              copyrightStatus: q.copyrightStatus as "ORIGINAL",
              status: "PENDING_REVIEW" as const,
              contentHash: hash,
              importId,
              createdBy: actor.id,
              modifiedBy: actor.id,
            };
          }),
        )
        .returning();
      const optRows = await tx
        .insert(questionOptions)
        .values(rows.flatMap((row, i) => part[i].q.options.map((o, j) => ({ questionId: row.id, label: LABELS[j], text: o.text, isCorrect: o.isCorrect, sortOrder: j }))))
        .returning();
      await tx.insert(questionVersions).values(
        rows.map((row) => ({
          questionId: row.id,
          version: 1,
          changedBy: actor.id,
          snapshot: { ...row, options: optRows.filter((o) => o.questionId === row.id).map((o) => ({ id: o.id, label: o.label, text: o.text, matchText: null, isCorrect: o.isCorrect, sortOrder: o.sortOrder })) },
        })),
      );
      rows.forEach((row) => {
        questionIds.push(row.id);
        questionsByTopic.set(row.topicId!, [...(questionsByTopic.get(row.topicId!) ?? []), row.id]);
      });
    }

    // 3. Lessons (DRAFT) with classwork from the topic's pack questions
    const lessonIds: string[] = [];
    let skippedExisting = 0;
    const existingLessons = allTopicIds.length ? await tx.select({ topicId: lessons.topicId, title: lessons.title }).from(lessons).where(inArray(lessons.topicId, allTopicIds)) : [];
    const lessonVals = report.data.lessons.filter((l) => {
      const tid = topicId.get(keyOf(l.classCode, l.topic))!;
      const clash = existingLessons.some((e) => e.topicId === tid && e.title.toLowerCase() === l.title.toLowerCase());
      if (clash) skippedExisting++;
      return !clash;
    });
    for (const part of chunks(lessonVals, 100)) {
      const rows = await tx
        .insert(lessons)
        .values(
          part.map((l, i) => ({
            schoolId: actor.schoolId,
            topicId: topicId.get(keyOf(l.classCode, l.topic))!,
            title: l.title,
            summary: l.summary || null,
            body: l.notes,
            examples: l.examples || null,
            videoUrl: l.videoUrl,
            estimatedMinutes: l.minutes,
            sortOrder: i,
            status: "DRAFT" as const,
            createdBy: actor.id,
          })),
        )
        .returning({ id: lessons.id, topicId: lessons.topicId });
      const links = rows.flatMap((r) => (questionsByTopic.get(r.topicId) ?? []).slice(0, 5).map((q, j) => ({ lessonId: r.id, questionId: q, sortOrder: j })));
      if (links.length) await tx.insert(lessonQuestions).values(links);
      lessonIds.push(...rows.map((r) => r.id));
    }

    // 4. Examinations (DRAFT; random pool = the covered topics)
    const examIds: string[] = [];
    if (withExams && report.data.exams.length) {
      const titles = new Set((await tx.select({ title: examinations.title }).from(examinations).where(eq(examinations.schoolId, actor.schoolId))).map((e) => e.title.toLowerCase()));
      for (const e of report.data.exams) {
        if (titles.has(e.title.toLowerCase())) {
          skippedExisting++;
          continue;
        }
        const c = classBy.get(e.classCode)!;
        const pool = report.data.topics.filter((t) => e.classesCovered.includes(t.classCode) && e.termsCovered.includes(t.term)).map((t) => topicId.get(keyOf(t.classCode, t.title))!);
        const [row] = await tx
          .insert(examinations)
          .values({
            schoolId: actor.schoolId,
            title: e.title,
            description: e.description,
            subjectId: subject.id,
            classId: c.id,
            level: c.level,
            year: e.year,
            examType: e.examType as "MOCK",
            questionCount: e.questionCount,
            durationMinutes: e.minutes,
            passMark: e.passMark,
            maxAttempts: e.maxAttempts,
            poolFilter: { topicIds: pool },
            status: "DRAFT",
            createdBy: actor.id,
          })
          .returning({ id: examinations.id });
        examIds.push(row.id);
      }
    }

    // 5. Assignments (DRAFT; questions spread evenly across the listed topics)
    const assignmentIds: string[] = [];
    if (withAssignments && report.data.assignments.length) {
      const titles = new Set((await tx.select({ title: assignments.title }).from(assignments).where(eq(assignments.schoolId, actor.schoolId))).map((a) => a.title.toLowerCase()));
      for (const a of report.data.assignments) {
        if (titles.has(a.title.toLowerCase())) {
          skippedExisting++;
          continue;
        }
        const c = classBy.get(a.classCode)!;
        const lists = a.topics.map((t) => [...(questionsByTopic.get(topicId.get(keyOf(a.classCode, t))!) ?? [])]);
        const picked: string[] = [];
        for (let round = 0; picked.length < a.questionCount && lists.some((l) => l.length); round++) {
          for (const l of lists) if (l.length && picked.length < a.questionCount) picked.push(l.shift()!);
        }
        if (!picked.length) continue;
        const [row] = await tx
          .insert(assignments)
          .values({
            schoolId: actor.schoolId,
            title: a.title,
            instructions: a.instructions,
            subjectId: subject.id,
            classId: c.id,
            level: c.level,
            topicId: topicId.get(keyOf(a.classCode, a.topics[0]))!,
            kind: a.kind,
            attemptLimit: a.attempts,
            passMark: a.passMark,
            status: "DRAFT",
            createdBy: actor.id,
          })
          .returning({ id: assignments.id });
        await tx.insert(assignmentQuestions).values(picked.map((q, i) => ({ assignmentId: row.id, questionId: q, sortOrder: i })));
        assignmentIds.push(row.id);
      }
    }

    return { topicIds, lessonIds, questionIds, examIds, assignmentIds, reusedTopics, skippedDuplicates: prepared.length - fresh.length, skippedExisting };
  });

  const next: PackReport = { ...report, created };
  const imported = created.topicIds.length + created.lessonIds.length + created.questionIds.length + created.examIds.length + created.assignmentIds.length;
  await getDb().update(questionImports).set({ status: "COMMITTED", committedAt: new Date(), importedItems: imported, report: next }).where(eq(questionImports.id, importId));
  await audit(
    {
      actor,
      action: "content_pack.committed",
      entityType: "question_import",
      entityId: importId,
      summary: `${subject.code}: ${created.topicIds.length} topics (+${created.reusedTopics} reused), ${created.lessonIds.length} lessons, ${created.questionIds.length} questions, ${created.examIds.length} exams, ${created.assignmentIds.length} assignments`,
      metadata: { skippedDuplicates: created.skippedDuplicates, skippedExisting: created.skippedExisting, examsSkippedForPermission: !withExams, assignmentsSkippedForPermission: !withAssignments },
    },
    ctx,
  );
  return created;
}

/** Approves every still-pending question from the pack in one step (reviewers only). */
export async function approvePackQuestions(actor: Actor, importId: string, ctx: ReqCtx) {
  if (!can(actor, "questions.review")) throw new AppError("FORBIDDEN", "Only question reviewers can approve questions.");
  const { report } = await loadPack(actor, importId);
  const ids = report.created?.questionIds ?? [];
  if (!ids.length) throw new AppError("VALIDATION", "Import the pack first.");
  let approved = 0;
  for (const part of chunks(ids, 1000)) {
    const res = await getDb()
      .update(questions)
      .set({ status: "APPROVED", reviewedBy: actor.id, reviewedAt: new Date(), updatedAt: new Date() })
      .where(and(inArray(questions.id, part), eq(questions.status, "PENDING_REVIEW"), sql`${questions.copyrightStatus} <> 'UNKNOWN'`))
      .returning({ id: questions.id });
    approved += res.length;
  }
  await getDb().update(questionImports).set({ report: { ...report, approvedAt: new Date().toISOString() } }).where(eq(questionImports.id, importId));
  await audit({ actor, action: "question.approved", entityType: "question_import", entityId: importId, summary: `Content pack ${report.subject?.code}: ${approved} question(s) approved in bulk` }, ctx);
  return approved;
}

async function approvedCount(ids: string[], db: Executor) {
  if (!ids.length) return 0;
  return (await db.select({ n: sql<number>`count(*)::int` }).from(questions).where(and(inArray(questions.id, ids), eq(questions.status, "APPROVED"))))[0].n;
}

/**
 * Publishes the pack's lessons, examinations and assignments. An examination is only published when
 * its approved pool can fill it; an assignment only when all of its questions are approved.
 */
export async function publishPack(actor: Actor, importId: string, ctx: ReqCtx) {
  if (!can(actor, "curriculum.manage")) throw new AppError("FORBIDDEN", "You do not have permission to publish lessons.");
  const { report } = await loadPack(actor, importId);
  const c = report.created;
  if (!c) throw new AppError("VALIDATION", "Import the pack first.");
  const db = getDb();
  const notPublished: string[] = [];

  const lessonRes = c.lessonIds.length
    ? await db.update(lessons).set({ status: "PUBLISHED", updatedAt: new Date() }).where(and(inArray(lessons.id, c.lessonIds), eq(lessons.status, "DRAFT"))).returning({ id: lessons.id })
    : [];

  let exams = 0;
  if (c.examIds.length && can(actor, "exams.publish")) {
    const rows = await db.select().from(examinations).where(and(inArray(examinations.id, c.examIds), eq(examinations.status, "DRAFT")));
    const { poolSize } = await import("./exams");
    for (const e of rows) {
      const size = await poolSize(e);
      if (size < e.questionCount) {
        notPublished.push(`${e.title}: needs ${e.questionCount} approved questions, has ${size}`);
        continue;
      }
      await db.update(examinations).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(examinations.id, e.id));
      exams++;
    }
  } else if (c.examIds.length) notPublished.push("Examinations: you do not have permission to publish examinations.");

  let assigned = 0;
  if (c.assignmentIds.length && can(actor, "assignments.manage")) {
    const rows = await db.select({ id: assignments.id, title: assignments.title }).from(assignments).where(and(inArray(assignments.id, c.assignmentIds), eq(assignments.status, "DRAFT")));
    for (const a of rows) {
      const qids = (await db.select({ id: assignmentQuestions.questionId }).from(assignmentQuestions).where(eq(assignmentQuestions.assignmentId, a.id))).map((q) => q.id);
      if ((await approvedCount(qids, db)) !== qids.length) {
        notPublished.push(`${a.title}: approve all of its questions first`);
        continue;
      }
      await db.update(assignments).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(assignments.id, a.id));
      assigned++;
    }
  }

  const publishReport = { lessons: lessonRes.length, exams, assignments: assigned, notPublished };
  await db.update(questionImports).set({ report: { ...report, publishedAt: new Date().toISOString(), publishReport } }).where(eq(questionImports.id, importId));
  await audit({ actor, action: "content_pack.published", entityType: "question_import", entityId: importId, summary: `${report.subject?.code}: ${lessonRes.length} lessons, ${exams} exams, ${assigned} assignments published` }, ctx);
  return publishReport;
}

/** Blank, documented workbook for schools writing their own packs. */
export function packTemplateWorkbook(): Buffer {
  const wb = XLSX.utils.book_new();
  const readMe = [
    ["Precious PS Academy — Content Pack template"],
    [""],
    ["One workbook per subject. Upload it at Admin → Content Packs. Nothing reaches students until you approve and publish."],
    ["Pack: Field = Subject, Value = the subject code (e.g. MTH). Optional: Version."],
    ["Scheme of Work: one row per topic — Class (e.g. JSS1), Term (1–3), Week (1–15), Topic, Subtopics and Learning Objectives (one per line or separated by ;)."],
    ["Lessons: Class + Topic must match the scheme. Notes support **bold**, lists and maths between $…$ (e.g. $\\frac{1}{2}$)."],
    ["Questions: the same columns as the question import template. Correct Answer is A, B, C or D. They enter Pending Review."],
    ["Exams: pool = the topics of 'Classes Covered' (default: Class) in 'Terms Covered' (All or e.g. 1, 2). Created as drafts."],
    ["Assignments: Topics separated by ; — questions are spread evenly across them. Created as drafts."],
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(readMe), "Read Me");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([[...PACK_COLUMNS.pack], ["Subject", ""], ["Version", "1.0"]]), PACK_SHEETS.pack);
  for (const key of ["scheme", "lessons", "questions", "exams", "assignments"] as const) {
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([[...PACK_COLUMNS[key]]]), PACK_SHEETS[key]);
  }
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}
