// ============================================================
//  TechnoScope — editable site content
//  Replace placeholders with official details when available.
// ============================================================

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'mentors', label: 'Mentors' },
  { id: 'register', label: 'Register' },
  { id: 'faqs', label: 'FAQs' },
]

// ---- MENTORS ------------------------------------------------
// Replace the generated placeholders with real details. Example:
//   { id: 'teacher-01', name: 'Name', designation: 'Assistant Professor', department: 'Civil Engineering',
//     expertise: ['Structural Design', 'Sustainable Materials'], photo: '/mentors/teacher-01.jpg' }
// Put photos in /public/mentors/. If `photo` is empty or fails to load, a placeholder portrait is shown.
// Keep exactly 12 teacher mentors and 5 student mentors.
const make = (prefix, label, count, designation) =>
  Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0')
    return {
      id: `${prefix}-${n}`,
      name: `${label} ${n}`,
      designation,
      department: 'Department to be announced',
      expertise: [], // e.g. ['Robotics', 'Embedded Systems']
      photo: '',
    }
  })

export const TEACHER_MENTORS = make('teacher', 'Teacher Mentor', 12, 'Designation to be announced')
export const STUDENT_MENTORS = [
  'Ayaan Mistry',
  'Rahil Khatik',
  'Abdul Rehman Hashmi',
  'Rehan Qureshi',
  'Sadique Choudhary',
].map((name, i) => ({
  id: `student-${String(i + 1).padStart(2, '0')}`,
  name,
  designation: 'Year / role to be announced',
  department: 'Department to be announced',
  expertise: [], // e.g. ['Web Development', 'Robotics']
  photo: '', // e.g. '/mentors/ayaan-mistry.jpg'
}))

// ---- FORM OPTIONS ------------------------------------------
// Department list is a common, UNCONFIRMED set. Edit to match the college.
export const DEPARTMENTS = [
  'Computer Engineering',
  'Information Technology',
  'Electronics & Telecommunication',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Artificial Intelligence & Data Science',
  'Chemical Engineering',
  'Other',
]

export const INTEREST_OTHER = 'Other'
export const INTERESTS = [
  'Artificial Intelligence & Machine Learning',
  'Web Development',
  'Robotics & Automation',
  'Internet of Things',
  'Electronics',
  'Software Development',
  'Sustainable Technology',
  'Design & Innovation',
  INTEREST_OTHER,
]

export const FORM_CONFIG = {
  countryCode: '+91',
  maxFileSizeMB: 5,
  allowedExtensions: ['pdf', 'jpg', 'jpeg', 'png'],
  allowedMimeTypes: ['application/pdf', 'image/jpeg', 'image/png'],
}

// ---- LEARNING JOURNEY (illustrative) ------------------------
export const JOURNEY_STAGES = [
  { title: 'Explore & Discover', text: 'Meet your mentors, understand engineering fields and spot problems worth solving.' },
  { title: 'Learn & Experiment', text: 'Pick up theory and hands-on skills through sessions, workshops and small experiments.' },
  { title: 'Collaborate & Ideate', text: 'Form teams, share perspectives and shape ideas into a project direction.' },
  { title: 'Build & Refine', text: 'Prototype, test, get feedback from mentors and improve your solution.' },
  { title: 'Present Your Project', text: 'Showcase your work in the TechnoScope project competition.' },
]

// ---- FAQ ----------------------------------------------------
export const FAQS = [
  { q: 'What is TechnoScope?', a: 'TechnoScope is a year-long Project-Based Learning programme and project competition for first-year engineering students. It combines theoretical and practical learning, expert sessions, industrial visits, teamwork and problem-solving.' },
  { q: 'Who can register?', a: 'TechnoScope is designed for first-year engineering students. For exact eligibility details, please consult the programme organisers.' },
  { q: 'Why is the programme year-long?', a: 'Real engineering projects take time to grow. A full year gives teams room to learn, experiment, build, refine and present their work, which is why registration includes a commitment to the entire year.' },
  { q: 'What is the role of mentors?', a: 'The programme has 12 Teacher Mentors and 5 Student Mentors who guide students from ideas to implementation — supporting learning, teamwork and project work.' },
  { q: 'Why is the payment receipt required?', a: 'The registration form asks for a payment receipt as part of the registration process. For details about fees and payment, please consult the programme organisers.' },
  { q: 'How will registration be confirmed?', a: 'The confirmation process has not been published on this website. Please consult the programme organisers for official information.' },
]
