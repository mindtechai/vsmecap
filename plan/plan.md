# VSMECAP Frontend — CRA/CRACO to Vite Migration

The VSMECAP single-page site's React frontend is migrated from Create React App / CRACO to Vite, so it compiles natively on Node 22/24 and deploys cleanly on Vercel. The page itself does not change: same design, same sections, same behaviour — only the build toolchain underneath is swapped, and the result is committed and pushed to GitHub.

## Who it's for
- The site owner, who wants builds that run on modern Node (22/24) on Vercel without CRA legacy workarounds
- Investors, partners and SME visitors, who should notice no difference when visiting the page

## Core features and experience
- **Identical page output**: the v1.2 site (header, ticker, hero, B1–B11 and C1–C9 modules, all sections, FAQs, privacy, footer, scroll-to-top) renders exactly as it does today
- **Vite build pipeline**: `vite` and `@vitejs/plugin-react` replace `react-scripts` and `@craco/craco`; `index.html` moves to the frontend root with a module script entry and no `%PUBLIC_URL%` placeholders
- **Standard scripts**: `start` runs the Vite dev server, `build` produces the `build` output folder (kept as `build` so Vercel paths match), `preview` serves the production build
- **Environment variables converted**: any `REACT_APP_` variables become `VITE_`, with code references switched from `process.env` to `import.meta.env` (the current page makes no API calls, so this is precautionary)
- **Live preview preserved**: the Emergent preview keeps serving the site on the same port via the Vite dev server
- **Committed and pushed**: changes are committed and pushed to the already-configured GitHub remote, main branch

## User flow
Unchanged for visitors: land on hero, use pill nav, scroll the page, use mailto CTAs and scroll-to-top. For the owner: push to main → Vercel builds with Vite on Node 22/24 → site deploys without errors.

## UI/UX feel
No visual change. The migration is invisible by design; a successful migration is one nobody notices.

## Implementation phases
- **Phase 1 (built now — MVP)**: complete toolchain migration per the approved steps — remove react-scripts/craco, install Vite packages, create vite.config.js (with the existing `@` → `src` import alias preserved and dev server kept on the preview port), move and update index.html, convert env var naming, update scripts, verify a clean production build, confirm the preview renders identically, commit and push to main
- **Phase 2**: connect or re-point the Vercel project to the migrated repo, confirm a production deploy on Node 22/24, set any `VITE_` variables in Vercel if ever needed
- **Phase 3**: resume content work — draft copy review pass, favicon, SEO meta polish, and eventually pointing vsmecap.com at the deployment

## Assumptions
- The git remote in this workspace is already configured with working push credentials, and pushing to `main` directly is acceptable (no PR flow) — confirmed by user
- The Emergent preview should keep working via the Vite dev server on the same port — confirmed by user
- Build output stays in the `build` directory to match existing Vercel deployment paths — per user's spec
- `react-scripts` and `@craco/craco` are fully removed rather than kept as fallback; CRACO config is deleted
- The current frontend code makes no live API calls, so env conversion is naming-only and no behaviour depends on `REACT_APP_BACKEND_URL` at runtime; the `.env` value is preserved under the new `VITE_` name for future use
- No changes to the backend, the page content, or any copy are in scope
- The existing `@/` import alias used across components must keep working after migration
