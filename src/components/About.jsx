import { Wrench, Lightbulb, Users, HeartHandshake, Mic, Factory } from 'lucide-react'
import SectionHeading from './SectionHeading'

const PILLARS = [
  { icon: Wrench, label: 'Practical learning' },
  { icon: Lightbulb, label: 'Problem-solving' },
  { icon: Users, label: 'Teamwork and collaboration' },
  { icon: HeartHandshake, label: 'Community-impact projects' },
  { icon: Mic, label: 'Expert sessions' },
  { icon: Factory, label: 'Industrial visits' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="about-title" title="Learning Beyond the Classroom." />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            TechnoScope is a project-based learning programme designed to help first-year engineering students connect theoretical knowledge with practical implementation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Across a full year, students build creativity and critical thinking, learn to work in teams, and take on projects that can make a difference in the community — supported by expert sessions and industrial visits.
          </p>
          <blockquote className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-soft">
            <p className="font-heading text-xl font-bold leading-snug text-ink">
              Theory tells you how things work. Projects show you why they matter.
            </p>
          </blockquote>
        </div>
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-apricot text-terra-dark">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="font-heading font-bold leading-snug text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
