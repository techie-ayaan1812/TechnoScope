// Abstract "connected ideas -> prototype" blueprint illustration (inline SVG, no assets).
export default function HeroVisual() {
  return (
    <svg viewBox="0 0 520 480" role="img" aria-label="Abstract illustration of connected ideas forming an engineered prototype" className="mx-auto w-full max-w-[34rem]">
      <rect x="20" y="30" width="480" height="420" rx="32" fill="#FFFFFF" fillOpacity=".72" stroke="#E8DCD0" />
      <g fill="none" stroke="#B85F42" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" className="flow">
        <path d="M110 120 C 180 120, 190 220, 260 240" />
        <path d="M420 110 C 360 120, 330 200, 270 236" />
        <path d="M100 360 C 170 350, 200 290, 252 256" />
        <path d="M430 370 C 360 360, 330 290, 276 258" />
      </g>
      <g className="spin-slow">
        <circle cx="260" cy="248" r="64" fill="#FADFC4" stroke="#B85F42" strokeWidth="2.5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="252" y="170" width="16" height="20" rx="4" fill="#B85F42" transform={`rotate(${i * 30} 260 248)`} />
        ))}
      </g>
      <circle cx="260" cy="248" r="30" fill="#FAF3ED" stroke="#B85F42" strokeWidth="2.5" />
      <circle cx="260" cy="248" r="9" fill="#B85F42" />
      <g className="float">
        <circle cx="105" cy="118" r="34" fill="#F6E6D7" stroke="#30251F" strokeWidth="2" />
        <path d="M95 118h20M105 108v20" stroke="#30251F" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g className="float" style={{ animationDelay: '1.2s' }}>
        <rect x="388" y="76" width="68" height="68" rx="18" fill="#EEDFCC" stroke="#30251F" strokeWidth="2" />
        <path d="M406 120l12-24 12 24z" fill="none" stroke="#30251F" strokeWidth="2.5" strokeLinejoin="round" />
      </g>
      <g className="float" style={{ animationDelay: '2.2s' }}>
        <rect x="66" y="330" width="68" height="68" rx="18" fill="#EEDFCC" stroke="#30251F" strokeWidth="2" />
        <path d="M84 364h32M100 348v32" stroke="#30251F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="364" r="9" fill="none" stroke="#30251F" strokeWidth="2.5" />
      </g>
      <g className="float" style={{ animationDelay: '3s' }}>
        <circle cx="430" cy="372" r="34" fill="#F6E6D7" stroke="#30251F" strokeWidth="2" />
        <path d="M416 372l10 10 20-22" fill="none" stroke="#B85F42" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g stroke="#78685D" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M50 60h40M50 54v12M90 54v12" />
        <path d="M470 420v-40M464 420h12M464 380h12" />
      </g>
      <text x="300" y="68" fontSize="12" fill="#78685D" fontFamily="DM Sans, sans-serif">idea → prototype → impact</text>
    </svg>
  )
}
