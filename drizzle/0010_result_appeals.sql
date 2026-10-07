CREATE TABLE "result_appeals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"result_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"questions" text,
	"reason" text NOT NULL,
	"status" text DEFAULT 'OPEN' NOT NULL,
	"response" text,
	"decided_by" uuid,
	"decided_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "result_appeals" ADD CONSTRAINT "result_appeals_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "result_appeals" ADD CONSTRAINT "result_appeals_result_id_results_id_fk" FOREIGN KEY ("result_id") REFERENCES "public"."results"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "result_appeals" ADD CONSTRAINT "result_appeals_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "result_appeals_once_uq" ON "result_appeals" USING btree ("result_id");--> statement-breakpoint
CREATE INDEX "result_appeals_status_idx" ON "result_appeals" USING btree ("school_id","status");