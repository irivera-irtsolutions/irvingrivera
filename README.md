# irvingrivera.com

Personal portfolio/marketing site for Irving Rivera. Static site, no backend.

Built with Vite + React + Tailwind CSS v4.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## Deploy

Deployable as a static build to Vercel or Netlify:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Point `irvingrivera.com`'s DNS at whichever host you pick (a CNAME/ALIAS to
the host's edge domain, or the A/ALIAS records the host's dashboard gives
you after the first deploy), then add the domain in that project's
settings.

## Outstanding placeholders

See `PLACEHOLDERS.md` for everything still needing real assets
(screenshots, resume PDF, case study detail).
