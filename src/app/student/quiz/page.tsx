import type { Metadata } from "next";
import { FEATURE_DENIED } from "@/core/features";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { recentQuizAttempts, QUIZ_MODES, type QuizMode } from "@/server/services/hub";
import { QuizRunner } from "@/components/quiz-runner";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Quiz Arena" };

export default async function QuizPage() {
  const s = await requireStudentPage();
  const [access, recent] = await Promise.all([getAccessState(s.user.id), recentQuizAttempts(s.user.id)]);
  const has = (f: "QUIZ_ARENA" | "DAILY_CHALLENGE" | "CULTURE_CHALLENGE") => access.status === "ACTIVE" && access.features.includes(f);
  const games = [
    { mode: "QUIZ" as const, title: "Quiz Arena", text: "A general-knowledge quiz matched to your class and department. One question at a time, with the explanation after each answer.", locked: !has("QUIZ_ARENA") },
    { mode: "DAILY" as const, title: "Daily Challenge", text: "A short new challenge every day. Everyone gets the same questions, and you can play once a day.", locked: !has("DAILY_CHALLENGE") },
    { mode: "CULTURE" as const, title: "Culture Challenge", text: "Nigerian, African and world culture, history and geography.", locked: !has("CULTURE_CHALLENGE") },
  ];
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Learn by playing" title="Quiz Arena and challenges" description="Test what you know. Your answers are marked at once and you see where you are strong and where to practise more." />
      {access.status !== "ACTIVE" && <Alert tone="warning">{access.message}</Alert>}
      <QuizRunner games={games} lockedMessage={FEATURE_DENIED} />
      {recent.length > 0 && (
        <Card>
          <CardHeader title="Your recent games" />
          <ul className="divide-y divide-line text-sm">
            {recent.map((r) => (
              <li key={r.id} className="flex justify-between gap-3 px-4 py-2.5"><span className="font-semibold text-navy-800">{QUIZ_MODES[r.mode as QuizMode]?.label ?? r.mode}</span><span className="text-muted">{r.score} / {r.total}</span></li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
