import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireParentPage } from "@/server/http";
import { parentRoomFeed } from "@/server/services/community";
import { ForumRoom } from "@/components/student/forum-room";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent community" };

export default async function ParentRoom({ params }: PageProps<"/parent/community/[roomId]">) {
  const s = await requireParentPage();
  const { roomId } = await params;
  const feed = await parentRoomFeed(s.actor, roomId).catch(() => null);
  if (!feed) notFound();
  return (
    <>
      <PageHeader eyebrow="Parent community" title={feed.room.name} description={feed.room.description ?? undefined} breadcrumbs={[{ href: "/parent/community", label: "Community" }, { label: feed.room.name }]} />
      <ForumRoom initial={feed} apiBase="/api/v1/community/rooms" timed={false} />
    </>
  );
}
