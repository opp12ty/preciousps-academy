"use client";

import { Sparkles } from "lucide-react";
import { internationalSetupAction } from "@/app/admin/actions";
import { ActionButton } from "../ui/interactive";

export function InternationalSetupButton() {
  return <ActionButton variant="primary" size="md" run={() => internationalSetupAction()} successMessage="International programmes are ready."><Sparkles className="size-4" /> Load starter questions and publish the tests</ActionButton>;
}
