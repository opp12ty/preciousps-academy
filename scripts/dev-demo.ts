/**
 * LOCAL DEVELOPMENT ONLY. Creates a demo student with an active access code on the local database so
 * the portals can be explored. Refuses to run against anything but localhost.
 *   npm run dev:demo
 */
import { eq } from "drizzle-orm";
import { getDb } from "../src/server/db";
import { classes, departments, users } from "../src/server/db/schema";
import { databaseUrl } from "../src/server/db/url";
import { registerStudent } from "../src/server/services/auth";
import { activateCode, generateCodes } from "../src/server/services/access";
import { getDefaultSchoolId } from "../src/server/settings";

async function main() {
  if (!/127\.0\.0\.1|localhost/.test(databaseUrl() ?? "")) throw new Error("dev:demo only runs against a local database.");
  const db = getDb();
  const ctx = { ip: "127.0.0.1", userAgent: "dev-demo" };
  const schoolId = await getDefaultSchoolId();
  const [admin] = await db.select().from(users).where(eq(users.userType, "SUPER_ADMIN")).limit(1);
  const [cls] = await db.select().from(classes).where(eq(classes.code, "SS2"));
  const [dep] = await db.select().from(departments).where(eq(departments.code, "SCI"));
  const email = "demo.student@preciousps.test";
  const password = "Demo-Student#2026";
  const [exists] = await db.select({ id: users.id }).from(users).where(eq(users.email, email));
  if (exists) return console.log("demo student already exists:", email);
  const { userId } = await registerStudent(
    { firstName: "Ada", lastName: "Okafor", email, phone: "08031112222", studentNumber: "PPS/2026/0001", classId: cls.id, departmentId: dep.id, country: "Nigeria", password, confirmPassword: password, acceptTerms: true },
    ctx,
  );
  const actor = { id: admin.id, schoolId, userType: "SUPER_ADMIN" as const, permissions: new Set<string>() };
  const [code] = (await generateCodes(actor as never, { count: 1 }, ctx)).codes;
  await activateCode({ id: userId, schoolId, userType: "STUDENT" } as never, code, ctx);
  console.log("demo student ready:", email, "(password: see scripts/dev-demo.ts)");
}
main().then(() => process.exit(0), (e) => { console.error(e); process.exit(1); });
