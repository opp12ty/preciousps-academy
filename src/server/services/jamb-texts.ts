import { and, desc, eq } from "drizzle-orm";
import { getDb } from "../db";
import { assets, jambTexts } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireActiveAccess } from "./access";
import { extractSections } from "./material-reader";

/**
 * Prescribed literature texts for JAMB (UTME). The Admin uploads each one as a PDF with its year, title and
 * author; students read the text in the app (downloading follows Downloads Control). Only texts the school
 * has the right to share should be uploaded.
 */

const UUID = /^[0-9a-f-]{36}$/i;
export const JAMB_GENRES = { PROSE: "Prose (novel)", DRAMA: "Drama", POETRY: "Poetry", OTHER: "Other" } as const;

export async function listJambTexts(schoolId: string, publishedOnly = false) {
  return getDb()
    .select({ t: jambTexts, fileName: assets.fileName, size: assets.size })
    .from(jambTexts)
    .innerJoin(assets, eq(assets.id, jambTexts.assetId))
    .where(and(eq(jambTexts.schoolId, schoolId), publishedOnly ? eq(jambTexts.status, "PUBLISHED") : undefined))
    .orderBy(desc(jambTexts.year), jambTexts.genre, jambTexts.title);
}

export async function addJambText(actor: Actor, d: { assetId: string; title: string; author?: string; year: number; genre?: string }, ctx: ReqCtx) {
  const title = d.title?.trim() ?? "";
  if (title.length < 2) throw new AppError("VALIDATION", "Enter the title of the book.");
  if (!Number.isInteger(d.year) || d.year < 2000 || d.year > 2100) throw new AppError("VALIDATION", "Enter the JAMB year, e.g. 2026.");
  if (!UUID.test(d.assetId)) throw new AppError("VALIDATION", "Upload the PDF first.");
  const db = getDb();
  const [a] = await db.select({ mime: assets.mimeType }).from(assets).where(and(eq(assets.id, d.assetId), eq(assets.schoolId, actor.schoolId), eq(assets.kind, "DOCUMENT")));
  if (!a || a.mime !== "application/pdf") throw new AppError("VALIDATION", "Upload the book as a PDF.");
  const genre = d.genre && d.genre in JAMB_GENRES ? d.genre : "PROSE";
  const [row] = await db.insert(jambTexts).values({ schoolId: actor.schoolId, title: title.slice(0, 200), author: d.author?.trim().slice(0, 120) || null, year: d.year, genre, assetId: d.assetId, createdBy: actor.id }).returning({ id: jambTexts.id });
  await audit({ actor, action: "jamb_text.added", entityType: "jamb_text", entityId: row.id, summary: `${d.year}: ${title}` }, ctx);
  return row;
}

export async function setJambTextStatus(actor: Actor, id: string, status: "PUBLISHED" | "DRAFT", ctx: ReqCtx) {
  if (!UUID.test(id)) throw new AppError("NOT_FOUND", "Text not found.");
  const r = await getDb().update(jambTexts).set({ status }).where(and(eq(jambTexts.id, id), eq(jambTexts.schoolId, actor.schoolId))).returning({ title: jambTexts.title });
  if (!r.length) throw new AppError("NOT_FOUND", "Text not found.");
  await audit({ actor, action: `jamb_text.${status.toLowerCase()}`, entityType: "jamb_text", entityId: id, summary: r[0].title }, ctx);
}

export async function deleteJambText(actor: Actor, id: string, ctx: ReqCtx) {
  if (!UUID.test(id)) throw new AppError("NOT_FOUND", "Text not found.");
  const r = await getDb().delete(jambTexts).where(and(eq(jambTexts.id, id), eq(jambTexts.schoolId, actor.schoolId))).returning({ title: jambTexts.title });
  if (!r.length) throw new AppError("NOT_FOUND", "Text not found.");
  await audit({ actor, action: "jamb_text.deleted", entityType: "jamb_text", entityId: id, summary: r[0].title }, ctx);
}

/** The text of a prescribed book, for reading inside the app. */
export async function readJambText(actor: Actor, id: string) {
  if (!UUID.test(id)) throw new AppError("NOT_FOUND", "Text not found.");
  await requireActiveAccess(actor.id);
  const [row] = await getDb()
    .select({ t: jambTexts, fileName: assets.fileName, data: assets.data })
    .from(jambTexts)
    .innerJoin(assets, eq(assets.id, jambTexts.assetId))
    .where(and(eq(jambTexts.id, id), eq(jambTexts.schoolId, actor.schoolId), eq(jambTexts.status, "PUBLISHED")));
  if (!row) throw new AppError("NOT_FOUND", "Text not found.");
  return { text: row.t, ...(await extractSections(row.fileName, row.data as Buffer)) };
}
