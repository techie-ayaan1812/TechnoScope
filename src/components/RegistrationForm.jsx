import { useState } from 'react'
import { CheckCircle2, Info, Loader2, RotateCcw, AlertCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FileDrop from './FileDrop'
import { DEPARTMENTS, INTERESTS, INTEREST_OTHER, FORM_CONFIG } from '../data/siteData'
import { validateForm, validateFile, normaliseMobile } from '../utils/validation'

const EMPTY = { fullName: '', department: '', interest: '', otherInterest: '', mobile: '', file: null, agreed: false }
const inputCls = (err) =>
  `w-full rounded-xl border bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 transition focus:border-terra ${err ? 'border-red-700/70' : 'border-line'}`

function Field({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-semibold text-ink">{label} <span className="text-terra-dark" aria-hidden="true">*</span></label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-800"><AlertCircle size={15} aria-hidden="true" />{error}</p>}
    </div>
  )
}

export default function RegistrationForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | done

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((e) => { const { [name]: _drop, ...rest } = e; return rest })
  }
  const aria = (name, hint = true) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : hint ? `${name}-hint` : undefined,
    'aria-required': true,
  })

  const onFile = (file) => {
    const err = validateFile(file)
    if (err) { setValues((v) => ({ ...v, file: null })); setErrors((e) => ({ ...e, file: err })) }
    else set('file', file)
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validateForm(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) { document.getElementById(first === 'file' ? 'receipt' : first)?.focus?.(); return }
    setStatus('loading')
    // Frontend prototype: nothing is sent anywhere.
    setTimeout(() => setStatus('done'), 900)
  }

  const reset = () => { setValues(EMPTY); setErrors({}); setStatus('idle') }

  return (
    <section id="register" aria-labelledby="register-title" className="bg-gradient-to-b from-sand/60 to-peach/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="register-title" align="center" title="Begin Your TechnoScope Journey" subtitle="Take the first step towards a year of learning, building, and collaboration." />

        <div role="note" className="mx-auto mt-8 flex max-w-3xl gap-3 rounded-2xl border border-terra/30 bg-white/80 p-4 text-sm text-ink">
          <Info size={18} className="mt-0.5 shrink-0 text-terra" aria-hidden="true" />
          <p>This registration form is currently a frontend prototype. Real submissions will require backend integration. Nothing you enter here is sent to the organisers.</p>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="rounded-3xl border border-line bg-white/70 p-7 lg:sticky lg:top-28">
          <h3 className="text-xl font-extrabold text-ink">What you will need</h3>
          <ul className="mt-4 space-y-3 text-ink/90">
            {['Your full name', 'Your department', 'Your area of interest', 'A 10-digit mobile number', 'Your payment receipt (PDF, JPG or PNG, up to 5 MB)', 'Readiness to commit for the full year'].map((t) => (
              <li key={t} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-terra" aria-hidden="true" />{t}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">For fees, deadlines and confirmation details, please consult the programme organisers.</p>
        </aside>
        <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
          {status === 'done' ? (
            <div role="status" className="py-6 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-apricot text-terra-dark"><CheckCircle2 size={32} aria-hidden="true" /></span>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">Validation complete — demo only</h3>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
                Your details passed the frontend validation. This is a demo only — your registration and receipt have not been sent to the organisers.
              </p>
              <button type="button" onClick={reset} className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink hover:bg-peach">
                <RotateCcw size={16} aria-hidden="true" /> Start over
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-6">
              <Field id="fullName" label="Full Name" error={errors.fullName}>
                <input id="fullName" type="text" autoComplete="name" placeholder="Enter your full name" value={values.fullName}
                  onChange={(e) => set('fullName', e.target.value)} className={inputCls(errors.fullName)} {...aria('fullName', false)} />
              </Field>

              <Field id="department" label="Department" hint="Pick the closest match. The list can be updated by the organisers." error={errors.department}>
                <select id="department" value={values.department} onChange={(e) => set('department', e.target.value)} className={inputCls(errors.department)} {...aria('department')}>
                  <option value="">Select your department</option>
                  {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>

              <Field id="interest" label="Area of Interest" error={errors.interest}>
                <select id="interest" value={values.interest} onChange={(e) => set('interest', e.target.value)} className={inputCls(errors.interest)} {...aria('interest', false)}>
                  <option value="">Select your area of interest</option>
                  {INTERESTS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>

              {values.interest === INTEREST_OTHER && (
                <Field id="otherInterest" label="Specify your interest" error={errors.otherInterest}>
                  <input id="otherInterest" type="text" placeholder="e.g. Drone technology" value={values.otherInterest}
                    onChange={(e) => set('otherInterest', e.target.value)} className={inputCls(errors.otherInterest)} {...aria('otherInterest', false)} />
                </Field>
              )}

              <Field id="mobile" label="Mobile Number" hint={`10-digit Indian mobile number. A ${FORM_CONFIG.countryCode} prefix is optional.`} error={errors.mobile}>
                <input id="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210" value={values.mobile}
                  onChange={(e) => set('mobile', e.target.value)} onBlur={() => values.mobile && setValues((v) => ({ ...v, mobile: v.mobile.trim() }))}
                  className={inputCls(errors.mobile)} {...aria('mobile')} />
              </Field>

              <div>
                <span id="receipt-label" className="mb-2 block font-semibold text-ink">Upload Payment Receipt <span className="text-terra-dark" aria-hidden="true">*</span></span>
                <FileDrop id="receipt" file={values.file} error={errors.file} onSelect={onFile} onRemove={() => set('file', null)} />
                {errors.file && <p id="receipt-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-800"><AlertCircle size={15} aria-hidden="true" />{errors.file}</p>}
              </div>

              <div className="rounded-2xl border-2 border-terra/40 bg-apricot/40 p-5 sm:p-6">
                <h3 className="font-heading text-lg font-extrabold text-ink">Year-long commitment</h3>
                <p className="mt-2 leading-relaxed text-ink">
                  I understand that TechnoScope is a year-long programme. By registering, I agree to remain committed and actively participate throughout the entire year, including the programme's learning activities, team responsibilities, and project work.
                </p>
                <label className="mt-4 flex cursor-pointer items-start gap-3 font-semibold text-ink">
                  <input id="agreed" type="checkbox" checked={values.agreed} onChange={(e) => set('agreed', e.target.checked)}
                    aria-required="true" aria-invalid={Boolean(errors.agreed)} aria-describedby={errors.agreed ? 'agreed-error' : undefined}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#B85F42]" />
                  I have read and agree to the full-year commitment.
                </label>
                {errors.agreed && <p id="agreed-error" role="alert" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-800"><AlertCircle size={15} aria-hidden="true" />{errors.agreed}</p>}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={!values.agreed || status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 font-semibold text-white shadow-soft transition hover:bg-terra-dark disabled:cursor-not-allowed disabled:opacity-50">
                  {status === 'loading' ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Checking details…</>) : 'Validate registration'}
                </button>
                <button type="button" onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 font-semibold text-ink hover:bg-peach">
                  <RotateCcw size={16} aria-hidden="true" /> Reset form
                </button>
              </div>
              {!values.agreed && <p className="-mt-3 text-sm text-muted">Tick the commitment checkbox to enable the submit button.</p>}
            </form>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}
