ALTER TYPE "public"."exam_type" ADD VALUE 'IELTS';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'TOEFL';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'SAT';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'CHECKPOINT';--> statement-breakpoint
CREATE TABLE "guardian_codes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"code" text NOT NULL,
	"student_user_id" uuid NOT NULL,
	"created_by" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"used_by" uuid,
	"used_at" timestamp with time zone,
	"revoked_at" timestamp with time zone,
	CONSTRAINT "guardian_codes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "word_entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"kind" text NOT NULL,
	"term" text NOT NULL,
	"part_of_speech" text,
	"meaning" text NOT NULL,
	"example" text,
	"picture" text,
	"image_asset_id" uuid,
	"level" text,
	"class_id" uuid,
	"status" "content_status" DEFAULT 'PUBLISHED' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "activation_codes" ADD COLUMN "tier" text DEFAULT 'STANDARD' NOT NULL;--> statement-breakpoint
ALTER TABLE "examinations" ADD COLUMN "is_premium" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "resource_links" ADD COLUMN "is_premium" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "guardian_codes" ADD CONSTRAINT "guardian_codes_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_codes" ADD CONSTRAINT "guardian_codes_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_codes" ADD CONSTRAINT "guardian_codes_used_by_users_id_fk" FOREIGN KEY ("used_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "word_entries" ADD CONSTRAINT "word_entries_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "word_entries" ADD CONSTRAINT "word_entries_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "guardian_codes_student_idx" ON "guardian_codes" USING btree ("student_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "word_entries_term_uq" ON "word_entries" USING btree ("school_id","kind",lower("term"));--> statement-breakpoint
CREATE INDEX "word_entries_kind_idx" ON "word_entries" USING btree ("school_id","kind","status");