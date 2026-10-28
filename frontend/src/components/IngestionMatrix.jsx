import React, { useState, useEffect } from "react";

export const IngestionMatrix = () => {
  const [logs, setRisks] = useState([
    { id: 1, type: "Utility Feeds", source: "MPAN_448293_ELEC", status: "VERIFIED", hash: "sha256:9f2c...a41e", anomalyInfo: null },
    { id: 2, type: "Fleet Logistics", source: "FUEL_LOG_Q3.csv", status: "PARSING", hash: "sha256:4d1a...7e8b", anomalyInfo: null },
    { id: 3, type: "Payroll Indicators", source: "FTE_COUNT_2026", status: "QUEUED", hash: "Pending Ingestion", anomalyInfo: null },
    { id: 4, type: "Utility Feeds", source: "MPRN_773912_GAS", status: "CRITICAL_GAP", hash: "BLOCK: MISSING_MONTH", anomalyInfo: "Telemetry tracking reports an unmetered consumption gap for Feb 2026. Taxon calculation engine locked to prevent regulatory fine risk." },
    { id: 5, type: "Utility Feeds", source: "MPAN_884210_ELEC", status: "SPIKE_WARN", hash: "sha256:e3r9...2b8c", anomalyInfo: "Variance Alert: Volume spikes +250% over standard historical baseline. Needs automated substantive invoice verification tracking." }
  ]);

  const [selectedLog, setSelectedLog] = useState(null);

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

  useEffect(() => {
    if (!selectedLog) return;
    const active = logs.find(l => l.id === selectedLog.id);
    if (active && active.status !== selectedLog.status) {
      setSelectedLog(active);
    }
  }, [logs, selectedLog]);

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

  const renderInspectorContent = () => {
    if (!selectedLog) {
      return (
        <div className="h-full flex flex-col items-center justify-center text-center p-4 my-auto">
          <p className="text-[12px] font-semibold text-slate-400 font-sans">
            Select any running ingestion stream node to cross-examine cryptographic evidence trails instantly.
          </p>
        </div>
      );
    }

    return (
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
    );
  };

  return (
    /* ⚡ Outer structural wrapper container set to relative position bounds */
    <div className="relative">
      
      {/* ⚡ UNBREAKABLE INVISIBLE TARGET BUFFER LANDING OFFSET LAYER */}
      <div id="ingestion-matrix" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />

      {/* Main section contents */}
      <section className="py-16 bg-slate-50 border-t border-[#e4e7ea]">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Live Ingestion Streams */}
            <div className="lg:col-span-8 rounded-xl border border-[#e4e7ea] bg-[#0F172A] p-6 shadow-xl text-slate-200 font-mono text-[13px]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                <div>Data Pipeline Stream</div>
                <div className="flex gap-x-12">
                  <span className="w-24 text-center">Status</span>
                  <span className="w-36 text-right">Cryptographic Hash</span>
                </div>
              </div>

              <div className="space-y-3">
                {logs.map((log) => {
                  const isSelected = selectedLog?.id === log.id;
                  let statusClasses = "bg-slate-800 text-slate-400 border border-slate-700/50";
                  
                  if (log.status === "VERIFIED") statusClasses = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                  else if (log.status === "PARSING") statusClasses = "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse";
                  else if (log.status === "SPIKE_WARN") statusClasses = "bg-amber-500/20 text-amber-400 border border-amber-500/40";
                  else if (log.status === "CRITICAL_GAP") statusClasses = "bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse";

                  return (
                    <div 
                      key={log.id} 
                      onClick={() => setSelectedLog(log)}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between py-2.5 px-2 border-b border-slate-900/60 last:border-0 gap-y-1 cursor-pointer transition-all rounded-md ${
                        isSelected ? "bg-slate-800/80 shadow-inner" : "hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          log.status === "CRITICAL_GAP" ? "bg-rose-500" : log.status === "SPIKE_WARN" ? "bg-amber-400" : "bg-emerald-400"
                        }`} />
                        <span className="text-slate-400 font-sans text-xs w-28 shrink-0">{log.type}</span>
                        <span className="text-slate-100 font-bold truncate max-w-[160px] sm:max-w-[200px]">{log.source}</span>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-x-12 mt-1 sm:mt-0">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-wide w-24 text-center ${statusClasses}`}>
                          {log.status}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 text-right w-36 truncate">
                          {log.hash}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Interactive Stream Inspector panel */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm min-h-[280px] flex flex-col justify-between">
              {renderInspectorContent()}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
