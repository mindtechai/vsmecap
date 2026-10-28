import React from "react";
import { LEGAL_BASIS } from "@/data/content";

export const LegalAndInvest = () => {
  return (
    <section id="legal-basis" className="py-16 bg-white border-t border-slate-100 scroll-mt-[130px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="bg-slate-100 text-slate-800 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded">
            REGULATORY STATEMENT &amp; RECOGNIZED STANDARDS
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
            Legal Foundations &amp; Framework References
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            VSMECAP functions strictly as a data processing interface mapped independently to public standards. This platform does not issue official certifications, statutory regulatory exceptions, or formal legal opinions.
          </p>
        </div>

        {/* Legal Context Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-slate-600 leading-relaxed">
          
          {/* Column 1: Legislative Anchors */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-300 pl-4">
              <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-1.5">
                1. Statutory Scope Limits (EU Frameworks)
              </h4>
              <p>
                The disclosure modules map directly to the Voluntary SME (VSME) ESRS exposure drafts prepared by the European Financial Reporting Advisory Group (EFRAG). Under the simplified reporting provisions of <strong>Directive (EU) 2026/470</strong>, non-listed undertakings falling below explicit threshold definitions (fewer than 1,000 employees) retain the right to fulfill value chain information requests using these standardized modules, rather than completing arbitrary, complex corporate questionnaires.
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4">
              <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-1.5">
                2. Value Chain Protections
              </h4>
              <p>
                In accordance with <strong>Commission Delegated Regulation (EU) 2026/1560</strong>, large corporate buyers are required to limit the scope of environmental and social data requests placed on smaller value-chain subcontractors to the parameters defined in the official VSME standard. VSMECAP provides a structured tool to align with these limits, preventing unnecessary compliance costs for subcontractors.
              </p>
            </div>
          </div>

          {/* Column 2: UK Compliance Boundaries & Assurance Disclaimer */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-300 pl-4">
              <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-1.5">
                3. UK PPN 06/21 Alignment Boundaries
              </h4>
              <p>
                For entities executing bids within UK Public Sector procurement frameworks, ledger exports mapping Scope 1 and Scope 2 metered fuel, gas, and electricity consumption data are structurally formatted to assist in completing Carbon Reduction Plans as defined under <strong>Procurement Policy Note (PPN) 06/21</strong>. The enterprise retains full responsibility for certifying the accuracy of final tender submissions.
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4">
              <h4 className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wide mb-1.5">
                4. Mandatory Third-Party Assurance Disclaimer
              </h4>
              <p>
                Data tracked within the Ingestion Matrix is compiled into an audit-ready format based on original source telemetry signatures. However, the use of this software <strong>does not constitute or replace a formal audit</strong>. Official compliance validation or external limited/reasonable assurance certificates must be issued independently by a licensed third-party accounting firm or accredited statutory assurance provider.
              </p>
            </div>
          </div>

        </div>

        {/* Technical Specification Footer Card */}
        <div className="mt-12 p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px]">
          <div className="text-slate-500">
            <strong className="block text-slate-900 font-bold uppercase tracking-wide mb-0.5">
              Taxonomy Integrity Notification
            </strong>
            Data formats match EFRAG schema requirements (Schema Edition v30.1, Q3 2026 baseline release).
          </div>
          <div className="text-slate-400 bg-white border border-slate-200 px-3 py-1.5 rounded font-bold uppercase tracking-wider shrink-0 select-none">
            Status: Neutral Compliance
          </div>
        </div>

      </div>
    </section>
  );
};
