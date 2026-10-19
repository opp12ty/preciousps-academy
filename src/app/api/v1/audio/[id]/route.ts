import type { NextRequest } from "next/server";
import { resolveSessionToken } from "@/server/auth/session";
import { SESSION_COOKIE } from "@/server/http";
import { audioForPlayback, readAudioRange } from "@/server/services/topic-audio";

/** How much is sent for one request: the player asks for the next stretch as it plays. */
const WINDOW = 512 * 1024;

/** Plays a topic recording by byte range, so a phone downloads only what it is listening to. */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1] ?? req.cookies.get(SESSION_COOKIE)?.value;
  const s = await resolveSessionToken(token);
  if (!s || s.mfaPending) return new Response("Not found", { status: 404 });
  const a = await audioForPlayback({ id: s.user.id, schoolId: s.user.schoolId, userType: s.user.userType }, id);
  if (!a) return new Response("Not found", { status: 404 });
  const m = req.headers.get("range")?.match(/^bytes=(\d*)-(\d*)$/);
  let start = 0;
  let end = Math.min(a.size - 1, WINDOW - 1);
  if (m) {
    if (m[1] === "" && m[2] !== "") start = Math.max(0, a.size - Number(m[2]));
    else start = Number(m[1] || 0);
    if (start >= a.size) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${a.size}` } });
    end = Math.min(a.size - 1, m[1] !== "" && m[2] !== "" ? Number(m[2]) : start + WINDOW - 1, start + WINDOW - 1);
  }
  const body = await readAudioRange(a.id, start, end);
  return new Response(new Uint8Array(body), {
    status: 206,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(body.length),
      "Content-Range": `bytes ${start}-${start + body.length - 1}/${a.size}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
