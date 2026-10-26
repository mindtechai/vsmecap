import React from "react";

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

export const Faqs = () => {
  return (
    <section id="faqs" className="py-16 bg-white border-t border-[#e4e7ea]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[11px] font-bold tracking-[0.12em] text-[#00996f] uppercase">FAQS</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">Frequently Asked Questions</h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Comprehensive operational parameters, methodology disclosures, and strategic regulatory alignment guidelines.
          </p>
        </div>
        
        <div className="mx-auto max-w-[820px] space-y-4">
          {LOCAL_FAQS.map((f, i) => (
            <details 
              key={i} 
              className="group rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-sm transition-all duration-200 open:shadow-md [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none select-none">
                <h3 className="text-[15.5px] font-bold text-[#26292e] flex items-start gap-2 pr-4">
                  <span className="text-[#0D9488] font-mono font-bold text-[16px]">{(i + 1).toString().padStart(2, "0")}.</span>
                  <span>{f.q}</span>
                </h3>
                <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 border-t border-gray-100/60 pt-4 text-[14.5px] leading-relaxed text-[#4b5058] pl-7 relative">
                <span className="absolute left-0 top-4 text-[#0D9488] font-mono text-[13px] font-black">A:</span>
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
