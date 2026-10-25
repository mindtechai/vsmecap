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

  // Duplicating the string text to ensure a perfectly seamless crawl track loop
  const bannerText = "PLATFORM OFFER: PERMANENTLY FREE TO SMEs <1,000 EMPLOYEES: COMPLIANT DATA DISCLOSURE PIPELINES  •  ";
  const loopedBanner = Array(4).fill(bannerText).join("");

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeCrawl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes topBannerScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee-scroll {
          animation: marqueeCrawl 48s linear infinite !important;
        }
        .animate-top-banner {
          animation: topBannerScroll 32s linear infinite !important;
        }
      `}} />

      {/* 🚀 HIGH-END MOVING REGULATORY ORANGE ALERT TICKER RIBBON ROW */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden sticky top-0 z-50 flex items-center shadow-md border-b border-orange-700/30">
        <div className="flex whitespace-nowrap items-center animate-top-banner text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>{loopedBanner}</span>
        </div>
      </div>

      <header className="sticky top-[36px] z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
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

            {/* NAV MENU */}
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
                        <a key={itemIdx} href={item.href} className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#00996f] transition-all">{item.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ACTION FOOTPRINT */}
            <div className="hidden lg:flex items-center gap-x-4">
              <span className="rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME COMPLIANT • &lt;1,000 EMPLOYEES
              </span>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10 transition-all">Contact</a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};
