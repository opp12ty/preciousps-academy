import type { NextRequest } from "next/server";
import { resolveSessionToken } from "@/server/auth/session";
import { SESSION_COOKIE } from "@/server/http";
import { readAsset } from "@/server/services/assets";
import { getAccessState } from "@/server/services/access";

/**
 * Serves stored assets. Public brand/question images are cacheable; private
 * documents require staff, or a student with active access (§48).
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return new Response("Not found", { status: 404 });
  const a = await readAsset(id);
  if (!a) return new Response("Not found", { status: 404 });
  if (!a.isPublic) {
    const token = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1] ?? req.cookies.get(SESSION_COOKIE)?.value;
    const s = await resolveSessionToken(token);
    if (!s || s.mfaPending || s.user.schoolId !== a.schoolId) return new Response("Not found", { status: 404 });
    if (s.user.userType === "STUDENT") {
      const own = a.kind === "AVATAR" && a.uploadedBy === s.user.id;
      if (!own && (await getAccessState(s.user.id)).status !== "ACTIVE") return new Response("Access required", { status: 403 });
    }
  }
  const inline = a.mimeType.startsWith("image/") || a.mimeType === "application/pdf";
  return new Response(new Uint8Array(a.data), {
    headers: {
      "Content-Type": a.mimeType,
      "Content-Length": String(a.size),
      "Content-Disposition": `${inline ? "inline" : "attachment"}; filename="${a.fileName}"`,
      "Cache-Control": a.isPublic ? "public, max-age=86400, stale-while-revalidate=604800" : "private, no-store",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; sandbox",
      ETag: `"${a.sha256.slice(0, 32)}"`,
    },
  });
}
