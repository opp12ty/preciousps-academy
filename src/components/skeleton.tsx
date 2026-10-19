export function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-6" aria-busy="true" aria-label="Loading">
      <div className="space-y-2">
        <div className="h-3 w-24 rounded bg-slate-200" />
        <div className="h-7 w-72 max-w-full rounded bg-slate-200" />
        <div className="h-3 w-96 max-w-full rounded bg-slate-100" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl border border-line bg-white" />
        ))}
      </div>
      <div className="h-72 rounded-2xl border border-line bg-white" />
    </div>
  );
}
