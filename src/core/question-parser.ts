/**
 * Star-convention question parser (§44). Converts plain text (extracted from
 * Word / PowerPoint / PDF) into structured questions.
 *
 *   1. What is the capital of Nigeria?
 *   A. Lagos
 *   ★ B. Abuja
 *   C. Kano
 *   D. Ibadan
 *   Explanation: Abuja became the capital in 1991.
 *
 * Rules
 * - ★ immediately before an option marks it correct; the star is stripped.
 * - More than one ★ in a question => rejected (error).
 * - No ★ => error; the parser NEVER guesses the answer.
 */

export interface ParsedOption {
  label: string;
  text: string;
  isCorrect: boolean;
}

export interface ParsedQuestion {
  index: number;
  number?: string;
  stem: string;
  options: ParsedOption[];
  explanation?: string;
  topic?: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  marks?: number;
  year?: number;
  errors: string[];
  warnings: string[];
}

/** ★ (U+2605), ⭐ (U+2B50) and the Wingdings star (U+F0AB) that Word emits for symbol fonts. */
// Built from code points so no editor/encoding round-trip can mangle them.
const STAR_CHARS = String.fromCharCode(0x2605, 0x2b50, 0xf0ab);
const NBSP = String.fromCharCode(0xa0);
export const CORRECT_MARK = String.fromCharCode(0x2605);
const STAR = new RegExp(`[${STAR_CHARS}]`);
const STAR_G = new RegExp(`[${STAR_CHARS}]`, "g");

const QUESTION_START = /^\s*(?:Q(?:uestion)?\s*)?(\d{1,4})\s*[.):\-]\s*(.*)$/i;
const OPTION_LINE = new RegExp(`^\\s*([${STAR_CHARS}]\\s*)?\\(?([A-Ha-h])\\s*[.)\\]:]\\s*(.*)$`);
const META_LINE = /^\s*(explanation|answer explanation|solution|topic|difficulty|marks?|year)\s*[:\-]\s*(.*)$/i;

export function parseStarQuestions(text: string): ParsedQuestion[] {
  const lines = text
    .replace(/\r\n?/g, "\n")
    .split(NBSP)
    .join(" ")
    .replace(/ /g, " ")
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""));

  type Draft = { number?: string; stem: string[]; options: ParsedOption[]; meta: Record<string, string>; lastMeta?: string; gap?: boolean };
  const drafts: Draft[] = [];
  let cur: Draft | null = null;

  const startNew = (number: string | undefined, first: string) => {
    cur = { number, stem: first ? [first] : [], options: [], meta: {} };
    drafts.push(cur);
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (cur) {
        (cur as Draft).lastMeta = undefined;
        (cur as Draft).gap = true;
      }
      continue;
    }

    const opt = OPTION_LINE.exec(line);
    const q = QUESTION_START.exec(line);
    const meta = META_LINE.exec(line);
    const c = cur as Draft | null;
    const hadGap = Boolean(c?.gap);
    if (c) c.gap = false;

    // An option line only counts when we're inside a question and before any metadata.
    if (opt && c && c.stem.length > 0 && !c.lastMeta) {
      const starred = Boolean(opt[1]) || STAR.test(opt[3].slice(0, 2));
      const body = opt[3].replace(STAR_G, "").trim();
      c.options.push({ label: opt[2].toUpperCase(), text: body, isCorrect: starred });
      continue;
    }
    if (q && (!c || c.options.length > 0 || !c.stem.length)) {
      startNew(q[1], q[2].trim());
      continue;
    }
    if (meta && c) {
      const key = meta[1].toLowerCase().startsWith("mark")
        ? "marks"
        : /explanation|solution/.test(meta[1].toLowerCase())
          ? "explanation"
          : meta[1].toLowerCase();
      c.meta[key] = meta[2].trim();
      c.lastMeta = key;
      continue;
    }
    if (c) {
      if (c.options.length > 0 && hadGap && !c.lastMeta) {
        // blank line after options => next un-numbered question
        startNew(undefined, line);
      } else if (c.lastMeta) {
        c.meta[c.lastMeta] = `${c.meta[c.lastMeta]}\n${line}`.trim();
      } else if (c.options.length > 0) {
        // continuation of the last option (wrapped line)
        const last = c.options[c.options.length - 1];
        if (STAR.test(line)) {
          // a star on a wrapped line is ambiguous — treat as a new unlabeled marker
          last.text = `${last.text} ${line.replace(STAR_G, "").trim()}`.trim();
          last.isCorrect = true;
        } else {
          last.text = `${last.text} ${line}`.trim();
        }
      } else {
        c.stem.push(line);
      }
    } else {
      // text before the first numbered question: start an un-numbered question
      startNew(undefined, line);
    }
  }

  return drafts
    .filter((d) => d.stem.length || d.options.length)
    .map((d, i) => finalise(d, i + 1));
}

function finalise(
  d: { number?: string; stem: string[]; options: ParsedOption[]; meta: Record<string, string> },
  index: number,
): ParsedQuestion {
  const errors: string[] = [];
  const warnings: string[] = [];
  let stem = d.stem.join("\n").trim();
  if (STAR.test(stem)) {
    warnings.push("A ★ appeared in the question text and was removed.");
    stem = stem.replace(STAR_G, "").trim();
  }
  if (!stem) errors.push("Question text is empty.");
  if (d.options.length < 2) errors.push("A question needs at least two options.");

  const labels = d.options.map((o) => o.label);
  const dupes = labels.filter((l, i) => labels.indexOf(l) !== i);
  if (dupes.length) errors.push(`Duplicate option label(s): ${Array.from(new Set(dupes)).join(", ")}.`);
  const expected = "ABCDEFGH".slice(0, d.options.length).split("");
  if (!dupes.length && labels.join("") !== expected.join("")) warnings.push("Option letters are out of sequence.");
  if (d.options.some((o) => !o.text)) errors.push("One or more options are empty.");

  const starCount = d.options.filter((o) => o.isCorrect).length;
  if (starCount > 1) errors.push(`More than one option is marked with ★ (${starCount}). Mark exactly one correct answer.`);
  if (starCount === 0) errors.push("No option is marked with ★. The correct answer will not be guessed — mark it and re-upload.");

  const out: ParsedQuestion = {
    index,
    number: d.number,
    stem,
    options: d.options,
    errors,
    warnings,
  };
  if (d.meta.explanation) out.explanation = d.meta.explanation;
  if (d.meta.topic) out.topic = d.meta.topic;
  if (d.meta.difficulty) {
    const v = d.meta.difficulty.toUpperCase();
    if (v === "EASY" || v === "MEDIUM" || v === "HARD") out.difficulty = v;
    else warnings.push(`Unknown difficulty "${d.meta.difficulty}" — defaulting to MEDIUM.`);
  }
  if (d.meta.marks) {
    const m = Number(d.meta.marks);
    if (Number.isFinite(m) && m > 0 && m <= 100) out.marks = m;
    else errors.push(`Invalid marks value "${d.meta.marks}".`);
  }
  if (d.meta.year) {
    const y = Number(d.meta.year);
    if (Number.isInteger(y) && y >= 1990 && y <= 2100) out.year = y;
    else warnings.push(`Ignored invalid year "${d.meta.year}".`);
  }
  return out;
}

/* ------------------------------------------------------------ Excel rows */

export const EXCEL_TEMPLATE_COLUMNS = [
  "Subject",
  "Class",
  "Department",
  "Year",
  "Exam Type",
  "Topic",
  "Subtopic",
  "Question",
  "A",
  "B",
  "C",
  "D",
  "Correct Answer",
  "Explanation",
  "Marks",
  "Difficulty",
  "Source",
  "Copyright Status",
] as const;

export const EXAM_TYPES = ["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM"] as const;
export const COPYRIGHT_STATUSES = ["ORIGINAL", "TEACHER_AUTHORED", "LICENSED", "AUTHORIZED", "AI_GENERATED", "UNKNOWN"] as const;

export interface ExcelRowResult {
  row: number;
  data: {
    subject: string;
    className?: string;
    department?: string;
    year?: number;
    examType?: (typeof EXAM_TYPES)[number];
    topic?: string;
    subtopic?: string;
    stem: string;
    options: ParsedOption[];
    explanation?: string;
    marks: number;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    source?: string;
    copyrightStatus: (typeof COPYRIGHT_STATUSES)[number];
  };
  errors: string[];
  warnings: string[];
}

const str = (v: unknown) => (v === null || v === undefined ? "" : String(v).trim());

export function validateExcelRow(raw: Record<string, unknown>, row: number): ExcelRowResult {
  const get = (k: string) => {
    const hit = Object.keys(raw).find((x) => x.trim().toLowerCase() === k.toLowerCase());
    return hit ? str(raw[hit]) : "";
  };
  const errors: string[] = [];
  const warnings: string[] = [];

  const subject = get("Subject");
  const stem = get("Question").replace(STAR_G, "").trim();
  if (!subject) errors.push("Subject is required.");
  if (!stem) errors.push("Question is required.");

  const letters = ["A", "B", "C", "D"];
  const correctRaw = get("Correct Answer").replace(STAR_G, "").trim().toUpperCase();
  const options: ParsedOption[] = [];
  for (const l of letters) {
    const t = get(l);
    if (t) options.push({ label: l, text: t.replace(STAR_G, "").trim(), isCorrect: false });
  }
  if (options.length < 2) errors.push("At least options A and B are required.");
  if (!correctRaw) errors.push("Correct Answer is required (A, B, C or D).");
  else if (!letters.includes(correctRaw)) errors.push(`Correct Answer "${correctRaw}" must be A, B, C or D.`);
  else {
    const o = options.find((x) => x.label === correctRaw);
    if (!o) errors.push(`Correct Answer is ${correctRaw} but option ${correctRaw} is empty.`);
    else o.isCorrect = true;
  }
  const texts = options.map((o) => o.text.toLowerCase());
  if (new Set(texts).size !== texts.length) warnings.push("Two or more options have identical text.");

  const yearRaw = get("Year");
  let year: number | undefined;
  if (yearRaw) {
    const y = Number(yearRaw);
    if (Number.isInteger(y) && y >= 1990 && y <= 2100) year = y;
    else errors.push(`Year "${yearRaw}" is not a valid year.`);
  }

  const marksRaw = get("Marks");
  let marks = 1;
  if (marksRaw) {
    const m = Number(marksRaw);
    if (Number.isFinite(m) && m > 0 && m <= 100) marks = m;
    else errors.push(`Marks "${marksRaw}" must be a number greater than 0.`);
  }

  const diffRaw = get("Difficulty").toUpperCase();
  let difficulty: "EASY" | "MEDIUM" | "HARD" = "MEDIUM";
  if (diffRaw) {
    if (diffRaw === "EASY" || diffRaw === "MEDIUM" || diffRaw === "HARD") difficulty = diffRaw;
    else errors.push(`Difficulty "${diffRaw}" must be EASY, MEDIUM or HARD.`);
  }

  const examRaw = get("Exam Type").toUpperCase().replace(/[\s-]+/g, "_");
  let examType: ExcelRowResult["data"]["examType"];
  if (examRaw) {
    const alias: Record<string, string> = { SCHOOL: "SCHOOL_EXAM", TEST: "CLASS_TEST", CA: "CONTINUOUS_ASSESSMENT" };
    const v = alias[examRaw] ?? examRaw;
    if ((EXAM_TYPES as readonly string[]).includes(v)) examType = v as typeof examType;
    else errors.push(`Exam Type "${examRaw}" is not recognised.`);
  }

  const crRaw = get("Copyright Status").toUpperCase().replace(/[\s-]+/g, "_");
  let copyrightStatus: ExcelRowResult["data"]["copyrightStatus"] = "UNKNOWN";
  if (crRaw) {
    if ((COPYRIGHT_STATUSES as readonly string[]).includes(crRaw)) copyrightStatus = crRaw as typeof copyrightStatus;
    else errors.push(`Copyright Status "${crRaw}" is not recognised.`);
  } else warnings.push("Copyright Status not provided — recorded as UNKNOWN and requires review.");

  return {
    row,
    data: {
      subject,
      className: get("Class") || undefined,
      department: get("Department") || undefined,
      year,
      examType,
      topic: get("Topic") || undefined,
      subtopic: get("Subtopic") || undefined,
      stem,
      options,
      explanation: get("Explanation") || undefined,
      marks,
      difficulty,
      source: get("Source") || undefined,
      copyrightStatus,
    },
    errors,
    warnings,
  };
}

/** Stable fingerprint for duplicate detection (§54). */
export function questionFingerprint(stem: string, options: { text: string }[]): string {
  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").replace(/[^\p{L}\p{N} ]/gu, "").trim();
  return [norm(stem), ...options.map((o) => norm(o.text)).sort()].join("|");
}
