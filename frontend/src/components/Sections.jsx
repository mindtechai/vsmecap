import { Section } from "@/components/Section";
import { MOAT_CARDS, PRODUCT_STEPS, DRAFT_NOTE } from "@/data/content";

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
    title="45 FTE Generic — built for the typical UK SME"
    intro="A fixed template for companies around 45 FTE, so reporting stops being a consultancy project."
    note={DRAFT_NOTE}
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card testid="uk-micro-card" kicker="TEMPLATE" title="Micro-undertaking friendly">
        One questionnaire sized for micro and small undertakings. No consulting hours, no
        custom scoping — the defaults match how a 45-FTE UK company actually operates.
      </Card>
      <Card testid="uk-meter-card" kicker="DATA" title="MPAN/MPRN meter ingestion">
        Electricity and gas meters are pulled directly by MPAN/MPRN identifier. Utility
        invoices fill the gaps — no manual meter-reading spreadsheets.
      </Card>
      <Card testid="uk-scope-card" kicker="BOUNDARY" title="Own-walls Scope 1 + 2">
        The default boundary is what the company controls: its own premises, vehicles and
        purchased energy. Scope 1 and Scope 2, computed and evidenced.
      </Card>
    </div>
  </Section>
);

export const PublicSector = () => (
  <Section
    id="public-sector"
    label="PUBLIC SECTOR"
    title="Procurement-ready carbon reporting"
    intro="A supplier pack mapped to the data points public buyers ask for."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card testid="public-ppn-card" kicker="PPN 06/21" title="Mapped to Carbon Reduction Plans">
        The pack aligns to PPN 06/21 CRP requirements — baseline and current-year emissions,
        Scope 1, Scope 2 and the defined subset of Scope 3, with evidence attached.
      </Card>
      <Card testid="public-buyer-card" kicker="BUYERS" title="One pack, every tender">
        Suppliers generate the pack once and reuse it across frameworks and tenders, instead
        of re-answering carbon questionnaires for each bid.
      </Card>
    </div>
  </Section>
);

export const Product = () => (
  <Section
    id="product"
    label="PRODUCT"
    title="The verification chain"
    intro="Three steps from raw records to an audit-ready pack."
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card testid="why-now-ec-card" kicker="EUROPEAN COMMISSION" title="Recommendation (EU) 2025/1710">
        Adopted 30 July 2025 — C(2025) 4984 final. The Commission recommends VSME as the
        voluntary reference for SME sustainability reporting and as the value-chain cap for
        what large companies should ask of SMEs.
      </Card>
      <Card testid="why-now-efrag-card" kicker="EFRAG" title="VSME standard, December 2024">
        EFRAG delivered the final VSME standard in December 2024: a Basic module (B1–B11) and
        a Comprehensive module (C1–C9), designed to be proportionate for non-listed SMEs.
      </Card>
    </div>
  </Section>
);

export const Moat = () => (
  <Section id="moat" label="MOAT" title="Four compounding advantages" note={DRAFT_NOTE}>
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
    intro="Sized bottom-up. The full model ships with the investor deck under NDA."
    tint="bg-[#fafafa]"
    note={DRAFT_NOTE}
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div
        data-testid="market-tam-card"
        className="rounded-md border border-[#e4e7ea] bg-white p-6"
      >
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#767c85]">TAM</p>
        <p className="mt-3 text-[24px] font-bold text-[#26292e]">Under NDA</p>
        <p className="mt-2 text-[13.5px] text-[#4b5058]">
          Global SME sustainability-reporting spend. Shared in the investor deck under NDA.
        </p>
      </div>
      <div
        data-testid="market-sam-card"
        className="rounded-md border border-[#e4e7ea] bg-white p-6"
      >
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#767c85]">SAM</p>
        <p className="mt-3 text-[24px] font-bold text-[#26292e]">UK SME — 5.5M</p>
        <p className="mt-2 text-[13.5px] text-[#4b5058]">
          5.5 million UK SMEs exposed to value-chain sustainability data requests.
        </p>
      </div>
      <div
        data-testid="market-som-card"
        className="rounded-md border border-[#00C08B] bg-white p-6"
      >
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#00996f]">SOM — ENTRY</p>
        <p className="mt-3 text-[24px] font-bold text-[#26292e]">45 FTE Generic</p>
        <p className="mt-2 text-[13.5px] text-[#4b5058]">
          The wedge: the typical ~45-FTE UK company, served by one fixed, low-friction template.
        </p>
      </div>
    </div>
  </Section>
);
