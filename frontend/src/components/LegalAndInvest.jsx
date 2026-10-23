import { Section } from "@/components/Section";
import { DECK_MAILTO } from "@/data/content";

export const LegalAndInvest = () => (
  <Section
    id="legal-basis"
    label="LEGAL BASIS"
    title="Voluntary by law, demanded by counterparties"
    intro="Recommendation (EU) 2025/1710 keeps VSME voluntary and makes external assurance optional (¶14–16). Demand arrives contractually — through buyers, lenders and public procurement."
  >
    <div
      id="investment"
      data-testid="investment-card"
      className="scroll-mt-32 rounded-lg bg-[#0F172A] p-8 sm:p-12"
    >
      <p className="text-[12px] font-bold tracking-[0.14em] text-[#00C08B]">
        INVESTMENT DECK — NDA GATED
      </p>
      <h3 className="mt-4 max-w-[560px] text-[24px] font-bold leading-snug text-white sm:text-[28px]">
        The full model, pricing and 45 FTE Generic unit economics are in the deck.
      </h3>
      <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#94a3b8]">
        Shared with qualified investors and design partners after a mutual NDA. Request it by
        email — it opens your mail client addressed to us.
      </p>
      <a
        data-testid="request-deck-nda-button"
        href={DECK_MAILTO}
        className="mt-8 inline-block rounded-md bg-[#00C08B] px-6 py-3 text-[13px] font-bold tracking-wider text-white hover:bg-[#00a87a]"
      >
        REQUEST INVESTMENT DECK (NDA)
      </a>
    </div>
  </Section>
);
