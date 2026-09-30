/**
 * HTTP smoke test against a running server (local or deployed).
 *   BASE_URL=http://localhost:3000 SMOKE_EMAIL=… SMOKE_PASSWORD=… SMOKE_TOTP_SECRET=… node scripts/smoke-http.mjs
 * Signs in as an administrator (password + TOTP), uploads Word / Excel / PDF question files,
 * and checks public pages, health and security headers. Uses only public HTTP APIs.
 */
import JSZip from "jszip";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { Secret, TOTP } from "otpauth";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "✔" : "✖"} ${name}${detail ? ` — ${detail}` : ""}`);
};

let cookie = "";
async function call(path, init = {}) {
  const res = await fetch(BASE + path, { ...init, headers: { ...(init.headers ?? {}), ...(cookie ? { cookie } : {}), origin: BASE }, redirect: "manual" });
  const set = res.headers.get("set-cookie");
  if (set) cookie = set.split(";")[0];
  return res;
}

async function docx(lines) {
  const zip = new JSZip();
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  zip.file("[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`);
  zip.file("_rels/.rels", `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`);
  zip.file("word/document.xml", `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${lines.map((l) => `<w:p><w:r><w:t xml:space="preserve">${esc(l)}</w:t></w:r></w:p>`).join("")}</w:body></w:document>`);
  return zip.generateAsync({ type: "uint8array" });
}

async function main() {
  // Public surface
  const home = await call("/");
  check("Homepage renders", home.status === 200);
  const csp = home.headers.get("content-security-policy") ?? "";
  check("CSP with per-request nonce", /script-src 'self' 'nonce-/.test(csp));
  check("HSTS / frame / nosniff headers", Boolean(home.headers.get("strict-transport-security")) && home.headers.get("x-frame-options") === "DENY" && home.headers.get("x-content-type-options") === "nosniff");
  const health = await (await call("/api/v1/health")).json();
  check("Health endpoint", health.status === "ok", `db ${health.latencyMs}ms`);
  for (const p of ["/about", "/subjects", "/cbt-practice", "/mock-exams", "/bece-preparation", "/jamb-preparation", "/waec-preparation", "/neco-preparation", "/study-centre", "/how-it-works", "/faq", "/contact", "/privacy", "/terms", "/register", "/login", "/backend", "/manifest.webmanifest", "/robots.txt", "/sitemap.xml", "/favicon.ico", "/brand/logo-full-480.png"]) {
    const r = await call(p);
    check(`GET ${p}`, r.status === 200, String(r.status));
  }
  const protectedPage = await call("/admin");
  check("Unauthenticated /admin redirects to backend login", protectedPage.status === 307 && (protectedPage.headers.get("location") ?? "").includes("/backend"));
  const anonApi = await call("/api/v1/admin/codes");
  check("Unauthenticated admin API rejected", anonApi.status === 401);
  const cross = await fetch(BASE + "/api/v1/auth/logout", { method: "POST", headers: { origin: "https://evil.example" } });
  check("Cross-site POST blocked (CSRF)", cross.status === 403 || cross.status === 401);

  const email = process.env.SMOKE_EMAIL, password = process.env.SMOKE_PASSWORD, secret = process.env.SMOKE_TOTP_SECRET;
  if (!email || !password) {
    console.log("(set SMOKE_EMAIL / SMOKE_PASSWORD / SMOKE_TOTP_SECRET to run authenticated checks)");
    return;
  }
  const login = await (await call("/api/v1/auth/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ identifier: email, password, portal: "backend" }) })).json();
  check("Admin password sign-in", login.ok, login.data?.mfaPending ? "2FA required" : "");
  if (login.data?.mfaPending) {
    const code = new TOTP({ secret: Secret.fromBase32(secret) }).generate();
    const mfa = await (await call("/api/v1/auth/mfa", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ code }) })).json();
    check("Admin TOTP verification", mfa.ok);
  }
  const subjects = await (await call("/api/v1/admin/exams")).json();
  const mathSubjectId = subjects.data?.find((e) => e.subject === "Mathematics")?.e.subjectId;
  const engSubjectId = subjects.data?.find((e) => e.subject === "English Language")?.e.subjectId;

  const upload = async (name, bytes, type, extra = {}) => {
    const fd = new FormData();
    fd.set("file", new Blob([bytes], { type }), name);
    for (const [k, v] of Object.entries(extra)) fd.set(k, v);
    return (await call("/api/v1/admin/imports", { method: "POST", body: fd })).json();
  };
  const stamp = Date.now().toString(36);
  const word = await upload(
    "english.docx",
    await docx([`1. Choose the synonym of "rapid" (${stamp}).`, "A. slow", "★ B. quick", "C. late", "D. calm", "Explanation: Rapid means quick.", "", `2. Pick the plural of "child" (${stamp}).`, "★A. children", "★B. childs", "C. childes", "", `3. Which is a verb (${stamp})?`, "A. table", "B. blue", "C. run", "D. happy"]),
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    { subjectId: engSubjectId, copyrightStatus: "TEACHER_AUTHORED", commit: "1" },
  );
  const [q1, q2, q3] = word.data?.items ?? [];
  check("Word ★ parser: correct answer extracted and ★ removed", q1?.errors.length === 0 && q1?.options.find((o) => o.isCorrect)?.text === "quick" && !JSON.stringify(q1).includes("★"));
  check("Word: two ★ rejected", /more than one/i.test(q2?.errors.join(" ") ?? ""));
  check("Word: no ★ is an error, never guessed", /No option is marked/.test(q3?.errors.join(" ") ?? "") && !q3?.options.some((o) => o.isCorrect));
  check("Word: valid item imported as PENDING_REVIEW", word.data?.committed?.imported === 1, JSON.stringify(word.data?.committed));

  const tpl = await call("/api/v1/admin/import-template");
  check("Excel template download", tpl.status === 200 && (tpl.headers.get("content-type") ?? "").includes("spreadsheet"));
  const tplBytes = new Uint8Array(await tpl.arrayBuffer());
  const excel = await upload("template.xlsx", tplBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  check("Excel import validates rows", (excel.data?.items?.length ?? 0) >= 1, `${excel.data?.items?.length} row(s), errors: ${excel.data?.items?.[0]?.errors.join("; ") || "none"}`);

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  [`1. What is 12 x 12? (${stamp})`, "A. 124", "B. 144", "C. 154", "D. 142"].forEach((l, i) => page.drawText(l, { x: 50, y: 780 - i * 20, size: 12, font }));
  const pdfRes = await upload("maths.pdf", await pdf.save(), "application/pdf", { subjectId: mathSubjectId });
  check("PDF text extraction + validation (no ★ → flagged, not guessed)", /No option is marked/.test(pdfRes.data?.items?.[0]?.errors.join(" ") ?? ""), `${pdfRes.data?.items?.length} item(s)`);

  const evil = await upload("evil.docx", new TextEncoder().encode("MZ-not-a-docx"), "application/octet-stream");
  check("Disguised executable rejected", evil.ok === false, evil.error?.message);

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
