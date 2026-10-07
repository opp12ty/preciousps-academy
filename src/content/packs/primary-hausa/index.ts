/**
 * Primary Hausa, Basic 1–Basic 6. Original material written for Precious PS Academy following the themes of the
 * Nigerian Basic Education (NERDC) curriculum. Questions are built from the word list of each topic.
 */
import { vocabPack } from "../primary/gen";
import { basic1, basic2 } from "./lower";
import { basic3, basic4 } from "./middle";
import { basic5, basic6 } from "./upper";

export const primaryHausa = vocabPack("HAU", "Primary Hausa", "Hausa", { BASIC1: basic1, BASIC2: basic2, BASIC3: basic3, BASIC4: basic4, BASIC5: basic5, BASIC6: basic6 });
