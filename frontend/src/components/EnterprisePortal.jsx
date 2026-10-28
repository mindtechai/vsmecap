import React, { useState } from "react";

const SYSTEM_PARTNERS = [
  { company: "Infrastructure Supply Ltd", type: "Tier 1 Vendor", scope1: "42.8 tCO2e", scope2: "112.4 tCO2e", status: "VERIFIED", auditHash: "sha256:8f3c...2a1a" },
  { company: "Logistics Frameworks Corp", type: "Tier 1 Vendor", scope1: "894.1 tCO2e", scope2: "244.9 tCO2e", status: "VERIFIED", auditHash: "sha256:4e9b...7d3e" },
  { company: "Precision Engineering Plc", type: "Tier 2 Subcontractor", scope1: "12.5 tCO2e", scope2: "38.2 tCO2e", status: "EXCEPTION_FLAGGED", auditHash: "BLOCK: METERS_PENDING" },
  { company: "Midlands Distribution Ltd", type: "Tier 1 Vendor", scope1: "312.0 tCO2e", scope2: "105.1 tCO2e", status: "VERIFIED", auditHash: "sha256:1c7d...9b4f" }
];

export const EnterprisePortal = () => {
  const [activePartner, setActivePartner] = useState(SYSTEM_PARTNERS[0]);
  
  // Interactive Authentication State Infrastructure
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authProvider, setAuthProvider] = useState("");
  const [sessionUser, setSessionUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProviderAuth = (provider) => {
    setIsLoading(true);
    // Simulate secure enterprise cryptographic callback handshake
    setTimeout(() => {
      setIsAuthenticated(true);
      setAuthProvider(provider);
      setSessionUser({
        email: provider === "Google" ? "procurement.director@enterprise.io" : "auditor.lead@://apple.com",
        role: provider === "Google" ? "Supply Chain Master" : "Third-Party Auditor",
        tokenSignature: "SHA256:EFRAG_9948_JWT_HANDSHAKE"
      });
      setIsLoading(false);
    }, 850);
  };

  const handleDisconnect = () => {
    setIsAuthenticated(false);
    setAuthProvider("");
    setSessionUser(null);
  };

  return (
    /* ⚡ Outer structural wrapper container set to relative position bounds */
    <div className="relative">
      
      {/* ⚡ UNBREAKABLE INVISIBLE TARGET BUFFER LANDING OFFSET LAYERS */}
      <div id="scope-evidence" className="absolute -top-[160px] left-0 pointer-events-none invisible" aria-hidden="true" />
      <div id="authentication-portal" className="absolute -top-[140px] left-0 pointer-events-none invisible" aria-hidden="true" />

      {/* Main section contents */}
      <section className="py-16 bg-[#0F172A] text-white border-t border-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Core Layout Split Head */}
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

          {/* DYNAMIC SECURE ENTRY POINT CONTAINER INTEGRATION */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-6 my-4">
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-[#EA580C] border border-orange-500/20 font-mono text-xl font-bold">
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
                  {/* Google Identity Integration */}
                  <button
                    type="button"
                    onClick={() => handleProviderAuth("Google")}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all font-sans"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google Enterprise
                  </button>

                  {/* Sign In With Apple Identity Integration */}
                  <button
                    type="button"
                    onClick={() => handleProviderAuth("Apple")}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all font-sans"
                  >
                    <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
                    </svg>
                    Continue with Sign in with Apple
                  </button>
                </div>
              )}

              <div className="text-[10px] text-slate-500 font-mono tracking-wide pt-1">
                Security baseline compliant with Directive (EU) 2026/470.
              </div>
            </div>
          ) : (
            /* Dashboard Frame Grid - Activated upon Auth Callback Verification */
            <div className="space-y-6 animate-fadeIn">
              
              {/* Session Profile Status Tracker Ribbon */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-xs gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                    Session Link Verified
                  </span>
                  <span className="text-slate-300 font-bold">{sessionUser?.email}</span>
                  <span className="text-slate-500">| Role: {sessionUser?.role}</span>
                </div>
                <button
                  type="button"
                  onClick={handleDisconnect}
                  className="text-[11px] text-slate-400 hover:text-red-400 font-bold transition-colors underline focus:outline-none"
                >
                  Disconnect Session Handshake
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT PANEL: Supplier Ingestion Ledger Index (7 Columns) */}
                <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-2xl">
                  <div className="bg-slate-900 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                      Monitored Supplier Network Nodes
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">
                      Active Connections: 4
                    </span>
                  </div>
                  
                  <div className="divide-y divide-slate-900 font-mono text-xs">
                    {SYSTEM_PARTNERS.map((partner, index) => {
                      const isSelected = activePartner.company === partner.company;
                      {/* ⚡ LINE 161 CONDITIONAL EXPRESSION FULLY SYNCHRONIZED AND TERMINATED */}
                      return (
                        <div
                          key={index}
                          onClick={() => setActivePartner(partner)}
