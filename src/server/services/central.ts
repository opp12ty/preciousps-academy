import { and, eq, isNull } from "drizzle-orm";
import * as XLSX from "xlsx";
import { PACK_COLUMNS, PACK_SHEETS } from "@/core/content-pack-format";
import { can } from "@/core/permissions";
import { SECTION_SHORT, type Section } from "@/core/sections";
import { getDb } from "../db";
import { classes, departments, departmentSubjects, resourceLinks, subjects, wordEntries } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { validateUpload } from "../files";
import { EXAM_TYPES } from "@/core/question-parser";
import { PROGRAMME_KEYS, PROGRAMMES } from "@/core/exam-programmes";
import { DIAGRAM_HELP } from "@/core/diagrams";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { previewPackWorkbook, type PackIssue } from "./content-packs";
import { upsertResource } from "./resources";
import { HUB_SECTIONS, upsertArticle, upsertHubQuestion } from "./hub";
import { WORD_KINDS, type WordKind } from "./wordbank";
import { upsertSchoolTask } from "./holiday";
import { subjectCoverage } from "./coverage";
import { HOLIDAY_KEYS, HOLIDAYS, TASK_KINDS, type HolidayKey } from "@/content/holiday";
import { SCIENCE_HUB_CATEGORIES } from "@/content/science-hub";
import { holidayTasks, hubArticles, terms } from "../db/schema";

/**
 * The central upload workbook: one Excel file for everything. Curriculum rows carry a Subject
 * column, so one file can hold many subjects; each subject is split out and handled exactly like
 * a content pack. Dictionary, idiom, cliché, phrasal-verb and resource rows go to their own
 * sections. A workbook may contain any of the sheets; missing sheets are simply skipped.
 */

type Row = Record<string, unknown>;
const cell = (r: Row, key: string) => {
  const hit = Object.keys(r).find((k) => k.trim().toLowerCase() === key.toLowerCase());
  return hit ? String(r[hit] ?? "").trim() : "";
};
const blank = (r: Row) => Object.values(r).every((v) => String(v ?? "").trim() === "");
function sheetRows(wb: XLSX.WorkBook, name: string): Row[] {
  const ws = Object.entries(wb.Sheets).find(([n]) => n.trim().toLowerCase() === name.toLowerCase())?.[1];
  return ws ? XLSX.utils.sheet_to_json<Row>(ws, { defval: "", raw: false }) : [];
}

const CURRICULUM = ["scheme", "lessons", "questions", "exams", "assignments"] as const;
type CurriculumKey = (typeof CURRICULUM)[number];
/** Central sheets are the content-pack sheets with a Subject column in front. */
export const CENTRAL_COLUMNS: Record<CurriculumKey, string[]> = {
  scheme: ["Subject", ...PACK_COLUMNS.scheme],
  lessons: ["Subject", ...PACK_COLUMNS.lessons],
  questions: [...PACK_COLUMNS.questions],
  exams: ["Subject", ...PACK_COLUMNS.exams],
  assignments: ["Subject", ...PACK_COLUMNS.assignments],
};
export const WORD_SHEETS: Record<WordKind, string> = { WORD: "Dictionary", IDIOM: "Idioms", CLICHE: "Cliches", PHRASAL_VERB: "Phrasal Verbs", PROVERB: "Proverbs", COMMON_ERROR: "Common Errors", REGISTER: "Registers" };
export const WORD_COLUMNS = ["Word or Phrase", "Part of Speech", "Meaning", "Example", "Picture (emoji)", "Section", "Class", "Status"];
export const RESOURCE_SHEET = "Resources";
export const RESOURCE_COLUMNS = ["Title", "Description", "Subject", "Class", "Section", "Type", "Link (https)", "Recommended", "Premium", "Status"];
export const ARTICLE_SHEET = "Articles";
export const ARTICLE_COLUMNS = ["Section", "Category", "Title", "Summary", "Main Content", "Key Points", "Activity", "Sources", "Class Level", "Department", "Status"];
export const QUIZ_SHEET = "Quiz Questions";
export const QUIZ_COLUMNS = ["Audience", "Category", "Class Level", "Department", "Difficulty", "Question", "A", "B", "C", "D", "Correct Answer", "Explanation"];
export const HOLIDAY_SHEET = "Holiday Tasks";
export const HOLIDAY_COLUMNS = ["Holiday", "Type", "Title", "Instructions", "Class", "Section", "Link", "Finish by (YYYY-MM-DD)", "Every year", "Show to learners"];
const RESOURCE_TYPES = ["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"];
/** What the first column of a required-content check is called on each curriculum sheet. */
const KEY_COLUMN: Record<CurriculumKey, string> = { scheme: "Topic", lessons: "Lesson Title", questions: "Question", exams: "Title", assignments: "Title" };

/** Splits the curriculum sheets into one content-pack workbook per subject. Pure. */
export function splitCentralWorkbook(wb: XLSX.WorkBook) {
  const bySubject = new Map<string, { ref: string; rows: Record<CurriculumKey, Row[]> }>();
  const issues: PackIssue[] = [];
  for (const key of CURRICULUM) {
    sheetRows(wb, PACK_SHEETS[key]).forEach((r, i) => {
      // Rows left empty, and template rows whose main column was never filled in, are ignored.
      if (blank(r) || !cell(r, KEY_COLUMN[key])) return;
      const ref = cell(r, "Subject");
      if (!ref) {
        issues.push({ sheet: PACK_SHEETS[key], row: i + 2, message: "Fill in the Subject column (the subject code, e.g. MTH)." });
        return;
      }
      const k = ref.toLowerCase();
      if (!bySubject.has(k)) bySubject.set(k, { ref, rows: { scheme: [], lessons: [], questions: [], exams: [], assignments: [] } });
      bySubject.get(k)!.rows[key].push(r);
    });
  }
  const packs = [...bySubject.values()].map(({ ref, rows }) => {
    const out = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(out, XLSX.utils.aoa_to_sheet([[...PACK_COLUMNS.pack], ["Subject", ref], ["Version", "central"]]), PACK_SHEETS.pack);
    for (const key of CURRICULUM) {
      const header = [...PACK_COLUMNS[key]];
      const body = rows[key].map((r) => header.map((h) => (key === "questions" && h === "Subject" ? ref : cell(r, h))));
      XLSX.utils.book_append_sheet(out, XLSX.utils.aoa_to_sheet([header, ...body]), PACK_SHEETS[key]);
    }
    return { ref, workbook: out };
  });
  return { packs, issues };
}

interface Lookups {
  subjects: { id: string; code: string; name: string }[];
  classes: { id: string; code: string; name: string; level: string }[];
}
async function lookups(schoolId: string): Promise<Lookups> {
  const db = getDb();
  const [subs, cls] = await Promise.all([
    db.select({ id: subjects.id, code: subjects.code, name: subjects.name }).from(subjects).where(and(eq(subjects.schoolId, schoolId), isNull(subjects.archivedAt))),
    db.select({ id: classes.id, code: classes.code, name: classes.name, level: classes.level }).from(classes).where(and(eq(classes.schoolId, schoolId), isNull(classes.archivedAt))).orderBy(classes.sortOrder),
  ]);
  return { subjects: subs, classes: cls };
}
const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();
const findClass = (l: Lookups, v: string) => l.classes.find((c) => same(c.code, v) || same(c.name, v)) ?? null;
const findSubject = (l: Lookups, v: string) => l.subjects.find((s) => same(s.code, v) || same(s.name, v)) ?? null;
function sectionOf(v: string): { level: Section | null } | null {
  const t = v.trim().toLowerCase();
  if (!t || t === "all" || t.startsWith("all ")) return { level: null };
  if (t.startsWith("pri") || t.startsWith("basic")) return { level: "PRIMARY" };
  if (t.startsWith("j") || t === "junior_secondary") return { level: "JUNIOR_SECONDARY" };
  if (t.startsWith("s")) return { level: "SENIOR_SECONDARY" };
  return null;
}
const yes = (v: string) => /^(y|yes|true|1)$/i.test(v.trim());
const statusOf = (v: string, fallback: "PUBLISHED" | "DRAFT") => (/^draft/i.test(v) ? "DRAFT" : /^pub/i.test(v) ? "PUBLISHED" : /^arch/i.test(v) ? "ARCHIVED" : fallback);

interface WordRow { kind: WordKind; term: string; partOfSpeech: string | null; meaning: string; example: string | null; picture: string | null; level: Section | null; classId: string | null; status: "PUBLISHED" | "DRAFT" | "ARCHIVED" }
function parseWords(wb: XLSX.WorkBook, l: Lookups) {
  const rows: WordRow[] = [];
  const issues: PackIssue[] = [];
  for (const kind of Object.keys(WORD_SHEETS) as WordKind[]) {
    const sheet = WORD_SHEETS[kind];
    const seen = new Set<string>();
    sheetRows(wb, sheet).forEach((r, i) => {
      if (blank(r)) return;
      const row = i + 2;
      const term = cell(r, "Word or Phrase");
      const meaning = cell(r, "Meaning");
      if (!term || meaning.length < 2) return void issues.push({ sheet, row, message: "Both the word (or phrase) and its meaning are needed." });
      if (term.length > 120 || meaning.length > 600) return void issues.push({ sheet, row, message: "The word must be 120 characters or fewer and the meaning 600 or fewer." });
      if (seen.has(term.toLowerCase())) return void issues.push({ sheet, row, message: `"${term}" appears more than once on this sheet.` });
      const sec = sectionOf(cell(r, "Section"));
      if (!sec) return void issues.push({ sheet, row, message: `Section "${cell(r, "Section")}" is not known. Use Primary, JSS, SS or All.` });
      const cls = cell(r, "Class") ? findClass(l, cell(r, "Class")) : null;
      if (cell(r, "Class") && !cls) return void issues.push({ sheet, row, message: `Class "${cell(r, "Class")}" does not exist.` });
      seen.add(term.toLowerCase());
      rows.push({ kind, term, partOfSpeech: cell(r, "Part of Speech").slice(0, 40) || null, meaning, example: cell(r, "Example").slice(0, 600) || null, picture: cell(r, "Picture (emoji)").slice(0, 16) || null, level: cls ? (cls.level as Section) : sec.level, classId: cls?.id ?? null, status: statusOf(cell(r, "Status"), "PUBLISHED") });
    });
  }
  return { rows, issues };
}

interface ResourceRow { row: number; input: Record<string, unknown> }
function parseResources(wb: XLSX.WorkBook, l: Lookups) {
  const rows: ResourceRow[] = [];
  const issues: PackIssue[] = [];
  sheetRows(wb, RESOURCE_SHEET).forEach((r, i) => {
    if (blank(r)) return;
    const row = i + 2;
    const bad = (message: string) => void issues.push({ sheet: RESOURCE_SHEET, row, message });
    const title = cell(r, "Title");
    const url = cell(r, "Link (https)");
    if (title.length < 2) return bad("A title is needed.");
    if (!/^https:\/\/\S+$/i.test(url)) return bad("The link must be a full address beginning with https://");
    const subject = cell(r, "Subject") ? findSubject(l, cell(r, "Subject")) : null;
    if (cell(r, "Subject") && !subject) return bad(`Subject "${cell(r, "Subject")}" does not exist.`);
    const cls = cell(r, "Class") ? findClass(l, cell(r, "Class")) : null;
    if (cell(r, "Class") && !cls) return bad(`Class "${cell(r, "Class")}" does not exist.`);
    const sec = sectionOf(cell(r, "Section"));
    if (!sec) return bad(`Section "${cell(r, "Section")}" is not known. Use Primary, JSS, SS or All.`);
    const type = (cell(r, "Type") || "WEBSITE").toUpperCase();
    if (!RESOURCE_TYPES.includes(type)) return bad(`Type "${cell(r, "Type")}" is not known. Use one of: ${RESOURCE_TYPES.join(", ")}.`);
    rows.push({ row, input: { title: title.slice(0, 160), description: cell(r, "Description").slice(0, 1000) || null, subjectId: subject?.id ?? null, classId: cls?.id ?? null, level: sec.level, resourceType: type, url, isRecommended: yes(cell(r, "Recommended")), isPremium: yes(cell(r, "Premium")), status: statusOf(cell(r, "Status"), "DRAFT") } });
  });
  return { rows, issues };
}

const SECTION_WORDS: [RegExp, keyof typeof HUB_SECTIONS][] = [[/psych/i, "PSYCHOLOGY"], [/temper/i, "TEMPERAMENT"], [/parent|learning/i, "LEARNING"], [/student|knowledge/i, "KNOWLEDGE"]];
const streamOf = (v: string) => (/^sci/i.test(v) ? "SCIENCE" : /^com/i.test(v) ? "COMMERCIAL" : /^art/i.test(v) ? "ARTS" : "");

function parseHub(wb: XLSX.WorkBook) {
  const articles: { row: number; input: Record<string, unknown> }[] = [];
  const questions: { row: number; input: Record<string, unknown> }[] = [];
  const issues: PackIssue[] = [];
  sheetRows(wb, ARTICLE_SHEET).forEach((r, i) => {
    if (blank(r)) return;
    const row = i + 2;
    const bad = (message: string) => void issues.push({ sheet: ARTICLE_SHEET, row, message });
    const section = SECTION_WORDS.find(([re]) => re.test(cell(r, "Section")))?.[1];
    if (!section) return bad("Section must be Knowledge Hub (students), Parent Learning, Psychology or Temperament.");
    if (cell(r, "Title").length < 3 || cell(r, "Summary").length < 10 || cell(r, "Main Content").length < 50) return bad("Title, Summary (10+ characters) and Main Content (50+ characters) are all needed.");
    const sec = sectionOf(cell(r, "Class Level"));
    if (!sec) return bad(`Class Level "${cell(r, "Class Level")}" is not known. Use Primary, JSS, SS or All.`);
    // Imported articles never go straight to the public: at most they wait in Review.
    articles.push({ row, input: { section, category: cell(r, "Category") || "General", title: cell(r, "Title"), summary: cell(r, "Summary"), body: cell(r, "Main Content"), keyPoints: cell(r, "Key Points"), activity: cell(r, "Activity"), sources: cell(r, "Sources"), level: sec.level ?? "", stream: streamOf(cell(r, "Department")), imageAssetId: "", status: /^draft/i.test(cell(r, "Status")) ? "DRAFT" : "REVIEW" } });
  });
  sheetRows(wb, QUIZ_SHEET).forEach((r, i) => {
    if (blank(r)) return;
    const row = i + 2;
    const bad = (message: string) => void issues.push({ sheet: QUIZ_SHEET, row, message });
    const options = ["A", "B", "C", "D"].map((k) => cell(r, k));
    const answer = "ABCD".indexOf(cell(r, "Correct Answer").replace(/^\*/, "").trim().toUpperCase());
    if (cell(r, "Question").length < 8 || options.some((o) => !o)) return bad("The question and all four options are needed.");
    if (answer < 0 || cell(r, "Correct Answer").trim().length > 2) return bad("Correct Answer must be A, B, C or D.");
    if (new Set(options.map((o) => o.toLowerCase())).size !== 4) return bad("The four options must be different.");
    const sec = sectionOf(cell(r, "Class Level"));
    if (!sec) return bad(`Class Level "${cell(r, "Class Level")}" is not known. Use Primary, JSS, SS or All.`);
    const difficulty = cell(r, "Difficulty").toUpperCase();
    questions.push({ row, input: { audience: /^par/i.test(cell(r, "Audience")) ? "PARENT" : "STUDENT", category: cell(r, "Category") || "General Knowledge", level: sec.level ?? "", stream: streamOf(cell(r, "Department")), difficulty: ["EASY", "MEDIUM", "HARD"].includes(difficulty) ? difficulty : "MEDIUM", stem: cell(r, "Question"), options, answer, explanation: cell(r, "Explanation"), status: "PUBLISHED" } });
  });
  return { articles, questions, issues };
}

const holidayOf = (v: string): HolidayKey | null => (/christ|first|^1$/i.test(v) ? "CHRISTMAS" : /easter|second|^2$/i.test(v) ? "EASTER" : /long|third|vac|summer|^3$/i.test(v) ? "LONG" : null);
const kindOf = (v: string) => {
  const t = v.trim().toLowerCase();
  if (!t) return "ACTIVITY";
  const hit = Object.entries(TASK_KINDS).find(([k, x]) => k.toLowerCase() === t.replace(/[ -]/g, "_") || x.label.toLowerCase() === t || x.label.toLowerCase().startsWith(t.split(" ")[0]));
  return (hit?.[0] ?? null) as keyof typeof TASK_KINDS | null;
};

function parseHoliday(wb: XLSX.WorkBook, l: Lookups) {
  const rows: { row: number; input: Record<string, unknown> }[] = [];
  const issues: PackIssue[] = [];
  sheetRows(wb, HOLIDAY_SHEET).forEach((r, i) => {
    if (blank(r)) return;
    const row = i + 2;
    const bad = (message: string) => void issues.push({ sheet: HOLIDAY_SHEET, row, message });
    // The example row in the template is ignored until someone changes its title.
    if (/^example:/i.test(cell(r, "Title"))) return;
    const holiday = holidayOf(cell(r, "Holiday"));
    if (!holiday) return bad("Holiday must be Christmas, Easter or Long vacation.");
    const kind = kindOf(cell(r, "Type"));
    if (!kind) return bad(`Type "${cell(r, "Type")}" is not known. Use one of: ${Object.values(TASK_KINDS).map((k) => k.label).join(", ")}.`);
    if (cell(r, "Title").length < 3) return bad("A title of at least 3 characters is needed.");
    const cls = cell(r, "Class") ? findClass(l, cell(r, "Class")) : null;
    if (cell(r, "Class") && !cls) return bad(`Class "${cell(r, "Class")}" does not exist.`);
    const sec = sectionOf(cell(r, "Section"));
    if (!sec) return bad(`Section "${cell(r, "Section")}" is not known. Use Primary, JSS, SS or All.`);
    const link = cell(r, "Link");
    if (link && !/^(\/|https:\/\/)/.test(link)) return bad("Link must start with / (a page in the app) or https://");
    const due = cell(r, "Finish by (YYYY-MM-DD)") || cell(r, "Finish by");
    if (due && !/^\d{4}-\d{2}-\d{2}$/.test(due)) return bad("Finish by must be written as YYYY-MM-DD, e.g. 2026-12-30.");
    const flag = (v: string) => !v.trim() || yes(v);
    rows.push({ row, input: { holiday, kind, title: cell(r, "Title").slice(0, 120), instructions: cell(r, "Instructions").slice(0, 4000), link, classId: cls?.id ?? "", level: cls ? "" : sec.level ?? "", dueOn: due, everyYear: flag(cell(r, "Every year")), active: flag(cell(r, "Show to learners")) } });
  });
  return { rows, issues };
}

async function readWorkbook(actor: Actor, file: { name: string; bytes: Buffer }, ctx: ReqCtx) {
  await rateLimit("upload", actor.id, ctx);
  const cfg = await getSetting(actor.schoolId, "uploads");
  const v = await validateUpload(file, ["xlsx"], cfg.maxFileMb * 1_048_576);
  try {
    return { name: v.name, wb: XLSX.read(v.bytes, { type: "buffer" }) };
  } catch {
    throw new AppError("IMPORT_ERROR", "We could not read this workbook. Save it as .xlsx and try again.");
  }
}

export interface CentralSubjectReport { ref: string; subject: string | null; importId: string | null; counts: { topics: number; lessons: number; questions: number; exams: number; assignments: number }; errors: PackIssue[]; warnings: number }
export interface CentralReport {
  subjects: CentralSubjectReport[];
  curriculumIssues: PackIssue[];
  curriculumAllowed: boolean;
  words: { counts: Record<WordKind, number>; issues: PackIssue[]; allowed: boolean };
  resources: { count: number; issues: PackIssue[]; allowed: boolean };
  hub: { articles: number; questions: number; issues: PackIssue[]; allowed: boolean };
  holiday: { count: number; issues: PackIssue[]; allowed: boolean };
  canReview: boolean;
  empty: boolean;
}

/** Checks every sheet. Each subject is stored as a content-pack preview; nothing reaches students. */
export async function previewCentral(actor: Actor, file: { name: string; bytes: Buffer }, ctx: ReqCtx): Promise<CentralReport> {
  const { name, wb } = await readWorkbook(actor, file, ctx);
  const l = await lookups(actor.schoolId);
  const { packs, issues } = splitCentralWorkbook(wb);
  const curriculumAllowed = can(actor, "curriculum.manage") && can(actor, "questions.import");
  const out: CentralSubjectReport[] = [];
  for (const p of packs) {
    if (!curriculumAllowed) break;
    const { importId, report } = await previewPackWorkbook(actor, `${name} — ${p.ref}`, p.workbook, 0, ctx);
    const { topics, lessons, questions, exams, assignments } = report.counts;
    out.push({ ref: p.ref, subject: report.subject ? `${report.subject.name} (${report.subject.code})` : null, importId, counts: { topics, lessons, questions, exams, assignments }, errors: report.errors.slice(0, 50), warnings: report.warnings.length });
  }
  const words = parseWords(wb, l);
  const resources = parseResources(wb, l);
  const hub = parseHub(wb);
  const holiday = parseHoliday(wb, l);
  const counts = { WORD: 0, IDIOM: 0, CLICHE: 0, PHRASAL_VERB: 0, PROVERB: 0, COMMON_ERROR: 0, REGISTER: 0 } as Record<WordKind, number>;
  for (const w of words.rows) counts[w.kind]++;
  return {
    subjects: out,
    curriculumIssues: curriculumAllowed || !packs.length ? issues : [{ sheet: PACK_SHEETS.scheme, row: 0, message: "Your account cannot upload lessons and questions (it needs the Curriculum and Question Import permissions). Those sheets were skipped." }],
    curriculumAllowed,
    words: { counts, issues: words.issues, allowed: can(actor, "learning.manage") },
    resources: { count: resources.rows.length, issues: resources.issues, allowed: can(actor, "resources.manage") },
    hub: { articles: hub.articles.length, questions: hub.questions.length, issues: hub.issues, allowed: can(actor, "learning.manage") },
    holiday: { count: holiday.rows.length, issues: holiday.issues, allowed: can(actor, "assignments.manage") },
    canReview: can(actor, "questions.review"),
    empty: !packs.length && !words.rows.length && !resources.rows.length && !hub.articles.length && !hub.questions.length && !holiday.rows.length && !issues.length && !words.issues.length && !resources.issues.length && !hub.issues.length && !holiday.issues.length,
  };
}

/**
 * Imports the dictionary, idiom, cliché, phrasal-verb and resource rows of a central workbook.
 * Words that already exist are updated; resources with the same title and link are skipped.
 */
export async function importCentralExtras(actor: Actor, file: { name: string; bytes: Buffer }, ctx: ReqCtx) {
  const { name, wb } = await readWorkbook(actor, file, ctx);
  const l = await lookups(actor.schoolId);
  const db = getDb();
  const out = { wordsAdded: 0, wordsUpdated: 0, resourcesAdded: 0, resourcesSkipped: 0, articlesAdded: 0, questionsAdded: 0, hubSkipped: 0, holidayAdded: 0, holidaySkipped: 0 };
  if (can(actor, "assignments.manage")) {
    const { rows } = parseHoliday(wb, l);
    if (rows.length) {
      // A task with the same holiday and title as one already there is not added twice.
      const have = new Set((await db.select({ h: holidayTasks.holiday, t: holidayTasks.title }).from(holidayTasks).where(and(eq(holidayTasks.schoolId, actor.schoolId), eq(holidayTasks.setBy, "SCHOOL")))).map((x) => `${x.h}|${x.t.toLowerCase()}`));
      for (const r of rows) {
        const key = `${r.input.holiday}|${String(r.input.title).toLowerCase()}`;
        if (have.has(key)) {
          out.holidaySkipped++;
          continue;
        }
        await upsertSchoolTask(actor, null, r.input, ctx).then(
          () => {
            out.holidayAdded++;
            have.add(key);
          },
          () => out.holidaySkipped++,
        );
      }
    }
  }
  if (can(actor, "learning.manage")) {
    const hub = parseHub(wb);
    for (const a of hub.articles) await upsertArticle(actor, null, a.input, ctx).then(() => out.articlesAdded++, () => out.hubSkipped++);
    for (const q of hub.questions) await upsertHubQuestion(actor, null, q.input, ctx).then(() => out.questionsAdded++, () => out.hubSkipped++);
  }
  if (can(actor, "learning.manage")) {
    const { rows } = parseWords(wb, l);
    if (rows.length) {
      const existing = await db.select({ id: wordEntries.id, kind: wordEntries.kind, term: wordEntries.term }).from(wordEntries).where(eq(wordEntries.schoolId, actor.schoolId));
      const byKey = new Map(existing.map((e) => [`${e.kind}|${e.term.toLowerCase()}`, e.id]));
      for (const w of rows) {
        const id = byKey.get(`${w.kind}|${w.term.toLowerCase()}`);
        if (id) {
          await db.update(wordEntries).set({ ...w, updatedAt: new Date() }).where(eq(wordEntries.id, id));
          out.wordsUpdated++;
        } else {
          await db.insert(wordEntries).values({ ...w, schoolId: actor.schoolId, createdBy: actor.id });
          out.wordsAdded++;
        }
      }
    }
  }
  if (can(actor, "resources.manage")) {
    const { rows } = parseResources(wb, l);
    if (rows.length) {
      const existing = await db.select({ title: resourceLinks.title, url: resourceLinks.url }).from(resourceLinks).where(eq(resourceLinks.schoolId, actor.schoolId));
      const have = new Set(existing.map((e) => `${e.title.toLowerCase()}|${e.url ?? ""}`));
      for (const r of rows) {
        if (have.has(`${String(r.input.title).toLowerCase()}|${String(r.input.url)}`)) {
          out.resourcesSkipped++;
          continue;
        }
        try {
          await upsertResource(actor, null, r.input, ctx);
          out.resourcesAdded++;
        } catch {
          out.resourcesSkipped++;
        }
      }
    }
  }
  if (out.wordsAdded + out.wordsUpdated + out.resourcesAdded + out.holidayAdded > 0) {
    await audit({ actor, action: "central_upload.imported", entityType: "school", entityId: actor.schoolId, summary: `${name}: ${out.wordsAdded} word(s) added, ${out.wordsUpdated} updated, ${out.resourcesAdded} resource(s) added, ${out.holidayAdded} holiday task(s) added` }, ctx);
  }
  return out;
}

/* ---------------------------------------------------------------- template */

/** Primary subjects that the curriculum starts in Basic 4. */
const UPPER_PRIMARY_ONLY = ["BDL", "PVS"];
const sheet = (rows: unknown[][], widths: number[]) => {
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = widths.map((wch) => ({ wch }));
  return ws;
};

/**
 * The blank central workbook. `only` limits it to one group of sheets (for the upload boxes on the
 * Dictionary & Games and Resources pages). The full template lists every subject and class of the
 * school and carries one ready row per Primary subject, class and term on the Scheme of Work sheet.
 */
export async function centralTemplateWorkbook(schoolId: string, only: "all" | "words" | "resources" | "hub" = "all"): Promise<Buffer> {
  const db = getDb();
  const l = await lookups(schoolId);
  const links = await db
    .select({ subjectId: departmentSubjects.subjectId, level: departments.level, dept: departments.name })
    .from(departmentSubjects)
    .innerJoin(departments, eq(departments.id, departmentSubjects.departmentId))
    .where(eq(departments.schoolId, schoolId));
  const wb = XLSX.utils.book_new();
  const readMe: string[][] = [
    ["Precious PS Academy — Central upload workbook"],
    [""],
    ["Fill in the sheets you need, save the file as .xlsx and upload it in the backend. Every row goes to the section it belongs to."],
    ["You do not have to use every sheet. Sheets and rows you leave empty are ignored."],
    ["Nothing is created until you press the Import button, and every row is checked first."],
    [""],
  ];
  if (only === "all") {
    readMe.push(
      ["LESSONS AND QUESTIONS (many subjects in one file)"],
      ["Subject column: the subject code from the Subjects sheet, e.g. MTH, ENG, BST. This is what sends each row to the right subject."],
      ["Scheme of Work: one row per topic — Subject, Class (e.g. Basic 4 or BASIC4), Term (1–3), Week (1–15), Topic, Subtopics and Learning Objectives (one per line, or separated by ;)."],
      ["   The sheet already has a row for each Primary subject, class and term. Type the topic in the Topic column and copy the row for more topics. Rows with no Topic are ignored."],
      ["Lessons: Subject, Class and Topic must match a row of the Scheme of Work. Notes may use ## headings, - lists, **bold**, maths between $…$ and pictures such as [[diagram: fraction 3/4]]."],
      ["Questions: Correct Answer is A, B, C or D. Questions enter Pending Review unless you tick the box to approve them while importing."],
      ["Exams: Classes Covered and Terms Covered decide which topics the paper draws from. Assignments: Topics separated by ;"],
      [""],
    );
  }
  if (only === "all") {
    // Written from the live rules each time the template is downloaded, so it never falls behind the app.
    readMe.push(
      ["EXAM TYPES YOU CAN TYPE"],
      [EXAM_TYPES.join(", ")],
      ...PROGRAMME_KEYS.map((k) => [`${k}: shown only to ${PROGRAMMES[k].classes.join(", ")}`]),
      [""],
      ["PICTURES AND DIAGRAMS YOU CAN TYPE IN NOTES, QUESTIONS AND EXPLANATIONS"],
      ...DIAGRAM_HELP.map((d) => [`${d.example}   —   ${d.shows}`]),
      [""],
    );
  }
  if (only === "all" || only === "hub") {
    readMe.push(
      ["KNOWLEDGE HUB AND PARENT LEARNING: Articles, Quiz Questions"],
      ["Articles: Section is Knowledge Hub (for students), Parent Learning, Psychology or Temperament. Main Content may use ## headings, - lists, **bold** and pictures. Class Level and Department apply to student articles."],
      ["   Imported articles go to Review (or Draft). They are published in the backend after someone has read them."],
      ["Quiz Questions: Audience is Student or Parent. Correct Answer is A, B, C or D. Categories Culture, History and Geography feed the Culture Challenge."],
      [""],
    );
  }
  if (only !== "resources" && only !== "hub") {
    readMe.push(
      ["STUDY MATERIALS: Dictionary, Idioms, Cliches, Phrasal Verbs, Proverbs, Common Errors"],
      ["Proverbs: Part of Speech holds the origin (e.g. Yoruba proverb). Common Errors: Word or Phrase is the error, Example is the correct form, Meaning explains why, Part of Speech is the group (e.g. Grammar)."],
      ["One row per word or phrase. Meaning is required. Picture is one emoji (optional). Section: Primary, JSS, SS or All. Class (optional) limits the entry to one class."],
      ["A word that already exists is updated with the new row, so the same sheet can be corrected and uploaded again."],
      [""],
    );
  }
  if (only === "all") {
    readMe.push(
      ["HOLIDAY PROGRAMME: Holiday Tasks"],
      ["One row per task for the Christmas, Easter or Long vacation break. Class or Section decide who sees it (leave both empty for every learner). Type: " + Object.values(TASK_KINDS).map((k) => k.label).join(", ") + "."],
      ["Every year and Show to learners: Yes or No (empty means Yes). A task with the same holiday and title as an existing one is skipped. The example row is ignored until you change its title."],
      [""],
      ["THIS WORKBOOK IS ALWAYS CURRENT"],
      ["The Subjects, Classes, Lists and Coverage sheets are written from the live system each time you download this file. Download a fresh copy after adding a subject, class, department, term or category."],
      [""],
    );
  }
  if (only !== "words" && only !== "hub") {
    readMe.push(
      ["RESOURCES (links)"],
      ["One row per link: Title, Link (must begin with https://), Type (VIDEO, AUDIO, DOCUMENT, WEBSITE, LIBRARY, PRESENTATION or OTHER). Recommended and Premium: Yes or No. Status: Published or Draft."],
      ["Files themselves (PDF, Word, PowerPoint, Excel) cannot travel inside a spreadsheet. Keep adding them under Study Materials as before."],
      [""],
    );
  }
  XLSX.utils.book_append_sheet(wb, sheet(readMe, [150]), "Read Me");

  if (only === "all") {
    const primaryIds = new Set(links.filter((x) => x.level === "PRIMARY").map((x) => x.subjectId));
    const subjectRows = l.subjects
      .map((s) => ({ ...s, sections: [...new Set(links.filter((x) => x.subjectId === s.id).map((x) => SECTION_SHORT[x.level as Section] ?? "All"))] }))
      .sort((a, b) => Number(primaryIds.has(b.id)) - Number(primaryIds.has(a.id)) || a.name.localeCompare(b.name));
    XLSX.utils.book_append_sheet(wb, sheet([["Subject code", "Subject name", "Taught in"], ...subjectRows.map((s) => [s.code, s.name, s.sections.join(", ") || "All"])], [14, 40, 24]), "Subjects");
    XLSX.utils.book_append_sheet(wb, sheet([["Class code", "Class name", "Section"], ...l.classes.map((c) => [c.code, c.name, SECTION_SHORT[c.level as Section] ?? c.level])], [14, 20, 14]), "Classes");
    XLSX.utils.book_append_sheet(wb, sheet(await listsSheet(schoolId), [26, 34, 26, 34, 26, 40, 40, 26]), "Lists");
    const cov = await subjectCoverage(schoolId);
    const covRows: unknown[][] = [["Subject code", "Subject", ...cov.classes.map((c) => c.name)]];
    for (const r of cov.rows)
      covRows.push([
        r.code,
        r.name,
        ...cov.classes.map((c) => {
          const x = r.cells[c.code];
          return x.state === "none" ? "" : x.state === "missing" ? "NO CONTENT" : `${x.lessons}/${x.topics} lessons, ${x.questions} questions${x.questions < 70 ? " (under 70)" : ""}`;
        }),
      ]);
    XLSX.utils.book_append_sheet(wb, sheet(covRows, [12, 34, ...cov.classes.map(() => 26)]), "Coverage");
    const primaryClasses = l.classes.filter((c) => c.level === "PRIMARY");
    const skeleton: string[][] = [];
    for (const s of subjectRows.filter((x) => primaryIds.has(x.id)))
      for (const c of primaryClasses) {
        if (UPPER_PRIMARY_ONLY.includes(s.code) && /^BASIC[123]$/i.test(c.code)) continue;
        for (const term of [1, 2, 3]) skeleton.push([s.code, c.name, String(term), "1", "", "", "", "Y"]);
      }
    const widths: Record<CurriculumKey, number[]> = { scheme: [10, 10, 6, 6, 38, 45, 60, 10], lessons: [10, 10, 34, 34, 50, 8, 80, 80, 20], questions: [10, 10, 8, 6, 10, 30, 10, 70, 28, 28, 28, 28, 8, 60, 6, 10, 26, 12], exams: [10, 48, 10, 12, 22, 12, 10, 8, 10, 12, 6, 70], assignments: [10, 52, 10, 12, 70, 10, 9, 10, 60] };
    for (const key of CURRICULUM) XLSX.utils.book_append_sheet(wb, sheet([CENTRAL_COLUMNS[key], ...(key === "scheme" ? skeleton : [])], widths[key]), PACK_SHEETS[key]);
  }
  if (only !== "resources" && only !== "hub") for (const kind of Object.keys(WORD_SHEETS) as WordKind[]) XLSX.utils.book_append_sheet(wb, sheet([WORD_COLUMNS, ...(only === "words" ? [] : [])], [28, 16, 60, 60, 14, 12, 14, 12]), WORD_SHEETS[kind]);
  if (only === "all") XLSX.utils.book_append_sheet(wb, sheet([HOLIDAY_COLUMNS, ["Christmas", "Revision", "Example: revise fractions and decimals", "Do 20 questions a day from Practice.", "Basic 5", "", "/student/practice", "", "Yes", "Yes"]], [12, 22, 44, 60, 12, 12, 26, 20, 10, 14]), HOLIDAY_SHEET);
  if (only !== "words" && only !== "hub") XLSX.utils.book_append_sheet(wb, sheet([RESOURCE_COLUMNS], [40, 50, 12, 12, 12, 14, 50, 14, 10, 12]), RESOURCE_SHEET);
  if (only === "all" || only === "hub") {
    XLSX.utils.book_append_sheet(wb, sheet([ARTICLE_COLUMNS], [18, 22, 40, 50, 90, 40, 40, 30, 12, 14, 10]), ARTICLE_SHEET);
    XLSX.utils.book_append_sheet(wb, sheet([QUIZ_COLUMNS], [10, 20, 12, 14, 10, 70, 28, 28, 28, 28, 10, 60]), QUIZ_SHEET);
  }
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

export const CENTRAL_SHEET_GUIDE = [
  { sheet: PACK_SHEETS.scheme, goes: "Curriculum · Topics (each subject's scheme of work)" },
  { sheet: PACK_SHEETS.lessons, goes: "Lessons (My Study)" },
  { sheet: PACK_SHEETS.questions, goes: "Question Bank" },
  { sheet: PACK_SHEETS.exams, goes: "Examinations, Practice and Mock" },
  { sheet: PACK_SHEETS.assignments, goes: "Assignments and Classwork" },
  ...(Object.keys(WORD_SHEETS) as WordKind[]).map((k) => ({ sheet: WORD_SHEETS[k], goes: `Study Materials → ${WORD_KINDS[k].label}` })),
  { sheet: RESOURCE_SHEET, goes: "Resource Centre (links)" },
  { sheet: ARTICLE_SHEET, goes: "Knowledge Hub, Parent Learning Hub and Psychology Library (as Review)" },
  { sheet: QUIZ_SHEET, goes: "Quiz Arena, challenges and parent games" },
  { sheet: HOLIDAY_SHEET, goes: "Holiday Programme (school holiday tasks)" },
  { sheet: "Lists", goes: "Reference only: every value you can type, always current" },
  { sheet: "Coverage", goes: "Reference only: lessons and questions per subject and class" },
];

/** Every value a sheet accepts, written from the live system so the workbook never falls behind. */
async function listsSheet(schoolId: string): Promise<unknown[][]> {
  const db = getDb();
  const [deps, trs, cats] = await Promise.all([
    db.select({ code: departments.code, name: departments.name }).from(departments).where(and(eq(departments.schoolId, schoolId), isNull(departments.archivedAt))),
    db.select({ name: terms.name, startsOn: terms.startsOn, endsOn: terms.endsOn }).from(terms).where(and(eq(terms.schoolId, schoolId), isNull(terms.archivedAt))).orderBy(terms.sortOrder),
    db.selectDistinct({ c: hubArticles.category }).from(hubArticles).where(eq(hubArticles.schoolId, schoolId)),
  ]);
  const categories = [...new Set([...cats.map((x) => x.c), ...SCIENCE_HUB_CATEGORIES])].sort();
  const cols: [string, string[]][] = [
    ["Departments (code — name)", deps.map((d) => `${d.code} — ${d.name}`)],
    ["Terms (start → end)", trs.map((t) => `${t.name}: ${t.startsOn ?? "?"} → ${t.endsOn ?? "?"}`)],
    ["Holiday", HOLIDAY_KEYS.map((k) => HOLIDAYS[k].label)],
    ["Holiday task Type", Object.values(TASK_KINDS).map((k) => k.label)],
    ["Section / Class Level", ["Primary", "JSS", "SS", "All"]],
    ["Article Section", Object.values(HUB_SECTIONS).map((x) => x.label)],
    ["Article Category (Science & Engineering Hub categories included)", categories],
    ["Resource Type", RESOURCE_TYPES],
  ];
  const height = Math.max(...cols.map(([, v]) => v.length));
  const out: unknown[][] = [cols.map(([h]) => h)];
  for (let i = 0; i < height; i++) out.push(cols.map(([, v]) => v[i] ?? ""));
  return out;
}
