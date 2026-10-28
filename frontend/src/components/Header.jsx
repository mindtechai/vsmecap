import React, { useState, useEffect } from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const navMenu = [
    { label: "Frameworks", items: [{ label: "B1-B11 Modules", href: "#basic" }, { label: "C1-C9 Modules", href: "#comprehensive" }] },
    /* ⚡ UPDATED LABEL AND ANCHOR ROUTE TARGET TO OBJECTIVE DISCLOSURE VERIFICATION INFRASTRUCTURE */
    { label: "Solutions", items: [{ label: "UK & EU Companies", href: "#uk-companies" }, { label: "Value Chain Evidence Portal", href: "#scope-evidence" }, { label: "Partners", href: "#partners" }] },
    { label: "Platform", items: [{ label: "Product Architecture", href: "#product" }, { label: "Why Now", href: "#why-now" }, { label: "Market Position", href: "#moat" }, { label: "Market Blueprint", href: "#market" }, { label: "Legal Basis Foundations", href: "#legal-basis" }] },
    { label: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Frequently Asked Questions", href: "#faqs" }, { label: "Risks & Limitations", href: "#risk" }, { label: "Privacy Policy", href: "#privacy" }] }
  ];

  const allNavItems = navMenu.flatMap(menu => menu.items);

  return (
    <div className="w-full sticky top-0 z-50">
      
      {/* 🤖 AEO STRUCTURAL NAVIGATION INFRASTRUCTURE - RESTORED FOR ALL VIEWPORTS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "VSMECAP Global Navigation Index",
            "url": "https://vsmecap.com",
            "itemListElement": allNavItems.map((item, index) => ({
              "@type": "SiteNavigationElement",
              "position": index + 1,
              "name": item.label,
              "url": "https://vsmecap.com" + item.href.replace('#', '')
            }))
          })
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-padding-top: 112px; }
        @media (min-width: 1024px) { html { scroll-padding-top: 130px; } }
      `}} />

      {/* GLOBAL FLOATING BANNER — OPTIMIZED FOR PREMIUM CRISP TYPOGRAPHY */}
      <div className="w-full bg-[#EA580C] py-2.5 flex items-center justify-center text-center border-b border-orange-700/30 select-none px-4">
        <span 
          className="text-white text-[13px] font-semibold tracking-[0.18em] uppercase antialiased subpixel-antialiased text-center"
          style={{ textRendering: "geometricPrecision", WebkitFontSmoothing: "antialiased" }}
        >
          {"FREE TIER AVAILABLE FOR ELIGIBLE SMEs (UP TO 1,000 EMPLOYEES): STRUCTURED VSME REPORTING"}
        </span>
      </div>

      {/* CORE NAVBAR HEADER */}
      <header className="relative border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
            
            <a href="#top" className="flex items-center flex-shrink-0 gap-2">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">{"VSME"}<span className="text-[#0D9488]">{"CAP"}</span></span>
            </a>

            <nav className="hidden lg:flex items-center gap-x-8">
              {navMenu.map((m, idx) => (
                <div key={idx} className="relative py-2" onMouseEnter={() => setActiveDropdown(idx)} onMouseLeave={() => setActiveDropdown(null)}>
                  <button type="button" className="flex items-center gap-1 text-[14.5px] font-bold text-slate-700 hover:text-[#EA580C] focus:outline-none">{m.label}</button>
                  {activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl z-50">
                      {m.items.map((item, i) => (
                        <a key={i} href={item.href} onClick={() => setActiveDropdown(null)} className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-all">{item.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-x-3">
              {/* LIVE ACCESS PORTAL ROUTING CTA */}
              <a 
                href="#authentication-portal" 
                className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-[#EA580C] to-orange-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-sm hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                {"Access Portal"}
              </a>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-4 py-2.5 text-[13px] font-bold text-white hover:bg-[#1e293b]">{"Contact"}</a>
              <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>

          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl absolute left-0 right-0 z-50 p-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-6">
              {/* MOBILE LIVE PORTAL REDIRECT BUTTON */}
              <div className="pb-2">
                <a 
                  href="#authentication-portal" 
                  onClick={() => setMenuOpen(false)}
                  className="block text-center rounded-xl bg-[#EA580C] py-3 text-[14px] font-bold text-white shadow-md"
                >
                  {"Access Security Gateway"}
                </a>
              </div>
              {navMenu.map((m, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-[11px] font-extrabold text-[#0D9488] uppercase">{m.label}</p>
                  <div className="grid grid-cols-1 gap-2">{m.items.map((item, i) => (
                    <a key={i} href={item.href} onClick={() => setMenuOpen(false)} className="block py-1.5 text-[14px] font-bold text-slate-700">{item.label}</a>
                  ))}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

    </div>
  );
};
