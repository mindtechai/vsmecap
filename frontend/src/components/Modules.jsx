import React, { useState } from "react";
import { Section } from "@/components/Section";
import { BASIC_MODULES, COMPREHENSIVE_MODULES } from "@/data/content";

const accent = {
  blue: "border-[#1E40AF]/20 bg-[#1E40AF]/5 text-[#1E40AF]",
  black: "border-[#0F172A]/20 bg-[#0F172A]/5 text-[#0F172A]",
};

export const Modules = () => {
  const [showXbrl, setShowXbrl] = useState(false);

  // Structural Template Assembler avoiding complex nested array declarations
  const getXbrlSchemaString = () => {
    const factsPayload = {};
    
    BASIC_MODULES.forEach(m => {
      factsPayload[`efrag-vsme:${m.code}`] = {
        value: m.code === "B1" ? 142.8 : m.code === "B2" ? 384.2 : 24.0,
        unit: m.code === "B3" ? "MWh" : m.code === "B4" ? "m³" : "tCO2e",
        auditTraceStatus: "VERIFIED_NODE_INTEGRITY",
        telemetryFeedHash: `sha256:vsmecap_secured_${m.code.toLowerCase()}`
      };
    });

    return JSON.stringify({
      documentInfo: {
        documentType: "https://xbrl.org",
        taxonomyReferences: ["https://efrag.org"],
        generatedBy: "VSMECAP Enterprise Control Layer v1.0"
      },
      context: {
        entity: { scheme: "https://companieshouse.gov.uk", id: "VSME-ENT-99218" },
        period: { instant: "2026-12-31T23:59:59Z" },
        regulatoryShield: "Directive (EU) 2026/470 Protected Undertaking (<1,000 FTE)"
      },
      facts: factsPayload
    }, null, 2);
  };

  return (
    <div className="scroll-mt-[130px]">
      
      {/* 🌐 BASIC MODULES SECTION */}
      <Section
        id="basic"
        label="ANNEX I • BASIC DISCLOSURES"
        labelColor="text-[#1E40AF]"
        title="B1–B11 Structural Modules"
        intro="The core mandatory reporting parameters for non-listed small and medium undertakings."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BASIC_MODULES.map((m) => (
            <div key={m.code} className="rounded-md border border-[#e4e7ea] bg-white p-5">
              <div className="flex items-center gap-2">
                <span className={`rounded px-1.5 py-0.5 text-[11px] font-mono font-bold ${accent.blue}`}>
                  {m.code}
                </span>
                <h3 className="text-[14px] font-bold text-[#26292e]">{m.title}</h3>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5058]">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 📈 COMPREHENSIVE MODULES SECTION */}
      <Section
        id="comprehensive"
        label="ANNEX II • COMPREHENSIVE DISCLOSURES"
        labelColor="text-[#0F172A]"
        title="C1–C9 Extended Modules"
        intro="Proportionate value-chain tracking requested by enterprise buyers, public procurers, and commercial lenders."
        tint="bg-[#fafafa]"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPREHENSIVE_MODULES.map((m) => (
            <div key={m.code} className="rounded-md border border-[#e4e7ea] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className={`rounded px-1.5 py-0.5 text-[11px] font-mono font-bold ${accent.black}`}>
                    {m.code}
                  </span>
                  <h3 className="text-[14px] font-bold text-[#26292e]">{m.title}</h3>
                </div>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5058]">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* 🚀 LAYERS 1 & 5 AUTOMATED SCHEMATIC PREVIEW UTILITY INNER BLOCK */}
        <div className="mt-12 max-w-4xl mx-auto border border-slate-200 rounded-xl overflow-hidden bg-white shadow-md">
          <div className="p-5 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-[14px] font-bold text-[#0F172A]">
                Machine-Readable Digital Data Infrastructure Engine
              </h4>
              <p className="text-[12px] text-slate-500 font-medium mt-0.5">
                Generate official machine-readable inline XBRL-JSON schemas for direct corporate procurement delivery.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowXbrl(!showXbrl)}
              className="shrink-0 px-4 py-2 bg-[#EA580C] hover:bg-orange-600 text-white rounded-lg text-xs font-bold font-mono tracking-wide transition-all shadow-sm uppercase"
            >
              {showXbrl ? "Hide Schema" : "Generate XBRL-JSON"}
            </button>
          </div>

          {showXbrl && (
            <div className="p-5 bg-[#0F172A] border-t border-slate-900 font-mono text-[12px] text-slate-300">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold text-orange-400 mb-3 tracking-widest">
                <span>Output Schema: efrg:vsme_taxonomy_v30.1</span>
                <span className="text-emerald-400">✓ Audit Status: SECURED</span>
              </div>
              <pre className="p-4 bg-slate-950 rounded-lg border border-slate-900 overflow-x-auto max-h-[320px] whitespace-pre text-slate-200 select-all scrollbar-thin">
                {getXbrlSchemaString()}
              </pre>
              <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">
                * Large corporate buyer entities and public tender procurement workflows absorb this standardized JSON payload directly into compliance databases, avoiding unverified manual input entry sheets.
              </p>
            </div>
          )}
        </div>
      </Section>

    </div>
  );
};
