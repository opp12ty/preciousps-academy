ALTER TABLE "experts" ADD COLUMN "audience" text DEFAULT 'PARENT' NOT NULL;--> statement-breakpoint
ALTER TABLE "experts" ADD COLUMN "website" text;--> statement-breakpoint
ALTER TABLE "experts" ADD COLUMN "testimonials" text DEFAULT '' NOT NULL;