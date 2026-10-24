export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-20 sm:py-28"
  >
    <div className="mx-auto max-w-[840px] px-4 text-center sm:px-6">
      
      {/* 🛡️ Premium Competitor Alignment Context Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11.5px] font-bold tracking-widest text-slate-500 uppercase shadow-sm">
          ⚡ EXECUTESG COMPATIBLE • SUSTAINABILITY &amp; VS (VSME) PLATFORM
        </span>
      </div>

      {/* 🚀 Elite Enterprise Headline Grid */}
      <h1
        data-testid="hero-title"
        className="mt-4 text-[clamp(32px,5.5vw,52px)] font-bold tracking-tight text-[#0F172A] leading-[1.15]"
      >
        Understand What Matters.
        <span className="block text-[#0D9488] mt-2">Report With Confidence.</span>
      </h1>
      
      {/* Premium Paragraph Subtext Hierarchy */}
      <p className="mx-auto mt-6 max-w-[680px] text-[16px] md:text-[17px] leading-relaxed text-slate-500 font-medium">
        The ultimate automated reporting spine for the official EFRAG standard framework. Engineered to support the incoming <strong>November 2026 EFRAG Schema &amp; Migration Engine</strong> for non-listed enterprises under 250 employees.
      </p>

      {/* 🎯 HIGH-CONVERTING DUAL ACTION BUTTONS (Competitor Strategy) */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        <a 
          href="#uk-companies" 
          className="rounded-xl bg-[#0F172A] px-7 py-3.5 text-[14.5px] font-bold text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
        >
          Start VS (VSME) for free →
        </a>
        <a 
          href="mailto:info@://vsmecap.com" 
          className="rounded-xl bg-white border border-slate-200 px-7 py-3.5 text-[14.5px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all hover:-translate-y-0.5"
        >
          Book Meeting
        </a>
      </div>

      {/* Real-Time Live Traffic Alert Validation Node */}
      <div className="mx-auto mt-10 max-w-[640px] flex items-center justify-center gap-2 bg-[#f0fdfa] border border-[#ccfbf1] rounded-2xl py-2 px-4 shadow-sm">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
        </span>
        <p className="text-[12px] font-semibold text-[#115e59]">
          Tracking framework requirements from EFRAG's Brussels Summit (1,500+ Registered Enterprise Stakeholders)
        </p>
      </div>
      
      {/* Automated Verification Console Block */}
      <div
        data-testid="hero-terminal"
        className="mx-auto mt-8 max-w-[640px] rounded-xl bg-[#0F172A] p-5 text-left shadow-xl"
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
