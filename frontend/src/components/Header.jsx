import { useState } from "react";
import { CONTACT_MAILTO, NAV_LINKS } from "@/data/content";

const pillClass = {
  blue: "rounded-full bg-[#1E40AF] px-3 py-1 text-[11px] font-bold tracking-wider text-white block text-center whitespace-nowrap shadow-sm",
  black: "rounded-full bg-[#0F172A] px-3 py-1 text-[11px] font-bold tracking-wider text-white block text-center whitespace-nowrap shadow-sm",
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-[#e4e7ea] bg-white w-full shadow-sm">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        
        {/* TOP BRANDING BAR ROW */}
        <div className="flex items-center justify-between py-3">
          
          {/* BRANDING LOGO AREA */}
          <a href="#top" data-testid="header-logo" className="flex items-center transition-opacity hover:opacity-90">
            {/* Desktop View (Enlarged) */}
            <img 
              className="hidden lg:block h-20 w-auto object-contain py-1" 
              src="/vsmecap_logo_transparent_800.png" 
              alt="VSMECAP Corporate Logo" 
            />
            {/* Mobile & iPad View (Enlarged) */}
            <img 
              className="block lg:hidden h-14 w-auto object-contain" 
              src="/vsmecap_favicon_transparent_512.png" 
              alt="VSMECAP Icon Logo" 
            />
          </a>

          {/* DESKTOP METADATA BADGES & PRIMARY ACTION */}
          <div className="hidden lg:flex items-center gap-2.5">
            <span
              data-testid="badge-uk-companies"
              className="rounded-full bg-[#0F172A] px-3.5 py-1 text-[11px] font-bold tracking-wider text-white whitespace-nowrap shadow-sm"
            >
              VSME COMPLIANT • &lt;250 EMPLOYEES
            </span>
            <span
              data-testid="badge-first-mover"
              className="rounded-full bg-[#0D9488] px-3.5 py-1 text-[11px] font-bold tracking-wider text-white whitespace-nowrap shadow-sm"
            >
              FIRST-MOVER
            </span>
            <a
              data-testid="header-contact-button"
              href={CONTACT_MAILTO}
              className="rounded-md bg-[#0F172A] px-5 py-2.5 text-[13.5px] font-bold tracking-wide text-white hover:bg-[#1e293b] transition-colors whitespace-nowrap shadow-sm"
            >
              CONTACT
            </a>
          </div>

          {/* PORTABLE DEVICE INTERACTIVE MENU TOGGLE BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ENHANCED SHARPER DESKTOP LINKS GRID */}
        <nav
          data-testid="pill-nav"
          className="hidden lg:flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pb-3 border-t border-gray-100 pt-2.5 mt-0.5"
        >
          {NAV_LINKS.map((l) =>
            l.pill ? (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-testid={`nav-${l.id}`}
                className={pillClass[l.pill]}
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-testid={`nav-${l.id}`}
                className="text-[12.5px] font-semibold tracking-wide text-[#334155] hover:text-[#00996f] transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
      </div>

      {/* MOBILE PORTAL DRAWER */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100 bg-[#f8fafc] shadow-inner w-full`}>
        <div className="space-y-2 px-4 py-4 max-w-md mx-auto">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setIsOpen(false)}
              className={
                l.pill 
                  ? `${pillClass[l.pill]} w-full py-2 text-[12px]`
                  : "block text-center text-[14px] font-semibold tracking-wide text-[#334155] hover:text-[#00996f] py-2 rounded-md hover:bg-gray-100 transition-colors"
              }
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2 items-center">
            <span className="text-[11px] font-bold text-gray-400 tracking-wider">
              VSME COMPLIANT • &lt;250 EMPLOYEES
            </span>
            <a
              href={CONTACT_MAILTO}
              onClick={() => setIsOpen(false)}
              className="w-full text-center rounded-md bg-[#0F172A] py-2.5 text-[13.5px] font-bold text-white hover:bg-[#1e293b]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
