/**
 * Seeds the academic structure, RBAC catalogue and (with --sample) original
 * demo content. Safe to run repeatedly. Never creates credentials unless the
 * SUPERADMIN_* environment variables are provided.
 *   npm run db:seed            # structure + sample content
 *   npm run db:seed -- --bare  # structure only (production)
 * Built-in content packs are installed (or updated when they change) unless --no-packs is given.
 */
import { seedPlatform, seedSuperAdminFromEnv, SYSTEM_ACTOR_ID } from "../src/server/seed";
import { installBuiltInPacks } from "../src/server/services/pack-autoinstall";
import { setupStandardPapers } from "../src/server/services/exams";
import { setupFodanExams } from "../src/server/services/preciousps-exams";

async function main() {
  const bare = process.argv.includes("--bare");
  const { schoolId } = await seedPlatform({ sampleContent: !bare, primarySchool: process.env.ENABLE_PRIMARY_SCHOOL === "1", log: (m) => console.log(`• ${m}`) });
  if (!process.argv.includes("--no-packs")) {
    const actor = { id: SYSTEM_ACTOR_ID, schoolId, userType: "SUPER_ADMIN" as const, permissions: new Set<never>(), name: "System", email: "system@preciousps.local" };
    const r = await installBuiltInPacks(actor, { ip: null, userAgent: "seed" }, { log: (m) => console.log(`• ${m}`) });
    console.log(`• content packs: ${r.installed} installed or updated, ${r.unchanged} already current, ${r.postponed} left for the next deploy`);
    for (const f of r.failed) console.log(`• content pack not installed — ${f}`);
    const p = await setupStandardPapers(actor, { ip: null, userAgent: "seed" });
    const fx = await setupFodanExams(actor, { ip: null, userAgent: "seed" });
    console.log(`• Precious PS Examinations: ${fx.created} created, ${fx.published} published, ${fx.resized} resized${fx.empty.length ? `; waiting for questions: ${fx.empty.length}` : ""}`);
    console.log(`• standard papers: ${p.jamb.created} JAMB test(s) created, ${p.jamb.published} published; ${p.created} BECE / Common Entrance paper(s) added`);
  }
  await seedSuperAdminFromEnv((m) => console.log(`• ${m}`));
  console.log("✔ seed complete");
  process.exit(0);
}

main().catch((e) => {
  console.error("✖ seed failed:", e);
  process.exit(1);
});
