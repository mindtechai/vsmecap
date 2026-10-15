import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter, system-ui, Arial", background:"#fff", color:"#111", lineHeight:1.5}}>
      <div style={{maxWidth:"1000px", margin:"0 auto", padding:"24px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontWeight:900, fontSize:"22px"}}>vsmecap</div>
          <div style={{fontSize:"11px", border:"1px solid #16a34a", color:"#16a34a", padding:"6px 10px", borderRadius:"20px", fontWeight:700}}>EU 2026/1560 COMPLIANT • VALUE CHAIN CAP</div>
        </div>

        <div style={{marginTop:"70px"}}>
          <h1 style={{fontSize:"48px", lineHeight:0.95, fontWeight:900, letterSpacing:"-1.5px", maxWidth:"700px"}}>
            VSME B1–B11 is your own data only. No subcontractor chase.
          </h1>
          <p style={{marginTop:"18px", fontSize:"17px", color:"#444", maxWidth:"620px"}}>
            If you have fewer than 1,000 employees you are a <b>protected undertaking</b> under EU Directive (EU) 2026/470 + Regulation (EU) 2026/1560. Large corporates cannot legally demand more than VSME from you.
          </p>
        </div>

        <div style={{marginTop:"32px", background:"#fef2f2", border:"1px solid #fecaca", borderRadius:"12px", padding:"16px"}}>
          <b style={{color:"#991b1b"}}>The nightmare scenario the cap was designed to prevent:</b>
          <div style={{fontSize:"14px", color:"#7f1d1d", marginTop:"6px"}}>
            A large client sending a 200-question custom Excel and forcing you to collect B1–B11 from hundreds of your own subcontractors. This is explicitly prohibited. B1–B11 has no Scope 3.
          </div>
        </div>

        <div style={{marginTop:"40px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"14px"}}>
          <div style={{border:"1px solid #eee", borderRadius:"14px", padding:"18px"}}>
            <div style={{fontSize:"11px", fontWeight:800, color:"#888"}}>1. B1–B11 SCOPE</div>
            <h3 style={{marginTop:"6px"}}>Scope 1 + 2 only. Scope 3 excluded.</h3>
            <p style={{fontSize:"13px", color:"#555"}}>Basic Module focuses only on your direct emissions and purchased electricity/heating. You report from your own energy bills and HR records. No supply chain data collection needed.</p>
          </div>
          <div style={{border:"2px solid #111", borderRadius:"14px", padding:"18px"}}>
            <div style={{fontSize:"11px", fontWeight:800}}>2. YOUR RIGHT TO SAY NO</div>
            <h3 style={{marginTop:"6px"}}>Legal right to refuse.</h3>
            <p style={{fontSize:"13px", color:"#555"}}>Under the Value Chain Cap (EU) 2026/1560, a CSRD company cannot demand ESG data beyond VSME from you. If they send a massive custom spreadsheet, you can legally refuse and hand them your standard VSME Basic report.</p>
          </div>
          <div style={{border:"1px solid #eee", borderRadius:"14px", padding:"18px"}}>
            <div style={{fontSize:"11px", fontWeight:800, color:"#888"}}>3. C1–C9 SAFE HARBOR</div>
            <h3 style={{marginTop:"6px"}}>3-year transition.</h3>
            <p style={{fontSize:"13px", color:"#555"}}>Even if you voluntarily do Comprehensive Module (C1–C9) which does look at value chains, EU allows you to explain efforts to get data if it is too difficult, rather than collect thousands of spreadsheets.</p>
          </div>
        </div>

        <div style={{marginTop:"50px"}}>
          <h2 style={{fontSize:"26px", fontWeight:800}}>How vsmecap works — cap-compliant</h2>
          <div style={{marginTop:"14px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"12px", fontSize:"14px"}}>
            <div><b>1. Connect internal data</b><br/><span style={{color:"#666"}}>Import energy bills, HR records. No subcontractor outreach.</span></div>
            <div><b>2. Generate B1–B11</b><br/><span style={{color:"#666"}}>Your own VSME Basic + L1 hash anchor.</span></div>
            <div><b>3. Generate refusal pack</b><br/><span style={{color:"#666"}}>Auto-letter citing 2026/1560 + 2026/470 to refuse excessive requests.</span></div>
          </div>
        </div>

        <div style={{marginTop:"40px", borderTop:"1px solid #eee", paddingTop:"20px", display:"flex", gap:"12px"}}>
          <a href="mailto:hello@vsmecap.com" style={{background:"#111", color:"#fff", padding:"12px 18px", borderRadius:"10px", textDecoration:"none", fontWeight:700}}>Request Protected Undertaking Demo</a>
          <div style={{fontSize:"12px", color:"#888", paddingTop:"8px"}}>For undertakings &lt;1000 employees • No company names used</div>
        </div>

        <div style={{marginTop:"40px", fontSize:"11px", color:"#999"}}>
          vsmecap.com is a reporting tool. Not legal advice. Based on EFRAG VSME Standard, Commission Delegated Regulation (EU) 2026/1560, Directive (EU) 2026/470 (Omnibus). Basic Module B1–B11 = own operations, Scope 3 excluded.
        </div>
      </div>
    </div>
  );
}
