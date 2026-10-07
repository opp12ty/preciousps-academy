import type { TermPlan } from "../types";
import { nerdcSs3 } from "../nerdc";
import { ss3core } from "./ss3-core";
import { ss3t1 } from "./ss3-t1";

/** SS3 Financial Accounting: NERDC 2025 first term, then the supporting WASSCE/UTME topics and revision. */
export const ss3: TermPlan[] = nerdcSs3(ss3t1, ss3core, [
  "Consignment accounts",
  "Contract accounts",
]);
