import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter, system-ui, -apple-system, sans-serif", background:"#ffffff", color:"#111827"}}>
      {/* HEADER */}
      <div style={{maxWidth:"1120px", margin:"0 auto", padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontWeight:900, fontSize:"20px", letterSpacing:"-0.5px"}}>vsmecap.com</div>
        <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
          <span style={{fontSize:"10px", fontWeight:800, border:"1px solid #16a34a", color:"#16a34a", padding:"5px 10px", borderRadius:"999px"}}>EU 2026/1560 • VALUE CHAIN CAP OS</span>
          <span style={{fontSize:"10px", fontWeight:800, background:"#111", color:"#fff", padding:"6px 10px", borderRadius:"999px"}}>FY2027 READY</span>
        </div>
      </div>

      <div style={{maxWidth:"1120px", margin:"0 auto", padding:"0 24px 60px"}}>
        
        {/* HERO */}
        <div style={{marginTop:"48px"}}>
          <h1 style={{fontSize:"56px", lineHeight:"0.92", fontWeight:900, letterSpacing:"-1.8px", margin:0, maxWidth:"720px"}}>
            The cap that stops<br/>spreadsheet chaos.
            <span style={{display:"block", color:"#16a34a", marginTop:"6px"}}>Built for the 1,000-employee cap.</span>
          </h1>
          <p style={{marginTop:"18px", fontSize:"18px", color:"#4b5563", maxWidth:"560px"}}>
            If you have {'<'}1,000 employees you are a <b>protected undertaking</b> under Directive 2026/470. 
            Large CSRD reporters cannot demand more than <b>VSME Basic B1-B11</b> from you. Basic is <b>Scope 1+2 only — your own bills and HR</b>. No subcontractor chase needed.
          </p>
        </div>

        <div style={{marginTop:"24px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"10px"}}>
          <div style={{background:"#f9fafb", borderRadius:"12px", padding:"12px", border:"1px solid #e5e7eb", fontSize:"12px"}}><b>FY2027:</b> Only companies {'>'}1,000 staff + {'>'}€450m turnover must report — first reports in 2028</div>
          <div style={{background:"#fef2f2", borderRadius:"12px", padding:"12px", border:"1px solid #fecaca", fontSize:"12px"}}><b>Cap in force now:</b> CSRD undertaking cannot require value-chain undertaking ≤1,000 staff to provide more than VSME Basic</div>
          <div style={{background:"#f0fdf4", borderRadius:"12px", padding:"12px", border:"1px solid #bbf7d0", fontSize:"12px"}}><b>Direct + indirect allowed:</b> ESRS 1 para 67 — T0 can ask T2 directly, even without contract, but capped to Basic</div>
        </div>

        {/* MODEL */}
        <div style={{marginTop:"32px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px"}}>
          <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"18px", opacity:0.6}}>
            <div style={{fontSize:"11px", fontWeight:800, color:"#9ca3af"}}>OLD ILLEGAL MODEL — BANNED CASCADE</div>
            <div style={{marginTop:"8px", fontSize:"14px", fontWeight:600}}>T0 → T1 → T1 must collect B1-B11 from T2 → forward to T0</div>
            <div style={{marginTop:"6px", fontSize:"12px", color:"#6b7280"}}>T1 does NOT need T2 data for its own Basic. Scope 3 excluded.</div>
          </div>
          <div style={{border:"2px solid #111827", borderRadius:"16px", padding:"18px"}}>
            <div style={{fontSize:"11px", fontWeight:800}}>NEW CAP-COMPLIANT MODEL — vsmecap</div>
            <div style={{marginTop:"8px", fontSize:"14px", fontWeight:700}}>T0 → T1 (capped) and T0 → T2 (capped, indirect allowed)</div>
            <div style={{marginTop:"6px", fontSize:"12px", color:"#374151"}}>T1 → sponsors free vsmecap to T2 (goodwill, not legal demand). T1 own B1-B11 = own bills/HR only.</div>
          </div>
        </div>

        {/* PRICING */}
        <div style={{marginTop:"56px"}}>
          <h2 style={{fontSize:"30px", fontWeight:900, letterSpacing:"-0.8px", margin:0}}>Pricing for protected undertakings {'<'}1,000 staff</h2>
          <div style={{marginTop:"20px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"14px"}}>
            <div style={{border:"2px solid #111827", borderRadius:"16px", padding:"20px"}}>
              <div style={{fontSize:"11px", fontWeight:800}}>T0 CAP COMPLIANCE</div>
              <div style={{fontSize:"32px", fontWeight:900, marginTop:"6px"}}>£30k<span style={{fontSize:"14px", fontWeight:600}}>/yr</span></div>
              <div style={{fontSize:"12px", color:"#6b7280", marginTop:"8px"}}>Large reporter {'>'}1,000 staff. Audit trail that you only asked for VSME Basic.</div>
              <div style={{marginTop:"12px", fontSize:"12px", lineHeight:1.6}}>✓ VSME Basic request builder<br/>✓ Cap compliance certificate<br/>✓ Wdata connector</div>
            </div>
            <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"20px"}}>
              <div style={{fontSize:"11px", fontWeight:800}}>T1 STARTER — {'<'}100 STAFF</div>
              <div style={{fontSize:"32px", fontWeight:900, marginTop:"6px"}}>£4.9k<span style={{fontSize:"14px", fontWeight:600}}>/yr</span></div>
              <div style={{fontSize:"12px", color:"#6b7280", marginTop:"8px"}}>Own B1-B11 + 10 refusal letters citing 2026/1560.</div>
              <div style={{marginTop:"12px", fontSize:"12px", lineHeight:1.6}}>✓ B1-B11 Basic<br/>✓ L1 hash<br/>✓ Refusal generator</div>
            </div>
            <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"20px"}}>
              <div style={{fontSize:"11px", fontWeight:800}}>T1 GROWTH — 100-500 STAFF</div>
              <div style={{fontSize:"32px", fontWeight:900, marginTop:"6px"}}>£14.9k<span style={{fontSize:"14px", fontWeight:600}}>/yr</span></div>
              <div style={{fontSize:"12px", color:"#6b7280", marginTop:"8px"}}>Own B1-B11 + unlimited refusals + 50 sponsored T2s cap-ready.</div>
              <div style={{marginTop:"12px", fontSize:"12px", lineHeight:1.6}}>✓ Everything in Starter<br/>✓ 50 sponsored T2s free</div>
            </div>
            <div style={{border:"1px solid #16a34a", background:"#f0fdf4", borderRadius:"16px", padding:"20px"}}>
              <div style={{fontSize:"11px", fontWeight:800, color:"#15803d"}}>T1 ENTERPRISE — 500-999 STAFF</div>
              <div style={{fontSize:"32px", fontWeight:900, marginTop:"6px"}}>£30k<span style={{fontSize:"14px", fontWeight:600}}>/yr</span></div>
              <div style={{fontSize:"12px", color:"#374151", marginTop:"8px"}}>Own B1-B11 + Wdata + <b>200 sponsored T2s</b>. Not required — you sponsor to keep chain alive when T0 asks T2 directly in 2027-28.</div>
              <div style={{marginTop:"12px", fontSize:"12px", lineHeight:1.6}}>✓ Everything in Growth<br/>✓ 200 sponsored T2s<br/>✓ Overage £4k / 50 T2s</div>
            </div>
          </div>
        </div>

        <div style={{marginTop:"40px", background:"#111827", color:"#fff", borderRadius:"20px", padding:"24px"}}>
          <h3 style={{margin:0, fontSize:"18px", fontWeight:800}}>Why Enterprise pays £30k when not required</h3>
          <div style={{marginTop:"14px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"16px", fontSize:"13px", color:"#d1d5db"}}>
            <div><b style={{color:"#fff"}}>1. Keep chain alive:</b> T0 can ask T2 directly under ESRS S2. If 200 T2s have nothing, T0 flags them risk.</div>
            <div><b style={{color:"#fff"}}>2. Win bids:</b> "200 VSME Basics on file, cap-ready".</div>
            <div><b style={{color:"#fff"}}>3. Future CSDDD:</b> Transposition 26 July 2028, application 26 July 2029.</div>
            <div><b style={{color:"#fff"}}>4. Safe harbor:</b> Sponsoring = documented effort for C1-C9.</div>
          </div>
        </div>

        <div style={{marginTop:"40px", borderTop:"1px solid #e5e7eb", paddingTop:"16px", fontSize:"11px", color:"#9ca3af"}}>
          vsmecap is a reporting tool, not legal advice. Based on Commission Delegated Regulation (EU) 2026/1560, Directive (EU) 2026/470. Basic B1-B11 = Scope 1+2 own operations. CSDDD transposition 26 July 2028.
        </div>
      </div>
    </div>
  );
}
