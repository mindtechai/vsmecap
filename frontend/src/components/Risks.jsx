import React from "react";
import { Section } from "@/components/Section";
import { RISKS } from "@/data/content";

export const Risks = () => (
  <Section
    id="risk"
    label="RISK AND LIMITATIONS"
    title="Venture Context & Market Realities"
    intro="Transparent assessment of framework adjustments, operational boundaries, and evolving validation protocols."
    tint="bg-white"
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {RISKS && RISKS.map((r, i) => (
        <div key={i} className="rounded-md border border-[#e4e7ea] bg-white p-6 shadow-sm">
          <h3 className="text-[15px] font-bold text-[#26292e]">{r.title}</h3>
          <div className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{r.desc}</div>
        </div>
      ))}
    </div>
  </Section>
);
