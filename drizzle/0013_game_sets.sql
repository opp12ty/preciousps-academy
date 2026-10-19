CREATE TABLE "game_sets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"kind" text NOT NULL,
	"audience" text DEFAULT 'STUDENT' NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"items" text NOT NULL,
	"level" text,
	"class_id" uuid,
	"status" "content_status" DEFAULT 'DRAFT' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "game_sets" ADD CONSTRAINT "game_sets_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_sets" ADD CONSTRAINT "game_sets_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "game_sets_idx" ON "game_sets" USING btree ("school_id","status","sort_order");