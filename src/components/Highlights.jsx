import { Hammer, Mic, Factory, Users, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'

const HIGHLIGHTS = [
  { icon: Hammer, title: 'Learn by Building', text: 'Turn classroom concepts into working ideas through hands-on, project-based learning.' },
  { icon: Mic, title: 'Expert Sessions', text: 'Hear from experts and widen your view of what engineering can do.' },
  { icon: Factory, title: 'Industrial Exposure', text: 'See how engineering works in real-world settings through industrial visits.' },
  { icon: Users, title: 'Teamwork & Collaboration', text: 'Work with peers, share responsibilities and learn to build together.' },
  { icon: HeartHandshake, title: 'Community Impact', text: 'Apply your skills to problems that matter beyond the campus.' },
]

export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="highlights-title" title="Programme Highlights" subtitle="Five ways TechnoScope helps you grow in your first year." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`group rounded-3xl border border-line bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift ${i === 0 ? 'bg-gradient-to-br from-white to-apricot/60 sm:col-span-2 lg:col-span-4' : i === 1 ? 'lg:col-span-2' : i === 2 ? 'lg:col-span-2' : 'lg:col-span-2'}`}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-peach text-terra-dark transition group-hover:bg-terra group-hover:text-white">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
