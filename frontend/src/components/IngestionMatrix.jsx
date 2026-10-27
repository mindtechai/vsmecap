import React, { useState, useEffect } from "react";

export const IngestionMatrix = () => {
  // Enhanced to track live telemetry state with built-in auditor exception flags
  const [logs, setRisks] = useState([
    { id: 1, type: "Utility Feeds", source: "MPAN_448293_ELEC", status: "VERIFIED", hash: "sha256:9f2c...a41e", anomalyInfo: null },
    { id: 2, type: "Fleet Logistics", source: "FUEL_LOG_Q3.csv", status: "PARSING", hash: "sha256:4d1a...7e8b", anomalyInfo: null },
    { id: 3, type: "Payroll Indicators", source: "FTE_COUNT_2026", status: "QUEUED", hash: "Pending Ingestion", anomalyInfo: null },
    { id: 4, type: "Utility Feeds", source: "MPRN_773912_GAS", status: "CRITICAL_GAP", hash: "BLOCK: MISSING_MONTH", anomalyInfo: "Telemetry tracking reports an unmetered consumption gap for Feb 2026. Taxon calculation engine locked to prevent regulatory fine risk." },
    { id: 5, type: "Utility Feeds", source: "MPAN_884210_ELEC", status: "SPIKE_WARN", hash: "sha256:e3r9...2b8c", anomalyInfo: "Variance Alert: Volume spikes +250% over standard historical baseline. Needs automated substantive invoice verification tracking." }
  ]);

  const [selectedLog, setSelectedLog] = useState(null);

  // Maintain your exact live ingestion state progression loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRisks(currentLogs =>
        currentLogs.map(log => {
          if (log.id === 2) return { ...log, status: "VERIFIED", hash: "sha256:1a8f...bc3d" };
          if (log.id === 3) return { ...log, status: "PARSING", hash: "sha256:7c2e...f9a1" };
          return log;
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Update selected log view context dynamically when state transforms
  useEffect(() => {
    if (selectedLog) {
      const active = logs.find(l => l.id === selectedLog.id);
      if (active && active.status !== selectedLog.status) {
        setSelectedLog(active);
      }
    }
  }, [logs, selectedLog]);

  // Auditor action simulation bypass to show Layer 4 human review capabilities
  const handleCertifyLog = (id) => {
    setRisks(currentLogs =>
      currentLogs.map(log => {
        if (log.id === id) {
          return { ...log, status: "VERIFIED", anomalyInfo: null, hash: "sha256:5d9f...override" };
        }
        return log;
      })
    );
  };

  return (
    /* ⚡ scroll-mt-[130px] directly fixes the anchor section docking collision error */
    <section id="ingestion-matrix" className="py-16 bg-slate-50 border-t border-[#e4e7ea] scroll-mt-[130px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[11px] font-black tracking-[0.12em] text-[#EA580C] uppercase">
            Layers 2 &amp; 3 Verification Architecture
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">
            Enterprise Control Layer Status
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Real-time tracking of unstructured evidence streams as they convert into machine-readable efrg:vsm_e schemas. Click any active pipeline node to inspect the auditor audit trail.
          </p>
        </div>

        {/* Dynamic Dual-Column Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Live Stream Panel (8 Columns) */}
          <div className="lg:col-span-8 rounded-xl border border-[#e4e7ea] bg-[#0F172A] p-6 shadow-xl text-slate-200 font-mono text-[13px]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              <div>Data Pipeline Stream</div>
              <div className="flex gap-x-12">
                <span className="w-24 text-center">Status</span>
                <span className="w-36 text-right">Cryptographic Hash</span>
              </div>
            </div>

            <div className="space-y-3">
              {logs.map((log) => (
                <div 
                  key={log.id} 
                  onClick={() => setSelectedLog(log)}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between py-2.5 px-2 border-b border-slate-900/60 last:border-0 gap-y-1 cursor-pointer transition-all rounded-md ${
                    selectedLog?.id === log.id ? "bg-slate-800/60 border-l-2 border-[#EA580C]" : "hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-x-3 overflow-hidden">
                    <span className={`h-2 w-2 rounded-full shrink-0 ${
                      log.status === "CRITICAL_GAP" ? "bg-rose-500" :
                      log.status === "SPIKE_WARN" ? "bg-amber-400" :
                      "bg-[#00C08B] animate-pulse"
                    }`} />
                    <span className="text-slate-400 shrink-0">[{log.type}]</span>
                    <span className="text-slate-100 font-bold truncate">{log.source}</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-x-12">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold text-center w-24 tracking-wide shrink-0 ${
                      log.status === "VERIFIED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      log.status === "PARSING" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse" :
                      log.status === "SPIKE_WARN" ? "bg-amber-500/20 text-amber-400 border border-amber-500/40" :
                      log.status === "CRITICAL_GAP" ? "bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse" :
                      "bg-slate-800 text-slate-400 border border-slate-700/50"
                    }`}>
                      {log.status.replace("_", " ")}
                    </span>
                    <span className="text-slate-400 text-right w-36 text-[12px] font-mono truncate">{log.hash}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Auditor Validation Inspector Panel (4 Columns) */}
          <div className="lg:col-span-4 bg-white border border-[#e4e7ea] rounded-xl p-5 shadow-lg min-h-[340px] flex flex-col justify-between">
            {selectedLog ? (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                    Auditor Verification Node
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mt-1 font-mono break-all">
                    {selectedLog.source}
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-[12px]">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Telemetry Class</span>
                    <span className="font-semibold text-slate-700">{selectedLog.type}</span>
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Integrity Signature</span>
                    <span className="text-[11px] font-bold break-all block bg-slate-50 border border-slate-100 p-2 rounded mt-0.5 text-slate-600">
                      {selectedLog.hash}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Assurance Log Status</span>
                    {selectedLog.anomalyInfo ? (
                      <div className="mt-1.5 p-3 rounded-lg bg-rose-50 border border-rose-100 text-rose-800 text-[11px] leading-relaxed font-sans">
                        <strong className="block font-bold uppercase text-[10px] tracking-wide mb-1">❌ Rule Exception Triggered:</strong>
                        {selectedLog.anomalyInfo}
                        <button
                          onClick={() => handleCertifyLog(selectedLog.id)}
                          className="mt-3 w-full bg-[#EA580C] hover:bg-orange-600 text-white font-bold tracking-wider py-1.5 px-2 rounded font-sans text-[11px] uppercase transition-all shadow-sm"
                        >
                          Override &amp; Certify
                        </button>
                      </div>
                    ) : (
                      <div className="mt-1.5 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] leading-relaxed font-sans">
                        ✓ Ingestion record matches all historical variance tolerances. Source metadata matches grid settlement signatures perfectly. Zero manual adjustments detected.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 my-auto">
                <svg className="h-8 w-8 text-slate-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <p className="text-[12px] font-semibold text-slate-400 leading-normal font-sans">
                  Select any running ingestion stream node to cross-examine cryptographic evidence trails instantly.
                </p>
              </div>
            )}

