"use client";

import { GraduationCap, Power } from "lucide-react";
import { setPrimarySchoolAction } from "@/app/admin/actions";
import { ConfirmAction } from "../ui/interactive";
import { Alert, Badge, Card } from "../ui/primitives";

/** One switch for the whole Primary School: Basic 1–6, the Primary department, public pages and registration. */
export function PrimarySchoolSwitch({ exists, enabled }: { exists: boolean; enabled: boolean }) {
  return (
    <Card className="mb-6 p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-500 text-navy-900">
            <GraduationCap className="size-5" aria-hidden />
          </span>
          <div>
            <p className="flex items-center gap-2 font-bold text-navy-800">
              Primary School (Basic 1 – Basic 6) {enabled ? <Badge tone="green">Enabled</Badge> : <Badge>Hidden</Badge>}
            </p>
            <p className="mt-1 max-w-xl text-sm text-muted">
              {enabled
                ? "Pupils can register in Basic 1–6, the Primary School page and menu link are visible, and Primary content packs can be imported."
                : "Switch on to show Basic 1–6 at registration, the Primary department and subjects, the Primary School page and menu link, and the Primary card on the home page."}
            </p>
          </div>
        </div>
        {exists ? (
          enabled ? (
            <ConfirmAction label="Hide Primary School" variant="danger-outline" icon={<Power className="size-4" />} title="Hide Primary School?" description="Basic 1–6 disappear from registration and menus. Existing pupils, lessons and results are kept." run={() => setPrimarySchoolAction(false)} />
          ) : (
            <ConfirmAction label="Enable Primary School" icon={<Power className="size-4" />} title="Enable Primary School?" description="Basic 1–6 and the Primary department become active immediately." confirmVariant="primary" run={() => setPrimarySchoolAction(true)} />
          )
        ) : (
          <Alert tone="warning">Primary classes are not created yet. Redeploy once so the structure is seeded.</Alert>
        )}
      </div>
    </Card>
  );
}
