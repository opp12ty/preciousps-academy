import type { SubjectPack } from "../types";
import { ss1 } from "./ss1";
import { ss2 } from "./ss2";
import { ss3t1 } from "./ss3-t1";
import { ss3t2, ss3t3 } from "./ss3-t2";

/** Food and Nutrition — senior subject; SS3 on the NERDC 2025 scheme. */
export const foodNutrition: SubjectPack = {
  code: "PPS",
  name: "Food and Nutrition",
  version: "1.1",
  classes: ["SS1", "SS2", "SS3"],
  seniorExams: ["WAEC", "NECO"],
  terms: [...ss1, ...ss2, ss3t1, ss3t2, ss3t3],
};
