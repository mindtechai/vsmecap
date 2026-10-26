import { useState, useEffect } from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Start at the top on load (stops Safari restoring a scrolled position
  // that leaves the black ticker tucked behind the sticky header)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const navMenu = [
    {
      label: "Frameworks",
      items: [
        { label: "B1-B11 Modules", href: "#basic" },
        { label: "C1-C9 Modules", href: "#comprehensive" }
      ]
    },
    {
      label: "Solutions",
      items: [
        { label: "UK & EU Companies", href: "#uk-companies" },
        { label: "Public Sector", href: "#public-sector" },
        { label: "Partners", href: "#partners" }
      ]
    },
    {
      label: "Platform",
      items: [
        { label: "Product Architecture", href: "#product" },
        { label: "Why Now", href: "#why-now" },
        { label: "Market Moat", href: "#moat" },
        { label: "Market Blueprint", href: "#market" },
        { label: "Legal Basis Foundations", href: "#legal-basis" }
      ]
    },
    {
      label: "Company",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Frequently Asked Questions", href: "#faqs" },
        { label: "Risks & Limitations", href: "#risk" },
        { label: "Privacy Policy", href: "#privacy" }
      ]
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes topBannerScrollRight {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0%); }
        }
        .animate-top-banner-right {
          animation: topBannerScrollRight 32s linear infinite !important;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-padding-top: 170px; }
        @media (min-width: 1024px) { html { scroll-padding-top: 130px; } }
      `}} />

      {/* One sticky unit: banner + header stack together, no hardcoded offsets */}
      <div className="sticky top-0 z-50 w-full">
      {/* TOP BANNER */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden flex items-center border-b border-orange-700/30">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  </span>
        </div>
      </div>

      <header className="relative border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">

            {/* BRAND LOGO IDENTITY */}
            <a href="#top" className="flex items-center flex-shrink-0 gap-2">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">
                VSME<span className="text-[#0D9488]">CAP</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                PLATFORM
              </span>
            </a>

            {/* DESKTOP DROPDOWNS (unchanged; also open on click for touch laptops/tablets) */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navMenu.map((menu, idx) => (
                <div
                  key={idx}
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                    className="flex items-center gap-1 text-[14.5px] font-bold text-slate-700 hover:text-[#00996f] focus:outline-none"
                  >
                    {menu.label}
                    <svg className={`h-4 w-4 text-slate-400 transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50">
                      {menu.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#00996f] transition-all"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* BADGE (desktop only) + CONTACT (all sizes) */}
            <div className="flex items-center gap-x-4">
              <span className="hidden lg:inline-block rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME COMPLIANT • &lt;1,000 EMPLOYEES
              </span>
              <a
                href={CONTACT_MAILTO}
                className="rounded-xl bg-[#0F172A] px-4 py-2.5 lg:px-6 lg:py-3 text-[13px] lg:text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET: every menu page inline, swipe sideways. No hamburger, no hidden drawer. */}
        <div className="lg:hidden relative border-t border-slate-100">
          <nav
            aria-label="Site pages"
            className="flex items-center gap-x-4 overflow-x-auto no-scrollbar px-4 sm:px-6 py-2.5 text-[13px] font-bold text-slate-700"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {navMenu.map((menu, mIdx) => (
              <div key={mIdx} className="flex items-center gap-x-4 flex-shrink-0">
                {mIdx > 0 && <span className="h-4 w-px bg-slate-200" aria-hidden="true" />}
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0D9488] whitespace-nowrap">
                  {menu.label}
                </span>
                {menu.items.map((item, iIdx) => (
                  <a
                    key={iIdx}
                    href={item.href}
                    className="whitespace-nowrap hover:text-[#00996f] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent" />
        </div>
      </header>
      </div>
    </>
  );
};
