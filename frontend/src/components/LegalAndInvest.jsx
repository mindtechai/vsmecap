import React from "react";
import { Section } from "@/components/Section";
import { LEGAL_BASIS } from "@/data/content";

const Card = ({ title, children }) => (
  <div className="rounded-md border border-[#e4e7ea] bg-white p-6">
    <h3 className="text-[15px] font-bold text-[#26292e]">{title}</h3>
    <div className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{children}</div>
  </div>
);

export const LegalAndInvest = () => (
  <>
    {/* 🌐 Unified Legal Basis Framework Row */}
    <Section
      id="legal-basis"
      label="LEGAL BASIS"
      title="Regulatory Compliance Foundations"
      intro="Structured parameters tracking the absolute baseline of European sustainability architecture and data requirements."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {LEGAL_BASIS.map((lb, i) => (
          <Card key={i} title={lb.title}>
            {lb.desc}
          </Card>
        ))}
      </div>
    </Section>

    {/* 📈 Investment Proposition Infrastructure */}
    <Section
      id="investment"
      label="INVESTMENT"
      title="Commercialization Strategy"
      intro="Accelerating compliance delivery models through secured API pipelines and structured data validation grids."
      tint="bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card title="Strategic Roadmap">
          {"VSMECAP transitions annual regulatory obligations into real-time, automated verification feeds directly linked to financial underwriting nodes."}
        </Card>
        <Card title="Capital Efficiency">
          {"By locking field parameters to the machine-readable efrg:vsm_e schemas, our code blocks prevent user migration friction and deliver a true market moat."}
        </Card>
      </div>
    </Section>
  </>
);
