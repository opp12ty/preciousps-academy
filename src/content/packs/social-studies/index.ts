import type { SubjectPack } from "../types";
import { jss1 } from "./jss1";
import { jss2 } from "./jss2";
import { jss3 } from "./jss3";

export const socialStudies: SubjectPack = {
  code: "SOS",
  name: "Social Studies",
  version: "1.0",
  classes: ["JSS1", "JSS2", "JSS3"],
  bece: true,
  terms: [...jss1, ...jss2, ...jss3],
};
