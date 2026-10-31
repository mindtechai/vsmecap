import React from "react";
import { Section } from "@/components/Section";
import { BASIC_MODULES, COMPREHENSIVE_MODULES } from "@/data/content";

const ModuleCard = ({ code, title, desc, tag, tagClass }) => (
  <div
    data-testid={`module-card-${code}`}
    className="rounded-xl border border-[#e4e7ea] bg-white p-5 shadow-sm"
  >
    <div className="flex items-center justify-between gap-3">
      <span className="font-mono text-[18px] font-bold text-[#0F172A]">{code}</span>
      {tag && (
        <span className={"text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border " + tagClass}>
          {tag}
        </span>
      )}
    </div>
    <h3 className="mt-3 text-[15px] font-bold text-[#0F172A]">{title}</h3>
    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600 font-medium">{desc}</p>
  </div>
);

export const Modules = () => (
  <>
    <Section
      id="basic"
      label="BASIC MODULE"
      title="B1 to B11: the Basic module"
      intro="The Basic module is the minimum level of the voluntary VSME standard. VSMECAP helps you prepare it, starting with the energy and emissions figures from your utility bills."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BASIC_MODULES.map((m) => (
          <ModuleCard
            key={m.code}
            code={m.code}
            title={m.title}
            desc={m.desc}
            tag="Basic"
            tagClass="bg-blue-50 text-blue-800 border-blue-200"
          />
        ))}
      </div>
    </Section>

    <Section
      id="comprehensive"
      label="COMPREHENSIVE MODULE"
      title="C1 to C9: the Comprehensive module"
      intro="Optional. Complete these when a customer, lender or investor asks for more detail than the Basic module."
      tint="bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COMPREHENSIVE_MODULES.map((m) => (
          <ModuleCard
            key={m.code}
            code={m.code}
            title={m.title}
            desc={m.desc}
            tag={m.points}
            tagClass="bg-orange-50 text-orange-800 border-orange-200"
          />
        ))}
      </div>
    </Section>
  </>
);
