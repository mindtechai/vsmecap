import { CONTACT_MAILTO } from "@/data/content";

export const Privacy = () => (
  <section
    id="privacy"
    data-testid="section-privacy"
    className="scroll-mt-32 bg-white py-14 sm:py-20"
  >
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <p className="mb-2 text-[12px] font-bold tracking-[0.14em] text-[#00996f]">PRIVACY</p>
      <h2 className="text-[26px] font-bold tracking-tight text-[#26292e] sm:text-[30px]">
        Privacy — Effective 13 May 2026
      </h2>
      <div className="mt-6 max-w-[680px] space-y-4 text-[14px] leading-relaxed text-[#4b5058]">
        <p>
          VSMECAP, London, UK is the data controller for enquiries made through this page.
          Contact:{" "}
          <a href={CONTACT_MAILTO} className="font-semibold text-[#00996f]">
            info@vsmecap.com
          </a>
          .
        </p>
        <p>
          This website sets no cookies and runs no analytics. The only personal data we
          receive is what you choose to send by email — typically your name, company and
          message — used solely to respond to your enquiry.
        </p>
        <p>
          You have rights under UK GDPR, including access, rectification and erasure of your
          data. To exercise them, email info@vsmecap.com. You may also complain to the UK
          Information Commissioner's Office.
        </p>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer data-testid="footer" className="bg-[#0F172A] py-12">
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <p className="text-[14px] font-semibold text-white">
        © 2026 VSMECAP, London, UK ·{" "}
        <a href={CONTACT_MAILTO} data-testid="footer-email-link" className="text-[#00C08B]">
          info@vsmecap.com
        </a>
      </p>
      <p className="mt-4 max-w-[760px] text-[12px] leading-relaxed text-[#64748b]">
        VSMECAP provides audit-ready reporting tooling. It is not a certified or official
        EFRAG platform, and its output does not constitute assurance. Module, risk and FAQ
        copy on this page is draft and subject to change. Internal template v1.2 — 13 May
        2026.
      </p>
    </div>
  </footer>
);
