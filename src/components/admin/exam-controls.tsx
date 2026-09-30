"use client";

import { Archive, EyeOff, Megaphone, Send, Undo2 } from "lucide-react";
import { releaseResultsAction, setExamStatusAction } from "@/app/admin/actions";
import { ActionButton, ConfirmAction } from "../ui/interactive";

export function ExamStatusControls({ id, status, canPublish, canRelease, resultVisibility }: { id: string; status: string; canPublish: boolean; canRelease: boolean; resultVisibility: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {canPublish && status !== "PUBLISHED" && (
        <ConfirmAction label="Publish" variant="primary" icon={<Send className="size-4" />} title="Publish this examination?" description="Eligible students will see it immediately (subject to its open/close times) and receive an announcement. Publishing fails if the approved question pool is too small." confirmVariant="primary" run={() => setExamStatusAction(id, "PUBLISHED")} />
      )}
      {canPublish && status === "PUBLISHED" && <ActionButton run={() => setExamStatusAction(id, "DRAFT")}><EyeOff className="size-4" /> Unpublish</ActionButton>}
      {canPublish && status !== "ARCHIVED" && <ConfirmAction label="Archive" icon={<Archive className="size-4" />} title="Archive this examination?" description="It will be hidden from students. Results and attempts are preserved." run={() => setExamStatusAction(id, "ARCHIVED")} />}
      {canPublish && status === "ARCHIVED" && <ActionButton run={() => setExamStatusAction(id, "DRAFT")}><Undo2 className="size-4" /> Restore to draft</ActionButton>}
      {canRelease && resultVisibility !== "IMMEDIATE" && (
        <>
          <ConfirmAction label="Release results" variant="gold" icon={<Megaphone className="size-4" />} title="Release results to students?" description="Students will be able to see their scores and receive a notification." confirmVariant="primary" run={() => releaseResultsAction(id, true)} />
          <ActionButton run={() => releaseResultsAction(id, false)}>Withhold results</ActionButton>
        </>
      )}
    </div>
  );
}
