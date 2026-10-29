import React, { useState } from "react";

// Illustrative sample data only. These are not real companies or real measurements.
const SAMPLE_PARTNERS = [
  { company: "Sample Supplier A Ltd", type: "Tier 1 supplier", scope1: "42.8 tCO2e", scope2: "112.4 tCO2e", status: "SAMPLE: REVIEWED", auditHash: "illustrative value, not a real hash" },
  { company: "Sample Supplier B Ltd", type: "Tier 1 supplier", scope1: "894.1 tCO2e", scope2: "244.9 tCO2e", status: "SAMPLE: REVIEWED", auditHash: "illustrative value, not a real hash" },
  { company: "Sample Supplier C Ltd", type: "Tier 2 subcontractor", scope1: "12.5 tCO2e", scope2: "38.2 tCO2e", status: "SAMPLE: FLAGGED", auditHash: "Illustrative: meter data pending" },
  { company: "Sample Supplier D Ltd", type: "Tier 1 supplier", scope1: "312.0 tCO2e", scope2: "105.1 tCO2e", status: "SAMPLE: REVIEWED", auditHash: "illustrative value, not a real hash" }
];

export const EnterprisePortal = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const currentPartner = SAMPLE_PARTNERS[selectedIndex] || SAMPLE_PARTNERS[0];

  const handleOpenPreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setSelectedIndex(0);
  };

  return (
    <div className="relative">
      <div id="scope-evidence" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />
      <div id="authentication-portal" className="absolute -top-[140px] left-0 pointer-events-none invisible" aria-hidden="true" />

      <section className="py-16 bg-[#0F172A] text-white border-t border-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="bg-orange-500/10 text-[#EA580C] text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-500/20">
              ENTERPRISE &amp; PUBLIC SECTOR PREVIEW
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
              Value Chain Evidence Portal
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Illustrative preview of a planned portal. The portal is in development. All companies and figures shown are sample data only.
            </p>
          </div>

          {!showPreview ? (
            <div className="max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
              <h3 className="text-lg font-black tracking-tight text-slate-100">Preview the portal</h3>
              <p className="text-xs text-slate-400">
                View a sample of how supplier emissions evidence could be presented. No login is required and no real data is shown.
              </p>
              <button
                type="button"
                onClick={handleOpenPreview}
                className="w-full bg-white border px-4 py-3 rounded-xl text-xs font-bold text-slate-800"
              >
                View sample data
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* LEFT PANEL */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 font-mono uppercase">Sample supplier list</span>
                  <button type="button" onClick={handleClosePreview} className="text-[10px] text-slate-400 font-mono underline">Close preview</button>
                </div>
                <div className="divide-y divide-slate-900 font-mono text-xs">
                  {SAMPLE_PARTNERS.map((partner, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={selectedIndex === idx ? "p-4 cursor-pointer bg-slate-900 border-l-4 border-[#EA580C] pl-3 flex justify-between items-center" : "p-4 cursor-pointer hover:bg-slate-900/40 flex justify-between items-center"}
                    >
                      <div>
                        <div className="font-bold text-slate-200">{partner.company}</div>
                        <div className="text-[10px] text-slate-500">{partner.type}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{partner.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl font-mono text-xs space-y-4">
                <h3 className="text-sm font-black text-slate-200 truncate">{currentPartner.company}</h3>
                <div className="grid grid-cols-2 gap-2 text-center text-slate-200">
                  <div className="bg-slate-950 p-2 rounded">
                    <div className="text-[9px] text-slate-500">SCOPE 1</div>
                    <div className="text-xs font-bold">{currentPartner.scope1}</div>
                  </div>
                  <div className="bg-slate-950 p-2 rounded">
                    <div className="text-[9px] text-slate-500">SCOPE 2</div>
                    <div className="text-xs font-bold">{currentPartner.scope2}</div>
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded text-[11px] break-all">
                  <span className="text-slate-400 block font-bold mb-1">INTEGRITY HASH (ILLUSTRATIVE)</span>
                  {currentPartner.auditHash}
                </div>
                <p className="text-[10px] text-slate-500">Sample data. Not real companies or measurements.</p>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};
