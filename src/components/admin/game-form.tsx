"use client";

import { Save, Trash2 } from "lucide-react";
import { useState } from "react";
import { gameSetAction, gameSetDeleteAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ConfirmAction } from "../ui/interactive";

export interface GameData { id: string; kind: string; audience: string; title: string; description: string | null; items: string; level: string | null; classId: string | null; status: string; sortOrder: number }
type Kinds = Record<string, { label: string; line: string; help: string }>;

const EXAMPLE: Record<string, string> = {
  WORD_SEARCH: "oxygen\nplanet\nmagnet\nenergy\nvolcano",
  HANGMAN: "oxygen = the gas we breathe in\nplanet = a large body that moves round the Sun\nmagnet = it pulls iron towards itself",
  MATCH: "Abuja = capital of Nigeria\nAccra = capital of Ghana\nNairobi = capital of Kenya",
  RIDDLE: "I have hands but cannot clap. What am I? = A clock\nWhat has keys but opens no door? = A keyboard",
};

/** Add or edit one school-made game. The items are typed one per line. */
export function GameForm({ game, kinds, classes, sections }: { game?: GameData; kinds: Kinds; classes: { value: string; label: string }[]; sections: { value: string; label: string }[] }) {
  const [kind, setKind] = useState(game?.kind ?? "MATCH");
  return (
    <div className="space-y-3">
      <ActionForm action={gameSetAction.bind(null, game?.id ?? null)} resetOnSuccess={!game} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <TextField className="sm:col-span-2" label="Title" name="title" required maxLength={80} defaultValue={game?.title} placeholder="e.g. Capitals of West Africa" />
        <SelectField label="Kind of game" name="kind" value={kind} onChange={(e) => setKind(e.target.value)} options={Object.entries(kinds).map(([value, k]) => ({ value, label: k.label }))} />
        <SelectField label="Status" name="status" defaultValue={game?.status ?? "DRAFT"} options={[{ value: "DRAFT", label: "Draft (hidden)" }, { value: "PUBLISHED", label: "Published" }, { value: "ARCHIVED", label: "Archived" }]} />
        <SelectField label="Who plays" name="audience" defaultValue={game?.audience ?? "STUDENT"} options={[{ value: "STUDENT", label: "Students" }, { value: "PARENT", label: "Parents" }, { value: "BOTH", label: "Students and parents" }]} />
        <SelectField label="Section" name="level" defaultValue={game?.level ?? ""} placeholder="Every section" options={sections} />
        <SelectField label="Class" name="classId" defaultValue={game?.classId ?? ""} placeholder="Every class" options={classes} />
        <TextField label="Order in the list" name="sortOrder" type="number" min={0} defaultValue={String(game?.sortOrder ?? 0)} />
        <TextField className="sm:col-span-2 lg:col-span-4" label="Short description (optional)" name="description" maxLength={200} defaultValue={game?.description ?? ""} />
        <TextAreaField className="sm:col-span-2 lg:col-span-4" label={`Items, one per line: ${kinds[kind]?.line}`} name="items" rows={8} required defaultValue={game?.items ?? ""} placeholder={EXAMPLE[kind]} hint={kinds[kind]?.help} />
        <div className="sm:col-span-2 lg:col-span-4"><SubmitButton pendingText="Saving…"><Save className="size-4" aria-hidden /> {game ? "Save changes" : "Add game"}</SubmitButton></div>
      </ActionForm>
      {game && <ConfirmAction label="Delete this game" icon={<Trash2 className="size-4" />} title={`Delete “${game.title}”?`} description="The game is removed for everyone. This cannot be undone." run={() => gameSetDeleteAction(game.id)} />}
    </div>
  );
}
