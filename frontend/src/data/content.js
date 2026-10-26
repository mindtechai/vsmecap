export const CONTACT_MAILTO = "mailto:info@vsmecap.com";
export const DECK_MAILTO = "mailto:info@vsmecap.com";

export const NAV_LINKS = [
  { id: "basic", label: "B1-B11 Modules", pill: "blue" },
  { id: "comprehensive", label: "C1-C9 Modules", pill: "black" },
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
  { id: "privacy", label: "PRIVACY" }
];

export const TICKER_ITEMS = [
  "STRUCTURED FOR REVIEW — NOT AUDITED — NOT CERTIFIED OR ENDORSED BY EFRAG",
  "FREE TIER AVAILABLE FOR ELIGIBLE NON-LISTED UNDERTAKINGS",
  "DIRECTIVE (EU) 2026/470 VALUE CHAIN CAP — SUPPORTS UNDERTAKINGS WITH UP TO 1,000 EMPLOYEES, WHERE IT APPLIES"
];

export const BASIC_MODULES = [
  { code: "B1", title: "Basis for preparation", desc: "Explicit definition of entity scope, reporting period, and voluntary basis per Recital 2 under 1,000 employee parameters." },
  { code: "B2", title: "Practices, policies and future initiatives", desc: "Qualitative narrative disclosures detailing structural sustainable transition targets. Qualitative only in Basic." },
  { code: "B3", title: "Energy and greenhouse gas emissions", desc: "Own-walls Scope 1 and Scope 2 tracking in MWh and tCO2e via metered utility points. Excludes Scope 3 fields." },
  { code: "B4", title: "Pollution of air, water and soil", desc: "Standardized yes/no baseline declarations tracking operational atmospheric and aquatic pollutant exposures." },
  { code: "B5", title: "Biodiversity", desc: "Qualitative narrative log tracking proximity to protected areas or high-conservation value geographies." },
  { code: "B6", title: "Water", desc: "Total water extraction and consumption profiles across high water-stress operational sectors." },
  { code: "B7", title: "Resource use, circular economy and waste", desc: "Total weight metrics splitting hazardous vs non-hazardous components. No full circularity metrics required." },
  { code: "B8", title: "Workforce — general characteristics", desc: "Standardized headcount breakdowns by Full-Time Equivalent (FTE) benchmarks and employment contract shapes." },
  { code: "B9", title: "Workforce — health and safety", desc: "Frequency tracking of recordable occupational accidents and fatal workplace safety occurrences." },
  { code: "B10", title: "Workforce — remuneration and training", desc: "Internal wage gap percentiles, collective-bargaining safety coverage, and average annual training hours." },
  { code: "B11", title: "Convictions and fines", desc: "Formal transparency tracker logging regulatory citations and fines related to corruption or bribery." }
];

export const COMPREHENSIVE_MODULES = [
  { code: "C1", title: "Strategy and business model", points: "4 data points", desc: "Gated per Para 6. Structural interaction of core strategy with material downstream sustainability dependencies." },
  { code: "C2", title: "Additional workforce metrics", points: "3 data points", desc: "Triggered if exceeding 50 employees. Deeper turnover rates and granular internal equity parameters." },
  { code: "C3", title: "Scope 3 GHG Categories", points: "5 data points", desc: "Value-chain supplier emissions logs. Optional in Comprehensive tracking with a 3-year safe harbor." },
  { code: "C4", title: "Climate transition risks", points: "4 data points", desc: "Scenario vulnerability analysis tracking financial resilience planning against acute physical hazards." },
  { code: "C5", title: "Own workforce human rights", points: "3 data points", desc: "Codified due diligence paths, grievance channels, and non-retaliation operational mechanisms." },
  { code: "C6", title: "Workers in the value chain", points: "3 data points", desc: "Targeted policy tracking focused explicitly on upstream procurement environments and supplier networks." },
  { code: "C7", title: "Affected communities", points: "2 data points", desc: "Local impact declarations triggered only if undertakings operate near sensitive geographic sites." },
  { code: "C8", title: "Consumers and end-users", points: "2 data points", desc: "Product responsibility metrics, data privacy tracking, and consumer access control logs." },
  { code: "C9", title: "Business conduct supplement", points: "1 data point", desc: "Corporate payment practices, localized lobbying transparency parameters, and supplier relationships." }
];

export const PRODUCT_STEPS = [
  { step: "01", title: "Ingest", desc: "Map utility meter indices (MPAN/MPRN) and raw data streams directly into the structured EFRAG framework." },
  { step: "02", title: "Verify Chain Hash", desc: "Generate SHA-256 hashes from source files through to final figures, so each number can be traced back to its source." },
  { step: "03", title: "Output Pack", desc: "Compile reporting packs mapped to Inline XBRL, JSON, and CSV formats." }
];

export const MOAT_CARDS = [
  { title: "XBRL Taxonomy Alignment", desc: "Exports are mapped to EFRAG’s digital VSME taxonomy so reports stay structured and machine-readable." },
  { title: "Network Adoption", desc: "A free tier for eligible businesses lets customers and suppliers adopt the same format, so data can move along a supply chain." },
  { title: "Value Chain Cap Support", desc: "Built around Directive (EU) 2026/470, helping eligible smaller companies respond to data requests within the voluntary standard where the cap applies." },
  { title: "Utility Data Links", desc: "Automated links to utility feeds can turn annual reporting into a continuous process, subject to provider terms." }
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
  { title: "Directive (EU) 2026/470", desc: "The Omnibus I Directive, published on 26 February 2026. It introduces a value chain cap protecting undertakings with up to 1,000 employees from information requests beyond the voluntary standard." },
  { title: "Voluntary standard for SMEs (VSME)", desc: "Developed by EFRAG as a voluntary reporting framework. It is not UK law. Check the current status of the standard and related delegated acts." }
];

export const RISKS = [
  { title: "Not a certified platform", desc: "VSMECAP outputs are structured for review but are not audited. The system is not certified or endorsed by EFRAG." },
  { title: "Regulation changes", desc: "VSME is voluntary. Future delegated acts or successor standards may alter requirements." },
  { title: "Data quality dependencies", desc: "Outputs depend entirely on user inputs. Missing meter files limit final report coverage." },
  { title: "Early-stage venture", desc: "Pre-revenue. No strategic partner contracts are signed, and relationships are not assumed." },
  { title: "Competitive response", desc: "Incumbent legacy accounting tools may introduce simple SME modules, narrowing our first-mover window." },
  { title: "Third-party API frameworks", desc: "Open-banking and utility network access depends entirely on external API provider terms." }
];

export const FAQS = [
  { q: "Is VSMECAP an official EFRAG tool?", a: "No. VSMECAP maps independently to the public EFRAG VSME standard. It is not certified or endorsed by EFRAG." },
  { q: "Is VSME mandatory for UK businesses?", a: "No. VSME is a voluntary standard that originates in the EU and is not UK law. Customers, banks or investors may ask you to use it." },
  { q: "Does using VSMECAP make my business compliant with the law?", a: "No. VSMECAP helps you prepare a structured voluntary report. It does not certify compliance with any UK or EU law." },
  { q: "What is the Value Chain Cap?", a: "Under Directive (EU) 2026/470, companies in a reporting company’s value chain with up to 1,000 employees may decline information requests that go beyond the voluntary standard. Member States have until 19 March 2027 to bring the rules into national law." },
  { q: "Am I a protected undertaking?", a: "It depends on your size, who is asking and which country’s rules apply. The cap is EU law, so a UK company is not automatically covered. Take professional advice if you are unsure." },
  { q: "What are the Basic and Comprehensive modules?", a: "The Basic module covers disclosures B1 to B11 and is the minimum level. The Comprehensive module adds C1 to C9 for companies that want or need to report in more detail." },
  { q: "Which module should I choose?", a: "Start with Basic. Add Comprehensive when a customer, lender or investor asks for more detail." },
  { q: "Why are my customers asking for sustainability data?", a: "Larger companies need information from their supply chains for their own reporting and risk reviews. VSME gives you a standard format for your answers." },
  { q: "Do I have to publish my report?", a: "No. You decide who receives your report." },
  { q: "What is a chain hash?", a: "Each data record is hashed with SHA-256, so a reviewer can trace final figures back to the source documents." },
  { q: "Is software installation required?", a: "No. VSMECAP runs as a web-based cloud service using secure data ingestion." },
  { q: "Is there a free tier?", a: "A free tier is available for eligible non-listed undertakings with up to 1,000 employees. Please check current terms before you sign up." },
  { q: "What data do I need to start?", a: "Typically utility meter point identifiers (MPAN/MPRN), energy invoices, fleet fuel data, and basic headcount and payroll information." },
  { q: "Does a VSMECAP report count as assurance?", a: "No. The report is structured for review and traceable to source data, but it is not audited. Formal assurance must come from an independent, licensed assurance provider." },
  { q: "How long does setup take?", a: "Typical set-up of data mappings takes around 48 hours once your source data is linked, but this depends on the quality and completeness of your data." },
  { q: "Can I use the reports for UK public tenders?", a: "Exports are designed to support the information typically needed for PPN 06/21 carbon reduction plans. Always check the requirements of each tender." },
  { q: "Who owns my data?", a: "You do. Your records are hashed locally to support integrity, and your data is handled in line with UK GDPR. See the Privacy section for details." },
  { q: "Can I export or delete my data?", a: "Reports can be exported as Inline XBRL, JSON and CSV. To request deletion of your data, contact info@vsmecap.com." },
  { q: "Can my accountant or adviser use VSMECAP?", a: "Please contact info@vsmecap.com to discuss access for your accountant or sustainability adviser." },
  { q: "Does VSMECAP replace professional advice?", a: "No. VSMECAP provides reporting software and guidance. It is not legal, accounting or financial advice." },
  { q: "How do I get support or ask for a demo?", a: "Email info@vsmecap.com and we will reply as soon as we can." }
];
