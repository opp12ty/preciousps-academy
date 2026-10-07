import { and, asc, desc, eq, ilike, inArray, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { STARTER_ARTICLES, STARTER_QUESTIONS } from "@/content/hub";
import { SECTIONS } from "@/core/sections";
import { getDb } from "../db";
import { departments, hubArticles, hubArticleVersions, hubQuestions, hubSessions, quizAttempts, students } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { requireFeature, requireParentAccess } from "./access";
import { sectionCond, studentScope } from "./scope";

/**
 * Knowledge Hub (students), Parent Learning Hub and Psychology Library (parents): one content
 * engine with a review workflow and version history, plus the quiz games that draw on hub questions.
 */

export const HUB_SECTIONS = {
  KNOWLEDGE: { audience: "STUDENT", label: "Knowledge Hub" },
  LEARNING: { audience: "PARENT", label: "Parent Learning Hub" },
  PSYCHOLOGY: { audience: "PARENT", label: "Psychology Library" },
  TEMPERAMENT: { audience: "PARENT", label: "Temperament" },
} as const;
export type HubSection = keyof typeof HUB_SECTIONS;
export const ARTICLE_STATUSES = ["DRAFT", "REVIEW", "APPROVED", "PUBLISHED", "ARCHIVED"] as const;
export const STREAMS = ["SCIENCE", "COMMERCIAL", "ARTS"] as const;
const STREAM_OF_DEPT: Record<string, (typeof STREAMS)[number]> = { SCI: "SCIENCE", COM: "COMMERCIAL", ART: "ARTS" };

const blank = z.literal("").transform(() => null);
const articleSchema = z.object({
  section: z.enum(["KNOWLEDGE", "LEARNING", "PSYCHOLOGY", "TEMPERAMENT"]),
  category: z.string().trim().min(2).max(60),
  title: z.string().trim().min(3).max(160),
  summary: z.string().trim().min(10).max(600),
  body: z.string().trim().min(50).max(40_000),
  keyPoints: z.string().trim().max(2000).nullish(),
  activity: z.string().trim().max(1000).nullish(),
  sources: z.string().trim().max(2000).nullish(),
  level: z.enum(SECTIONS).nullish().or(blank),
  stream: z.enum(STREAMS).nullish().or(blank),
  imageAssetId: z.string().uuid().nullish().or(blank),
  status: z.enum(ARTICLE_STATUSES).default("DRAFT"),
});

export async function upsertArticle(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = articleSchema.parse(raw);
  const db = getDb();
  const audience = HUB_SECTIONS[d.section].audience;
  const values = { ...d, audience, keyPoints: d.keyPoints || null, activity: d.activity || null, sources: d.sources || null, level: d.level ?? null, stream: d.stream ?? null, imageAssetId: d.imageAssetId ?? null };
  try {
    if (!id) {
      const [row] = await db.insert(hubArticles).values({ ...values, schoolId: actor.schoolId, authorId: actor.id, ...(d.status === "PUBLISHED" ? { publishedAt: new Date(), reviewerId: actor.id } : {}) }).returning();
      await audit({ actor, action: "hub.article_created", entityType: "hub_article", entityId: row.id, summary: `${row.title} (${row.status})` }, ctx);
      return row;
    }
    const [cur] = await db.select().from(hubArticles).where(and(eq(hubArticles.id, id), eq(hubArticles.schoolId, actor.schoolId)));
    if (!cur) throw new AppError("NOT_FOUND", "Article not found.");
    const changed = cur.title !== d.title || cur.summary !== d.summary || cur.body !== d.body;
    // The text as it stood is kept, so an earlier version can be restored.
    if (changed) await db.insert(hubArticleVersions).values({ articleId: cur.id, version: cur.version, title: cur.title, summary: cur.summary, body: cur.body, editorId: actor.id });
    const reviewed = d.status === "APPROVED" || d.status === "PUBLISHED";
    const [row] = await db
      .update(hubArticles)
      .set({ ...values, version: cur.version + (changed ? 1 : 0), updatedAt: new Date(), ...(reviewed ? { reviewerId: actor.id } : {}), ...(d.status === "PUBLISHED" && !cur.publishedAt ? { publishedAt: new Date() } : {}) })
      .where(eq(hubArticles.id, id))
      .returning();
    await audit({ actor, action: d.status === "PUBLISHED" && cur.status !== "PUBLISHED" ? "hub.article_published" : "hub.article_updated", entityType: "hub_article", entityId: row.id, summary: `${row.title} (${cur.status} → ${row.status})` }, ctx);
    return row;
  } catch (e) {
    const c = e as { code?: string; cause?: { code?: string } };
    if (c.code === "23505" || c.cause?.code === "23505") throw new AppError("DUPLICATE", "An article with this title already exists.", { title: ["This title is already used."] });
    throw e;
  }
}

export async function setArticleStatus(actor: Actor, id: string, status: (typeof ARTICLE_STATUSES)[number], ctx: ReqCtx) {
  const [row] = await getDb()
    .update(hubArticles)
    .set({ status, updatedAt: new Date(), ...(status === "PUBLISHED" ? { publishedAt: new Date(), reviewerId: actor.id } : status === "APPROVED" ? { reviewerId: actor.id } : {}) })
    .where(and(eq(hubArticles.id, id), eq(hubArticles.schoolId, actor.schoolId)))
    .returning();
  if (!row) throw new AppError("NOT_FOUND", "Article not found.");
  await audit({ actor, action: `hub.article_${status.toLowerCase()}`, entityType: "hub_article", entityId: id, summary: row.title }, ctx);
}

export async function deleteArticle(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(hubArticles).where(and(eq(hubArticles.id, id), eq(hubArticles.schoolId, actor.schoolId))).returning({ title: hubArticles.title });
  if (!row) throw new AppError("NOT_FOUND", "Article not found.");
  await audit({ actor, action: "hub.article_deleted", entityType: "hub_article", entityId: id, summary: row.title }, ctx);
}

export async function restoreArticleVersion(actor: Actor, articleId: string, version: number, ctx: ReqCtx) {
  const db = getDb();
  const [cur] = await db.select().from(hubArticles).where(and(eq(hubArticles.id, articleId), eq(hubArticles.schoolId, actor.schoolId)));
  const [old] = await db.select().from(hubArticleVersions).where(and(eq(hubArticleVersions.articleId, articleId), eq(hubArticleVersions.version, version)));
  if (!cur || !old) throw new AppError("NOT_FOUND", "Version not found.");
  await db.insert(hubArticleVersions).values({ articleId, version: cur.version, title: cur.title, summary: cur.summary, body: cur.body, editorId: actor.id });
  // A restored text goes back to review before students or parents see it again.
  await db.update(hubArticles).set({ title: old.title, summary: old.summary, body: old.body, version: cur.version + 1, status: "REVIEW", updatedAt: new Date() }).where(eq(hubArticles.id, articleId));
  await audit({ actor, action: "hub.article_restored", entityType: "hub_article", entityId: articleId, summary: `${cur.title}: version ${version} restored` }, ctx);
}

export const listArticleVersions = (articleId: string) => getDb().select().from(hubArticleVersions).where(eq(hubArticleVersions.articleId, articleId)).orderBy(desc(hubArticleVersions.version)).limit(30);

export async function listArticlesAdmin(schoolId: string, f: { section?: string; status?: string; search?: string }) {
  const conds = [eq(hubArticles.schoolId, schoolId)];
  if (f.section && f.section in HUB_SECTIONS) conds.push(eq(hubArticles.section, f.section));
  if (f.status) conds.push(eq(hubArticles.status, f.status));
  if (f.search?.trim()) conds.push(or(ilike(hubArticles.title, `%${f.search.trim()}%`), ilike(hubArticles.category, `%${f.search.trim()}%`))!);
  return getDb().select().from(hubArticles).where(and(...conds)).orderBy(desc(hubArticles.updatedAt)).limit(500);
}

export async function getArticleAdmin(schoolId: string, id: string) {
  const [row] = await getDb().select().from(hubArticles).where(and(eq(hubArticles.id, id), eq(hubArticles.schoolId, schoolId)));
  return row ?? null;
}

/* -------------------------------------------------- student sessions (server-timed) */

export async function studentStream(userId: string) {
  const [row] = await getDb().select({ code: departments.code }).from(students).leftJoin(departments, eq(departments.id, students.departmentId)).where(eq(students.userId, userId));
  return row?.code ? (STREAM_OF_DEPT[row.code] ?? null) : null;
}

export interface HubState {
  enabled: boolean;
  unlimited: boolean;
  active: boolean;
  /** Seconds left in the current session; null when access is unlimited. */
  secondsLeft: number | null;
  /** Seconds until a new session may begin; 0 when one may start now. */
  cooldownSeconds: number;
  sessionMinutes: number;
  cooldownMinutes: number;
}

/** Where the student stands with the Knowledge Hub right now. Throws if the access code does not include it. */
export async function hubState(actor: Actor, now = new Date()): Promise<HubState> {
  const access = await requireFeature(actor.id, "KNOWLEDGE_HUB");
  const cfg = await getSetting(actor.schoolId, "knowledgeHub");
  const sessionMinutes = access.hub.sessionMinutes ?? cfg.sessionMinutes;
  const cooldownMinutes = access.hub.cooldownMinutes ?? cfg.cooldownMinutes;
  const base = { enabled: cfg.enabled, sessionMinutes, cooldownMinutes };
  if (access.hub.unlimited) return { ...base, unlimited: true, active: cfg.enabled, secondsLeft: null, cooldownSeconds: 0 };
  const [last] = await getDb().select().from(hubSessions).where(eq(hubSessions.userId, actor.id)).orderBy(desc(hubSessions.startedAt)).limit(1);
  const left = last ? Math.floor((last.endsAt.getTime() - now.getTime()) / 1000) : 0;
  const wait = last ? Math.ceil((last.nextAt.getTime() - now.getTime()) / 1000) : 0;
  const active = cfg.enabled && left > 0;
  return { ...base, unlimited: false, active, secondsLeft: active ? left : 0, cooldownSeconds: active ? 0 : Math.max(0, wait) };
}

/** Begins a timed session. Refused during the cooldown, whatever the browser sends. */
export async function startHubSession(actor: Actor, ctx: ReqCtx, now = new Date()) {
  const st = await hubState(actor, now);
  if (!st.enabled) throw new AppError("FORBIDDEN", "The Knowledge Hub is switched off at the moment.");
  if (st.unlimited || st.active) return st;
  if (st.cooldownSeconds > 0) throw new AppError("FORBIDDEN", `Your Knowledge Hub session has ended. You can start another in ${Math.ceil(st.cooldownSeconds / 60)} minute(s).`);
  const endsAt = new Date(now.getTime() + st.sessionMinutes * 60_000);
  await getDb().insert(hubSessions).values({ userId: actor.id, startedAt: now, endsAt, nextAt: new Date(endsAt.getTime() + st.cooldownMinutes * 60_000) });
  void ctx;
  return hubState(actor, now);
}

async function requireOpenSession(actor: Actor, now = new Date()) {
  const st = await hubState(actor, now);
  if (!st.enabled) throw new AppError("FORBIDDEN", "The Knowledge Hub is switched off at the moment.");
  if (!st.active) throw new AppError("FORBIDDEN", st.cooldownSeconds > 0 ? `Your session has ended. The Knowledge Hub opens for you again in ${Math.ceil(st.cooldownSeconds / 60)} minute(s).` : "Start a Knowledge Hub session first.");
  return st;
}

const forStudent = async (actor: Actor) => {
  const scope = await studentScope(actor.id);
  const stream = await studentStream(actor.id);
  return [eq(hubArticles.schoolId, actor.schoolId), eq(hubArticles.audience, "STUDENT"), eq(hubArticles.status, "PUBLISHED"), sectionCond(hubArticles.level, scope.level), stream ? or(isNull(hubArticles.stream), eq(hubArticles.stream, stream))! : isNull(hubArticles.stream)];
};

/** Articles for this student's level and department. Needs an open session. */
export async function listStudentArticles(actor: Actor, f: { category?: string; search?: string } = {}, now = new Date()) {
  await requireOpenSession(actor, now);
  const conds = await forStudent(actor);
  if (f.category) conds.push(eq(hubArticles.category, f.category));
  if (f.search?.trim()) conds.push(or(ilike(hubArticles.title, `%${f.search.trim()}%`), ilike(hubArticles.summary, `%${f.search.trim()}%`))!);
  return getDb().select({ id: hubArticles.id, title: hubArticles.title, summary: hubArticles.summary, category: hubArticles.category }).from(hubArticles).where(and(...conds)).orderBy(asc(hubArticles.category), asc(hubArticles.title)).limit(300);
}

export async function getStudentArticle(actor: Actor, id: string, now = new Date()) {
  await requireOpenSession(actor, now);
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new AppError("NOT_FOUND", "Article not found.");
  const [row] = await getDb().select().from(hubArticles).where(and(eq(hubArticles.id, id), ...(await forStudent(actor))));
  if (!row) throw new AppError("NOT_FOUND", "Article not found.");
  return row;
}

/* ------------------------------------------------------------------ parents */

const parentOnly = async (actor: Actor) => {
  if (actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "This area is for parents and guardians.");
  await requireParentAccess(actor.id);
};

/** Parent learning has no time limit, but like the rest of the parent portal it needs a running parent access code. */
export async function listParentArticles(parent: Actor, f: { section?: string; category?: string; search?: string } = {}) {
  await parentOnly(parent);
  const conds = [eq(hubArticles.schoolId, parent.schoolId), eq(hubArticles.audience, "PARENT"), eq(hubArticles.status, "PUBLISHED")];
  if (f.section && f.section in HUB_SECTIONS) conds.push(eq(hubArticles.section, f.section));
  if (f.category) conds.push(eq(hubArticles.category, f.category));
  if (f.search?.trim()) conds.push(or(ilike(hubArticles.title, `%${f.search.trim()}%`), ilike(hubArticles.summary, `%${f.search.trim()}%`))!);
  return getDb().select({ id: hubArticles.id, title: hubArticles.title, summary: hubArticles.summary, category: hubArticles.category, section: hubArticles.section, keyPoints: hubArticles.keyPoints }).from(hubArticles).where(and(...conds)).orderBy(asc(hubArticles.section), asc(hubArticles.title)).limit(300);
}

export async function getParentArticle(parent: Actor, id: string) {
  await parentOnly(parent);
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new AppError("NOT_FOUND", "Article not found.");
  const [row] = await getDb().select().from(hubArticles).where(and(eq(hubArticles.id, id), eq(hubArticles.schoolId, parent.schoolId), eq(hubArticles.audience, "PARENT"), eq(hubArticles.status, "PUBLISHED")));
  if (!row) throw new AppError("NOT_FOUND", "Article not found.");
  return row;
}

/** Tip of the day and recommended article: the same for every parent on a given day. */
export async function parentDaily(parent: Actor, day: string) {
  const all = await listParentArticles(parent);
  if (!all.length) return null;
  const n = [...day].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const article = all[n % all.length];
  const tips = all.flatMap((a) => (a.keyPoints ?? "").split("\n").map((t) => t.trim()).filter(Boolean));
  return { article, tip: tips.length ? tips[n % tips.length] : null };
}

/* --------------------------------------------------------------------- quiz */

export const QUIZ_MODES = {
  QUIZ: { audience: "STUDENT", feature: "QUIZ_ARENA", label: "Quiz Arena", categories: null, daily: false },
  DAILY: { audience: "STUDENT", feature: "DAILY_CHALLENGE", label: "Daily Challenge", categories: null, daily: true },
  CULTURE: { audience: "STUDENT", feature: "CULTURE_CHALLENGE", label: "Culture Challenge", categories: ["Culture", "History", "Geography"], daily: false },
  PARENTING: { audience: "PARENT", feature: null, label: "Parenting Scenario Challenge", categories: ["Parenting", "Child Development", "Temperament"], daily: false },
  PARENT_KNOWLEDGE: { audience: "PARENT", feature: null, label: "Knowledge Challenge", categories: ["Nigeria", "Africa", "World", "Science and Technology"], daily: false },
} as const;
export type QuizMode = keyof typeof QUIZ_MODES;

const questionSchema = z.object({
  audience: z.enum(["STUDENT", "PARENT"]),
  category: z.string().trim().min(2).max(60),
  level: z.enum(SECTIONS).nullish().or(blank),
  stream: z.enum(STREAMS).nullish().or(blank),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  stem: z.string().trim().min(8).max(600),
  options: z.array(z.string().trim().min(1).max(300)).length(4),
  answer: z.number().int().min(0).max(3),
  explanation: z.string().trim().max(600).nullish(),
  status: z.enum(["PUBLISHED", "DRAFT"]).default("PUBLISHED"),
});

export async function upsertHubQuestion(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = questionSchema.parse(raw);
  if (new Set(d.options.map((o) => o.toLowerCase())).size !== 4) throw new AppError("VALIDATION", "The four options must be different.");
  const values = { ...d, level: d.level ?? null, stream: d.stream ?? null, explanation: d.explanation || null };
  const db = getDb();
  try {
    const [row] = id ? await db.update(hubQuestions).set(values).where(and(eq(hubQuestions.id, id), eq(hubQuestions.schoolId, actor.schoolId))).returning() : await db.insert(hubQuestions).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning();
    if (!row) throw new AppError("NOT_FOUND", "Question not found.");
    await audit({ actor, action: id ? "hub.question_updated" : "hub.question_created", entityType: "hub_question", entityId: row.id, summary: row.stem.slice(0, 80) }, ctx);
    return row;
  } catch (e) {
    const c = e as { code?: string; cause?: { code?: string } };
    if (c.code === "23505" || c.cause?.code === "23505") throw new AppError("DUPLICATE", "This question is already in the bank.");
    throw e;
  }
}

export async function deleteHubQuestion(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(hubQuestions).where(and(eq(hubQuestions.id, id), eq(hubQuestions.schoolId, actor.schoolId))).returning({ id: hubQuestions.id });
  if (!row) throw new AppError("NOT_FOUND", "Question not found.");
  await audit({ actor, action: "hub.question_deleted", entityType: "hub_question", entityId: id }, ctx);
}

export async function listHubQuestionsAdmin(schoolId: string, f: { audience?: string; category?: string; search?: string }) {
  const conds = [eq(hubQuestions.schoolId, schoolId)];
  if (f.audience === "STUDENT" || f.audience === "PARENT") conds.push(eq(hubQuestions.audience, f.audience));
  if (f.category) conds.push(eq(hubQuestions.category, f.category));
  if (f.search?.trim()) conds.push(ilike(hubQuestions.stem, `%${f.search.trim()}%`));
  return getDb().select().from(hubQuestions).where(and(...conds)).orderBy(asc(hubQuestions.category), desc(hubQuestions.createdAt)).limit(500);
}

/** Deterministic shuffle so a daily challenge is the same however often it is opened. */
function seeded<T>(xs: T[], seed: string) {
  let a = [...seed].reduce((h, ch) => Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0, 2166136261) || 1;
  const next = () => ((a = (Math.imul(a, 1664525) + 1013904223) >>> 0) / 4294967296);
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const publicQuestion = (q: typeof hubQuestions.$inferSelect) => ({ stem: q.stem, options: q.options, category: q.category, difficulty: q.difficulty });

function summarise(qs: (typeof hubQuestions.$inferSelect)[], answers: (number | null)[]) {
  const by = new Map<string, { right: number; total: number }>();
  let score = 0;
  qs.forEach((q, i) => {
    const c = by.get(q.category) ?? { right: 0, total: 0 };
    c.total++;
    if (answers[i] === q.answer) {
      c.right++;
      score++;
    }
    by.set(q.category, c);
  });
  const percent = qs.length ? Math.round((score / qs.length) * 100) : 0;
  const cats = [...by.entries()].map(([category, v]) => ({ category, ...v, percent: Math.round((v.right / v.total) * 100) }));
  return { score, total: qs.length, percent, band: percent >= 80 ? "Excellent" : percent >= 60 ? "Good" : percent >= 40 ? "Fair" : "Keep practising", strengths: cats.filter((c) => c.percent >= 70).map((c) => c.category), weak: cats.filter((c) => c.percent < 50).map((c) => c.category), categories: cats };
}

async function loadAttempt(actor: Actor, attemptId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(attemptId)) throw new AppError("NOT_FOUND", "Quiz not found.");
  const db = getDb();
  const [a] = await db.select().from(quizAttempts).where(and(eq(quizAttempts.id, attemptId), eq(quizAttempts.userId, actor.id)));
  if (!a) throw new AppError("NOT_FOUND", "Quiz not found.");
  const rows = a.questionIds.length ? await db.select().from(hubQuestions).where(inArray(hubQuestions.id, a.questionIds)) : [];
  const qs = a.questionIds.map((id) => rows.find((r) => r.id === id)).filter((q): q is typeof hubQuestions.$inferSelect => Boolean(q));
  return { a, qs };
}

/**
 * Starts (or reopens) a quiz. Questions are chosen for the player's audience, class level and
 * department; the correct answers stay on the server and each answer is marked there.
 */
export async function startQuiz(actor: Actor, mode: QuizMode, ctx: ReqCtx, day: string) {
  const m = QUIZ_MODES[mode];
  if (!m) throw new AppError("VALIDATION", "Unknown game.");
  if ((m.audience === "PARENT") !== (actor.userType === "PARENT") || (m.audience === "STUDENT" && actor.userType !== "STUDENT")) throw new AppError("FORBIDDEN", "This game is not available to your account.");
  if (m.feature) await requireFeature(actor.id, m.feature);
  if (actor.userType === "PARENT") await requireParentAccess(actor.id);
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "knowledgeHub");
  if (m.daily) {
    const [done] = await db.select().from(quizAttempts).where(and(eq(quizAttempts.userId, actor.id), eq(quizAttempts.mode, mode), eq(quizAttempts.day, day)));
    if (done) return quizView(actor, done.id);
  } else {
    const [open] = await db.select().from(quizAttempts).where(and(eq(quizAttempts.userId, actor.id), eq(quizAttempts.mode, mode), isNull(quizAttempts.finishedAt))).orderBy(desc(quizAttempts.startedAt)).limit(1);
    if (open) return quizView(actor, open.id);
  }
  const conds = [eq(hubQuestions.schoolId, actor.schoolId), eq(hubQuestions.audience, m.audience), eq(hubQuestions.status, "PUBLISHED")];
  if (m.audience === "STUDENT") {
    const scope = await studentScope(actor.id);
    const stream = await studentStream(actor.id);
    conds.push(sectionCond(hubQuestions.level, scope.level), stream ? or(isNull(hubQuestions.stream), eq(hubQuestions.stream, stream))! : isNull(hubQuestions.stream));
  }
  if (m.categories) conds.push(inArray(hubQuestions.category, [...m.categories]));
  const pool = await db.select({ id: hubQuestions.id }).from(hubQuestions).where(and(...conds)).orderBy(asc(hubQuestions.id));
  if (pool.length < 3) throw new AppError("VALIDATION", "There are not enough questions for this game yet. Please check back later.");
  const want = m.daily ? cfg.dailyQuestions : cfg.quizQuestions;
  const ids = seeded(pool.map((p) => p.id), m.daily ? `${day}|${mode}` : `${actor.id}|${Date.now()}`).slice(0, Math.min(want, pool.length));
  const [row] = await db.insert(quizAttempts).values({ schoolId: actor.schoolId, userId: actor.id, mode, questionIds: ids, answers: ids.map(() => null), day: m.daily ? day : null }).returning({ id: quizAttempts.id });
  void ctx;
  return quizView(actor, row.id);
}

/** The quiz as the player may see it: answered questions show their marking, the rest show no answer. */
export async function quizView(actor: Actor, attemptId: string) {
  const { a, qs } = await loadAttempt(actor, attemptId);
  const { showCorrectAnswer } = await getSetting(actor.schoolId, "knowledgeHub");
  return {
    attemptId: a.id,
    mode: a.mode as QuizMode,
    label: QUIZ_MODES[a.mode as QuizMode]?.label ?? "Quiz",
    finished: Boolean(a.finishedAt),
    questions: qs.map((q, i) => ({ ...publicQuestion(q), chosen: a.answers[i], ...(a.answers[i] !== null ? { correct: a.answers[i] === q.answer, correctIndex: showCorrectAnswer ? q.answer : null, explanation: q.explanation } : {}) })),
    summary: a.finishedAt ? summarise(qs, a.answers) : null,
  };
}

export async function answerQuiz(actor: Actor, attemptId: string, index: number, choice: number) {
  const { a, qs } = await loadAttempt(actor, attemptId);
  if (a.finishedAt) throw new AppError("CONFLICT", "This quiz is finished.");
  if (!Number.isInteger(index) || index < 0 || index >= qs.length || !Number.isInteger(choice) || choice < 0 || choice > 3) throw new AppError("VALIDATION", "Choose one of the options.");
  if (a.answers[index] !== null) throw new AppError("CONFLICT", "You have already answered this question.");
  const answers = [...a.answers];
  answers[index] = choice;
  const done = answers.every((x) => x !== null);
  const sum = summarise(qs, answers);
  await getDb().update(quizAttempts).set({ answers, score: sum.score, ...(done ? { finishedAt: new Date() } : {}) }).where(eq(quizAttempts.id, a.id));
  return quizView(actor, a.id);
}

export async function recentQuizAttempts(userId: string) {
  return getDb().select({ id: quizAttempts.id, mode: quizAttempts.mode, score: quizAttempts.score, total: sql<number>`jsonb_array_length(${quizAttempts.questionIds})`, finishedAt: quizAttempts.finishedAt }).from(quizAttempts).where(and(eq(quizAttempts.userId, userId), sql`${quizAttempts.finishedAt} IS NOT NULL`)).orderBy(desc(quizAttempts.finishedAt)).limit(10);
}

/* --------------------------------------------------------------------- seed */

/** First deploy only: an empty hub receives the starter articles and questions. */
export async function seedHubIfEmpty(schoolId: string) {
  const db = getDb();
  const out = { articles: 0, questions: 0 };
  const [{ n: a }] = await db.select({ n: sql<number>`count(*)::int` }).from(hubArticles).where(eq(hubArticles.schoolId, schoolId));
  if (!a) out.articles = (await db.insert(hubArticles).values(STARTER_ARTICLES.map((x) => ({ ...x, schoolId, status: "PUBLISHED", publishedAt: new Date(), sources: "Written for Precious PS Academy.", level: x.level ?? null, stream: x.stream ?? null, activity: x.activity ?? null }))).onConflictDoNothing().returning({ id: hubArticles.id })).length;
  const [{ n: q }] = await db.select({ n: sql<number>`count(*)::int` }).from(hubQuestions).where(eq(hubQuestions.schoolId, schoolId));
  if (!q) {
    const rows = STARTER_QUESTIONS.map(([audience, category, level, stream, difficulty, stem, right, w1, w2, w3, explanation], i) => {
      const pos = i % 4; // spread the correct option over A–D
      const wrong = [w1, w2, w3];
      return { schoolId, audience, category, level: level || null, stream: stream || null, difficulty, stem, options: [...wrong.slice(0, pos), right, ...wrong.slice(pos)], answer: pos, explanation };
    });
    out.questions = (await db.insert(hubQuestions).values(rows).onConflictDoNothing().returning({ id: hubQuestions.id })).length;
  }
  return out;
}
