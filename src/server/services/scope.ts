import { and, eq, isNull, or, type SQL } from "drizzle-orm";
import type { AnyPgColumn } from "drizzle-orm/pg-core";
import { getDb, type Executor } from "../db";
import { classes, departments, students } from "../db/schema";
import { AppError } from "../errors";

/** Where a student sits in the school: their class, department and section (class level). */
export interface StudentScope {
  classId: string | null;
  departmentId: string | null;
  level: string | null;
}

export async function studentScope(userId: string, db: Executor = getDb()): Promise<StudentScope> {
  const [s] = await db
    .select({ classId: students.classId, departmentId: students.departmentId, level: classes.level })
    .from(students)
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(eq(students.userId, userId));
  return s ?? { classId: null, departmentId: null, level: null };
}

/** SQL filter: content open to all sections, or to the student's own section. */
export function sectionCond(col: AnyPgColumn, level: string | null): SQL {
  return level ? or(isNull(col), eq(col, level))! : isNull(col);
}

/**
 * The section stored on a piece of content. When it targets a class, the class's section always
 * wins (so a JSS2 exam can never be marked Senior Secondary); otherwise the chosen section, or null
 * for "all sections".
 */
export async function resolveSection(schoolId: string, classId: string | null | undefined, level: string | null | undefined, db: Executor = getDb()) {
  if (classId) {
    const [c] = await db.select({ level: classes.level }).from(classes).where(and(eq(classes.id, classId), eq(classes.schoolId, schoolId)));
    if (!c) throw new AppError("VALIDATION", "Select a valid class.", { classId: ["Select a valid class."] });
    return c.level;
  }
  return level || null;
}

/**
 * Validates a student's class + department. Departments belong to a section (SS: Science,
 * Commercial, Arts; JSS: one Junior Secondary group). When the class's section has exactly one
 * department it is assigned automatically, so JSS students never have to choose.
 */
export async function resolvePlacement(schoolId: string, classId: string, departmentId: string | null | undefined, db: Executor = getDb()) {
  const [cls] = await db
    .select({ id: classes.id, name: classes.name, level: classes.level })
    .from(classes)
    .where(and(eq(classes.id, classId), eq(classes.schoolId, schoolId), isNull(classes.archivedAt)));
  if (!cls) throw new AppError("VALIDATION", "Select a valid class.", { classId: ["Select a valid class."] });
  const options = await db
    .select({ id: departments.id })
    .from(departments)
    .where(and(eq(departments.schoolId, schoolId), isNull(departments.archivedAt), sectionCond(departments.level, cls.level)));
  if (departmentId) {
    if (!options.some((o) => o.id === departmentId)) {
      throw new AppError("VALIDATION", `That department is not available for ${cls.name}.`, { departmentId: [`Choose a department offered in ${cls.name}.`] });
    }
    return { classId: cls.id, departmentId, level: cls.level };
  }
  if (options.length === 1) return { classId: cls.id, departmentId: options[0].id, level: cls.level };
  if (options.length === 0) return { classId: cls.id, departmentId: null, level: cls.level };
  throw new AppError("VALIDATION", "Select your department.", { departmentId: ["Select your department."] });
}
