export const CONTACT_MAILTO = "mailto:info@vsmecap.com";
export const DECK_MAILTO =
  "mailto:info@vsmecap.com?subject=Request%20Investment%20Deck%20(NDA)%20-%20VSMECAP";

export const NAV_LINKS = [
  { id: "basic", label: "B1-B11", pill: "blue" },
  { id: "comprehensive", label: "C1-C9", pill: "black" },
  { id: "uk-companies", label: "UK COMPANIES" },
  { id: "public-sector", label: "PUBLIC SECTOR" },
  { id: "product", label: "PRODUCT" },
  { id: "why-now", label: "WHY NOW" },
  { id: "moat", label: "MOAT" },
  { id: "market", label: "MARKET" },
  { id: "legal-basis", label: "LEGAL BASIS" },
  { id: "investment", label: "INVESTMENT" },
  { id: "partners", label: "PARTNERS" },
  { id: "about", label: "ABOUT US" },
  { id: "risk", label: "RISK AND LIMITATIONS" },
  { id: "faqs", label: "FAQS" },
  { id: "privacy", label: "PRIVACY" },
];

export const TICKER_ITEMS = [
  "AUDIT-READY OUTPUT — VSMECAP IS NOT A CERTIFIED OR OFFICIAL EFRAG PLATFORM",
  "INTERNAL TEMPLATE V1.2 — 13 MAY 2026",
  "RECOMMENDATION (EU) 2025/1710 ¶14–16 — VSME IS VOLUNTARY; EXTERNAL ASSURANCE IS OPTIONAL, NOT REQUIRED",
  "CHAIN-VERIFIED EVIDENCE • XBRL-TRACEABLE DISCLOSURES • LONDON, UK",
];

export const BASIC_MODULES = [
  { code: "B1", title: "Basis for preparation", desc: "Scope, consolidation basis and value-chain boundaries of the disclosures — which entities and operations the report covers." },
  { code: "B2", title: "Practices, policies and future initiatives", desc: "What the undertaking already does, and plans to do, in transitioning towards a more sustainable economy." },
  { code: "B3", title: "Energy and greenhouse gas emissions", desc: "Energy consumption in MWh and gross GHG emissions in tCO2e — Scope 1 and location-based Scope 2." },
  { code: "B4", title: "Pollution of air, water and soil", desc: "Pollutants emitted where the undertaking is already required to report them by law." },
  { code: "B5", title: "Biodiversity", desc: "Sites located in or near biodiversity-sensitive areas, and land-use metrics where relevant." },
  { code: "B6", title: "Water", desc: "Water withdrawal and consumption, in particular at sites in high water-stress areas." },
  { code: "B7", title: "Resource use, circular economy and waste", desc: "Waste generated, diverted to recycling and hazardous waste streams." },
  { code: "B8", title: "Workforce — general characteristics", desc: "Headcount and FTE by contract type, gender and country of employment." },
  { code: "B9", title: "Workforce — health and safety", desc: "Recordable work-related accidents and fatalities for own workers." },
  { code: "B10", title: "Workforce — remuneration, bargaining and training", desc: "Pay ratios, collective-bargaining coverage and average training hours per employee." },
  { code: "B11", title: "Convictions and fines", desc: "Convictions and fines for corruption and bribery in the reporting period." },
];

export const COMPREHENSIVE_MODULES = [
  { code: "C1", title: "Strategy and business model", points: "4 data points", desc: "How sustainability relates to the business model, key products, markets and stakeholder initiatives." },
  { code: "C2", title: "Practices and transition initiatives", points: "3 data points", desc: "Detailed description of practices, policies and future initiatives for transitioning towards a more sustainable economy." },
  { code: "C3", title: "GHG reduction targets and transition plan", points: "5 data points", desc: "Emission-reduction targets, the decarbonisation levers behind them and progress against plan." },
  { code: "C4", title: "Climate risks and opportunities", points: "4 data points", desc: "Physical and transition climate risks identified, and how the undertaking responds to them." },
  { code: "C5", title: "Additional workforce characteristics", points: "3 data points", desc: "Workforce breakdowns beyond B8 — age bands and employee turnover, where proportionate." },
  { code: "C6", title: "Human rights policies and processes", points: "3 data points", desc: "Policies, responsibilities and grievance channels covering the undertaking's own workforce." },
  { code: "C7", title: "Severe human rights incidents", points: "2 data points", desc: "Confirmed severe human-rights incidents connected to the workforce, and actions taken." },
  { code: "C8", title: "Revenues from certain sectors", points: "2 data points", desc: "Revenue exposure to excluded sectors and EU reference-benchmark exclusions." },
  { code: "C9", title: "Gender diversity in governance", points: "1 data point", desc: "Gender diversity ratio of the highest governance body." },
];

export const PRODUCT_STEPS = [
  { step: "01", title: "Ingest", desc: "Pull meter data (MPAN/MPRN), utility invoices, fleet and HR records into the 45 FTE Generic template. No manual re-keying." },
  { step: "02", title: "Verify chain hash", desc: "Every input is hashed and linked to the evidence it came from. The SHA-256 chain makes each disclosure traceable end-to-end." },
  { step: "03", title: "Output audit-ready pack", desc: "One pack covering VSME Annex I + II, with an XBRL instance mapped to the efrg:vsm_e taxonomy tags. Ready for an auditor, lender or buyer." },
];

export const MOAT_CARDS = [
  { title: "XBRL Taxonomy Lock", desc: "Disclosures are mapped field-by-field to efrg:vsm_e tags. Once a client's data flows through our mapping, switching means re-mapping everything." },
  { title: "Chain Verification", desc: "Hash-chained evidence from source document to disclosure. Incumbent form-fillers produce text; VSMECAP produces a verifiable trail." },
  { title: "UK 45 FTE Generic", desc: "A fixed template tuned to the typical UK SME — micro-undertaking friendly, own-walls Scope 1+2, MPAN/MPRN ingestion. Horizontal ESG tools do not ship this." },
  { title: "Bank API Moat", desc: "Direct meter and account-level data feeds via open-banking rails turn reporting into an automated feed, not an annual project." },
];

export const RISKS = [
  { title: "Not a certified EFRAG platform", desc: "VSMECAP output is audit-ready. It is not certified, assured or endorsed by EFRAG or any regulator." },
  { title: "Regulation may change", desc: "VSME is a voluntary standard. Delegated acts, omnibus changes or successor standards may alter what must be reported." },
  { title: "Input data quality", desc: "Outputs are only as complete as client inputs. Missing meter, invoice or HR records limit the pack's coverage." },
  { title: "Early-stage venture", desc: "Pre-revenue. No partner agreements are signed, and named relationships should not be assumed." },
  { title: "Competitive response", desc: "Incumbent ESG platforms may ship comparable SME modules, narrowing the first-mover window." },
  { title: "Bank API dependencies", desc: "Open-banking and meter data access depends on third-party APIs, accreditation and their commercial terms." },
];

export const FAQS = [
  { q: "Is VSMECAP an official EFRAG tool?", a: "No. VSMECAP is an independent product that maps to the public EFRAG VSME standard. It is not certified, endorsed or operated by EFRAG." },
  { q: "Is VSME reporting mandatory?", a: "No. Recommendation (EU) 2025/1710 keeps VSME voluntary. Pressure arrives through contracts — buyers, lenders and procurement frameworks asking for it." },
  { q: "What is the difference between Annex I and Annex II?", a: "Annex I is the Basic module (B1–B11) — the minimum disclosures. Annex II is the Comprehensive module (C1–C9), reported where undertakings choose or are asked to go further." },
  { q: "Does a VSMECAP pack count as assurance?", a: "No. The pack is audit-ready: structured, evidenced and traceable. Assurance itself is optional under the Recommendation (¶14–16) and must come from an independent assurance provider." },
  { q: "What is a chain hash?", a: "Each source document and each derived disclosure is hashed and linked to the previous one. An auditor can follow the chain from a reported figure back to the meter reading or invoice behind it." },
  { q: "What data do I need to start?", a: "Typically utility meter identifiers (MPAN/MPRN), energy invoices, fleet fuel records and basic HR headcount data. The 45 FTE Generic template lists exactly what is required." },
  { q: "Does it work for micro-undertakings?", a: "Yes. The 45 FTE Generic model is designed for small UK companies, covering own-walls Scope 1 and Scope 2 emissions as the default boundary." },
  { q: "Is the output PPN 06/21 ready?", a: "The public-sector pack is mapped to the Carbon Reduction Plan data points that PPN 06/21 procurement asks for. Final compliance remains the contracting authority's decision." },
  { q: "Can I file or share the report digitally?", a: "Yes. The pack includes an XBRL instance tagged to efrg:vsm_e elements, alongside a human-readable report, so it can be ingested by banks, buyers and audit tools." },
  { q: "Who sees my company's data?", a: "Only the parties you share the pack with. This website itself collects nothing — contact is by email only. See the Privacy section." },
  { q: "What does it cost?", a: "Pricing is shared with qualified counterparties under NDA as part of the investment and design-partner conversations." },
  { q: "How do I get the investment deck?", a: "Use the Request Investment Deck (NDA) button. It opens an email to info@vsmecap.com and the deck is shared after a mutual NDA." },
];

export const DRAFT_NOTE = "Draft copy — final wording to be confirmed.";
