import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/siteData'
import { scrollToSection } from '../utils/scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...NAV_LINKS.map((l) => l.id), 'student-mentors']
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'student-mentors' ? 'mentors' : e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-line bg-ivory/90 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={go('home')} aria-label="TechnoScope home"><Logo /></a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={go(l.id)} aria-current={active === l.id ? 'true' : undefined} className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:bg-peach hover:text-ink ${active === l.id ? 'bg-peach text-ink' : 'text-muted'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#register" onClick={go('register')} className="hidden rounded-full bg-terra px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-terra-dark hover:shadow-lift sm:inline-block">
            Register Now
          </a>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ivory px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)} className="block rounded-xl px-3 py-3.5 text-lg font-medium text-ink hover:bg-peach">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#register" onClick={go('register')} className="mt-3 block rounded-full bg-terra px-5 py-3.5 text-center font-semibold text-white">Register Now</a>
        </div>
      )}
    </header>
  )
}
