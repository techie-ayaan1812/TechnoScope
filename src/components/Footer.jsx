import Logo from './Logo'
import { NAV_LINKS } from '../data/siteData'
import { scrollToSection } from '../utils/scroll'

export default function Footer() {
  const go = (id) => (e) => { e.preventDefault(); scrollToSection(id) }
  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            A year-long programme where first-year engineering students learn by building, collaborate in teams and present project ideas that matter.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} onClick={go(l.id)} className="text-ink/80 hover:text-terra-dark hover:underline">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="md:text-right">
          <a href="#register" onClick={go('register')} className="inline-block rounded-full bg-terra px-6 py-3 font-semibold text-white transition hover:bg-terra-dark">Register Now</a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-muted sm:px-8 md:flex-row md:justify-between">
          <p>Project-Based Learning Programme for First-Year Engineering Students</p>
          <p>© {new Date().getFullYear()} TechnoScope</p>
        </div>
      </div>
    </footer>
  )
}
