# VSMECAP™ — Investor Single-Page Site

## Original Problem Statement
Single-page investor site for vsmecap.com — VSMECAP™ SME Sustainability Data Passport, London UK. Minimal design: white background, charcoal text, green accent #00C08B, no animations, no external images/deps. All copy supplied verbatim by user. Email-only contact (mailto:info@vsmecap.com). No mention of IONOS, Flannery, ABC, Balfour, RSM, Clearsulting.

## Architecture
- Single static HTML file: /app/frontend/public/index.html (inline CSS + tiny inline JS for mailto form)
- Served by the CRA frontend dev server on port 3000; src/index.js is a no-op (no React mount)
- No backend, no database, no integrations

## Implemented (2026-10-15)
- Header: logo, nav (Product, Why Now, Market, Partners, About Us, Contact), Request Deck mailto button
- Hero: EU 2025/1710 tag, headline, sub, 2 mailto CTAs, trust row
- Product 3 tiers (T0 connector / T1 collector / T2 free reporter)
- Why Now: regulation, whitespace (14 Oct 2026 review), moat
- Market: Universe 49,600 / TAM £2.475bn / SAM £249.5m / SOM £798k (all flagged illustrative)
- Partners: Workiva-compatible workflow, assurance-readiness, implementation & finance + callout
- Business Model pricing table (Intro £39.9k / Standard £49.9k / Enterprise £89.9k)
- Traction/LOIs with Sign LOI mailto CTA
- Use of Funds £500k breakdown, terms (16.67%, SEIS/EIS, founder 73.33% + 10% ESOP), exit scenarios
- About: Salil Patankar, trademark pending Classes 9/42, LinkedIn button (linkedin.com/in/salilpatankar)
- Contact: mailto-only form (Name/Company/Email/Interest) via inline JS
- Footer: © 2026 + disclaimer
- data-testids on all interactive elements

## Verified
- curl 200 + screenshot: all 9 sections render, no external resources (only LinkedIn outbound link + Workiva tokenUrl as text)

## Backlog
- P1: Confirm LinkedIn URL is correct (user said "replace if different")
- P2: Point vsmecap.com DNS at deployment when going live

## Update (2026-10-15, iteration 2)
- Floating back-to-top button: 48px black circle, white ↑, appears after 300px scroll, smooth scroll to top
- T1 wording: replaced "substantially cheaper" with reference cost model wording; added pricing disclaimer note under Business Model
- Business Model table → Basic/Standard/Premium cards with qualification criteria (employees/turnover/supplier counts, DPA SOC 2 on Premium)
- Product T0/T1/T2 kickers updated with size/turnover bands
- LinkedIn: exact URL linkedin.com/in/salil-patankar-94892a367, 36px #0A66C2 SVG icon only
- Note: edits to public/index.html require `sudo supervisorctl restart frontend` (dev server caches it)

## Update (2026-10-15, iteration 3)
- Back-to-top restyled: rgba(18,18,18,0.35) + backdrop blur 6px + 1px rgba(255,255,255,0.3) border, hover rgba(18,18,18,0.65)
- Scroll-to-top fixed: id="top" moved to header; click does scrollIntoView(block:start) + window.scrollTo(0, smooth) — header now included
- Mobile fixes: html/body overflow-x hidden, wrap 1100px, nav gap clamp, h1 clamp(28px,6vw,42px), grids 1fr and 16px padding under 600px, tables scroll-x under 600px (exit table was 463px overflow)
- Verified at 390px: 0 page-level overflow, button styles + click confirmed (testing_agent tool not available in this environment; verified via Playwright screenshots)

## REBUILD (2026-10-23) — Production Spec v1.2
Page fully rebuilt as React + Tailwind per approved v1.2 plan. Replaces the investor one-pager (pricing/traction/use-of-funds removed).
- Sticky header: chain logo, badges (UK COMPANIES • 45 FTE GENERIC black pill, FIRST-MOVER teal), black CONTACT mailto button
- Pill nav strip (B1-B11 blue #1E40AF, C1-C9 black + 13 section links), regulatory marquee ticker (#0F172A, only animation)
- Hero: CSS/SVG chain logo, VERIFYING SME CHAIN CAPITAL title, terminal-style chain-hash/XBRL block
- B1–B11 (blue) + C1–C9 (amber) module cards with efrg:vsm_e{code}_disclosure tags — DRAFT copy
- UK Companies (45 FTE Generic, MPAN/MPRN, own-walls S1+2), Public Sector (PPN 06/21), Product 3-step chain
- Why Now (Rec 2025/1710 C(2025) 4984 final, EFRAG Dec 2024), Moat 4 cards, Market (TAM NDA / SAM 5.5M / SOM 45 FTE)
- Legal Basis + black Investment card with REQUEST INVESTMENT DECK (NDA) mailto
- Partners & About (Salil Patankar, LinkedIn icon linkedin.com/in/salil-patankar-94892a367)
- 6 red-outlined risk cards, 12 FAQ cards, Privacy (Effective 13 May 2026), dark footer #0F172A
- Scroll-top button retained (translucent, 300px threshold, smooth)
- All copy in src/data/content.js for easy Phase-2 edits
- Verified: all testids present, 0 mobile overflow, ticker + scroll-top functional (Playwright)
## Backlog
- P1: user copy review pass (all card/FAQ text marked draft), favicon, SEO meta polish
- P2: deploy + point vsmecap.com; optional hosted NDA deck download
