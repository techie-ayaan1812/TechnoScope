import SectionHeading from './SectionHeading'
import { JOURNEY_STAGES } from '../data/siteData'

export default function LearningJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="bg-gradient-to-b from-peach/70 to-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="journey-title" title="Your Year, Stage by Stage" subtitle="An illustrative view of the learning journey. The exact official schedule can be added once it is announced." />

        <ol className="relative mt-14 grid gap-0 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute left-[1.45rem] top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-terra/30 max-lg:block" />
          <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-[1.45rem] hidden h-0.5 bg-terra/30 lg:block" />
          {JOURNEY_STAGES.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-6 last:pb-0 lg:block lg:pb-0 lg:text-center">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-terra bg-ivory font-heading text-lg font-extrabold text-terra-dark lg:mx-auto">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-soft lg:mt-6">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 rounded-2xl border border-line bg-white/70 px-5 py-4 text-sm text-muted">
          These stages are illustrative. Dates and deadlines are not listed here — please consult the programme organisers for the official schedule.
        </p>
      </div>
    </section>
  )
}
