import { describe, expect, it } from "vitest";
import { generateJssMathBank, JSS_SUBJECT_BANK } from "@/server/seed/jss-bank";

describe("JSS seed bank", () => {
  const bank = generateJssMathBank(90);

  it("generates 90 unique Mathematics questions across JSS1–JSS3", () => {
    expect(bank).toHaveLength(90);
    expect(new Set(bank.map((q) => q.stem)).size).toBe(90);
    expect(new Set(bank.map((q) => q.classCode))).toEqual(new Set(["JSS1", "JSS2", "JSS3"]));
  });

  it("never offers the answer (or a duplicate) as a distractor", () => {
    for (const q of [...bank, ...Object.values(JSS_SUBJECT_BANK).flat().map(([, , stem, correct, d1, d2, d3]) => ({ stem, correct, distractors: [d1, d2, d3] }))]) {
      expect(q.distractors, q.stem).toHaveLength(3);
      expect(new Set([q.correct, ...q.distractors]).size, q.stem).toBe(4);
    }
  });

  it("keys arithmetic correctly", () => {
    for (const q of bank.filter((x) => x.topic === "Squares and square roots")) {
      const n = Number(q.stem.match(/sqrt\{(\d+)\}/)![1]);
      expect(Number(q.correct) ** 2).toBe(n);
    }
    for (const q of bank.filter((x) => x.topic === "Angles")) {
      const [a, b] = q.stem.match(/\d+/g)!.map(Number);
      expect(parseInt(q.correct)).toBe(180 - a - b);
    }
  });
});
