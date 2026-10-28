import React from "react";

const LOCAL_RISKS = [
  {
    title: "Evolving EFRAG XBRL Taxonomies",
    desc: "The digital schema mappings for voluntary SME disclosures are determined by external regulatory frameworks. VSMECAP modifies compilation structures dynamically, but future changes require continuous platform updates."
  },
  {
    title: "Upstream Data Ingestion Gaps",
    desc: "Automated network telemetry extraction depends entirely on active MPAN/MPRN credentials. Manual exceptions can occur if a utility provider delays grid transmission logs."
  },
  {
    title: "Third-Party Assurance Boundaries",
    desc: "VSMECAP constructs an audit-ready, cryptographically signed ledger. It provides structural evidence trails, but does not replace formal external sign-off from a licensed assurance professional."
  },
  {
    title: "Jurisdictional Multi-Provider Scope",
    desc: "Protected undertaking provisions vary across UK public contracts and EU corporate chains. Enterprises must verify local procurement rules before refusing non-standard custom data metrics."
  }
];

export const Risks = () => {
  return (
    /* ⚡ Outer structural wrapper container set to relative position bounds */
    <div className="relative">
      
      {/* ⚡ UNBREAKABLE INVISIBLE TARGET BUFFER LANDING OFFSET LAYER */}
      <div id="risk" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />

      {/* Main section contents */}
      <section className="py-16 bg-white border-t border-[#e4e7ea]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#EA580C] uppercase">
              RISK AND LIMITATIONS
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">
              Venture Context &amp; Market Realities
            </h2>
            <p className="mt-4 text-base text-slate-500 font-medium">
              Transparent assessment of framework adjustments, operational boundaries, and evolving validation protocols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {LOCAL_RISKS.map((r, i) => (
              <div 
                key={i} 
                className="rounded-xl border border-[#e4e7ea] bg-white p-6 shadow-2xs transition-all hover:border-slate-300"
              >
                <h3 className="text-[15px] font-bold text-[#26292e] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  {r.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#4b5058] font-medium font-sans">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
