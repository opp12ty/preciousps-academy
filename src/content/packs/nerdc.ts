import type { TermPlan } from "./types";

/**
 * Builds an SS3 year whose first term follows the NERDC 2025 scheme (which lists only a first term for
 * most SS3 subjects). The earlier first- and second-term topics that the scheme does not replace become
 * the second term, and the earlier revision term stays as the third term.
 * `replaced` lists the earlier topic titles now covered by the NERDC first term.
 */
export function nerdcSs3(firstTerm: TermPlan, earlier: TermPlan[], replaced: string[] = []): TermPlan[] {
  const [a, b, revision] = earlier;
  const topics = [...a.topics, ...b.topics].filter((t) => !replaced.includes(t.title)).map((t, i) => ({ ...t, week: i + 1 }));
  return [firstTerm, { classCode: "SS3", term: 2, topics }, revision];
}
