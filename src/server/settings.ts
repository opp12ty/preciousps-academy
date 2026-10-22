import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { DEFAULT_GRADING, validateGradingScale } from "@/core/exam-engine";
import { DEFAULT_PASSWORD_POLICY } from "@/core/password-policy";
import { getDb, type Executor } from "./db";
import { schools, settings } from "./db/schema";
import { AppError } from "./errors";

/**
 * Every configurable platform behaviour lives here with a typed schema and a
 * safe default (§65). Nothing security-relevant is read from the frontend.
 */
export const SETTING_SCHEMAS = {
  general: z.object({
    platformName: z.string().min(2).max(80),
    tagline: z.string().max(120),
    positioning: z.string().max(160),
    poweredBy: z.string().max(160),
    showPoweredBy: z.boolean(),
  }),
  school: z.object({
    name: z.string().min(2).max(120),
    shortName: z.string().max(40),
    email: z.string().max(120),
    phone: z.string().max(40),
    accessCodeContact: z.string().max(40),
    address: z.string().max(300),
    website: z.string().max(200),
    country: z.string().max(60),
    state: z.string().max(60),
  }),
  branding: z.object({
    logoAssetId: z.string().uuid().nullable(),
    logoDarkAssetId: z.string().uuid().nullable(),
    heroAssetId: z.string().uuid().nullable(),
    examBannerAssetId: z.string().uuid().nullable(),
    resultLogoAssetId: z.string().uuid().nullable(),
    certificateLogoAssetId: z.string().uuid().nullable(),
    signatureAssetId: z.string().uuid().nullable(),
    stampAssetId: z.string().uuid().nullable(),
    faviconAssetId: z.string().uuid().nullable(),
    navyColor: z.string().regex(/^(#[0-9a-fA-F]{6})?$/, "Use a hex colour such as #0b1f4b"),
    royalColor: z.string().regex(/^(#[0-9a-fA-F]{6})?$/, "Use a hex colour such as #1d4ed8"),
    goldColor: z.string().regex(/^(#[0-9a-fA-F]{6})?$/, "Use a hex colour such as #c8a02f"),
    signatoryName: z.string().max(80),
    signatoryTitle: z.string().max(80),
  }),
  authentication: z.object({
    maxFailedLogins: z.number().int().min(3).max(20),
    lockMinutes: z.number().int().min(1).max(1440),
    studentSessionHours: z.number().int().min(1).max(720),
    adminSessionHours: z.number().int().min(1).max(72),
    maxStudentSessions: z.number().int().min(1).max(10),
    requireSuperAdmin2fa: z.boolean(),
    loginAlerts: z.boolean(),
    registerPerIpPerHour: z.number().int().min(5).max(100000),
    registerPerEmailPerHour: z.number().int().min(2).max(1000),
  }),
  passwordPolicy: z.object({
    minLength: z.number().int().min(10).max(64),
    requireLetter: z.literal(true),
    requireNumber: z.literal(true),
    requireSymbol: z.literal(true),
  }),
  accessCodes: z.object({
    defaultDays: z.number().int().min(1).max(3650),
    allowMultipleActive: z.boolean(),
    maxBulk: z.number().int().min(1).max(5000),
  }),
  examination: z.object({
    defaultDurationMinutes: z.number().int().min(1).max(600),
    defaultQuestionCount: z.number().int().min(1).max(500),
    autosaveSeconds: z.number().int().min(3).max(120),
    fullscreenGuidance: z.boolean(),
    singleActiveSession: z.boolean(),
    suspiciousThreshold: z.number().int().min(1).max(100),
    /** Lockdown: the exam must stay full screen and in front; each time the student leaves counts. */
    lockdown: z.boolean(),
    /** The attempt is submitted on this screen-leave (2 = one warning, then submitted). */
    maxScreenLeaves: z.number().int().min(1).max(10),
    /** Seconds the student has to come back after leaving before the attempt is submitted. */
    returnCountdownSeconds: z.number().int().min(1).max(10),
    /** Rules pop-up the student must accept before the exam starts (one rule per line). */
    lockdownRulesPopup: z.boolean(),
    lockdownRules: z.string().max(3000),
    /** Student IDs generated at registration: PREFIX/YEAR/0001. */
    studentIdAuto: z.boolean(),
    studentIdPrefix: z.string().trim().min(1).max(12).regex(/^[A-Za-z0-9]+$/, "Student ID prefix: letters and numbers only"),
    studentIdIncludeYear: z.boolean(),
    studentIdDigits: z.number().int().min(3).max(8),
    calculatorEnabled: z.boolean(),
    /** Subject codes whose examinations show the on-screen calculator. */
    calculatorSubjectCodes: z.string().max(600),
    /** Questions in each subject's standard JAMB test; a subject with fewer approved questions uses all it has. */
    jambQuestions: z.number().int().min(1).max(500),
    /** Questions in each subject's standard BECE and Common Entrance papers. */
    beceQuestions: z.number().int().min(1).max(500),
    commonEntranceQuestions: z.number().int().min(1).max(500),
    /** Questions in each termly Precious PS Examination, by level. */
    fodanLowerPrimary: z.number().int().min(1).max(500),
    fodanUpperPrimary: z.number().int().min(1).max(500),
    fodanJunior: z.number().int().min(1).max(500),
    fodanSenior: z.number().int().min(1).max(500),
  }),
  forum: z
    .object({
      enabled: z.boolean(),
      /** Students see only the rooms made for their own class. */
      classBased: z.boolean(),
      openHour: z.number().int().min(0).max(23),
      closeHour: z.number().int().min(1).max(24),
      dailyMinutes: z.number().int().min(5).max(1440),
      maxMessageLength: z.number().int().min(50).max(2000),
      slowModeSeconds: z.number().int().min(0).max(300),
      blockLinks: z.boolean(),
      blockedWords: z.string().max(8000),
      /** Blocked messages in one day that trigger an automatic suspension (0 = never). */
      autoSuspendAfter: z.number().int().min(0).max(100),
      autoSuspendDays: z.number().int().min(1).max(365),
      rules: z.string().max(2000),
    })
    .refine((f) => f.closeHour > f.openHour, { message: "Closing hour must be after opening hour" }),
  grading: z.object({
    scale: z
      .array(z.object({ grade: z.string().min(1).max(4), min: z.number().min(0).max(100), remark: z.string().max(40).optional() }))
      .refine((s) => validateGradingScale(s).length === 0, { message: "Invalid grading scale" }),
  }),
  learningHub: z.object({
    dictionaryEnabled: z.boolean(),
    idiomsEnabled: z.boolean(),
    clichesEnabled: z.boolean(),
    phrasalVerbsEnabled: z.boolean(),
    proverbsEnabled: z.boolean(),
    commonErrorsEnabled: z.boolean(),
    registersEnabled: z.boolean(),
    gamesEnabled: z.boolean(),
    wordScramble: z.boolean(),
    memoryMatch: z.boolean(),
    meaningMatch: z.boolean(),
    mathsSprint: z.boolean(),
    numberPatterns: z.boolean(),
    sudoku: z.boolean(),
    slidingPuzzle: z.boolean(),
    wordSearch: z.boolean(),
    hangman: z.boolean(),
    hanoi: z.boolean(),
    spotError: z.boolean(),
    proverbGame: z.boolean(),
    statesQuiz: z.boolean(),
    typingTest: z.boolean(),
    ticTacToe: z.boolean(),
    colourMemory: z.boolean(),
    roundQuestions: z.number().int().min(5).max(30),
    secondsPerRound: z.number().int().min(30).max(900),
  }),
  premium: z.object({
    enabled: z.boolean(),
    title: z.string().trim().min(2).max(80),
    intro: z.string().max(1000),
    lockedMessage: z.string().max(600),
    disclaimer: z.string().max(600),
  }),
  parents: z.object({
    registrationOpen: z.boolean(),
    showResults: z.boolean(),
    showStudyProgress: z.boolean(),
    welcome: z.string().max(600),
    /** Who must agree before a parent is linked to a student: CHILD, CHILD_AND_SCHOOL or SCHOOL. */
    linkPolicy: z.enum(["CHILD", "CHILD_AND_SCHOOL", "SCHOOL"]),
    /** Students may remove a parent connection themselves. */
    childCanRemove: z.boolean(),
    communityEnabled: z.boolean(),
    communityRules: z.string().max(2000),
  }),
  promotion: z
    .object({
      enabled: z.boolean(),
      /** REQUEST: the student asks and staff approve. AUTO: the student promotes themself. ADMIN: staff only. */
      mode: z.enum(["REQUEST", "AUTO", "ADMIN"]),
      /** Month-day the yearly promotion window opens and closes, in school time (MM-DD). */
      windowStart: z.string().regex(/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, "Use MM-DD, for example 08-01"),
      windowEnd: z.string().regex(/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, "Use MM-DD, for example 10-31"),
    })
    .refine((p) => p.windowEnd > p.windowStart, { message: "The window must close after it opens, within the same year" }),
  knowledgeHub: z.object({
    enabled: z.boolean(),
    /** Default length of one student session and the wait before the next (a code may override both). */
    sessionMinutes: z.number().int().min(5).max(600),
    cooldownMinutes: z.number().int().min(0).max(1440),
    quizQuestions: z.number().int().min(5).max(50),
    dailyQuestions: z.number().int().min(3).max(20),
    showCorrectAnswer: z.boolean(),
    /** Questions drawn at random for each parent General Knowledge Exam. */
    parentExamQuestions: z.number().int().min(5).max(200),
  }),
  learning: z.object({
    masteryThreshold: z.number().min(1).max(100),
    weeklyGoalDays: z.number().int().min(1).max(7),
    enforcePrerequisites: z.boolean(),
    allowRetry: z.boolean(),
    /** The Precious PS learning path: Study Centre, assignments (redo to the pass mark), CA 1, Study Materials, CA 2, then the term exam. */
    learningPath: z.boolean(),
    assignmentPassMark: z.number().min(1).max(100),
    ca1Questions: z.number().int().min(5).max(200),
    ca2Questions: z.number().int().min(5).max(200),
    /** Report card weights (they need not add up to 100; each subject is scaled to the parts it has). */
    weightAssignment: z.number().min(0).max(100),
    weightCa: z.number().min(0).max(100),
    weightExam: z.number().min(0).max(100),
  }),
  /**
   * What students and parents may download or print. OPEN: everyone; LOCKED: nobody (they are told to
   * contact the Admin); CODE: only with an access code that includes Downloads. Reading in the app is never locked.
   */
  downloads: z.object({
    ebooks: z.enum(["OPEN", "LOCKED", "CODE"]),
    ebookFiles: z.enum(["OPEN", "LOCKED", "CODE"]),
    resultSlips: z.enum(["OPEN", "LOCKED", "CODE"]),
    reportCards: z.enum(["OPEN", "LOCKED", "CODE"]),
    contact: z.string().trim().min(3).max(40),
  }),
  results: z.object({
    defaultVisibility: z.enum(["IMMEDIATE", "AFTER_RELEASE", "HIDDEN"]),
    showHistoricalAfterExpiry: z.boolean(),
  }),
  certificates: z.object({
    enabled: z.boolean(),
    numberPrefix: z.string().max(10),
    minimumPercentage: z.number().min(0).max(100),
  }),
  notifications: z.object({
    emailEnabled: z.boolean(),
    fromName: z.string().max(80),
    accessExpiryReminderDays: z.number().int().min(0).max(30),
  }),
  ai: z.object({
    enabled: z.boolean(),
    model: z.string().max(80),
    maxQuestionsPerRequest: z.number().int().min(1).max(50),
  }),
  uploads: z.object({
    maxFileMb: z.number().min(1).max(25),
    maxImageMb: z.number().min(0.1).max(10),
  }),
  localization: z.object({
    defaultLocale: z.enum(["en", "yo", "ha", "ig", "fr"]),
    timezone: z.string().max(60),
    currency: z.string().max(3),
  }),
  academicCalendar: z.object({
    session: z.string().max(20),
    currentTerm: z.string().max(40),
    years: z.array(z.number().int().min(1990).max(2100)),
  }),
  featureFlags: z.object({
    ai: z.boolean(),
    mobile: z.boolean(),
    payment: z.boolean(),
    teacherPortal: z.boolean(),
    parentPortal: z.boolean(),
    advancedAnalytics: z.boolean(),
    certificates: z.boolean(),
    pushNotifications: z.boolean(),
    whatsapp: z.boolean(),
    sms: z.boolean(),
    multiSchool: z.boolean(),
    multilingual: z.boolean(),
    primarySchool: z.boolean(),
  }),
} as const;

export type SettingKey = keyof typeof SETTING_SCHEMAS;
export type SettingValue<K extends SettingKey> = z.infer<(typeof SETTING_SCHEMAS)[K]>;

export const SETTING_DEFAULTS: { [K in SettingKey]: SettingValue<K> } = {
  general: {
    platformName: "Precious PS Academy",
    tagline: "Building Brighter Minds for a Greater Tomorrow",
    positioning: "Smart Assessment. Secure Examination. Better Learning.",
    poweredBy: "Powered by PreciousPS (08169267383)",
    showPoweredBy: true,
  },
  school: {
    name: "Precious PS Academy",
    shortName: "Academy · JSS 1 – SSS 3",
    email: "",
    phone: "08169267383",
    accessCodeContact: "08169267383",
    address: "Nigeria",
    website: "",
    country: "Nigeria",
    state: "",
  },
  branding: {
    logoAssetId: null,
    logoDarkAssetId: null,
    heroAssetId: null,
    examBannerAssetId: null,
    resultLogoAssetId: null,
    certificateLogoAssetId: null,
    signatureAssetId: null,
    stampAssetId: null,
    faviconAssetId: null,
    navyColor: "",
    royalColor: "",
    goldColor: "",
    signatoryName: "",
    signatoryTitle: "Principal",
  },
  authentication: {
    maxFailedLogins: 5,
    lockMinutes: 15,
    studentSessionHours: 72,
    adminSessionHours: 8,
    maxStudentSessions: 3,
    requireSuperAdmin2fa: true,
    loginAlerts: true,
    registerPerIpPerHour: 1000,
    registerPerEmailPerHour: 10,
  },
  passwordPolicy: { ...DEFAULT_PASSWORD_POLICY, requireLetter: true, requireNumber: true, requireSymbol: true },
  accessCodes: { defaultDays: 30, allowMultipleActive: false, maxBulk: 1000 },
  examination: {
    defaultDurationMinutes: 60,
    defaultQuestionCount: 40,
    autosaveSeconds: 10,
    fullscreenGuidance: true,
    singleActiveSession: true,
    suspiciousThreshold: 5,
    lockdown: true,
    maxScreenLeaves: 2,
    returnCountdownSeconds: 10,
    lockdownRulesPopup: true,
    lockdownRules:
      "Stay on this examination screen until you submit.\nDo not open another tab, app, window or website, and do not leave full screen.\nDo not use a phone, notes, books or any other person's help.\nThe first time you leave the screen you will be warned; after that your examination is submitted automatically.\nThe timer keeps running even if you leave, so stay focused on your paper.",
    jambQuestions: 50,
    beceQuestions: 50,
    commonEntranceQuestions: 50,
    fodanLowerPrimary: 40,
    fodanUpperPrimary: 60,
    fodanJunior: 90,
    fodanSenior: 120,
    studentIdAuto: true,
    studentIdPrefix: "PPS",
    studentIdIncludeYear: true,
    studentIdDigits: 4,
    calculatorEnabled: true,
    calculatorSubjectCodes: "MTH, FMT, PHY, CHM, ACC, ECO, GEO, BSC, BTE, AGR, TDR, SPV",
  },
  forum: {
    enabled: true,
    classBased: true,
    openHour: 10,
    closeHour: 22,
    dailyMinutes: 120,
    maxMessageLength: 500,
    slowModeSeconds: 5,
    blockLinks: true,
    blockedWords:
      "sex, sexy, porn, porno, nude, nudes, naked, xxx, boobs, dick, penis, vagina, pussy, fuck, fucking, bitch, bastard, asshole, slut, whore, horny, hook up, hookup, sugar daddy, sugar mummy, runs girl, olosho, ashawo, betting, bet9ja, sportybet, gamble, yahoo boy, expo, runz, weed, cocaine, codeine, tramadol, kill you, beat you, idiot, stupid fool, mumu, werey",
    autoSuspendAfter: 5,
    autoSuspendDays: 3,
    rules:
      "Be respectful. Keep to school work: admissions, examinations, subjects and study tips. Never share a phone number, e-mail, home address, location or social-media contact. No adult content, insults, betting or examination malpractice. Staff can read every message.",
  },
  grading: { scale: DEFAULT_GRADING },
  learningHub: { dictionaryEnabled: true, idiomsEnabled: true, clichesEnabled: true, phrasalVerbsEnabled: true, proverbsEnabled: true, commonErrorsEnabled: true, registersEnabled: true, gamesEnabled: true, wordScramble: true, memoryMatch: true, meaningMatch: true, mathsSprint: true, numberPatterns: true, sudoku: true, slidingPuzzle: true, wordSearch: true, hangman: true, hanoi: true, spotError: true, proverbGame: true, statesQuiz: true, typingTest: true, ticTacToe: true, colourMemory: true, roundQuestions: 10, secondsPerRound: 120 },
  premium: {
    enabled: true,
    title: "International & Advanced",
    intro: "Prepare for international examinations with original practice in the style of IELTS, TOEFL, SAT and international checkpoint tests, plus advanced study materials.",
    lockedMessage: "This area is for Premium students. Ask the school for a Premium access code, then enter it on your dashboard.",
    disclaimer: "Practice questions are original and written for Precious PS Academy. IELTS, TOEFL, SAT and Cambridge Checkpoint are trademarks of their owners, who are not connected with this platform.",
  },
  parents: { registrationOpen: true, showResults: true, showStudyProgress: true, welcome: "Follow your child's learning, results and study timetable. To add a child, send a link request with the child's Student ID; it becomes active once it is confirmed.", linkPolicy: "CHILD", childCanRemove: false, communityEnabled: true, communityRules: "This community is for education and parenting only. Be respectful. Never share a phone number, e-mail, home address, location or social-media contact, and do not invite anyone to talk elsewhere. No flirting, dating, adult content, insults, adverts or money requests. Do not try to contact students here. To reach the school, use Contact School Administration. Moderators can read every message." },
  // Nigerian school year: third term ends late July, the new session begins in mid-September.
  promotion: { enabled: true, mode: "REQUEST", windowStart: "08-01", windowEnd: "10-31" },
  knowledgeHub: { enabled: true, sessionMinutes: 30, cooldownMinutes: 60, quizQuestions: 20, dailyQuestions: 5, showCorrectAnswer: true, parentExamQuestions: 50 },
  learning: { masteryThreshold: 70, weeklyGoalDays: 5, enforcePrerequisites: true, allowRetry: true, learningPath: true, assignmentPassMark: 80, ca1Questions: 20, ca2Questions: 30, weightAssignment: 10, weightCa: 30, weightExam: 60 },
  downloads: { ebooks: "LOCKED", ebookFiles: "LOCKED", resultSlips: "OPEN", reportCards: "OPEN", contact: "08169267383" },
  results: { defaultVisibility: "IMMEDIATE", showHistoricalAfterExpiry: true },
  certificates: { enabled: false, numberPrefix: "PPA", minimumPercentage: 50 },
  notifications: { emailEnabled: false, fromName: "Precious PS Academy", accessExpiryReminderDays: 3 },
  ai: { enabled: false, model: "claude-opus-5-5", maxQuestionsPerRequest: 10 },
  uploads: { maxFileMb: 10, maxImageMb: 3 },
  localization: { defaultLocale: "en", timezone: "Africa/Lagos", currency: "NGN" },
  academicCalendar: {
    session: "2026/2027",
    currentTerm: "First Term",
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
  featureFlags: {
    ai: true,
    mobile: false,
    payment: false,
    teacherPortal: false,
    parentPortal: false,
    advancedAnalytics: true,
    certificates: false,
    pushNotifications: false,
    whatsapp: false,
    sms: false,
    multiSchool: false,
    multilingual: false,
    primarySchool: false,
  },
};

/**
 * Settings are read on almost every page, several at a time. Each value is kept in memory for a few
 * seconds so that a page does not ask the database for the same row again and again. A change made
 * in the backend clears the copy at once on the server that saved it and reaches the others within
 * the time below.
 */
const SETTING_TTL_MS = 15_000;
const settingMemo = new Map<string, { at: number; value: unknown }>();
export function clearSettingCache() {
  settingMemo.clear();
}

export async function getSetting<K extends SettingKey>(schoolId: string, key: K, db: Executor = getDb()): Promise<SettingValue<K>> {
  // Inside a transaction the live row is always read.
  const shared = db === getDb();
  const memoKey = `${schoolId}:${key}`;
  if (shared) {
    const hit = settingMemo.get(memoKey);
    if (hit && Date.now() - hit.at < SETTING_TTL_MS) return hit.value as SettingValue<K>;
  }
  const value = await readSetting(schoolId, key, db);
  if (shared) settingMemo.set(memoKey, { at: Date.now(), value });
  return value;
}

async function readSetting<K extends SettingKey>(schoolId: string, key: K, db: Executor): Promise<SettingValue<K>> {
  const [row] = await db
    .select({ value: settings.value })
    .from(settings)
    .where(and(eq(settings.schoolId, schoolId), eq(settings.key, key)))
    .limit(1);
  const fallback = SETTING_DEFAULTS[key];
  if (!row) return fallback;
  // Merge so newly-added fields get defaults; re-validate so a bad row can't break the app.
  const merged = { ...(fallback as object), ...(row.value as object) };
  const parsed = SETTING_SCHEMAS[key].safeParse(merged);
  return (parsed.success ? parsed.data : fallback) as SettingValue<K>;
}

export async function getSettings<K extends SettingKey>(schoolId: string, keys: K[]): Promise<{ [P in K]: SettingValue<P> }> {
  const out = {} as { [P in K]: SettingValue<P> };
  await Promise.all(keys.map(async (k) => ((out as Record<string, unknown>)[k] = await getSetting(schoolId, k))));
  return out;
}

export async function putSetting<K extends SettingKey>(
  schoolId: string,
  key: K,
  value: unknown,
  updatedBy: string,
  db: Executor = getDb(),
): Promise<SettingValue<K>> {
  const parsed = SETTING_SCHEMAS[key].safeParse(value);
  if (!parsed.success) {
    throw new AppError("VALIDATION", `Invalid ${key} settings: ${parsed.error.issues.map((i) => i.message).join("; ")}`);
  }
  await db
    .insert(settings)
    .values({ schoolId, key, value: parsed.data, updatedBy })
    .onConflictDoUpdate({ target: [settings.schoolId, settings.key], set: { value: parsed.data, updatedBy, updatedAt: new Date() } });
  settingMemo.delete(`${schoolId}:${key}`);
  return parsed.data as SettingValue<K>;
}

let defaultSchoolCache: { id: string; at: number } | null = null;

/** The tenant for public (unauthenticated) pages. Multi-school will resolve by host. */
export async function getDefaultSchoolId(db: Executor = getDb()): Promise<string> {
  if (defaultSchoolCache && Date.now() - defaultSchoolCache.at < 60_000) return defaultSchoolCache.id;
  const [row] = await db.select({ id: schools.id }).from(schools).where(eq(schools.isDefault, true)).limit(1);
  if (!row) throw new AppError("NOT_CONFIGURED", "The platform has not been initialised. Run the database migrations and seed.");
  defaultSchoolCache = { id: row.id, at: Date.now() };
  return row.id;
}

export function clearSchoolCache() {
  defaultSchoolCache = null;
}
