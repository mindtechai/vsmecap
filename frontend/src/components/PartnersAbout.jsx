import { Section } from "@/components/Section";
import { DRAFT_NOTE } from "@/data/content";

const LINKEDIN_URL = "https://www.linkedin.com/in/salil-patankar-94892a367";

export const PartnersAbout = () => (
  <>
    <Section
      id="partners"
      label="PARTNERS"
      title="Built with practitioners, not around them"
      tint="bg-[#fafafa]"
      note={DRAFT_NOTE}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div data-testid="partner-accountancy-card" className="rounded-md border border-[#e4e7ea] bg-white p-6">
          <h3 className="text-[15px] font-bold text-[#26292e]">Accountancy practices</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">
            VSME data lands where accountants already work. We partner with practices that
            want to offer sustainability reporting as a service line.
          </p>
        </div>
        <div data-testid="partner-tax-card" className="rounded-md border border-[#e4e7ea] bg-white p-6">
          <h3 className="text-[15px] font-bold text-[#26292e]">Tax practitioners</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">
            Carbon and energy data increasingly touches tax and incentive positions. Tax
            advisers use the verified pack as their evidence base.
          </p>
        </div>
        <div data-testid="partner-finance-card" className="rounded-md border border-[#e4e7ea] bg-white p-6">
          <h3 className="text-[15px] font-bold text-[#26292e]">Lenders and buyers</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#4b5058]">
            Counterparties that need SME disclosures receive a standard, traceable pack
            instead of bespoke questionnaires.
          </p>
        </div>
      </div>
    </Section>
    <Section
      id="about"
      label="ABOUT US"
      title="Practitioner-built, in London"
      note={DRAFT_NOTE}
    >
      <div className="max-w-[680px]">
        <p className="text-[15px] leading-relaxed text-[#4b5058]">
          VSMECAP is founded in London, UK by Salil Patankar, with a background across
          accountancy and tax practice. The product started from a practitioner observation:
          SMEs are asked for sustainability data they cannot produce, in formats their
          advisers cannot verify. VSMECAP is the audit-ready answer — the SME Sustainability
          Data Passport.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <p className="text-[13px] font-semibold text-[#26292e]">
            Salil Patankar — Founder, VSMECAP, London, UK
          </p>
          <a
            data-testid="about-linkedin-button"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="Salil Patankar on LinkedIn"
            className="inline-flex"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="3" fill="#0A66C2" />
              <path
                fill="#ffffff"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
              />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  </>
);
