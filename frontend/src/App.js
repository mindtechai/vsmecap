import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter, system-ui, Arial", background:"#fff", color:"#111", lineHeight:1.45}}>
      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"24px"}}>
        
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontWeight:900, fontSize:"22px"}}>vsmecap.com</div>
          <div style={{fontSize:"11px", border:"1px solid #16a34a", color:"#16a34a", padding:"6px 10px", borderRadius:"20px", fontWeight:800}}>EU 2026/1560 • VALUE CHAIN CAP OS • FY2027</div>
        </div>

        <div style={{marginTop:"64px"}}>
          <h1 style={{fontSize:"52px", lineHeight:0.9, fontWeight:900, letterSpacing:"-1.5px", maxWidth:"720px"}}>The cap that stops spreadsheet chaos. <span style={{color:"#16a34a"}}>£30k ticket, 90% margin.</span></h1>
          <p style={{marginTop:"16px", fontSize:"18px", color:"#444", maxWidth:"680px"}}>If you have {'<'}1,000 employees + {'<'}€450m you are a <b>protected undertaking</b> under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is <b>Scope 1+2 only, your own walls</b>. No subcontractor chase needed.</p>
        </div>

        <div style={{marginTop:"24px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"10px", fontSize:"12px"}}>
          <div style={{background:"#f5f5f5", borderRadius:"10px", padding:"12px"}}><b>FY2027:</b> Mandatory CSRD only for {'>'}1,000 staff + {'>'}€450m turnover — reports in 2028</div>
          <div style={{background:"#fef2f2", borderRadius:"10px", padding:"12px", border:"1px solid #fecaca"}}><b>Cap in force:</b> CSRD company cannot require value-chain undertaking ≤1,000 staff to provide more than VSME</div>
          <div style={{background:"#f0fdf4", borderRadius:"10px", padding:"12px", border:"1px solid #bbf7d0"}}><b>Value chain = direct + indirect:</b> ESRS 1 para 67 — T0 can ask T2 directly, even without contract, but only capped to VSME</div>
        </div>

        <div style={{marginTop:"36px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          <div style={{border:"1px solid #eee", borderRadius:"14px", padding:"16px", opacity:0.5}}>
            <div style={{fontSize:"11px", fontWeight:800}}>OLD ILLEGAL MODEL</div>
            <div style={{fontSize:"13px", marginTop:"6px"}}>T0 → T1 → T1 must collect B1-B11 from T2 → forward to T0. Banned cascade. T1 doesn't need T2 for Basic.</div>
          </div>
          <div style={{border:"2px solid #111", borderRadius:"14px", padding:"16px"}}>
            <div style={{fontSize:"11px", fontWeight:800}}>NEW CAP-COMPLIANT MODEL</div>
            <div style={{fontSize:"13px", marginTop:"6px"}}><b>T0 → T1 (capped)</b> and <b>T0 → T2 (capped, indirect allowed)</b><br/>T1 → sponsors free vsmecap to T2 (goodwill, not demand). T1 own B1-B11 = own bills/HR only.</div>
          </div>
        </div>

        <div style={{marginTop:"44px"}}>
          <h2 style={{fontSize:"28px", fontWeight:800}}>Pricing — Hold £30k at Enterprise</h2>
          <div style={{margin
