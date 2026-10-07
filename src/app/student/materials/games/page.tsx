import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { gameData } from "@/server/services/wordbank";
import { FEATURE_DENIED } from "@/core/features";
import { MaterialsNav } from "@/components/student/materials-nav";
import { LearningGames } from "@/components/student/learning-games";
import { Alert, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Learning Games" };

export default async function GamesPage() {
  const s = await requireStudentPage();
  const [access, hub] = await Promise.all([getAccessState(s.user.id), getSetting(s.user.schoolId, "learningHub")]);
  if (!hub.gamesEnabled) notFound();
  const active = access.status === "ACTIVE";
  // The Puzzle Arena is one of the features of the central access code.
  const allowed = active && access.features.includes("PUZZLE_ARENA");
  const data = allowed ? await gameData(s.actor) : null;
  return (
    <>
      <PageHeader eyebrow={data?.className ? `For ${data.className}` : "Learn by playing"} title="Learning games" description="Short games that build spelling, vocabulary and quick thinking with numbers. Each game is set to the level of your class." />
      <MaterialsNav current="games" flags={hub} />
      {data ? (
        <LearningGames words={data.words} phrases={data.phrases} grade={data.grade} cfg={{ wordScramble: hub.wordScramble, memoryMatch: hub.memoryMatch, meaningMatch: hub.meaningMatch, mathsSprint: hub.mathsSprint, numberPatterns: hub.numberPatterns, roundQuestions: hub.roundQuestions, secondsPerRound: hub.secondsPerRound }} />
      ) : (
        <Alert tone="warning">{active ? FEATURE_DENIED : access.message}</Alert>
      )}
    </>
  );
}
