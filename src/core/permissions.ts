/**
 * Granular RBAC catalogue (§10). Super Admin implicitly holds every permission
 * plus the `super.*` capabilities that ordinary admins can never be granted.
 */

export const PERMISSIONS = {
  // Question bank
  "questions.view": { group: "Question Bank", description: "View the question bank" },
  "questions.create": { group: "Question Bank", description: "Create questions" },
  "questions.edit": { group: "Question Bank", description: "Edit questions" },
  "questions.import": { group: "Question Bank", description: "Import questions from files" },
  "questions.review": { group: "Question Bank", description: "Approve or reject questions" },
  "questions.archive": { group: "Question Bank", description: "Archive questions" },
  "questions.ai": { group: "Question Bank", description: "Generate questions with AI (always PENDING_REVIEW)" },
  "curriculum.manage": { group: "Curriculum", description: "Manage subjects, topics, subtopics and lessons" },
  "resources.manage": { group: "Curriculum", description: "Manage the Resource Centre" },
  "assignments.manage": { group: "Curriculum", description: "Create and manage assignments and classwork" },
  "learning.manage": { group: "Curriculum", description: "Manage the Picture Dictionary, idioms, clichés, phrasal verbs and learning games" },
  "content.manage": { group: "Communication", description: "Edit the homepage, announcements and public pages" },
  "parents.manage": { group: "Students & Results", description: "Generate parent/guardian link codes and manage parent accounts" },
  "premium.manage": { group: "Access Codes", description: "Generate Premium access codes and set up the international and advanced programmes" },
  // Examinations
  "exams.view": { group: "Examinations", description: "View examinations" },
  "exams.manage": { group: "Examinations", description: "Create and edit examinations" },
  "exams.publish": { group: "Examinations", description: "Publish / unpublish examinations" },
  "exams.attempts": { group: "Examinations", description: "Review attempts and suspicious activity" },
  // Students & results
  "students.view": { group: "Students & Results", description: "View students" },
  "students.manage": { group: "Students & Results", description: "Edit, suspend and reactivate students" },
  "students.security": { group: "Students & Results", description: "Force password reset & revoke student sessions" },
  "results.view": { group: "Students & Results", description: "View results" },
  "results.manage": { group: "Students & Results", description: "Remarks, release, void and reset eligible attempts" },
  "results.export": { group: "Students & Results", description: "Export results" },
  "codes.view": { group: "Access Codes", description: "View access codes" },
  "codes.generate": { group: "Access Codes", description: "Generate access codes" },
  "codes.manage": { group: "Access Codes", description: "Suspend, revoke, restore and extend access" },
  "forum.manage": { group: "Communication", description: "Moderate the student forum: rooms, messages, suspensions and forum settings" },
  "notifications.send": { group: "Communication", description: "Send announcements and notifications" },
  "analytics.view": { group: "Analytics", description: "View analytics and reports" },
} as const;

export type Permission = keyof typeof PERMISSIONS;

/** Capabilities reserved for SUPER_ADMIN — never assignable to a role. */
export const SUPER_ONLY = [
  "super.admins",
  "super.roles",
  "super.settings",
  "super.branding",
  "super.content",
  "super.audit",
  "super.security",
  "super.exports",
] as const;
export type SuperCapability = (typeof SUPER_ONLY)[number];

export const ALL_PERMISSIONS = Object.keys(PERMISSIONS) as Permission[];

export const SYSTEM_ROLES: { key: string; name: string; description: string; permissions: Permission[] }[] = [
  {
    key: "question_bank_admin",
    name: "Question Bank Administrator",
    description: "Creates, imports, reviews and curates questions and curriculum metadata.",
    permissions: [
      "questions.view",
      "questions.create",
      "questions.edit",
      "questions.import",
      "questions.review",
      "questions.archive",
      "questions.ai",
      "curriculum.manage",
    ],
  },
  {
    key: "exam_admin",
    name: "Examination Administrator",
    description: "Configures, publishes and monitors examinations.",
    permissions: ["exams.view", "exams.manage", "exams.publish", "exams.attempts", "questions.view", "results.view"],
  },
  {
    key: "student_result_admin",
    name: "Student/Result Administrator",
    description: "Manages students, results and assigned access-code operations.",
    permissions: [
      "students.view",
      "students.manage",
      "results.view",
      "results.manage",
      "results.export",
      "codes.view",
      "codes.generate",
      "parents.manage",
      "exams.attempts",
    ],
  },
  {
    key: "forum_moderator",
    name: "Forum Moderator",
    description: "Monitors the student forum, removes messages and suspends students who break the rules.",
    permissions: ["forum.manage", "students.view"],
  },
  {
    key: "primary_school_admin",
    name: "Primary School Administrator",
    description: "Runs Basic 1–Basic 6: topics, lessons, questions, assignments, examinations, study materials and the dictionary.",
    permissions: ["curriculum.manage", "questions.view", "questions.create", "questions.edit", "questions.import", "assignments.manage", "resources.manage", "learning.manage", "exams.view", "exams.manage", "students.view", "results.view"],
  },
  {
    key: "content_upload_admin",
    name: "Content Upload Administrator",
    description: "Uploads Excel workbooks (central upload and content packs), then approves and publishes what was uploaded.",
    permissions: ["curriculum.manage", "questions.view", "questions.import", "questions.review", "exams.view", "exams.manage", "exams.publish", "assignments.manage", "resources.manage", "learning.manage"],
  },
  {
    key: "study_materials_admin",
    name: "Study Materials Administrator",
    description: "Looks after study materials, the Resource Centre, the Picture Dictionary, idioms, phrasal verbs and learning games.",
    permissions: ["resources.manage", "learning.manage"],
  },
  {
    key: "homepage_content_admin",
    name: "Homepage & Announcements Administrator",
    description: "Edits the homepage, the announcement carousel and the public pages, and sends notifications.",
    permissions: ["content.manage", "notifications.send"],
  },
  {
    key: "parents_admin",
    name: "Parents & Guardians Administrator",
    description: "Generates the link codes that connect parents to their children and looks after parent accounts.",
    permissions: ["parents.manage", "students.view"],
  },
  {
    key: "access_code_admin",
    name: "Access Code Administrator",
    description: "Generates, suspends, restores and extends access codes for students.",
    permissions: ["codes.view", "codes.generate", "codes.manage", "students.view"],
  },
  {
    key: "premium_admin",
    name: "Premium & International Administrator",
    description: "Generates Premium codes and manages the International & Advanced programmes.",
    permissions: ["premium.manage", "codes.view", "codes.generate", "exams.view", "exams.manage", "questions.view", "resources.manage"],
  },
  {
    key: "reports_officer",
    name: "Reports & Analytics Officer",
    description: "Views analytics and results and exports reports. Cannot change anything.",
    permissions: ["analytics.view", "results.view", "results.export", "students.view", "exams.view"],
  },
  {
    key: "teacher",
    name: "Teacher",
    description: "Authors lessons, classwork and assignments; drafts questions for review.",
    permissions: ["curriculum.manage", "assignments.manage", "resources.manage", "learning.manage", "questions.view", "questions.create", "results.view"],
  },
];

export interface Principal {
  userType: "STUDENT" | "ADMIN" | "TEACHER" | "SUPER_ADMIN" | "PARENT";
  permissions: ReadonlySet<string>;
}

/** Accounts that work in the backend. Students and parents never do. */
export const isStaffType = (t: string) => t === "ADMIN" || t === "TEACHER" || t === "SUPER_ADMIN";

export function can(p: Principal | null | undefined, perm: Permission | SuperCapability): boolean {
  if (!p) return false;
  if (p.userType === "SUPER_ADMIN") return true;
  if ((SUPER_ONLY as readonly string[]).includes(perm)) return false;
  if (p.userType !== "ADMIN" && p.userType !== "TEACHER") return false;
  return p.permissions.has(perm);
}

/** Filters a requested permission list down to legal, assignable keys. */
export function sanitisePermissionList(keys: string[]): Permission[] {
  const legal = new Set<string>(ALL_PERMISSIONS);
  return Array.from(new Set(keys.filter((k) => legal.has(k)))) as Permission[];
}
