import type { PackTopic, TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import { conflict, eGovernment, foreignPolicy2, interdependence, mdgsNepad, peace } from "./ss3-nerdc";

const earlier = ss3core.flatMap((t) => t.topics);
const at = (week: number, topic: Omit<PackTopic, "week"> | string): PackTopic => {
  const found = typeof topic === "string" ? earlier.find((t) => t.title === topic) : topic;
  if (!found) throw new Error(`Government SS3: no topic "${String(topic)}"`);
  return { ...found, week };
};

/**
 * SS3 Government, arranged to the NERDC 2025 scheme. Weeks 8–12 of the second term (left open by the
 * scheme for case studies) carry the constitutional and political topics needed for WASSCE and UTME.
 */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      at(1, "Military rule in Nigeria"),
      at(3, conflict),
      at(4, peace),
      at(5, interdependence),
      at(6, "Nigeria's foreign policy"),
      at(8, foreignPolicy2),
      at(9, "The United Nations Organisation"),
      at(10, "The Commonwealth and the African Union"),
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      at(1, "ECOWAS and OPEC"),
      at(5, mdgsNepad),
      at(6, eGovernment),
      at(8, "The 1963 Republican Constitution and the First Republic"),
      at(9, "The 1979, 1989 and 1999 constitutions"),
      at(10, "Federalism in Nigeria"),
      at(11, "Political parties and elections in Nigeria"),
      at(12, "Major political crises in Nigeria"),
    ],
  },
  ss3core[2],
];
