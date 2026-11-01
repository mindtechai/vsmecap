import React, { useEffect, useState } from "react";
import { CONTACT_MAILTO } from "@/data/content";
import { Faqs } from "@/components/Faqs";
import { LegalAndInvest } from "@/components/LegalAndInvest";
import { Footer, Privacy } from "@/components/Closing";

// Palette: deep navy #0B1F3A, slate #475569, off-white #F8FAFC, orange accent.
// Orange on white uses #C2410C (passes WCAG AA); orange on navy uses #F97316.

const NAV = [
  { group: "PRODUCT", items: [
    { id: "workspace", label: "Workspace" },
    { id: "evidence", label: "Evidence" },
    { id: "validation", label: "Validation" },
    { id: "sharing", label: "Sharing" },
    { id: "how", label: "How it works" },
    { id: "preview", label: "Preview" },
    { id: "pricing", label: "Pricing" }
  ]},
  { group: "TRUST", items: [
    { id: "trust", label: "Security and trust" },
    { id: "legal-basis", label: "Legal basis" },
    { id: "faqs", label: "FAQs" },
    { id: "privacy", label: "Privacy" }
  ]}
];
const ALL_IDS = ["overview", ...NAV.flatMap((g) => g.items.map((i) => i.id))];

// Illustrative sample data only. No real company or meter numbers.
const mpan = (n) => "22" + String(n).padStart(19, "0");
const SAMPLE = [
  { file: "Electricity bill – month 1.pdf", kwh: 12450, mpan: mpan(1) },
  { file: "Electricity bill – month 2.csv", kwh: 8320, mpan: mpan(2) },
  { file: "Electricity bill – month 3.pdf", kwh: 15200, mpan: mpan(3).slice(1) },
  { file: "Electricity bill – month 4.pdf", kwh: 4300, mpan: mpan(4) }
].map((r) => ({ ...r, valid: /^\d{21}$/.test(r.mpan) }));
const SAMPLE_KWH = SAMPLE.reduce((a, r) => a + r.kwh, 0);
const SAMPLE_VALID = SAMPLE.filter((r) => r.valid).length;

const TAGS = {
  available: "bg-emerald-50 text-emerald-800 border-emerald-200",
  partial: "bg-amber-50 text-amber-800 border-amber-200",
  planned: "bg-slate-100 text-slate-700 border-slate-300"
};
const Tag = ({ kind, children }) => (
  <span className={"inline-flex h-[22px] items-center rounded border px-2 text-[11px] font-semibold " + TAGS[kind]}>{children}</span>
);

const Block = ({ id, kicker, title, intro, tint, children }) => (
  <section id={id} className={"border-b border-slate-200 px-4 py-12 lg:px-10 lg:py-16 " + (tint ? "bg-[#F8FAFC]" : "bg-white")}>
    <div className="mx-auto max-w-[1100px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">{kicker}</p>
      <h2 className="mt-2 text-[24px] font-bold tracking-tight text-[#0B1F3A] lg:text-[28px]">{title}</h2>
      {intro && <p className="mt-3 max-w-[720px] text-[14.5px] leading-relaxed text-slate-600">{intro}</p>}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Card = ({ title, tag, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5">
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-[15px] font-bold text-[#0B1F3A]">{title}</h3>
      {tag}
    </div>
    <div className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{children}</div>
  </div>
);

export default function App() {
  const [active, setActive] = useState("overview");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ALL_IDS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const NavLinks = ({ big }) => (
    <>
      {NAV.map((g) => (
        <div key={g.group} className="mb-5">
          <div className="mb-2 px-3 text-[10px] font-semibold tracking-[0.12em] text-slate-300">{g.group}</div>
          {g.items.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              onClick={() => setDrawerOpen(false)}
              aria-current={active === n.id ? "true" : undefined}
              className={"mb-[2px] flex items-center justify-between rounded-md px-3 text-left " + (big ? "h-[44px] text-[14px] " : "h-[36px] text-[13px] ") + (active === n.id ? "bg-white font-semibold text-[#0B1F3A]" : "text-slate-200 hover:bg-white/10 hover:text-white")}
            >
              <span>{n.label}</span>
              <span className={"h-[6px] w-[6px] rounded-full " + (active === n.id ? "bg-[#F97316]" : "bg-white/20")} />
            </a>
          ))}
        </div>
      ))}
    </>
  );

  const Brand = () => (
    <a href="#overview" className="flex items-center gap-3 rounded-md bg-white px-3 py-2">
      <img src="/vsmecap_logo_transparent_800.png" alt="VSMECAP logo" className="block h-[28px] w-auto object-contain" />
    </a>
  );

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-[#0B1F3A]" style={{ overflowX: "clip" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; scroll-padding-top: 72px; }
        [id] { scroll-margin-top: 0 !important; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />

      {/* DESKTOP SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-0 z-30 hidden w-[260px] flex-col bg-[#0B1F3A] lg:flex">
        <div className="border-b border-white/10 px-[18px] pb-[18px] pt-[22px]"><Brand /></div>
        <nav aria-label="Site pages" className="flex-1 overflow-y-auto px-[10px] py-4"><NavLinks /></nav>
        <div className="border-t border-white/10 p-4 text-[11px] leading-[1.6] text-slate-300">
          Based on the EFRAG VSME standard.<br />Not audited. Not endorsed by EFRAG.<br />
          <a href={CONTACT_MAILTO} className="mt-2 inline-block underline hover:text-white">info@vsmecap.com</a>
        </div>
      </aside>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          <div className="w-[280px] max-w-[86vw] overflow-y-auto bg-[#0B1F3A] px-[10px] py-4" role="dialog" aria-label="Menu">
            <div className="mb-4 flex items-center justify-between px-2">
              <Brand />
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-[18px] text-white">✕</button>
            </div>
            <nav aria-label="Site pages"><NavLinks big /></nav>
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
        </div>
      )}

      <div className="w-full min-w-0 lg:ml-[260px] lg:w-auto">
        {/* TOP BAR */}
        <header className="sticky top-0 z-20 flex h-[56px] items-center justify-between border-b border-slate-200 bg-white px-3 lg:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <button type="button" onClick={() => setDrawerOpen(true)} aria-label="Open menu" aria-expanded={drawerOpen} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-[20px] font-bold text-[#0B1F3A] lg:hidden">☰</button>
            <span className="truncate text-[13px] font-bold tracking-tight text-[#0B1F3A]">VSMECAP</span>
            <span className="hidden text-[12px] text-slate-600 sm:inline">Structured VSME reporting for UK SMEs</span>
          </div>
          <a href={CONTACT_MAILTO} className="inline-flex h-[40px] shrink-0 items-center rounded-md bg-[#C2410C] px-4 text-[13px] font-semibold text-white hover:bg-[#9A3412]">Request a demo</a>
        </header>

        {/* HERO */}
        <section id="overview" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1100px] px-4 py-10 lg:px-10 lg:py-16">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex h-[24px] items-center rounded border border-slate-200 bg-[#F8FAFC] px-2.5 text-[11px] font-semibold text-slate-700">Based on the EFRAG VSME voluntary standard</span>
              <span className="inline-flex h-[24px] items-center rounded border border-slate-200 bg-[#F8FAFC] px-2.5 text-[11px] font-semibold text-slate-700">Early-stage · not audited</span>
            </div>
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-w-0">
                <h1 className="text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] sm:text-[40px] lg:text-[46px]">
                  Structured VSME reporting for UK SMEs
                </h1>
                <p className="mt-3 text-[18px] font-semibold text-[#C2410C]">From utility bills to a report you can share.</p>
                <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-slate-600">
                  VSMECAP helps businesses turn utility data into a structured sustainability report based on the EFRAG VSME standard: the Basic module (B1-B11) and the optional Comprehensive module (C1-C9). Reports are structured for review and are not audited.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={CONTACT_MAILTO} className="inline-flex h-[46px] items-center rounded-md bg-[#C2410C] px-5 text-[14px] font-semibold text-white hover:bg-[#9A3412]">Request a demo</a>
                  <a href="#preview" className="inline-flex h-[46px] items-center rounded-md border border-slate-300 bg-white px-5 text-[14px] font-semibold text-[#0B1F3A] hover:bg-[#F8FAFC]">See the preview</a>
                </div>
                <p className="mt-5 max-w-[560px] text-[12.5px] leading-relaxed text-slate-600">
                  Free tier available for eligible businesses with up to 1,000 employees. VSME is voluntary and is not UK law.
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-[#0B1F3A] bg-[#0B1F3A] p-5 text-white">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Illustrative workflow</span>
                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                </div>
                <pre className="overflow-x-auto font-mono text-[12px] leading-[1.8] text-slate-100">{`1. Upload 12 months of bills
2. Extract kWh, m3, MPAN / MPRN
3. Review and correct values
4. Draft B3 energy and GHG
5. Export JSON, CSV, draft PDF
   Inline XBRL: in development`}</pre>
                <p className="mt-3 text-[11px] text-slate-300">Illustration only. Outputs are drafts, structured for review and not audited.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <Block id="workspace" kicker="Product" title="Workspace" tint intro="Prepare the Basic and Comprehensive VSME modules in one place.">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Basic module (B1-B11)" tag={<Tag kind="partial">Partly automated</Tag>}>
              The tool drafts B3 (energy and Scope 1 and 2 emissions) and B6 (water) from your bills. The other disclosures are completed by you.
            </Card>
            <Card title="Comprehensive module (C1-C9)" tag={<Tag kind="planned">Guidance only</Tag>}>
              Optional. Use it when a customer, lender or investor asks for more detail than the Basic module.
            </Card>
          </div>
        </Block>

        <Block id="evidence" kicker="Product" title="Evidence" intro="Each extracted figure shows the file it came from, so a reviewer can check it against the original.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Source files listed" tag={<Tag kind="available">Available</Tag>}>Figures are listed alongside the bills they were read from.</Card>
            <Card title="Local processing" tag={<Tag kind="available">Available</Tag>}>Files are processed in your browser and are not uploaded to a server.</Card>
            <Card title="Retention and integrity hashing" tag={<Tag kind="planned">In development</Tag>}>Long-term storage, lineage and SHA-256 hashes are not built yet.</Card>
          </div>
          <p className="mt-4 text-[12.5px] text-slate-600">A source reference shows where a number came from. It does not prove the underlying information is true.</p>
        </Block>

        <Block id="validation" kicker="Product" title="Validation" tint intro="Basic checks run before you review. You decide what to accept.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Meter number format" tag={<Tag kind="available">Available</Tag>}>MPAN must be 21 digits and MPRN 10 digits.</Card>
            <Card title="Plausibility and duplicates" tag={<Tag kind="available">Available</Tag>}>Implausible values are filtered and duplicate readings removed.</Card>
            <Card title="Completeness checks" tag={<Tag kind="partial">Partly</Tag>}>Missing months are visible in the monthly breakdown. Review status tracking is planned.</Card>
          </div>
        </Block>

        <Block id="sharing" kicker="Product" title="Sharing" intro="Controlled sharing of a reporting pack with customers or lenders, with expiry and revocation.">
          <Card title="Sharing and access control" tag={<Tag kind="planned">Planned · not built</Tag>}>
            Today you export a pack and send it yourself. Accounts, permissions and revocable links are on the roadmap and are not available.
          </Card>
        </Block>

        {/* HOW IT WORKS */}
        <Block id="how" kicker="Process" title="How it works" tint>
          <ol className="grid gap-3 md:grid-cols-5">
            {[
              ["01", "Upload", "Add 12 months of electricity, gas and water bills."],
              ["02", "Extract", "kWh, m³ and meter numbers are read from each file."],
              ["03", "Review", "Check each value against the original bill and correct it."],
              ["04", "Draft", "B3 energy and Scope 1 and 2 figures are drafted."],
              ["05", "Export", "JSON, CSV and a draft PDF. Inline XBRL is in development."]
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-mono text-[12px] font-bold text-[#C2410C]">{n}</div>
                <div className="mt-1 text-[14px] font-semibold text-[#0B1F3A]">{t}</div>
                <div className="mt-2 text-[12.5px] leading-[1.5] text-slate-600">{d}</div>
              </li>
            ))}
          </ol>
        </Block>

        {/* PREVIEW */}
        <Block id="preview" kicker="Preview" title="What a review looks like" intro="Sample data only. No real company, bills or meter numbers are shown.">
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-[#F8FAFC] px-4 py-3">
                <span className="text-[12px] font-bold text-[#0B1F3A]">Extracted readings (sample)</span>
                <span className="text-[11.5px] text-slate-600">{SAMPLE_VALID} of {SAMPLE.length} pass checks · {SAMPLE_KWH.toLocaleString("en-GB")} kWh</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-[12.5px]">
                  <thead className="bg-[#F8FAFC] text-[11px] uppercase tracking-wide text-slate-600">
                    <tr><th className="px-4 py-2 text-left font-semibold">File</th><th className="py-2 text-left font-semibold">kWh</th><th className="py-2 text-left font-semibold">MPAN</th><th className="py-2 pr-4 text-left font-semibold">Check</th></tr>
                  </thead>
                  <tbody>
                    {SAMPLE.map((r) => (
                      <tr key={r.file} className="border-t border-slate-100">
                        <td className="px-4 py-3 font-medium">{r.file}</td>
                        <td className="font-mono">{r.kwh.toLocaleString("en-GB")}</td>
                        <td className="font-mono text-[11px]">{r.mpan}</td>
                        <td className="pr-4"><Tag kind={r.valid ? "available" : "partial"}>{r.valid ? "Passes" : "Review: MPAN length"}</Tag></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="min-w-0 rounded-xl bg-[#0B1F3A] p-5 text-white">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Reporting pack (sample)</div>
              <div className="mt-3 text-[15px] font-semibold leading-snug">Draft B3 energy figures, ready for your review</div>
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-slate-100">
                <li>Available now: JSON, CSV, draft PDF</li>
                <li>In development: Inline XBRL</li>
              </ul>
              <p className="mt-4 text-[11px] text-slate-300">Emissions use the factors shown in the tool. Confirm they match the current UK Government edition before relying on results.</p>
            </div>
          </div>
        </Block>

        {/* PRICING */}
        <Block id="pricing" kicker="Pricing" title="Free tier and commercial terms" tint intro="Terms are confirmed before you sign up. No card details are collected on this site.">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Free tier</div>
              <div className="mt-2 text-[20px] font-bold">Up to 1,000 employees</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">For eligible non-listed businesses preparing a VSME report.</p>
              <a href={CONTACT_MAILTO} className="mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-md bg-[#C2410C] text-[13px] font-semibold text-white hover:bg-[#9A3412]">Ask about the free tier</a>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Commercial terms</div>
              <div className="mt-2 text-[20px] font-bold">Above 1,000 employees</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">Also applies to public-sector bid preparation under PPN 006.</p>
              <a href={CONTACT_MAILTO} className="mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-md border border-slate-300 bg-white text-[13px] font-semibold text-[#0B1F3A] hover:bg-[#F8FAFC]">Contact us</a>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Advisers</div>
              <div className="mt-2 text-[20px] font-bold">Accountants and consultants</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">Talk to us about using VSMECAP with your clients.</p>
              <a href={CONTACT_MAILTO} className="mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-md border border-slate-300 bg-white text-[13px] font-semibold text-[#0B1F3A] hover:bg-[#F8FAFC]">Get in touch</a>
            </div>
          </div>
        </Block>

        {/* TRUST */}
        <Block id="trust" kicker="Trust" title="Security and trust, stated plainly" intro="What is true today, without claims we cannot back up.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="How data is handled">The tool processes files locally in your browser and does not upload them. The website has no user accounts. Contact: info@vsmecap.com.</Card>
            <Card title="Hosting">This website is hosted on Vercel, which keeps standard server logs. See the privacy notice for details.</Card>
            <Card title="What we do not claim">Reports are not audited and VSMECAP is not certified or endorsed by EFRAG. VSMECAP does not currently hold ISO 27001 or SOC 2 certification.</Card>
          </div>
        </Block>

        <LegalAndInvest />
        <Faqs />
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}
