import React from "react";
import { CONTACT_MAILTO } from "@/data/content";

const Card = ({ title, role, children }) => (
  <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
    <div className="border-b border-slate-100 pb-3">
      <h3 className="text-[15px] font-bold text-[#0F172A]">{title}</h3>
      {role && <p className="text-[12px] font-semibold text-[#0D9488] mt-0.5">{role}</p>}
    </div>
    <div className="mt-4 text-[13.5px] leading-relaxed text-slate-600 font-medium">{children}</div>
  </div>
);

export const PartnersAbout = () => {
  return (
    <div className="relative">

      <div id="partners" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />
      <div id="about" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />

      {/* PARTNERS */}
      <section className="py-16 bg-white border-t border-[#e4e7ea]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#EA580C] uppercase">PARTNERS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">Working with the ecosystem</h2>
            <p className="mt-4 text-base text-slate-600 font-medium">
              VSMECAP is at an early stage and has no signed partnership agreements. We would like to talk to accountants, sustainability advisers and utility data providers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            <Card title="Accountants and advisers" role="Open to conversations">
              Help clients prepare VSME reports and review the figures before they are shared. Contact us to discuss access and how we could work together.
            </Card>
            <Card title="Data providers" role="Planned, no agreements in place">
              Automated links to utility or open-banking data would depend on the terms of each provider. Today, data comes from bills that you upload.
            </Card>
          </div>

          <div className="mt-8 text-center">
            <a
              href={CONTACT_MAILTO}
              className="inline-block rounded-xl bg-[#0F172A] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1e293b]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-[#fafafa] border-t border-[#e4e7ea]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#EA580C] uppercase">ABOUT US</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">
              About VSMECAP
            </h2>
            <p className="mt-4 text-base text-slate-600 font-medium">
              VSMECAP is an early-stage UK project building software that helps smaller businesses prepare structured VSME reports from their utility data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">Our focus</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600 font-medium">
                  Making voluntary sustainability reporting practical for non-listed SMEs, so that they can answer customer and lender requests without bespoke consultancy each time.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                VSME-based
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">How we work</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600 font-medium">
                  Reports show their source files and are reviewed by you before use. We state clearly what is built today and what is still in development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                Transparent
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">Where we are</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600 font-medium">
                  Preparing Basic-module reports from utility bills works today. Integrity hashing, Inline XBRL export and automated data links are in development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                In development
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
