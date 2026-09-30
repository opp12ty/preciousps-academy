import { and, desc, eq } from "drizzle-orm";
import { getDb } from "../db";
import { assets } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { sha256 } from "../crypto";
import { validateUpload, type FileKind } from "../files";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";

export type AssetKind = "BRAND" | "IMAGE" | "DOCUMENT" | "AVATAR" | "QUESTION_IMAGE";

const IMAGE_KINDS: FileKind[] = ["png", "jpg", "webp", "gif"];
const DOC_KINDS: FileKind[] = ["pdf", "docx", "doc", "pptx", "ppt", "xlsx", "xls"];

export async function storeAsset(
  actor: Actor,
  file: { name: string; bytes: Buffer },
  kind: AssetKind,
  ctx: ReqCtx,
): Promise<{ id: string; url: string; mimeType: string; fileName: string }> {
  await rateLimit("upload", actor.id, ctx);
  const cfg = await getSetting(actor.schoolId, "uploads");
  const isImage = kind !== "DOCUMENT";
  const allowed = isImage ? IMAGE_KINDS : DOC_KINDS;
  const max = (isImage ? cfg.maxImageMb : cfg.maxFileMb) * 1_048_576;
  let v;
  try {
    v = await validateUpload(file, allowed, max);
  } catch (e) {
    if (e instanceof AppError && /unsafe|macro|script|not match/i.test(e.message)) {
      await securityEvent({ type: "MALICIOUS_UPLOAD", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { name: file.name, reason: e.message } }, ctx);
    }
    throw e;
  }
  const [row] = await getDb()
    .insert(assets)
    .values({
      schoolId: actor.schoolId,
      kind,
      fileName: v.name,
      mimeType: v.mime,
      size: v.bytes.length,
      sha256: sha256(v.bytes),
      data: v.bytes,
      // Branding and question images are public; documents & avatars are access-controlled.
      isPublic: kind === "BRAND" || kind === "IMAGE" || kind === "QUESTION_IMAGE",
      uploadedBy: actor.id,
    })
    .returning({ id: assets.id, mimeType: assets.mimeType, fileName: assets.fileName });
  await audit({ actor, action: "asset.uploaded", entityType: "asset", entityId: row.id, summary: `${kind}: ${v.name}`, metadata: { size: v.bytes.length } }, ctx);
  return { ...row, url: `/api/v1/assets/${row.id}` };
}

export async function readAsset(id: string) {
  const [row] = await getDb().select().from(assets).where(eq(assets.id, id)).limit(1);
  return row ?? null;
}

export async function listAssets(schoolId: string, kind?: AssetKind) {
  return getDb()
    .select({ id: assets.id, kind: assets.kind, fileName: assets.fileName, mimeType: assets.mimeType, size: assets.size, createdAt: assets.createdAt })
    .from(assets)
    .where(and(eq(assets.schoolId, schoolId), kind ? eq(assets.kind, kind) : undefined))
    .orderBy(desc(assets.createdAt))
    .limit(200);
}
