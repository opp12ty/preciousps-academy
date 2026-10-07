/**
 * Pre-vocational Studies, Basic 4–Basic 6. Original material written for Precious PS Academy following the
 * themes of the Nigerian Basic Education (NERDC) curriculum.
 */
import { factPack } from "../primary/gen";
import { basic4 } from "./basic4";
import { basic5 } from "./basic5";
import { basic6 } from "./basic6";

const FOOTER = "\\n\\n## Learn by doing\\n- Practise the skill at home or in the school garden with an adult's help.\\n- Handle tools, fire and chemicals with care.\\n- Think: how could this skill earn an honest income one day?";

export const preVocationalStudies = factPack("PVS", "Pre-vocational Studies", { BASIC4: basic4, BASIC5: basic5, BASIC6: basic6 }, FOOTER);
