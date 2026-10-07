import type { SubjectPack } from "../types";
import { ss1 } from "./ss1";
import { ss2 } from "./ss2";
import { ss3 } from "./ss3";

export const commerce: SubjectPack = {
  code: "COM",
  name: "Commerce",
  version: "1.0",
  classes: ["SS1", "SS2", "SS3"],
  seniorExams: ["WAEC", "NECO", "JAMB"],
  terms: [...ss1, ...ss2, ...ss3],
};
