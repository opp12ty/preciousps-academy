ALTER TYPE "public"."exam_type" ADD VALUE 'BECE';--> statement-breakpoint
ALTER TABLE "assignments" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "departments" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "examinations" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "resource_links" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "topics" ADD COLUMN "level" text;--> statement-breakpoint
-- Everything created before sections existed is Senior Secondary content (or follows its class).
UPDATE "departments" SET "level" = 'SENIOR_SECONDARY' WHERE "level" IS NULL;--> statement-breakpoint
UPDATE "topics" t SET "level" = COALESCE((SELECT c."level" FROM "classes" c WHERE c."id" = t."class_id"), 'SENIOR_SECONDARY') WHERE t."level" IS NULL;--> statement-breakpoint
UPDATE "questions" q SET "level" = COALESCE((SELECT c."level" FROM "classes" c WHERE c."id" = q."class_id"), 'SENIOR_SECONDARY') WHERE q."level" IS NULL;--> statement-breakpoint
UPDATE "examinations" e SET "level" = COALESCE((SELECT c."level" FROM "classes" c WHERE c."id" = e."class_id"), 'SENIOR_SECONDARY') WHERE e."level" IS NULL;--> statement-breakpoint
UPDATE "assignments" a SET "level" = COALESCE((SELECT c."level" FROM "classes" c WHERE c."id" = a."class_id"), 'SENIOR_SECONDARY') WHERE a."level" IS NULL;--> statement-breakpoint
UPDATE "resource_links" r SET "level" = COALESCE((SELECT c."level" FROM "classes" c WHERE c."id" = r."class_id"), 'SENIOR_SECONDARY') WHERE r."level" IS NULL;--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_level_chk" CHECK ("level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "departments" ADD CONSTRAINT "departments_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "topics" ADD CONSTRAINT "topics_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "examinations" ADD CONSTRAINT "examinations_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
ALTER TABLE "resource_links" ADD CONSTRAINT "resource_links_level_chk" CHECK ("level" IS NULL OR "level" IN ('PRIMARY','JUNIOR_SECONDARY','SENIOR_SECONDARY','OTHER'));--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "questions_pool_level_idx" ON "questions" ("subject_id", "status", "level");
