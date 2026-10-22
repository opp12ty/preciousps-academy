import type { Metadata } from "next";
import { requireParentPage } from "@/server/http";
import { QuizRunner } from "@/components/quiz-runner";
import { GameZone } from "@/components/game-zone";
import { listGamesForParent } from "@/server/services/games";
import { gameExtras } from "@/server/services/wordbank";
import { getSetting } from "@/server/settings";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Games" };

export default async function ParentGames() {
  const s = await requireParentPage();
  const [custom, extras, hub] = await Promise.all([listGamesForParent(s.actor), gameExtras(s.user.schoolId), getSetting(s.user.schoolId, "learningHub")]);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="For parents" title="Parent challenges" description="Short educational quizzes for parents. Free, with an explanation after every answer. These are for learning only; there are no prizes or stakes." />
      <QuizRunner
        games={[
          { mode: "PARENT_GK", title: "General Knowledge Exam", text: "A fresh set of questions every time from a bank of over 400: Nigeria and its states, Africa, the world, history, science, health and first aid, money, language, sport, culture and everyday life." },
          { mode: "PARENT_ISLAMIC", title: "Islamic Knowledge Game", text: "The Qur'an, the Prophets and Islamic practice. Optional, with explanations." },
          { mode: "PARENT_BIBLE", title: "Bible Knowledge Game", text: "Bible stories and teachings. Optional, with explanations." },
          { mode: "PARENTING", title: "Parenting Scenario Challenge", text: "Everyday situations with children and teenagers: what response helps most? Includes child development and temperament." },
          { mode: "PARENT_KNOWLEDGE", title: "Knowledge Challenge", text: "Nigeria, Africa, the world, and science and technology." },
        ]}
      />
      <section className="space-y-3">
        <h2 className="text-lg font-extrabold text-navy-800">Puzzles to relax with</h2>
        <GameZone words={[]} grade={12} flags={{ sudoku: true, slidingPuzzle: true, wordSearch: false, hangman: false, hanoi: true, spotError: hub.spotError, proverbGame: hub.proverbGame, statesQuiz: hub.statesQuiz, typingTest: hub.typingTest, ticTacToe: hub.ticTacToe, colourMemory: hub.colourMemory }} custom={custom} extras={extras} />
      </section>
    </div>
  );
}
