"use client";

import { useRouter } from "next/navigation";
import { promotionBulkAction, promotionDecideAction } from "@/app/admin/actions";
import { promotionRequestAction } from "@/app/student/actions";
import { ActionForm, SelectField, SubmitButton } from "./ui/form";
import { ConfirmAction } from "./ui/interactive";

export function PromotionRequestForm({ next, departments, selfService }: { next: string; departments: { id: string; name: string }[]; selfService: boolean }) {
  const router = useRouter();
  return (
    <ActionForm action={promotionRequestAction} onSuccess={() => router.refresh()} className="flex flex-col gap-3 sm:flex-row sm:items-end" successMessage={selfService ? `You are now in ${next}.` : "Request sent to the school."}>
      {departments.length > 0 && <SelectField label={`Department in ${next}`} name="departmentId" required placeholder="Choose your department" options={departments.map((d) => ({ value: d.id, label: d.name }))} />}
      <SubmitButton>{selfService ? `Move me to ${next}` : `Request promotion to ${next}`}</SubmitButton>
    </ActionForm>
  );
}

export function PromotionDecide({ id, name, to }: { id: string; name: string; to: string }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      <ConfirmAction label="Approve" variant="primary" confirmVariant="primary" title={`Promote ${name} to ${to}?`} description="Approve only if this student has truly been promoted by the school. This can be done once in a session." confirmLabel="Approve" run={() => promotionDecideAction(id, true)} />
      <ConfirmAction label="Reject" title={`Reject ${name}'s request?`} description="The student stays in the present class and may ask again." confirmLabel="Reject" run={() => promotionDecideAction(id, false)} />
    </div>
  );
}

export function BulkPromoteForm({ classId, from, to, members }: { classId: string; from: string; to: string; members: { id: string; name: string; studentNumber: string }[] }) {
  const router = useRouter();
  return (
    <ActionForm action={promotionBulkAction.bind(null, classId)} onSuccess={() => router.refresh()} className="space-y-3" successMessage="Class promoted.">
      <p className="text-sm text-navy-800">Everyone in <strong>{from}</strong> moves to <strong>{to}</strong>, except the students you tick below, who repeat {from}. Students already promoted this session are left alone.</p>
      {members.length ? (
        <div className="grid max-h-72 gap-1.5 overflow-y-auto rounded-xl border border-line bg-surface p-3 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <label key={m.id} className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 text-sm ring-1 ring-line">
              <input type="checkbox" name="repeat" value={m.id} className="size-4 accent-royal-600" />
              <span><span className="font-semibold text-navy-800">{m.name}</span> <span className="text-xs text-muted">{m.studentNumber}</span><span className="block text-xs text-muted">tick = repeats {from}</span></span>
            </label>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No students in this class.</p>
      )}
      <SubmitButton pendingText="Promoting…">Promote {from} to {to}</SubmitButton>
    </ActionForm>
  );
}
