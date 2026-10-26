import { useState, useEffect } from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close the mobile menu with Escape, or when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
        { label: "Market Position", href: "#moat" },
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

  const bannerText =
    "FREE TIER AVAILABLE FOR ELIGIBLE SMEs (UP TO 1,000 EMPLOYEES): STRUCTURED VSME REPORTING  •  ";

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes topBannerScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-top-banner-right {
          animation: topBannerScrollRight 40s linear infinite !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-top-banner-right { animation: none !important; }
        }
        html { scroll-padding-top: 112px; }
        @media (min-width: 1024px) { html { scroll-padding-top: 130px; } }
      `}} />

      {/* One sticky unit: banner + header stack together, no hardcoded offsets */}
      <div className="sticky top-0 z-50 w-full">
      {/* TOP BANNER */}
      <div className="w-full bg-[#EA580C] py-2.5 overflow-hidden flex items-center border-b border-orange-700/30">
        <div className="flex whitespace-nowrap items-center animate-top-banner-right text-white text-[11px] font-black tracking-widest uppercase antialiased">
          <span>{bannerText}{bannerText}{bannerText}{bannerText}</span>
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

            {/* BADGE (desktop only) + CONTACT (all sizes) + MENU BUTTON (mobile and tablet) */}
            <div className="flex items-center gap-x-3 lg:gap-x-4">
              <span className="hidden lg:inline-block rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                VSME-ALIGNED REPORTING • UP TO 1,000 EMPLOYEES
              </span>
              <a
                href={CONTACT_MAILTO}
                className="rounded-xl bg-[#0F172A] px-4 py-2.5 lg:px-6 lg:py-3 text-[13px] lg:text-[14px] font-bold text-white hover:bg-[#1e293b] shadow-md shadow-slate-900/10"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET MENU: every page, grouped, large tap targets, scrolls if the screen is short */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute left-0 right-0 top-full border-t border-slate-200 bg-white shadow-xl overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100dvh - 7rem)" }}
          >
            <nav aria-label="Site pages" className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
              {navMenu.map((menu, mIdx) => (
                <div key={mIdx} className={mIdx > 0 ? "mt-4 pt-4 border-t border-slate-100" : ""}>
                  <p className="px-3 mb-1 text-[11px] font-black uppercase tracking-widest text-[#0D9488]">
                    {menu.label}
                  </p>
                  <ul>
                    {menu.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-slate-700 active:bg-slate-100 hover:bg-slate-50"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
      </div>
    </>
  );
};
