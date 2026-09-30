/**
 * Authoring format for Precious PS content packs (original content written for Precious PS Academy).
 * `npm run packs:build` turns each SubjectPack into an upload-ready workbook and a printable
 * scheme-of-work PDF in /content-packs; tests/unit/content-packs.test.ts checks every pack.
 */

/** E = easy, M = medium, H = hard. */
export type Diff = "E" | "M" | "H";

/**
 * One objective question: [difficulty, question, correct answer, wrong 1, wrong 2, wrong 3, explanation].
 * The correct answer's position is shuffled when the workbook is built. Maths goes between $…$.
 */
export type Q = [Diff, string, string, string, string, string, string];

export interface PackLesson {
  title: string;
  summary: string;
  minutes?: number;
  /** Markdown: ## headings, - lists, **bold**, $maths$. */
  notes: string;
  /** Worked examples with full solutions. */
  examples: string;
  videoUrl?: string;
}

export interface PackTopic {
  week: number;
  title: string;
  /** Plain text (no $maths$) — also printed in the scheme of work. */
  subtopics: string[];
  /** Plain text, starting with a verb: "Convert …", "Solve …". */
  objectives: string[];
  lesson: PackLesson;
  questions: Q[];
}

export type ClassCode = "JSS1" | "JSS2" | "JSS3" | "SS1" | "SS2" | "SS3";

export interface TermPlan {
  classCode: ClassCode;
  term: 1 | 2 | 3;
  topics: PackTopic[];
}

export interface SubjectPack {
  /** Subject code in the platform (Academics → Subjects). */
  code: string;
  name: string;
  version: string;
  /** Classes the subject is taught in, in order. */
  classes: ClassCode[];
  /** External examinations to build SS3 mock papers for. */
  seniorExams?: ("WAEC" | "NECO" | "JAMB")[];
  /** JSS3 BECE mock paper. */
  bece?: boolean;
  terms: TermPlan[];
}
