# VSMECAP — Production Spec v1.2 Rebuild (Plan)

The VSMECAP one-pager is rebuilt from scratch to match Internal template v1.2 (13 May 2026): an audit-readiness product page for VSME Annex I + II reporting, with full B1–B11 and C1–C9 taxonomy-mapped data modules, risk disclosures, and FAQs. It fully replaces the current investor page — existing pricing, traction and use-of-funds sections are removed.

## Who it's for
- UK SME owners and their accountants preparing VSME sustainability disclosures
- Public sector buyers and procurement teams needing PPN 06/21-ready carbon reporting
- Investors and partners reviewing the venture (NDA-gated deck, mailto contact)

## Core features and experience
- **Sticky header**: VSMECAP logo + "VSMECAP AUDIT-READY 2026 — VERIFIED SME CHAIN CAPITAL", two badges (UK COMPANIES • 45 FTE GENERIC — black pill; FIRST-MOVER — teal pill), black CONTACT button (mailto:info@vsmecap.com)
- **Pill navigation strip**: active pills B1-B11 (blue #1E40AF) and C1-C9 (black), plus links to UK COMPANIES, PUBLIC SECTOR, PRODUCT, WHY NOW, MOAT, MARKET, LEGAL BASIS, INVESTMENT, PARTNERS, ABOUT US, RISK AND LIMITATIONS, FAQS, PRIVACY
- **Regulatory marquee ticker** (black #0F172A band): audit-ready/not-certified disclaimer, template version and timestamp, Rec 14/15-16 assurance notes
- **Hero**: centered green VSMECAP chain logo (CSS/SVG only, no external images), title "VERIFYING SME CHAIN CAPITAL — FIRST-MOVER ENTERPRISE CONTROL LAYER FOR VSME ANNEX I + II", terminal-style code block with chain-hash / XBRL trace log copy
- **B1–B11 Basic cards** (blue accent): 11 cards, full EFRAG Annex I module mapping, each with description and XBRL taxonomy tag (`efrg:vsm_e B*_disclosure`)
- **C1–C9 Comprehensive cards** (amber/orange accent): 9 cards with points, descriptions, taxonomy tags
- **UK Companies — 45 FTE Generic model**: micro-undertakings template, MPAN/MPRN meter ingestion, own-walls Scope 1+2
- **Public Sector**: procurement-ready pack mapped to PPN 06/21 CRPs
- **Product Verification Chain**: 3 step cards — Ingest → Verify chain hash → Output audit-ready pack
- **Why Now**: EC Recommendation 30 July 2025 C(2025) 4984 final & EFRAG Dec 2024
- **Moat**: 4 cards — XBRL Taxonomy Lock, Chain Verification, UK 45 FTE Generic, Bank API Moat
- **Market**: blueprint matrix — TAM (NDA-gated), SAM UK SME 5.5M, SOM 45 FTE Generic
- **Legal Basis & Investment Deck**: black card with REQUEST INVESTMENT DECK (NDA) button (mailto:info@vsmecap.com)
- **Partners & About Us**: accountancy & tax practitioners background
- **Risk and Limitations**: 6 red-outlined warning cards
- **FAQs**: 12 white grid cards covering legal, technical and audit questions
- **Privacy section** ("Privacy — Effective 13 May 2026"), dark footer (#0F172A), floating scroll-to-top button (current translucent style retained)

## User flow
Single scrollable page. Visitor lands on hero → reads the regulatory ticker → jumps via pill nav to any section → reviews modules, moat, market, risks and FAQs → acts via CONTACT or REQUEST INVESTMENT DECK (NDA), both opening their email client addressed to info@vsmecap.com. Scroll-to-top returns to the header.

## UI/UX feel
White background, charcoal body text, VSMECAP green for the logo and primary accents; section-level accent colors exactly per spec (blue #1E40AF basic modules, amber/orange comprehensive, black/dark slate for regulatory and investment blocks, red outlines for risk cards). Flat and minimal — no imagery, no gradients; the only motion is the required marquee ticker and smooth scrolling. Fully responsive: cards stack to one column on mobile, nav wraps, headline scales down.

## Implementation phases
- **Phase 1 (built now — MVP)**: full React + Tailwind rebuild of the page above with all sections, authored draft copy for B1–B11 / C1–C9 / risks / FAQs (marked as draft for user edit), mailto CTAs, ticker, scroll-to-top, responsive layout
- **Phase 2**: copy review pass — user edits/replaces the draft card and FAQ text; add favicon; SEO meta polish
- **Phase 3**: deploy to production and point vsmecap.com; optional hosted NDA deck download to replace the mailto

## Assumptions
- The v1.2 spec fully replaces the existing page (confirmed by user)
- All card, risk and FAQ copy is authored from the public EFRAG VSME standard and the spec, marked as draft (confirmed by user)
- CONTACT and REQUEST INVESTMENT DECK (NDA) use mailto:info@vsmecap.com (confirmed by user)
- The marquee ticker overrides the earlier "no animations" rule — the spec explicitly requires it; everything else stays animation-free
- Taxonomy tags use the `efrg:vsm_e` prefix exactly as written in the spec, presented as product naming rather than a claim of official EFRAG schema membership (ticker already discloses "not certified official EFRAG platform")
- TAM stays NDA-gated (no number shown); SAM 5.5M and SOM 45 FTE Generic shown as spec'd
- No backend, database or external services are needed; the page remains fully static content-wise
- Existing green accent #00C08B is kept for the logo/primary accents alongside the new spec colors
