import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { classes, subjects, topics } from "@/server/db/schema";
import { AUDIO_MAX_BYTES, listTopicAudio } from "@/server/services/topic-audio";
import { TopicAudioManager } from "@/components/admin/topic-audio";
import { Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Topic Audio" };
export const maxDuration = 60;

export default async function TopicAudioPage({ params }: PageProps<"/admin/curriculum/audio/[topicId]">) {
  const s = await requireStaffPage("curriculum.manage");
  const { topicId } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(topicId)) notFound();
  const [t] = await getDb()
    .select({ title: topics.title, subject: subjects.name, className: classes.name })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .leftJoin(classes, eq(classes.id, topics.classId))
    .where(and(eq(topics.id, topicId), eq(topics.schoolId, s.user.schoolId)));
  if (!t) notFound();
  const items = await listTopicAudio(s.user.schoolId, topicId, { tidy: true });
  return (
    <div className="space-y-6">
      <PageHeader eyebrow={`${t.subject} · ${t.className ?? "All classes"}`} title={`Audio: ${t.title}`} breadcrumbs={[{ href: "/admin/curriculum", label: "Curriculum" }, { label: "Audio" }]} description="Upload MP3 explanations for this topic. Students see a player on every lesson of the topic and can listen as many times as they like." />
      <Card>
        <CardHeader title="Recordings" description="Only students in this topic's class, with the Study Centre on their access code, can play them." />
        <div className="p-5"><TopicAudioManager topicId={topicId} items={items} maxBytes={AUDIO_MAX_BYTES} /></div>
      </Card>
    </div>
  );
}
