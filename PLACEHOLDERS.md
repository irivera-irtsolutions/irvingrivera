# Placeholders needing real assets

## Screenshots (3)
Each case study card shows a dashed placeholder box instead of a real
screenshot. Drop images in `public/images/` and swap the
`ScreenshotPlaceholder` in `src/components/CaseStudyCard.jsx` for an
`<img>`, or point me at the files and I'll wire it up.

- AI Job Agent dashboard/UI
- Sonobe site
- Holey Donuts site

## Resume PDF
`Header.jsx` and `Hero.jsx` both link to `/resume.pdf`, which doesn't
exist yet. Drop the real file at `public/resume.pdf` (same filename) and
the links start working with no code change.

## Case study copy
The Sonobe and Holey Donuts write-ups (`src/content.js`) only use the
facts given in the brief — company, location, and "built with
AI-assisted development." If there's more worth saying (project scope,
what the client needed, anything concrete), send it over and I'll fold
it into the copy without inventing anything.

## Contact form
`Contact.jsx` builds a `mailto:` link from the form fields (no backend,
per the brief) — submitting opens the visitor's own email client with
the message pre-filled. If real form delivery (without opening a mail
client) matters later, that needs a small backend or a form service
(Formspree, Resend, etc.) and is out of scope for this static build.
