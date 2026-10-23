export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24"
  >
    <div className="mx-auto max-w-[820px] px-4 text-center sm:px-6">
      
      {/* 🌟 Unified Brand Icon Layout with drop-shadow framework */}
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
        
        {/* 🎨 Balanced layout visual text hierarchy hierarchy rules */}
        <span className="mt-3 block text-[clamp(14px,2.2vw,18px)] font-medium tracking-wide text-[#767c85] uppercase">
          FIRST-MOVER ENTERPRISE CONTROL LAYER FOR VSME ANNEX I + II
        </span>
      </h1>
      
      <p className="mx-auto mt-6 max-w-[640px] text-[15px] leading-relaxed text-[#4b5058]">
        One reporting spine for the EFRAG voluntary SME standard: Basic B1–B11 and
        Comprehensive C1–C9, evidence-chained from source document to disclosure.
      </p>
      
      <div
        data-testid="hero-terminal"
        className="mx-auto mt-10 max-w-[640px] rounded-lg bg-[#0F172A] p-5 text-left shadow-sm"
      >
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00C08B]" />
        </div>
        <pre className="overflow-x-auto font-mono text-[12.5px] leading-relaxed text-[#00C08B]">
{`$ vsmecap ingest --source MPAN/MPRN --scope "own-walls S1+S2"
  47 records parsed ...................... [OK]
$ vsmecap verify --chain-hash
  sha256: 9f2c...a41e -> linked
  efrg:vsm_eB3_disclosure ................ [OK]
$ vsmecap pack --annex I+II --xbrl
  audit-ready pack: vsmecap_passport_2026  [OK]`}
        </pre>
      </div>
    </div>
  </section>
);
