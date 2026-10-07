/**
 * Basic Digital Literacy, Basic 4–Basic 6. Original material written for Precious PS Academy following the
 * themes of the Nigerian Basic Education (NERDC) curriculum.
 */
import { factPack } from "../primary/gen";
import { basic4 } from "./basic4";
import { basic5 } from "./basic5";
import { basic6 } from "./basic6";

const FOOTER = "\\n\\n## Try it on a device\\n- Practise the steps on a computer, tablet or phone with your teacher or parent.\\n- If something goes wrong, stop, read the screen and ask for help.\\n- Use technology safely, kindly and honestly.";

export const basicDigitalLiteracy = factPack("BDL", "Basic Digital Literacy", { BASIC4: basic4, BASIC5: basic5, BASIC6: basic6 }, FOOTER);
