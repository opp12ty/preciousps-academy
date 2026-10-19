import { Pencil, Plus } from "lucide-react";
import { archiveCatalogAction, upsertCatalogAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ActionButton } from "../ui/interactive";
import { Badge, buttonClass, Card, CardHeader, Table, Td, Th } from "../ui/primitives";
import { SECTION_CHOICES, SECTION_LABELS, SECTIONS } from "@/core/sections";

type Kind = "department" | "class" | "term" | "subject";
interface Row {
  id: string;
  name: string;
  code?: string;
  description?: string | null;
  sortOrder: number;
  archivedAt: Date | null;
  level?: string | null;
  startsOn?: string | null;
  endsOn?: string | null;
  departmentIds?: string[];
  extra?: string;
}

function Fields({ kind, row, departments }: { kind: Kind; row?: Row; departments?: { id: string; name: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <TextField label="Name" name="name" defaultValue={row?.name} required />
      {kind !== "term" && <TextField label="Code" name="code" defaultValue={row?.code} required hint="Short unique code, e.g. MTH, SS1, SCI" />}
      <TextField label="Display order" name="sortOrder" type="number" defaultValue={String(row?.sortOrder ?? 0)} />
      {kind === "class" && (
        <SelectField label="Section" name="level" defaultValue={row?.level ?? "SENIOR_SECONDARY"} options={SECTIONS.map((v) => ({ value: v, label: SECTION_LABELS[v] }))} hint="Students only see content for their class's section." />
      )}
      {kind === "department" && (
        <SelectField label="Section" name="level" defaultValue={row ? (row.level ?? "ALL") : "SENIOR_SECONDARY"} options={SECTION_CHOICES} hint="Which classes can choose this department at registration." />
      )}
      {kind === "term" && (
        <>
          <TextField label="Starts" name="startsOn" type="date" defaultValue={row?.startsOn ?? ""} />
          <TextField label="Ends" name="endsOn" type="date" defaultValue={row?.endsOn ?? ""} />
        </>
      )}
      {(kind === "subject" || kind === "department") && <TextAreaField className="sm:col-span-2" label="Description" name="description" defaultValue={row?.description ?? ""} rows={2} />}
      {kind === "subject" && departments && (
        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 text-sm font-semibold text-navy-800">Offered in departments</legend>
          <div className="flex flex-wrap gap-3">
            {departments.map((d) => (
              <label key={d.id} className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm">
                <input type="checkbox" name="departmentIds" value={d.id} defaultChecked={row?.departmentIds?.includes(d.id)} className="size-4 accent-royal-600" /> {d.name}
              </label>
            ))}
          </div>
        </fieldset>
      )}
    </div>
  );
}

export function CatalogManager({ kind, title, rows, departments, description }: { kind: Kind; title: string; rows: Row[]; departments?: { id: string; name: string }[]; description: string }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title={`Add ${kind}`} description={description} />
        <div className="p-5">
          <ActionForm action={upsertCatalogAction.bind(null, kind, null)} resetOnSuccess className="space-y-4">
            <Fields kind={kind} departments={departments} />
            <SubmitButton>
              <Plus className="size-4" /> Add
            </SubmitButton>
          </ActionForm>
        </div>
      </Card>
      <Card>
        <CardHeader title={title} description={`${rows.filter((r) => !r.archivedAt).length} active · ${rows.filter((r) => r.archivedAt).length} archived`} />
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              {kind !== "term" && <Th>Code</Th>}
              <Th>Details</Th>
              <Th>Status</Th>
              <Th className="text-right">Actions</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="align-top">
                <Td className="font-semibold text-navy-800">{r.name}</Td>
                {kind !== "term" && <Td className="font-mono text-xs">{r.code}</Td>}
                <Td className="max-w-md text-xs text-muted">{r.extra ?? r.description ?? "—"}</Td>
                <Td>{r.archivedAt ? <Badge>Archived</Badge> : <Badge tone="green">Active</Badge>}</Td>
                <Td className="text-right">
                  <div className="flex flex-wrap justify-end gap-1.5">
                    <details className="relative text-left">
                      <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}>
                        <Pencil className="size-4" /> Edit
                      </summary>
                      <div className="absolute right-0 z-20 mt-2 w-[min(36rem,90vw)] rounded-2xl border border-line bg-white p-4 shadow-lift">
                        <ActionForm action={upsertCatalogAction.bind(null, kind, r.id)} className="space-y-3" successMessage="Saved.">
                          <Fields kind={kind} row={r} departments={departments} />
                          <SubmitButton size="sm">Save</SubmitButton>
                        </ActionForm>
                      </div>
                    </details>
                    <ActionButton run={archiveCatalogAction.bind(null, kind, r.id, !r.archivedAt)}>{r.archivedAt ? "Restore" : "Archive"}</ActionButton>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
