import { Section } from "@/components/Section";
import { BASIC_MODULES, COMPREHENSIVE_MODULES, DRAFT_NOTE } from "@/data/content";

const accent = {
  blue: {
    bar: "border-t-[#1E40AF]",
    badge: "bg-[#1E40AF] text-white",
    points: "text-[#1E40AF]",
  },
  amber: {
    bar: "border-t-[#D97706]",
    badge: "bg-[#D97706] text-white",
    points: "text-[#B45309]",
  },
};

const ModuleGrid = ({ modules, kind, testidPrefix }) => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {modules.map((m) => (
      <div
        key={m.code}
        data-testid={`${testidPrefix}-${m.code.toLowerCase()}`}
        className={`rounded-md border border-[#e4e7ea] border-t-4 bg-white p-6 ${accent[kind].bar}`}
      >
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded px-2.5 py-1 text-[12px] font-bold tracking-wider ${accent[kind].badge}`}
          >
            {m.code}
          </span>
          {m.points && (
            <span className={`text-[11px] font-bold tracking-wide ${accent[kind].points}`}>
              {m.points}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-[15px] font-bold text-[#26292e]">{m.title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">{m.desc}</p>
        <p className="mt-4 border-t border-[#e4e7ea] pt-3 font-mono text-[11.5px] text-[#767c85]">
          efrg:vsm_e{m.code}_disclosure
        </p>
      </div>
    ))}
  </div>
);

export const Modules = () => (
  <>
    <Section
      id="basic"
      label="BASIC MODULE — ANNEX I"
      labelColor="text-[#1E40AF]"
      title="B1–B11 — the baseline every SME can report"
      intro="Eleven modules covering the full EFRAG VSME Annex I. Each disclosure is evidence-chained and mapped to its XBRL taxonomy tag."
      note={DRAFT_NOTE}
    >
      <ModuleGrid modules={BASIC_MODULES} kind="blue" testidPrefix="module-b" />
    </Section>
    <Section
      id="comprehensive"
      label="COMPREHENSIVE MODULE — ANNEX II"
      labelColor="text-[#B45309]"
      title="C1–C9 — for undertakings asked to go further"
      intro="Nine comprehensive modules layered on top of the Basic set, captured through the same template and verification chain."
      note={DRAFT_NOTE}
      tint="bg-[#fafafa]"
    >
      <ModuleGrid modules={COMPREHENSIVE_MODULES} kind="amber" testidPrefix="module-c" />
    </Section>
  </>
);
