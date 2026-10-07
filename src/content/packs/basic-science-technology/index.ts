/**
 * Basic Science and Technology, Basic 1–Basic 6. Original material written for Precious PS Academy
 * following the themes of the Nigerian Basic Education (NERDC) curriculum: learning about our
 * environment, living and non-living things, you and energy, and science and development.
 */
import type { ClassCode, SubjectPack } from "../types";
import { factTerms, type FactTopic } from "../primary/gen";
import { basic1 } from "./basic1";
import { basic2 } from "./basic2";
import { basic3 } from "./basic3";
import { basic4 } from "./basic4";
import { basic5 } from "./basic5";
import { basic6 } from "./basic6";

const FOOTER = "\n\n## Think like a scientist\n- Look carefully and ask questions: what, why and how?\n- Try things out safely and tell others what you saw.\n- Wash your hands after practical work and keep your surroundings clean.";
const CLASSES: [ClassCode, FactTopic[]][] = [["BASIC1", basic1], ["BASIC2", basic2], ["BASIC3", basic3], ["BASIC4", basic4], ["BASIC5", basic5], ["BASIC6", basic6]];

export const basicScienceTechnology: SubjectPack = {
  code: "BST",
  name: "Basic Science and Technology",
  version: "2026.1",
  classes: CLASSES.map(([c]) => c),
  entrance: true,
  terms: CLASSES.flatMap(([c, topics]) => factTerms(c, topics, FOOTER)),
};
