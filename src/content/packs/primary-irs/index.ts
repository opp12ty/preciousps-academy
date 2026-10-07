/**
 * Primary Islamic Religious Studies, Basic 1–Basic 6. Original material written for Precious PS Academy following the
 * themes of the Nigerian Basic Education (NERDC) curriculum.
 */
import { factPack } from "../primary/gen";
import { basic1 } from "./basic1";
import { basic2 } from "./basic2";
import { basic3 } from "./basic3";
import { basic4 } from "./basic4";
import { basic5 } from "./basic5";
import { basic6 } from "./basic6";

const FOOTER = "\\n\\n## Reflect and practise\\n- What does this lesson teach me about Allah and His Messenger (SAW)?\\n- How should it change the way I treat my parents, teachers and friends?\\n- What will I begin to practise from today, insha Allah?";

export const primaryIrs = factPack("IRS", "Primary Islamic Religious Studies", { BASIC1: basic1, BASIC2: basic2, BASIC3: basic3, BASIC4: basic4, BASIC5: basic5, BASIC6: basic6 }, FOOTER);
