export const Footer = () => (
  <footer className="bg-[#f8fafc] border-t border-[#e4e7ea] py-16">
    <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 flex flex-col items-center gap-6">
      
      {/* Large Brand Asset Alignment */}
      <div className="w-full max-w-[340px] pb-4 border-b border-slate-200/60 flex justify-center">
        <img 
          className="w-full h-auto object-contain mx-auto" 
          src="/vsmecap_logo_transparent_800.png" 
          alt="VSMECAP Primary Corporate Branding" 
        />
      </div>

      <div className="text-[12px] text-[#767c85] space-y-1">
        <p className="font-semibold text-slate-700">VSMECAP — Audit-Ready Sustainability Pipelines</p>
        <p>© {new Date().getFullYear()} VSMECAP. All rights reserved. Registered framework mappings.</p>
      </div>
    </div>
  </footer>
);

export const Privacy = () => (
  <section id="privacy" className="bg-white py-16 border-t border-gray-100">
    <div className="mx-auto max-w-[840px] px-4 text-left space-y-6">
      <h2 className="text-[20px] font-bold text-[#0F172A] tracking-tight border-b border-slate-100 pb-2">
        Data Governance &amp; Privacy Infrastructure Disclosure
      </h2>
      
      <div className="text-[13.5px] leading-relaxed text-slate-500 font-medium space-y-4">
        <p>
          In accordance with European Commission Recommendation (EU) 2025/1710 data tracking frameworks, VSMECAP operates as an isolated, self-serve data processing mapping utility. All uploaded source records, utility consumption logs (MPAN/MPRN network parameters), and internal HR payroll distributions are ingested strictly to construct machine-readable ledger schemas.
        </p>
        <p>
          <strong>Cryptographic Ledger Security:</strong> Rather than logging raw document streams in cleartext profiles, the engineering architecture executes local SHA-256 verification hashes. This ensures final compliance packages contain clear evidence chains for independent auditors while maintaining complete network isolation of internal information.
        </p>
        <p>
          <strong>GDPR &amp; Ingestion Sovereignty:</strong> Data processing pipelines comply fully with regional GDPR mandates. No intermediate user tracking parameters or third-party behavioral monitoring layers are embedded inside the platform components. All reports are generated native-mapped to official efrg:vsm_e taxonomy tags for secure distribution to stakeholders, corporate procurement buyers, and lending institutions.
        </p>
      </div>
    </div>
  </section>
);
