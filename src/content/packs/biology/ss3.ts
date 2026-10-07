import type { TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import { ss3t1 } from "./ss3-t1";

const [heredity, applied, revision] = ss3core;

/**
 * SS3 Biology. The first term follows the NERDC 2025 scheme, which lists no further terms for SS3;
 * the second and third terms carry the supporting WASSCE/UTME topics and revision.
 */
export const ss3: TermPlan[] = [
  ss3t1,
  { classCode: "SS3", term: 2, topics: [...heredity.topics, ...applied.topics.map((t) => ({ ...t, week: t.week + heredity.topics.length }))] },
  revision,
];
