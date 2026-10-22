/**
 * A family walking to the farm at sunrise: the father with his hoe on his shoulder, his wives with
 * baskets on their heads, and the children, beside a baobab tree. Pure SVG (a few KB, no download).
 */
export function FarmFamily({ className }: { className?: string }) {
  const S = "#2a1406";
  return (
    <svg viewBox="0 0 800 300" className={className} role="img" aria-label="An African family walking to the farm at sunrise: a farmer with a hoe on his shoulder, his wives carrying baskets on their heads, and their children">
      <defs>
        <linearGradient id="ff-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7c2d12" /><stop offset="0.45" stopColor="#ea580c" /><stop offset="0.8" stopColor="#fbbf24" /><stop offset="1" stopColor="#fde68a" /></linearGradient>
      </defs>
      <rect width="800" height="300" fill="url(#ff-sky)" />
      <circle cx="560" cy="190" r="70" fill="#fef3c7" opacity="0.9" />
      <path d="M0 230 Q200 205 400 222 T800 215 V300 H0 Z" fill="#7c2d12" opacity="0.55" />
      {/* baobab */}
      <g fill={S}>
        <path d="M95 250 L102 160 Q90 150 70 148 Q92 142 104 150 L106 128 Q96 116 80 116 Q100 108 110 120 Q116 108 134 106 Q122 116 120 128 L124 150 Q138 140 158 146 Q138 150 128 162 L136 250 Z" />
        {/* ridges of crops */}
        {Array.from({ length: 18 }).map((_, i) => <path key={i} d={`M${600 + i * 11} 252 q4 -14 8 0`} stroke={S} strokeWidth="2" fill="none" />)}
      </g>
      <rect y="250" width="800" height="50" fill={S} />
      {/* the family, walking right */}
      <g fill={S}>
        {/* father with hoe on shoulder */}
        <g transform="translate(250 150)">
          <circle cx="0" cy="0" r="11" />
          <path d="M-12 14 h24 l4 46 h-8 l-2 42 h-6 l-2 -38 l-2 38 h-6 l-2 -42 h-8 Z" />
          <path d="M8 18 L44 -18" stroke={S} strokeWidth="4" strokeLinecap="round" />
          <path d="M40 -26 l16 6 l-6 10 z" />
          <path d="M-10 6 q10 -14 22 -4" fill="#b45309" />
        </g>
        {/* first wife with basket */}
        <g transform="translate(330 160)">
          <ellipse cx="0" cy="-26" rx="20" ry="7" fill="#92400e" />
          <path d="M-14 -26 h28 l-6 -10 h-16 z" fill="#b45309" />
          <circle cx="0" cy="-8" r="10" />
          <path d="M-12 4 h24 l10 74 h-44 Z" />
          <path d="M-10 -14 L-14 -26 M10 -14 L14 -26" stroke={S} strokeWidth="3" />
        </g>
        {/* second wife with basket and baby on back */}
        <g transform="translate(400 162)">
          <ellipse cx="0" cy="-26" rx="18" ry="6" fill="#92400e" />
          <circle cx="0" cy="-8" r="10" />
          <path d="M-12 4 h24 l10 72 h-44 Z" />
          <circle cx="-16" cy="12" r="7" />
          <path d="M-10 -14 L-12 -26 M10 -14 L12 -26" stroke={S} strokeWidth="3" />
        </g>
        {/* children */}
        <g transform="translate(460 186)">
          <circle cx="0" cy="0" r="8" />
          <path d="M-8 10 h16 l3 30 h-5 l-2 24 h-4 l-1 -20 l-1 20 h-4 l-2 -24 h-5 Z" />
          <path d="M8 16 l14 -6" stroke={S} strokeWidth="3" />
        </g>
        <g transform="translate(500 198)">
          <ellipse cx="0" cy="-14" rx="8" ry="3" fill="#1e3a8a" />
          <circle cx="0" cy="-4" r="7" />
          <path d="M-7 6 h14 l6 46 h-26 Z" />
        </g>
        <g transform="translate(535 206)">
          <circle cx="0" cy="0" r="6" />
          <path d="M-6 8 h12 l2 22 h-4 l-1 16 h-3 l-1 -14 l-1 14 h-3 l-1 -16 h-4 Z" />
        </g>
      </g>
      {/* birds */}
      <path d="M640 70 q8 -8 16 0 q8 -8 16 0 M690 95 q6 -6 12 0 q6 -6 12 0" fill="none" stroke={S} strokeWidth="3" />
    </svg>
  );
}
