import type { PackTopic, TermPlan } from "../types";
import { binomialPoisson, distributionMoments, inequalities, matrices, partialFractions, rankCorrelation } from "./ss3-nerdc-a";
import { conics, gameTheory, integrationApplied, modelling, parametricConics, staticsForces, staticsMoments, trapezoidalVolume } from "./ss3-nerdc-b";
import { ss3Term1 } from "./ss3-term1";
import { ss3Term2 } from "./ss3-term2";
import { ss3Term3 } from "./ss3-term3";

const earlier = [ss3Term1, ss3Term2, ss3Term3].flatMap((t) => t.topics);
const at = (week: number, topic: Omit<PackTopic, "week"> | string): PackTopic => {
  const found = typeof topic === "string" ? earlier.find((t) => t.title === topic) : topic;
  if (!found) throw new Error(`Further Mathematics SS3: no topic "${String(topic)}"`);
  return { ...found, week };
};

/**
 * SS3 Further Mathematics, arranged to the NERDC 2025 scheme (first and second terms). The third term
 * carries the remaining WASSCE topics and revision.
 */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      at(1, inequalities),
      at(2, matrices),
      at(3, "Linear transformations"),
      at(4, partialFractions),
      at(5, binomialPoisson),
      at(6, "The normal and Poisson distributions"),
      at(7, distributionMoments),
      at(9, "Correlation and regression"),
      at(10, rankCorrelation),
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      at(1, integrationApplied),
      at(2, trapezoidalVolume),
      at(3, conics),
      at(4, parametricConics),
      at(5, staticsForces),
      at(6, staticsMoments),
      at(7, modelling),
      at(8, gameTheory),
      at(9, "Further techniques of integration"),
      at(10, "Work, energy and power"),
      at(11, "Trigonometric equations and the form R cos (x − α)"),
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      at(1, "Linear inequalities and linear programming"),
      at(2, "Vectors in three dimensions and the scalar product"),
      at(3, "Numerical methods: errors and approximations"),
      at(4, "Differential equations"),
      ...ss3Term3.topics.map((t, i) => ({ ...t, week: 5 + i })),
    ],
  },
];
