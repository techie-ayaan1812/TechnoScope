import { TEACHER_MENTORS, STUDENT_MENTORS, JOURNEY_STAGES } from '../data/siteData'

export default function Stats() {
  const items = [
    [TEACHER_MENTORS.length, 'Teacher Mentors'],
    [STUDENT_MENTORS.length, 'Student Mentors'],
    ['1 year', 'of learning and building'],
    [JOURNEY_STAGES.length, 'stages, idea to project'],
  ]
  return (
    <section aria-label="Programme at a glance" className="relative z-10 -mt-10 px-5 sm:px-8">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 divide-line rounded-3xl border border-line bg-white shadow-lift md:grid-cols-4 md:divide-x">
        {items.map(([n, l], i) => (
          <div key={l} className={`flex flex-col px-6 py-6 text-center ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}>
            <dt className="order-2 mt-1 text-sm text-muted">{l}</dt>
            <dd className="font-heading text-3xl font-extrabold text-terra-dark">{n}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
