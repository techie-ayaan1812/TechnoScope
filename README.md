# TechnoScope Website

A frontend-only React site for **TechnoScope**, a year-long Project-Based Learning programme and project competition for first-year engineering students.

Stack: React 18, Vite 6, Tailwind CSS v4, Lucide React. No backend, database or external APIs.

## Prerequisites
- Node.js 18 or newer (20+ recommended) and npm

## Setup
1. Extract `technoscope-website.zip` (right-click → Extract All, or `unzip technoscope-website.zip`).
2. Open a terminal in the extracted `technoscope-website` folder.
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev` (opens at http://localhost:5173)
5. Build for production: `npm run build` (output in `dist/`; preview with `npm run preview`)

## Where to edit content
Everything editable lives in **`src/data/siteData.js`**:
- **Mentors** — `TEACHER_MENTORS` (12) and `STUDENT_MENTORS` (5). Replace the generated placeholders with real objects: `{ id, name, designation, department, photo }`. Put photos in `public/mentors/` and set `photo: '/mentors/name.jpg'`; initials avatars are used when no photo is set. Keep the counts at 12 and 5 (the section headings show the live count).
- **Departments** — `DEPARTMENTS` (a common, unconfirmed list; edit it to match the college).
- **Areas of interest** — `INTERESTS` (selecting "Other" reveals a text field).
- **Form rules** — `FORM_CONFIG` (country code, max file size, allowed file types).
- **Learning journey** — `JOURNEY_STAGES` (illustrative; no dates are included).
- **FAQs** — `FAQS`.

Colours and fonts are Tailwind v4 theme tokens at the top of `src/index.css`.

## Registration form: prototype only
The form validates name, department, interest, a 10-digit Indian mobile number, and the receipt file (PDF/JPG/JPEG/PNG, max 5 MB), and requires the year-long commitment checkbox. **Nothing is sent or stored**: the receipt stays in browser memory only, and no data goes to localStorage. The success message states clearly that this is a demo.

## Connecting a backend later
1. In `src/components/RegistrationForm.jsx`, find the `submit` function. Replace the `setTimeout(...)` placeholder with a real request, e.g. build a `FormData` from `values` (including `values.file`) and `fetch('/api/register', { method: 'POST', body: formData })`.
2. Handle loading, success and error responses (set `status` to `'done'` only on success, and update the success wording in the component, which currently says "demo only").
3. On the server, re-validate everything, scan and store the receipt securely, and only then confirm to the student. Payment verification must happen server-side.
4. Consider adding CAPTCHA/rate limiting and a privacy notice for the personal data you collect.

## Structure
```
src/
  components/  Navbar, Hero, About, Highlights, LearningJourney, Mentors, MentorCard,
               RegistrationForm, FileDrop, FAQ, Footer, Logo, SectionHeading
  data/        siteData.js
  utils/       validation.js, scroll.js
  index.css    Tailwind v4 theme + animations
```
