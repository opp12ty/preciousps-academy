CREATE TABLE "forum_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"message_id" uuid NOT NULL,
	"reporter_id" uuid NOT NULL,
	"reason" text NOT NULL,
	"detail" text,
	"status" text DEFAULT 'OPEN' NOT NULL,
	"resolved_by" uuid,
	"resolved_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "guardian_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"parent_user_id" uuid NOT NULL,
	"student_user_id" uuid NOT NULL,
	"relationship" text,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"child_accepted" boolean,
	"child_responded_at" timestamp with time zone,
	"admin_approved" boolean,
	"admin_id" uuid,
	"admin_at" timestamp with time zone,
	"requested_at" timestamp with time zone DEFAULT now() NOT NULL,
	"responded_at" timestamp with time zone,
	"revoked_at" timestamp with time zone,
	"revoked_by" uuid,
	"reason" text,
	"expires_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hub_article_versions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"article_id" uuid NOT NULL,
	"version" integer NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"body" text NOT NULL,
	"editor_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hub_articles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"audience" text NOT NULL,
	"section" text NOT NULL,
	"category" text NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"body" text NOT NULL,
	"key_points" text,
	"activity" text,
	"sources" text,
	"level" text,
	"stream" text,
	"image_asset_id" uuid,
	"status" text DEFAULT 'DRAFT' NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"author_id" uuid,
	"reviewer_id" uuid,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hub_questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"audience" text NOT NULL,
	"category" text NOT NULL,
	"level" text,
	"stream" text,
	"difficulty" text DEFAULT 'MEDIUM' NOT NULL,
	"stem" text NOT NULL,
	"options" jsonb NOT NULL,
	"answer" integer NOT NULL,
	"explanation" text,
	"status" text DEFAULT 'PUBLISHED' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hub_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ends_at" timestamp with time zone NOT NULL,
	"next_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quiz_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"mode" text NOT NULL,
	"question_ids" jsonb NOT NULL,
	"answers" jsonb NOT NULL,
	"score" integer DEFAULT 0 NOT NULL,
	"day" text,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"finished_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "study_schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"parent_user_id" uuid NOT NULL,
	"student_user_id" uuid NOT NULL,
	"kind" text DEFAULT 'ACTIVITY' NOT NULL,
	"title" text NOT NULL,
	"note" text,
	"date" text NOT NULL,
	"start_time" text,
	"end_time" text,
	"priority" text DEFAULT 'NORMAL' NOT NULL,
	"repeat" text DEFAULT 'ONCE' NOT NULL,
	"status" text DEFAULT 'SCHEDULED' NOT NULL,
	"acknowledged_at" timestamp with time zone,
	"completed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "activation_codes" ADD COLUMN "features" jsonb;--> statement-breakpoint
ALTER TABLE "activation_codes" ADD COLUMN "hub_session_minutes" integer;--> statement-breakpoint
ALTER TABLE "activation_codes" ADD COLUMN "hub_cooldown_minutes" integer;--> statement-breakpoint
ALTER TABLE "activation_codes" ADD COLUMN "hub_unlimited" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "forum_rooms" ADD COLUMN "audience" text DEFAULT 'STUDENT' NOT NULL;--> statement-breakpoint
ALTER TABLE "forum_reports" ADD CONSTRAINT "forum_reports_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_reports" ADD CONSTRAINT "forum_reports_message_id_forum_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "public"."forum_messages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_reports" ADD CONSTRAINT "forum_reports_reporter_id_users_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_requests" ADD CONSTRAINT "guardian_requests_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_requests" ADD CONSTRAINT "guardian_requests_parent_user_id_users_id_fk" FOREIGN KEY ("parent_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guardian_requests" ADD CONSTRAINT "guardian_requests_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hub_article_versions" ADD CONSTRAINT "hub_article_versions_article_id_hub_articles_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."hub_articles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hub_articles" ADD CONSTRAINT "hub_articles_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hub_questions" ADD CONSTRAINT "hub_questions_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hub_sessions" ADD CONSTRAINT "hub_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study_schedules" ADD CONSTRAINT "study_schedules_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study_schedules" ADD CONSTRAINT "study_schedules_parent_user_id_users_id_fk" FOREIGN KEY ("parent_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study_schedules" ADD CONSTRAINT "study_schedules_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "forum_reports_once_uq" ON "forum_reports" USING btree ("message_id","reporter_id");--> statement-breakpoint
CREATE INDEX "forum_reports_status_idx" ON "forum_reports" USING btree ("school_id","status");--> statement-breakpoint
CREATE INDEX "guardian_requests_parent_idx" ON "guardian_requests" USING btree ("parent_user_id","status");--> statement-breakpoint
CREATE INDEX "guardian_requests_student_idx" ON "guardian_requests" USING btree ("student_user_id","status");--> statement-breakpoint
CREATE INDEX "hub_article_versions_idx" ON "hub_article_versions" USING btree ("article_id","version");--> statement-breakpoint
CREATE UNIQUE INDEX "hub_articles_title_uq" ON "hub_articles" USING btree ("school_id","audience",lower("title"));--> statement-breakpoint
CREATE INDEX "hub_articles_list_idx" ON "hub_articles" USING btree ("school_id","audience","status");--> statement-breakpoint
CREATE UNIQUE INDEX "hub_questions_stem_uq" ON "hub_questions" USING btree ("school_id","audience",md5(lower("stem")));--> statement-breakpoint
CREATE INDEX "hub_questions_pick_idx" ON "hub_questions" USING btree ("school_id","audience","status","category");--> statement-breakpoint
CREATE INDEX "hub_sessions_user_idx" ON "hub_sessions" USING btree ("user_id","ends_at");--> statement-breakpoint
CREATE INDEX "quiz_attempts_user_idx" ON "quiz_attempts" USING btree ("user_id","mode","started_at");--> statement-breakpoint
CREATE INDEX "study_schedules_student_idx" ON "study_schedules" USING btree ("student_user_id","date");--> statement-breakpoint
CREATE INDEX "study_schedules_parent_idx" ON "study_schedules" USING btree ("parent_user_id","student_user_id");