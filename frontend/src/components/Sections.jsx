import React from "react";
import { Section } from "@/components/Section";
import { MOAT_CARDS, PRODUCT_STEPS, WHY_NOW_SECTIONS, MARKET_DYNAMICS } from "@/data/content";

const Card = ({ testid, kicker, title, children }) => (
  <div
    data-testid={testid}
    className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm"
  >
    {kicker && (
      <p className="mb-3 text-[11px] font-bold tracking-[0.12em] text-[#00996f] uppercase">{kicker}</p>
    )}
    <h3 className="text-[15px] font-bold text-[#0F172A]">{title}</h3>
    <div className="mt-2 text-[13.5px] leading-relaxed text-slate-500 font-medium">{children}</div>
  </div>
);

export const UkCompanies = () => (
  <Section
    id="uk-companies"
    label="UK &amp; EU ENTERPRISES"
    title="Protected Enterprise Framework — Built for Scale"
    intro="A standardized verification schema configured strictly for non-listed undertakings under 1,000 employees, enforcing your legal value chain cap protections."
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card testid="uk-micro-card" kicker="Value Chain Cap" title="Protected Undertaking Armor">
        Under Directive (EU) 2026/470, companies under 1,000 employees are legally shielded from excessive corporate ESG demands. Hand them your standard VSME report instead.
      </Card>
      <Card testid="uk-meter-card" kicker="Ingestion" title="Automated Meter Tracking">
        Electricity and gas utility networks are ingested directly via digital MPAN/MPRN records, completely eliminating slow, manual Excel files.
      </Card>
      <Card testid="uk-scope-card" kicker="Operational Bounds" title="Own-Walls Scope 1 + 2">
        The system isolates your explicit operational boundaries: physical premises and vehicles. Scope 3 supply chain demands from subcontractors are completely excluded by law in the Basic Module.
      </Card>
    </div>
  </Section>
);

export const PublicSector = () => (
  <Section
    id="public-sector"
    label="PUBLIC SECTOR"
    title="Procurement-ready carbon reporting"
    intro="A supplier pack mapped to the exact data points public buyers and corporate supply-chain procurement teams request."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card testid="public-ppn-card" kicker="PPN 06/21" title="Mapped to Carbon Reduction Plans">
        The data pack aligns cleanly to PPN 06/21 CRP frameworks—auditing baseline records, current-year operational emissions, Scope 1, Scope 2, and the defined subset of Scope 3 with validation hashes attached.
      </Card>
      <Card testid="public-buyer-card" kicker="BUYERS" title="One pack, every tender">
        Suppliers generate their machine-readable ledger once and reuse it across multiple procurement frameworks, avoiding the need to re-answer tedious questionnaires for each independent bid.
      </Card>
    </div>
  </Section>
);

export const Product = () => (
  <>
    {/* 🤖 AEO STRUCTURAL HOWTO SCHEMA DATA FOR AI DISCOVERY CRAWLERS */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "VSMECAP Product Workflow Architecture",
          "description": "Three structured operational steps from raw source records to an official audit-ready compliance pack.",
          "step": PRODUCT_STEPS.map((s, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": s.title,
            "text": s.desc
          }))
        })
      }}
    />

    <Section
      id="product"
      label="PRODUCT"
      title="The verification chain"
      intro="Three structured operational steps from raw source records to an official audit-ready compliance pack."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PRODUCT_STEPS.map((s) => (
          <div
            key={s.step}
            data-testid={`product-step-${s.step}`}
            className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm"
          >
            <p className="font-mono text-[26px] font-bold text-[#00C08B]">{s.step}</p>
            <h3 className="mt-3 text-[15px] font-bold text-[#26292e]">{s.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </>
);

export const WhyNow = () => (
  <Section
    id="why-now"
    label="WHY NOW"
    title="A published standard, a synchronized transition timeline"
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {WHY_NOW_SECTIONS.map((wn, i) => (
        <Card key={i} testid={`why-now-card-${i + 1}`} kicker="REGULATION" title={wn.title}>
          {wn.desc}
        </Card>
      ))}
    </div>
  </Section>
);

export const Moat = () => (
  <>
    {/* 🤖 AEO STRUCTURAL ITEMLIST SCHEMA DATA FOR AI SEARCH DISCOVERY */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "VSMECAP Four Compounding Market Moat Advantages",
          "description": "Defensive compliance and market acquisition properties locking supply chain networks to our ecosystem.",
          "itemListElement": MOAT_CARDS.map((card, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": card.title,
            "description": card.desc
          }))
        })
      }}
    />

    <Section id="moat" label="MOAT" title="Four compounding advantages">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card testid="moat-card-1" kicker="Architecture" title="XBRL Taxonomy Lock">
          Direct structural schema integration with official efrg:vsm_e tags creates high data switching friction, keeping clients locked into our ecosystem.
        </Card>
        <Card testid="moat-card-2" kicker="GROWTH LOOP" title="Zero Cost Scale: CAC = 0">
          Our permanently free mid-market tier forces large listed corporations to onboard their entire supplier networks onto VSMECAP automatically, triggering explosive volume loops at zero customer acquisition cost.
        </Card>
        <Card testid="moat-card-3" kicker="🛡️ PROTECTION" title="Value Chain Cap Armor">
          Tailored explicitly to enforce Regulation (EU) 2026/1560, giving undertakings under 1,000 employees the immediate legal right to reject bloated enterprise questionnaires.
        </Card>
        <Card testid="moat-card-4" kicker="Telemetry" title="Bank API Moat">
          Continuous automated data links to utility feeds convert annual compliance updates into an ongoing data utility stream for commercial underwriting networks.
        </Card>
      </div>
    </Section>
  </>
);

export const Market = () => (
  <Section
    id="market"
    label="MARKET"
    title="The blueprint matrix"
    intro="Sized bottom-up. The comprehensive validation model ships exclusively with the investor deck under NDA."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div
        data-testid="market-tam-card"
        className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm"
      >
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#767c85]">TAM</p>
        <p className="mt-3 text-[24px] font-bold text-[#26292e]">Under NDA</p>
        <p className="mt-2 text-[13.5px] text-[#4b5058]">
          Global non-listed enterprise compliance spend. Shared in the primary investor deck under NDA conditions.
        </p>
      </div>
      
      {MARKET_DYNAMICS.map((md, i) => (
        <div
          key={i}
          data-testid={`market-dynamic-card-${i}`}
          className={`rounded-xl border p-6 bg-white ${i === 1 ? 'border-[#00C08B]' : 'border-[#e4e7ea]'}`}
        >
          <p className={`text-[11px] font-bold tracking-[0.12em] ${i === 1 ? 'text-[#00996f]' : 'text-[#767c85]'}`}>
            {i === 0 ? "SAM" : "SOM — ENTRY"}
          </p>
          <p className="mt-3 text-[20px] font-bold text-[#26292e] leading-tight">{md.title}</p>
          <p className="mt-2 text-[13.5px] text-[#4b5058] leading-relaxed">{md.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
