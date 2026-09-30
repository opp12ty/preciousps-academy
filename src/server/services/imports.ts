import { and, eq, ilike, inArray, ne, sql } from "drizzle-orm";
import JSZip from "jszip";
import { z } from "zod";
import * as XLSX from "xlsx";
import { EXCEL_TEMPLATE_COLUMNS, parseStarQuestions, questionFingerprint, validateExcelRow, type ParsedOption } from "@/core/question-parser";
import { getDb } from "../db";
import { classes, departments, questionImports, questions, resourceLinks, subjects, topics } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { sha256 } from "../crypto";
import { validateUpload, type FileKind } from "../files";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { createQuestion } from "./questions";
import { storeAsset } from "./assets";
import { resolveSection } from "./scope";
import { SECTIONS } from "@/core/sections";

/**
 * Question import pipeline (§43–§47): upload → safe parse → per-item
 * validation & duplicate detection → editable preview → commit. Every
 * imported question enters PENDING_REVIEW.
 */

export interface ImportItem {
  index: number;
  source: string; // "Question 3" / "Row 7" / "Slide 2"
  subjectName?: string;
  className?: string;
  departmentName?: string;
  topicName?: string;
  subtopicName?: string;
  year?: number;
  examType?: string;
  stem: string;
  options: ParsedOption[];
  explanation?: string;
  marks: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  source_?: string;
  copyrightStatus: string;
  errors: string[];
  warnings: string[];
  duplicateOf?: string | null;
}

export interface ImportReport {
  mode: "QUESTIONS" | "RESOURCE";
  items: ImportItem[];
  notices: string[];
  textChars: number;
  resource?: { assetId: string; suggestedTitle: string };
}

export const importDefaultsSchema = z.object({
  subjectId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  classId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  departmentId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  /** Section for imported items; omitted = taken from the class. */
  level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => undefined)),
  year: z.coerce.number().int().min(1990).max(2100).nullish().or(z.literal("").transform(() => null)),
  examType: z.string().nullish(),
  source: z.string().trim().max(300).nullish(),
  copyrightStatus: z.enum(["ORIGINAL", "TEACHER_AUTHORED", "LICENSED", "AUTHORIZED", "AI_GENERATED", "UNKNOWN"]).default("ORIGINAL"),
  licenseInfo: z.string().trim().max(500).nullish(),
});
export type ImportDefaults = z.infer<typeof importDefaultsSchema>;

const ALLOWED: FileKind[] = ["docx", "doc", "xlsx", "xls", "pptx", "ppt", "pdf", "csv"];

/* ------------------------------------------------------------ extractors */

async function wordText(kind: "docx" | "doc", bytes: Buffer): Promise<{ text: string; notices: string[] }> {
  const notices: string[] = [];
  if (kind === "docx") {
    const mammoth = await import("mammoth");
    const { value } = await mammoth.extractRawText({ buffer: bytes });
    const zip = await JSZip.loadAsync(bytes);
    if (Object.keys(zip.files).some((n) => n.startsWith("word/media/"))) {
      notices.push("The document contains images/diagrams. They are not imported automatically — attach them to the relevant questions in the editor.");
    }
    if (Object.keys(zip.files).some((n) => n.startsWith("word/embeddings/") && /oleObject|Equation/i.test(n))) {
      notices.push("Legacy Equation Editor objects were found. Re-type those formulas using $…$ (LaTeX) in the editor.");
    }
    return { text: value, notices };
  }
  const WordExtractor = (await import("word-extractor")).default;
  const doc = await new WordExtractor().extract(bytes);
  return { text: doc.getBody(), notices };
}

async function pptxSlides(bytes: Buffer): Promise<string[]> {
  const zip = await JSZip.loadAsync(bytes);
  const slides = Object.keys(zip.files)
    .filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a, b) => Number(a.match(/(\d+)\.xml$/)![1]) - Number(b.match(/(\d+)\.xml$/)![1]));
  const decode = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
  const out: string[] = [];
  for (const s of slides) {
    const xml = await zip.files[s].async("string");
    const paras = xml.split(/<\/a:p>/).map((p) => decode(Array.from(p.matchAll(/<a:t>([^<]*)<\/a:t>/g)).map((m) => m[1]).join("")).trim());
    out.push(paras.filter(Boolean).join("\n"));
  }
  return out;
}

async function pdfText(bytes: Buffer): Promise<string> {
  const { extractText, getDocumentProxy } = await import("unpdf");
  const pdf = await getDocumentProxy(new Uint8Array(bytes));
  const { text } = await extractText(pdf, { mergePages: false });
  return (Array.isArray(text) ? text : [text]).join("\n\n");
}

/* --------------------------------------------------------------- preview */

function parsedToItems(text: string, prefix: string, d: ImportDefaults): ImportItem[] {
  return parseStarQuestions(text).map((q, i) => ({
    index: i,
    source: `${prefix} ${q.number ?? i + 1}`,
    topicName: q.topic,
    year: q.year ?? d.year ?? undefined,
    stem: q.stem,
    options: q.options,
    explanation: q.explanation,
    marks: q.marks ?? 1,
    difficulty: q.difficulty ?? "MEDIUM",
    copyrightStatus: d.copyrightStatus,
    errors: [...q.errors, ...(d.subjectId ? [] : ["Choose a subject for this import."])],
    warnings: q.warnings,
  }));
}

export async function previewImport(actor: Actor, file: { name: string; bytes: Buffer }, rawDefaults: unknown, ctx: ReqCtx) {
  await rateLimit("upload", actor.id, ctx);
  const d = importDefaultsSchema.parse(rawDefaults ?? {});
  const cfg = await getSetting(actor.schoolId, "uploads");
  let v;
  try {
    v = await validateUpload(file, ALLOWED, cfg.maxFileMb * 1_048_576);
  } catch (e) {
    if (e instanceof AppError && /unsafe|macro|script|not match|ActiveX/i.test(e.message)) {
      await securityEvent({ type: "MALICIOUS_UPLOAD", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { name: file.name, reason: e.message } }, ctx);
    }
    throw e;
  }

  const report: ImportReport = { mode: "QUESTIONS", items: [], notices: [], textChars: 0 };
  try {
    if (v.kind === "docx" || v.kind === "doc") {
      const { text, notices } = await wordText(v.kind, v.bytes);
      report.textChars = text.length;
      report.notices.push(...notices);
      report.items = parsedToItems(text, "Question", d);
    } else if (v.kind === "xlsx" || v.kind === "xls" || v.kind === "csv") {
      const wb = XLSX.read(v.bytes, { type: "buffer", cellFormula: false, cellHTML: false, dense: true, sheetRows: 5001 });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "", raw: false });
      if (rows.length > 5000) report.notices.push("Only the first 5,000 rows were read.");
      const header = Object.keys(rows[0] ?? {});
      const missing = ["Subject", "Question", "A", "B", "Correct Answer"].filter((c) => !header.some((h) => h.trim().toLowerCase() === c.toLowerCase()));
      if (missing.length) throw new AppError("IMPORT_ERROR", `The spreadsheet is missing required column(s): ${missing.join(", ")}. Download the template to see the expected layout.`);
      report.textChars = rows.length;
      report.items = rows.map((r, i) => {
        const res = validateExcelRow(r, i + 2);
        return {
          index: i,
          source: `Row ${res.row}`,
          subjectName: res.data.subject,
          className: res.data.className,
          departmentName: res.data.department,
          topicName: res.data.topic,
          subtopicName: res.data.subtopic,
          year: res.data.year ?? d.year ?? undefined,
          examType: res.data.examType ?? d.examType ?? undefined,
          stem: res.data.stem,
          options: res.data.options,
          explanation: res.data.explanation,
          marks: res.data.marks,
          difficulty: res.data.difficulty,
          source_: res.data.source,
          copyrightStatus: res.data.copyrightStatus,
          errors: res.errors,
          warnings: res.warnings,
        };
      });
    } else if (v.kind === "pptx") {
      const slides = await pptxSlides(v.bytes);
      const text = slides.join("\n\n");
      report.textChars = text.length;
      const items = parsedToItems(text, "Question", d).filter((q) => q.options.length >= 2);
      if (items.length && items.filter((q) => !q.errors.length).length >= Math.max(1, Math.floor(items.length / 2))) {
        report.items = items;
        report.notices.push(`Structured questions were detected across ${slides.length} slide(s).`);
      } else {
        report.mode = "RESOURCE";
      }
    } else if (v.kind === "ppt") {
      report.mode = "RESOURCE";
      report.notices.push("Legacy .ppt files are imported as Study Centre resources. Save as .pptx to extract questions.");
    } else if (v.kind === "pdf") {
      const text = await pdfText(v.bytes);
      report.textChars = text.replace(/\s/g, "").length;
      if (report.textChars < 40) {
        report.mode = "RESOURCE";
        report.notices.push(
          "This PDF has no readable text layer (it looks scanned). OCR is required to extract questions: run it through OCR (e.g. Word → Open PDF, or Google Drive → Open with Docs), then import the resulting .docx. The file can be added as a Study Centre resource now.",
        );
      } else {
        const items = parsedToItems(text, "Question", d);
        if (items.length) report.items = items;
        else report.mode = "RESOURCE";
      }
    }
  } catch (e) {
    if (e instanceof AppError) throw e;
    throw new AppError("IMPORT_ERROR", "We could not read this file. Make sure it is not password-protected or corrupted.");
  }

  if (report.mode === "RESOURCE") {
    const asset = await storeAsset(actor, { name: v.name, bytes: v.bytes }, "DOCUMENT", ctx);
    report.resource = { assetId: asset.id, suggestedTitle: v.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ") };
    if (!report.notices.length) report.notices.push("No structured questions were found, so this file will be added as a Study Centre resource (after review).");
  } else {
    if (!report.items.length) report.notices.push("No questions were found. Check the format: numbered questions, lettered options and ★ before the correct option.");
    await resolveAndCheck(actor.schoolId, report.items, d);
  }

  const valid = report.items.filter((i) => !i.errors.length && !i.duplicateOf).length;
  const [row] = await getDb()
    .insert(questionImports)
    .values({
      schoolId: actor.schoolId,
      fileName: v.name,
      fileType: v.kind,
      fileSize: v.bytes.length,
      status: report.mode === "RESOURCE" ? "RESOURCE" : "PREVIEW",
      totalItems: report.items.length,
      validItems: valid,
      report,
      defaults: d,
      createdBy: actor.id,
    })
    .returning({ id: questionImports.id });
  await audit({ actor, action: "question.import_previewed", entityType: "question_import", entityId: row.id, summary: `${v.name}: ${report.items.length} item(s), ${valid} valid` }, ctx);
  return { importId: row.id, report };
}

/** Resolves names to ids, flags unknown references and duplicates (in-file and in-bank). */
async function resolveAndCheck(schoolId: string, items: ImportItem[], d: ImportDefaults) {
  const db = getDb();
  const subs = await db.select({ id: subjects.id, name: subjects.name, code: subjects.code }).from(subjects).where(eq(subjects.schoolId, schoolId));
  const cls = await db.select({ id: classes.id, name: classes.name, code: classes.code }).from(classes).where(eq(classes.schoolId, schoolId));
  const deps = await db.select({ id: departments.id, name: departments.name, code: departments.code }).from(departments).where(eq(departments.schoolId, schoolId));
  const find = <T extends { name: string; code: string }>(list: T[], v?: string) =>
    v ? list.find((x) => x.name.toLowerCase() === v.trim().toLowerCase() || x.code.toLowerCase() === v.trim().toLowerCase()) : undefined;

  const seen = new Map<string, number>();
  const hashes: string[] = [];
  for (const it of items) {
    it.errors = it.errors.filter((e) => e !== "Choose a subject for this import.");
    const subject = it.subjectName ? find(subs, it.subjectName) : subs.find((s) => s.id === d.subjectId);
    if (!subject) it.errors.push(it.subjectName ? `Unknown subject "${it.subjectName}".` : "Choose a subject for this import.");
    if (it.className && !find(cls, it.className)) it.errors.push(`Unknown class "${it.className}".`);
    if (it.departmentName && !find(deps, it.departmentName)) it.errors.push(`Unknown department "${it.departmentName}".`);
    if (subject) {
      const fp = questionFingerprint(it.stem, it.options);
      const prior = seen.get(`${subject.id}|${fp}`);
      if (prior !== undefined) it.errors.push(`Duplicate of item ${prior + 1} in this file.`);
      else seen.set(`${subject.id}|${fp}`, it.index);
      const h = sha256(`${subject.id}|${fp}|null`);
      (it as ImportItem & { _hash?: string })._hash = h;
      hashes.push(h);
    }
  }
  if (hashes.length) {
    const existing = await db.select({ ref: questions.ref, hash: questions.contentHash }).from(questions).where(and(eq(questions.schoolId, schoolId), inArray(questions.contentHash, hashes)));
    const byHash = new Map(existing.map((e) => [e.hash, e.ref]));
    for (const it of items) {
      const h = (it as ImportItem & { _hash?: string })._hash;
      if (h && byHash.has(h)) {
        it.duplicateOf = byHash.get(h);
        it.warnings.push(`Already in the question bank (${byHash.get(h)}) — will be skipped.`);
      }
      delete (it as ImportItem & { _hash?: string })._hash;
    }
  }
}

async function loadImport(actor: Actor, importId: string) {
  const [imp] = await getDb().select().from(questionImports).where(and(eq(questionImports.id, importId), eq(questionImports.schoolId, actor.schoolId), ne(questionImports.fileType, "content-pack")));
  if (!imp) throw new AppError("NOT_FOUND", "Import not found.");
  return imp;
}

const itemEditSchema = z.object({
  stem: z.string().trim().min(1).max(8000),
  options: z.array(z.object({ label: z.string().max(2), text: z.string().trim().max(2000), isCorrect: z.boolean() })).max(8),
  explanation: z.string().trim().max(8000).optional(),
  marks: z.coerce.number().positive().max(100).default(1),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  topicName: z.string().trim().max(160).optional(),
});

/** Correct an item in the preview before committing; it is re-validated server-side. */
export async function editImportItem(actor: Actor, importId: string, index: number, raw: unknown) {
  const imp = await loadImport(actor, importId);
  if (imp.status !== "PREVIEW") throw new AppError("CONFLICT", "This import has already been committed.");
  const patch = itemEditSchema.parse(raw);
  const report = imp.report as ImportReport;
  const it = report.items.find((i) => i.index === index);
  if (!it) throw new AppError("NOT_FOUND", "Item not found.");
  Object.assign(it, patch, { duplicateOf: null, warnings: [] as string[], errors: [] as string[] });
  const correct = it.options.filter((o) => o.isCorrect).length;
  if (!it.stem) it.errors.push("Question text is empty.");
  if (it.options.length < 2) it.errors.push("A question needs at least two options.");
  if (it.options.some((o) => !o.text)) it.errors.push("One or more options are empty.");
  if (correct > 1) it.errors.push("More than one option is marked correct.");
  if (correct === 0) it.errors.push("Mark the correct option.");
  await resolveAndCheck(actor.schoolId, report.items, (imp.defaults ?? {}) as ImportDefaults);
  const valid = report.items.filter((i) => !i.errors.length && !i.duplicateOf).length;
  await getDb().update(questionImports).set({ report, validItems: valid }).where(eq(questionImports.id, importId));
  return it;
}

export async function commitImport(actor: Actor, importId: string, selected: number[] | "ALL_VALID", ctx: ReqCtx) {
  const imp = await loadImport(actor, importId);
  const db = getDb();
  const d = (imp.defaults ?? {}) as ImportDefaults;
  const report = imp.report as ImportReport;

  if (imp.status === "RESOURCE") {
    if (!report.resource) throw new AppError("CONFLICT", "Nothing to import.");
    const [r] = await db
      .insert(resourceLinks)
      .values({
        schoolId: actor.schoolId,
        title: report.resource.suggestedTitle.slice(0, 160),
        description: `Imported from ${imp.fileName}`,
        subjectId: d.subjectId ?? null,
        classId: d.classId ?? null,
        departmentId: d.departmentId ?? null,
        level: await resolveSection(actor.schoolId, d.classId, d.level),
        resourceType: imp.fileType.startsWith("ppt") ? "PRESENTATION" : "DOCUMENT",
        assetId: report.resource.assetId,
        platform: "Upload",
        status: "DRAFT",
        createdBy: actor.id,
      })
      .returning({ id: resourceLinks.id });
    await db.update(questionImports).set({ status: "COMMITTED", committedAt: new Date() }).where(eq(questionImports.id, importId));
    await audit({ actor, action: "resource.imported", entityType: "resource", entityId: r.id, summary: imp.fileName }, ctx);
    return { imported: 0, skipped: 0, resourceId: r.id };
  }
  if (imp.status !== "PREVIEW") throw new AppError("CONFLICT", "This import has already been committed.");

  const subs = await db.select({ id: subjects.id, name: subjects.name, code: subjects.code }).from(subjects).where(eq(subjects.schoolId, actor.schoolId));
  const cls = await db.select({ id: classes.id, name: classes.name, code: classes.code }).from(classes).where(eq(classes.schoolId, actor.schoolId));
  const deps = await db.select({ id: departments.id, name: departments.name, code: departments.code }).from(departments).where(eq(departments.schoolId, actor.schoolId));
  const find = <T extends { id: string; name: string; code: string }>(list: T[], v?: string) =>
    v ? list.find((x) => x.name.toLowerCase() === v.trim().toLowerCase() || x.code.toLowerCase() === v.trim().toLowerCase())?.id : undefined;

  const chosen = report.items.filter((i) => !i.errors.length && !i.duplicateOf && (selected === "ALL_VALID" || selected.includes(i.index)));
  if (!chosen.length) throw new AppError("VALIDATION", "There are no valid questions selected to import.");

  let imported = 0;
  const skipped: string[] = [];
  await db.transaction(async (tx) => {
    const topicCache = new Map<string, string>();
    for (const it of chosen) {
      const subjectId = (it.subjectName ? find(subs, it.subjectName) : d.subjectId) as string;
      let topicId: string | null = null;
      if (it.topicName) {
        const key = `${subjectId}|${it.topicName.toLowerCase()}`;
        topicId = topicCache.get(key) ?? null;
        if (!topicId) {
          const [t] = await tx.select({ id: topics.id }).from(topics).where(and(eq(topics.subjectId, subjectId), ilike(topics.title, it.topicName)));
          topicId = t?.id ?? (await tx.insert(topics).values({ schoolId: actor.schoolId, subjectId, title: it.topicName.slice(0, 160), level: d.level ?? null, status: "PUBLISHED" }).returning({ id: topics.id }))[0].id;
          topicCache.set(key, topicId);
        }
      }
      try {
        await createQuestion(
          actor,
          {
            subjectId,
            classId: find(cls, it.className) ?? d.classId ?? null,
            departmentId: find(deps, it.departmentName) ?? d.departmentId ?? null,
            level: d.level ?? undefined,
            topicId,
            year: it.year ?? d.year ?? null,
            examType: (it.examType ?? d.examType ?? null) || null,
            difficulty: it.difficulty,
            type: "MCQ",
            stem: it.stem,
            explanation: it.explanation ?? null,
            marks: it.marks,
            options: it.options.map((o) => ({ text: o.text, isCorrect: o.isCorrect })),
            source: it.source_ ?? d.source ?? `Import: ${imp.fileName}`,
            copyrightStatus: it.copyrightStatus as "ORIGINAL",
            licenseInfo: d.licenseInfo ?? null,
            status: "PENDING_REVIEW",
          },
          ctx,
          { db: tx, importId, skipAudit: true },
        );
        imported++;
      } catch (e) {
        if (e instanceof AppError && e.code === "DUPLICATE") skipped.push(it.source);
        else if (e instanceof AppError || (e as Error).name === "ZodError") skipped.push(`${it.source} (${(e as Error).message.slice(0, 80)})`);
        else throw e;
      }
    }
    await tx.update(questionImports).set({ status: "COMMITTED", importedItems: imported, committedAt: new Date() }).where(eq(questionImports.id, importId));
    await audit({ actor, action: "question.import_committed", entityType: "question_import", entityId: importId, summary: `${imported} question(s) imported as PENDING_REVIEW from ${imp.fileName}`, metadata: { skipped } }, ctx, tx);
  });
  return { imported, skipped: skipped.length, skippedItems: skipped };
}

export async function listImports(schoolId: string) {
  return getDb()
    .select({
      id: questionImports.id,
      fileName: questionImports.fileName,
      fileType: questionImports.fileType,
      status: questionImports.status,
      totalItems: questionImports.totalItems,
      validItems: questionImports.validItems,
      importedItems: questionImports.importedItems,
      createdAt: questionImports.createdAt,
    })
    .from(questionImports)
    .where(and(eq(questionImports.schoolId, schoolId), ne(questionImports.fileType, "content-pack")))
    .orderBy(sql`${questionImports.createdAt} DESC`)
    .limit(50);
}

export async function getImport(actor: Actor, id: string) {
  const imp = await loadImport(actor, id);
  return imp;
}

/** Downloadable Excel template (§45). */
export function excelTemplate(): Buffer {
  const example = [
    {
      Subject: "Mathematics",
      Class: "SS2",
      Department: "Science",
      Year: 2025,
      "Exam Type": "MOCK",
      Topic: "Indices",
      Subtopic: "Laws of indices",
      Question: "Simplify $2^3 \\times 2^2$.",
      A: "$2^5$",
      B: "$2^6$",
      C: "$4^5$",
      D: "$2^1$",
      "Correct Answer": "A",
      Explanation: "Add the powers when multiplying equal bases: 3 + 2 = 5.",
      Marks: 1,
      Difficulty: "EASY",
      Source: "Precious PS original",
      "Copyright Status": "ORIGINAL",
    },
  ];
  const ws = XLSX.utils.json_to_sheet(example, { header: [...EXCEL_TEMPLATE_COLUMNS] });
  ws["!cols"] = EXCEL_TEMPLATE_COLUMNS.map((c) => ({ wch: c === "Question" || c === "Explanation" ? 48 : c.length < 6 ? 14 : 18 }));
  const guide = XLSX.utils.aoa_to_sheet([
    ["Precious PS Academy — Question import guide"],
    [],
    ["Column", "Rules"],
    ["Subject", "Required. Must match a subject name or code in the platform."],
    ["Class / Department", "Optional. Must match existing names or codes (e.g. SS2, Science)."],
    ["Year", "Optional. 4-digit year, e.g. 2025."],
    ["Exam Type", "Optional. PRACTICE, MOCK, SCHOOL_EXAM, CLASS_TEST, CONTINUOUS_ASSESSMENT, JAMB, WAEC, NECO, CUSTOM."],
    ["Topic / Subtopic", "Optional. New topics are created automatically."],
    ["Question, A–D", "Question and at least options A and B are required. Use $…$ for maths, e.g. $\\frac{1}{2}$."],
    ["Correct Answer", "Required. A, B, C or D."],
    ["Marks", "Optional. Positive number (default 1)."],
    ["Difficulty", "Optional. EASY, MEDIUM or HARD."],
    ["Copyright Status", "ORIGINAL, TEACHER_AUTHORED, LICENSED, AUTHORIZED. Do not import copyrighted exam questions without permission."],
    [],
    ["All imported questions enter PENDING_REVIEW and must be approved before use in examinations."],
  ]);
  guide["!cols"] = [{ wch: 22 }, { wch: 110 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Questions");
  XLSX.utils.book_append_sheet(wb, guide, "Guide");
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}


