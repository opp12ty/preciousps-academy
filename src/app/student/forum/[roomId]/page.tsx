import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { requireStudentPage } from "@/server/http";
import { AppError } from "@/server/errors";
import { roomFeed } from "@/server/services/forum";
import { ForumRoom } from "@/components/student/forum-room";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Forum room" };

export default async function ForumRoomPage({ params }: PageProps<"/student/forum/[roomId]">) {
  const s = await requireStudentPage();
  const { roomId } = await params;
  let feed;
  try {
    feed = await roomFeed(s.actor, roomId);
  } catch (e) {
    if (e instanceof AppError && e.code === "NOT_FOUND") notFound();
    // No active access (or similar): the room list explains what is needed.
    redirect("/student/forum");
  }
  return (
    <>
      <PageHeader eyebrow="Student forum" title={feed.room.name} description={feed.room.description ?? undefined} breadcrumbs={[{ href: "/student/forum", label: "Forum" }, { label: feed.room.name }]} />
      <ForumRoom initial={feed} />
    </>
  );
}
