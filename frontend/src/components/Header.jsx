import React, { useState, useEffect, useRef } from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Measure the real height of the sticky banner + header so that every in-page link
  // lands exactly below it, whatever the screen size or banner wrapping.
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return undefined;
    const apply = () => {
      document.documentElement.style.setProperty("--header-h", el.offsetHeight + "px");
    };
    apply();
    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(apply);
      ro.observe(el);
    }
    window.addEventListener("resize", apply);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  // When the page is opened with a #section in the address (for example vsmecap.com/#faqs),
  // the browser tries to jump before React has drawn the page. Jump again once it has.
  useEffect(() => {
    const jump = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView();
    };
    const t = window.setTimeout(jump, 0);
    window.addEventListener("load", jump);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", jump);
    };
  }, []);

  // Close the mobile menu with Escape, or when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
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

  const navMenu = [
    { label: "Frameworks", items: [{ label: "B1-B11 Modules", href: "#basic" }, { label: "C1-C9 Modules", href: "#comprehensive" }] },
    { label: "Solutions", items: [{ label: "UK & EU Companies", href: "#uk-companies" }, { label: "Value Chain Evidence Portal (preview)", href: "#scope-evidence" }, { label: "Partners", href: "#partners" }] },
    { label: "Platform", items: [{ label: "Product Architecture", href: "#product" }, { label: "Why Now", href: "#why-now" }, { label: "Market Position", href: "#moat" }, { label: "Market Blueprint", href: "#market" }, { label: "Legal Basis Foundations", href: "#legal-basis" }] },
    { label: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Frequently Asked Questions", href: "#faqs" }, { label: "Risks & Limitations", href: "#risk" }, { label: "Privacy Policy", href: "#privacy" }] }
  ];

  const allNavItems = navMenu.flatMap((menu) => menu.items);

  return (
    <div ref={stickyRef} className="w-full sticky top-0 z-50">

      {/* Navigation index for search and AI assistants */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "VSMECAP navigation",
            "url": "https://vsmecap.com",
            "itemListElement": allNavItems.map((item, index) => ({
              "@type": "SiteNavigationElement",
              "position": index + 1,
              "name": item.label,
              "url": "https://vsmecap.com/" + item.href
            }))
          }).replace(/</g, "\\u003c")
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-padding-top: calc(var(--header-h, 112px) + 8px); }
        /* One rule for anchor offsets: ignore any per-section scroll margins */
        [id] { scroll-margin-top: 0 !important; }
      `}} />

      {/* TOP BANNER: static and one line on every screen size */}
      <div className="w-full bg-[#EA580C] px-4 py-2 text-center text-white text-[11px] font-bold tracking-wider uppercase antialiased border-b border-orange-700/30 select-none">
        <span className="block truncate sm:hidden">Free tier for eligible SMEs</span>
        <span className="hidden sm:block truncate">Free tier for eligible SMEs (up to 1,000 employees) · Structured VSME reporting</span>
      </div>

      {/* CORE NAVBAR HEADER */}
      <header className="relative border-b border-slate-200/80 bg-white/95 backdrop-blur-md w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">

            <a href="#top" className="flex items-center flex-shrink-0 gap-2">
              <span className="text-[24px] font-black tracking-tighter text-[#0F172A]">{"VSME"}<span className="text-[#0D9488]">{"CAP"}</span></span>
            </a>

            <nav className="hidden lg:flex items-center gap-x-8" aria-label="Main">
              {navMenu.map((m, idx) => (
                <div key={idx} className="relative py-2" onMouseEnter={() => setActiveDropdown(idx)} onMouseLeave={() => setActiveDropdown(null)}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === idx}
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                    className="flex items-center gap-1 text-[14.5px] font-bold text-slate-700 hover:text-[#EA580C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded"
                  >
                    {m.label}
                  </button>
                  {activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-60 rounded-xl border border-slate-100 bg-white p-2 shadow-xl z-50">
                      {m.items.map((item, i) => (
                        <a key={i} href={item.href} onClick={() => setActiveDropdown(null)} className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 transition-all">{item.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-x-3">
              <a
                href="#authentication-portal"
                className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-[#EA580C] to-orange-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-sm hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                {"Portal preview"}
              </a>
              <a href={CONTACT_MAILTO} className="rounded-xl bg-[#0F172A] px-4 py-2.5 text-[13px] font-bold text-white hover:bg-[#1e293b]">{"Contact"}</a>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" /></svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-slate-200 bg-white shadow-2xl absolute left-0 right-0 z-50 p-6 overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100dvh - 7rem)" }}
          >
            <nav aria-label="Site pages" className="space-y-6">
              <div className="pb-2">
                <a
                  href="#authentication-portal"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center rounded-xl bg-[#EA580C] py-3 text-[14px] font-bold text-white shadow-md"
                >
                  {"Portal preview"}
                </a>
              </div>
              {navMenu.map((m, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-[11px] font-extrabold text-[#0D9488] uppercase tracking-widest">{m.label}</p>
                  <div className="grid grid-cols-1 gap-1">{m.items.map((item, i) => (
                    <a key={i} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-1 py-2.5 text-[15px] font-bold text-slate-700 active:bg-slate-100">{item.label}</a>
                  ))}</div>
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

    </div>
  );
};
