-- Parent report links (read-only, expiring, revocable) and public enquiries from the website contact form.
CREATE TABLE "parent_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL REFERENCES "schools"("id") ON DELETE restrict,
	"user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
	"token_hash" text NOT NULL UNIQUE,
	"label" text,
	"expires_at" timestamp with time zone NOT NULL,
	"revoked_at" timestamp with time zone,
	"last_viewed_at" timestamp with time zone,
	"views" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);--> statement-breakpoint
CREATE INDEX "parent_links_user_idx" ON "parent_links" ("user_id");--> statement-breakpoint
CREATE TABLE "enquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL REFERENCES "schools"("id") ON DELETE restrict,
	"name" text NOT NULL,
	"email" text,
	"phone" text NOT NULL,
	"topic" text DEFAULT 'GENERAL' NOT NULL,
	"message" text NOT NULL,
	"status" text DEFAULT 'NEW' NOT NULL,
	"note" text,
	"ip" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"handled_at" timestamp with time zone,
	"handled_by" uuid REFERENCES "users"("id") ON DELETE set null,
	CONSTRAINT "enquiries_status_chk" CHECK ("status" IN ('NEW','IN_PROGRESS','RESOLVED','SPAM'))
);--> statement-breakpoint
CREATE INDEX "enquiries_inbox_idx" ON "enquiries" ("school_id","status","created_at" DESC);
