import React, { useState, useEffect } from "react";

export const IngestionMatrix = () => {
  const [logs, setRisks] = useState([
    { id: 1, type: "Utility Feeds", source: "MPAN_448293_ELEC", status: "VERIFIED", hash: "sha256:9f2c...a41e" },
    { id: 2, type: "Fleet Logistics", source: "FUEL_LOG_Q3.csv", status: "PARSING", hash: "sha256:4d1a...7e8b" },
    { id: 3, type: "Payroll Indicators", source: "FTE_COUNT_2026", status: "QUEUED", hash: "Pending Ingestion" }
  ]);

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

  return (
    <section id="telemetry" className="py-16 bg-slate-50 border-t border-[#e4e7ea]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[11px] font-bold tracking-[0.12em] text-[#00996f] uppercase">LIVE PIPELINE TELEMETRY</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">Enterprise Control Layer Status</h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Real-time tracking of unstructured evidence streams as they convert into machine-readable efrg:vsm_e schemas.
          </p>
        </div>

        <div className="rounded-xl border border-[#e4e7ea] bg-[#0F172A] p-6 shadow-xl text-slate-200 font-mono text-[13px] max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
            <div>Data Pipeline Stream</div>
            <div className="flex gap-x-12">
              <span className="w-24 text-center">Status</span>
              <span className="w-36 text-right">Cryptographic Hash</span>
            </div>
          </div>

          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-900 last:border-0 gap-y-1">
                <div className="flex items-center gap-x-3">
                  <span className="h-2 w-2 rounded-full bg-[#00C08B] animate-pulse" />
                  <span className="text-slate-400">[{log.type}]</span>
                  <span className="text-slate-100 font-bold">{log.source}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-x-12">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold text-center w-24 ${
                    log.status === "VERIFIED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    log.status === "PARSING" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse" :
                    "bg-slate-800 text-slate-400"
                  }`}>
                    {log.status}
                  </span>
                  <span className="text-slate-400 text-right w-36 text-[12px]">{log.hash}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
