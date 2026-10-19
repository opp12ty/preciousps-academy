/* eslint-disable @next/next/no-img-element */
/**
 * Pictures for the sign-in and registration screens. Each slot shows the photo the Super Admin uploads
 * in Homepage & Content → Sign-in & registration pictures; until then, a built-in illustration drawn
 * in SVG (no download) is shown.
 */

type Art = "yoruba" | "awolowo" | "library" | "commerce" | "literature" | "refinery";

const G = "#d8b650";
const N = "#0b1f4b";

const ART: Record<Art, React.ReactNode> = {
  yoruba: (
    <svg viewBox="0 0 200 150" role="img" aria-label="Yoruba talking drum and adire pattern">
      <defs><pattern id="adire" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#1e3a8a" /><circle cx="10" cy="10" r="4" fill="none" stroke="#93c5fd" strokeWidth="2" /><path d="M0 0L20 20M20 0L0 20" stroke="#3b82f6" strokeWidth="1" /></pattern></defs>
      <rect width="200" height="150" fill="url(#adire)" />
      <g transform="translate(100 78)">
        <path d="M-34 -48 Q0 -30 34 -48 L22 0 L34 48 Q0 30 -34 48 L-22 0 Z" fill="#92400e" stroke={G} strokeWidth="3" />
        {[-26, -13, 0, 13, 26].map((x) => <line key={x} x1={x * 1.2} y1="-42" x2={x * 0.6} y2="42" stroke="#fde68a" strokeWidth="1.5" />)}
        <ellipse cx="0" cy="-46" rx="34" ry="7" fill="#f5deb3" stroke={G} strokeWidth="2" />
        <path d="M30 -20 q26 -18 42 6" fill="none" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" />
      </g>
      <text x="100" y="142" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Dùndún · the talking drum</text>
    </svg>
  ),
  awolowo: (
    <svg viewBox="0 0 200 150" role="img" aria-label="Tribute to Chief Obafemi Awolowo">
      <rect width="200" height="150" fill={N} />
      <circle cx="100" cy="58" r="40" fill="#1e3a8a" stroke={G} strokeWidth="3" />
      <text x="100" y="70" textAnchor="middle" fontSize="34" fontWeight="800" fill={G} fontFamily="serif">OA</text>
      <text x="100" y="118" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">Chief Obafemi Awolowo</text>
      <text x="100" y="133" textAnchor="middle" fontSize="9" fill="#fde68a">1909–1987 · Free education pioneer</text>
    </svg>
  ),
  library: (
    <svg viewBox="0 0 200 150" role="img" aria-label="A library with bookshelves">
      <rect width="200" height="150" fill="#3f2a14" />
      {[18, 58, 98].map((y) => (
        <g key={y}>
          <rect x="10" y={y + 30} width="180" height="5" fill="#a16207" />
          {Array.from({ length: 14 }).map((_, i) => <rect key={i} x={14 + i * 12.5} y={y + (i % 3) * 3} width="10" height={30 - (i % 3) * 3} rx="1" fill={["#b91c1c", "#047857", G, "#1d4ed8", "#7c3aed"][i % 5]} />)}
        </g>
      ))}
    </svg>
  ),
  commerce: (
    <svg viewBox="0 0 200 150" role="img" aria-label="Commerce: market, trade and growth">
      <rect width="200" height="150" fill="#064e3b" />
      <path d="M20 110 L60 80 L95 92 L135 55 L180 30" fill="none" stroke={G} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M168 26 L182 28 L178 42" fill="none" stroke={G} strokeWidth="5" strokeLinecap="round" />
      {[[30, 120], [55, 112], [80, 118]].map(([x, y]) => <g key={x}><circle cx={x} cy={y} r="11" fill="#facc15" stroke="#a16207" strokeWidth="2" /><text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="#713f12">₦</text></g>)}
      <rect x="120" y="92" width="62" height="40" rx="4" fill="#ecfdf5" /><path d="M116 92 h70 l-8 -14 h-54 z" fill="#b91c1c" /><text x="151" y="117" textAnchor="middle" fontSize="10" fontWeight="800" fill="#064e3b">MARKET</text>
    </svg>
  ),
  literature: (
    <svg viewBox="0 0 200 150" role="img" aria-label="Literature: an open book and a quill">
      <rect width="200" height="150" fill="#581c87" />
      <path d="M100 42 Q70 30 30 38 V118 Q70 110 100 122 Q130 110 170 118 V38 Q130 30 100 42 Z" fill="#fef3c7" stroke={G} strokeWidth="3" />
      <line x1="100" y1="42" x2="100" y2="122" stroke="#d97706" strokeWidth="2" />
      {[56, 68, 80, 92].map((y) => <g key={y}><line x1="42" y1={y} x2="90" y2={y + 2} stroke="#a8a29e" strokeWidth="2" /><line x1="110" y1={y + 2} x2="158" y2={y} stroke="#a8a29e" strokeWidth="2" /></g>)}
      <path d="M150 20 Q120 50 118 92 Q140 60 170 26 Z" fill="#fff" stroke={G} strokeWidth="2" />
    </svg>
  ),
  refinery: (
    <svg viewBox="0 0 200 150" role="img" aria-label="An oil refinery">
      <rect width="200" height="150" fill="#0f172a" />
      <rect y="120" width="200" height="30" fill="#1e293b" />
      <rect x="20" y="60" width="16" height="60" fill="#94a3b8" /><rect x="44" y="40" width="14" height="80" fill="#cbd5e1" />
      <rect x="150" y="30" width="8" height="90" fill="#94a3b8" /><path d="M154 30 q-8 -12 0 -22 q8 10 0 22" fill="#f97316" /><path d="M154 26 q-4 -6 0 -12 q4 6 0 12" fill="#fde047" />
      {[80, 112].map((x) => <g key={x}><rect x={x} y="82" width="26" height="38" fill="#e2e8f0" /><ellipse cx={x + 13} cy="82" rx="13" ry="4" fill="#cbd5e1" /></g>)}
      <path d="M36 70 H80 M58 50 H150" stroke={G} strokeWidth="3" />
    </svg>
  ),
};

export function AuthPicture({ art, assetId, caption }: { art: Art; assetId: string; caption: string }) {
  const photo = /^[0-9a-f-]{36}$/i.test(assetId);
  return (
    <figure className="overflow-hidden rounded-2xl bg-navy-900 shadow-lift ring-2 ring-gold-400/70">
      {photo ? <img src={`/api/v1/assets/${assetId}`} alt={caption} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" /> : <div className="aspect-[4/3] w-full [&>svg]:size-full">{ART[art]}</div>}
      <figcaption className="bg-navy-950/80 px-2 py-1 text-center text-[0.68rem] font-semibold text-gold-400">{caption}</figcaption>
    </figure>
  );
}
export type { Art };
