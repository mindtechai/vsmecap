import { Section } from "@/components/Section";
import { MOAT_CARDS, PRODUCT_STEPS, WHY_NOW_SECTIONS, MARKET_DYNAMICS } from "@/data/content";

const Card = ({ testid, kicker, title, children }) => (
  <div
    data-testid={testid}
    className="rounded-md border border-[#e4e7ea] bg-white p-6"
  >
    {kicker && (
      <p className="mb-3 text-[11px] font-bold tracking-[0.12em] text-[#00996f]">{kicker}</p>
    )}
    <h3 className="text-[15px] font-bold text-[#26292e]">{title}</h3>
    <div className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{children}</div>
  </div>
);

export const UkCompanies = () => (
  <Section
    id="uk-companies"
    label="UK COMPANIES"
    title="Non-Listed Enterprise Framework — Built for Scale"
    intro="A standardized verification schema configured strictly for non-listed enterprises under 250 employees, transforming reporting from a manual consultancy into an automated compliance flow."
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card testid="uk-micro-card" kicker="TEMPLATE" title="Micro-undertaking friendly">
        One optimized pipeline sized for micro, small, and medium undertakings. No consulting hours, no custom scoping—the architecture maps directly to how non-listed businesses actually operate under official EFRAG directives.
      </Card>
      <Card testid="uk-meter-card" kicker="DATA" title="MPAN/MPRN meter ingestion">
        Electricity and gas utility meters are ingested directly via digital MPAN/MPRN network identifiers. Integrated data layers fill compliance gaps automatically—eliminating manual record spreadsheets.
      </Card>
      <Card testid="uk-scope-card" kicker="BOUNDARY" title="Own-walls Scope 1 + 2">
        The system isolates your explicit operational boundaries: physical premises, fleet vehicles, and purchased energy values. Scope 1 and location-based Scope 2 are structurally computed, hashed, and evidenced.
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
          className="rounded-md border border-[#e4e7ea] bg-white p-6"
        >
          <p className="font-mono text-[26px] font-bold text-[#00C08B]">{s.step}</p>
          <h3 className="mt-3 text-[15px] font-bold text-[#26292e]">{s.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{s.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

export const WhyNow = () => (
  <Section
    id="why-now"
    label="WHY NOW"
    title="A published standard, a dated recommendation"
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
  <Section id="moat" label="MOAT" title="Four compounding advantages">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {MOAT_CARDS.map((c, i) => (
        <Card key={c.title} testid={`moat-card-${i + 1}`} title={c.title}>
          {c.desc}
        </Card>
      ))}
    </div>
  </Section>
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
        className="rounded-md border border-[#e4e7ea] bg-white p-6"
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
          className={`rounded-md border p-6 bg-white ${i === 1 ? 'border-[#00C08B]' : 'border-[#e4e7ea]'}`}
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
