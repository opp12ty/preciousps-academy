/**
 * The built-in Precious PS Holiday Programme: activities that keep learners busy, learning and helpful at home
 * during the three Nigerian school holidays. Loaded once into each school as ordinary school holiday
 * tasks, so staff can edit, switch off or delete any of them in the backend (Admin → Holiday Programme).
 * Revision and next-term topics are not listed here: they are built from each class's scheme of work.
 */

export const HOLIDAYS = {
  CHRISTMAS: { label: "Christmas holiday", after: 1, next: 2, blurb: "After First Term: about three weeks from mid-December to early January." },
  EASTER: { label: "Easter holiday", after: 2, next: 3, blurb: "After Second Term: about two to three weeks in April." },
  LONG: { label: "Long vacation", after: 3, next: 1, blurb: "After Third Term: about seven weeks from late July to mid-September. The next term is First Term of the next class." },
} as const;
export type HolidayKey = keyof typeof HOLIDAYS;
export const HOLIDAY_KEYS = Object.keys(HOLIDAYS) as HolidayKey[];

export const TASK_KINDS = {
  REVISION: { label: "Revision", emoji: "📘" },
  NEXT_TERM: { label: "Next-term preparation", emoji: "🚀" },
  READING: { label: "Reading", emoji: "📖" },
  PROJECT: { label: "Project", emoji: "🛠️" },
  ACTIVITY: { label: "Educational activity", emoji: "🎯" },
  CHORE: { label: "Life skill / home duty", emoji: "🏠" },
} as const;
export type TaskKind = keyof typeof TASK_KINDS;

type Level = "PRIMARY" | "JUNIOR_SECONDARY" | "SENIOR_SECONDARY" | null;
export interface BuiltInActivity {
  holiday: HolidayKey | "ALL";
  level: Level;
  kind: TaskKind;
  title: string;
  instructions: string;
  link?: string;
}

const P: Level = "PRIMARY";
const J: Level = "JUNIOR_SECONDARY";
const S: Level = "SENIOR_SECONDARY";

export const BUILT_IN_ACTIVITIES: BuiltInActivity[] = [
  /* ---------------------------------------------------- every holiday, everyone */
  { holiday: "ALL", level: null, kind: "REVISION", title: "Daily 30-minute revision", instructions: "Every weekday, spend 30 minutes revising one subject from the term that just ended. Use the Revision list on this page: open a topic, read the lesson again and do its classwork. Tick this when you have done it on at least 10 days.", link: "/student/study" },
  { holiday: "ALL", level: null, kind: "REVISION", title: "Practice test every week", instructions: "Once a week, take a timed Practice test in any subject. Write down every question you got wrong and the correct answer with the reason.", link: "/student/practice" },
  { holiday: "ALL", level: null, kind: "NEXT_TERM", title: "Read ahead: next term's first topics", instructions: "Look at the Next term list on this page. In each main subject, read the lesson for the first topic so the new term feels familiar. Write three questions you want to ask your teacher.", link: "/student/study" },
  { holiday: "ALL", level: null, kind: "READING", title: "Read one storybook or novel", instructions: "Read a whole book of your choice (from home, a library or the Resource Centre). Write a short summary: the main characters, what happened and the lesson you learnt.", link: "/student/resources" },
  { holiday: "ALL", level: null, kind: "ACTIVITY", title: "Learn how something works", instructions: "Read two guides in the Science & Engineering Hub (for example, how a toilet cistern or a car engine works). Explain one of them to a family member using a drawing.", link: "/student/knowledge?hub=science" },
  { holiday: "ALL", level: null, kind: "ACTIVITY", title: "Quiz Arena challenge", instructions: "Play the Quiz Arena on at least five different days and try to beat your own best score.", link: "/student/quiz" },
  { holiday: "ALL", level: null, kind: "ACTIVITY", title: "Holiday diary", instructions: "Keep a short diary: three lines every day about what you did, learnt or enjoyed. Show it to a parent at the end of the holiday." },
  { holiday: "ALL", level: null, kind: "CHORE", title: "Help at home every day", instructions: "Choose a daily duty with your parents: washing plates, sweeping, tidying your room, helping with cooking or caring for younger ones. Do it every day without being reminded." },
  { holiday: "ALL", level: null, kind: "ACTIVITY", title: "Exercise and play", instructions: "Be active for at least 30 minutes a day: skipping, football, dancing, cycling or a walk with family. Drink plenty of water." },

  /* ---------------------------------------------------------------- primary */
  { holiday: "ALL", level: P, kind: "REVISION", title: "Times tables and spelling", instructions: "Practise your times tables (up to 12 × 12) and ten spelling words every day. Ask someone at home to test you on Saturdays.", link: "/student/materials" },
  { holiday: "ALL", level: P, kind: "READING", title: "Read aloud to a parent", instructions: "Read aloud for 15 minutes every day to a parent or older sibling. Learn five new words a week from the Picture Dictionary.", link: "/student/materials" },
  { holiday: "CHRISTMAS", level: P, kind: "PROJECT", title: "Make a family Christmas or New Year card", instructions: "Design a card by hand, write a kind message in English and in a Nigerian language, and give it to a relative or neighbour." },
  { holiday: "EASTER", level: P, kind: "PROJECT", title: "Grow a seed", instructions: "Plant beans or maize in a small container. Water it, measure it every two days and draw a chart of its height. What does it need to grow?" },
  { holiday: "LONG", level: P, kind: "PROJECT", title: "My community map", instructions: "Draw a simple map of your street or area showing your house, a school, a shop, a place of worship and a road. Add a key." },
  { holiday: "LONG", level: P, kind: "ACTIVITY", title: "Money and shopping maths", instructions: "Go shopping with a parent. Before paying, add up the prices yourself and work out the change." },

  /* ------------------------------------------------------- junior secondary */
  { holiday: "ALL", level: J, kind: "REVISION", title: "Mathematics and English every day", instructions: "Do ten Mathematics questions and one English exercise (comprehension, summary or grammar) each day. Mark them and correct mistakes.", link: "/student/practice" },
  { holiday: "ALL", level: J, kind: "ACTIVITY", title: "Learn a practical skill", instructions: "Learn a skill from your Pre-vocational Studies or a trade: simple cooking, sewing on a button, basic computer typing, gardening or repairing a household item safely with an adult." },
  { holiday: "CHRISTMAS", level: J, kind: "PROJECT", title: "Interview an elder about culture", instructions: "Interview a grandparent or elder about how festivals were celebrated when they were young. Write one page and compare it with today." },
  { holiday: "EASTER", level: J, kind: "PROJECT", title: "Home science experiment", instructions: "Do a safe experiment at home, such as making a simple filter for dirty water with sand, gravel and cloth. Write the aim, materials, method, result and conclusion." },
  { holiday: "LONG", level: J, kind: "PROJECT", title: "Mini business plan", instructions: "Plan a small business you could run (for example, selling snacks or making beads). List the materials, the costs, the price and the profit you expect." },
  { holiday: "LONG", level: J, kind: "NEXT_TERM", title: "JSS3 students: start BECE practice", instructions: "If you are going into JSS3, take one BECE practice paper in Exam Preparation each week of the vacation.", link: "/student/exam-prep" },

  /* ------------------------------------------------------- senior secondary */
  { holiday: "ALL", level: S, kind: "REVISION", title: "Past-topic revision timetable", instructions: "Make a revision timetable covering every subject you offer. Follow it for the whole holiday and tick each topic when you can explain it without notes." },
  { holiday: "ALL", level: S, kind: "NEXT_TERM", title: "UTME practice", instructions: "Take a timed JAMB practice test in Use of English and one of your UTME subjects every week.", link: "/student/jamb" },
  { holiday: "ALL", level: S, kind: "ACTIVITY", title: "Career research", instructions: "Research one career you are interested in: the subjects and grades needed, the universities that offer it, and what the job is like. Talk to a professional through Meet an Expert if you can.", link: "/student/experts" },
  { holiday: "CHRISTMAS", level: S, kind: "PROJECT", title: "Essay writing practice", instructions: "Write two essays (one argumentative, one narrative) of about 450 words each. Ask a parent or teacher to read them." },
  { holiday: "EASTER", level: S, kind: "PROJECT", title: "Practical or field work", instructions: "Complete one practical: a Biology specimen drawing, a Chemistry home titration with vinegar and baking soda (with care), a Physics pendulum timing, or a Geography weather record for 10 days." },
  { holiday: "LONG", level: S, kind: "NEXT_TERM", title: "SS3 students: WAEC and NECO practice", instructions: "If you are going into SS3, take one WAEC or NECO practice paper a week in Exam Preparation and review every wrong answer.", link: "/student/exam-prep" },
  { holiday: "LONG", level: S, kind: "ACTIVITY", title: "Learn a trade or digital skill", instructions: "Spend the vacation learning a skill: coding, graphic design, solar installation, fashion design, catering, phone repair or another trade. Keep a record of what you made." },
];

/** The built-in activities for one holiday, with "every holiday" items included. */
export const builtInFor = (holiday: HolidayKey) => BUILT_IN_ACTIVITIES.filter((a) => a.holiday === "ALL" || a.holiday === holiday);

/**
 * The usual Nigerian school calendar, used when the school has not entered term dates in the backend.
 * Month numbers are 1-based; holidays may cross into the next calendar year.
 */
export const DEFAULT_HOLIDAY_DATES: Record<HolidayKey, { start: [number, number]; end: [number, number] }> = {
  CHRISTMAS: { start: [12, 13], end: [1, 6] },
  EASTER: { start: [4, 4], end: [4, 26] },
  LONG: { start: [7, 25], end: [9, 14] },
};
