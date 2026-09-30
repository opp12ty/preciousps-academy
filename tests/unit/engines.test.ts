import { describe, expect, it } from "vitest";
import { checkPassword } from "@/core/password-policy";
import {
  adjustExpiry,
  computeExpiry,
  DAY_MS,
  effectiveStatus,
  formatCode,
  isPlausibleCode,
  normaliseCode,
  remaining,
} from "@/core/access-engine";
import {
  buildSnapshot,
  gradeFor,
  markResponse,
  normaliseResponse,
  seededRng,
  selectQuestionIds,
  shuffle,
  summarise,
  toPublicQuestion,
  validateGradingScale,
  type BankQuestion,
} from "@/core/exam-engine";
import { can, sanitisePermissionList } from "@/core/permissions";
import { parseStarQuestions, validateExcelRow, questionFingerprint } from "@/core/question-parser";
import { randomBytes } from "node:crypto";

describe("password policy", () => {
  it("accepts a strong password with letters, numbers and a symbol", () => {
    expect(checkPassword("Harmattan2026!x").ok).toBe(true);
  });
  it.each([
    ["short1!", "at least 10"],
    ["abcdefghijk!", "number"],
    ["1234567890!", "letter"],
    ["abcdefgh1234", "symbol"],
  ])("rejects %s", (pw, hint) => {
    const r = checkPassword(pw);
    expect(r.ok).toBe(false);
    expect(r.errors.join(" ")).toMatch(new RegExp(hint, "i"));
  });
  it("cannot be configured below 10 characters", () => {
    expect(checkPassword("Ab1!Ab1!x", { minLength: 6, requireLetter: true, requireNumber: true, requireSymbol: true }).ok).toBe(false);
  });
  it("rejects passwords containing the user's name", () => {
    expect(checkPassword("Adebayo2026!!", undefined, ["Adebayo"]).ok).toBe(false);
  });
});

describe("access engine", () => {
  const now = new Date("2026-01-01T08:00:00Z");
  it("generates well-formed, unique codes", () => {
    const codes = new Set(Array.from({ length: 2000 }, () => formatCode((n) => [...randomBytes(n)])));
    expect(codes.size).toBe(2000);
    for (const c of codes) expect(c).toMatch(/^PPS-[2-9A-HJKMNP-Z]{4}-[2-9A-HJKMNP-Z]{4}-[2-9A-HJKMNP-Z]{4}$/);
  });
  it("normalises user input", () => {
    expect(normaliseCode(" pps-abcd-efgh-jkmn ")).toBe("ABCDEFGHJKMN");
    expect(isPlausibleCode("PPS-ABCD-EFGH-JKMN")).toBe(true);
    expect(isPlausibleCode("PPS-ABCD-EFGH-JKM0")).toBe(false);
    expect(isPlausibleCode("hello")).toBe(false);
  });
  it("30-day access starts at activation", () => {
    expect(computeExpiry(now, 30).getTime() - now.getTime()).toBe(30 * DAY_MS);
  });
  it("computes effective status from server time", () => {
    const p = { status: "ACTIVE" as const, activatedAt: now, currentExpiresAt: computeExpiry(now, 30) };
    expect(effectiveStatus(p, new Date(now.getTime() + 29 * DAY_MS))).toBe("ACTIVE");
    expect(effectiveStatus(p, new Date(now.getTime() + 31 * DAY_MS))).toBe("EXPIRED");
    expect(effectiveStatus({ ...p, status: "SUSPENDED" }, now)).toBe("SUSPENDED");
    expect(effectiveStatus(null, now)).toBe("NONE");
  });
  it("extends from now when already expired, from expiry otherwise", () => {
    const p = { status: "ACTIVE" as const, activatedAt: now, currentExpiresAt: computeExpiry(now, 30) };
    const later = new Date(now.getTime() + 40 * DAY_MS);
    expect(adjustExpiry(p, { kind: "EXTEND", days: 15 }, now).getTime()).toBe(now.getTime() + 45 * DAY_MS);
    expect(adjustExpiry(p, { kind: "EXTEND", days: 15 }, later).getTime()).toBe(later.getTime() + 15 * DAY_MS);
    expect(adjustExpiry(p, { kind: "REDUCE", days: 100 }, now).getTime()).toBe(now.getTime());
    expect(() => adjustExpiry(p, { kind: "SET_EXPIRY", expiresAt: new Date(0) }, now)).toThrow();
  });
  it("reports remaining days/hours/minutes", () => {
    const r = remaining(new Date(now.getTime() + 2 * DAY_MS + 3 * 3_600_000 + 5 * 60_000), now);
    expect([r.days, r.hours, r.minutes]).toEqual([2, 3, 5]);
  });
});

function makeQ(i: number, overrides: Partial<BankQuestion> = {}): BankQuestion {
  return {
    id: `q${i}`,
    version: 1,
    type: "MCQ",
    stem: `Question ${i}`,
    marks: 1,
    options: ["A", "B", "C", "D"].map((l, k) => ({ id: `q${i}o${k}`, label: l, text: `opt ${l}`, isCorrect: k === 1, sortOrder: k })),
    ...overrides,
  };
}

describe("exam engine", () => {
  const pool = Array.from({ length: 500 }, (_, i) => `q${i}`);
  it("selects distinct questions and different students get different sets", () => {
    const a = selectQuestionIds(pool, 40, true, seededRng(1));
    const b = selectQuestionIds(pool, 40, true, seededRng(2));
    expect(new Set(a).size).toBe(40);
    expect(a).not.toEqual(b);
    const overlap = a.filter((x) => b.includes(x)).length;
    expect(overlap).toBeLessThan(20);
  });
  it("refuses to build an exam from a too-small pool", () => {
    expect(() => selectQuestionIds(pool.slice(0, 10), 40, true, seededRng(1))).toThrow(/40/);
  });
  it("shuffle is a permutation", () => {
    const s = shuffle([1, 2, 3, 4, 5, 6], seededRng(7));
    expect(s.slice().sort()).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("keeps the correct answer mapped after option randomisation", () => {
    for (let seed = 1; seed < 50; seed++) {
      const snap = buildSnapshot(makeQ(1), true, seededRng(seed));
      const correctId = "q1o1";
      expect(snap.correctOptionIds).toEqual([correctId]);
      expect(markResponse(snap, { optionId: correctId }).isCorrect).toBe(true);
      const wrong = snap.options.find((o) => o.id !== correctId)!;
      expect(markResponse(snap, { optionId: wrong.id }).isCorrect).toBe(false);
      expect(snap.options.map((o) => o.displayLabel)).toEqual(["A", "B", "C", "D"]);
    }
  });
  it("never leaks answers in the public projection", () => {
    const pub = toPublicQuestion(buildSnapshot(makeQ(2, { explanation: "secret" }), true, seededRng(3)));
    const json = JSON.stringify(pub);
    expect(json).not.toContain("correct");
    expect(json).not.toContain("secret");
    expect(json).not.toContain("isCorrect");
  });
  it("rejects option ids from another question (API manipulation)", () => {
    const snap = buildSnapshot(makeQ(1), false, seededRng(1));
    expect(() => normaliseResponse(snap, { optionId: "q99o1" })).toThrow();
  });
  it("marks numeric, fill-in, multi-select and matching questions", () => {
    const num = buildSnapshot(makeQ(3, { type: "NUMERIC", options: [], answerSpec: { value: 0.75, tolerance: 0.01 } }), false, seededRng(1));
    expect(markResponse(num, { value: "3/4" }).isCorrect).toBe(true);
    expect(markResponse(num, { value: "0.8" }).isCorrect).toBe(false);
    const fb = buildSnapshot(makeQ(4, { type: "FILL_BLANK", options: [], answerSpec: { accepted: ["Abuja"] } }), false, seededRng(1));
    expect(markResponse(fb, { text: "  abuja " }).isCorrect).toBe(true);
    const ms = buildSnapshot(
      makeQ(5, {
        type: "MULTI_SELECT",
        options: ["A", "B", "C"].map((l, k) => ({ id: `m${k}`, label: l, text: l, isCorrect: k !== 1, sortOrder: k })),
      }),
      true,
      seededRng(9),
    );
    expect(markResponse(ms, { optionIds: ["m2", "m0"] }).isCorrect).toBe(true);
    expect(markResponse(ms, { optionIds: ["m0"] }).isCorrect).toBe(false);
    const mt = buildSnapshot(
      makeQ(6, {
        type: "MATCHING",
        options: [
          { id: "x", label: "A", text: "H2O", matchText: "Water", isCorrect: false, sortOrder: 0 },
          { id: "y", label: "B", text: "NaCl", matchText: "Salt", isCorrect: false, sortOrder: 1 },
        ],
      }),
      true,
      seededRng(4),
    );
    expect(markResponse(mt, { pairs: { x: "t0", y: "t1" } }).isCorrect).toBe(true);
    expect(markResponse(mt, { pairs: { x: "t1", y: "t0" } }).isCorrect).toBe(false);
  });
  it("summarises with negative marking but never below zero", () => {
    const snap = buildSnapshot(makeQ(1), false, seededRng(1));
    const items = [
      { marks: 1, outcome: markResponse(snap, { optionId: "q1o1" }, 0.25) },
      { marks: 1, outcome: markResponse(snap, { optionId: "q1o0" }, 0.25) },
      { marks: 1, outcome: markResponse(snap, null, 0.25) },
    ];
    const s = summarise(items);
    expect(s).toMatchObject({ score: 0.75, totalMarks: 3, correct: 1, incorrect: 1, unanswered: 1, percentage: 25 });
    const allWrong = summarise([{ marks: 1, outcome: markResponse(snap, { optionId: "q1o0" }, 1) }]);
    expect(allWrong.score).toBe(0);
  });
  it("applies the default grading bands", () => {
    expect([100, 70, 69.9, 60, 55, 45, 40, 39.99, 0].map((p) => gradeFor(p).grade)).toEqual(["A", "A", "B", "B", "C", "D", "E", "F", "F"]);
    expect(validateGradingScale([{ grade: "A", min: 50 }])).not.toHaveLength(0);
  });
});

describe("RBAC", () => {
  const admin = { userType: "ADMIN" as const, permissions: new Set(["questions.view"]) };
  it("grants only assigned permissions to admins", () => {
    expect(can(admin, "questions.view")).toBe(true);
    expect(can(admin, "questions.review")).toBe(false);
  });
  it("never grants super capabilities to admins, even if smuggled in", () => {
    expect(can({ userType: "ADMIN", permissions: new Set(["super.settings"]) }, "super.settings")).toBe(false);
    expect(sanitisePermissionList(["super.settings", "questions.view", "bogus"])).toEqual(["questions.view"]);
  });
  it("students have no admin permissions", () => {
    expect(can({ userType: "STUDENT", permissions: new Set(["questions.view"]) }, "questions.view")).toBe(false);
  });
  it("super admin holds everything", () => {
    expect(can({ userType: "SUPER_ADMIN", permissions: new Set() }, "super.audit")).toBe(true);
  });
});

describe("★ correct-answer parser", () => {
  it("extracts questions, strips the star and sets the answer", () => {
    const qs = parseStarQuestions(`1. What is the capital of Nigeria?
A. Lagos
★ B. Abuja
C. Kano
D. Ibadan
Explanation: Abuja became the capital in 1991.

2. Solve $2x + 3 = 11$.
A) 3
B) 5
★C) 4
D) 8
Topic: Linear equations
Difficulty: easy`);
    expect(qs).toHaveLength(2);
    expect(qs[0]).toMatchObject({ stem: "What is the capital of Nigeria?", errors: [] });
    expect(qs[0].options.find((o) => o.isCorrect)).toEqual({ label: "B", text: "Abuja", isCorrect: true });
    expect(qs[0].options.every((o) => !o.text.includes("★"))).toBe(true);
    expect(qs[0].explanation).toContain("1991");
    expect(qs[1]).toMatchObject({ topic: "Linear equations", difficulty: "EASY" });
    expect(qs[1].options.find((o) => o.isCorrect)?.label).toBe("C");
  });
  it("rejects questions with more than one ★", () => {
    const [q] = parseStarQuestions("1. Pick\n★A. x\n★B. y\nC. z");
    expect(q.errors.join()).toMatch(/more than one/i);
  });
  it("never guesses when no ★ is present", () => {
    const [q] = parseStarQuestions("1. Pick\nA. x\nB. y");
    expect(q.options.some((o) => o.isCorrect)).toBe(false);
    expect(q.errors.join()).toMatch(/No option is marked/);
  });
  it("handles multi-line stems, wrapped options and Wingdings stars", () => {
    const qs = parseStarQuestions("Q1: Read the passage.\nWhich statement is true?\nA. The first\n   option wraps\n B. Second\n\n2. Next?\nA. a\n★B. b");
    expect(qs).toHaveLength(2);
    expect(qs[0].stem).toBe("Read the passage.\nWhich statement is true?");
    expect(qs[0].options[0].text).toBe("The first option wraps");
    expect(qs[0].options[1].isCorrect).toBe(true);
    expect(qs[1].errors).toEqual([]);
  });
  it("supports un-numbered questions separated by blank lines", () => {
    const qs = parseStarQuestions("What is 2+2?\nA. 3\n★B. 4\n\nWhat is 3+3?\n★A. 6\nB. 7");
    expect(qs).toHaveLength(2);
    expect(qs[1].stem).toBe("What is 3+3?");
  });
});

describe("Excel row validation", () => {
  it("accepts a valid row", () => {
    const r = validateExcelRow(
      { Subject: "Mathematics", Question: "2+2?", A: "3", B: "4", C: "5", D: "6", "Correct Answer": "b", Year: 2025, Difficulty: "easy", "Copyright Status": "original" },
      2,
    );
    expect(r.errors).toEqual([]);
    expect(r.data.options.find((o) => o.isCorrect)?.label).toBe("B");
  });
  it("reports clear errors", () => {
    const r = validateExcelRow({ Subject: "", Question: "", A: "x", "Correct Answer": "E", Year: "20x5", Marks: "-1" }, 3);
    expect(r.errors.length).toBeGreaterThanOrEqual(5);
  });
  it("fingerprints duplicates regardless of option order and punctuation", () => {
    expect(questionFingerprint("What is 2+2?", [{ text: "4" }, { text: "3" }])).toBe(questionFingerprint("what is 22", [{ text: "3" }, { text: "4" }]));
  });
});
