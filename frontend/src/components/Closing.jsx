import React from "react";
import { CONTACT_MAILTO } from "@/data/content";

// Fill these in with your real details. UK companies must show their registered
// name, company number and registered office on their website.
// The block only appears once legalName and number are both filled in.
const COMPANY = {
  legalName: "",
  number: "",
  registeredOffice: "",
  registeredIn: ""
};

const hasCompanyDetails = COMPANY.legalName && COMPANY.number;

export const Footer = () => (
  <footer className="bg-[#f8fafc] border-t border-[#e4e7ea] py-16">
    <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 flex flex-col items-center gap-6">

      <div className="w-full max-w-[340px] pb-4 border-b border-slate-200/60 flex justify-center">
        <img
          className="w-full h-auto object-contain mx-auto"
          src="/vsmecap_logo_transparent_800.png"
          alt="VSMECAP logo"
        />
      </div>

      <div className="text-[12px] text-slate-600 space-y-2 max-w-[640px]">
        <p className="font-semibold text-slate-700">VSMECAP — Structured VSME reporting for UK SMEs</p>
        <p>
          VSME is a voluntary standard and is not UK law. VSMECAP is not certified or endorsed by EFRAG, and its reports are structured for review and are not audited. Nothing on this site is legal, accounting or financial advice.
        </p>
        {hasCompanyDetails && (
          <p>
            {COMPANY.legalName}. Registered{COMPANY.registeredIn ? " in " + COMPANY.registeredIn : ""} under company number {COMPANY.number}.
            {COMPANY.registeredOffice ? " Registered office: " + COMPANY.registeredOffice + "." : ""}
          </p>
        )}
        <p>
          <a href={CONTACT_MAILTO} className="font-semibold text-slate-700 underline hover:text-[#00996f]">info@vsmecap.com</a>
          {" · "}
          <a href="#privacy" className="font-semibold text-slate-700 underline hover:text-[#00996f]">Privacy notice</a>
        </p>
        <p>© 2026 VSMECAP. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const H3 = ({ children }) => (
  <h3 className="text-[14px] font-bold text-[#0F172A] pt-2">{children}</h3>
);

export const Privacy = () => (
  <section id="privacy" className="bg-white py-16 border-t border-gray-100">
    <div className="mx-auto max-w-[840px] px-4 text-left space-y-6">
      <h2 className="text-[20px] font-bold text-[#0F172A] tracking-tight border-b border-slate-100 pb-2">
        Privacy notice
      </h2>

      <div className="text-[13.5px] leading-relaxed text-slate-600 font-medium space-y-4">
        <p>
          This notice explains how personal data is handled when you visit this website, contact us, or use the VSMECAP reporting tool. It is written for UK GDPR and the Data Protection Act 2018. Last updated: 31 October 2026.
        </p>

        <H3>Who we are</H3>
        <p>
          VSMECAP is the controller of the personal data described here. You can contact us at <a href={CONTACT_MAILTO} className="text-[#0D9488] font-bold hover:underline">info@vsmecap.com</a> about anything in this notice.
        </p>

        <H3>What this website collects</H3>
        <p>
          The website has no user accounts. If you email us, we process your email address and the content of your message so that we can reply. Our hosting provider, Vercel, processes technical information such as your IP address, browser type and the pages requested in order to deliver and secure the site. This may involve transfers outside the UK, which rely on the safeguards the provider puts in place.
        </p>

        <H3>The reporting tool</H3>
        <p>
          In the current version of the tool, the files you add and the values you enter are processed locally in your browser. They are not uploaded to our servers and are not kept once you close or refresh the page, unless you export them yourself. If this changes, for example when accounts or cloud storage are introduced, we will update this notice before it takes effect.
        </p>

        <H3>Cookies</H3>
        <p>
          This website does not use advertising cookies. We do not currently use analytics or tracking tools that set cookies. If that changes, we will update this notice and ask for your consent first where the law requires it.
        </p>

        <H3>How long we keep data</H3>
        <p>
          We keep emails for as long as needed to deal with your enquiry and for a reasonable period afterwards, then delete them.
        </p>

        <H3>Your rights</H3>
        <p>
          You have the right to ask for access to your personal data, to have it corrected or erased, to restrict or object to its use, and to receive a copy of data you provided. To use these rights, email us. You can also complain to the Information Commissioner’s Office at ico.org.uk.
        </p>

        <p className="text-[12px] text-slate-500">
          This notice is general information, not legal advice. VSMECAP reports are structured for review and are not audited.
        </p>
      </div>
    </div>
  </section>
);
