import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import LearningJourney from './components/LearningJourney'
import Mentors from './components/Mentors'
import RegistrationForm from './components/RegistrationForm'
import FAQ from './components/FAQ'
import Stats from './components/Stats'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Highlights />
        <LearningJourney />
        <Mentors />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
