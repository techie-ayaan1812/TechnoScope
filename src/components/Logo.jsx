export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="10" fill="#B85F42" />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#FAF3ED" strokeWidth="2.4" />
      <circle cx="16" cy="16" r="2.2" fill="#FAF3ED" />
      <path d="M16 4v5M16 23v5M4 16h5M23 16h5" stroke="#FAF3ED" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="font-heading text-xl font-extrabold tracking-tight text-ink">TechnoScope</span>
    </span>
  )
}
