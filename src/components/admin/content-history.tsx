"use client";

import { restoreContentAction } from "@/app/admin/actions";
import type { ContentKey } from "@/content/defaults";
import { ConfirmAction } from "../ui/interactive";

export function ContentHistory({ contentKey, versions }: { contentKey: ContentKey; versions: { version: number; createdAt: string }[] }) {
  if (!versions.length) return <p className="px-5 py-4 text-sm text-muted">Showing the default content. History begins with your first publish.</p>;
  return (
    <ul className="divide-y divide-line">
      {versions.map((v, i) => (
        <li key={v.version} className="flex items-center justify-between gap-2 px-5 py-3 text-sm">
          <div>
            <p className="font-semibold text-navy-800">
              Version {v.version} {i === 0 && <span className="text-xs text-success-600">(live)</span>}
            </p>
            <p className="text-xs text-muted">{new Date(v.createdAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })}</p>
          </div>
          {i > 0 && <ConfirmAction label="Restore" title={`Restore version ${v.version}?`} description="The restored content is published as a new version; nothing is lost." confirmVariant="primary" run={() => restoreContentAction(contentKey, v.version)} />}
        </li>
      ))}
    </ul>
  );
}
