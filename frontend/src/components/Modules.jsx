import React from "react";
import { Section } from "@/components/Section";
import { BASIC_MODULES, COMPREHENSIVE_MODULES } from "@/data/content";

const accent = {
  blue: "border-[#1E40AF]/20 bg-[#1E40AF]/5 text-[#1E40AF]",
  black: "border-[#0F172A]/20 bg-[#0F172A]/5 text-[#0F172A]",
};

export const Modules = () => (
  <>
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
    </Section>
  </>
);
