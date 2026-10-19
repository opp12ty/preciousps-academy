import { ERRORS_PART_1 } from "./common-errors-1";
import { ERRORS_PART_2 } from "./common-errors-2";
import { ERRORS_PART_3 } from "./common-errors-3";

/**
 * Common errors in English for Study Materials → Common Errors: what people often write or say, the
 * correct form and why. Written for Precious PS Academy; staff can edit or remove any entry.
 * Entry: [error, correct form, explanation, group].
 */
export type CommonError = [wrong: string, right: string, why: string, group: string];

export const COMMON_ERRORS: CommonError[] = [...ERRORS_PART_1, ...ERRORS_PART_2, ...ERRORS_PART_3];
