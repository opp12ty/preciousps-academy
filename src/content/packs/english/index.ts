import type { SubjectPack } from "../types";
import { jss1 } from "./jss1";
import { jss2 } from "./jss2";
import { jss3 } from "./jss3";
import { ss1 } from "./ss1";
import { ss2 } from "./ss2";
import { ss3 } from "./ss3";

export const english: SubjectPack = {
  code: "ENG",
  name: "English Language",
  version: "1.0",
  classes: ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"],
  bece: true,
  seniorExams: ["WAEC", "NECO", "JAMB"],
  terms: [...jss1, ...jss2, ...jss3, ...ss1, ...ss2, ...ss3],
};
