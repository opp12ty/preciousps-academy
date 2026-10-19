import { and, asc, eq, sql } from "drizzle-orm";
import { getDb } from "../db";
import { topicAudio, topicAudioParts, topics } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { getAccessState } from "./access";
import { studentScope } from "./scope";

/**
 * MP3 explanations under a topic. A file is sent in small parts because the hosting platform caps
 * the size of one request; the parts are kept as they arrive and played back by byte range, so a
 * student's phone downloads only the stretch it is playing.
 */

export const AUDIO_MAX_BYTES = 40 * 1_048_576;
export const AUDIO_PART_BYTES = 2 * 1_048_576;
const PART_LIMIT = AUDIO_PART_BYTES + 1024;

const isMp3Start = (b: Buffer) => (b.length > 3 && b.subarray(0, 3).toString("latin1") === "ID3") || (b.length > 2 && b[0] === 0xff && (b[1] & 0xe0) === 0xe0);

async function topicOf(actor: Actor, topicId: string) {
  const [t] = await getDb().select({ id: topics.id, title: topics.title, classId: topics.classId }).from(topics).where(and(eq(topics.id, topicId), eq(topics.schoolId, actor.schoolId)));
  if (!t) throw new AppError("NOT_FOUND", "Topic not found.");
  return t;
}

/** Step 1: register the file. Nothing is visible to students until finishAudio() succeeds. */
export async function beginAudio(actor: Actor, raw: { topicId: string; title: string; fileName: string; size: number }, ctx: ReqCtx) {
  await rateLimit("upload", actor.id, ctx);
  await topicOf(actor, raw.topicId);
  const title = (raw.title ?? "").trim().slice(0, 120);
  const fileName = (raw.fileName ?? "").trim().replace(/[^\w.\- ]+/g, "_").slice(-120);
  if (title.length < 2) throw new AppError("VALIDATION", "Give the recording a title, for example “Explanation by Mr Ade”.");
  if (!/\.mp3$/i.test(fileName)) throw new AppError("VALIDATION", "Only MP3 files can be uploaded. Convert the recording to .mp3 first.");
  if (!Number.isInteger(raw.size) || raw.size < 1024) throw new AppError("VALIDATION", "The file is empty or too small to be a recording.");
  if (raw.size > AUDIO_MAX_BYTES) throw new AppError("VALIDATION", `The file is too large (maximum ${AUDIO_MAX_BYTES / 1_048_576} MB). Record in mono at 64 kbps to make it smaller.`);
  const db = getDb();
  const [{ n }] = await db.select({ n: sql<number>`coalesce(max(${topicAudio.sortOrder}), 0)::int` }).from(topicAudio).where(eq(topicAudio.topicId, raw.topicId));
  const [row] = await db.insert(topicAudio).values({ schoolId: actor.schoolId, topicId: raw.topicId, title, fileName, size: raw.size, sortOrder: n + 1, createdBy: actor.id }).returning({ id: topicAudio.id });
  return { id: row.id, partBytes: AUDIO_PART_BYTES };
}

/** Step 2, repeated: one part of the file, in order. */
export async function addAudioPart(actor: Actor, audioId: string, seq: number, bytes: Buffer) {
  const db = getDb();
  const [a] = await db.select().from(topicAudio).where(and(eq(topicAudio.id, audioId), eq(topicAudio.schoolId, actor.schoolId)));
  if (!a || a.ready) throw new AppError("NOT_FOUND", "Upload not found.");
  if (!Number.isInteger(seq) || seq < 0 || seq > 200) throw new AppError("VALIDATION", "Invalid part.");
  if (!bytes.length || bytes.length > PART_LIMIT) throw new AppError("VALIDATION", "Invalid part size.");
  if (seq === 0 && !isMp3Start(bytes)) throw new AppError("VALIDATION", "This does not look like an MP3 recording. Export it as .mp3 and try again.");
  const [{ got }] = await db.select({ got: sql<number>`coalesce(sum(${topicAudioParts.size}), 0)::int` }).from(topicAudioParts).where(and(eq(topicAudioParts.audioId, audioId), sql`${topicAudioParts.seq} < ${seq}`));
  if (got + bytes.length > a.size) throw new AppError("VALIDATION", "More data was sent than the file contains.");
  await db.insert(topicAudioParts).values({ audioId, seq, offset: got, size: bytes.length, data: bytes }).onConflictDoNothing();
}

/** Step 3: every byte has arrived, so the recording goes live. */
export async function finishAudio(actor: Actor, audioId: string, ctx: ReqCtx) {
  const db = getDb();
  const [a] = await db.select().from(topicAudio).where(and(eq(topicAudio.id, audioId), eq(topicAudio.schoolId, actor.schoolId)));
  if (!a) throw new AppError("NOT_FOUND", "Upload not found.");
  const [{ got }] = await db.select({ got: sql<number>`coalesce(sum(${topicAudioParts.size}), 0)::int` }).from(topicAudioParts).where(eq(topicAudioParts.audioId, audioId));
  if (got !== a.size) {
    await db.delete(topicAudio).where(eq(topicAudio.id, audioId));
    throw new AppError("VALIDATION", "The upload was incomplete. Check your network and upload the file again.");
  }
  await db.update(topicAudio).set({ ready: true }).where(eq(topicAudio.id, audioId));
  await audit({ actor, action: "curriculum.audio_added", entityType: "topic", entityId: a.topicId, summary: `Audio added: ${a.title}`, metadata: { audioId, size: a.size } }, ctx);
}

export async function deleteAudio(actor: Actor, audioId: string, ctx: ReqCtx) {
  const [a] = await getDb().delete(topicAudio).where(and(eq(topicAudio.id, audioId), eq(topicAudio.schoolId, actor.schoolId))).returning();
  if (!a) throw new AppError("NOT_FOUND", "Recording not found.");
  await audit({ actor, action: "curriculum.audio_removed", entityType: "topic", entityId: a.topicId, summary: `Audio removed: ${a.title}` }, ctx);
}

export async function renameAudio(actor: Actor, audioId: string, title: string) {
  const t = (title ?? "").trim().slice(0, 120);
  if (t.length < 2) throw new AppError("VALIDATION", "Enter a title.");
  await getDb().update(topicAudio).set({ title: t }).where(and(eq(topicAudio.id, audioId), eq(topicAudio.schoolId, actor.schoolId)));
}

/** Finished recordings of a topic, in the order the teacher arranged them. */
export async function listTopicAudio(schoolId: string, topicId: string, opts: { tidy?: boolean } = {}) {
  // Abandoned uploads are cleared when staff open the topic's audio page, never while a student is reading.
  if (opts.tidy) await getDb().delete(topicAudio).where(and(eq(topicAudio.ready, false), sql`${topicAudio.createdAt} < now() - interval '2 hours'`));
  return getDb()
    .select({ id: topicAudio.id, title: topicAudio.title, size: topicAudio.size, fileName: topicAudio.fileName, createdAt: topicAudio.createdAt })
    .from(topicAudio)
    .where(and(eq(topicAudio.schoolId, schoolId), eq(topicAudio.topicId, topicId), eq(topicAudio.ready, true)))
    .orderBy(asc(topicAudio.sortOrder));
}

export async function audioCounts(schoolId: string) {
  const rows = await getDb().select({ topicId: topicAudio.topicId, n: sql<number>`count(*)::int` }).from(topicAudio).where(and(eq(topicAudio.schoolId, schoolId), eq(topicAudio.ready, true))).groupBy(topicAudio.topicId);
  return new Map(rows.map((r) => [r.topicId, r.n]));
}

/**
 * Who may play a recording: staff of the school, or a student whose running access includes the
 * Study Centre and whose class the topic belongs to.
 */
export async function audioForPlayback(viewer: { id: string; schoolId: string; userType: string }, audioId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(audioId)) return null;
  const db = getDb();
  const [a] = await db
    .select({ id: topicAudio.id, size: topicAudio.size, fileName: topicAudio.fileName, schoolId: topicAudio.schoolId, ready: topicAudio.ready, classId: topics.classId })
    .from(topicAudio)
    .innerJoin(topics, eq(topics.id, topicAudio.topicId))
    .where(eq(topicAudio.id, audioId));
  if (!a || !a.ready || a.schoolId !== viewer.schoolId) return null;
  if (viewer.userType === "PARENT") return null;
  if (viewer.userType === "STUDENT") {
    const st = await getAccessState(viewer.id);
    if (st.status !== "ACTIVE" || !st.features.includes("STUDY_CENTRE")) return null;
    const scope = await studentScope(viewer.id);
    if (a.classId && a.classId !== scope.classId) return null;
  }
  return a;
}

/** The bytes from `start` to `end` inclusive, read only from the parts that hold them. */
export async function readAudioRange(audioId: string, start: number, end: number): Promise<Buffer> {
  const parts = await getDb()
    .select({ offset: topicAudioParts.offset, size: topicAudioParts.size, data: topicAudioParts.data })
    .from(topicAudioParts)
    .where(and(eq(topicAudioParts.audioId, audioId), sql`${topicAudioParts.offset} <= ${end}`, sql`${topicAudioParts.offset} + ${topicAudioParts.size} > ${start}`))
    .orderBy(asc(topicAudioParts.seq));
  return Buffer.concat(parts.map((p) => (p.data as Buffer).subarray(Math.max(0, start - p.offset), Math.min(p.size, end - p.offset + 1))));
}
