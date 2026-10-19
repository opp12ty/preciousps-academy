/**
 * Arabic Language, Basic 1–SS 3. Original material written for Precious PS Academy following the themes of the
 * Nigerian (NERDC) Arabic curriculum. Primary topics and secondary vocabulary topics build their questions from
 * the word list of each topic; secondary grammar, literature and revision topics carry their own questions.
 */
import type { SubjectPack } from "../types";
import { factTerms, LANGUAGE_FOOTER, vocabPack, vocabTopic, type FactTopic, type VocabSpec } from "../primary/gen";
import { basic1, basic2 } from "./lower";
import { basic3, basic4 } from "./middle";
import { basic5, basic6 } from "./upper";
import { jss1 } from "./jss1";
import { jss2 } from "./jss2";
import { jss3 } from "./jss3";
import { ss1 } from "./ss1";
import { ss2 } from "./ss2";
import { ss3 } from "./ss3";

const primary = vocabPack("ARB", "Arabic Language", "Arabic", { BASIC1: basic1, BASIC2: basic2, BASIC3: basic3, BASIC4: basic4, BASIC5: basic5, BASIC6: basic6 });

// Vocabulary questions already asked in the primary classes are not repeated in secondary topics.
const seen = new Set(primary.terms.flatMap((t) => t.topics.flatMap((tp) => tp.questions.map((q) => q[1].toLowerCase()))));
const build = (items: (FactTopic | VocabSpec)[]) => items.map((x) => ("words" in x ? vocabTopic("Arabic", x, seen) : x));

export const arabic: SubjectPack = {
  ...primary,
  version: "2026.2",
  classes: [...primary.classes, "JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"],
  seniorExams: ["WAEC", "NECO"],
  bece: true,
  terms: [...primary.terms, ...factTerms("JSS1", build(jss1), LANGUAGE_FOOTER), ...factTerms("JSS2", build(jss2), LANGUAGE_FOOTER), ...factTerms("JSS3", build(jss3), LANGUAGE_FOOTER), ...factTerms("SS1", build(ss1), LANGUAGE_FOOTER), ...factTerms("SS2", build(ss2), LANGUAGE_FOOTER), ...factTerms("SS3", build(ss3), LANGUAGE_FOOTER)],
};
