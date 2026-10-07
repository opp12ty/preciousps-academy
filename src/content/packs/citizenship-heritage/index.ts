import type { SubjectPack } from "../types";
import { ss3t1 } from "./ss3-t1";
import { ss3t2 } from "./ss3-t2";
import { ss3t3 } from "./ss3-t3";

/** Citizenship and Heritage Studies — NERDC 2025 senior subject; SS3 scheme. */
export const citizenshipHeritage: SubjectPack = {
  code: "CHS",
  name: "Citizenship and Heritage Studies",
  version: "1.0",
  classes: ["SS3"],
  seniorExams: ["WAEC", "NECO"],
  terms: [ss3t1, ss3t2, ss3t3],
};
