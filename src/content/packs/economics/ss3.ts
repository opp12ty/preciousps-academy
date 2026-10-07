import type { PackTopic, TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import {
  asianTigers,
  challenges,
  currentPlans,
  developmentLessons,
  globalization,
  growthDevelopment,
  manufacturing,
  petroleum,
  planning,
  regulators,
  services,
  termsOfTrade,
} from "./ss3-nerdc";

const earlier = ss3core.flatMap((t) => t.topics);
const at = (week: number, topic: Omit<PackTopic, "week"> | string): PackTopic => {
  const found = typeof topic === "string" ? earlier.find((t) => t.title === topic) : topic;
  if (!found) throw new Error(`Economics SS3: no topic "${String(topic)}"`);
  return { ...found, week };
};

/**
 * SS3 Economics, arranged to the NERDC 2025 scheme (first and second terms). The third term carries the
 * remaining WASSCE/UTME topics and revision.
 */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      at(1, asianTigers),
      at(2, developmentLessons),
      at(3, "Human capital development"),
      at(4, petroleum),
      at(6, manufacturing),
      at(8, services),
      at(9, regulators),
      at(10, "International trade"),
      at(11, globalization),
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      at(1, "Balance of payments"),
      at(2, termsOfTrade),
      at(3, growthDevelopment),
      at(4, planning),
      at(6, "International economic organisations"),
      at(8, currentPlans),
      at(9, challenges),
      at(10, "Economic reform programmes in Nigeria"),
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      at(1, "Commercial policy and exchange rates"),
      at(2, "Economic integration"),
      at(3, "Consumption, saving, investment and the multiplier"),
      at(4, "Fiscal policy, the budget and public debt"),
      at(5, "Industrialisation in Nigeria"),
      ...ss3core[2].topics.map((t, i) => ({ ...t, week: 6 + i })),
    ],
  },
];
