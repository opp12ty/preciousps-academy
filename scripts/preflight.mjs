/**
 * Runs first in `vercel-build`. Fails fast with a plain-language checklist instead of a stack trace
 * when the deployment is missing configuration. Never prints secret values.
 */
const env = process.env;
const isVercel = !!env.VERCEL;
const db = env.DATABASE_URL || env.POSTGRES_URL;
const problems = [];
const warnings = [];

if (!db) problems.push("DATABASE_URL — add a Postgres database (Vercel → Storage → Neon, connect it to this project) or paste a connection string.");
else if (isVercel && /127\.0\.0\.1|localhost/.test(db)) problems.push("DATABASE_URL points at localhost; use a hosted Postgres database.");
for (const k of ["AUTH_SECRET", "ENCRYPTION_KEY"]) {
  if (!env[k] || env[k].length < 32) problems.push(`${k} — set a random value of at least 32 characters (node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))").`);
}
if (env.AUTH_SECRET && env.AUTH_SECRET === env.ENCRYPTION_KEY) problems.push("AUTH_SECRET and ENCRYPTION_KEY must be different values.");
if (!env.SETUP_TOKEN && !env.SUPERADMIN_INITIAL_PASSWORD) warnings.push("SETUP_TOKEN is not set — nobody will be able to create the first Super Admin at /backend until it is.");
if (!env.CRON_SECRET) warnings.push("CRON_SECRET is not set — the daily maintenance cron will be rejected.");
if (!env.APP_URL && !env.VERCEL_PROJECT_PRODUCTION_URL) warnings.push("APP_URL is not set — e-mail links and QR verification links will be relative.");

for (const w of warnings) console.warn(`⚠ ${w}`);
if (problems.length) {
  console.error("\n✖ Precious PS Academy cannot build yet. Missing configuration (Vercel → Project → Settings → Environment Variables):\n");
  for (const p of problems) console.error(`  • ${p}`);
  console.error("\nSee .env.example and the README section “Deploying to Vercel”.\n");
  process.exit(1);
}
console.log("✔ deployment configuration looks complete");
