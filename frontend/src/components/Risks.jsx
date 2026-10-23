import { Section } from "@/components/Section";
import { RISKS } from "@/data/content";

export const Risks = () => (
  <Section
    id="risk"
    label="RISK AND LIMITATIONS"
    title="Venture Context & Market Realities"
    intro="Transparent assessment of framework adjustments, operational thresholds, and structural dependencies."
    tint="bg-[#fafafa]"
  >
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {RISKS.map((r, i) => (
        <div
          key={i}
          data-testid={`risk-card-${i + 1}`}
          className="rounded-md border border-[#e4e7ea] bg-white p-6 shadow-sm"
        >
          <h3 className="text-[14.5px] font-bold text-[#26292e]">{r.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{r.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
