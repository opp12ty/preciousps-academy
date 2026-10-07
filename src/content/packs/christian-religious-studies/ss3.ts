import type { TermPlan } from "../types";
import { nerdcSs3 } from "../nerdc";
import { ss3t1 } from "./ss3-t1";
import { ss3Term1 } from "./ss3-term1";
import { ss3Term2 } from "./ss3-term2";
import { ss3Term3 } from "./ss3-term3";

/** SS3 Christian Religious Studies: NERDC 2025 first term, then themes from Acts and the Epistles, and WAEC revision. */
export const ss3: TermPlan[] = nerdcSs3(ss3t1, [ss3Term1, ss3Term2, ss3Term3]);
