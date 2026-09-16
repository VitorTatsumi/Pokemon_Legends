export function SchematicCity() {
  return (
    <svg className="map-svg" viewBox="0 0 100 100" aria-hidden>
      <defs>
        <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a4a42" />
          <stop offset="55%" stopColor="#1a2f2c" />
          <stop offset="100%" stopColor="#101c1a" />
        </radialGradient>
        <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(160,200,180,0.08)" strokeWidth="0.15" />
        </pattern>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#cityGlow)" />
      <circle cx="50" cy="50" r="48" fill="url(#grid)" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(150,200,180,0.35)" strokeWidth="0.6" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(150,200,180,0.18)" strokeWidth="0.35" />
      <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(150,200,180,0.18)" strokeWidth="0.35" />
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2={50 + Math.cos((deg * Math.PI) / 180) * 48}
          y2={50 + Math.sin((deg * Math.PI) / 180) * 48}
          stroke="rgba(190,220,205,0.22)"
          strokeWidth="1.1"
        />
      ))}
      <path d="M50 50 L50 2 A48 48 0 0 1 98 50 Z" fill="rgba(200,160,70,0.08)" />
      <path d="M50 50 L98 50 A48 48 0 0 1 50 98 Z" fill="rgba(70,170,120,0.08)" />
      <path d="M50 50 L50 98 A48 48 0 0 1 2 50 Z" fill="rgba(70,130,190,0.08)" />
      <path d="M50 50 L2 50 A48 48 0 0 1 50 2 Z" fill="rgba(180,80,110,0.08)" />
      <circle cx="50" cy="50" r="7" fill="rgba(125,206,176,0.18)" stroke="rgba(125,206,176,0.45)" strokeWidth="0.4" />
      <text x="50" y="51.5" textAnchor="middle" fontSize="3.2" fill="#9ed9c2" fontFamily="Space Grotesk, sans-serif">
        Prism
      </text>
    </svg>
  )
}
