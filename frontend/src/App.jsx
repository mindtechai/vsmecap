import React, { useState } from "react";

// 🌐 1. CRITICAL CENTRAL REGULATORY AND COMPLIANCE DATA
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#26292e] relative pb-12 selection:bg-[#0D9488]/10">
      
      {/* ⚡ INJECTED MULTI-ANIMATION SPEED CONTROLLERS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeCrawl { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes topBannerScrollRight { 0% { transform: translateX(-25%); } 100% { transform: translateX(0%); } }
        .animate-marquee-scroll { animation: marqueeCrawl 48s linear infinite !important; }
        .animate-top-banner-right { animation: topBannerScrollRight 32s linear infinite !important; }
      `}} />

      {/* ========================================================================= */}
      {/* 🚀 2. HIGH-VISIBILITY LEFT-TO-RIGHT CRAWLING ORANGE ALERT BANNER */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden sticky top-0 z-50 flex items-center border-b border-orange-700/30 select-none">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 3. GLOBAL HEADER AND RESPONSIVE NAVIGATION DRAWER */}
      {/* ========================================================================= */}
      <header className="sticky top-[36px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* BRAND LOGO TYPOGRAPHY */}
            <a href="#top" className="flex items-center flex-shrink-0 gap-2 select-none">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">
                VSME<span className="text-[#0D9488]">CAP</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                PLATFORM
              </span>
            </a>

            {/* DESKTOP LINKS PROFILE CONTAINER */}
            <nav className="hidden lg:flex items-center gap-x-8 text-[14.5px] font-bold text-slate-700">
              <a href="#uk-companies" className="hover:text-[#00996f] transition-colors">Solutions</a>
              <a href="#product" className="hover:text-[#00996f] transition-colors">Product</a>
              <a href="#moat" className="hover:text-[#00996f] transition-colors">Moat</a>
              <a href="#faqs" className="hover:text-[#00996f] transition-colors">FAQs</a>
            </nav>

            <div className="hidden lg:flex items-center gap-x-4">
              <span className="rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME COMPLIANT • &lt;1,000 EMPLOYEES
              </span>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10">Contact</a>
            </div>

            {/* 🍔 MOBILE HAMBURGER LAYOUT TRIGGER */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none"
              >
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE ACTIVE PORTAL FRAMEWORK PANEL */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white w-full absolute left-0 right-0 shadow-2xl z-50 px-6 py-6 space-y-4 font-bold text-slate-700">
            <a href="#uk-companies" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-50">UK &amp; EU Solutions</a>
            <a href="#product" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-50">Product Architecture</a>
            <a href="#moat" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-50">Market Moat</a>
            <a href="#faqs" onClick={() => setIsOpen(false)} className="block py-2">Frequently Asked Questions</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a href={CONTACT_MAILTO} className="w-full text-center rounded-xl bg-[#0F172A] py-3 text-[14px] text-white shadow-md">Contact Us</a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 🔴 4. REGULATORY INFRASTRUCTURE ROLLING TEXT TICKER */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#0F172A] border-y border-slate-800/80 py-4 overflow-hidden relative z-30 flex items-center select-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap items-center gap-x-20 animate-marquee-scroll">
          {[...LOCAL_TICKER, ...LOCAL_TICKER, ...LOCAL_TICKER].map((item, idx) => (
            <span key={idx} className="text-[15px] font-mono font-bold tracking-widest text-slate-100 uppercase flex-shrink-0">{item}</span>
          ))}
        </div>
      </div>

      <main>
        {/* ========================================================================= */}
        {/* 🚀 5. HERO COLUMN GRID SECTION CONTAINER */}
        {/* ========================================================================= */}
        <section className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              
              <div className="lg:col-span-6 space-y-6 pt-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-500 uppercase shadow-sm">
                  🛡️ DIRECTIVE (EU) 2026/470 VALUE CHAIN CAP SHIELD ACTIVE
                </span>
