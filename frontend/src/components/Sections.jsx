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
    <div className="mt-2 text-[13.5px] leading-relaxed text-slate-600 font-medium">{children}</div>
  </div>
);

const safeJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export const UkCompanies = () => (
  <Section
    id="uk-companies"
    label="UK &amp; EU COMPANIES"
    title="Structured reporting for smaller businesses"
    intro="A clear way to prepare VSME-based reports for non-listed companies, so that customer and lender requests can be answered from one structured report."
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card testid="uk-micro-card" kicker="Value Chain Cap" title="Understand the cap">
        Directive (EU) 2026/470 lets eligible companies with up to 1,000 employees decline requests that go beyond the voluntary standard, subject to national implementation. It is EU law, so UK companies are not automatically covered. Take professional advice.
      </Card>
      <Card testid="uk-meter-card" kicker="Data" title="From bills to figures">
        Upload electricity, gas and water bills. Meter numbers (MPAN/MPRN) and consumption are extracted for you to check, in place of manual spreadsheet entry.
      </Card>
      <Card testid="uk-scope-card" kicker="Scope" title="Scope 1 and 2 from your own sites">
        The Basic module covers your own energy use and Scope 1 and Scope 2 emissions. Reporting on Scope 3 is optional.
      </Card>
    </div>
  </Section>
);

export const PublicSector = () => (
  <Section
    id="public-sector"
    label="PUBLIC SECTOR"
    title="Carbon Reduction Plan support"
    intro="Information to help suppliers prepare for public-sector tenders that ask for a Carbon Reduction Plan."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card testid="public-ppn-card" kicker="PPN 006" title="Carbon Reduction Plans">
        For major central government contracts (over £5 million a year), bidders must publish a Carbon Reduction Plan covering Scope 1, Scope 2 and a subset of Scope 3 emissions. PPN 006 applies to procurements under the Procurement Act 2023, and PPN 06/21 to earlier ones. VSMECAP helps prepare the Scope 1 and 2 energy figures. A full plan also needs a net zero commitment, targets and director sign-off, which you provide.
      </Card>
      <Card testid="public-buyer-card" kicker="REUSE" title="One report, several requests">
        Keep one structured report and reuse the figures across tenders and customer questionnaires. Always check the requirements of each buyer.
      </Card>
    </div>
  </Section>
);

export const Product = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How VSMECAP works",
          "description": "Three steps from utility bills to a draft reporting pack that is structured for review.",
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
      title="From bills to a draft report"
      intro="Three steps from source records to a reporting pack that is structured for review. Reports are not audited."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PRODUCT_STEPS.map((s) => (
          <div
            key={s.step}
            data-testid={`product-step-${s.step}`}
            className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm"
          >
            <p className="font-mono text-[26px] font-bold text-[#EA580C]">{s.step}</p>
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
    title="A published standard and a changing regulatory timeline"
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {WHY_NOW_SECTIONS.map((wn, i) => (
        <Card key={i} testid={`why-now-card-${i + 1}`} kicker="CONTEXT" title={wn.title}>
          {wn.desc}
        </Card>
      ))}
    </div>
  </Section>
);

const POSITION_KICKERS = ["Standards", "Adoption", "Regulation", "Data"];

export const Moat = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "How VSMECAP is positioned",
          "itemListElement": MOAT_CARDS.map((card, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": card.title,
            "description": card.desc
          }))
        })
      }}
    />

    <Section id="moat" label="POSITION" title="How VSMECAP is positioned">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MOAT_CARDS.map((card, i) => (
          <Card key={i} testid={`moat-card-${i + 1}`} kicker={POSITION_KICKERS[i] || "Position"} title={card.title}>
            {card.desc}
          </Card>
        ))}
      </div>
    </Section>
  </>
);

export const Market = () => (
  <Section
    id="market"
    label="MARKET"
    title="The opportunity"
    intro="Market sizing is shared with investors on request."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div
        data-testid="market-tam-card"
        className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm"
      >
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#5b616b]">MARKET SIZE</p>
        <p className="mt-3 text-[24px] font-bold text-[#26292e]">On request</p>
        <p className="mt-2 text-[13.5px] text-[#4b5058]">
          Market sizing is shared with investors on request.
        </p>
      </div>

      {MARKET_DYNAMICS.map((md, i) => (
        <div
          key={i}
          data-testid={`market-dynamic-card-${i}`}
          className={`rounded-xl border p-6 bg-white ${i === 1 ? "border-[#EA580C]" : "border-[#e4e7ea]"}`}
        >
          <p className={`text-[11px] font-bold tracking-[0.12em] ${i === 1 ? "text-[#EA580C]" : "text-[#5b616b]"}`}>
            {i === 0 ? "THE GAP" : "DEMAND"}
          </p>
          <h3 className="mt-3 text-[15px] font-bold text-[#0F172A]">{md.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600 font-medium">{md.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
