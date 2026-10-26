import React from "react";

const CONTACT_MAILTO = "mailto:info@vsmecap.com";

const LOCAL_TICKER = [
  "AUDIT-READY OUTPUT NOT AUDITED 🔴 X NOT CERTIFIED OFFICIAL EFRAG PLATFORM",
  "VIRAL NETWORK INTRODUCTIONS ACTIVE 🔴 X ACQUISITION ENGINE METRIC CAC = 0",
  "REGULATION (EU) 2026/1560 VALUE CHAIN CAP COMPLIANT — PROTECTING UNDERTAKINGS UNDER 1,000 EMPLOYEES"
];

const LOCAL_FAQS = [
  { q: "Is VSMECAP an official EFRAG tool?", a: "No. VSMECAP maps independently to the public EFRAG VSME standard framework." },
  { q: "What is the Value Chain Cap?", a: "Under Regulation (EU) 2026/1560, large corporate buyers cannot legally demand ESG metrics from you that exceed official VSME parameters." },
  { q: "Am I classified as a protected undertaking?", a: "Yes. Directive (EU) 2026/470 shields non-listed firms under 1,000 employees from excessive custom questionnaire requests." },
  { q: "What is a chain hash?", a: "Each data record is cryptographically hashed, allowing independent auditors to trace final numbers back to source documents without spreadsheet chaos." },
  { q: "Is software installation required?", a: "No. VSMECAP runs as an automated web-based cloud pipeline via secure data ingestion streams." },
  { q: "Is this platform free for small businesses?", a: "Yes, the platform features a permanently free reporting tier for true non-listed undertakings under 1,000 employees." },
  { q: "What data points are required to start?", a: "Typically utility meter point identifiers (MPAN/MPRN), raw energy invoices, fleet fuel parameters, and basic payroll characteristics." },
  { q: "Does a VSMECAP pack count as assurance?", a: "No. The pack is audit-ready and traceable. Formal external assurance must come from an independent, licensed assurance provider." },
  { q: "How long does deployment take?", a: "Standard pipeline configurations complete ingestion mappings within 48 hours of source linking." },
  { q: "Can we export reports for UK public tenders?", a: "Yes. All ledger exports structurally align with PPN 06/21 carbon reduction format guidelines." },
  { q: "Who retains data governance?", a: "The reporting enterprise retains absolute data ownership. Profiles are hashed locally to eliminate third-party leaks." },
  { q: "What happens if EFRAG modifies taxonomy specs?", a: "VSMECAP pipeline conversion tables update dynamically to ensure format parity with future schema versions." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#26292e] relative pb-12 selection:bg-[#0D9488]/10 scroll-smooth">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeCrawl { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes topBannerScrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
        .animate-marquee-scroll { animation: marqueeCrawl 48s linear infinite !important; }
        .animate-top-banner-right { animation: topBannerScrollRight 32s linear infinite !important; }
        
        .force-visible-nav {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
        }
        .force-visible-ticker {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .custom-no-scrollbar::-webkit-scrollbar { display: none !important; }
        .custom-no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        
        section { scroll-margin-top: 140px; }
      `}} />

      {/* ORANGE TOP RIBBON TICKER */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden sticky top-0 z-50 flex items-center border-b border-orange-700/30 select-none">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>{"PLATFORM OFFER: PERMANENTLY FREE TO SMEs <1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  PLATFORM OFFER: PERMANENTLY FREE TO SMEs <1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  • "}</span>
        </div>
      </div>

      {/* FIXED NAVIGATION HEADER */}
      <header className="sticky top-[36px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* BRAND LOGO */}
            <a href="#top" className="flex items-center flex-shrink-0 gap-2 select-none">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">
                {"VSME"}<span className="text-[#0D9488]">{"CAP"}</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                {"PLATFORM"}
              </span>
            </a>

            {/* UNCONDITIONAL MENU LINKS - Visible cross-platform natively */}
            <nav className="force-visible-nav custom-no-scrollbar items-center gap-x-4 sm:gap-x-6 text-[13px] sm:text-[14.5px] font-bold text-slate-700 py-2">
              <a href="#solutions" className="hover:text-[#0D9488] whitespace-nowrap transition-colors">{"Solutions"}</a>
              <a href="#product" className="hover:text-[#0D9488] whitespace-nowrap transition-colors">{"Product"}</a>
              <a href="#moat" className="hover:text-[#0D9488] whitespace-nowrap transition-colors">{"Moat"}</a>
              <a href="#faqs" className="hover:text-[#0D9488] whitespace-nowrap transition-colors">{`FAQs (${LOCAL_FAQS.length})`}</a>
            </nav>

            {/* CTA ACTION BUTTON */}
            <div className="flex items-center gap-x-3 flex-shrink-0">
              <span className="hidden md:inline-block rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                {"VSME COMPLIANT • <1,000 EMPLOYEES"}
              </span>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10">{"Contact"}</a>
            </div>

          </div>
        </div>
      </header>

      {/* LOWER DARK TICKER - Fixed block layout tracking */}
      <div className="force-visible-ticker w-full bg-[#0F172A] border-y border-slate-800/80 py-4 overflow-hidden relative z-30 select-none">
        <div className="relative flex items-center w-full h-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap gap-x-12 animate-marquee-scroll text-slate-300 font-bold text-[13px] tracking-wide">
            {[...LOCAL_TICKER, ...LOCAL_TICKER].map((text, idx) => (
              <span key={idx} className="flex items-center gap-x-3">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY MAIN CONTAINER AREA */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 space-y-24">
        
        {/* HERO SOLUTIONS SECTION */}
        <section id="solutions" className="space-y-6">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-slate-900 leading-tight">
            {"AUDIT-READY OUTPUT • ENTERPRISE CONTROL LAYER • VSME B1-B11 CAP"}
          </h1>
          <p className="text-lg font-bold text-[#EA580C] uppercase tracking-wide">
            {"THE CAP THAT STOPS SPREADSHEET CHAOS."}
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed text-[15px] font-medium">
            {"VSMECAP is the Audit-Ready output for the enterprise control layer for VSME. The first-mover cap that standardizes B1-B11 and C1-C9 across UK and EU value chains."}
          </p>
        </section>

        {/* PRODUCT ARCHITECTURE */}
        <section id="product" className="border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-black text-slate-900 mb-4">{"Product Architecture"}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            {"Our automated system hooks into secure data extraction points, aligning operational indicators with public framework schemas. Keep your internal ledger clean, traceable, and ready for deployment within 48 hours."}
          </p>
        </section>

        {/* MARKET MOAT */}
        <section id="moat" className="border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-black text-slate-900 mb-4">{"Market Moat"}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            {"With corporate tracking demands growing, VSMECAP secures your market positioning. Cryptographic ledger hashing seals your reporting pipeline from structural modifications and compliance overlap."}
          </p>
        </section>

        {/* ACCORDION FAQ SECTION */}
        <section id="faqs" className="border-t border-slate-100 pt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              {"Frequently Asked Questions"}
            </h2>
            <p className="text-slate-500 font-bold text-[14px] mt-1">
              {`Showing all ${LOCAL_FAQS.length} structural framework items`}
            </p>
          </div>
          
          <div className="grid gap-4 max-w-4xl">
