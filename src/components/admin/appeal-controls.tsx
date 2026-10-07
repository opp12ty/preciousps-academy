"use client";

import { appealDecideAction } from "@/app/admin/actions";
import { ConfirmAction } from "../ui/interactive";

/** Accept or decline one appeal. The reply typed here is what the student reads. */
export function AppealDecide({ id }: { id: string }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      <ConfirmAction label="Accept" variant="primary" confirmVariant="primary" confirmLabel="Accept and reply" title="Accept this appeal?" description="The student is told the appeal was accepted. Correct the result separately on the result page if the score must change." reason reasonLabel="Reply to the student" run={({ reason }) => appealDecideAction(id, "UPHELD", reason)} />
      <ConfirmAction label="Decline" confirmLabel="Decline and reply" title="Decline this appeal?" description="The student is told the result stands, with your explanation." reason reasonLabel="Reply to the student" run={({ reason }) => appealDecideAction(id, "REJECTED", reason)} />
    </div>
  );
}
