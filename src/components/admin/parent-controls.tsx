"use client";

import { KeyRound, Unlink, X } from "lucide-react";
import { useState, useTransition } from "react";
import { assignParentAccessAction, guardianCodeAction, guardianCodeRevokeAction, guardianUnlinkAction, linkDecideAction } from "@/app/admin/actions";
import { ActionButton, ConfirmAction, RevealOnce } from "../ui/interactive";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function GenerateParentCode({ studentUserId, label = "Generate code" }: { studentUserId: string; label?: string }) {
  const [code, setCode] = useState<{ code: string; student: string } | null>(null);
  const [pending, start] = useTransition();
  const toast = useToast();
  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={pending}
        className={buttonClass("primary", "sm")}
        onClick={() =>
          start(async () => {
            const r = await guardianCodeAction(studentUserId);
            if (r.ok) setCode(r.data as { code: string; student: string });
            else toast("error", r.error);
          })
        }
      >
        <KeyRound className="size-4" /> {pending ? "Generating…" : label}
      </button>
      {code && <RevealOnce title={`Parent link code for ${code.student}`} values={[code.code]} note="Give this code to the parent or guardian. It links this one child, works once and expires in 30 days." />}
    </div>
  );
}

/** Generates a parent access code and activates it on this parent's account in one step. */
export function AssignParentAccess({ userId, name, defaultDays }: { userId: string; name: string; defaultDays: number }) {
  return (
    <ConfirmAction
      label="Give access"
      icon={<KeyRound className="size-4" />}
      title={`Give ${name} parent access?`}
      description="A new parent access code is generated and activated on this account straight away. The parent does not need to type anything."
      confirmLabel="Give access"
      confirmVariant="primary"
      reason
      extra={{ label: "Days of access", type: "number", defaultValue: String(defaultDays) }}
      run={({ reason, extra }) => assignParentAccessAction(userId, Number(extra) || undefined, reason)}
    />
  );
}

export function RevokeCode({ id }: { id: string }) {
  return <ActionButton run={() => guardianCodeRevokeAction(id)}><X className="size-4" /> Cancel</ActionButton>;
}

export function UnlinkChild({ parentUserId, studentUserId, child }: { parentUserId: string; studentUserId: string; child: string }) {
  return <ConfirmAction label="Remove" icon={<Unlink className="size-4" />} title={`Remove ${child} from this parent?`} description="The parent will no longer see this child's activity. A new code can link them again." run={() => guardianUnlinkAction(parentUserId, studentUserId)} />;
}

export function LinkDecideButtons({ id }: { id: string }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      <ConfirmAction label="Verify" variant="primary" confirmVariant="primary" title="Verify this parent–child request?" description="Verify only when the school has confirmed that this person is the student's parent or guardian." confirmLabel="Verify" run={() => linkDecideAction(id, true)} />
      <ConfirmAction label="Reject" title="Reject this request?" description="The parent will not be linked to the student." confirmLabel="Reject" run={() => linkDecideAction(id, false)} />
    </div>
  );
}
