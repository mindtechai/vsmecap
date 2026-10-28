import React, { useState } from "react";

const SYSTEM_PARTNERS = [
  { company: "Infrastructure Supply Ltd", type: "Tier 1 Vendor", scope1: "42.8 tCO2e", scope2: "112.4 tCO2e", status: "VERIFIED", auditHash: "sha256:8f3c...2a1a" },
  { company: "Logistics Frameworks Corp", type: "Tier 1 Vendor", scope1: "894.1 tCO2e", scope2: "244.9 tCO2e", status: "VERIFIED", auditHash: "sha256:4e9b...7d3e" },
  { company: "Precision Engineering Plc", type: "Tier 2 Subcontractor", scope1: "12.5 tCO2e", scope2: "38.2 tCO2e", status: "EXCEPTION_FLAGGED", auditHash: "BLOCK: METERS_PENDING" },
  { company: "Midlands Distribution Ltd", type: "Tier 1 Vendor", scope1: "312.0 tCO2e", scope2: "105.1 tCO2e", status: "VERIFIED", auditHash: "sha256:1c7d...9b4f" }
];

export const EnterprisePortal = () => {
  const [activePartner, setActivePartner] = useState(SYSTEM_PARTNERS[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authProvider, setAuthProvider] = useState("");
  const [sessionUser, setSessionUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProviderAuth = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setAuthProvider(provider);
      setSessionUser({
        email: provider === "Google" ? "procurement.director@enterprise.io" : "auditor.lead@://apple.com",
        role: provider === "Google" ? "Supply Chain Master" : "Third-Party Auditor"
      });
      setIsLoading(false);
    }, 500);
  };

  const handleDisconnect = () => {
    setIsAuthenticated(false);
    setAuthProvider("");
    setSessionUser(null);
    setActivePartner(SYSTEM_PARTNERS[0]);
  };

  return (
    <div className="relative">
      <div id="scope-evidence" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />
      <div id="authentication-portal" className="absolute -top-[140px] left-0 pointer-events-none invisible" aria-hidden="true" />

      <section className="py-16 bg-[#0F172A] text-white border-t border-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          <div className="max-w-3xl mb-12">
            <span className="bg-orange-500/10 text-[#EA580C] text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-500/20">
              ENTERPRISE &amp; PUBLIC SECTOR CONTROL LAYER
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
              Value Chain Evidence &amp; Verification Portal
            </h2>
            <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed font-sans">
              Consolidate your entire subcontractor network into a unified, machine-readable repository. Monitor verified VSME compliance packets and trace raw evidence data streams without manual data chasing.
            </p>
          </div>

          {!isAuthenticated ? (
            <div className="max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-6 my-4">
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-[#EA580C] border border-orange-500/20 text-xl font-bold">
                  🔒
                </div>
                <h3 className="text-lg font-black tracking-tight text-slate-100">Handshake Gateway Authorization</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-xs mx-auto">
                  Sign up or log in via enterprise identity credentials to inspect live machine-readable value chain networks.
                </p>
              </div>

              {isLoading ? (
                <div className="py-6 flex flex-col items-center justify-center gap-3 font-mono text-xs text-slate-400">
                  <div className="h-6 w-6 border-2 border-[#EA580C] border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Cryptographic Handshake Callback...</span>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleProviderAuth("Google")}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all font-sans"
                  >
                    Continue with Google Enterprise
                  </button>

                  <button
                    type="button"
                    onClick={() => handleProviderAuth("Apple")}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all font-sans"
                  >
                    Continue with Sign in with Apple
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                    Monitored Supplier Network Nodes
                  </span>
                  <button 
                    onClick={handleDisconnect} 
                    className="text-[10px] text-slate-400 hover:text-red-400 transition-colors font-mono underline"
                  >
                    Disconnect Session ({sessionUser?.role})
                  </button>
                </div>
                
                <div className="divide-y divide-slate-900 font-mono text-xs">
                  {SYSTEM_PARTNERS.map((partner, index) => {
                    const isSelected = activePartner.company === partner.company;
                    return (
                      <div
                        key={index}
                        onClick={() => setActivePartner(partner)}
                        className={`p-4 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                          isSelected ? "bg-slate-900 border-l-4 border-[#EA580C] pl-3" : "hover:bg-slate-900/40"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-200 text-[13px]">{partner.company}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{partner.type}</div>
                        </div>
                        
                        <div className="flex items-center gap-4 justify-between sm:justify-end">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide w-28 text-center uppercase ${
                            partner.status === "VERIFIED" 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          }`}>
                            {partner.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl font-mono text-xs">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Audit Trail Deep-Dive
                  </span>
                  <h3 className="text-sm font-black text-slate-200 mt-1 truncate">
                    {activePartner.company}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                      Verified Operational Scope Data
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-center text-slate-200">
                      <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-bold">SCOPE 1 (DIRECT)</div>
                        <div className="text-[13px] font-black mt-0.5 text-slate-100">{activePartner.scope1}</div>
                      </div>
                      <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-bold">SCOPE 2 (INDIRECT)</div>
                        <div className="text-[13px] font-black mt-0.5 text-slate-100">{activePartner.scope2}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                      Cryptographic Footprint
                    </span>
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-slate-400 text-[11px] break-all">
                      {activePartner.status === "EXCEPTION_FLAGGED" ? (
                        <span className="text-rose-400 font-bold">⚠️ OVERRIDE: DATA SUSPENDED</span>
                      ) : (
                        <>
