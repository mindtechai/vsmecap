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
