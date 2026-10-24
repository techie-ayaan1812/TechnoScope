import SectionHeading from './SectionHeading'
import MentorCard from './MentorCard'
import { TEACHER_MENTORS, STUDENT_MENTORS } from '../data/siteData'

export default function Mentors() {
  return (
    <>
      <section id="mentors" aria-labelledby="mentors-title" className="bg-offwhite pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="mentors-title" title="Know Your Mentors" subtitle="Meet the people who will guide your journey from ideas to implementation." />
          <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-extrabold text-ink">Teacher Mentors</h3>
              <p className="mt-2 max-w-xl text-muted">Faculty who guide your learning, projects and teamwork throughout the year. Click a card to see their expertise.</p>
            </div>
            <span className="rounded-full border border-line bg-white px-4 py-2 font-semibold text-ink shadow-soft">{TEACHER_MENTORS.length} Teacher Mentors</span>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEACHER_MENTORS.map((m) => <MentorCard key={m.id} mentor={m} variant="teacher" />)}
          </ul>
        </div>
      </section>

      <section id="student-mentors" aria-labelledby="student-title" className="bg-gradient-to-b from-apricot/70 to-peach/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 id="student-title" className="text-3xl font-extrabold text-ink">Student Mentors</h3>
              <p className="mt-2 max-w-xl text-muted">Senior students who have walked this path and help you find your footing.</p>
            </div>
            <span className="rounded-full bg-terra px-4 py-2 font-semibold text-white shadow-soft">{STUDENT_MENTORS.length} Student Mentors</span>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {STUDENT_MENTORS.map((m) => <MentorCard key={m.id} mentor={m} variant="student" />)}
          </ul>
          <p className="mt-8 text-sm text-muted">Click or tap a card to flip it and see the mentor's expertise. Photos, roles and expertise are placeholders until official details are supplied.</p>
        </div>
      </section>
    </>
  )
}
