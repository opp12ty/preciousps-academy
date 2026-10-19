CREATE TABLE "holiday_progress" (
	"student_user_id" uuid NOT NULL,
	"item_key" text NOT NULL,
	"note" text,
	"done_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "holiday_progress_student_user_id_item_key_pk" PRIMARY KEY("student_user_id","item_key")
);
--> statement-breakpoint
CREATE TABLE "holiday_tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"created_by" uuid,
	"set_by" text NOT NULL,
	"student_user_id" uuid,
	"class_id" uuid,
	"level" text,
	"holiday" text NOT NULL,
	"year" integer DEFAULT 0 NOT NULL,
	"kind" text DEFAULT 'ACTIVITY' NOT NULL,
	"title" text NOT NULL,
	"instructions" text,
	"link" text,
	"due_on" text,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "holiday_progress" ADD CONSTRAINT "holiday_progress_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holiday_tasks" ADD CONSTRAINT "holiday_tasks_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holiday_tasks" ADD CONSTRAINT "holiday_tasks_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holiday_tasks" ADD CONSTRAINT "holiday_tasks_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holiday_tasks" ADD CONSTRAINT "holiday_tasks_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "holiday_tasks_idx" ON "holiday_tasks" USING btree ("school_id","holiday","year");--> statement-breakpoint
CREATE INDEX "holiday_tasks_student_idx" ON "holiday_tasks" USING btree ("student_user_id");