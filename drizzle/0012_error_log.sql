CREATE TABLE "error_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"digest" text,
	"message" text NOT NULL,
	"stack" text,
	"path" text,
	"method" text,
	"route_path" text,
	"route_type" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "error_logs_time_idx" ON "error_logs" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "error_logs_digest_idx" ON "error_logs" USING btree ("digest");