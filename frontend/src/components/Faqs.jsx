import { Section } from "@/components/Section";
import { FAQS, DRAFT_NOTE } from "@/data/content";

export const Faqs = () => (
  <Section
    id="faqs"
    label="FAQS"
    title="Legal, technical and audit questions"
    note={DRAFT_NOTE}
  >
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {FAQS.map((f, i) => (
        <div
          key={i}
          data-testid={`faq-card-${i + 1}`}
          className="rounded-md border border-[#e4e7ea] bg-white p-6"
        >
          <h3 className="text-[14px] font-bold leading-snug text-[#26292e]">{f.q}</h3>
          <p className="mt-3 text-[13px] leading-relaxed text-[#4b5058]">{f.a}</p>
        </div>
      ))}
    </div>
  </Section>
);
