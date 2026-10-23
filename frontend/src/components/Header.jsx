import { CONTACT_MAILTO, NAV_LINKS } from "@/data/content";
import { ChainLogo } from "@/components/ChainLogo";

const pillClass = {
  blue: "rounded-full bg-[#1E40AF] px-3 py-1 text-[11px] font-bold tracking-wider text-white",
  black: "rounded-full bg-[#0F172A] px-3 py-1 text-[11px] font-bold tracking-wider text-white",
};

export const Header = () => (
  <header id="top" className="sticky top-0 z-40 border-b border-[#e4e7ea] bg-white">
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <a href="#top" data-testid="header-logo" className="flex items-center gap-3">
          <ChainLogo size={34} />
          <span>
            <span className="block text-[17px] font-bold tracking-wide text-[#26292e]">
              VSMECAP
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.14em] text-[#767c85]">
              VSMECAP AUDIT-READY 2026 — VERIFIED SME CHAIN CAPITAL
            </span>
          </span>
        </a>
        <div className="flex flex-wrap items-center gap-2">
          <span
            data-testid="badge-uk-companies"
            className="rounded-full bg-[#0F172A] px-3 py-1 text-[11px] font-bold tracking-wider text-white"
          >
            UK COMPANIES • 45 FTE GENERIC
          </span>
          <span
            data-testid="badge-first-mover"
            className="rounded-full bg-[#0D9488] px-3 py-1 text-[11px] font-bold tracking-wider text-white"
          >
            FIRST-MOVER
          </span>
          <a
            data-testid="header-contact-button"
            href={CONTACT_MAILTO}
            className="rounded-md bg-[#0F172A] px-4 py-2 text-[13px] font-bold tracking-wide text-white hover:bg-[#1e293b]"
          >
            CONTACT
          </a>
        </div>
      </div>
      <nav
        data-testid="pill-nav"
        className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-3"
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
              className="text-[12px] font-semibold tracking-wide text-[#4b5058] hover:text-[#00996f]"
            >
              {l.label}
            </a>
          ),
        )}
      </nav>
    </div>
  </header>
);
