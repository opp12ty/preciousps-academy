"use client";

import { Ban, CheckCircle2, ShieldOff, LogOut, Mail, Send, Timer, Trash2, UserCheck } from "lucide-react";
import {
  clearRateLimitsAction,
  deleteRoleAction,
  flushOutboxAction,
  sendTestEmailAction,
  forceSubmitAction,
  resolveSecurityEventAction,
  revokeAnySessionAction,
  setStaffStatusAction,
  voidResultAction,
} from "@/app/admin/actions";
import { ActionButton, ConfirmAction } from "../ui/interactive";

export function ClearRateLimitsButton() {
  return (
    <ActionButton run={() => clearRateLimitsAction()}>
      <ShieldOff className="size-4" /> Clear all rate-limit blocks
    </ActionButton>
  );
}

export function OutboxButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <ActionButton run={() => sendTestEmailAction()}>
        <Mail className="size-4" /> Send test e-mail to me
      </ActionButton>
      <ActionButton run={() => flushOutboxAction()}>
        <Send className="size-4" /> Send held / failed messages
      </ActionButton>
    </div>
  );
}

export function VoidResultButton({ resultId }: { resultId: string }) {
  return <ConfirmAction label="Void attempt" variant="danger-outline" icon={<Ban className="size-4" />} title="Void this attempt?" description="Use only for confirmed malpractice or technical failure. The student may retake if attempts allow. This is permanently recorded in the audit log." reason run={({ reason }) => voidResultAction(resultId, reason)} />;
}

export function ForceSubmitButton({ attemptId }: { attemptId: string }) {
  return <ConfirmAction label="Force submit" icon={<Timer className="size-4" />} title="Submit this attempt now?" description="The attempt is scored immediately with the answers saved so far." run={() => forceSubmitAction(attemptId)} />;
}

export function StaffStatusButton({ userId, status }: { userId: string; status: string }) {
  return status === "SUSPENDED" ? (
    <ConfirmAction label="Reactivate" icon={<UserCheck className="size-4" />} title="Reactivate this administrator?" reason confirmVariant="primary" run={({ reason }) => setStaffStatusAction(userId, "ACTIVE", reason)} />
  ) : (
    <ConfirmAction label="Suspend" variant="danger-outline" icon={<Ban className="size-4" />} title="Suspend this administrator?" description="They are signed out immediately and cannot sign in until reactivated." reason run={({ reason }) => setStaffStatusAction(userId, "SUSPENDED", reason)} />
  );
}

export function DeleteRoleButton({ roleId }: { roleId: string }) {
  return <ConfirmAction label="Delete" variant="danger-outline" icon={<Trash2 className="size-4" />} title="Delete this role?" description="Administrators holding only this role will lose its permissions immediately." run={() => deleteRoleAction(roleId)} />;
}

export function RevokeSessionButton({ sessionId }: { sessionId: string }) {
  return <ConfirmAction label="Revoke" icon={<LogOut className="size-4" />} title="Revoke this session?" description="The device is signed out immediately." run={() => revokeAnySessionAction(sessionId)} />;
}

export function ResolveEventButton({ id }: { id: string }) {
  return (
    <ActionButton run={() => resolveSecurityEventAction(id)}>
      <CheckCircle2 className="size-4" /> Resolve
    </ActionButton>
  );
}
