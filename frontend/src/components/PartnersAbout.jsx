import { Section } from "@/components/Section";

const LINKEDIN_URL = "https://www.linkedin.com/in/salil-patankar-94892a367";

const Card = ({ title, role, children }) => (
  <div className="rounded-md border border-[#e4e7ea] bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
      <div>
        <h3 className="text-[15px] font-bold text-[#26292e]">{title}</h3>
        {role && <p className="text-[12px] font-medium text-[#767c85] mt-0.5">{role}</p>}
      </div>
      <a 
        href={LINKEDIN_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[11px] font-bold text-[#0077b5] hover:underline whitespace-nowrap"
      >
        LINKEDIN →
      </a>
    </div>
    <div className="mt-4 text-[13.5px] leading-relaxed text-[#4b5058]">{children}</div>
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

    {/* 📈 ABOUT US FOUNDATION SECTION */}
    <Section
      id="about"
      label="ABOUT US"
      title="The VSMECAP Operational Philosophy"
      intro="Accelerating structural carbon transparency frameworks for the next generation of non-listed enterprises."
      tint="bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card title="Salil Patankar" role="Founder &amp; Principal Architect">
          Leading the development of secure, hash-chained regulatory pipelines tailored precisely to the voluntary SME reporting framework definitions.
        </Card>
        <Card title="Technical Mission">
          Transforming annual disclosure friction into automated infrastructure layers, ensuring small firms maintain strict supply chain procurement advantages.
        </Card>
      </div>
    </Section>
  </>
);
