import { GK_PART_1 } from "./parent-gk-1";
import { GK_PART_2 } from "./parent-gk-2";
import { GK_PART_3 } from "./parent-gk-3";
import { GK_PART_4 } from "./parent-gk-4";

/**
 * The bank for the parents' General Knowledge Exam: over 400 original questions written for Precious PS
 * CBT ACADEMY. Each exam draws a random set (50 by default, set in the backend). Loaded into the
 * parent quiz bank on deploy; staff can edit, add or remove questions in Knowledge & Parent Learning.
 * Entry: [category, difficulty, question, correct answer, wrong 1, wrong 2, wrong 3, explanation].
 */
export type GK = [category: string, difficulty: "E" | "M" | "H", stem: string, right: string, w1: string, w2: string, w3: string, why: string];

export const PARENT_GK: GK[] = [...GK_PART_1, ...GK_PART_2, ...GK_PART_3, ...GK_PART_4];

/** Categories drawn by the General Knowledge Exam. */
export const GK_CATEGORIES = [...new Set(PARENT_GK.map((q) => q[0]))];
