/**
 * Examination engine — pure, framework-agnostic logic (§30, §34, §36, §39).
 *
 * The server calls these functions inside a transaction; nothing here trusts
 * client input. Randomness is injected so tests are deterministic while
 * production uses a CSPRNG.
 */

export type QuestionType = "MCQ" | "TRUE_FALSE" | "MULTI_SELECT" | "NUMERIC" | "FILL_BLANK" | "MATCHING";

export interface BankOption {
  id: string;
  label: string;
  text: string;
  matchText?: string | null;
  isCorrect: boolean;
  sortOrder: number;
}

export interface BankQuestion {
  id: string;
  version: number;
  type: QuestionType;
  stem: string;
  imageAssetId?: string | null;
  explanation?: string | null;
  marks: number;
  answerSpec?: AnswerSpec | null;
  topicId?: string | null;
  options: BankOption[];
}

export interface AnswerSpec {
  /** NUMERIC */
  value?: number;
  tolerance?: number;
  /** FILL_BLANK */
  accepted?: string[];
  caseSensitive?: boolean;
}

/** What is stored per attempt question. `correct*` fields never leave the server. */
export interface AttemptQuestionSnapshot {
  questionId: string;
  version: number;
  type: QuestionType;
  stem: string;
  imageAssetId?: string | null;
  explanation?: string | null;
  marks: number;
  topicId?: string | null;
  /** Options in DISPLAY order. `displayLabel` is A, B, C… after shuffling. */
  options: { id: string; displayLabel: string; text: string }[];
  /** MATCHING: right-hand items in display order. */
  matchTargets?: { key: string; text: string }[];
  correctOptionIds: string[];
  /** MATCHING: optionId -> target key */
  correctPairs?: Record<string, string>;
  answerSpec?: AnswerSpec | null;
}

/** Client-safe projection of a snapshot. */
export type PublicQuestion = Omit<AttemptQuestionSnapshot, "correctOptionIds" | "correctPairs" | "answerSpec" | "explanation">;

export type Response =
  | { optionId: string }
  | { optionIds: string[] }
  | { value: string }
  | { text: string }
  | { pairs: Record<string, string> };

export type Rng = () => number;

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Unbiased Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Deterministic PRNG for tests / reproducible seeding (mulberry32). */
export function seededRng(seed: number): Rng {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Pick `count` distinct question ids from the pool. When `randomize` is false
 * the pool order is preserved (e.g. a fixed school paper).
 */
export function selectQuestionIds(poolIds: readonly string[], count: number, randomize: boolean, rng: Rng): string[] {
  const unique = Array.from(new Set(poolIds));
  if (unique.length < count) {
    throw new ExamEngineError(
      "POOL_TOO_SMALL",
      `This examination needs ${count} approved questions but only ${unique.length} are available.`,
    );
  }
  return randomize ? shuffle(unique, rng).slice(0, count) : unique.slice(0, count);
}

export function buildSnapshot(q: BankQuestion, randomizeOptions: boolean, rng: Rng): AttemptQuestionSnapshot {
  const ordered = q.options.slice().sort((a, b) => a.sortOrder - b.sortOrder);
  // True/False keeps its natural order; everything else may be shuffled.
  const display = randomizeOptions && q.type !== "TRUE_FALSE" ? shuffle(ordered, rng) : ordered;

  const snap: AttemptQuestionSnapshot = {
    questionId: q.id,
    version: q.version,
    type: q.type,
    stem: q.stem,
    imageAssetId: q.imageAssetId ?? null,
    explanation: q.explanation ?? null,
    marks: q.marks,
    topicId: q.topicId ?? null,
    options: display.map((o, i) => ({ id: o.id, displayLabel: LETTERS[i], text: o.text })),
    correctOptionIds: ordered.filter((o) => o.isCorrect).map((o) => o.id),
    answerSpec: q.answerSpec ?? null,
  };

  if (q.type === "MATCHING") {
    const targets = ordered.map((o, i) => ({ key: `t${i}`, text: o.matchText ?? "" }));
    const pairs: Record<string, string> = {};
    ordered.forEach((o, i) => (pairs[o.id] = `t${i}`));
    snap.matchTargets = randomizeOptions ? shuffle(targets, rng) : targets;
    snap.correctPairs = pairs;
    snap.correctOptionIds = [];
  }
  return snap;
}

export function toPublicQuestion(s: AttemptQuestionSnapshot): PublicQuestion {
  // Explicit allow-list — never spread the snapshot.
  return {
    questionId: s.questionId,
    version: s.version,
    type: s.type,
    stem: s.stem,
    imageAssetId: s.imageAssetId,
    marks: s.marks,
    topicId: s.topicId,
    options: s.options,
    matchTargets: s.matchTargets,
  };
}

export function isAnswered(response: unknown): boolean {
  if (!response || typeof response !== "object") return false;
  const r = response as Record<string, unknown>;
  if (typeof r.optionId === "string") return r.optionId.length > 0;
  if (Array.isArray(r.optionIds)) return r.optionIds.length > 0;
  if (typeof r.value === "string") return r.value.trim().length > 0;
  if (typeof r.text === "string") return r.text.trim().length > 0;
  if (r.pairs && typeof r.pairs === "object") return Object.keys(r.pairs as object).length > 0;
  return false;
}

/**
 * Validates that a response is structurally legal for the snapshot (option ids
 * belong to this question, etc). Returns a normalised response or throws.
 */
export function normaliseResponse(s: AttemptQuestionSnapshot, raw: unknown): Response | null {
  if (raw === null || raw === undefined) return null;
  if (typeof raw !== "object") throw new ExamEngineError("BAD_RESPONSE", "Invalid answer format.");
  const r = raw as Record<string, unknown>;
  const optionIds = new Set(s.options.map((o) => o.id));
  switch (s.type) {
    case "MCQ":
    case "TRUE_FALSE": {
      if (typeof r.optionId !== "string" || !optionIds.has(r.optionId))
        throw new ExamEngineError("BAD_RESPONSE", "That option does not belong to this question.");
      return { optionId: r.optionId };
    }
    case "MULTI_SELECT": {
      if (!Array.isArray(r.optionIds) || r.optionIds.some((x) => typeof x !== "string" || !optionIds.has(x)))
        throw new ExamEngineError("BAD_RESPONSE", "Invalid selection.");
      return { optionIds: Array.from(new Set(r.optionIds as string[])) };
    }
    case "NUMERIC": {
      if (typeof r.value !== "string" || r.value.length > 40) throw new ExamEngineError("BAD_RESPONSE", "Invalid number.");
      return { value: r.value.trim() };
    }
    case "FILL_BLANK": {
      if (typeof r.text !== "string" || r.text.length > 200) throw new ExamEngineError("BAD_RESPONSE", "Invalid answer.");
      return { text: r.text };
    }
    case "MATCHING": {
      const keys = new Set((s.matchTargets ?? []).map((t) => t.key));
      if (!r.pairs || typeof r.pairs !== "object") throw new ExamEngineError("BAD_RESPONSE", "Invalid matching answer.");
      const pairs: Record<string, string> = {};
      for (const [k, v] of Object.entries(r.pairs as Record<string, unknown>)) {
        if (!optionIds.has(k) || typeof v !== "string" || !keys.has(v))
          throw new ExamEngineError("BAD_RESPONSE", "Invalid matching answer.");
        pairs[k] = v;
      }
      return { pairs };
    }
  }
}

function normText(s: string, caseSensitive?: boolean) {
  const t = s.trim().replace(/\s+/g, " ");
  return caseSensitive ? t : t.toLowerCase();
}

function parseNumber(v: string): number | null {
  const cleaned = v.replace(/,/g, "").trim();
  const frac = /^(-?\d+)\s*\/\s*(\d+)$/.exec(cleaned);
  if (frac) return Number(frac[2]) === 0 ? null : Number(frac[1]) / Number(frac[2]);
  const n = Number(cleaned);
  return Number.isFinite(n) && cleaned !== "" ? n : null;
}

export interface MarkOutcome {
  answered: boolean;
  isCorrect: boolean;
  marksAwarded: number;
}

/** Objective marking for one question (§20, §36). */
export function markResponse(s: AttemptQuestionSnapshot, response: unknown, negativeMarking = 0): MarkOutcome {
  if (!isAnswered(response)) return { answered: false, isCorrect: false, marksAwarded: 0 };
  const r = response as Record<string, unknown>;
  let correct = false;
  switch (s.type) {
    case "MCQ":
    case "TRUE_FALSE":
      correct = s.correctOptionIds.length === 1 && r.optionId === s.correctOptionIds[0];
      break;
    case "MULTI_SELECT": {
      const chosen = new Set((r.optionIds as string[]) ?? []);
      correct = chosen.size === s.correctOptionIds.length && s.correctOptionIds.every((id) => chosen.has(id));
      break;
    }
    case "NUMERIC": {
      const got = parseNumber(String(r.value ?? ""));
      const want = s.answerSpec?.value;
      const tol = Math.abs(s.answerSpec?.tolerance ?? 0);
      correct = got !== null && typeof want === "number" && Math.abs(got - want) <= tol + 1e-9;
      break;
    }
    case "FILL_BLANK": {
      const got = normText(String(r.text ?? ""), s.answerSpec?.caseSensitive);
      correct = (s.answerSpec?.accepted ?? []).some((a) => normText(a, s.answerSpec?.caseSensitive) === got);
      break;
    }
    case "MATCHING": {
      const pairs = (r.pairs as Record<string, string>) ?? {};
      const want = s.correctPairs ?? {};
      const keys = Object.keys(want);
      correct = keys.length > 0 && keys.every((k) => pairs[k] === want[k]);
      break;
    }
  }
  const marksAwarded = correct ? s.marks : -Math.abs(negativeMarking) * s.marks;
  return { answered: true, isCorrect: correct, marksAwarded };
}

export interface GradeBand {
  grade: string;
  min: number;
  remark?: string;
}

export const DEFAULT_GRADING: GradeBand[] = [
  { grade: "A", min: 70, remark: "Excellent" },
  { grade: "B", min: 60, remark: "Very good" },
  { grade: "C", min: 50, remark: "Good" },
  { grade: "D", min: 45, remark: "Fair" },
  { grade: "E", min: 40, remark: "Pass" },
  { grade: "F", min: 0, remark: "Fail" },
];

export function gradeFor(percentage: number, scale: GradeBand[] = DEFAULT_GRADING): GradeBand {
  const sorted = scale.slice().sort((a, b) => b.min - a.min);
  return sorted.find((b) => percentage >= b.min) ?? sorted[sorted.length - 1];
}

export function validateGradingScale(scale: GradeBand[]): string[] {
  const errors: string[] = [];
  if (!scale.length) errors.push("At least one grade band is required.");
  const grades = new Set<string>();
  for (const b of scale) {
    if (!b.grade.trim()) errors.push("Every band needs a grade label.");
    if (grades.has(b.grade)) errors.push(`Duplicate grade "${b.grade}".`);
    grades.add(b.grade);
    if (!(b.min >= 0 && b.min <= 100)) errors.push(`Band ${b.grade}: minimum must be between 0 and 100.`);
  }
  if (!scale.some((b) => b.min === 0)) errors.push("One band must start at 0 so every score receives a grade.");
  const mins = scale.map((b) => b.min);
  if (new Set(mins).size !== mins.length) errors.push("Two bands cannot share the same minimum.");
  return errors;
}

export interface ScoredItem {
  outcome: MarkOutcome;
  marks: number;
}

export interface ScoreSummary {
  score: number;
  totalMarks: number;
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
}

export function summarise(items: ScoredItem[]): ScoreSummary {
  const totalMarks = items.reduce((s, i) => s + i.marks, 0);
  const raw = items.reduce((s, i) => s + i.outcome.marksAwarded, 0);
  const score = Math.max(0, round2(raw)); // negative marking never drives the total below zero
  return {
    score,
    totalMarks: round2(totalMarks),
    percentage: totalMarks > 0 ? round2((score / totalMarks) * 100) : 0,
    correct: items.filter((i) => i.outcome.isCorrect).length,
    incorrect: items.filter((i) => i.outcome.answered && !i.outcome.isCorrect).length,
    unanswered: items.filter((i) => !i.outcome.answered).length,
  };
}

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}

/** Server-side deadline check with a small grace window for in-flight saves. */
export const SUBMIT_GRACE_MS = 15_000;

export function isPastDeadline(deadline: Date, now: Date, graceMs = 0): boolean {
  return now.getTime() > deadline.getTime() + graceMs;
}

export class ExamEngineError extends Error {
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = "ExamEngineError";
  }
}
