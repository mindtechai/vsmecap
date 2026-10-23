export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24"
  >
    <div className="mx-auto max-w-[820px] px-4 text-center sm:px-6">
      
      {/* Brand Icon Layout */}
      <div className="flex justify-center">
        <img 
          className="h-20 w-20 object-contain drop-shadow-[0_0_15px_rgba(13,148,136,0.15)] animate-fade-in" 
          src="/vsmecap_favicon_transparent_512.png" 
          alt="VSMECAP Strategic Brand Emblem" 
        />
      </div>

      <h1
        data-testid="hero-title"
        className="mt-8 text-[clamp(26px,5vw,44px)] font-bold leading-tight tracking-tight text-[#26292e]"
      >
        VERIFYING SME CHAIN CAPITAL
        <span className="mt-3 block text-[clamp(14px,2.2vw,17px)] font-semibold tracking-wide text-[#0D9488] uppercase">
          ALIGNED WITH EFRAG's LATEST OCTOBER 2026 OUTREACH SPECIFICATIONS
        </span>
      </h1>
      
      <p className="mx-auto mt-6 max-w-[660px] text-[15.5px] leading-relaxed text-[#4b5058]">
        Built directly upon the transition framework from the original VSME recommendation to the finalized <strong>Voluntary Standard (VS)</strong>. Engineered to support the incoming <strong>November 2026 EFRAG Schema &amp; Migration Engine</strong> for non-listed enterprises under 250 employees.
      </p>
      
      {/* Real-Time Interactive Live Stats Alert Banner */}
      <div className="mx-auto mt-6 max-w-[640px] flex items-center justify-center gap-2 bg-[#f0fdfa] border border-[#ccfbf1] rounded-full py-1.5 px-4">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
        </span>
        <p className="text-[12px] font-medium text-[#115e59]">
          Tracking framework requirements from EFRAG's Brussels Summit (1,500+ Registered Enterprise Stakeholders)
        </p>
      </div>
      
      <div
        data-testid="hero-terminal"
        className="mx-auto mt-8 max-w-[640px] rounded-lg bg-[#0F172A] p-5 text-left shadow-sm"
      >
        <div className="mb-3 flex justify-between items-center">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00C08B]" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">COMPLIANCE HUB v1.3.1</span>
        </div>
        <pre className="overflow-x-auto font-mono text-[12.5px] leading-relaxed text-[#00C08B]">
{`$ vsmecap fetch --efrag-source "brussels-outreach"
  mapping official transition updates .... [OK]
$ vsmecap target --standard "Voluntary Standard (VS)"
  updating data structures to Nov 2026 spec [OK]
$ vsmecap validate --format inline-xbrl --csv
  generating audit-ready ledger exports ... [OK]`}
        </pre>
      </div>
    </div>
  </section>
);
