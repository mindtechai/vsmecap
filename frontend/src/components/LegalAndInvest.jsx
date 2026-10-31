import React from "react";

const Item = ({ n, title, children }) => (
  <div className="border-l-2 border-slate-300 pl-4">
    <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-1.5">
      {n}. {title}
    </h4>
    <p>{children}</p>
  </div>
);

export const LegalAndInvest = () => {
  return (
    <section id="legal-basis" className="py-16 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="max-w-3xl mb-12">
          <span className="bg-slate-100 text-slate-800 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded">
            LEGAL BASIS &amp; REFERENCES
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
            Legal foundations and framework references
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed">
            VSMECAP is reporting software mapped independently to public standards. It does not issue certifications or legal opinions, and nothing on this page is legal, accounting or financial advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-slate-700 leading-relaxed">

          <div className="space-y-6">
            <Item n="1" title="EFRAG VSME standard">
              The disclosure modules follow the voluntary sustainability reporting standard for non-listed SMEs (VSME) developed by EFRAG and published in December 2024: a Basic module (B1 to B11) and a Comprehensive module (C1 to C9). VSME is voluntary and is not UK law.
            </Item>
            <Item n="2" title="Commission Recommendation (EU) 2025/1710">
              Adopted on 30 July 2025. It recommends the VSME for voluntary use by non-listed SMEs and encourages large companies and financial institutions to limit their information requests to it as far as possible. It is not binding, and it is an interim measure until a delegated act is adopted.
            </Item>
            <Item n="3" title="Directive (EU) 2026/470 (Omnibus I)">
              Published on 26 February 2026 and in force from 18 March 2026. It introduces a value chain cap for undertakings with up to 1,000 employees, subject to national implementation by 19 March 2027. It is EU law, so UK companies are not automatically covered.
            </Item>
          </div>

          <div className="space-y-6">
            <Item n="4" title="UK PPN 006 and PPN 06/21">
              Suppliers to major central government contracts (over £5 million a year) may need to publish a Carbon Reduction Plan. PPN 006 applies to procurements under the Procurement Act 2023, and PPN 06/21 to earlier procurements. VSMECAP outputs can help prepare Scope 1 and 2 data. The supplier remains responsible for the accuracy of its tender and for the other parts of the plan, such as the net zero commitment, targets and sign-off.
            </Item>
            <Item n="5" title="No audit or assurance">
              Reports are structured for review and show their source files. The use of this software <strong>does not constitute or replace an audit</strong>. Independent assurance must be provided by a licensed third-party accounting firm or assurance provider.
            </Item>
          </div>

        </div>

        <div className="mt-10 text-xs font-sans text-slate-700 leading-relaxed">
          <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-2">Sources</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><a className="text-[#0D9488] font-semibold hover:underline" href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj/eng" target="_blank" rel="noopener noreferrer">Commission Recommendation (EU) 2025/1710 (EUR-Lex)</a></li>
            <li><a className="text-[#0D9488] font-semibold hover:underline" href="https://www.efrag.org/en/smes-and-sustainability-reporting" target="_blank" rel="noopener noreferrer">EFRAG: SMEs and sustainability reporting</a></li>
            <li><a className="text-[#0D9488] font-semibold hover:underline" href="https://www.procurementpathway.civilservice.gov.uk/documents/ppn/ppn-006-taking-account-of-carbon-reduction-plans-in-the-procurement-of-major-government-contracts" target="_blank" rel="noopener noreferrer">UK PPN 006: Carbon Reduction Plans</a></li>
            <li><a className="text-[#0D9488] font-semibold hover:underline" href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026" target="_blank" rel="noopener noreferrer">UK Government GHG conversion factors 2026</a></li>
          </ul>
        </div>

        <div className="mt-12 p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px]">
          <div className="text-slate-600">
            <strong className="block text-slate-900 font-bold uppercase tracking-wide mb-0.5">
              Export formats
            </strong>
            JSON, CSV and a draft PDF are available. Inline XBRL aligned to EFRAG’s digital taxonomy is in development.
          </div>
          <div className="text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded font-bold uppercase tracking-wider shrink-0 select-none">
            Status: draft outputs
          </div>
        </div>

      </div>
    </section>
  );
};
