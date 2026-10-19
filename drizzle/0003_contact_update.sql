-- Contact number and footer credit changed. Updates values the Super Admin may already have saved
-- (settings and published content) so the live site shows the new details; unchanged rows are untouched.
UPDATE "settings"
SET "value" = replace(replace("value"::text, '08169267383', '08169267383'), 'Powered by PreciousPS (08169267383)', 'Powered by PreciousPS (08169267383)')::jsonb
WHERE "value"::text LIKE '%8067578112%' OR "value"::text LIKE '%Fodan Softnet%';--> statement-breakpoint
UPDATE "content_blocks"
SET "value" = replace("value"::text, '08169267383', '08169267383')::jsonb
WHERE "value"::text LIKE '%8067578112%';
