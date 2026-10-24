import { useState } from 'react'
import { RotateCw, Sparkles } from 'lucide-react'

function Portrait({ tone }) {
  const a = tone === 'student' ? '#FADFC4' : '#F6E6D7'
  const b = tone === 'student' ? '#F6E6D7' : '#EEDFCC'
  return (
    <svg viewBox="0 0 200 250" className="h-full w-full" role="img" aria-label="Photo placeholder" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id={`bg-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="200" height="250" fill={`url(#bg-${tone})`} />
      <g stroke="#B85F42" strokeOpacity=".12">
        {[40, 80, 120, 160].map((x) => <path key={x} d={`M${x} 0V250`} />)}
        {[50, 100, 150, 200].map((y) => <path key={y} d={`M0 ${y}H200`} />)}
      </g>
      <circle cx="100" cy="102" r="36" fill="#B85F42" fillOpacity=".35" />
      <path d="M28 250c0-46 31-78 72-78s72 32 72 78z" fill="#B85F42" fillOpacity=".35" />
    </svg>
  )
}

export default function MentorCard({ mentor, variant }) {
  const [flipped, setFlipped] = useState(false)
  const [failed, setFailed] = useState(false)
  const student = variant === 'student'
  const hasPhoto = mentor.photo && !failed
  const roleLabel = student ? 'Student Mentor' : 'Teacher Mentor'

  return (
    <li>
      <button type="button" aria-pressed={flipped} data-flipped={flipped}
        aria-label={`${mentor.name}, ${roleLabel}. ${flipped ? 'Showing expertise.' : 'Press to see expertise.'}`}
        onClick={() => setFlipped((f) => !f)}
        className="flip-scene block h-[27rem] w-full rounded-3xl text-left shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <div className="flip-inner">
          {/* Front */}
          <div className="flip-face flex flex-col overflow-hidden rounded-3xl border border-line bg-white" aria-hidden={flipped}>
            <div className="relative min-h-0 flex-1 overflow-hidden bg-peach">
              {hasPhoto ? (
                <img src={mentor.photo} alt={`Photo of ${mentor.name}`} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
              ) : <Portrait tone={variant} />}
              <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${student ? 'bg-terra text-white' : 'bg-white/90 text-ink'}`}>{roleLabel}</span>
            </div>
            <div className="p-5">
              <h4 className="font-heading text-lg font-extrabold leading-tight text-ink">{mentor.name}</h4>
              <p className="mt-1 text-sm font-medium text-terra-dark">{mentor.designation}</p>
              <p className="text-sm text-muted">{mentor.department}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-terra-dark"><RotateCw size={13} aria-hidden="true" /> Click to see expertise</p>
            </div>
          </div>
          {/* Back */}
          <div className={`flip-face flip-back flex flex-col overflow-y-auto rounded-3xl border p-6 ${student ? 'border-terra bg-terra text-white' : 'border-line bg-gradient-to-br from-apricot to-peach text-ink'}`} aria-hidden={!flipped}>
            <span className={`grid h-11 w-11 place-items-center rounded-xl ${student ? 'bg-white/20' : 'bg-white/70 text-terra-dark'}`}><Sparkles size={20} aria-hidden="true" /></span>
            <h4 className="mt-4 font-heading text-xl font-extrabold leading-tight">{mentor.name}</h4>
            <p className={`text-sm ${student ? 'text-white/85' : 'text-ink/75'}`}>{mentor.designation}</p>
            <p className="mt-5 font-semibold">Expertise</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {mentor.expertise?.length ? mentor.expertise.map((x) => (
                <li key={x} className={`rounded-full px-3 py-1.5 text-sm font-medium ${student ? 'bg-white text-terra-dark' : 'bg-white/80 text-ink'}`}>{x}</li>
              )) : (
                <li className={`rounded-full border border-dashed px-3 py-1.5 text-sm ${student ? 'border-white/70' : 'border-ink/40'}`}>To be announced</li>
              )}
            </ul>
            <p className={`mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${student ? 'text-white/85' : 'text-terra-dark'}`}><RotateCw size={13} aria-hidden="true" /> Click to flip back</p>
          </div>
        </div>
      </button>
    </li>
  )
}
