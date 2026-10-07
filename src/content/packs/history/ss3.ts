import type { PackTopic, TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import {
  civilService1,
  civilService2,
  federalism1,
  federalism2,
  federalism3,
  federalism4,
  foreignPolicyRecord,
  globalAffairs,
  militaryRule1,
  opec,
} from "./ss3-nerdc-a";
import { corruptionBokoHaram, democracy1, democracy2, democracy3, democracy4, electoralReforms, nigerDelta } from "./ss3-nerdc-b";

const earlier = ss3core.flatMap((t) => t.topics);
const at = (week: number, topic: Omit<PackTopic, "week"> | string): PackTopic => {
  const found = typeof topic === "string" ? earlier.find((t) => t.title === topic) : topic;
  if (!found) throw new Error(`History SS3: no topic "${String(topic)}"`);
  return { ...found, week };
};

/**
 * SS3 Nigerian History, arranged to the NERDC 2025 scheme (three terms). Topics outside the scheme that
 * WASSCE still examines follow the scheme's topics in each term.
 */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      at(1, "Nigeria, the United Nations and the Commonwealth"),
      at(3, "Pan-Africanism, the OAU and the African Union"),
      at(4, "The Economic Community of West African States"),
      at(6, opec),
      at(8, "Nigeria's foreign policy since 1960"),
      at(9, foreignPolicyRecord),
      at(10, globalAffairs),
      at(11, "Apartheid in South Africa and its end"),
      at(12, "Decolonisation in Africa"),
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      at(1, federalism1),
      at(2, federalism2),
      at(3, federalism3),
      at(4, federalism4),
      at(6, civilService1),
      at(8, civilService2),
      at(9, militaryRule1),
      at(10, "Military rule in Nigeria: an assessment"),
      at(11, "Politics in the First Republic: an analysis"),
      at(12, "The civil war: international dimensions and reconstruction"),
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      at(1, democracy1),
      at(2, democracy2),
      at(3, democracy3),
      at(4, democracy4),
      at(6, corruptionBokoHaram),
      at(8, nigerDelta),
      at(9, electoralReforms),
      at(10, "Economic development in Nigeria since 1960"),
      ...ss3core[2].topics.map((t, i) => ({ ...t, week: 11 + i })),
    ],
  },
];
