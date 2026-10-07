import type { SubjectPack } from "../types";
import { ss3t1 } from "./ss3-t1";
import { ss3t2, ss3t3 } from "./ss3-t2";

/** Livestock Farming — senior trade subject; SS3 on the NERDC 2025 scheme. */
export const livestockFarming: SubjectPack = {
  code: "LVF",
  name: "Livestock Farming",
  version: "1.0",
  classes: ["SS3"],
  seniorExams: ["WAEC", "NECO"],
  terms: [ss3t1, ss3t2, ss3t3],
};
