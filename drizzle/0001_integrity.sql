-- Database-level integrity rules that Drizzle's schema DSL cannot express.

-- Audit logs are append-only: no ordinary UPDATE or DELETE (§51).
CREATE OR REPLACE FUNCTION audit_logs_immutable() RETURNS trigger AS $$
BEGIN
  RAISE EXCEPTION 'audit_logs is append-only';
END;
$$ LANGUAGE plpgsql;
--> statement-breakpoint
CREATE TRIGGER audit_logs_no_update BEFORE UPDATE OR DELETE ON audit_logs
  FOR EACH ROW EXECUTE FUNCTION audit_logs_immutable();
--> statement-breakpoint

-- Sanity constraints on configuration values.
ALTER TABLE examinations ADD CONSTRAINT examinations_question_count_chk CHECK (question_count > 0 AND question_count <= 500);
--> statement-breakpoint
ALTER TABLE examinations ADD CONSTRAINT examinations_duration_chk CHECK (duration_minutes > 0 AND duration_minutes <= 600);
--> statement-breakpoint
ALTER TABLE examinations ADD CONSTRAINT examinations_negative_chk CHECK (negative_marking >= 0 AND negative_marking <= 1);
--> statement-breakpoint
ALTER TABLE examinations ADD CONSTRAINT examinations_pass_chk CHECK (pass_mark >= 0 AND pass_mark <= 100);
--> statement-breakpoint
ALTER TABLE examinations ADD CONSTRAINT examinations_attempts_chk CHECK (max_attempts >= 1);
--> statement-breakpoint
ALTER TABLE examinations ADD CONSTRAINT examinations_window_chk CHECK (ends_at IS NULL OR starts_at IS NULL OR ends_at > starts_at);
--> statement-breakpoint
ALTER TABLE results ADD CONSTRAINT results_percentage_chk CHECK (percentage >= 0 AND percentage <= 100);
--> statement-breakpoint
ALTER TABLE questions ADD CONSTRAINT questions_marks_chk CHECK (marks > 0);
--> statement-breakpoint
ALTER TABLE activation_codes ADD CONSTRAINT codes_duration_chk CHECK (duration_days BETWEEN 1 AND 3650);
--> statement-breakpoint
-- A code that has been used must record who used it and when.
ALTER TABLE activation_codes ADD CONSTRAINT codes_activation_chk CHECK (
  (status = 'UNUSED' AND activated_by IS NULL AND activated_at IS NULL)
  OR (status <> 'UNUSED' AND (activated_by IS NOT NULL OR status IN ('REVOKED','SUSPENDED')))
);
--> statement-breakpoint
ALTER TABLE student_access_periods ADD CONSTRAINT access_window_chk CHECK (current_expires_at >= activated_at);
--> statement-breakpoint
ALTER TABLE examination_attempts ADD CONSTRAINT attempts_deadline_chk CHECK (deadline_at > started_at);
--> statement-breakpoint

-- Human-friendly, collision-free question references (e.g. MTH-000123).
CREATE SEQUENCE IF NOT EXISTS question_ref_seq START 1000;
--> statement-breakpoint

-- Fast, case-insensitive search helpers.
CREATE INDEX IF NOT EXISTS questions_stem_trgm_idx ON questions USING btree (lower(left(stem, 120)));
