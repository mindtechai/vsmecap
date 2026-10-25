import { useState } from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      `}} />

      {/* 🚀 FIXED HORIZONTAL HIGH-CONTRAST LEFT-TO-RIGHT BANNER */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden sticky top-0 z-50 flex items-center border-b border-orange-700/30">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  PLATFORM OFFER: PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  </span>
        </div>
      </div>

      <header className="sticky top-[36px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* BRAND LOGO IDENTITY */}
            <a href="#top" className="flex items-center flex-shrink-0 gap-2">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">
                VSME<span className="text-[#0D9488]">CAP</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                PLATFORM
              </span>
            </a>

            {/* DESKTOP LINKS (Hidden on Mobile) */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navMenu.map((menu, idx) => (
                <div 
                  key={idx} 
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-[14.5px] font-bold text-slate-700 hover:text-[#00996f] focus:outline-none">
                    {menu.label}
                    <svg className={`h-4 w-4 text-slate-400 transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50">
                      {menu.items.map((item, itemIdx) => (
                        <a key={itemIdx} href={item.href} className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#00996f] transition-all">{item.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-x-4">
              <span className="rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME COMPLIANT • &lt;1,000 EMPLOYEES
              </span>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10">Contact</a>
            </div>

            {/* 🍔 COMPACT MOBILE HAMBURGER BUTTON WRAPPER */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none transition-all"
                aria-label="Toggle Mobile Menu"
              >
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 RE-ENGINEERED MOBILE NAVIGATION DRAWER */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white w-full absolute left-0 right-0 shadow-2xl z-50 max-h-[calc(100vh-120px)] overflow-y-auto animate-fade-in">
            <div className="space-y-5 px-6 py-6 max-w-md mx-auto">
              {navMenu.map((menu, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">{menu.label}</p>
                  <div className="grid grid-cols-1 gap-1.5 pl-2">
                    {menu.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-[14px] font-bold text-slate-700 hover:text-[#00996f] py-1 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3 items-center">
                <span className="text-[11px] font-bold text-slate-500 tracking-wide bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  VSME COMPLIANT • &lt;1,000 EMPLOYEES
                </span>
                <a
                  href={CONTACT_MAILTO}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center rounded-xl bg-[#0F172A] py-3 text-[14px] font-bold text-white shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
