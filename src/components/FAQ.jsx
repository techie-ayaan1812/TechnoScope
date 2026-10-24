import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { FAQS } from '../data/siteData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faqs" aria-labelledby="faq-title" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="faq-title" title="Frequently Asked Questions" subtitle="For anything not covered here, please consult the programme organisers." />
        <div className="divide-y divide-line rounded-3xl border border-line bg-white shadow-soft">
          {FAQS.map((f, i) => {
            const open = openIndex === i
            return (
              <div key={f.q}>
                <h3>
                  <button type="button" id={`faq-btn-${i}`} aria-expanded={open} aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-bold text-ink hover:text-terra-dark">
                    {f.q}
                    <Plus size={20} aria-hidden="true" className={`shrink-0 text-terra transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden"><p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
