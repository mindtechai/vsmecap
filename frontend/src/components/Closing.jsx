import React, { useState, useEffect } from "react";

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
        <p>© 2026 VSMECAP. All rights reserved. Registered framework mappings.</p>
      </div>
    </div>
  </footer>
);

export const Privacy = () => {
  const [showBanner, setShowBanner] = useState(false);

  // 🍪 Checks local storage memory on boot to only show banner to new users
  useEffect(() => {
    const consent = localStorage.getItem("vsmecap_cookie_consent");
    if (!consent) {
      // Small timeout delay so it slides onto the screen gracefully after load
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem("vsmecap_cookie_consent", type);
    setShowBanner(false);
  };

  return (
    <>
      {/* 📊 COMPREHENSIVE PRIVACY POLICY PARAGRAPHS */}
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

      {/* 🍪 INTERACTIVE AUTOMATED SLIDING COOKIE BANNER (GDPR COMPLIANT) */}
      <div 
        className={`fixed bottom-5 left-4 right-4 md:left-auto md:right-5 md:max-w-md bg-white border border-slate-200 p-5 rounded-2xl shadow-2xl transition-all duration-500 transform z-50 ${
          showBanner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl pt-0.5" role="img" aria-label="cookie">🍪</span>
            <div className="space-y-1">
              <h4 className="text-[14px] font-bold text-slate-900">Your Privacy Options</h4>
              <p className="text-[12.5px] leading-relaxed text-slate-500 font-medium">
                We use strictly necessary functional sessions to protect data entry. With your permission, we also compile minimal anonymous diagnostic logs to optimize platform performance. Read our full <a href="#privacy" className="text-[#0D9488] font-bold hover:underline">Privacy Infrastructure Disclosure</a>.
              </p>
            </div>
          </div>

          {/* DUAL CHOICE ACTION CLICK BOUNDARIES */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              onClick={() => handleAccept("essential")}
              className="text-[12px] font-bold text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl transition-all"
            >
              Essential Only
            </button>
            <button
              onClick={() => handleAccept("all")}
              className="text-[12px] font-bold text-white bg-[#0F172A] hover:bg-slate-800 px-4 py-2 rounded-xl transition-all shadow-md shadow-slate-900/5"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
