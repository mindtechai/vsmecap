import { Section } from "@/components/Section";
import { FAQS } from "@/data/content";

export const Faqs = () => (
  <Section 
    id="faqs" 
    label="FAQS" 
    title="Frequently Asked Questions"
    intro="Comprehensive operational parameters, methodology disclosures, and strategic regulatory alignment guidelines."
  >
    <div className="mx-auto max-w-[820px] space-y-6">
      {FAQS.map((f, i) => (
        <div 
          key={i} 
          data-testid={`faq-item-${i + 1}`}
          className="rounded-lg border border-[#e4e7ea] bg-white p-6 shadow-sm transition-all hover:border-[#00C08B]/30"
        >
          <h3 className="text-[15.5px] font-bold text-[#26292e] flex items-start gap-2">
            <span className="text-[#00C08B] font-mono font-bold text-[16px]">Q:</span>
            <span>{f.q}</span>
          </h3>
          <div className="mt-3 border-t border-gray-100/60 pt-3 text-[14px] leading-relaxed text-[#4b5058] pl-5 relative">
            <span className="absolute left-0 top-3 text-gray-400 font-mono text-[12px] font-bold">A:</span>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
