import { and, desc, eq, ilike, isNotNull, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { assets, classes, departments, resourceLinks, subjects, topics } from "../db/schema";
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
  isPremium: z.boolean().default(false),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
});

export async function upsertResource(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = resourceSchema.parse(raw);
  if (!d.url && !d.assetId) throw new AppError("VALIDATION", "Provide a link or upload a file.");
  const url = d.url ? validateExternalUrl(d.url) : null;
  if (d.assetId) {
    const [a] = await getDb().select({ kind: assets.kind }).from(assets).where(and(eq(assets.id, d.assetId), eq(assets.schoolId, actor.schoolId)));
    if (!a || a.kind !== "DOCUMENT") throw new AppError("VALIDATION", "Upload the study material again.");
  }
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

/** File families offered as study materials, matched on the stored file's extension. */
export const MATERIAL_TYPES = {
  pdf: { label: "PDF", ext: ["pdf"] },
  word: { label: "Word (DOCX)", ext: ["docx", "doc"] },
  powerpoint: { label: "PowerPoint (PPTX)", ext: ["pptx", "ppt"] },
  excel: { label: "Excel (XLSX)", ext: ["xlsx", "xls"] },
  audio: { label: "Audio (MP3)", ext: ["mp3"] },
} as const;
export type MaterialType = keyof typeof MATERIAL_TYPES;
export const materialType = (fileName: string | null): MaterialType | null => {
  const ext = fileName?.split(".").pop()?.toLowerCase() ?? "";
  return (Object.keys(MATERIAL_TYPES) as MaterialType[]).find((k) => (MATERIAL_TYPES[k].ext as readonly string[]).includes(ext)) ?? null;
};

export async function listResources(schoolId: string, f: { search?: string; subjectId?: string; type?: string; status?: string; forUserId?: string; kind?: "LINK" | "FILE"; fileType?: string }) {
  const db = getDb();
  const scope = f.forUserId ? await studentScope(f.forUserId, db) : undefined;
  const conds = [eq(resourceLinks.schoolId, schoolId)];
  if (f.forUserId) conds.push(eq(resourceLinks.status, "PUBLISHED"));
  else if (f.status) conds.push(eq(resourceLinks.status, f.status as "DRAFT"));
  if (f.subjectId) conds.push(eq(resourceLinks.subjectId, f.subjectId));
  if (f.type) conds.push(eq(resourceLinks.resourceType, f.type as "VIDEO"));
  // Uploaded files are "study materials"; everything else is a link in the Resource Centre.
  if (f.kind === "FILE") conds.push(isNotNull(resourceLinks.assetId));
  if (f.kind === "LINK") conds.push(isNull(resourceLinks.assetId));
  if (f.fileType && f.fileType in MATERIAL_TYPES) conds.push(or(...MATERIAL_TYPES[f.fileType as MaterialType].ext.map((x) => ilike(assets.fileName, `%.${x}`)))!);
  if (f.search?.trim()) conds.push(or(ilike(resourceLinks.title, `%${f.search.trim()}%`), ilike(resourceLinks.description, `%${f.search.trim()}%`))!);
  if (scope) {
    conds.push(or(isNull(resourceLinks.classId), scope.classId ? eq(resourceLinks.classId, scope.classId) : sql`false`)!);
    conds.push(or(isNull(resourceLinks.departmentId), scope.departmentId ? eq(resourceLinks.departmentId, scope.departmentId) : sql`false`)!);
    conds.push(sectionCond(resourceLinks.level, scope.level));
  }
  return db
    .select({ r: resourceLinks, subject: subjects.name, topic: topics.title, className: classes.name, department: departments.name, fileName: assets.fileName, fileSize: assets.size })
    .from(resourceLinks)
    .leftJoin(assets, eq(assets.id, resourceLinks.assetId))
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
