import { and, desc, eq, ilike, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { classes, departments, resourceLinks, subjects, topics } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { resolveSection, sectionCond, studentScope } from "./scope";
import { SECTIONS } from "@/core/sections";
import { AppError } from "../errors";

const uuidOpt = z
  .string()
  .uuid()
  .nullish()
  .or(z.literal("").transform(() => null));

/** Known learning platforms; anything else must still be a clean https URL. */
export function detectPlatform(url: string): string {
  const h = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  if (/(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(h)) return "YouTube";
  if (/(^|\.)facebook\.com$|(^|\.)fb\.watch$/.test(h)) return "Facebook";
  if (/(^|\.)drive\.google\.com$|(^|\.)docs\.google\.com$/.test(h)) return "Google Drive";
  if (/(^|\.)khanacademy\.org$/.test(h)) return "Khan Academy";
  if (/(^|\.)soundcloud\.com$|(^|\.)spotify\.com$/.test(h)) return "Audio";
  if (/(^|\.)archive\.org$|(^|\.)openlibrary\.org$/.test(h)) return "Online Library";
  return h;
}

export function validateExternalUrl(raw: string): string {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    throw new AppError("VALIDATION", "Enter a valid URL.");
  }
  if (u.protocol !== "https:") throw new AppError("VALIDATION", "Only secure https:// links are allowed.");
  if (u.username || u.password) throw new AppError("VALIDATION", "Links must not contain credentials.");
  if (/^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(u.hostname) || u.hostname.endsWith(".local"))
    throw new AppError("VALIDATION", "Private network links are not allowed.");
  return u.toString();
}

export const resourceSchema = z.object({
  title: z.string().trim().min(2).max(160),
  description: z.string().trim().max(1000).nullish(),
  subjectId: uuidOpt,
  departmentId: uuidOpt,
  classId: uuidOpt,
  level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null)),
  topicId: uuidOpt,
  resourceType: z.enum(["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"]),
  url: z.string().trim().max(1000).nullish(),
  assetId: uuidOpt,
  thumbnailUrl: z.string().trim().max(1000).nullish().or(z.literal("").transform(() => null)),
  platform: z.string().trim().max(60).nullish(),
  durationMinutes: z.coerce.number().int().min(0).max(10_000).nullish(),
  isRecommended: z.boolean().default(false),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
});

export async function upsertResource(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = resourceSchema.parse(raw);
  if (!d.url && !d.assetId) throw new AppError("VALIDATION", "Provide a link or upload a file.");
  const url = d.url ? validateExternalUrl(d.url) : null;
  const thumbnailUrl = d.thumbnailUrl ? validateExternalUrl(d.thumbnailUrl) : null;
  const level = await resolveSection(actor.schoolId, d.classId, d.level);
  const values = { ...d, level, url, thumbnailUrl, platform: d.platform || (url ? detectPlatform(url) : "Upload") };
  const db = getDb();
  const row = id
    ? (await db.update(resourceLinks).set({ ...values, updatedAt: new Date() }).where(and(eq(resourceLinks.id, id), eq(resourceLinks.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(resourceLinks).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Resource not found.");
  await audit({ actor, action: id ? "resource.updated" : "resource.created", entityType: "resource", entityId: row.id, summary: `${row.title} (${row.status})` }, ctx);
  return row;
}

export async function listResources(schoolId: string, f: { search?: string; subjectId?: string; type?: string; status?: string; forUserId?: string }) {
  const db = getDb();
  const scope = f.forUserId ? await studentScope(f.forUserId, db) : undefined;
  const conds = [eq(resourceLinks.schoolId, schoolId)];
  if (f.forUserId) conds.push(eq(resourceLinks.status, "PUBLISHED"));
  else if (f.status) conds.push(eq(resourceLinks.status, f.status as "DRAFT"));
  if (f.subjectId) conds.push(eq(resourceLinks.subjectId, f.subjectId));
  if (f.type) conds.push(eq(resourceLinks.resourceType, f.type as "VIDEO"));
  if (f.search?.trim()) conds.push(or(ilike(resourceLinks.title, `%${f.search.trim()}%`), ilike(resourceLinks.description, `%${f.search.trim()}%`))!);
  if (scope) {
    conds.push(or(isNull(resourceLinks.classId), scope.classId ? eq(resourceLinks.classId, scope.classId) : sql`false`)!);
    conds.push(or(isNull(resourceLinks.departmentId), scope.departmentId ? eq(resourceLinks.departmentId, scope.departmentId) : sql`false`)!);
    conds.push(sectionCond(resourceLinks.level, scope.level));
  }
  return db
    .select({ r: resourceLinks, subject: subjects.name, topic: topics.title, className: classes.name, department: departments.name })
    .from(resourceLinks)
    .leftJoin(subjects, eq(subjects.id, resourceLinks.subjectId))
    .leftJoin(topics, eq(topics.id, resourceLinks.topicId))
    .leftJoin(classes, eq(classes.id, resourceLinks.classId))
    .leftJoin(departments, eq(departments.id, resourceLinks.departmentId))
    .where(and(...conds))
    .orderBy(desc(resourceLinks.isRecommended), desc(resourceLinks.createdAt))
    .limit(200);
}

export async function setResourceStatus(actor: Actor, id: string, status: "DRAFT" | "PUBLISHED" | "ARCHIVED", ctx: ReqCtx) {
  const res = await getDb().update(resourceLinks).set({ status, updatedAt: new Date() }).where(and(eq(resourceLinks.id, id), eq(resourceLinks.schoolId, actor.schoolId))).returning({ id: resourceLinks.id });
  if (!res.length) throw new AppError("NOT_FOUND", "Resource not found.");
  await audit({ actor, action: `resource.${status.toLowerCase()}`, entityType: "resource", entityId: id }, ctx);
}
