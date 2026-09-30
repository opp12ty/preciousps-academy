/**
 * Seeds the academic structure, RBAC catalogue and (with --sample) original
 * demo content. Safe to run repeatedly. Never creates credentials unless the
 * SUPERADMIN_* environment variables are provided.
 *   npm run db:seed            # structure + sample content
 *   npm run db:seed -- --bare  # structure only (production)
 */
import { seedPlatform, seedSuperAdminFromEnv } from "../src/server/seed";

async function main() {
  const bare = process.argv.includes("--bare");
  await seedPlatform({ sampleContent: !bare, log: (m) => console.log(`• ${m}`) });
  await seedSuperAdminFromEnv((m) => console.log(`• ${m}`));
  console.log("✔ seed complete");
  process.exit(0);
}

main().catch((e) => {
  console.error("✖ seed failed:", e);
  process.exit(1);
});
