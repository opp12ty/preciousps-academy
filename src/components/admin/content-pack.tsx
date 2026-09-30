"use client";

import { CheckCheck, FileUp, Rocket, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { approvePackAction, commitPackAction, previewPackAction, publishPackAction } from "@/app/admin/actions";
import { ActionForm, Field, SubmitButton } from "../ui/form";
import { ConfirmAction } from "../ui/interactive";
import { inputClass } from "../ui/primitives";

export function PackUpload() {
  const router = useRouter();
  return (
    <ActionForm action={previewPackAction} onSuccess={(r) => r.ok && router.push(`/admin/content-packs/${(r.data as { importId: string }).importId}`)} className="space-y-4" encType="multipart/form-data">
      <Field label="Content pack (.xlsx)" name="file" required hint="One workbook per subject. It is checked row by row before anything is created.">
        {(a) => <input {...a} type="file" accept=".xlsx" className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-royal-50 file:px-3 file:py-1.5 file:font-semibold file:text-royal-700`} />}
      </Field>
      <SubmitButton pendingText="Reading and checking the pack…">
        <FileUp className="size-4" /> Upload & check
      </SubmitButton>
    </ActionForm>
  );
}

export function PackActions({ id, stage, canReview, pending, counts }: { id: string; stage: "PREVIEW" | "COMMITTED"; canReview: boolean; pending: number; counts: string }) {
  const router = useRouter();
  if (stage === "PREVIEW") {
    return (
      <ConfirmAction
        label="Import this pack"
        icon={<UploadCloud className="size-4" />}
        variant="primary"
        confirmVariant="primary"
        size="md"
        title="Import this content pack?"
        description={`This creates ${counts}. Questions go to Pending Review; lessons, exams and assignments are created as drafts, so students see nothing yet.`}
        confirmLabel="Import"
        run={() => commitPackAction(id)}
        onDone={() => router.refresh()}
      />
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {canReview && pending > 0 && (
        <ConfirmAction
          label={`Approve ${pending} question${pending === 1 ? "" : "s"}`}
          icon={<CheckCheck className="size-4" />}
          variant="primary"
          confirmVariant="primary"
          size="md"
          title="Approve all pending questions in this pack?"
          description="Approve only after you (or your Question Bank Administrator) have reviewed them in the Question Bank. Approved questions can appear in examinations."
          confirmLabel="Approve all"
          run={() => approvePackAction(id)}
          onDone={() => router.refresh()}
        />
      )}
      <ConfirmAction
        label="Publish lessons, exams & assignments"
        icon={<Rocket className="size-4" />}
        variant="gold"
        confirmVariant="primary"
        size="md"
        title="Publish this pack to students?"
        description="Lessons become visible in the Study Centre. Examinations are published only when enough approved questions exist; assignments only when all their questions are approved. Anything held back is listed afterwards."
        confirmLabel="Publish"
        run={() => publishPackAction(id)}
        onDone={() => router.refresh()}
      />
    </div>
  );
}
