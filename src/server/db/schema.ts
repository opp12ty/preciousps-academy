/**
 * Precious PS Academy — PostgreSQL schema (Drizzle ORM).
 *
 * Design notes
 * - Every tenant-owned table carries `school_id` so future schools are isolated
 *   without a redesign (multi-school architecture, §67).
 * - All critical timestamps are `timestamptz` (stored UTC, rendered Africa/Lagos).
 * - Examination attempts snapshot the exam + question versions they were built
 *   from, so later edits never change historical results (§39).
 * - Audit logs are append-only; UPDATE/DELETE is blocked by a trigger created in
 *   the migration (see drizzle/0001_integrity.sql).
 */
import { sql } from "drizzle-orm";
import {
  boolean,
  customType,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  real,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType: () => "bytea",
});

const ts = (name: string) => timestamp(name, { withTimezone: true, mode: "date" });
const createdAt = () => ts("created_at").notNull().defaultNow();
const updatedAt = () => ts("updated_at").notNull().defaultNow();
const id = () => uuid("id").primaryKey().defaultRandom();
const schoolRef = () =>
  uuid("school_id")
    .notNull()
    .references(() => schools.id, { onDelete: "restrict" });

/* ------------------------------------------------------------------ enums */

export const userTypeEnum = pgEnum("user_type", ["STUDENT", "ADMIN", "TEACHER", "SUPER_ADMIN", "PARENT"]);
export const accountStatusEnum = pgEnum("account_status", ["ACTIVE", "SUSPENDED", "PENDING"]);
export const codeStatusEnum = pgEnum("code_status", ["UNUSED", "ACTIVE", "EXPIRED", "REVOKED", "SUSPENDED"]);
export const accessStatusEnum = pgEnum("access_status", ["ACTIVE", "EXPIRED", "SUSPENDED", "REVOKED", "ENDED"]);
export const contentStatusEnum = pgEnum("content_status", ["DRAFT", "PUBLISHED", "ARCHIVED"]);
export const questionStatusEnum = pgEnum("question_status", [
  "DRAFT",
  "PENDING_REVIEW",
  "APPROVED",
  "REJECTED",
  "ARCHIVED",
]);
export const questionTypeEnum = pgEnum("question_type", [
  "MCQ",
  "TRUE_FALSE",
  "MULTI_SELECT",
  "NUMERIC",
  "FILL_BLANK",
  "MATCHING",
]);
export const difficultyEnum = pgEnum("difficulty", ["EASY", "MEDIUM", "HARD"]);
export const examTypeEnum = pgEnum("exam_type", [
  "PRACTICE",
  "MOCK",
  "SCHOOL_EXAM",
  "CLASS_TEST",
  "CONTINUOUS_ASSESSMENT",
  "JAMB",
  "WAEC",
  "NECO",
  "CUSTOM",
  "BECE",
  "IELTS",
  "TOEFL",
  "SAT",
  "CHECKPOINT",
  "COMMON_ENTRANCE",
  "JUPEB",
  "IJMB",
  "PreciousPS_EXAM",
]);
export const resultVisibilityEnum = pgEnum("result_visibility", ["IMMEDIATE", "AFTER_RELEASE", "HIDDEN"]);
export const attemptStatusEnum = pgEnum("attempt_status", ["IN_PROGRESS", "SUBMITTED", "AUTO_SUBMITTED", "VOIDED"]);
export const copyrightStatusEnum = pgEnum("copyright_status", [
  "ORIGINAL",
  "TEACHER_AUTHORED",
  "LICENSED",
  "AUTHORIZED",
  "AI_GENERATED",
  "UNKNOWN",
]);
export const resourceTypeEnum = pgEnum("resource_type", [
  "VIDEO",
  "AUDIO",
  "DOCUMENT",
  "WEBSITE",
  "LIBRARY",
  "PRESENTATION",
  "OTHER",
]);
export const severityEnum = pgEnum("severity", ["INFO", "LOW", "MEDIUM", "HIGH", "CRITICAL"]);
export const progressStatusEnum = pgEnum("progress_status", ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

/* ---------------------------------------------------------------- tenancy */

export const schools = pgTable("schools", {
  id: id(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  country: text("country").notNull().default("Nigeria"),
  currency: text("currency").notNull().default("NGN"),
  timezone: text("timezone").notNull().default("Africa/Lagos"),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

/* ------------------------------------------------------ identity & access */

export const users = pgTable(
  "users",
  {
    id: id(),
    schoolId: schoolRef(),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
    userType: userTypeEnum("user_type").notNull(),
    firstName: text("first_name").notNull(),
    middleName: text("middle_name"),
    lastName: text("last_name").notNull(),
    phone: text("phone"),
    avatarAssetId: uuid("avatar_asset_id"),
    status: accountStatusEnum("status").notNull().default("ACTIVE"),
    mustChangePassword: boolean("must_change_password").notNull().default(false),
    totpSecretEnc: text("totp_secret_enc"),
    totpEnabled: boolean("totp_enabled").notNull().default(false),
    failedLoginCount: integer("failed_login_count").notNull().default(0),
    lockedUntil: ts("locked_until"),
    lastLoginAt: ts("last_login_at"),
    passwordChangedAt: ts("password_changed_at"),
    locale: text("locale").notNull().default("en"),
    /** Parents registered before parent access codes were introduced keep the portal until this moment. */
    parentGraceUntil: ts("parent_grace_until"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    deletedAt: ts("deleted_at"),
  },
  (t) => [
    uniqueIndex("users_email_uq").on(sql`lower(${t.email})`),
    index("users_school_type_idx").on(t.schoolId, t.userType),
    index("users_name_idx").on(t.lastName, t.firstName),
  ],
);

export const students = pgTable(
  "students",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    schoolId: schoolRef(),
    studentNumber: text("student_number").notNull(),
    username: text("username"),
    classId: uuid("class_id").references(() => classes.id),
    departmentId: uuid("department_id").references(() => departments.id),
    schoolName: text("school_name"),
    dateOfBirth: text("date_of_birth"),
    gender: text("gender"),
    state: text("state"),
    country: text("country").default("Nigeria"),
    allowConcurrentCodes: boolean("allow_concurrent_codes").notNull().default(false),
    /** STUDENT | SCHOOL — a school account uses the student area for its examination classes. */
    accountKind: text("account_kind").notNull().default("STUDENT"),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("students_number_uq").on(t.schoolId, sql`lower(${t.studentNumber})`),
    uniqueIndex("students_username_uq").on(t.schoolId, sql`lower(${t.username})`),
    index("students_class_dept_idx").on(t.classId, t.departmentId),
  ],
);

/** Parent portal is feature-flagged; the link table exists so no redesign is needed later (§70). */
export const guardianLinks = pgTable(
  "guardian_links",
  {
    parentUserId: uuid("parent_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    studentUserId: uuid("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    relationship: text("relationship"),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.parentUserId, t.studentUserId] })],
);

export const recoveryCodes = pgTable("recovery_codes", {
  id: id(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  codeHash: text("code_hash").notNull(),
  usedAt: ts("used_at"),
  createdAt: createdAt(),
});

export const sessions = pgTable(
  "sessions",
  {
    id: id(),
    tokenHash: text("token_hash").notNull().unique(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    mfaPending: boolean("mfa_pending").notNull().default(false),
    ip: text("ip"),
    userAgent: text("user_agent"),
    createdAt: createdAt(),
    lastSeenAt: ts("last_seen_at").notNull().defaultNow(),
    expiresAt: ts("expires_at").notNull(),
    revokedAt: ts("revoked_at"),
    revokedReason: text("revoked_reason"),
  },
  (t) => [index("sessions_user_idx").on(t.userId, t.revokedAt)],
);

export const passwordResetTokens = pgTable("password_reset_tokens", {
  id: id(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull().unique(),
  createdBy: uuid("created_by"),
  expiresAt: ts("expires_at").notNull(),
  usedAt: ts("used_at"),
  createdAt: createdAt(),
});

export const roles = pgTable(
  "roles",
  {
    id: id(),
    schoolId: schoolRef(),
    key: text("key").notNull(),
    name: text("name").notNull(),
    description: text("description"),
    isSystem: boolean("is_system").notNull().default(false),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("roles_key_uq").on(t.schoolId, t.key)],
);

export const permissions = pgTable("permissions", {
  key: text("key").primaryKey(),
  group: text("group").notNull(),
  description: text("description").notNull(),
});

export const rolePermissions = pgTable(
  "role_permissions",
  {
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id, { onDelete: "cascade" }),
    permissionKey: text("permission_key")
      .notNull()
      .references(() => permissions.key, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.roleId, t.permissionKey] })],
);

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id, { onDelete: "cascade" }),
    assignedBy: uuid("assigned_by"),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.roleId] })],
);

/* --------------------------------------------------------------- academics */

export const departments = pgTable(
  "departments",
  {
    id: id(),
    schoolId: schoolRef(),
    name: text("name").notNull(),
    code: text("code").notNull(),
    description: text("description"),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    sortOrder: integer("sort_order").notNull().default(0),
    archivedAt: ts("archived_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("departments_code_uq").on(t.schoolId, t.code)],
);

export const classes = pgTable(
  "classes",
  {
    id: id(),
    schoolId: schoolRef(),
    name: text("name").notNull(),
    code: text("code").notNull(),
    level: text("level").notNull().default("SENIOR_SECONDARY"),
    sortOrder: integer("sort_order").notNull().default(0),
    archivedAt: ts("archived_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("classes_code_uq").on(t.schoolId, t.code)],
);

export const terms = pgTable(
  "terms",
  {
    id: id(),
    schoolId: schoolRef(),
    name: text("name").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    startsOn: text("starts_on"),
    endsOn: text("ends_on"),
    archivedAt: ts("archived_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("terms_name_uq").on(t.schoolId, t.name)],
);

export const subjects = pgTable(
  "subjects",
  {
    id: id(),
    schoolId: schoolRef(),
    name: text("name").notNull(),
    code: text("code").notNull(),
    description: text("description"),
    sortOrder: integer("sort_order").notNull().default(0),
    archivedAt: ts("archived_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("subjects_code_uq").on(t.schoolId, t.code)],
);

export const departmentSubjects = pgTable(
  "department_subjects",
  {
    departmentId: uuid("department_id")
      .notNull()
      .references(() => departments.id, { onDelete: "cascade" }),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    isCore: boolean("is_core").notNull().default(false),
  },
  (t) => [primaryKey({ columns: [t.departmentId, t.subjectId] })],
);

export const topics = pgTable(
  "topics",
  {
    id: id(),
    schoolId: schoolRef(),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    classId: uuid("class_id").references(() => classes.id),
    termId: uuid("term_id").references(() => terms.id),
    departmentId: uuid("department_id").references(() => departments.id),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    title: text("title").notNull(),
    description: text("description"),
    syllabusRef: text("syllabus_ref"),
    sortOrder: integer("sort_order").notNull().default(0),
    isMandatory: boolean("is_mandatory").notNull().default(true),
    prerequisiteTopicId: uuid("prerequisite_topic_id"),
    status: contentStatusEnum("status").notNull().default("PUBLISHED"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("topics_subject_idx").on(t.subjectId, t.classId, t.sortOrder)],
);

export const subtopics = pgTable(
  "subtopics",
  {
    id: id(),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: createdAt(),
  },
  (t) => [index("subtopics_topic_idx").on(t.topicId)],
);

export const lessons = pgTable(
  "lessons",
  {
    id: id(),
    schoolId: schoolRef(),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    subtopicId: uuid("subtopic_id").references(() => subtopics.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    summary: text("summary"),
    /** Markdown-like body; supports $math$ (KaTeX) and ```examples```. */
    body: text("body").notNull().default(""),
    examples: text("examples"),
    videoUrl: text("video_url"),
    audioUrl: text("audio_url"),
    estimatedMinutes: integer("estimated_minutes").notNull().default(20),
    sortOrder: integer("sort_order").notNull().default(0),
    isMandatory: boolean("is_mandatory").notNull().default(true),
    prerequisiteLessonId: uuid("prerequisite_lesson_id"),
    /** null => use global mastery threshold setting. */
    masteryThreshold: integer("mastery_threshold"),
    isLocked: boolean("is_locked").notNull().default(false),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    version: integer("version").notNull().default(1),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("lessons_topic_idx").on(t.topicId, t.sortOrder)],
);

export const lessonResources = pgTable("lesson_resources", {
  id: id(),
  lessonId: uuid("lesson_id")
    .notNull()
    .references(() => lessons.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  kind: resourceTypeEnum("kind").notNull(),
  url: text("url"),
  assetId: uuid("asset_id"),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: createdAt(),
});

/** Classwork = questions attached to a lesson and auto-marked. */
export const lessonQuestions = pgTable(
  "lesson_questions",
  {
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.lessonId, t.questionId] })],
);

export const learningProgress = pgTable(
  "learning_progress",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    status: progressStatusEnum("status").notNull().default("IN_PROGRESS"),
    bestPercentage: real("best_percentage"),
    attempts: integer("attempts").notNull().default(0),
    startedAt: ts("started_at").notNull().defaultNow(),
    completedAt: ts("completed_at"),
    overriddenBy: uuid("overridden_by"),
    updatedAt: updatedAt(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
);

export const learningAttempts = pgTable(
  "learning_attempts",
  {
    id: id(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    attemptNumber: integer("attempt_number").notNull(),
    answers: jsonb("answers").notNull(),
    score: real("score").notNull(),
    totalMarks: real("total_marks").notNull(),
    percentage: real("percentage").notNull(),
    passed: boolean("passed").notNull(),
    timeSpentSec: integer("time_spent_sec"),
    feedback: jsonb("feedback"),
    createdAt: createdAt(),
  },
  (t) => [
    index("learning_attempts_user_idx").on(t.userId, t.lessonId),
    uniqueIndex("learning_attempts_uq").on(t.userId, t.lessonId, t.attemptNumber),
  ],
);

/* ------------------------------------------------------------ question bank */

export const questions = pgTable(
  "questions",
  {
    id: id(),
    schoolId: schoolRef(),
    /** Human-friendly reference, e.g. MTH-000123. */
    ref: text("ref").notNull(),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id),
    classId: uuid("class_id").references(() => classes.id),
    departmentId: uuid("department_id").references(() => departments.id),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    topicId: uuid("topic_id").references(() => topics.id, { onDelete: "set null" }),
    subtopicId: uuid("subtopic_id").references(() => subtopics.id, { onDelete: "set null" }),
    year: integer("year"),
    examType: examTypeEnum("exam_type"),
    difficulty: difficultyEnum("difficulty").notNull().default("MEDIUM"),
    type: questionTypeEnum("type").notNull().default("MCQ"),
    stem: text("stem").notNull(),
    imageAssetId: uuid("image_asset_id"),
    explanation: text("explanation"),
    marks: real("marks").notNull().default(1),
    /** For NUMERIC/FILL_BLANK: accepted answers & tolerance. */
    answerSpec: jsonb("answer_spec"),
    source: text("source"),
    copyrightStatus: copyrightStatusEnum("copyright_status").notNull().default("ORIGINAL"),
    licenseInfo: text("license_info"),
    status: questionStatusEnum("status").notNull().default("DRAFT"),
    version: integer("version").notNull().default(1),
    contentHash: text("content_hash").notNull(),
    aiGenerated: boolean("ai_generated").notNull().default(false),
    aiRequestId: uuid("ai_request_id"),
    importId: uuid("import_id"),
    reviewNote: text("review_note"),
    reviewedBy: uuid("reviewed_by"),
    reviewedAt: ts("reviewed_at"),
    createdBy: uuid("created_by"),
    modifiedBy: uuid("modified_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    // denormalised analytics (§41) — maintained transactionally on submission
    timesAttempted: integer("times_attempted").notNull().default(0),
    timesCorrect: integer("times_correct").notNull().default(0),
    timesUnanswered: integer("times_unanswered").notNull().default(0),
    totalResponseMs: integer("total_response_ms").notNull().default(0),
    timesFlagged: integer("times_flagged").notNull().default(0),
  },
  (t) => [
    uniqueIndex("questions_ref_uq").on(t.schoolId, t.ref),
    uniqueIndex("questions_hash_uq").on(t.schoolId, t.contentHash),
    index("questions_pool_idx").on(t.schoolId, t.subjectId, t.status, t.classId, t.year),
    index("questions_topic_idx").on(t.topicId),
    index("questions_status_idx").on(t.status, t.createdAt),
  ],
);

export const questionOptions = pgTable(
  "question_options",
  {
    id: id(),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    label: text("label").notNull(),
    text: text("text").notNull(),
    /** For MATCHING: the right-hand item this option pairs with. */
    matchText: text("match_text"),
    isCorrect: boolean("is_correct").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [index("question_options_q_idx").on(t.questionId, t.sortOrder)],
);

/** Immutable snapshot of each question version; attempts reference these. */
export const questionVersions = pgTable(
  "question_versions",
  {
    id: id(),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    version: integer("version").notNull(),
    snapshot: jsonb("snapshot").notNull(),
    changedBy: uuid("changed_by"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("question_versions_uq").on(t.questionId, t.version)],
);

export const questionImports = pgTable("question_imports", {
  id: id(),
  schoolId: schoolRef(),
  fileName: text("file_name").notNull(),
  fileType: text("file_type").notNull(),
  fileSize: integer("file_size").notNull(),
  status: text("status").notNull().default("PREVIEW"), // PREVIEW | COMMITTED | FAILED | RESOURCE
  totalItems: integer("total_items").notNull().default(0),
  validItems: integer("valid_items").notNull().default(0),
  importedItems: integer("imported_items").notNull().default(0),
  report: jsonb("report"),
  defaults: jsonb("defaults"),
  createdBy: uuid("created_by").notNull(),
  createdAt: createdAt(),
  committedAt: ts("committed_at"),
});

export const aiQuestionRequests = pgTable("ai_question_requests", {
  id: id(),
  schoolId: schoolRef(),
  provider: text("provider").notNull(),
  model: text("model").notNull(),
  promptVersion: text("prompt_version").notNull(),
  params: jsonb("params").notNull(),
  status: text("status").notNull(), // SUCCEEDED | FAILED
  generatedCount: integer("generated_count").notNull().default(0),
  rejectedCount: integer("rejected_count").notNull().default(0),
  error: text("error"),
  createdBy: uuid("created_by").notNull(),
  createdAt: createdAt(),
});

/* --------------------------------------------------------------- examinations */

export const examinations = pgTable(
  "examinations",
  {
    id: id(),
    schoolId: schoolRef(),
    title: text("title").notNull(),
    description: text("description"),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id),
    classId: uuid("class_id").references(() => classes.id),
    departmentId: uuid("department_id").references(() => departments.id),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    year: integer("year"),
    examType: examTypeEnum("exam_type").notNull().default("MOCK"),
    questionCount: integer("question_count").notNull(),
    durationMinutes: integer("duration_minutes").notNull(),
    totalMarks: real("total_marks"),
    passMark: real("pass_mark").notNull().default(50),
    randomizeQuestions: boolean("randomize_questions").notNull().default(true),
    randomizeOptions: boolean("randomize_options").notNull().default(true),
    negativeMarking: real("negative_marking").notNull().default(0),
    startsAt: ts("starts_at"),
    endsAt: ts("ends_at"),
    maxAttempts: integer("max_attempts").notNull().default(1),
    /** Premium examinations (international and advanced) need a Premium access code. */
    isPremium: boolean("is_premium").notNull().default(false),
    requiresAccess: boolean("requires_access").notNull().default(true),
    resultVisibility: resultVisibilityEnum("result_visibility").notNull().default("IMMEDIATE"),
    showExplanations: boolean("show_explanations").notNull().default(true),
    /** Pool filters: restrict to year / topics / difficulty when drawing questions. */
    poolFilter: jsonb("pool_filter"),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    resultsReleasedAt: ts("results_released_at"),
    version: integer("version").notNull().default(1),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("examinations_school_status_idx").on(t.schoolId, t.status, t.examType)],
);

/** Optional fixed question list; when empty the exam draws from the approved pool. */
export const examinationQuestions = pgTable(
  "examination_questions",
  {
    examinationId: uuid("examination_id")
      .notNull()
      .references(() => examinations.id, { onDelete: "cascade" }),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.examinationId, t.questionId] })],
);

export const examinationAttempts = pgTable(
  "examination_attempts",
  {
    id: id(),
    schoolId: schoolRef(),
    examinationId: uuid("examination_id")
      .notNull()
      .references(() => examinations.id),
    examinationVersion: integer("examination_version").notNull(),
    /** Frozen exam configuration at start time. */
    examSnapshot: jsonb("exam_snapshot").notNull(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    attemptNumber: integer("attempt_number").notNull(),
    status: attemptStatusEnum("status").notNull().default("IN_PROGRESS"),
    startedAt: ts("started_at").notNull().defaultNow(),
    deadlineAt: ts("deadline_at").notNull(),
    submittedAt: ts("submitted_at"),
    submissionMethod: text("submission_method"), // MANUAL | TIMEOUT | ADMIN
    clientSessionId: uuid("client_session_id"),
    ip: text("ip"),
    userAgent: text("user_agent"),
    suspiciousEvents: integer("suspicious_events").notNull().default(0),
    voidReason: text("void_reason"),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("attempts_number_uq").on(t.examinationId, t.userId, t.attemptNumber),
    // one live attempt per student per exam — enforced by the database
    uniqueIndex("attempts_one_live_uq")
      .on(t.examinationId, t.userId)
      .where(sql`${t.status} = 'IN_PROGRESS'`),
    index("attempts_user_idx").on(t.userId, t.createdAt),
    index("attempts_deadline_idx").on(t.status, t.deadlineAt),
  ],
);

export const attemptQuestions = pgTable(
  "attempt_questions",
  {
    id: id(),
    attemptId: uuid("attempt_id")
      .notNull()
      .references(() => examinationAttempts.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id),
    questionVersion: integer("question_version").notNull(),
    /**
     * Frozen question as presented: stem, options in DISPLAY order with their
     * stable option ids, correct option ids, marks. Never sent raw to the client.
     */
    snapshot: jsonb("snapshot").notNull(),
    marks: real("marks").notNull(),
  },
  (t) => [
    uniqueIndex("attempt_questions_pos_uq").on(t.attemptId, t.position),
    uniqueIndex("attempt_questions_q_uq").on(t.attemptId, t.questionId),
  ],
);

export const attemptAnswers = pgTable(
  "attempt_answers",
  {
    attemptQuestionId: uuid("attempt_question_id")
      .primaryKey()
      .references(() => attemptQuestions.id, { onDelete: "cascade" }),
    attemptId: uuid("attempt_id")
      .notNull()
      .references(() => examinationAttempts.id, { onDelete: "cascade" }),
    response: jsonb("response"),
    flagged: boolean("flagged").notNull().default(false),
    responseMs: integer("response_ms").notNull().default(0),
    isCorrect: boolean("is_correct"),
    marksAwarded: real("marks_awarded"),
    updatedAt: updatedAt(),
  },
  (t) => [index("attempt_answers_attempt_idx").on(t.attemptId)],
);

export const attemptEvents = pgTable(
  "attempt_events",
  {
    id: id(),
    attemptId: uuid("attempt_id")
      .notNull()
      .references(() => examinationAttempts.id, { onDelete: "cascade" }),
    type: text("type").notNull(), // TAB_HIDDEN | WINDOW_BLUR | FULLSCREEN_EXIT | COPY | NEW_SESSION | RESUMED
    detail: jsonb("detail"),
    createdAt: createdAt(),
  },
  (t) => [index("attempt_events_attempt_idx").on(t.attemptId)],
);

export const results = pgTable(
  "results",
  {
    id: id(),
    schoolId: schoolRef(),
    attemptId: uuid("attempt_id")
      .notNull()
      .unique()
      .references(() => examinationAttempts.id),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    examinationId: uuid("examination_id")
      .notNull()
      .references(() => examinations.id),
    score: real("score").notNull(),
    totalMarks: real("total_marks").notNull(),
    percentage: real("percentage").notNull(),
    grade: text("grade").notNull(),
    passed: boolean("passed").notNull(),
    correctCount: integer("correct_count").notNull(),
    incorrectCount: integer("incorrect_count").notNull(),
    unansweredCount: integer("unanswered_count").notNull(),
    timeUsedSec: integer("time_used_sec").notNull(),
    attemptNumber: integer("attempt_number").notNull(),
    gradingScale: jsonb("grading_scale").notNull(),
    remarks: text("remarks"),
    isVoided: boolean("is_voided").notNull().default(false),
    voidReason: text("void_reason"),
    releasedAt: ts("released_at"),
    verificationCode: text("verification_code").notNull().unique(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [
    index("results_user_idx").on(t.userId, t.createdAt),
    index("results_exam_idx").on(t.examinationId, t.percentage),
  ],
);

export const certificates = pgTable("certificates", {
  id: id(),
  schoolId: schoolRef(),
  certificateNumber: text("certificate_number").notNull().unique(),
  resultId: uuid("result_id")
    .notNull()
    .unique()
    .references(() => results.id),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  issuedBy: uuid("issued_by"),
  issuedAt: createdAt(),
  revokedAt: ts("revoked_at"),
});

/* -------------------------------------------------------------- assignments */

export const assignments = pgTable(
  "assignments",
  {
    id: id(),
    schoolId: schoolRef(),
    title: text("title").notNull(),
    instructions: text("instructions"),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id),
    classId: uuid("class_id").references(() => classes.id),
    departmentId: uuid("department_id").references(() => departments.id),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    topicId: uuid("topic_id").references(() => topics.id, { onDelete: "set null" }),
    lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
    /** CLASSWORK | ASSIGNMENT; essay/file/rubric types are future-ready via `mode`. */
    kind: text("kind").notNull().default("ASSIGNMENT"),
    mode: text("mode").notNull().default("OBJECTIVE"),
    startsAt: ts("starts_at"),
    dueAt: ts("due_at"),
    attemptLimit: integer("attempt_limit").notNull().default(1),
    passMark: real("pass_mark").notNull().default(50),
    autoMark: boolean("auto_mark").notNull().default(true),
    showResult: boolean("show_result").notNull().default(true),
    showExplanations: boolean("show_explanations").notNull().default(true),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("assignments_scope_idx").on(t.schoolId, t.status, t.classId, t.departmentId)],
);

export const assignmentQuestions = pgTable(
  "assignment_questions",
  {
    assignmentId: uuid("assignment_id")
      .notNull()
      .references(() => assignments.id, { onDelete: "cascade" }),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questions.id),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.assignmentId, t.questionId] })],
);

export const assignmentAttempts = pgTable(
  "assignment_attempts",
  {
    id: id(),
    assignmentId: uuid("assignment_id")
      .notNull()
      .references(() => assignments.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    attemptNumber: integer("attempt_number").notNull(),
    answers: jsonb("answers").notNull(),
    score: real("score").notNull(),
    totalMarks: real("total_marks").notNull(),
    percentage: real("percentage").notNull(),
    passed: boolean("passed").notNull(),
    feedback: jsonb("feedback"),
    /** Future manual grading. */
    gradedBy: uuid("graded_by"),
    submittedAt: createdAt(),
  },
  (t) => [uniqueIndex("assignment_attempts_uq").on(t.assignmentId, t.userId, t.attemptNumber)],
);

/* ------------------------------------------------------- access-code engine */

export const activationCodes = pgTable(
  "activation_codes",
  {
    id: id(),
    schoolId: schoolRef(),
    /** HMAC-SHA256 of the normalised code — used for lookup. */
    codeHash: text("code_hash").notNull().unique(),
    /** AES-256-GCM encrypted code so Super Admin can re-issue/export it. */
    codeEnc: text("code_enc").notNull(),
    codeSuffix: text("code_suffix").notNull(),
    status: codeStatusEnum("status").notNull().default("UNUSED"),
    durationDays: integer("duration_days").notNull(),
    /** STANDARD | PREMIUM — Premium also opens the international and advanced programmes. */
    tier: text("tier").notNull().default("STANDARD"),
    /** STUDENT | PARENT — who may activate the code. A parent code opens the parent portal and nothing else. */
    audience: text("audience").notNull().default("STUDENT"),
    /** Feature keys this code opens (src/core/features.ts). Null = the standard set, so older codes keep working. */
    features: jsonb("features").$type<string[]>(),
    /** Knowledge Hub limits for this code; null = the school's default. */
    hubSessionMinutes: integer("hub_session_minutes"),
    hubCooldownMinutes: integer("hub_cooldown_minutes"),
    hubUnlimited: boolean("hub_unlimited").notNull().default(false),
    batchId: uuid("batch_id"),
    note: text("note"),
    createdBy: uuid("created_by").notNull(),
    createdAt: createdAt(),
    activatedBy: uuid("activated_by").references(() => users.id),
    activatedAt: ts("activated_at"),
    statusChangedAt: ts("status_changed_at"),
    statusReason: text("status_reason"),
  },
  (t) => [
    index("codes_status_idx").on(t.schoolId, t.status, t.createdAt),
    index("codes_student_idx").on(t.activatedBy),
    index("codes_batch_idx").on(t.batchId),
  ],
);

export const studentAccessPeriods = pgTable(
  "student_access_periods",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    codeId: uuid("code_id")
      .notNull()
      .unique()
      .references(() => activationCodes.id),
    status: accessStatusEnum("status").notNull().default("ACTIVE"),
    activatedAt: ts("activated_at").notNull(),
    originalExpiresAt: ts("original_expires_at").notNull(),
    currentExpiresAt: ts("current_expires_at").notNull(),
    durationDays: integer("duration_days").notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("access_user_idx").on(t.userId, t.status, t.currentExpiresAt)],
);

export const accessExtensions = pgTable(
  "access_extensions",
  {
    id: id(),
    periodId: uuid("period_id")
      .notNull()
      .references(() => studentAccessPeriods.id, { onDelete: "cascade" }),
    action: text("action").notNull(), // EXTEND | REDUCE | SET_EXPIRY | END | SUSPEND | RESTORE | REVOKE | REACTIVATE
    previousExpiresAt: ts("previous_expires_at").notNull(),
    newExpiresAt: ts("new_expires_at").notNull(),
    deltaDays: integer("delta_days"),
    reason: text("reason").notNull(),
    adminId: uuid("admin_id").notNull(),
    createdAt: createdAt(),
  },
  (t) => [index("access_ext_period_idx").on(t.periodId)],
);

/* ------------------------------------------------------ resources & content */

export const resourceLinks = pgTable(
  "resource_links",
  {
    id: id(),
    schoolId: schoolRef(),
    title: text("title").notNull(),
    description: text("description"),
    subjectId: uuid("subject_id").references(() => subjects.id),
    departmentId: uuid("department_id").references(() => departments.id),
    classId: uuid("class_id").references(() => classes.id),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY | …); null = all sections. */
    level: text("level"),
    topicId: uuid("topic_id").references(() => topics.id, { onDelete: "set null" }),
    resourceType: resourceTypeEnum("resource_type").notNull(),
    url: text("url"),
    assetId: uuid("asset_id"),
    thumbnailUrl: text("thumbnail_url"),
    platform: text("platform"),
    durationMinutes: integer("duration_minutes"),
    isRecommended: boolean("is_recommended").notNull().default(false),
    /** Premium materials need a Premium access code. */
    isPremium: boolean("is_premium").notNull().default(false),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("resources_scope_idx").on(t.schoolId, t.status, t.subjectId)],
);

/** Binary assets (logo, hero image, signatures, uploads) stored in Postgres. */
export const assets = pgTable("assets", {
  id: id(),
  schoolId: schoolRef(),
  kind: text("kind").notNull(), // BRAND | IMAGE | DOCUMENT | AVATAR | QUESTION_IMAGE
  fileName: text("file_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  sha256: text("sha256").notNull(),
  data: bytea("data").notNull(),
  isPublic: boolean("is_public").notNull().default(false),
  uploadedBy: uuid("uploaded_by"),
  createdAt: createdAt(),
});

/** CMS: every editable text/image block on the public site (§64). */
export const contentBlocks = pgTable(
  "content_blocks",
  {
    id: id(),
    schoolId: schoolRef(),
    key: text("key").notNull(),
    value: jsonb("value").notNull(),
    version: integer("version").notNull().default(1),
    updatedBy: uuid("updated_by"),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("content_blocks_key_uq").on(t.schoolId, t.key)],
);

export const contentVersions = pgTable("content_versions", {
  id: id(),
  blockId: uuid("block_id")
    .notNull()
    .references(() => contentBlocks.id, { onDelete: "cascade" }),
  version: integer("version").notNull(),
  value: jsonb("value").notNull(),
  updatedBy: uuid("updated_by"),
  createdAt: createdAt(),
});

export const settings = pgTable(
  "settings",
  {
    schoolId: schoolRef(),
    key: text("key").notNull(),
    value: jsonb("value").notNull(),
    updatedBy: uuid("updated_by"),
    updatedAt: updatedAt(),
  },
  (t) => [primaryKey({ columns: [t.schoolId, t.key] })],
);

/* ----------------------------------------------------------- notifications */

export const notifications = pgTable(
  "notifications",
  {
    id: id(),
    schoolId: schoolRef(),
    /** null userId + audience => broadcast announcement. */
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    audience: jsonb("audience"),
    category: text("category").notNull(), // EXAM | RESULT | ACCESS | LESSON | ASSIGNMENT | ANNOUNCEMENT | SECURITY
    title: text("title").notNull(),
    body: text("body").notNull(),
    link: text("link"),
    readAt: ts("read_at"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("notifications_user_idx").on(t.userId, t.createdAt)],
);

export const notificationReads = pgTable(
  "notification_reads",
  {
    notificationId: uuid("notification_id")
      .notNull()
      .references(() => notifications.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    readAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.notificationId, t.userId] })],
);

export const notificationPreferences = pgTable(
  "notification_preferences",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    category: text("category").notNull(),
    inApp: boolean("in_app").notNull().default(true),
    email: boolean("email").notNull().default(true),
    push: boolean("push").notNull().default(false),
    sms: boolean("sms").notNull().default(false),
  },
  (t) => [primaryKey({ columns: [t.userId, t.category] })],
);

/** Outbound email queue. Delivered by the configured provider, or held for review. */
export const emailOutbox = pgTable("email_outbox", {
  id: id(),
  schoolId: schoolRef(),
  toEmail: text("to_email").notNull(),
  subject: text("subject").notNull(),
  html: text("html").notNull(),
  status: text("status").notNull().default("QUEUED"), // QUEUED | SENT | FAILED | HELD
  error: text("error"),
  createdAt: createdAt(),
  sentAt: ts("sent_at"),
});

/* ---------------------------------------------------- audit & security */

export const auditLogs = pgTable(
  "audit_logs",
  {
    id: id(),
    schoolId: uuid("school_id"),
    actorId: uuid("actor_id"),
    actorType: text("actor_type"),
    action: text("action").notNull(),
    entityType: text("entity_type"),
    entityId: text("entity_id"),
    summary: text("summary"),
    metadata: jsonb("metadata"),
    ip: text("ip"),
    userAgent: text("user_agent"),
    createdAt: createdAt(),
  },
  (t) => [
    index("audit_created_idx").on(t.createdAt),
    index("audit_actor_idx").on(t.actorId, t.createdAt),
    index("audit_entity_idx").on(t.entityType, t.entityId),
    index("audit_action_idx").on(t.action, t.createdAt),
  ],
);

export const securityEvents = pgTable(
  "security_events",
  {
    id: id(),
    schoolId: uuid("school_id"),
    userId: uuid("user_id"),
    type: text("type").notNull(),
    severity: severityEnum("severity").notNull().default("LOW"),
    detail: jsonb("detail"),
    ip: text("ip"),
    userAgent: text("user_agent"),
    resolvedAt: ts("resolved_at"),
    resolvedBy: uuid("resolved_by"),
    createdAt: createdAt(),
  },
  (t) => [
    index("security_created_idx").on(t.createdAt),
    index("security_type_idx").on(t.type, t.createdAt),
    index("security_user_idx").on(t.userId, t.createdAt),
  ],
);

/** Fixed-window counters for rate limiting — works across serverless instances. */
export const rateLimits = pgTable("rate_limits", {
  key: text("key").primaryKey(),
  windowStart: ts("window_start").notNull(),
  count: integer("count").notNull().default(0),
});

export const exportHistory = pgTable("export_history", {
  id: id(),
  schoolId: schoolRef(),
  kind: text("kind").notNull(),
  format: text("format").notNull(),
  rowCount: integer("row_count").notNull(),
  filters: jsonb("filters"),
  createdBy: uuid("created_by").notNull(),
  createdAt: createdAt(),
});

/* ------------------------------------------------------------------ forum */

/** Discussion rooms. A room is open to one section (JSS / SS) or to a single class. */
export const forumRooms = pgTable(
  "forum_rooms",
  {
    id: id(),
    schoolId: schoolRef(),
    name: text("name").notNull(),
    description: text("description"),
    /** ADMISSIONS | EXAMINATIONS | SUBJECTS | STUDY_HELP | GENERAL */
    topic: text("topic").notNull().default("GENERAL"),
    /** Section (JUNIOR_SECONDARY | SENIOR_SECONDARY); null = every section. */
    level: text("level"),
    classId: uuid("class_id").references(() => classes.id),
    isLocked: boolean("is_locked").notNull().default(false),
    /** STUDENT or PARENT: the two communities never mix. */
    audience: text("audience").notNull().default("STUDENT"),
    sortOrder: integer("sort_order").notNull().default(0),
    archivedAt: ts("archived_at"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("forum_rooms_school_idx").on(t.schoolId, t.archivedAt)],
);

export const forumMessages = pgTable(
  "forum_messages",
  {
    id: id(),
    schoolId: schoolRef(),
    roomId: uuid("room_id")
      .notNull()
      .references(() => forumRooms.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    body: text("body").notNull(),
    /** VISIBLE | DELETED (removed by staff) | BLOCKED (refused by the safety filter; staff only). */
    status: text("status").notNull().default("VISIBLE"),
    /** Filter reason for BLOCKED, or the moderator's note for DELETED. */
    reason: text("reason"),
    moderatedBy: uuid("moderated_by"),
    moderatedAt: ts("moderated_at"),
    createdAt: createdAt(),
  },
  (t) => [index("forum_messages_room_idx").on(t.roomId, t.createdAt), index("forum_messages_user_idx").on(t.userId, t.createdAt)],
);

/** A student barred from the forum. `until` null = until a moderator lifts it. */
export const forumSuspensions = pgTable(
  "forum_suspensions",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    reason: text("reason").notNull(),
    until: ts("until"),
    /** Null when the system suspended the student automatically. */
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    liftedAt: ts("lifted_at"),
    liftedBy: uuid("lifted_by"),
  },
  (t) => [index("forum_suspensions_user_idx").on(t.userId, t.liftedAt)],
);

/** Seconds a student has spent in the forum on one calendar day (school time zone). */
export const forumUsage = pgTable(
  "forum_usage",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: text("day").notNull(),
    seconds: integer("seconds").notNull().default(0),
    lastSeenAt: ts("last_seen_at").notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.day] })],
);

/* ------------------------------------------------------------ learning hub */

/** Picture Dictionary, idioms, clichés and phrasal verbs shown under Study Materials. */
export const wordEntries = pgTable(
  "word_entries",
  {
    id: id(),
    schoolId: schoolRef(),
    /** WORD | IDIOM | CLICHE | PHRASAL_VERB */
    kind: text("kind").notNull(),
    term: text("term").notNull(),
    partOfSpeech: text("part_of_speech"),
    meaning: text("meaning").notNull(),
    example: text("example"),
    /** Picture symbol (emoji) shown with the entry. */
    picture: text("picture"),
    imageAssetId: uuid("image_asset_id"),
    /** Section; null = every section. */
    level: text("level"),
    /** One class only; null = every class in the section. */
    classId: uuid("class_id").references(() => classes.id),
    status: contentStatusEnum("status").notNull().default("PUBLISHED"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("word_entries_term_uq").on(t.schoolId, t.kind, sql`lower(${t.term})`), index("word_entries_kind_idx").on(t.schoolId, t.kind, t.status)],
);

/* ------------------------------------------------------ parents / guardians */

/** One-time code staff give a parent or guardian to link one child to their account. */
export const guardianCodes = pgTable(
  "guardian_codes",
  {
    id: id(),
    schoolId: schoolRef(),
    code: text("code").notNull().unique(),
    studentUserId: uuid("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdBy: uuid("created_by").notNull(),
    createdAt: createdAt(),
    expiresAt: ts("expires_at").notNull(),
    usedBy: uuid("used_by").references(() => users.id),
    usedAt: ts("used_at"),
    revokedAt: ts("revoked_at"),
  },
  (t) => [index("guardian_codes_student_idx").on(t.studentUserId)],
);

/* ------------------------------------------------- parent ↔ child link requests */

/**
 * A parent asks to be linked to a student. Nothing about the student is shown to the parent until
 * the request is ACCEPTED under the school's policy (child consent and/or school verification);
 * only then is a row written to guardian_links.
 */
export const guardianRequests = pgTable(
  "guardian_requests",
  {
    id: id(),
    schoolId: schoolRef(),
    parentUserId: uuid("parent_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    studentUserId: uuid("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    relationship: text("relationship"),
    /** PENDING | ACCEPTED | REJECTED | REVOKED | EXPIRED | BLOCKED */
    status: text("status").notNull().default("PENDING"),
    /** Null until the student decides. */
    childAccepted: boolean("child_accepted"),
    childRespondedAt: ts("child_responded_at"),
    /** Null until a school administrator decides. */
    adminApproved: boolean("admin_approved"),
    adminId: uuid("admin_id"),
    adminAt: ts("admin_at"),
    requestedAt: ts("requested_at").notNull().defaultNow(),
    respondedAt: ts("responded_at"),
    revokedAt: ts("revoked_at"),
    revokedBy: uuid("revoked_by"),
    reason: text("reason"),
    expiresAt: ts("expires_at").notNull(),
    updatedAt: updatedAt(),
  },
  (t) => [index("guardian_requests_parent_idx").on(t.parentUserId, t.status), index("guardian_requests_student_idx").on(t.studentUserId, t.status)],
);

/* --------------------------------------------------- knowledge and learning hubs */

/** One content engine for the student Knowledge Hub and the parent Learning Hub and Psychology Library. */
export const hubArticles = pgTable(
  "hub_articles",
  {
    id: id(),
    schoolId: schoolRef(),
    /** STUDENT | PARENT */
    audience: text("audience").notNull(),
    /** KNOWLEDGE (students) · LEARNING | PSYCHOLOGY | TEMPERAMENT (parents) */
    section: text("section").notNull(),
    category: text("category").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    body: text("body").notNull(),
    keyPoints: text("key_points"),
    /** Parent activity or learner task. */
    activity: text("activity"),
    sources: text("sources"),
    /** Section of the school the article suits; null = everyone. */
    level: text("level"),
    /** SCIENCE | COMMERCIAL | ARTS; null = general. */
    stream: text("stream"),
    imageAssetId: uuid("image_asset_id"),
    /** DRAFT | REVIEW | APPROVED | PUBLISHED | ARCHIVED */
    status: text("status").notNull().default("DRAFT"),
    version: integer("version").notNull().default(1),
    authorId: uuid("author_id"),
    reviewerId: uuid("reviewer_id"),
    publishedAt: ts("published_at"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("hub_articles_title_uq").on(t.schoolId, t.audience, sql`lower(${t.title})`), index("hub_articles_list_idx").on(t.schoolId, t.audience, t.status)],
);

export const hubArticleVersions = pgTable(
  "hub_article_versions",
  {
    id: id(),
    articleId: uuid("article_id")
      .notNull()
      .references(() => hubArticles.id, { onDelete: "cascade" }),
    version: integer("version").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    body: text("body").notNull(),
    editorId: uuid("editor_id"),
    createdAt: createdAt(),
  },
  (t) => [index("hub_article_versions_idx").on(t.articleId, t.version)],
);

/** A timed Knowledge Hub visit. The server alone decides when it ends and when the next may begin. */
export const hubSessions = pgTable(
  "hub_sessions",
  {
    id: id(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    startedAt: ts("started_at").notNull().defaultNow(),
    endsAt: ts("ends_at").notNull(),
    /** When the next session may start. */
    nextAt: ts("next_at").notNull(),
  },
  (t) => [index("hub_sessions_user_idx").on(t.userId, t.endsAt)],
);

/** Questions for Quiz Arena, Daily Challenge, Culture Challenge and the parent games. */
export const hubQuestions = pgTable(
  "hub_questions",
  {
    id: id(),
    schoolId: schoolRef(),
    audience: text("audience").notNull(),
    category: text("category").notNull(),
    level: text("level"),
    stream: text("stream"),
    difficulty: text("difficulty").notNull().default("MEDIUM"),
    stem: text("stem").notNull(),
    options: jsonb("options").$type<string[]>().notNull(),
    /** Index of the correct option. */
    answer: integer("answer").notNull(),
    explanation: text("explanation"),
    status: text("status").notNull().default("PUBLISHED"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("hub_questions_stem_uq").on(t.schoolId, t.audience, sql`md5(lower(${t.stem}))`), index("hub_questions_pick_idx").on(t.schoolId, t.audience, t.status, t.category)],
);

export const quizAttempts = pgTable(
  "quiz_attempts",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    mode: text("mode").notNull(),
    /** Question ids in the order asked. */
    questionIds: jsonb("question_ids").$type<string[]>().notNull(),
    /** The option chosen for each question; null = not yet answered. */
    answers: jsonb("answers").$type<(number | null)[]>().notNull(),
    score: integer("score").notNull().default(0),
    day: text("day"),
    startedAt: ts("started_at").notNull().defaultNow(),
    finishedAt: ts("finished_at"),
  },
  (t) => [index("quiz_attempts_user_idx").on(t.userId, t.mode, t.startedAt)],
);

/* ------------------------------------------------------ parent study timetable */

export const studySchedules = pgTable(
  "study_schedules",
  {
    id: id(),
    schoolId: schoolRef(),
    parentUserId: uuid("parent_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    studentUserId: uuid("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** ACTIVITY (timetable entry) | FLAG (supportive academic flag) */
    kind: text("kind").notNull().default("ACTIVITY"),
    title: text("title").notNull(),
    note: text("note"),
    /** YYYY-MM-DD in school time. */
    date: text("date").notNull(),
    startTime: text("start_time"),
    endTime: text("end_time"),
    /** LOW | NORMAL | HIGH */
    priority: text("priority").notNull().default("NORMAL"),
    /** ONCE | DAILY | WEEKLY */
    repeat: text("repeat").notNull().default("ONCE"),
    /** SCHEDULED | ACKNOWLEDGED | COMPLETED */
    status: text("status").notNull().default("SCHEDULED"),
    acknowledgedAt: ts("acknowledged_at"),
    completedAt: ts("completed_at"),
    createdAt: createdAt(),
  },
  (t) => [index("study_schedules_student_idx").on(t.studentUserId, t.date), index("study_schedules_parent_idx").on(t.parentUserId, t.studentUserId)],
);

/* -------------------------------------------------------------- community reports */

export const forumReports = pgTable(
  "forum_reports",
  {
    id: id(),
    schoolId: schoolRef(),
    messageId: uuid("message_id")
      .notNull()
      .references(() => forumMessages.id, { onDelete: "cascade" }),
    reporterId: uuid("reporter_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    reason: text("reason").notNull(),
    detail: text("detail"),
    /** OPEN | RESOLVED | DISMISSED */
    status: text("status").notNull().default("OPEN"),
    resolvedBy: uuid("resolved_by"),
    resolvedAt: ts("resolved_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("forum_reports_once_uq").on(t.messageId, t.reporterId), index("forum_reports_status_idx").on(t.schoolId, t.status)],
);

/* ------------------------------------------------------------------ promotion */

/** One row per student per academic session: the move to the next class, or the decision to repeat. */
export const promotions = pgTable(
  "promotions",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    fromClassId: uuid("from_class_id")
      .notNull()
      .references(() => classes.id),
    toClassId: uuid("to_class_id")
      .notNull()
      .references(() => classes.id),
    toDepartmentId: uuid("to_department_id").references(() => departments.id),
    /** Academic session, e.g. "2026/2027". */
    session: text("session").notNull(),
    /** PENDING | APPROVED | REJECTED | REPEAT */
    status: text("status").notNull().default("PENDING"),
    /** REQUEST (student asked) | SELF (self-promotion allowed) | BULK (staff promoted the class) */
    method: text("method").notNull().default("REQUEST"),
    note: text("note"),
    requestedAt: ts("requested_at").notNull().defaultNow(),
    decidedBy: uuid("decided_by"),
    decidedAt: ts("decided_at"),
  },
  (t) => [uniqueIndex("promotions_once_uq").on(t.userId, t.session), index("promotions_status_idx").on(t.schoolId, t.status)],
);

/* -------------------------------------------------------------- result appeals */

/** A student's request to have one released result looked at again. One appeal per result. */
export const resultAppeals = pgTable(
  "result_appeals",
  {
    id: id(),
    schoolId: schoolRef(),
    resultId: uuid("result_id")
      .notNull()
      .references(() => results.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** Question numbers the student is unhappy with, as typed (optional). */
    questions: text("questions"),
    reason: text("reason").notNull(),
    /** OPEN | UPHELD | REJECTED */
    status: text("status").notNull().default("OPEN"),
    response: text("response"),
    decidedBy: uuid("decided_by"),
    decidedAt: ts("decided_at"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("result_appeals_once_uq").on(t.resultId), index("result_appeals_status_idx").on(t.schoolId, t.status)],
);

/* ---------------------------------------------------------- school accounts */

/** A school that registered to prepare its examination classes. One row per school account. */
export const schoolProfiles = pgTable("school_profiles", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  schoolId: schoolRef(),
  /** Generated at registration (e.g. FSC-4K7Q2M); also accepted at sign-in. */
  schoolCode: text("school_code").notNull().unique(),
  schoolName: text("school_name").notNull(),
  address: text("address").notNull(),
  adminName: text("admin_name").notNull(),
  /** PRIMARY | SECONDARY */
  category: text("category").notNull(),
  createdAt: createdAt(),
});

/* ------------------------------------------------------------- topic audio */

/** MP3 explanations a teacher attaches to a topic. The sound itself is stored in parts. */
export const topicAudio = pgTable(
  "topic_audio",
  {
    id: id(),
    schoolId: schoolRef(),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    fileName: text("file_name").notNull(),
    size: integer("size").notNull().default(0),
    /** False until every part has arrived; unfinished uploads are never shown to students. */
    ready: boolean("ready").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("topic_audio_topic_idx").on(t.topicId, t.sortOrder)],
);

export const topicAudioParts = pgTable(
  "topic_audio_parts",
  {
    audioId: uuid("audio_id")
      .notNull()
      .references(() => topicAudio.id, { onDelete: "cascade" }),
    seq: integer("seq").notNull(),
    /** Byte position of this part in the whole file. */
    offset: integer("offset").notNull(),
    size: integer("size").notNull(),
    data: bytea("data").notNull(),
  },
  (t) => [primaryKey({ columns: [t.audioId, t.seq] })],
);

/* ------------------------------------------------------ rewards and loyalty */

/** One winner: best in a class, or best in a subject within a class, for a term or a whole session. */
export const awards = pgTable(
  "awards",
  {
    id: id(),
    schoolId: schoolRef(),
    session: text("session").notNull(),
    /** Term name, or null for the whole session. */
    term: text("term"),
    /** CLASS | SUBJECT */
    scope: text("scope").notNull(),
    classId: uuid("class_id")
      .notNull()
      .references(() => classes.id, { onDelete: "cascade" }),
    subjectId: uuid("subject_id").references(() => subjects.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    position: integer("position").notNull().default(1),
    average: real("average").notNull(),
    papers: integer("papers").notNull().default(0),
    /** What the student receives, written by the school (optional). */
    reward: text("reward"),
    publishedAt: ts("published_at"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("awards_period_idx").on(t.schoolId, t.session, t.term), index("awards_user_idx").on(t.userId)],
);

/** Points a student earns for steady work; shown as a loyalty level. */
export const loyaltyPoints = pgTable(
  "loyalty_points",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    points: integer("points").notNull(),
    reason: text("reason").notNull(),
    /** Stops the same event being counted twice (e.g. "result:<id>"). */
    ref: text("ref").notNull(),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("loyalty_ref_uq").on(t.userId, t.ref), index("loyalty_user_idx").on(t.userId)],
);

/* ------------------------------------------------- family events and experts */

/** Bonding activities the school arranges for families: picnic, cinema, holiday, games, hangouts. */
export const familyEvents = pgTable(
  "family_events",
  {
    id: id(),
    schoolId: schoolRef(),
    /** PICNIC | CINEMA | HOLIDAY | GAMES | HANGOUT | WORKSHOP | OTHER */
    kind: text("kind").notNull().default("OTHER"),
    title: text("title").notNull(),
    description: text("description").notNull().default(""),
    venue: text("venue"),
    startsAt: ts("starts_at"),
    endsAt: ts("ends_at"),
    cost: text("cost"),
    contact: text("contact"),
    capacity: integer("capacity"),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("family_events_idx").on(t.schoolId, t.status, t.startsAt)],
);

export const familyEventRsvps = pgTable(
  "family_event_rsvps",
  {
    eventId: uuid("event_id")
      .notNull()
      .references(() => familyEvents.id, { onDelete: "cascade" }),
    parentUserId: uuid("parent_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    adults: integer("adults").notNull().default(1),
    children: integer("children").notNull().default(0),
    note: text("note"),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.parentUserId] })],
);

/** "Meet an Expert": counsellors, doctors, lawyers and other professionals parents can contact. */
export const experts = pgTable(
  "experts",
  {
    id: id(),
    schoolId: schoolRef(),
    /** COUNSELLOR | DOCTOR | LAWYER | FINANCE | EDUCATION | TECHNOLOGY | OTHER */
    profession: text("profession").notNull().default("OTHER"),
    name: text("name").notNull(),
    title: text("title"),
    /** What this expert helps with: topics, one per line. */
    topics: text("topics").notNull().default(""),
    bio: text("bio").notNull().default(""),
    phone: text("phone"),
    email: text("email"),
    availability: text("availability"),
    /** PARENT | STUDENT | BOTH: who sees this expert. */
    audience: text("audience").notNull().default("PARENT"),
    website: text("website"),
    /** Feedback from people this expert has helped, one per line, typed in by staff. */
    testimonials: text("testimonials").notNull().default(""),
    sortOrder: integer("sort_order").notNull().default(0),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("experts_idx").on(t.schoolId, t.status, t.sortOrder)],
);

/* --------------------------------------------------------------- error log */

/** Server errors as they happen, with the reference number shown to the user on the error page. */
export const errorLogs = pgTable(
  "error_logs",
  {
    id: id(),
    /** The "Reference" on the error page. */
    digest: text("digest"),
    message: text("message").notNull(),
    stack: text("stack"),
    path: text("path"),
    method: text("method"),
    routePath: text("route_path"),
    routeType: text("route_type"),
    createdAt: createdAt(),
  },
  (t) => [index("error_logs_time_idx").on(t.createdAt), index("error_logs_digest_idx").on(t.digest)],
);

/* --------------------------------------------------------------- game sets */

/** A game the school made in the backend: a word search, a spelling game, a matching game or riddles. */
export const gameSets = pgTable(
  "game_sets",
  {
    id: id(),
    schoolId: schoolRef(),
    /** WORD_SEARCH | HANGMAN | MATCH | RIDDLE */
    kind: text("kind").notNull(),
    /** STUDENT | PARENT | BOTH */
    audience: text("audience").notNull().default("STUDENT"),
    title: text("title").notNull(),
    description: text("description"),
    /** One item per line, written "word = clue", "term = meaning" or "riddle = answer". */
    items: text("items").notNull(),
    /** Section the game is for; null = everyone. */
    level: text("level"),
    classId: uuid("class_id").references(() => classes.id, { onDelete: "set null" }),
    status: contentStatusEnum("status").notNull().default("DRAFT"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("game_sets_idx").on(t.schoolId, t.status, t.sortOrder)],
);

/* --------------------------------------------------------- holiday programme */

/**
 * A holiday task set by a parent (for one child) or by the school (for a class or section).
 * Holidays: CHRISTMAS (after First Term), EASTER (after Second Term), LONG (after Third Term).
 */
export const holidayTasks = pgTable(
  "holiday_tasks",
  {
    id: id(),
    schoolId: schoolRef(),
    /** Null for the built-in Precious PS activities loaded on deploy. */
    createdBy: uuid("created_by").references(() => users.id, { onDelete: "cascade" }),
    /** PARENT | SCHOOL */
    setBy: text("set_by").notNull(),
    /** One child (parent tasks); null for school tasks. */
    studentUserId: uuid("student_user_id").references(() => users.id, { onDelete: "cascade" }),
    /** School tasks: one class, or a whole section when only level is set, or everyone. */
    classId: uuid("class_id").references(() => classes.id, { onDelete: "set null" }),
    level: text("level"),
    holiday: text("holiday").notNull(),
    /** 0 = every year (the built-in programme and repeating school tasks). */
    year: integer("year").notNull().default(0),
    /** REVISION | NEXT_TERM | READING | PROJECT | ACTIVITY | CHORE */
    kind: text("kind").notNull().default("ACTIVITY"),
    title: text("title").notNull(),
    instructions: text("instructions"),
    link: text("link"),
    dueOn: text("due_on"),
    active: boolean("active").notNull().default(true),
    createdAt: createdAt(),
  },
  (t) => [index("holiday_tasks_idx").on(t.schoolId, t.holiday, t.year), index("holiday_tasks_student_idx").on(t.studentUserId)],
);

/** What a student has ticked off: a set task ("task:<id>") or a built-in activity ("act:<holiday>-<year>-<code>"). */
export const holidayProgress = pgTable(
  "holiday_progress",
  {
    studentUserId: uuid("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    itemKey: text("item_key").notNull(),
    note: text("note"),
    doneAt: ts("done_at").notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.studentUserId, t.itemKey] })],
);

/* ---------------------------------------------------------------- ideas box */

/** A suggestion from a student, parent or school account, answered by staff in the backend. */
export const suggestions = pgTable(
  "suggestions",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    /** STUDENT | PARENT | SCHOOL */
    role: text("role").notNull(),
    /** LEARNING | CONTENT | GAMES | DESIGN | PROBLEM | OTHER */
    category: text("category").notNull().default("OTHER"),
    text: text("text").notNull(),
    /** NEW | PLANNED | DONE | DECLINED */
    status: text("status").notNull().default("NEW"),
    reply: text("reply"),
    repliedAt: ts("replied_at"),
    createdAt: createdAt(),
  },
  (t) => [index("suggestions_idx").on(t.schoolId, t.status, t.createdAt)],
);

/* ---------------------------------------------------------------- e-books and study planner */

/** A learner has read a topic's chapter in the e-book (Study Materials step of the learning path). */
export const ebookReads = pgTable(
  "ebook_reads",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
    readAt: ts("read_at").notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.topicId] })],
);

/** A learner's own study plan: what to study on which day, ticked when done. */
export const studyPlans = pgTable(
  "study_plans",
  {
    id: id(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: text("day").notNull(),
    subjectId: uuid("subject_id").references(() => subjects.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    minutes: integer("minutes").notNull().default(30),
    doneAt: ts("done_at"),
    createdAt: createdAt(),
  },
  (t) => [index("study_plans_user_day_idx").on(t.userId, t.day)],
);

/* ---------------------------------------------------------------- Precious PS Study Centre (imported e-books) */

/** A question of a Precious PS Study Centre unit: written answers are marked against the model answer. */
export interface FscTheoryQuestion { q: string; a: string; /** Multiple choice: the options (the answer is one of them). */ options?: string[] }
/** A Term Review CBT question of a Precious PS Study Centre e-book. */
export interface FscCbtQuestion { stem: string; options: { label: string; text: string }[]; answer: string; explanation?: string }

/**
 * An e-book the Admin uploaded to the Precious PS Study Centre (Word, PDF or PowerPoint), split into units.
 * Separate from school work: it never reaches report cards, only Rewards & Loyalty and the Precious PS Top 3.
 */
export const fscBooks = pgTable(
  "fsc_books",
  {
    id: id(),
    schoolId: schoolRef(),
    classId: uuid("class_id").references(() => classes.id, { onDelete: "set null" }),
    subjectId: uuid("subject_id").references(() => subjects.id, { onDelete: "set null" }),
    termId: uuid("term_id").references(() => terms.id, { onDelete: "set null" }),
    /** EBOOK (units with work) or STORY (a Precious PS story book, in chapters). */
    kind: text("kind").notNull().default("EBOOK"),
    title: text("title").notNull(),
    subtitle: text("subtitle"),
    introHtml: text("intro_html").notNull().default(""),
    sourceAssetId: uuid("source_asset_id"),
    sourceName: text("source_name"),
    review: jsonb("review").$type<FscCbtQuestion[]>().notNull().default([]),
    notices: jsonb("notices").$type<string[]>().notNull().default([]),
    status: text("status").notNull().default("DRAFT"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
    updatedAt: ts("updated_at").notNull().defaultNow(),
  },
  (t) => [index("fsc_books_school_class_idx").on(t.schoolId, t.classId, t.status)],
);

export const fscUnits = pgTable(
  "fsc_units",
  {
    id: id(),
    bookId: uuid("book_id")
      .notNull()
      .references(() => fscBooks.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    title: text("title").notNull(),
    subtitle: text("subtitle"),
    week: text("week"),
    bodyHtml: text("body_html").notNull().default(""),
    /** Lesson notes in the platform's rich-text format (maths, diagrams), for books made from the content packs. */
    bodyMd: text("body_md"),
    advanced: text("advanced"),
    advancedAnswer: text("advanced_answer"),
    classwork: jsonb("classwork").$type<FscTheoryQuestion[]>().notNull().default([]),
    assignment: jsonb("assignment").$type<FscTheoryQuestion[]>().notNull().default([]),
  },
  (t) => [index("fsc_units_book_idx").on(t.bookId, t.position)],
);

/** Every submission of a Precious PS Study Centre classwork, assignment or Term Review (the first one counts for the Top 3). */
export const fscAttempts = pgTable(
  "fsc_attempts",
  {
    id: id(),
    schoolId: schoolRef(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    bookId: uuid("book_id")
      .notNull()
      .references(() => fscBooks.id, { onDelete: "cascade" }),
    unitId: uuid("unit_id").references(() => fscUnits.id, { onDelete: "cascade" }),
    kind: text("kind").notNull(),
    score: real("score").notNull(),
    total: real("total").notNull(),
    percentage: real("percentage").notNull(),
    answers: jsonb("answers").notNull(),
    createdAt: createdAt(),
  },
  (t) => [index("fsc_attempts_user_book_idx").on(t.userId, t.bookId), index("fsc_attempts_book_idx").on(t.bookId, t.kind, t.createdAt)],
);

/** A prescribed literature text for JAMB (UTME), uploaded by the Admin as a PDF with its examination year. */
export const jambTexts = pgTable(
  "jamb_texts",
  {
    id: id(),
    schoolId: schoolRef(),
    title: text("title").notNull(),
    author: text("author"),
    /** The UTME year the text is prescribed for. */
    year: integer("year").notNull(),
    genre: text("genre").notNull().default("PROSE"),
    assetId: uuid("asset_id").notNull(),
    status: text("status").notNull().default("PUBLISHED"),
    createdBy: uuid("created_by"),
    createdAt: createdAt(),
  },
  (t) => [index("jamb_texts_school_year_idx").on(t.schoolId, t.year)],
);
