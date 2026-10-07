import type { PackTopic, TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import { ss3t1 } from "./ss3-t1";
import { ss3t2Topics } from "./ss3-t2";

const [organic, materials, revision] = ss3core;
const after = (topics: PackTopic[], start: number) => topics.map((t, i) => ({ ...t, week: start + i + 1 }));

/**
 * SS3 Chemistry, aligned to the NERDC 2025 scheme. The scheme's "summary of major topics" and
 * "intensive revision" weeks are served by the detailed organic, metals and revision topics.
 */
export const ss3: TermPlan[] = [
  ss3t1,
  { classCode: "SS3", term: 2, topics: [...ss3t2Topics, ...after(organic.topics, ss3t2Topics.length)] },
  { classCode: "SS3", term: 3, topics: [...after(materials.topics, 0), ...after(revision.topics, materials.topics.length)] },
];
