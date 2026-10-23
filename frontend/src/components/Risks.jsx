import { Section } from "@/components/Section";
import { RISKS, DRAFT_NOTE } from "@/data/content";

export const Risks = () => (
  <Section
    id="risk"
    label="RISK AND LIMITATIONS"
    labelColor="text-[#B91C1C]"
    title="Stated plainly"
    intro="What this product is not, and what could go wrong. Read before relying on anything on this page."
    tint="bg-[#fafafa]"
    note={DRAFT_NOTE}
  >
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {RISKS.map((r, i) => (
        <div
          key={r.title}
          data-testid={`risk-card-${i + 1}`}
          className="rounded-md border-2 border-[#DC2626] bg-white p-6"
        >
          <p className="text-[11px] font-bold tracking-[0.12em] text-[#B91C1C]">
            WARNING {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-[15px] font-bold text-[#26292e]">{r.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{r.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
