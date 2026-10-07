ALTER TABLE "activation_codes" ADD COLUMN "audience" text DEFAULT 'STUDENT' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "parent_grace_until" timestamp with time zone;--> statement-breakpoint
-- Parents who registered before parent access codes existed keep the portal for 30 more days.
UPDATE "users" SET "parent_grace_until" = now() + interval '30 days' WHERE "user_type" = 'PARENT';
