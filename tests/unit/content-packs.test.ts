import { describe, expect, it } from "vitest";
import { ALL_PACKS } from "@/content/packs";
import { arrange, examPlans, packWorkbook } from "@/content/packs/build";
import { parsePackWorkbook } from "@/server/services/content-packs";
import { renderBlocks, renderInline } from "@/components/rich-text";

const CLASSES = ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].map((code) => ({ code, name: code }));
const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
const dollarsBalanced = (s: string) => (s.replace(/\\\$/g, "").match(/\$/g)?.length ?? 0) % 2 === 0;

describe.each(ALL_PACKS.map((p) => [p.name, p] as const))("%s content pack", (_, pack) => {
  const topics = pack.terms.flatMap((t) => t.topics.map((topic) => ({ ...topic, classCode: t.classCode, term: t.term })));

  it("covers every class and term with ordered weeks", () => {
    for (const c of pack.classes) {
      const terms = pack.terms.filter((t) => t.classCode === c).map((t) => t.term).sort();
      expect(terms, `${c} terms`).toEqual([1, 2, 3]);
    }
    for (const plan of pack.terms) {
      const weeks = plan.topics.map((t) => t.week);
      expect(plan.topics.length, `${plan.classCode} T${plan.term}`).toBeGreaterThanOrEqual(4);
      expect(weeks, `${plan.classCode} T${plan.term} weeks`).toEqual([...weeks].sort((a, b) => a - b));
      expect(new Set(weeks).size).toBe(weeks.length);
    }
  });

  it("has complete, plain-text scheme entries", () => {
    for (const t of topics) {
      const where = `${t.classCode} T${t.term} ${t.title}`;
      expect(t.subtopics.length, where).toBeGreaterThanOrEqual(2);
      expect(t.objectives.length, where).toBeGreaterThanOrEqual(3);
      for (const s of [t.title, ...t.subtopics, ...t.objectives]) expect(s, where).not.toMatch(/\$/);
    }
    const keys = topics.map((t) => `${t.classCode}|${norm(t.title)}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("has a full lesson note with worked examples for every topic", () => {
    for (const t of topics) {
      const where = `${t.classCode} ${t.title}`;
      expect(t.lesson.summary.length, where).toBeGreaterThan(20);
      expect(t.lesson.notes.length, where).toBeGreaterThanOrEqual(600);
      expect(t.lesson.examples.length, where).toBeGreaterThanOrEqual(200);
      expect(dollarsBalanced(t.lesson.notes), `${where} notes $`).toBe(true);
      expect(dollarsBalanced(t.lesson.examples), `${where} examples $`).toBe(true);
    }
  });

  it("has at least 8 well-formed original questions per topic", () => {
    const stems = new Set<string>();
    for (const t of topics) {
      expect(t.questions.length, `${t.classCode} ${t.title}`).toBeGreaterThanOrEqual(8);
      for (const q of t.questions) {
        const [d, stem, correct, a, b, c, why] = q;
        const where = `${t.classCode} ${t.title}: ${stem}`;
        expect(["E", "M", "H"]).toContain(d);
        expect(stem.length, where).toBeGreaterThan(8);
        expect(why.length, `${where} — explanation too short`).toBeGreaterThanOrEqual(15);
        // Case-sensitive: capitalisation and punctuation questions differ only in case or marks.
        const opts = [correct, a, b, c].map((o) => o.replace(/\s+/g, " ").trim());
        expect(opts.every(Boolean), where).toBe(true);
        expect(new Set(opts).size, `${where} — options must differ`).toBe(4);
        expect(opts.join(" ").toLowerCase(), where).not.toMatch(/all of the above|none of the above/);
        for (const s of [stem, correct, a, b, c, why]) expect(dollarsBalanced(s), `${where} — unbalanced $ in "${s}"`).toBe(true);
        // Generic stems ("Which sentence is correct?") are fine; the same stem with the same answer is a duplicate.
        const key = `${norm(stem)}|${norm(correct)}`;
        expect(stems.has(key), `${where} — duplicate question`).toBe(false);
        stems.add(key);
        const { options, correct: letter } = arrange(q);
        expect(options["ABCD".indexOf(letter)]).toBe(correct);
      }
    }
  });

  it("renders every formula without a maths error", () => {
    for (const t of topics) {
      const blocks = [t.lesson.notes, t.lesson.examples];
      for (const b of blocks) expect(renderBlocks(b), `${t.classCode} ${t.title} lesson`).not.toContain("katex-error");
      for (const q of t.questions) for (const s of q.slice(1)) expect(renderInline(s), `${t.classCode} ${t.title}: ${s}`).not.toContain("katex-error");
    }
  });

  it("builds a workbook the importer accepts without errors", () => {
    const report = parsePackWorkbook(packWorkbook(pack), { subjects: [{ id: "s", code: pack.code, name: pack.name }], classes: CLASSES });
    expect(report.errors).toEqual([]);
    expect(report.counts.topics).toBe(topics.length);
    expect(report.counts.questions).toBe(topics.reduce((n, t) => n + t.questions.length, 0));
    expect(report.counts.exams).toBe(examPlans(pack).length);
  });
});
