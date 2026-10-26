import React from "react";
import { 
  NAV_LINKS, 
  TICKER_ITEMS, 
  BASIC_MODULES, 
  COMPREHENSIVE_MODULES, 
  PRODUCT_STEPS, 
  MOAT_CARDS, 
  WHY_NOW_SECTIONS, 
  MARKET_DYNAMICS, 
  LEGAL_BASIS, 
  RISKS, 
  FAQS, 
  CONTACT_MAILTO 
} from "@/data/content";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#26292e] relative pb-20 scroll-smooth">
      
      {/* 🤖 AEO STRUCTURAL SCHEMA DATA (JSON-LD injection for LLMs & AI Scrapers) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "VSMECAP",
            "description": "Independent data conversion loops and audit-ready outputs mapped to the public EFRAG VSME framework for non-listed SMEs.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "GBP",
              "description": "Permanently free basic tier for true non-listed undertakings under 1,000 employees"
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": FAQS.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          })
        }}
      />

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
        .custom-no-scrollbar::-webkit-scrollbar { display: none !important; }
        .custom-no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        
        /* Clear anchor scroll calculation padding */
        section { scroll-margin-top: 140px; }
      `}} />

      {/* ORANGE TOP RIBBON TICKER */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden sticky top-0 z-50 flex items-center border-b border-orange-700/30 select-none">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>{"PLATFORM OFFER: PERMANENTLY FREE TO SMEs <1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  PLATFORM OFFER: PERMANENTLY FREE TO SMEs <1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  • "}</span>
        </div>
      </div>

      {/* FIXED NAVIGATION HEADER HEADER (Never hidden via a hamburger menu button toggle) */}
      <header className="sticky top-[36px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* BRANDING LANDMARK */}
            <a href="#top" className="flex items-center flex-shrink-0 gap-2 select-none">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">
                {"VSME"}<span className="text-[#0D9488]">{"CAP"}</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                {"PLATFORM"}
              </span>
            </a>

            {/* HORIZONTAL SWIPEABLE INTERACTIVE NAVIGATION MENU LINKS */}
            <nav className="force-visible-nav custom-no-scrollbar items-center gap-x-4 sm:gap-x-6 text-[13px] sm:text-[14.5px] font-bold text-slate-700 py-2">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="hover:text-[#0D9488] whitespace-nowrap transition-colors flex items-center gap-1.5"
                >
                  {link.label}
                  {link.pill && (
                    <span className={`text-[9px] px-1 py-0.5 rounded font-mono font-bold uppercase ${
                      link.pill === "blue" ? "bg-blue-50 text-blue-600 border border-blue-200/40" : "bg-slate-100 text-slate-700 border border-slate-200/40"
                    }`}>
                      {link.pill}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* DIRECT CTA TRIGGER ACTION */}
            <div className="flex items-center gap-x-3 flex-shrink-0">
              <span className="hidden lg:inline-block rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                {"VSME COMPLIANT • <1,000 EMPLOYEES"}
              </span>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10">{"Contact"}</a>
            </div>

          </div>
        </div>
      </header>

      {/* LOWER DARK TICKER ROW (Rendered purely relative to prevent iPhone Safari stacking overlap drops) */}
      <div className="w-full bg-[#0F172A] border-y border-slate-800/80 py-4 overflow-hidden relative z-30 select-none">
        <div className="relative flex items-center w-full h-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap gap-x-12 animate-marquee-scroll text-slate-300 font-bold text-[13px] tracking-wide">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, idx) => (
              <span key={idx} className="flex items-center gap-x-3">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN DATA FRAME SECTIONS (Semantic markup nodes optimizing AI context ingestion) */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 space-y-24">
        
        {/* HERO SECTION / UK COMPANIES */}
        <section id="uk-companies" className="space-y-6">
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

        {/* PUBLIC SECTOR DATA PROVENCE */}
        <section id="public-sector" className="border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-black text-slate-900 mb-4">{"Public Sector Procurement Alignment"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MARKET_DYNAMICS.map((md, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-[16px]">{md.title}</h3>
                <p className="mt-2 text-[13.5px] text-slate-500 font-medium leading-relaxed">{md.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ANNEX I • BASIC DISCLOSURES (B1-B11) */}
        <section id="basic" className="border-t border-slate-100 pt-16">
          <div className="mb-6">
            <span className="text-[11px] font-mono font-black text-blue-600 tracking-wider uppercase">{"ANNEX I • BASIC DISCLOSURES"}</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{"B1–B11 Structural Modules"}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BASIC_MODULES.map((m) => (
              <div key={m.code} className="rounded-xl border border-[#e4e7ea] bg-white p-5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="rounded px-1.5 py-0.5 text-[11px] font-mono font-bold border border-blue-200/40 bg-blue-50 text-blue-600">
                    {m.code}
                  </span>
                  <h3 className="text-[14px] font-bold text-[#26292e]">{m.title}</h3>
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5058] font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ANNEX II • COMPREHENSIVE DISCLOSURES (C1-C9) */}
        <section id="comprehensive" className="border-t border-slate-100 pt-16">
          <div className="mb-6">
