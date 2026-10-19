ALTER TYPE "public"."exam_type" ADD VALUE 'COMMON_ENTRANCE';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'JUPEB';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'IJMB';--> statement-breakpoint
ALTER TYPE "public"."exam_type" ADD VALUE 'PreciousPS_EXAM';--> statement-breakpoint
CREATE TABLE "awards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"session" text NOT NULL,
	"term" text,
	"scope" text NOT NULL,
	"class_id" uuid NOT NULL,
	"subject_id" uuid,
	"user_id" uuid NOT NULL,
	"position" integer DEFAULT 1 NOT NULL,
	"average" real NOT NULL,
	"papers" integer DEFAULT 0 NOT NULL,
	"reward" text,
	"published_at" timestamp with time zone,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"profession" text DEFAULT 'OTHER' NOT NULL,
	"name" text NOT NULL,
	"title" text,
	"topics" text DEFAULT '' NOT NULL,
	"bio" text DEFAULT '' NOT NULL,
	"phone" text,
	"email" text,
	"availability" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "content_status" DEFAULT 'DRAFT' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "family_event_rsvps" (
	"event_id" uuid NOT NULL,
	"parent_user_id" uuid NOT NULL,
	"adults" integer DEFAULT 1 NOT NULL,
	"children" integer DEFAULT 0 NOT NULL,
	"note" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "family_event_rsvps_event_id_parent_user_id_pk" PRIMARY KEY("event_id","parent_user_id")
);
--> statement-breakpoint
CREATE TABLE "family_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"kind" text DEFAULT 'OTHER' NOT NULL,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"venue" text,
	"starts_at" timestamp with time zone,
	"ends_at" timestamp with time zone,
	"cost" text,
	"contact" text,
	"capacity" integer,
	"status" "content_status" DEFAULT 'DRAFT' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "loyalty_points" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"points" integer NOT NULL,
	"reason" text NOT NULL,
	"ref" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "school_profiles" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"school_id" uuid NOT NULL,
	"school_code" text NOT NULL,
	"school_name" text NOT NULL,
	"address" text NOT NULL,
	"admin_name" text NOT NULL,
	"category" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "school_profiles_school_code_unique" UNIQUE("school_code")
);
--> statement-breakpoint
CREATE TABLE "topic_audio" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"topic_id" uuid NOT NULL,
	"title" text NOT NULL,
	"file_name" text NOT NULL,
	"size" integer DEFAULT 0 NOT NULL,
	"ready" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "topic_audio_parts" (
	"audio_id" uuid NOT NULL,
	"seq" integer NOT NULL,
	"offset" integer NOT NULL,
	"size" integer NOT NULL,
	"data" "bytea" NOT NULL,
	CONSTRAINT "topic_audio_parts_audio_id_seq_pk" PRIMARY KEY("audio_id","seq")
);
--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "account_kind" text DEFAULT 'STUDENT' NOT NULL;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "experts" ADD CONSTRAINT "experts_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_event_rsvps" ADD CONSTRAINT "family_event_rsvps_event_id_family_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."family_events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_event_rsvps" ADD CONSTRAINT "family_event_rsvps_parent_user_id_users_id_fk" FOREIGN KEY ("parent_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_events" ADD CONSTRAINT "family_events_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "loyalty_points" ADD CONSTRAINT "loyalty_points_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "loyalty_points" ADD CONSTRAINT "loyalty_points_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "school_profiles" ADD CONSTRAINT "school_profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "school_profiles" ADD CONSTRAINT "school_profiles_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic_audio" ADD CONSTRAINT "topic_audio_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic_audio" ADD CONSTRAINT "topic_audio_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic_audio_parts" ADD CONSTRAINT "topic_audio_parts_audio_id_topic_audio_id_fk" FOREIGN KEY ("audio_id") REFERENCES "public"."topic_audio"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "awards_period_idx" ON "awards" USING btree ("school_id","session","term");--> statement-breakpoint
CREATE INDEX "awards_user_idx" ON "awards" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "experts_idx" ON "experts" USING btree ("school_id","status","sort_order");--> statement-breakpoint
CREATE INDEX "family_events_idx" ON "family_events" USING btree ("school_id","status","starts_at");--> statement-breakpoint
CREATE UNIQUE INDEX "loyalty_ref_uq" ON "loyalty_points" USING btree ("user_id","ref");--> statement-breakpoint
CREATE INDEX "loyalty_user_idx" ON "loyalty_points" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "topic_audio_topic_idx" ON "topic_audio" USING btree ("topic_id","sort_order");