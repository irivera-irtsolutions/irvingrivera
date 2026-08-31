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

### GitHub Pages (currently set up)

`.github/workflows/deploy-pages.yml` builds the site with `npm run build`
and publishes `dist/` to GitHub Pages on every push to `master`.

One manual step, one time: in the repo, go to **Settings → Pages → Build
and deployment → Source** and switch it from "Deploy from a branch" to
**"GitHub Actions"**. (It currently shows a blank page at the `.github.io`
URL because that setting is still on the old branch-based mode, which just
serves the raw source files with no build step.) After switching it, push
to `master` (or re-run the workflow from the Actions tab) and it deploys
properly.

If the contact form's Web3Forms key should work on the deployed build, add
it as a repo secret: **Settings → Secrets and variables → Actions → New
repository secret**, name `VITE_WEB3FORMS_ACCESS_KEY`.

Custom domain: enter `irvingrivera.com` under **Settings → Pages → Custom
domain** — GitHub commits a `CNAME` file for you — then point your DNS at
GitHub Pages (an apex `A`/`AAAA` record to GitHub's Pages IPs, or a
`CNAME` record to `irivera-irtsolutions.github.io` for a `www` subdomain).
GitHub shows the exact records to use once you enter the domain there.

### Vercel / Netlify (alternative)

Also deployable there instead, if preferred:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Point `irvingrivera.com`'s DNS at whichever host you pick, then add the
domain in that project's settings.

## Outstanding placeholders

See `PLACEHOLDERS.md` for everything still needing real assets
(screenshots, resume PDF, case study detail).
