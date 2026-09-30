import { redirect } from "next/navigation";

/** First-run setup now lives on the backend sign-in page. Kept so older links still work. */
export default function SetupPage() {
  redirect("/backend");
}
