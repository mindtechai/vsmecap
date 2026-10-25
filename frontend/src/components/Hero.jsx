import { CONTACT_MAILTO } from "../data/content";

export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24"
  >
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* LEFT COLUMN: FIXED PREMIUM ENTERPRISE SAAS TYPOGRAPHY */}
        <div className="lg:col-span-6 space-y-6 pt-2">
          <div className="flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-500 uppercase shadow-sm">
              🛡️ EFRAG VOLUNTARY STANDARD VALUE CHAIN CAP COMPLIANT
            </span>
          </div>

          {/* 🚀 POWERFUL MARKETING HEADLINE BLOCK */}
          <h1
            data-testid="hero-title"
            className="text-[clamp(28px,4vw,42px)] font-black tracking-tight text-[#0F172A] leading-[1.2] font-sans antialiased"
          >
            AUDIT-READY OUTPUT • ENTERPRISE CONTROL LAYER • VSME B1-B11 CAP
            <span className="block text-[#EA580C] text-[clamp(16px,2.2vw,22px)] font-black tracking-wide uppercase mt-4">
              THE CAP THAT STOPS SPREADSHEET CHAOS.
            </span>
          </h1>
          
          {/* CRUNCHY EXPLANATORY PRODUCT COPY */}
          <p className="text-[15px] leading-relaxed text-slate-500 font-semibold max-w-[540px]">
            VSMECAP is the Audit-Ready output for the enterprise control layer for VSME. The first-mover cap that standardizes B1-B11 and C1-C9 across UK Companies and Public Sector supply chains. Verifiable, exportable, enterprise-grade.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#uk-companies" 
              className="rounded-xl bg-[#0F172A] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
            >
              Start VS (VSME) for free →
            </a>
            <a 
              href={CONTACT_MAILTO}
              className="rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-[14px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Book Expert Demo
            </a>
          </div>

          <div className="flex items-center gap-2 bg-[#f0fdfa] border border-[#ccfbf1] rounded-xl py-2 px-4 max-w-[500px] shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
            </span>
            <p className="text-[11.5px] font-bold text-[#115e59]">
              Tracking framework requirements from EFRAG's Brussels Summit (1,500+ Registered Enterprise Stakeholders)
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: BRAND GRAPHIC OVERLAYING THE VERIFICATION CONSOLE */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Signature Brand Emblem Alignment (Slid up to link seamlessly with the text block edge) */}
          <div className="w-full max-w-[320px] px-1 transform -translate-y-1">
            <img 
              className="w-full h-auto object-contain select-none" 
              src="/vsmecap_logo_transparent_800.png" 
              alt="VSMECAP Primary Brand Graphic Alignment" 
            />
          </div>

          {/* Automated Verification Console Block */}
          <div
            data-testid="hero-terminal"
            className="w-full rounded-xl bg-[#0F172A] p-6 text-left shadow-2xl border border-slate-800"
          >
            <div className="mb-4 flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                XBRL TRACE LOG • TEMPLATE V1.3
              </span>
            </div>
            <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-[#00C08B]">
{`$ vsmecap ingest --source ledger.csv --format open-banking
  parsing operational data flows ........... [OK]
$ vsmecap verify --chain-hash --taxonomy "2026-v1"
  sha256: 9f2c...a41e -> linked to source .. [OK]
  B3:efrg:vsm_e_B3_disclosure .............. [PASS]
  C2:efrg:vsm_e_C2_disclosure .............. [PASS]
$ vsmecap pack --format inline-xbrl --csv
  generating audit-ready disclosures ....... [OK]
  vsmecap_passport_2026.xhtml compiled ..... [READY]`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  </section>
);
