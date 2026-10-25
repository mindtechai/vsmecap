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
        @keyframes marqueeCrawl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marqueeCrawl 48s linear infinite !important;
        }
      `}} />

      {/* 🚀 ELITE FIXED ENTERPRISE TOP ROW FLOATING RIBBON NOTIFICATION BANNER */}
      <div className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-3 px-4 text-center sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded bg-[#EA580C]/10 border border-[#EA580C]/20 px-2 py-0.5 font-mono font-black text-[#EA580C] uppercase tracking-wider text-[9.5px] shadow-sm">
            Platform Offer
          </span>
          <span className="font-bold text-slate-700 tracking-tight">
            PERMANENTLY FREE TO SMEs &lt;1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES
          </span>
          <a 
            href="#uk-companies" 
            className="font-extrabold text-[#2563EB] hover:text-blue-700 hover:underline inline-flex items-center gap-0.5 tracking-wide"
          >
            Activate Free Tier →
          </a>
        </div>
      </div>

      <header className="sticky top-[45px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* LOGO */}
            <a href="#top" className="flex items-center flex-shrink-0 transition-all hover:opacity-90 gap-2">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A] font-sans antialiased">
                VSME<span className="text-[#0D9488]">CAP</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-slate-100 border border-slate-200/40 px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase shadow-sm">
                PLATFORM
              </span>
            </a>

            {/* RESPONSIVE DROPDOWNS */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navMenu.map((menu, idx) => (
                <div 
                  key={idx} 
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-[14.5px] font-bold text-slate-700 hover:text-[#00996f] transition-colors focus:outline-none">
                    {menu.label}
                    <svg className={`h-4 w-4 text-slate-400 transition-transform ${activeDropdown === idx ? 'rotate-180 text-[#00996f]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50">
                      {menu.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.href}
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

            {/* ACTION ENDPOINT */}
            <div className="hidden lg:flex items-center gap-x-4">
              <span className="rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME COMPLIANT • &lt;1,000 EMPLOYEES
              </span>
              <a
                href={CONTACT_MAILTO}
                className="rounded-xl bg-[#0F172A] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10 transition-all"
              >
                Contact
              </a>
            </div>

            {/* MOBILE INTERACTIVE TRIGGER */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none">
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE RESPONSIVE PANEL */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden border-t border-slate-100 bg-slate-50 w-full`}>
          <div className="space-y-4 px-6 py-6 max-w-md mx-auto">
            {navMenu.map((menu, idx) => (
              <div key={idx} className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{menu.label}</p>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {menu.items.map((item, itemIdx) => (
                    <a key={itemIdx} href={item.href} onClick={() => setIsOpen(false)} className="block text-[14px] font-medium text-slate-600 hover:text-[#00996f] py-1.5">{item.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};
