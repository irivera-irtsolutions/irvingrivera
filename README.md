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

### Custom domain (irvingrivera.com)

`public/CNAME` (containing `irvingrivera.com`) ships with every build, so
GitHub Pages knows the domain regardless of what Settings shows — this is
required for Actions-deployed Pages, where the served files come from the
workflow's build artifact, not whatever's sitting in the repo root.

1. **At your DNS registrar** (wherever `irvingrivera.com` is registered),
   add these records:

   | Type | Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `irivera-irtsolutions.github.io` |

   (AAAA records for IPv6 are optional — GitHub's docs list
   `2606:50c0:8000::153` / `8001::153` / `8002::153` / `8003::153` for
   `@` if you want them.)

2. **In the repo**, go to **Settings → Pages → Custom domain**, type
   `irvingrivera.com`, and save. GitHub will show a DNS check — it can
   take anywhere from a few minutes to ~24h to go green depending on DNS
   propagation. If this is the org's first custom domain, GitHub may ask
   for a one-time domain verification (a TXT record) before it accepts
   it — the Settings page walks through that if it comes up.
3. Once the domain check passes, tick **Enforce HTTPS** (grayed out
   until GitHub finishes provisioning the certificate).

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
