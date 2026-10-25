import { Section } from "@/components/Section";

const LOCAL_FAQS = [
  { q: "Is VSMECAP an official EFRAG tool?", a: "No. VSMECAP maps independently to the public EFRAG VSME standard framework." },
  { q: "What is the Value Chain Cap?", a: "Under Regulation (EU) 2026/1560, large corporate buyers cannot legally demand ESG metrics from you that exceed official VSME parameters." },
  { q: "Am I classified as a protected undertaking?", a: "Yes. Directive (EU) 2026/470 shields non-listed firms under 1,000 employees from excessive custom questionnaire requests." },
  { q: "What is a chain hash?", a: "Each data record is cryptographically hashed, allowing independent auditors to trace final numbers back to source documents without spreadsheet chaos." },
  { q: "Is software installation required?", a: "No. VSMECAP runs as an automated web-based cloud pipeline via secure data ingestion streams." },
  { q: "Is this platform free for small businesses?", a: "Yes, the platform features a permanently free reporting tier for true non-listed undertakings under 1,000 employees." },
  { q: "What data points are required to start?", a: "Typically utility meter point identifiers (MPAN/MPRN), raw energy invoices, fleet fuel parameters, and basic payroll characteristics." },
  { q: "Does a VSMECAP pack count as assurance?", a: "No. The pack is audit-ready and traceable. Formal external assurance must come from an independent, licensed assurance provider." },
  { q: "How long does deployment take?", a: "Standard pipeline configurations complete ingestion mappings within 48 hours of source linking." },
  { q: "Can we export reports for UK public tenders?", a: "Yes. All ledger exports structurally align with PPN 06/21 carbon reduction format guidelines." },
  { q: "Who retains data governance?", a: "The reporting enterprise retains absolute data ownership. Profiles are hashed locally to eliminate third-party leaks." },
  { q: "What happens if EFRAG modifies taxonomy specs?", a: "VSMECAP pipeline conversion tables update dynamically to ensure format parity with future schema versions." }
];

export const Faqs = () => (
  <Section 
    id="faqs" 
    label="FAQS" 
    title="Frequently Asked Questions"
    intro="Comprehensive operational parameters, methodology disclosures, and strategic regulatory alignment guidelines."
  >
    <div className="mx-auto max-w-[820px] space-y-6">
      {LOCAL_FAQS.map((f, i) => (
        <div 
          key={i} 
          data-testid={`faq-item-${i + 1}`}
          className="rounded-lg border border-[#e4e7ea] bg-white p-6 shadow-sm transition-all hover:border-[#0D9488]/30"
        >
          <h3 className="text-[15.5px] font-bold text-[#26292e] flex items-start gap-2">
            <span className="text-[#0D9488] font-mono font-bold text-[16px]">Q:</span>
            <span>{f.q}</span>
          </h3>
          <div className="mt-3 border-t border-gray-100/60 pt-3 text-[14px] leading-relaxed text-[#4b5058] pl-5 relative">
            <span className="absolute left-0 top-3 text-gray-400 font-mono text-[12px] font-bold">A:</span>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
