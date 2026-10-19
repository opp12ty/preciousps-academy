"use client";

import { Megaphone, RefreshCw, Save } from "lucide-react";
import { awardRewardAction, awardsComputeAction, awardsPublishAction } from "@/app/admin/actions";
import { ActionForm, SubmitButton } from "../ui/form";
import { ConfirmAction } from "../ui/interactive";
import { inputClass } from "../ui/primitives";

/** Works out and announces the winners of one period (a term, or the whole session when term is null). */
export function AwardPeriodControls({ term, label, published, any }: { term: string | null; label: string; published: boolean; any: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {!published && <ConfirmAction label={any ? "Work out again" : "Work out the winners"} icon={<RefreshCw className="size-4" />} variant="primary" confirmVariant="primary" confirmLabel="Work out" title={`Work out the winners for ${label}?`} description="The best student of every class and the best in every subject are worked out from released results in this period. Winners not yet announced are replaced; rewards you already typed for the same winners are kept." run={() => awardsComputeAction(term)} />}
      {any && !published && <ConfirmAction label="Announce winners" icon={<Megaphone className="size-4" />} confirmVariant="primary" confirmLabel="Announce" title={`Announce the winners for ${label}?`} description="Students will see the winners on their Rewards page and each winner is notified. After this the list for this period is final." run={() => awardsPublishAction(term)} />}
    </div>
  );
}

export function RewardInput({ id, reward }: { id: string; reward: string | null }) {
  return (
    <ActionForm action={awardRewardAction.bind(null, id)} className="flex min-w-[14rem] items-center gap-1.5">
      <input name="reward" defaultValue={reward ?? ""} maxLength={200} placeholder="e.g. School bag and N5,000" aria-label="Reward" className={inputClass + " h-9 text-sm"} />
      <SubmitButton size="sm" variant="secondary" pendingText="…"><Save className="size-4" aria-hidden /></SubmitButton>
    </ActionForm>
  );
}
