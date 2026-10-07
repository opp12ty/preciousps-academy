import type { SubjectPack } from "../types";
import { ss3t1 } from "./ss3-t1";
import { ss3t2, ss3t3 } from "./ss3-t2";

/** Digital Technologies — NERDC 2025 senior subject; SS3 scheme. */
export const digitalTechnologies: SubjectPack = {
  code: "DGT",
  name: "Digital Technologies",
  version: "1.0",
  classes: ["SS3"],
  seniorExams: ["WAEC", "NECO", "JAMB"],
  terms: [ss3t1, ss3t2, ss3t3],
};
