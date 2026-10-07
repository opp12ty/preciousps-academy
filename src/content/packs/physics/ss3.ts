import type { TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import { ss3t1 } from "./ss3-t1";

const [fields, modern, revision] = ss3core;

/**
 * SS3 Physics. The first term follows the NERDC 2025 scheme, which lists no further terms for SS3;
 * the second and third terms carry the WASSCE/UTME syllabus topics (fields, modern physics, revision).
 */
export const ss3: TermPlan[] = [
  ss3t1,
  { classCode: "SS3", term: 2, topics: [...fields.topics, ...modern.topics.map((t) => ({ ...t, week: t.week + fields.topics.length }))] },
  revision,
];
