import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Pencil } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { listFscBooks } from "@/server/services/preciousps-study-centre";
import { fscStatusAction } from "../actions";
import { FscGenerateButtons, FscImportForm } from "@/components/admin/fsc-import";
import { ActionButton } from "@/components/ui/interactive";
import { Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS Study Centre" };
export const maxDuration = 60;

export default async function FscAdmin({ searchParams }: PageProps<"/admin/preciousps-study-centre">) {
  const s = await requireStaffPage("curriculum.manage");
  const sp = await searchParams;
  const classId = typeof sp.class === "string" ? sp.class : "";
  const [cat, books] = await Promise.all([getCatalog(s.user.schoolId), listFscBooks(s.user.schoolId, { classId })]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Precious PS Study Centre"
        title="Precious PS e-books & story books"
        description="Your own e-books for every class from Primary 1 to SS3. Upload a Word, PDF or PowerPoint e-book and it is split into units, each with its Classwork and Assignment (marked against your Answer Key), and a Term Review CBT. It is an addendum for all subscribers: the scores never go into report cards, only into Rewards & Loyalty and the Precious PS Study Centre Top 3."
        actions={<Link href="/admin/preciousps-exams" className={buttonClass("secondary", "sm")}>Precious PS Exams & Top 3</Link>}
      />
      <Card>
        <CardHeader title="Import an e-book or story book" description="Story books are split at their chapter headings (or lines such as “Chapter 1”); any Classwork or questions in them work as in the e-books. E-books: lay the book out as in your samples: UNIT 1 | WEEK 1, the lesson, Advanced Corner, Classwork 1, Assignment 1 … then TERM REVIEW (correct option marked with *) and the ANSWER KEY. Class, subject and term are read from the cover when you leave them blank." />
        <div className="p-5">
          <FscImportForm classes={o(cat.classes)} subjects={o(cat.subjects)} terms={o(cat.terms)} />
        </div>
      </Card>
      <Card>
        <CardHeader title="E-books for every class and subject" description="Makes a Precious PS e-book in the same layout for every class (Primary 1 to SS3), subject and term from the platform's own NERDC notes, worked examples and questions. Classes, subjects and terms that already have a book (such as the ones you uploaded) are left alone. They arrive as drafts: check, edit or replace any of them with your own Word book, then publish." />
        <div className="p-5"><FscGenerateButtons classId={classId || undefined} drafts={books.filter((x) => x.b.status === "DRAFT").length} /></div>
      </Card>
      <form className="flex flex-wrap items-end gap-3">
        <label className="text-sm font-semibold text-navy-800">Class
          <select name="class" defaultValue={classId} className="mt-1 block rounded-xl border border-line px-3 py-2 text-sm"><option value="">All classes</option>{cat.classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
        </label>
        <button className={buttonClass("secondary", "sm")}>Show</button>
      </form>
      <Card>
        {books.length ? (
          <Table>
            <thead><tr><Th>E-book</Th><Th>Class · Subject · Term</Th><Th>Contents</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {books.map(({ b, className, subject, term, units, questions, review }) => (
                <tr key={b.id} className="align-top">
                  <Td className="max-w-sm"><p className="font-semibold text-navy-800">{b.kind === "STORY" && <Badge tone="blue" className="mr-1">Story book</Badge>}{b.title}</p><p className="truncate text-xs text-muted">{b.sourceName}</p>{b.notices.length > 0 && <Badge tone="gold" className="mt-1">{b.notices.length} note{b.notices.length === 1 ? "" : "s"} to check</Badge>}</Td>
                  <Td className="text-sm">{className ?? <span className="text-danger-600">Choose a class</span>} · {subject ?? "Any subject"} · {term ?? <span className="text-danger-600">Choose a term</span>}</Td>
                  <Td className="text-xs">{units} units · {questions} classwork & assignment questions · {review} CBT questions</Td>
                  <Td><StatusBadge status={b.status} /></Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <Link href={`/admin/preciousps-study-centre/${b.id}`} className={buttonClass("secondary", "sm")}><Pencil className="size-4" /> Check & edit</Link>
                      {b.status !== "PUBLISHED" ? <ActionButton run={fscStatusAction.bind(null, b.id, "PUBLISHED")} variant="primary">Publish</ActionButton> : <ActionButton run={fscStatusAction.bind(null, b.id, "DRAFT")}>Unpublish</ActionButton>}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="No Precious PS e-books yet" description="Import the first one with the form above." />
        )}
      </Card>
    </div>
  );
}
