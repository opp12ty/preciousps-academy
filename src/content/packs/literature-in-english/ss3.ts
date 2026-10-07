import type { PackTopic, TermPlan } from "../types";
import { ss3core } from "./ss3-core";
import {
  africanDrama,
  africanProse,
  answering,
  dreamAct1,
  dreamAct2,
  dreamAct3,
  dreamAct4,
  dreamAct5,
  dreamOverview,
  nonAfricanDrama,
  nonAfricanProse,
  poemsRevision,
} from "./ss3-nerdc";

const earlier = ss3core.flatMap((t) => t.topics);
const at = (week: number, topic: Omit<PackTopic, "week"> | string): PackTopic => {
  const found = typeof topic === "string" ? earlier.find((t) => t.title === topic) : topic;
  if (!found) throw new Error(`Literature SS3: no topic "${String(topic)}"`);
  return { ...found, week };
};

/**
 * SS3 Literature in English, arranged to the NERDC 2025 scheme, which studies A Midsummer Night's Dream
 * and revises the 2021–2025 prescribed texts. The general-revision weeks carry the skills topics.
 */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      at(2, dreamOverview),
      at(3, dreamAct1),
      at(4, dreamAct2),
      at(5, dreamAct3),
      at(6, dreamAct4),
      at(8, dreamAct5),
      at(9, "Unseen prose appreciation"),
      at(11, "Unseen poetry appreciation"),
      at(12, answering),
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      at(3, africanProse),
      at(4, nonAfricanProse),
      at(5, africanDrama),
      at(6, nonAfricanDrama),
      at(7, poemsRevision),
      at(9, "Advanced literary devices"),
      at(10, "Irony, humour and tone"),
      at(11, "Literary movements and critical terms"),
      at(12, "Classical tragedy and Aristotle's Poetics"),
      at(13, "Themes across African literature"),
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      at(1, "Studying a prescribed play"),
      at(2, "Studying a prescribed novel"),
      at(3, "Studying prescribed poems"),
      ...ss3core[2].topics.map((t, i) => ({ ...t, week: 4 + i })),
    ],
  },
];
