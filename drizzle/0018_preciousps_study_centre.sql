CREATE TABLE "fsc_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"book_id" uuid NOT NULL,
	"unit_id" uuid,
	"kind" text NOT NULL,
	"score" real NOT NULL,
	"total" real NOT NULL,
	"percentage" real NOT NULL,
	"answers" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "fsc_books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"class_id" uuid,
	"subject_id" uuid,
	"term_id" uuid,
	"title" text NOT NULL,
	"subtitle" text,
	"intro_html" text DEFAULT '' NOT NULL,
	"source_asset_id" uuid,
	"source_name" text,
	"review" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"notices" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"status" text DEFAULT 'DRAFT' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "fsc_units" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"book_id" uuid NOT NULL,
	"position" integer NOT NULL,
	"title" text NOT NULL,
	"subtitle" text,
	"week" text,
	"body_html" text DEFAULT '' NOT NULL,
	"advanced" text,
	"advanced_answer" text,
	"classwork" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"assignment" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "fsc_attempts" ADD CONSTRAINT "fsc_attempts_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_attempts" ADD CONSTRAINT "fsc_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_attempts" ADD CONSTRAINT "fsc_attempts_book_id_fsc_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."fsc_books"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_attempts" ADD CONSTRAINT "fsc_attempts_unit_id_fsc_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."fsc_units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_books" ADD CONSTRAINT "fsc_books_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_books" ADD CONSTRAINT "fsc_books_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_books" ADD CONSTRAINT "fsc_books_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_books" ADD CONSTRAINT "fsc_books_term_id_terms_id_fk" FOREIGN KEY ("term_id") REFERENCES "public"."terms"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fsc_units" ADD CONSTRAINT "fsc_units_book_id_fsc_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."fsc_books"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "fsc_attempts_user_book_idx" ON "fsc_attempts" USING btree ("user_id","book_id");--> statement-breakpoint
CREATE INDEX "fsc_attempts_book_idx" ON "fsc_attempts" USING btree ("book_id","kind","created_at");--> statement-breakpoint
CREATE INDEX "fsc_books_school_class_idx" ON "fsc_books" USING btree ("school_id","class_id","status");--> statement-breakpoint
CREATE INDEX "fsc_units_book_idx" ON "fsc_units" USING btree ("book_id","position");