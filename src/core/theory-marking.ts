/**
 * Marks a short written answer against a model answer from an e-book's Answer Key: 1 (right),
 * 0.5 (partly right) or 0. It looks for the key words and numbers of the model answer, so the
 * learner may use their own words. "Any three: a, b, c, d" answers need three of the listed items.
 * Examples after "e.g." and words in brackets are optional.
 */

const STOP = new Set(
  "a an the of to in on at by for and or but is are was were be been being it its this that these those with from as into than then so such any all some one two three four five six each which who whom what when where why how do does did not no yes can could may might will would shall should must have has had their there they them we us our you your he she his her i me my also very more most other others e g eg etc about up out per".split(" "),
);
const WORD_NUM: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/(\d),(?=\d{3}\b)/g, "$1")
    .replace(/[^a-z0-9.\s]/g, " ")
    .replace(/\.(?!\d)/g, " ");
const stem = (w: string) => (w.length > 4 ? w.replace(/(ing|ed|es|s)$/, "") : w);
const words = (s: string) => norm(s).split(/\s+/).filter((w) => w && !STOP.has(w) && (w.length > 2 || /\d/.test(w)));
const keyWords = (s: string) => [...new Set(words(s).map(stem))];
const numbers = (s: string) => norm(s).match(/\d+(?:\.\d+)?/g) ?? [];

/** The part of a model answer that must be there: without examples and brackets. */
const core = (model: string) => model.replace(/\(.*?\)/g, " ").replace(/\b(e\.?\s?g\.?|for example|such as)\b.*$/i, " ");

function itemFound(item: string, have: Set<string>, haveNums: Set<string>) {
  const ns = numbers(item);
  if (ns.length && ns.every((n) => haveNums.has(n)) && !keyWords(item).some((w) => !/\d/.test(w))) return true;
  const ks = keyWords(item).filter((w) => !/^\d/.test(w));
  if (!ks.length) return false;
  const hit = ks.filter((w) => have.has(w)).length;
  return hit / ks.length >= 0.5;
}

export function markTheory(answer: string, model: string): number | null {
  if (!model.trim()) return null;
  if (!answer.trim()) return 0;
  const have = new Set(words(answer).map(stem));
  const haveNums = new Set(numbers(answer));

  // "Any three: gold, kolanut, ivory, leather, cloth"
  const any = /^\s*any\s+(\d|one|two|three|four|five|six)\b\s*:?\s*(.*)$/i.exec(model);
  if (any) {
    const need = Number(any[1]) || WORD_NUM[any[1].toLowerCase()] || 1;
    const items = core(any[2]).split(/[,;]|\bor\b/).map((x) => x.trim()).filter(Boolean);
    const found = items.filter((it) => itemFound(it, have, haveNums)).length;
    const r = Math.min(found / need, 1);
    return r >= 1 ? 1 : r >= 0.5 ? 0.5 : 0;
  }

  const main = core(model);
  const ns = numbers(main);
  const ks = keyWords(main).filter((w) => !/^\d/.test(w));
  // Mostly numbers (Mathematics, dates): every number must be right.
  if (ns.length && ks.length <= 2) return ns.every((n) => haveNums.has(n)) ? 1 : ns.some((n) => haveNums.has(n)) ? 0.5 : 0;
  if (!ks.length) return answer.trim().toLowerCase() === model.trim().toLowerCase() ? 1 : 0;
  const numOk = ns.every((n) => haveNums.has(n));
  const r = ks.filter((w) => have.has(w)).length / ks.length;
  const [full, half] = ks.length > 8 ? [0.45, 0.2] : ks.length > 3 ? [0.55, 0.3] : [0.6, 0.3];
  if (r >= full && numOk) return 1;
  if (r >= half) return 0.5;
  return 0;
}
