import React from "react";

const Card = ({ title, role, children }) => (
  <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
    <div className="border-b border-slate-100 pb-3">
      <h3 className="text-[15px] font-bold text-[#0F172A]">{title}</h3>
      {role && <p className="text-[12px] font-semibold text-[#0D9488] mt-0.5">{role}</p>}
    </div>
    <div className="mt-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">{children}</div>
  </div>
);

export const PartnersAbout = () => {
  return (
    <div className="relative">
      
      {/* ⚡ UNBREAKABLE INVISIBLE TARGET BUFFER LANDING OFFSET LAYERS */}
      <div id="partners" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />
      <div id="about" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />

      {/* 🌐 PARTNERS GRID SECTION */}
      <section className="py-16 bg-white border-t border-[#e4e7ea]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#EA580C] uppercase">PARTNERS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">Strategic Alignment Network</h2>
            <p className="mt-4 text-base text-slate-500 font-medium">
              Developing critical validation nodes alongside industry leading standard frameworks and global compliance operators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            <Card title="EFRAG Taxonomy Engine Integration">
              System architectures built from the ground up to consume data schemas natively matching incoming machine-readable template systems.
            </Card>
            <Card title="Open Ingestion Nodes">
              Working directly alongside structural data aggregators to automate asset ledger pipelines without intermediate project manual handling.
            </Card>
          </div>
        </div>
      </section>

      {/* 📈 ENTERPRISE STYLE ABOUT US SECTION */}
      <section className="py-16 bg-[#fafafa] border-t border-[#e4e7ea]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#EA580C] uppercase">ABOUT US</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">
              Combining Proven Technology with Institutional Infrastructure
            </h2>
            <p className="mt-4 text-base text-slate-500 font-medium">
              VSMECAP designs cryptographic verification layers to turn supply-chain data complexity into structured enterprise capital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">Core Foundation</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                  Built on a decadelong methodology of data ledger prioritisation, stakeholder risk alignment, and enterprise control systems.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                10+ Years
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">Data Governance</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                  We translate highly complex EFRAG parameters into practical cloud workflows, ensuring mid-market suppliers lock in contractual supply-chain advantages.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                EFRAG Aligned
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#0F172A]">Technical Mission</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                  Developing immutable, machine-readable reporting pipelines that help companies move past expensive traditional human consulting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[20px] font-black text-[#0D9488]">
                SHA-256 Secured
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
