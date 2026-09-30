import { and, eq, sql } from "drizzle-orm";
import { seededRng } from "@/core/exam-engine";
import { getDb } from "../db";
import {
  assignmentQuestions,
  assignments,
  classes,
  departments,
  departmentSubjects,
  examinations,
  lessonQuestions,
  lessons,
  questions,
  resourceLinks,
  schools,
  subjects,
  terms,
  topics,
  users,
} from "../db/schema";
import type { Actor } from "../audit";
import { hashPassword } from "../auth/password";
import { checkPassword } from "@/core/password-policy";
import { clearSchoolCache } from "../settings";
import { createQuestion } from "../services/questions";
import { ensureSystemRoles } from "../services/people";
import { generateMathBank, toOptions } from "./math-bank";
import { SUBJECT_BANK } from "./subject-bank";
import { LESSONS } from "./lessons";
import { generateJssMathBank, JSS_LESSONS, JSS_SUBJECT_BANK } from "./jss-bank";

export const SYSTEM_ACTOR_ID = "00000000-0000-0000-0000-000000000000";

type DeptCode = "SCI" | "COM" | "ART" | "JSS";
const CORE: Record<DeptCode, string[]> = { SCI: ["MTH", "ENG", "CIV"], COM: ["MTH", "ENG", "CIV"], ART: ["MTH", "ENG", "CIV"], JSS: ["MTH", "ENG", "BSC", "BTE", "SOS", "CIV"] };
const JUNIOR = "JUNIOR_SECONDARY";
const SENIOR = "SENIOR_SECONDARY";

const SUBJECTS: { code: string; name: string; depts: DeptCode[]; description: string }[] = [
  { code: "MTH", name: "Mathematics", depts: ["SCI", "COM", "ART", "JSS"], description: "Number, algebra, geometry, statistics and calculus." },
  { code: "ENG", name: "English Language", depts: ["SCI", "COM", "ART", "JSS"], description: "Grammar, vocabulary, comprehension, summary and oral English." },
  { code: "PHY", name: "Physics", depts: ["SCI"], description: "Mechanics, heat, waves, electricity and modern physics." },
  { code: "CHM", name: "Chemistry", depts: ["SCI"], description: "Atomic structure, bonding, reactions and organic chemistry." },
  { code: "BIO", name: "Biology", depts: ["SCI"], description: "Cells, physiology, ecology, genetics and evolution." },
  { code: "AGR", name: "Agricultural Science", depts: ["SCI", "JSS"], description: "Soil, crops, animals and farm management." },
  { code: "FMT", name: "Further Mathematics", depts: ["SCI"], description: "Advanced algebra, vectors, mechanics and calculus." },
  { code: "GEO", name: "Geography", depts: ["SCI", "ART"], description: "Physical, human and regional geography with map reading." },
  { code: "CMP", name: "Computer Studies", depts: ["SCI", "COM", "JSS"], description: "Computer fundamentals, data, networks and programming." },
  { code: "ECO", name: "Economics", depts: ["COM", "ART"], description: "Demand, supply, markets, money and national income." },
  { code: "ACC", name: "Financial Accounting", depts: ["COM"], description: "Double entry, final accounts and accounting principles." },
  { code: "COM", name: "Commerce", depts: ["COM"], description: "Trade, business units, banking, insurance and transport." },
  { code: "GOV", name: "Government", depts: ["COM", "ART"], description: "Political concepts, constitutions and Nigerian government." },
  { code: "LIT", name: "Literature in English", depts: ["ART"], description: "Prose, drama, poetry and literary appreciation." },
  { code: "CRS", name: "Christian Religious Studies", depts: ["ART", "JSS"], description: "Biblical themes, teachings and moral lessons." },
  { code: "IRS", name: "Islamic Religious Studies", depts: ["ART", "JSS"], description: "Qur'an, Hadith, Tawhid and Islamic history." },
  { code: "CIV", name: "Civic Education", depts: ["ART", "SCI", "COM", "JSS"], description: "Values, citizenship, rights and national consciousness." },
  // Junior Secondary (Basic Education) subjects
  { code: "BSC", name: "Basic Science", depts: ["JSS"], description: "Living things, matter, energy, the human body and the environment." },
  { code: "BTE", name: "Basic Technology", depts: ["JSS"], description: "Safety, materials, tools, technical drawing and simple machines." },
  { code: "SOS", name: "Social Studies", depts: ["JSS"], description: "Family, culture, socialisation, community and national life." },
  { code: "SEC", name: "Security Education", depts: ["JSS"], description: "Personal safety, security awareness and emergency responses." },
  { code: "BUS", name: "Business Studies", depts: ["JSS"], description: "Office practice, commerce, book-keeping and keyboarding basics." },
  { code: "HEC", name: "Home Economics", depts: ["JSS"], description: "Food and nutrition, clothing, home management and family living." },
  { code: "PHE", name: "Physical and Health Education", depts: ["JSS"], description: "Fitness, sports, safety and personal and community health." },
  { code: "CCA", name: "Cultural and Creative Arts", depts: ["JSS"], description: "Fine art, music, drama and Nigerian arts and crafts." },
  { code: "FRE", name: "French", depts: ["JSS"], description: "Everyday French: greetings, vocabulary, grammar and comprehension." },
  { code: "YOR", name: "Yoruba", depts: ["JSS"], description: "Yoruba language, literature and culture." },
  { code: "IGB", name: "Igbo", depts: ["JSS"], description: "Igbo language, literature and culture." },
  { code: "HAU", name: "Hausa", depts: ["JSS"], description: "Hausa language, literature and culture." },
  { code: "HIS", name: "History", depts: ["ART", "JSS"], description: "Nigerian, African and world history." },
];

export async function seedPlatform(opts: { sampleContent?: boolean; log?: (m: string) => void } = {}) {
  const log = opts.log ?? (() => {});
  const db = getDb();

  // 1. Tenant
  let [school] = await db.select().from(schools).where(eq(schools.isDefault, true));
  if (!school) {
    [school] = await db.insert(schools).values({ slug: "preciousps", name: "Precious PS Academy", isDefault: true }).returning();
    log("created school");
  }
  clearSchoolCache();
  const schoolId = school.id;

  // 2. RBAC catalogue & system roles
  await ensureSystemRoles(schoolId);

  // 3. Departments, classes, terms
  const deptDefs: { code: DeptCode; name: string; sortOrder: number; level: string; description?: string }[] = [
    { code: "JSS", name: "Junior Secondary", sortOrder: 0, level: JUNIOR, description: "All JSS 1–JSS 3 students (Basic Education curriculum)." },
    { code: "SCI", name: "Science", sortOrder: 1, level: SENIOR },
    { code: "COM", name: "Commercial", sortOrder: 2, level: SENIOR },
    { code: "ART", name: "Arts", sortOrder: 3, level: SENIOR },
  ];
  // Departments created in this run get their subject links; existing links stay as the admin set them.
  const newDepts = new Set<DeptCode>();
  for (const d of deptDefs) {
    const [row] = await db.insert(departments).values({ ...d, schoolId }).onConflictDoNothing().returning({ id: departments.id });
    if (row) newDepts.add(d.code);
  }
  let addedJunior = false;
  for (const [i, c] of ["JSS1", "JSS2", "JSS3"].entries()) {
    const [row] = await db.insert(classes).values({ schoolId, code: c, name: c.replace(/^(JSS)(\d)$/, "$1 $2"), level: JUNIOR, sortOrder: i + 1 }).onConflictDoNothing().returning({ id: classes.id });
    if (row) addedJunior = true;
  }
  for (const [i, c] of ["SS1", "SS2", "SS3"].entries())
    await db.insert(classes).values({ schoolId, code: c, name: c.replace(/^SS(\d)$/, "SSS $1"), level: SENIOR, sortOrder: i + 4 }).onConflictDoNothing();
  // Upgrading an SS-only school: list JSS1–JSS3 before SS1–SS3.
  if (addedJunior) await db.execute(sql`UPDATE classes SET sort_order = sort_order + 3 WHERE school_id = ${schoolId} AND code IN ('SS1', 'SS2', 'SS3') AND sort_order < 4`);
  for (const [i, t] of ["First Term", "Second Term", "Third Term"].entries()) await db.insert(terms).values({ schoolId, name: t, sortOrder: i + 1 }).onConflictDoNothing();

  const depts = Object.fromEntries((await db.select().from(departments).where(eq(departments.schoolId, schoolId))).map((d) => [d.code, d.id]));
  const cls = Object.fromEntries((await db.select().from(classes).where(eq(classes.schoolId, schoolId))).map((c) => [c.code, c.id]));
  const trm = Object.fromEntries((await db.select().from(terms).where(eq(terms.schoolId, schoolId))).map((t) => [t.name, t.id]));

  // 4. Subjects
  for (const [i, s] of SUBJECTS.entries()) {
    const [created] = await db
      .insert(subjects)
      .values({ schoolId, code: s.code, name: s.name, description: s.description, sortOrder: i })
      .onConflictDoNothing()
      .returning({ id: subjects.id });
    const [row] = created ? [created] : await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.schoolId, schoolId), eq(subjects.code, s.code)));
    if (!row) continue;
    for (const d of s.depts) {
      if (!depts[d] || (!created && !newDepts.has(d))) continue;
      await db.insert(departmentSubjects).values({ departmentId: depts[d], subjectId: row.id, isCore: CORE[d].includes(s.code) }).onConflictDoNothing();
    }
  }
  const subj = Object.fromEntries((await db.select().from(subjects).where(eq(subjects.schoolId, schoolId))).map((s) => [s.code, s.id]));
  log("academic structure ready");

  if (!opts.sampleContent) return { schoolId };
  const [{ n: existing }] = await db.select({ n: sql<number>`count(*)::int` }).from(questions).where(eq(questions.schoolId, schoolId));
  if (existing > 0) {
    log("sample content already present — skipped");
    return { schoolId };
  }

  const actor: Actor = { id: SYSTEM_ACTOR_ID, schoolId, userType: "SUPER_ADMIN", permissions: new Set(), name: "System", email: "system@preciousps.local" };
  const topicId = async (subjectCode: string, title: string, classCode?: string, level = SENIOR) => {
    const section = classCode?.startsWith("JSS") ? JUNIOR : classCode ? SENIOR : level;
    const [t] = await db.select({ id: topics.id }).from(topics).where(and(eq(topics.subjectId, subj[subjectCode]), eq(topics.title, title), eq(topics.level, section)));
    if (t) return t.id;
    const [n] = await db
      .insert(topics)
      .values({ schoolId, subjectId: subj[subjectCode], title, classId: classCode ? cls[classCode] : null, level: section, termId: trm["First Term"], status: "PUBLISHED" })
      .returning({ id: topics.id });
    return n.id;
  };

  // 5. Question bank (original content)
  const rng = seededRng(7);
  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const math = generateMathBank(240);
  let created = 0;
  for (const [i, q] of math.entries()) {
    try {
      await createQuestion(
        actor,
        {
          subjectId: subj.MTH,
          classId: cls[q.classCode],
          topicId: await topicId("MTH", q.topic, q.classCode),
          year: years[i % years.length],
          examType: (["MOCK", "WAEC", "NECO", "JAMB", "PRACTICE"] as const)[i % 5],
          difficulty: q.difficulty,
          type: "MCQ",
          stem: q.stem,
          explanation: q.explanation,
          marks: 1,
          options: toOptions(q, rng),
          source: "Precious PS original (generated)",
          copyrightStatus: "ORIGINAL",
          status: "APPROVED",
        },
        {},
        { skipAudit: true },
      );
      created++;
    } catch {
      /* rare fingerprint collision — skip */
    }
  }
  for (const [code, rows] of Object.entries(SUBJECT_BANK)) {
    for (const [i, [topic, difficulty, stem, correct, d1, d2, d3, explanation]] of rows.entries()) {
      await createQuestion(
        actor,
        {
          subjectId: subj[code],
          topicId: await topicId(code, topic),
          year: years[(i * 3) % years.length],
          examType: "PRACTICE",
          difficulty,
          type: "MCQ",
          stem,
          explanation,
          marks: 1,
          options: [
            { text: correct, isCorrect: true },
            { text: d1, isCorrect: false },
            { text: d2, isCorrect: false },
            { text: d3, isCorrect: false },
          ].sort(() => rng() - 0.5),
          source: "Precious PS original (teacher-authored)",
          copyrightStatus: "TEACHER_AUTHORED",
          status: "APPROVED",
        },
        {},
        { skipAudit: true },
      );
      created++;
    }
  }
  // A True/False and a numeric example so every question type is represented.
  await createQuestion(actor, { subjectId: subj.PHY, topicId: await topicId("PHY", "Motion"), difficulty: "EASY", type: "TRUE_FALSE", stem: "Velocity is a vector quantity.", explanation: "Velocity has both magnitude and direction.", marks: 1, options: [{ text: "True", isCorrect: true }, { text: "False", isCorrect: false }], source: "Precious PS original", copyrightStatus: "ORIGINAL", status: "APPROVED" }, {}, { skipAudit: true });
  await createQuestion(actor, { subjectId: subj.MTH, topicId: await topicId("MTH", "Fractions", "SS1"), difficulty: "EASY", type: "NUMERIC", stem: "Express $\\frac{3}{4}$ as a decimal.", explanation: "3 ÷ 4 = 0.75", marks: 1, options: [], answerSpec: { value: 0.75, tolerance: 0.001 }, source: "Precious PS original", copyrightStatus: "ORIGINAL", status: "APPROVED" }, {}, { skipAudit: true });
  log(`question bank: ${created + 2} approved questions`);

  // 5b. Junior Secondary question bank (original content)
  let jss = 0;
  for (const [i, q] of generateJssMathBank(90).entries()) {
    try {
      await createQuestion(
        actor,
        {
          subjectId: subj.MTH,
          classId: cls[q.classCode],
          topicId: await topicId("MTH", q.topic, q.classCode),
          year: years[i % years.length],
          examType: (["PRACTICE", "BECE", "MOCK", "CLASS_TEST"] as const)[i % 4],
          difficulty: q.difficulty,
          type: "MCQ",
          stem: q.stem,
          explanation: q.explanation,
          marks: 1,
          options: toOptions(q, rng),
          source: "Precious PS original (generated)",
          copyrightStatus: "ORIGINAL",
          status: "APPROVED",
        },
        {},
        { skipAudit: true },
      );
      jss++;
    } catch {
      /* rare fingerprint collision — skip */
    }
  }
  for (const [code, rows] of Object.entries(JSS_SUBJECT_BANK)) {
    for (const [i, [topic, difficulty, stem, correct, d1, d2, d3, explanation]] of rows.entries()) {
      await createQuestion(
        actor,
        {
          subjectId: subj[code],
          topicId: await topicId(code, topic, undefined, JUNIOR),
          year: years[(i * 3) % years.length],
          examType: "PRACTICE",
          difficulty,
          type: "MCQ",
          stem,
          explanation,
          marks: 1,
          options: [
            { text: correct, isCorrect: true },
            { text: d1, isCorrect: false },
            { text: d2, isCorrect: false },
            { text: d3, isCorrect: false },
          ].sort(() => rng() - 0.5),
          source: "Precious PS original (teacher-authored)",
          copyrightStatus: "TEACHER_AUTHORED",
          status: "APPROVED",
        },
        {},
        { skipAudit: true },
      );
      jss++;
    }
  }
  log(`junior secondary bank: ${jss} approved questions`);

  // 6. Lessons with auto-marked classwork
  const allLessons = [...LESSONS.map((l) => ({ ...l, level: SENIOR })), ...JSS_LESSONS.map((l) => ({ ...l, level: JUNIOR }))];
  for (const [i, l] of allLessons.entries()) {
    const tId = await topicId(l.subject, l.topic, l.classCode, l.level);
    const [row] = await db
      .insert(lessons)
      .values({ schoolId, topicId: tId, title: l.title, summary: l.summary, body: l.body, examples: l.examples, videoUrl: l.videoUrl ?? null, estimatedMinutes: l.minutes, sortOrder: i, status: "PUBLISHED", createdBy: SYSTEM_ACTOR_ID })
      .returning({ id: lessons.id });
    const qs = await db.select({ id: questions.id }).from(questions).where(and(eq(questions.topicId, tId), eq(questions.status, "APPROVED"), eq(questions.type, "MCQ"))).limit(4);
    if (qs.length) await db.insert(lessonQuestions).values(qs.map((q, k) => ({ lessonId: row.id, questionId: q.id, sortOrder: k })));
  }
  log(`${allLessons.length} lessons`);

  // 7. Examinations
  const exams: Omit<typeof examinations.$inferInsert, "schoolId">[] = [
    { title: "Mathematics Mock Examination (2025)", subjectId: subj.MTH, year: 2025, examType: "MOCK", questionCount: 40, durationMinutes: 60, passMark: 50, maxAttempts: 2, description: "Full-length mock paper drawn from the approved Mathematics bank." },
    { title: "JAMB UTME Mathematics Practice", subjectId: subj.MTH, examType: "JAMB", questionCount: 20, durationMinutes: 25, passMark: 50, maxAttempts: 5, description: "Timed UTME-style practice." },
    { title: "English Language Practice Test", subjectId: subj.ENG, examType: "PRACTICE", questionCount: 10, durationMinutes: 15, passMark: 50, maxAttempts: 5 },
    { title: "Physics Practice Test", subjectId: subj.PHY, examType: "PRACTICE", questionCount: 8, durationMinutes: 12, passMark: 50, maxAttempts: 5, departmentId: depts.SCI },
    { title: "WAEC Biology Revision Test", subjectId: subj.BIO, examType: "WAEC", questionCount: 8, durationMinutes: 12, passMark: 50, maxAttempts: 3, departmentId: depts.SCI },
    { title: "NECO Chemistry Revision Test", subjectId: subj.CHM, examType: "NECO", questionCount: 8, durationMinutes: 12, passMark: 50, maxAttempts: 3, departmentId: depts.SCI },
    { title: "Economics Class Test", subjectId: subj.ECO, examType: "CLASS_TEST", questionCount: 6, durationMinutes: 10, passMark: 50, maxAttempts: 2 },
  ];
  for (const e of exams) e.level = SENIOR;
  exams.push(
    { title: "JSS Mathematics Practice Test", subjectId: subj.MTH, level: JUNIOR, examType: "PRACTICE", questionCount: 15, durationMinutes: 20, passMark: 50, maxAttempts: 5, description: "Whole numbers, fractions, percentages, equations and more for JSS1–JSS3." },
    { title: "BECE Mathematics Mock (JSS3)", subjectId: subj.MTH, classId: cls.JSS3, examType: "BECE", year: 2026, questionCount: 30, durationMinutes: 45, passMark: 50, maxAttempts: 2, description: "Full BECE-style mock drawn from the JSS Mathematics bank." },
    { title: "Basic Science Practice Test", subjectId: subj.BSC, level: JUNIOR, examType: "PRACTICE", questionCount: 8, durationMinutes: 12, passMark: 50, maxAttempts: 5 },
    { title: "Social Studies Class Test", subjectId: subj.SOS, level: JUNIOR, examType: "CLASS_TEST", questionCount: 6, durationMinutes: 10, passMark: 50, maxAttempts: 2 },
    { title: "JSS English Studies Practice", subjectId: subj.ENG, level: JUNIOR, examType: "PRACTICE", questionCount: 8, durationMinutes: 12, passMark: 50, maxAttempts: 5 },
  );
  for (const e of exams) {
    const level = e.classId ? (e.classId === cls.JSS3 || e.classId === cls.JSS2 || e.classId === cls.JSS1 ? JUNIOR : SENIOR) : e.level;
    await db.insert(examinations).values({ ...e, level, schoolId, status: "PUBLISHED", randomizeQuestions: true, randomizeOptions: true, createdBy: SYSTEM_ACTOR_ID });
  }
  log(`${exams.length} examinations`);

  // 8. Assignment
  const idx = await db.select({ id: questions.id }).from(questions).innerJoin(topics, eq(topics.id, questions.topicId)).where(and(eq(topics.title, "Indices"), eq(questions.status, "APPROVED"))).limit(5);
  if (idx.length) {
    const [a] = await db
      .insert(assignments)
      .values({ schoolId, title: "Indices — Homework 1", instructions: "Answer all questions. You have two attempts; explanations are shown after submission.", subjectId: subj.MTH, level: SENIOR, topicId: await topicId("MTH", "Indices", "SS1"), attemptLimit: 2, passMark: 60, status: "PUBLISHED", dueAt: new Date(Date.now() + 21 * 86_400_000), createdBy: SYSTEM_ACTOR_ID })
      .returning({ id: assignments.id });
    await db.insert(assignmentQuestions).values(idx.map((q, i) => ({ assignmentId: a.id, questionId: q.id, sortOrder: i })));
  }

  const jssFractions = await topicId("MTH", "Fractions", "JSS1");
  const fr = await db.select({ id: questions.id }).from(questions).where(and(eq(questions.topicId, jssFractions), eq(questions.status, "APPROVED"))).limit(5);
  if (fr.length) {
    const [a] = await db
      .insert(assignments)
      .values({ schoolId, title: "Fractions — Homework 1 (JSS1)", instructions: "Answer all questions. You have two attempts; explanations are shown after submission.", subjectId: subj.MTH, classId: cls.JSS1, level: JUNIOR, topicId: jssFractions, attemptLimit: 2, passMark: 60, status: "PUBLISHED", dueAt: new Date(Date.now() + 21 * 86_400_000), createdBy: SYSTEM_ACTOR_ID })
      .returning({ id: assignments.id });
    await db.insert(assignmentQuestions).values(fr.map((q, i) => ({ assignmentId: a.id, questionId: q.id, sortOrder: i })));
  }

  // 9. Resource Centre
  const resources = [
    { title: "Khan Academy — Arithmetic", description: "Whole numbers, fractions, decimals and percentages with free practice.", subjectId: subj.MTH, level: JUNIOR, resourceType: "WEBSITE" as const, url: "https://www.khanacademy.org/math/arithmetic", platform: "Khan Academy", isRecommended: true },
    { title: "Khan Academy — Algebra basics", description: "Free video lessons and practice on algebraic expressions and equations.", subjectId: subj.MTH, level: null, resourceType: "WEBSITE" as const, url: "https://www.khanacademy.org/math/algebra-basics", platform: "Khan Academy", isRecommended: true },
    { title: "Khan Academy — Biology", description: "Cells, genetics, ecology and human biology explained clearly.", subjectId: subj.BIO, level: SENIOR, resourceType: "WEBSITE" as const, url: "https://www.khanacademy.org/science/biology", platform: "Khan Academy" },
    { title: "Open Library", description: "Borrow and read thousands of books online for free.", level: null, resourceType: "LIBRARY" as const, url: "https://openlibrary.org/", platform: "Online Library" },
    { title: "PhET Interactive Simulations — Physics", description: "Interactive simulations for forces, motion, circuits and waves.", subjectId: subj.PHY, level: SENIOR, resourceType: "WEBSITE" as const, url: "https://phet.colorado.edu/en/simulations/filter?subjects=physics", platform: "PhET", isRecommended: true },
  ];
  for (const r of resources) await db.insert(resourceLinks).values({ ...r, schoolId, status: "PUBLISHED", createdBy: SYSTEM_ACTOR_ID });
  log("sample content ready");
  return { schoolId };
}

/**
 * Creates the first Super Admin from environment variables (never hard-coded).
 * The account must change its password and enrol 2FA at first sign-in.
 */
export async function seedSuperAdminFromEnv(log: (m: string) => void = () => {}) {
  const email = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.SUPERADMIN_INITIAL_PASSWORD;
  if (!email || !password) {
    log("SUPERADMIN_EMAIL / SUPERADMIN_INITIAL_PASSWORD not set — the owner completes first-time setup at /backend with SETUP_TOKEN.");
    return;
  }
  const db = getDb();
  const [existing] = await db.select({ id: users.id }).from(users).where(eq(users.userType, "SUPER_ADMIN")).limit(1);
  if (existing) {
    log("Super Admin already exists — skipped");
    return;
  }
  const check = checkPassword(password);
  if (!check.ok) throw new Error(`SUPERADMIN_INITIAL_PASSWORD rejected: ${check.errors.join(" ")}`);
  const [school] = await db.select().from(schools).where(eq(schools.isDefault, true));
  await db.insert(users).values({
    schoolId: school.id,
    email,
    passwordHash: await hashPassword(password),
    userType: "SUPER_ADMIN",
    firstName: process.env.SUPERADMIN_FIRST_NAME ?? "Super",
    lastName: process.env.SUPERADMIN_LAST_NAME ?? "Admin",
    mustChangePassword: true,
  });
  log(`Super Admin created for ${email} (password change + 2FA required at first sign-in)`);
}
