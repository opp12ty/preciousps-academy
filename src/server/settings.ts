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
  }),
  grading: z.object({
    scale: z
      .array(z.object({ grade: z.string().min(1).max(4), min: z.number().min(0).max(100), remark: z.string().max(40).optional() }))
      .refine((s) => validateGradingScale(s).length === 0, { message: "Invalid grading scale" }),
  }),
  learning: z.object({
    masteryThreshold: z.number().min(1).max(100),
    enforcePrerequisites: z.boolean(),
    allowRetry: z.boolean(),
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
  },
  grading: { scale: DEFAULT_GRADING },
  learning: { masteryThreshold: 70, enforcePrerequisites: true, allowRetry: true },
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
  },
};

export async function getSetting<K extends SettingKey>(schoolId: string, key: K, db: Executor = getDb()): Promise<SettingValue<K>> {
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
