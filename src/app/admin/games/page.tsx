import type { Metadata } from "next";
import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { SECTION_LABELS, SECTIONS } from "@/core/sections";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { GAME_KINDS, listGamesAdmin } from "@/server/services/games";
import { GameForm } from "@/components/admin/game-form";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Games" };

export default async function GamesAdmin() {
  const s = await requireStaffPage("learning.manage");
  const [list, cat] = await Promise.all([listGamesAdmin(s.user.schoolId), getCatalog(s.user.schoolId)]);
  const classes = cat.classes.map((c) => ({ value: c.id, label: c.name }));
  const sections = SECTIONS.map((value) => ({ value: value as string, label: SECTION_LABELS[value] }));
  const kinds = Object.fromEntries(Object.entries(GAME_KINDS).map(([k, v]) => [k, { label: v.label, line: v.line, help: v.help }]));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Academics" title="Games" description="Add your own games to the Game Zone: word searches, spelling games, matching pairs and riddles. Type the items one per line; the game is made from them automatically." actions={<Link href="/admin/learning" className={buttonClass("secondary", "sm")}>Switch built-in games on or off</Link>} />
      <Card>
        <CardHeader title="Add a game" description="Save as a draft to check it first. Students and parents see only published games." />
        <div className="p-5"><GameForm kinds={kinds} classes={classes} sections={sections} /></div>
      </Card>
      {list.length ? (
        list.map(({ g, className, usable }) => (
          <Card key={g.id}>
            <CardHeader title={g.title} description={[GAME_KINDS[g.kind as keyof typeof GAME_KINDS]?.label, g.audience === "BOTH" ? "Students and parents" : g.audience === "PARENT" ? "Parents" : "Students", className ?? (g.level ? sections.find((x) => x.value === g.level)?.label : "Every class")].filter(Boolean).join(" · ")} action={<span className="flex flex-wrap items-center gap-2"><Badge tone="blue">{usable} usable item{usable === 1 ? "" : "s"}</Badge><StatusBadge status={g.status} /></span>} />
            <details className="px-5 py-4">
              <summary className="cursor-pointer text-sm font-semibold text-royal-600">Edit this game</summary>
              <div className="mt-4"><GameForm kinds={kinds} classes={classes} sections={sections} game={{ id: g.id, kind: g.kind, audience: g.audience, title: g.title, description: g.description, items: g.items, level: g.level, classId: g.classId, status: g.status, sortOrder: g.sortOrder }} /></div>
            </details>
          </Card>
        ))
      ) : (
        <Card><EmptyState icon={<Gamepad2 className="size-6" />} title="No game added yet" description="The built-in games are already in the Game Zone. Add your first game above." /></Card>
      )}
      <Alert tone="info">
        <strong>Built in already.</strong> Sudoku, Sliding Puzzle, Word Search, Spell It and Tower of Hanoi make their own puzzles and need nothing from you. Word Search and Spell It take their words from the dictionary for each student&apos;s class. Games are drawn in the browser with no pictures or downloads, so they add almost nothing to the weight of the site.
      </Alert>
    </div>
  );
}
