export const CONTACT_MAILTO = "mailto:info@vsmecap.com";
export const DECK_MAILTO = "mailto:info@vsmecap.com";

export const NAV_LINKS = [
  { id: "basic", label: "B1-B11 Modules", pill: "blue" },
  { id: "comprehensive", label: "C1-C9 Modules", pill: "black" },
  { id: "uk-companies", label: "UK COMPANIES" },
  { id: "public-sector", label: "PUBLIC SECTOR" },
  { id: "product", label: "PRODUCT" },
  { id: "why-now", label: "WHY NOW" },
  { id: "moat", label: "POSITION" },
  { id: "market", label: "MARKET" },
  { id: "legal-basis", label: "LEGAL BASIS" },
  { id: "investment", label: "INVESTMENT" },
  { id: "partners", label: "PARTNERS" },
  { id: "about", label: "ABOUT US" },
  { id: "risk", label: "RISK AND LIMITATIONS" },
  { id: "faqs", label: "FAQS" },
  { id: "privacy", label: "PRIVACY" }
];

export const TICKER_ITEMS = [
  "STRUCTURED FOR REVIEW — NOT AUDITED — NOT CERTIFIED OR ENDORSED BY EFRAG",
  "FREE TIER AVAILABLE FOR ELIGIBLE NON-LISTED UNDERTAKINGS",
  "DIRECTIVE (EU) 2026/470 VALUE CHAIN CAP — SUPPORTS UNDERTAKINGS WITH UP TO 1,000 EMPLOYEES, WHERE IT APPLIES"
];

export const BASIC_MODULES = [
  { code: "B1", title: "Basis for preparation", desc: "Reporting option (Basic, or Basic with Comprehensive), individual or consolidated basis, reporting period and any subsidiaries covered." },
  { code: "B2", title: "Practices, policies and future initiatives", desc: "A narrative description of practices, policies and future initiatives for transitioning towards a more sustainable economy." },
  { code: "B3", title: "Energy and greenhouse gas emissions", desc: "Energy consumption and Scope 1 and Scope 2 greenhouse gas emissions, calculated from utility data. Scope 3 reporting is optional." },
  { code: "B4", title: "Pollution of air, water and soil", desc: "Pollutants released to air, water and soil, where the company is already required to report them to authorities." },
  { code: "B5", title: "Biodiversity", desc: "Sites located in or near biodiversity-sensitive areas, and land use." },
  { code: "B6", title: "Water", desc: "Water withdrawal and consumption, with additional detail for sites in areas of high water stress." },
  { code: "B7", title: "Resource use, circular economy and waste management", desc: "Waste generated, with hazardous waste identified, and any circular-economy practices." },
  { code: "B8", title: "Workforce — general characteristics", desc: "Number of employees (headcount or full-time equivalents), by contract type and gender." },
  { code: "B9", title: "Workforce — health and safety", desc: "Work-related accidents and fatalities." },
  { code: "B10", title: "Workforce — remuneration, collective bargaining and training", desc: "Pay relative to the minimum wage, gender pay gap, collective bargaining coverage and average training hours." },
  { code: "B11", title: "Convictions and fines for corruption and bribery", desc: "Convictions and fines for corruption or bribery during the reporting period." }
];

export const COMPREHENSIVE_MODULES = [
  { code: "C1", title: "Strategy: business model and sustainability-related initiatives", points: "Optional", desc: "Business model, key products and services, markets and business relationships, and any link to sustainability." },
  { code: "C2", title: "Practices, policies and future initiatives for the transition", points: "Optional", desc: "Further detail on practices, policies and future initiatives for a more sustainable economy." },
  { code: "C3", title: "GHG reduction targets and climate transition", points: "Optional", desc: "Greenhouse gas reduction targets and any climate transition plan." },
  { code: "C4", title: "Climate risks", points: "Optional", desc: "Climate-related risks and how the company’s exposure has been assessed." },
  { code: "C5", title: "Additional (general) workforce characteristics", points: "Optional", desc: "Workforce information beyond the Basic module." },
  { code: "C6", title: "Human rights policies and processes", points: "Optional", desc: "Human rights policies and processes for the company’s own workforce." },
  { code: "C7", title: "Severe negative human rights incidents", points: "Optional", desc: "Confirmed severe negative human rights incidents, if any." },
  { code: "C8", title: "Revenues from certain sectors and exclusion from EU reference benchmarks", points: "Optional", desc: "Revenue from certain sectors, such as fossil fuels, controversial weapons and tobacco." },
  { code: "C9", title: "Gender diversity ratio in the governance body", points: "Optional", desc: "The gender diversity ratio in the company’s governance body." }
];

export const PRODUCT_STEPS = [
  { step: "01", title: "Ingest", desc: "Upload utility bills. Meter identifiers (MPAN/MPRN) and consumption figures are extracted for you to check and correct." },
  { step: "02", title: "Integrity checks", desc: "Source files are listed alongside every figure. SHA-256 integrity hashing is part of the platform design and is in development." },
  { step: "03", title: "Output pack", desc: "Compile a reporting pack. JSON, CSV and PDF exports are available. Inline XBRL export is in development." }
];

export const MOAT_CARDS = [
  { title: "XBRL Taxonomy Alignment", desc: "Inline XBRL export aligned to EFRAG’s digital VSME taxonomy is in development, so that reports can be machine-readable." },
  { title: "Network Adoption", desc: "A free tier for eligible businesses lets customers and suppliers adopt the same format, so data can move along a supply chain." },
  { title: "Value Chain Cap Support", desc: "Built around Directive (EU) 2026/470, helping eligible smaller companies respond to data requests within the voluntary standard where the cap applies." },
  { title: "Utility Data Links", desc: "Automated links to utility feeds are planned. Today, data comes from uploaded bills." }
];

export const WHY_NOW_SECTIONS = [
  { title: "Value Chain Cap Now in Law", desc: "Directive (EU) 2026/470 entered into force on 18 March 2026. Member States have until 19 March 2027 to bring it into national law." },
  { title: "Digital Reporting Formats", desc: "EFRAG’s digital taxonomy for the VSME makes machine-readable reporting increasingly practical for small companies." },
  { title: "Lender and Buyer Interest", desc: "Banks and large customers increasingly ask suppliers for sustainability data in a standard format." }
];

export const MARKET_DYNAMICS = [
  { title: "The Non-Listed Market Gap", desc: "Most European and UK undertakings fall outside mandatory CSRD reporting, and many need a low-cost way to answer customer and lender requests." },
  { title: "Growing Stakeholder Interest", desc: "Buyers, banks and SMEs are looking for a standard format for sustainability data that does not depend on bespoke consultancy work." }
];

export const LEGAL_BASIS = [
  { title: "Directive (EU) 2026/470", desc: "The Omnibus I Directive, published on 26 February 2026. It introduces a value chain cap protecting undertakings with up to 1,000 employees from information requests beyond the voluntary standard, subject to national implementation." },
  { title: "Commission Recommendation (EU) 2025/1710", desc: "Adopted on 30 July 2025 and published on 5 August 2025. It recommends the VSME standard for voluntary use by non-listed SMEs. It is non-binding and an interim measure until a delegated act on a voluntary standard is adopted." }
];

export const RISKS = [
  { title: "Not a certified platform", desc: "VSMECAP outputs are structured for review but are not audited. The system is not certified or endorsed by EFRAG." },
  { title: "Regulation changes", desc: "VSME is voluntary. Future delegated acts or successor standards may alter requirements." },
  { title: "Data quality dependencies", desc: "Outputs depend entirely on user inputs. Missing or unreadable bills limit report coverage, and extracted values should always be checked." },
  { title: "Features in development", desc: "Integrity hashing, Inline XBRL export and automated utility data links are in development and are not yet available." },
  { title: "Early-stage company", desc: "No commercial contracts or strategic partnerships have been signed, and none should be assumed." },
  { title: "Competitive response", desc: "Established accounting and ESG software providers may introduce SME reporting modules." },
  { title: "Third-party data access", desc: "Open-banking and utility data access would depend on the terms of external providers." }
];

export const FAQS = [
  { q: "Is VSMECAP an official EFRAG tool?", a: "No. VSMECAP maps independently to the public EFRAG VSME standard. It is not certified or endorsed by EFRAG." },
  { q: "Is VSME mandatory for UK businesses?", a: "No. VSME is a voluntary standard that originates in the EU and is not UK law. Customers, banks or investors may ask you to use it." },
  { q: "Does using VSMECAP make my business compliant with the law?", a: "No. VSMECAP helps you prepare a structured voluntary report. It does not certify compliance with any UK or EU law." },
  { q: "What is the Value Chain Cap?", a: "Under Directive (EU) 2026/470, companies in a reporting company’s value chain with up to 1,000 employees may decline information requests that go beyond the voluntary standard. Member States have until 19 March 2027 to bring the rules into national law." },
  { q: "Am I a protected undertaking?", a: "It depends on your size, who is asking and which country’s rules apply. The cap is EU law, so a UK company is not automatically covered. Take professional advice if you are unsure." },
  { q: "Is the EU Recommendation binding?", a: "No. Commission Recommendation (EU) 2025/1710 encourages large companies and financial institutions to base their requests on the VSME standard as far as possible, but it is not binding." },
  { q: "What are the Basic and Comprehensive modules?", a: "The Basic module covers disclosures B1 to B11 and is the minimum level. The Comprehensive module adds C1 to C9 for companies that want or need to report in more detail." },
  { q: "Which module should I choose?", a: "Start with Basic. Add Comprehensive when a customer, lender or investor asks for more detail." },
  { q: "Why are my customers asking for sustainability data?", a: "Larger companies need information from their supply chains for their own reporting and risk reviews. VSME gives you a standard format for your answers." },
  { q: "Do I have to publish my report?", a: "No. You decide who receives your report." },
  { q: "Are the figures checked or audited?", a: "No. Reports are structured for review and show their source files, but they are not audited. Formal assurance must come from an independent, licensed assurance provider." },
  { q: "Is there a free tier?", a: "A free tier is available for eligible non-listed undertakings with up to 1,000 employees. Companies above that size, and bid preparation under PPN 06/21, are on commercial terms. Please check current terms before you sign up." },
  { q: "What data do I need to start?", a: "Typically 12 months of electricity, gas and water bills, including meter identifiers (MPAN/MPRN), plus basic headcount and policy information for the Basic module." },
  { q: "Which emission factors are used?", a: "UK Government (DESNZ) greenhouse gas conversion factors. The edition used is stated in your report. Always confirm it matches your reporting year." },
  { q: "Where is my data processed?", a: "The current version processes your files locally in your browser and does not upload them to a server. Your data is handled in line with UK GDPR. See the Privacy section for details." },
  { q: "Who owns my data?", a: "You do. Please contact info@vsmecap.com with any questions about your data or to request deletion." },
  { q: "Which formats can I export?", a: "JSON, CSV and a watermarked draft PDF are available now. Inline XBRL export is in development." },
  { q: "Can I use the reports for UK public tenders?", a: "Reports are designed to support the information typically needed for PPN 06/21 carbon reduction plans. Always check the requirements of each tender." },
  { q: "Can my accountant or adviser use VSMECAP?", a: "Please contact info@vsmecap.com to discuss access for your accountant or sustainability adviser." },
  { q: "Does VSMECAP replace professional advice?", a: "No. VSMECAP provides reporting software and guidance. It is not legal, accounting or financial advice." },
  { q: "How do I get support or ask for a demo?", a: "Email info@vsmecap.com and we will reply as soon as we can." }
];
