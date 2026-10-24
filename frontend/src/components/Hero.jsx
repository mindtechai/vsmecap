export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24"
  >
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        
        {/* LEFT COLUMN: HIGH-CONVERTING VALUE PROP & DUAL ACTION BUTTONS */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-500 uppercase shadow-sm">
              ⚡ AUDIT-READY • VOLUNTARY STANDARD (VSME) INFRASTRUCTURE
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="text-[clamp(32px,4.5vw,48px)] font-black tracking-tight text-[#0F172A] leading-[1.15]"
          >
            Understand What Matters.
            <span className="block text-[#0D9488] mt-2">Report With Confidence.</span>
          </h1>
          
          <p className="text-[15.5px] leading-relaxed text-slate-500 font-medium max-w-[540px]">
            The cryptographic verification spine for non-listed enterprises under 250 employees. Automate raw data ingestion, build immutable SHA-256 evidence chains, and export compliant digital disclosures.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#uk-companies" 
              className="rounded-xl bg-[#0F172A] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
            >
              Start VS (VSME) for free →
            </a>
            <a 
              href="mailto:info@://vsmecap.com" 
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
              Aligned with EFRAG's finalized November 2026 Schema &amp; Migration Engine
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: REFINED HIGH-FIDELITY LIVE TRACE CONSOLE */}
        <div className="lg:col-span-6">
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
