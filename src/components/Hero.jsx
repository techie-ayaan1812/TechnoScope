import { ArrowRight, Compass } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const go = (id) => (e) => { e.preventDefault(); scrollToSection(id) }
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-ivory via-peach/60 to-apricot/70 pt-[4.5rem]">
      <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-20">
        <div>
          <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-ink shadow-soft">
            <Compass size={16} className="text-terra" aria-hidden="true" />
            Project-Based Learning | First-Year Engineering
          </p>
          <h1 className="hero-rise d1 mt-7 text-[2.9rem] font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Build Ideas.<br />Engineer Impact.
          </h1>
          <p className="hero-rise d2 mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Your first year. A year of exploration, collaboration, and building solutions that matter. Welcome to TechnoScope — where engineering begins beyond the classroom.
          </p>
          <div className="hero-rise d3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#register" onClick={go('register')} className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-7 py-4 font-semibold text-white shadow-lift transition hover:bg-terra-dark">
              Register for TechnoScope <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#about" onClick={go('about')} className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/70 px-7 py-4 font-semibold text-ink transition hover:border-ink/40 hover:bg-white">
              Explore the Programme
            </a>
          </div>
        </div>
        <div className="hero-rise d4 relative">
          <HeroVisual />
          <span className="float absolute left-0 top-[18%] rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft">Learn</span>
          <span className="float absolute right-0 top-[40%] rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft" style={{ animationDelay: '1.5s' }}>Build</span>
          <span className="float absolute bottom-[10%] left-[12%] rounded-full bg-terra px-4 py-2 text-sm font-semibold text-white shadow-soft" style={{ animationDelay: '3s' }}>Present</span>
        </div>
      </div>
    </section>
  )
}
