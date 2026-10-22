CREATE TABLE "jamb_texts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"title" text NOT NULL,
	"author" text,
	"year" integer NOT NULL,
	"genre" text DEFAULT 'PROSE' NOT NULL,
	"asset_id" uuid NOT NULL,
	"status" text DEFAULT 'PUBLISHED' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "fsc_books" ADD COLUMN "kind" text DEFAULT 'EBOOK' NOT NULL;--> statement-breakpoint
ALTER TABLE "jamb_texts" ADD CONSTRAINT "jamb_texts_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "jamb_texts_school_year_idx" ON "jamb_texts" USING btree ("school_id","year");