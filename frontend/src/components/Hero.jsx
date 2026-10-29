import React from "react";
import { CONTACT_MAILTO } from "@/data/content";

export const Hero = () => (
  <section
    data-testid="hero"
    className="border-b border-[#e4e7ea] bg-white py-16 sm:py-24"
  >
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">

        {/* LEFT COLUMN: HEADLINES */}
        <div className="lg:col-span-6 space-y-6 pt-2">
          <div className="flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 uppercase shadow-sm">
              Based on the EFRAG VSME voluntary standard
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="text-[clamp(28px,4vw,42px)] font-black tracking-tight text-[#0F172A] leading-[1.2] font-sans antialiased"
          >
            Structured VSME reporting for UK SMEs
            <span className="block text-[#EA580C] text-[clamp(16px,2.2vw,22px)] font-black tracking-wide uppercase mt-4">
              From utility bills to a report you can share.
            </span>
          </h1>

          <p className="text-[15px] leading-relaxed text-slate-600 font-semibold max-w-[540px]">
            VSMECAP helps businesses turn utility data into a structured sustainability report based on the EFRAG VSME standard: the Basic module (B1-B11) and the optional Comprehensive module (C1-C9). Reports are structured for review and are not audited.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#authentication-portal"
              className="rounded-xl bg-gradient-to-r from-[#EA580C] to-orange-600 px-6 py-3.5 text-[14px] font-bold text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-950/10 transition-all active:scale-95"
            >
              See the portal preview →
            </a>
            <a
              href={CONTACT_MAILTO}
              className="rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-[14px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all"
            >
              Request a demo
            </a>
          </div>

          <div className="flex items-start gap-2 bg-[#f0fdfa] border border-[#ccfbf1] rounded-xl py-2.5 px-4 max-w-[500px] shadow-sm">
            <span className="flex h-2 w-2 relative mt-1.5 flex-shrink-0">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
            </span>
            <p className="text-[11.5px] font-bold text-[#115e59]">
              Free tier available for eligible businesses with up to 1,000 employees. VSME is voluntary and is not UK law.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: LOGO AND ILLUSTRATIVE WORKFLOW */}
        <div className="lg:col-span-6 flex flex-col gap-6">

          <div className="w-full max-w-[320px] px-1 transform -translate-y-1">
            <img
              className="w-full h-auto object-contain select-none"
              src="/vsmecap_logo_transparent_800.png"
              alt="VSMECAP logo"
            />
          </div>

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
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Illustrative workflow
              </span>
            </div>
            <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-[#00C08B]">
{`1. Upload 12 months of bills
   electricity, gas, water ............ done
2. Extract readings
   kWh, m3, MPAN / MPRN ............... done
3. Review and correct values
   check against original bills ...... you
4. Draft B3 energy and GHG
   Scope 1 and 2 totals ............... draft
5. Export
   JSON, CSV, PDF (draft) ............. available
   Inline XBRL ........................ in development`}
            </pre>
            <p className="mt-3 text-[10px] font-mono text-slate-400">
              Illustration only. Outputs are drafts, structured for review and not audited.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);
