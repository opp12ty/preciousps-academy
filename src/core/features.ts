/**
 * The feature registry. A student's one central access code decides which of these are open;
 * there are no separate codes per feature. To add a feature later, add it here and guard the new
 * screens with requireFeature() — nothing else about sign-in or codes changes.
 */
export const FEATURES = {
  CBT: { label: "CBT Examination", group: "Assessment", description: "Practice tests, mock examinations and school examinations." },
  RESULTS: { label: "Results", group: "Assessment", description: "Results, corrections and performance analysis." },
  ASSIGNMENTS: { label: "Assignments", group: "Assessment", description: "Assignments and classwork." },
  STUDY_CENTRE: { label: "Study Centre", group: "Learning", description: "Lessons by subject, term and topic." },
  LEARNING_RESOURCES: { label: "Learning Resources", group: "Learning", description: "Resource Centre, study materials, dictionary, idioms and phrasal verbs." },
  KNOWLEDGE_HUB: { label: "Knowledge Hub", group: "Knowledge", description: "Timed reading sessions on history, culture, science, current affairs and more." },
  QUIZ_ARENA: { label: "Quiz Arena", group: "Games", description: "General-knowledge quizzes matched to the student's class and department." },
  PUZZLE_ARENA: { label: "Puzzle Arena", group: "Games", description: "Word scramble, memory match, maths sprint and number patterns." },
  DAILY_CHALLENGE: { label: "Daily Challenge", group: "Games", description: "A short new challenge every day." },
  CULTURE_CHALLENGE: { label: "Culture Challenge", group: "Games", description: "Nigerian, African and world culture and history." },
  COMMUNITY: { label: "Student Community", group: "Community", description: "The moderated student forum." },
  INTERNATIONAL: { label: "International & Advanced", group: "Premium", description: "IELTS-, TOEFL-, SAT- and checkpoint-style practice." },
} as const;

export type Feature = keyof typeof FEATURES;
export const FEATURE_KEYS = Object.keys(FEATURES) as Feature[];

/** What a code opens when no features were chosen for it (every code made before entitlements existed). */
export const STANDARD_FEATURES: Feature[] = FEATURE_KEYS.filter((f) => f !== "INTERNATIONAL");

/** The features a code grants: its own list when one was set, otherwise the standard set; Premium adds International. */
export function featuresOfCode(code: { features: string[] | null; tier: string }): Feature[] {
  const base = code.features ? FEATURE_KEYS.filter((f) => code.features!.includes(f)) : STANDARD_FEATURES;
  return code.tier === "PREMIUM" && !base.includes("INTERNATIONAL") ? [...base, "INTERNATIONAL"] : base;
}

export const sanitiseFeatures = (keys: unknown): Feature[] | null => (Array.isArray(keys) ? FEATURE_KEYS.filter((f) => keys.includes(f)) : null);

export const FEATURE_DENIED = "This feature is not currently included in your access plan. Please contact your school administrator.";
