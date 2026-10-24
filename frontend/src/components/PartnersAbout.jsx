import { Section } from "@/components/Section";

const Card = ({ title, role, children }) => (
  <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
    <div className="border-b border-slate-100 pb-3">
      <h3 className="text-[15px] font-bold text-[#0F172A]">{title}</h3>
      {role && <p className="text-[12px] font-semibold text-[#0D9488] mt-0.5">{role}</p>}
    </div>
    <div className="mt-4 text-[13.5px] leading-relaxed text-slate-500 font-medium">{children}</div>
  </div>
);

export const PartnersAbout = () => (
  <>
    {/* 🌐 PARTNERS GRID SECTION */}
    <Section
      id="partners"
      label="PARTNERS"
      title="Strategic Alignment Network"
      intro="Developing critical validation nodes alongside industry leading standard frameworks and global compliance operators."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card title="EFRAG Taxonomy Engine Integration">
          System architectures built from the ground up to consume data schemas natively matching incoming machine-readable template systems.
        </Card>
        <Card title="Open Ingestion Nodes">
          Working directly alongside structural data aggregators to automate asset ledger pipelines without intermediate project manual handling.
        </Card>
      </div>
    </Section>

    {/* 📈 ENTERPRISE STYLE ABOUT US SECTION */}
    <Section
      id="about"
      label="ABOUT US"
      title="Combining Proven Technology with Institutional Infrastructure"
      intro="VSMECAP designs cryptographic verification layers to turn supply-chain data complexity into structured enterprise capital."
      tint="bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
    </Section>
  </>
);
