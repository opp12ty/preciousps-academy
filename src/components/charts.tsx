/**
 * Dependency-free SVG charts, rendered on the server (zero client JS) —
 * accessible via <title>/<desc> and a visually-hidden data table.
 */
import { cx } from "./ui/primitives";

export function TrendChart({ points, height = 180, label, yMax = 100, suffix = "%" }: { points: { x: string; y: number }[]; height?: number; label: string; yMax?: number; suffix?: string }) {
  if (points.length === 0) return <p className="py-10 text-center text-sm text-muted">No data yet.</p>;
  const W = 640,
    H = height,
    P = { l: 34, r: 12, t: 12, b: 26 };
  const iw = W - P.l - P.r,
    ih = H - P.t - P.b;
  const xs = (i: number) => P.l + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw);
  const ys = (v: number) => P.t + ih - (Math.max(0, Math.min(yMax, v)) / yMax) * ih;
  const d = points.map((p, i) => `${i ? "L" : "M"}${xs(i).toFixed(1)},${ys(p.y).toFixed(1)}`).join(" ");
  const area = `${d} L${xs(points.length - 1)},${P.t + ih} L${xs(0)},${P.t + ih} Z`;
  const ticks = [0, 25, 50, 75, 100].map((t) => (t / 100) * yMax);
  const labelEvery = Math.ceil(points.length / 7);
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={label}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1d4ed8" stopOpacity=".22" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={P.l} x2={W - P.r} y1={ys(t)} y2={ys(t)} stroke="#e3e8f2" strokeDasharray={t ? "3 4" : undefined} />
            <text x={P.l - 6} y={ys(t) + 4} textAnchor="end" fontSize="10" fill="#5b6784">
              {Math.round(t)}
            </text>
          </g>
        ))}
        <path d={area} fill="url(#trendFill)" />
        <path d={d} fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={xs(i)} cy={ys(p.y)} r="4" fill="#fff" stroke="#1d4ed8" strokeWidth="2">
              <title>{`${p.x}: ${p.y}${suffix}`}</title>
            </circle>
            {i % labelEvery === 0 && (
              <text x={xs(i)} y={H - 6} textAnchor="middle" fontSize="10" fill="#5b6784">
                {p.x.length > 10 ? p.x.slice(5) : p.x}
              </text>
            )}
          </g>
        ))}
      </svg>
      <table className="sr-only">
        <caption>{label}</caption>
        <tbody>
          {points.map((p, i) => (
            <tr key={i}>
              <th>{p.x}</th>
              <td>
                {p.y}
                {suffix}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export function BarList({ items, max = 100, suffix = "%", emptyText = "No data yet." }: { items: { label: string; value: number; hint?: string }[]; max?: number; suffix?: string; emptyText?: string }) {
  if (!items.length) return <p className="py-6 text-center text-sm text-muted">{emptyText}</p>;
  return (
    <ul className="space-y-3">
      {items.map((it) => {
        const pct = Math.max(0, Math.min(100, (it.value / (max || 1)) * 100));
        const tone = suffix === "%" ? (it.value >= 70 ? "bg-success-600" : it.value >= 50 ? "bg-royal-600" : it.value >= 40 ? "bg-gold-500" : "bg-danger-600") : "bg-royal-600";
        return (
          <li key={it.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
              <span className="truncate font-semibold text-navy-800">{it.label}</span>
              <span className="shrink-0 tabular-nums text-muted">
                {it.value}
                {suffix}
                {it.hint && <span className="ml-1 text-xs">· {it.hint}</span>}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden>
              <div className={cx("h-full rounded-full", tone)} style={{ width: `${pct}%` }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ColumnChart({ data, label, height = 160 }: { data: { x: string; y: number }[]; label: string; height?: number }) {
  const W = 640,
    H = height,
    P = { l: 8, r: 8, t: 10, b: 22 };
  const max = Math.max(1, ...data.map((d) => d.y));
  const bw = (W - P.l - P.r) / Math.max(1, data.length);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={label}>
      {data.map((d, i) => {
        const h = ((H - P.t - P.b) * d.y) / max;
        return (
          <g key={d.x}>
            <rect x={P.l + i * bw + bw * 0.18} y={H - P.b - h} width={bw * 0.64} height={Math.max(h, d.y ? 2 : 0)} rx="4" fill={i === data.length - 1 ? "#c8a02f" : "#1d4ed8"}>
              <title>{`${d.x}: ${d.y}`}</title>
            </rect>
            {(data.length <= 14 || i % 2 === 0) && (
              <text x={P.l + i * bw + bw / 2} y={H - 6} textAnchor="middle" fontSize="10" fill="#5b6784">
                {d.x.slice(-5)}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Donut({ segments, label, size = 150 }: { segments: { label: string; value: number; color: string }[]; label: string; size?: number }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 52,
    c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex flex-wrap items-center gap-5">
      <svg viewBox="0 0 140 140" width={size} height={size} role="img" aria-label={label}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#eef2f8" strokeWidth="18" />
        {total > 0 &&
          segments.map((s) => {
            const len = (s.value / total) * c;
            const el = <circle key={s.label} cx="70" cy="70" r={r} fill="none" stroke={s.color} strokeWidth="18" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} transform="rotate(-90 70 70)" />;
            offset += len;
            return el;
          })}
        <text x="70" y="68" textAnchor="middle" fontSize="22" fontWeight="800" fill="#0b1f4b">
          {total}
        </text>
        <text x="70" y="86" textAnchor="middle" fontSize="9" fill="#5b6784">
          total
        </text>
      </svg>
      <ul className="space-y-1.5 text-sm">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span className="size-3 rounded-sm" style={{ background: s.color }} aria-hidden />
            <span className="text-navy-800">{s.label}</span>
            <span className="tabular-nums text-muted">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const GRADE_COLORS: Record<string, string> = { A: "#047857", B: "#1d4ed8", C: "#2f66ea", D: "#c8a02f", E: "#b45309", F: "#c62828" };
