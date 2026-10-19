import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { listGamesForStudent } from "@/server/services/games";
import { gameData, gameExtras } from "@/server/services/wordbank";
import { FEATURE_DENIED } from "@/core/features";
import { GameZone } from "@/components/game-zone";
import { Alert, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Game Zone" };

export default async function GameZonePage() {
  const s = await requireStudentPage();
  const [access, hub] = await Promise.all([getAccessState(s.user.id), getSetting(s.user.schoolId, "learningHub")]);
  const active = access.status === "ACTIVE";
  const allowed = active && hub.gamesEnabled && access.features.includes("PUZZLE_ARENA");
  const [data, custom, extras] = allowed ? await Promise.all([gameData(s.actor), listGamesForStudent(s.actor), gameExtras(s.user.schoolId)]) : [null, [], undefined];
  return (
    <>
      <PageHeader eyebrow={data?.className ? `For ${data.className}` : "Learn by playing"} title="Game Zone" description="Puzzles that train logic, planning, spelling and memory. Play as often as you like; every puzzle is new." />
      {data ? (
        <GameZone words={data.words.map((w) => ({ term: w.term, meaning: w.meaning }))} grade={data.grade} flags={{ sudoku: hub.sudoku, slidingPuzzle: hub.slidingPuzzle, wordSearch: hub.wordSearch, hangman: hub.hangman, hanoi: hub.hanoi, spotError: hub.spotError, proverbGame: hub.proverbGame, statesQuiz: hub.statesQuiz, typingTest: hub.typingTest, ticTacToe: hub.ticTacToe, colourMemory: hub.colourMemory }} custom={custom} extras={extras} />
      ) : (
        <Alert tone="warning">{!hub.gamesEnabled ? "Games are switched off at the moment." : active ? FEATURE_DENIED : access.message}</Alert>
      )}
    </>
  );
}
