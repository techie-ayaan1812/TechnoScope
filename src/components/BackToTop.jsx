import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  if (!show) return null
  return (
    <button type="button" aria-label="Back to top" onClick={() => scrollToSection('home')}
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-terra text-white shadow-lift transition hover:bg-terra-dark">
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
