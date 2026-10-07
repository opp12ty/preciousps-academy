import type { Metadata } from "next";
import { requireParentPage } from "@/server/http";
import { QuizRunner } from "@/components/quiz-runner";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Games" };

export default async function ParentGames() {
  await requireParentPage();
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="For parents" title="Parent challenges" description="Short educational quizzes for parents. Free, with an explanation after every answer. These are for learning only; there are no prizes or stakes." />
      <QuizRunner
        games={[
          { mode: "PARENTING", title: "Parenting Scenario Challenge", text: "Everyday situations with children and teenagers: what response helps most? Includes child development and temperament." },
          { mode: "PARENT_KNOWLEDGE", title: "Knowledge Challenge", text: "Nigeria, Africa, the world, and science and technology." },
        ]}
      />
    </div>
  );
}
