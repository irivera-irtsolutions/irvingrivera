# Placeholders needing real assets

## Screenshots (2 left)
AI Job Agent is done (`public/jobagentscreenshot.png`). Sonobe and Holey
Donuts still show a dashed placeholder box — upload an image to
`public/` on GitHub (same way as the Job Agent one) and tell me the
filename, and I'll wire it into `src/content.js`.

- Sonobe site
- Holey Donuts site

## Case study copy
The Sonobe and Holey Donuts write-ups (`src/content.js`) only use the
facts given in the brief — company, location, and "built with
AI-assisted development." If there's more worth saying (project scope,
what the client needed, anything concrete), send it over and I'll fold
it into the copy without inventing anything.

## Contact form — needs a Web3Forms access key
`Contact.jsx` submits straight to [Web3Forms](https://web3forms.com)
(free tier: 250 submissions/month, no backend of our own needed). It
reads the key from `VITE_WEB3FORMS_ACCESS_KEY`, which isn't set yet, so
right now every submission shows the error state.

To turn it on:
1. Go to https://web3forms.com and enter `IrvingRivera88@gmail.com` to
   get a free access key (emailed to you, no account needed).
2. **Local dev:** copy `.env.example` to `.env.local` and paste the key
   in.
3. **Production (Vercel/Netlify):** add `VITE_WEB3FORMS_ACCESS_KEY` as
   an environment variable in the project's dashboard, then redeploy.
