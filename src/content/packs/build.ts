/**
 * Turns an authored SubjectPack into the upload workbook (and the rows used for the printable
 * scheme of work). Pure: no database, no server code — used by scripts/build-content-packs.mts
 * and by the pack tests.
 */
import * as XLSX from "xlsx";
import { PACK_COLUMNS, PACK_SHEETS } from "@/core/content-pack-format";
import type { ClassCode, PackTopic, Q, SubjectPack, TermPlan } from "./types";

export const TERM_NAMES = ["First Term", "Second Term", "Third Term"] as const;
const DIFF = { E: "EASY", M: "MEDIUM", H: "HARD" } as const;
const YEAR = 2026;

/** Stable 32-bit hash so the correct option lands in the same place on every build. */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Places the correct answer among the distractors (deterministically) and returns the letter. */
export function arrange(q: Q): { options: string[]; correct: "A" | "B" | "C" | "D" } {
  const [, stem, correct, d1, d2, d3] = q;
  const pos = hash(stem) % 4;
  const wrong = [d1, d2, d3];
  const options = [...wrong.slice(0, pos), correct, ...wrong.slice(pos)];
  return { options, correct: (["A", "B", "C", "D"] as const)[pos] };
}

const ordered = (pack: SubjectPack) =>
  [...pack.terms].sort((a, b) => pack.classes.indexOf(a.classCode) - pack.classes.indexOf(b.classCode) || a.term - b.term);

const topicsOf = (pack: SubjectPack, classes: ClassCode[], terms: number[]) =>
  pack.terms.filter((t) => classes.includes(t.classCode) && terms.includes(t.term)).flatMap((t) => t.topics);

const questionCount = (topics: PackTopic[]) => topics.reduce((n, t) => n + t.questions.length, 0);
const minutesFor = (q: number, perQ: number) => Math.max(15, Math.round((q * perQ) / 5) * 5);

export interface ExamPlan {
  title: string;
  classCode: ClassCode;
  examType: string;
  classesCovered: ClassCode[];
  termsCovered: number[];
  questions: number;
  minutes: number;
  passMark: number;
  maxAttempts: number;
  year: number | "";
  description: string;
}

/** Standard examinations: a termly exam per class and term, a practice test per class, and mocks. */
export function examPlans(pack: SubjectPack): ExamPlan[] {
  const out: ExamPlan[] = [];
  for (const plan of ordered(pack)) {
    const n = Math.min(40, questionCount(plan.topics));
    if (!n) continue;
    out.push({
      title: `${plan.classCode} ${pack.name} — ${TERM_NAMES[plan.term - 1]} Examination`,
      classCode: plan.classCode,
      examType: "SCHOOL_EXAM",
      classesCovered: [plan.classCode],
      termsCovered: [plan.term],
      questions: n,
      minutes: minutesFor(n, 1.25),
      passMark: 50,
      maxAttempts: 1,
      year: "",
      description: `${TERM_NAMES[plan.term - 1]} examination covering: ${plan.topics.map((t) => t.title).join("; ")}.`,
    });
  }
  for (const c of pack.classes) {
    const n = Math.min(20, questionCount(topicsOf(pack, [c], [1, 2, 3])));
    if (!n) continue;
    out.push({ title: `${c} ${pack.name} — Practice Test`, classCode: c, examType: "PRACTICE", classesCovered: [c], termsCovered: [1, 2, 3], questions: n, minutes: minutesFor(n, 1.25), passMark: 50, maxAttempts: 10, year: "", description: `Timed practice across all ${c} topics. A fresh random set every attempt.` });
  }
  const junior = pack.classes.filter((c) => c.startsWith("JSS"));
  if (pack.bece && junior.includes("JSS3")) {
    const n = Math.min(50, questionCount(topicsOf(pack, junior, [1, 2, 3])));
    out.push({ title: `BECE ${pack.name} Mock Examination`, classCode: "JSS3", examType: "BECE", classesCovered: junior, termsCovered: [1, 2, 3], questions: n, minutes: minutesFor(n, 1.2), passMark: 50, maxAttempts: 3, year: YEAR, description: `BECE-style mock covering the JSS1–JSS3 ${pack.name} curriculum.` });
  }
  const senior = pack.classes.filter((c) => c.startsWith("SS"));
  if (senior.includes("SS3")) {
    const all = questionCount(topicsOf(pack, senior, [1, 2, 3]));
    for (const body of pack.seniorExams ?? []) {
      const n = Math.min(body === "JAMB" ? 40 : 50, all);
      out.push({
        title: body === "JAMB" ? `JAMB UTME ${pack.name} Practice` : `${body} SSCE ${pack.name} Mock Examination`,
        classCode: "SS3",
        examType: body,
        classesCovered: senior,
        termsCovered: [1, 2, 3],
        questions: n,
        minutes: body === "JAMB" ? minutesFor(n, 0.75) : minutesFor(n, 1.8),
        passMark: 50,
        maxAttempts: body === "JAMB" ? 5 : 3,
        year: YEAR,
        description: body === "JAMB" ? `UTME-style timed practice across the SS1–SS3 ${pack.name} curriculum.` : `${body}-style objective mock covering SS1–SS3 ${pack.name}.`,
      });
    }
  }
  return out;
}

export interface AssignmentPlan {
  title: string;
  classCode: ClassCode;
  topics: string[];
  questions: number;
}

/** Two homework assignments per class and term (first and second half of the term). */
export function assignmentPlans(pack: SubjectPack): AssignmentPlan[] {
  const out: AssignmentPlan[] = [];
  for (const plan of ordered(pack)) {
    const half = Math.ceil(plan.topics.length / 2);
    [plan.topics.slice(0, half), plan.topics.slice(half)].forEach((part, i) => {
      if (!part.length) return;
      out.push({ title: `${plan.classCode} ${pack.name} — ${TERM_NAMES[plan.term - 1]} Homework ${i + 1}`, classCode: plan.classCode, topics: part.map((t) => t.title), questions: Math.min(10, questionCount(part)) });
    });
  }
  return out;
}

export function packStats(pack: SubjectPack) {
  const topics = pack.terms.flatMap((t) => t.topics);
  return {
    topics: topics.length,
    subtopics: topics.reduce((n, t) => n + t.subtopics.length, 0),
    lessons: topics.length,
    questions: questionCount(topics),
    exams: examPlans(pack).length,
    assignments: assignmentPlans(pack).length,
  };
}

/** Builds the upload workbook for a pack. */
export function packWorkbook(pack: SubjectPack): XLSX.WorkBook {
  const wb = XLSX.utils.book_new();
  const st = packStats(pack);
  const sheet = (rows: unknown[][], widths: number[]) => {
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws["!cols"] = widths.map((wch) => ({ wch }));
    ws["!freeze"] = { xSplit: 0, ySplit: 1 };
    return ws;
  };

  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [`Precious PS Academy — ${pack.name} Content Pack (version ${pack.version})`],
        [""],
        [`Classes: ${pack.classes.join(", ")}`],
        [`Contents: ${st.topics} topics, ${st.subtopics} subtopics, ${st.lessons} lesson notes, ${st.questions} questions, ${st.exams} examinations, ${st.assignments} assignments.`],
        [""],
        ["How to use"],
        ["1. Sign in to the backend and open Academics → Content Packs."],
        ["2. Upload this workbook and click Upload & check. Every row is validated; nothing is created yet."],
        ["3. Click Import this pack. Questions go to Pending Review; lessons, exams and assignments are created as drafts."],
        ["4. Review the questions in the Question Bank, then click Approve on the pack page."],
        ["5. Click Publish lessons, exams & assignments."],
        [""],
        ["You may edit any sheet before uploading (for example to add your own questions or change exam settings)."],
        ["Originality: every topic description, lesson note and question in this pack was written for Precious PS Academy."],
        ["No past BECE, WAEC, NECO or JAMB questions are reproduced. Topics follow the standard Nigerian curriculum structure."],
        ["Please have a subject teacher review questions before approving them, as required by the platform's review policy."],
      ],
      [140],
    ),
    "Read Me",
  );

  XLSX.utils.book_append_sheet(wb, sheet([[...PACK_COLUMNS.pack], ["Subject", pack.code], ["Name", pack.name], ["Version", pack.version]], [16, 40]), PACK_SHEETS.pack);

  const plans = ordered(pack);
  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [...PACK_COLUMNS.scheme],
        ...plans.flatMap((p) => p.topics.map((t) => [p.classCode, String(p.term), String(t.week), t.title, t.subtopics.join("\n"), t.objectives.join("\n"), "Y"])),
      ],
      [8, 6, 6, 38, 45, 60, 10],
    ),
    PACK_SHEETS.scheme,
  );

  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [...PACK_COLUMNS.lessons],
        ...plans.flatMap((p) => p.topics.map((t) => [p.classCode, t.title, t.lesson.title, t.lesson.summary, String(t.lesson.minutes ?? 30), t.lesson.notes, t.lesson.examples, t.lesson.videoUrl ?? ""])),
      ],
      [8, 34, 34, 50, 8, 80, 80, 20],
    ),
    PACK_SHEETS.lessons,
  );

  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [...PACK_COLUMNS.questions],
        ...plans.flatMap((p) =>
          p.topics.flatMap((t) =>
            t.questions.map((q) => {
              const { options, correct } = arrange(q);
              return [pack.code, p.classCode, "", "", "PRACTICE", t.title, "", q[1], ...options, correct, q[6], "1", DIFF[q[0]], "Precious PS Academy original", "ORIGINAL"];
            }),
          ),
        ),
      ],
      [8, 8, 8, 6, 10, 30, 10, 70, 28, 28, 28, 28, 8, 60, 6, 10, 26, 12],
    ),
    PACK_SHEETS.questions,
  );

  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [...PACK_COLUMNS.exams],
        ...examPlans(pack).map((e) => [e.title, e.classCode, e.examType, e.classesCovered.join(", "), e.termsCovered.length === 3 ? "All" : e.termsCovered.join(", "), String(e.questions), String(e.minutes), String(e.passMark), String(e.maxAttempts), String(e.year), e.description]),
      ],
      [48, 8, 12, 22, 12, 10, 8, 10, 12, 6, 70],
    ),
    PACK_SHEETS.exams,
  );

  XLSX.utils.book_append_sheet(
    wb,
    sheet(
      [
        [...PACK_COLUMNS.assignments],
        ...assignmentPlans(pack).map((a) => [a.title, a.classCode, "ASSIGNMENT", a.topics.join("; "), String(a.questions), "2", "50", "Answer every question carefully. You have two attempts, and explanations are shown after you submit."]),
      ],
      [52, 8, 12, 70, 10, 9, 10, 60],
    ),
    PACK_SHEETS.assignments,
  );
  return wb;
}

export function packFileBase(pack: SubjectPack) {
  return `PreciousPS_${pack.name.replace(/[^A-Za-z0-9]+/g, "_")}`;
}

export type { TermPlan };
