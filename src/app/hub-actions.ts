"use server";

import { revalidatePath } from "next/cache";
import { action } from "@/server/http";
import { getSetting } from "@/server/settings";
import { reportMessage } from "@/server/services/community";
import { answerQuiz, startHubSession, startQuiz, type QuizMode } from "@/server/services/hub";

/** Today's date in the school's time zone (YYYY-MM-DD). */
async function schoolDay(schoolId: string) {
  const { timezone } = await getSetting(schoolId, "localization");
  return new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(new Date());
}

/** Games for students and parents. The service decides who may play which game. */
export async function quizStartAction(mode: QuizMode) {
  return action({ role: "any" }, async (a, ctx) => startQuiz(a, mode, ctx, await schoolDay(a.schoolId)));
}
export async function quizAnswerAction(attemptId: string, index: number, choice: number) {
  return action({ role: "any" }, async (a) => answerQuiz(a, attemptId, index, choice));
}
export async function hubStartAction() {
  return action({ role: "student" }, async (a, ctx) => {
    const st = await startHubSession(a, ctx);
    revalidatePath("/student/knowledge");
    return st;
  });
}
export async function reportMessageAction(messageId: string, reason: string) {
  return action({ role: "any" }, async (a, ctx) => reportMessage(a, messageId, reason, undefined, ctx), "Thank you. The moderators will look at this message.");
}
