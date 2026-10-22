import type { NextRequest } from "next/server";
import { resolveSessionToken } from "@/server/auth/session";
import { SESSION_COOKIE } from "@/server/http";
import { readAsset } from "@/server/services/assets";
import { downloadAccess, getAccessState } from "@/server/services/access";

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
    if (s.user.userType === "PARENT") return new Response("Not found", { status: 404 });
    if (s.user.userType === "STUDENT") {
      const own = a.kind === "AVATAR" && a.uploadedBy === s.user.id;
      const st = own ? null : await getAccessState(s.user.id);
      if (st && st.status !== "ACTIVE") return new Response("Access required", { status: 403 });
      // Documents belong to the Resource Centre and to lessons: the code must include one of the two.
      if (st && a.kind === "DOCUMENT" && !st.features.includes("LEARNING_RESOURCES") && !st.features.includes("STUDY_CENTRE")) return new Response("Not included in your access plan", { status: 403 });
      // Students read Word, PowerPoint and Excel materials inside the app; the files themselves stay in the backend.
      if (st && a.kind === "DOCUMENT" && a.mimeType !== "application/pdf" && a.mimeType !== "audio/mpeg") return new Response("Open this material from the Study Materials page.", { status: 403 });
      // Downloading a PDF follows the Admin's Downloads control; the text can still be read in the app.
      if (st && a.kind === "DOCUMENT" && a.mimeType === "application/pdf") {
        const dl = await downloadAccess(s.user, "ebookFiles");
        if (!dl.allowed) return new Response(`To download this file, contact Admin on ${dl.phone}${dl.needsCode ? " to get an access code for it" : ""}. You can still read it in the app.`, { status: 403, headers: { "Content-Type": "text/plain; charset=utf-8" } });
      }
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
