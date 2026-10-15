import React from "react";
export default function App() {
  return (
    <div style={{fontFamily:"Inter,Arial,sans-serif", maxWidth:"1120px", margin:"0 auto", padding:"20px 24px"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}><b>vsmecap.com</b><span style={{fontSize:"10px", border:"1px solid #16a34a", color:"#16a34a", padding:"5px 10px", borderRadius:"999px", fontWeight:800}}>EU 2026/1560 • FY2027 READY</span></div>
      
      <h1 style={{fontSize:"52px", lineHeight:".92", fontWeight:900, marginTop:"48px"}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#16a34a"}}>Built for the 1,000-employee cap.</span></h1>
      <p style={{maxWidth:"560px", color:"#4b5563", fontSize:"18px"}}>If you have &lt;1,000 employees you are a <b>protected undertaking</b> under Directive 2026/470. Large reporters cannot demand more than <b>VSME Basic B1-B11</b> — Scope 1+2 own bills/HR only.</p>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"24px"}}>
        <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"16px", opacity:.6}}><b style={{fontSize:"11px"}}>OLD ILLEGAL</b><br/>T0→T1→must collect T2→forward — banned</div>
        <div style={{border:"2px solid #111", borderRadius:"16px", padding:"16px"}}><b style={{fontSize:"11px"}}>NEW CAP-COMPLIANT</b><br/><b>T0→T1 capped and T0→T2 capped (indirect allowed)</b><br/><small>T0 CAN ask T2 directly per ESRS 1 para 67 — value chain = direct + indirect. T1 sponsors free tool to T2.</small></div>
      </div>

      <h2 style={{marginTop:"40px"}}>Pricing for &lt;1,000 staff</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"12px", marginTop:"16px"}}>
        <div style={{border:"2px solid #111", borderRadius:"16px", padding:"18px"}}><b>T0 Compliance</b><br/><span style={{fontSize:"28px", fontWeight:900}}>£30k/yr</span><br/><small>Audit trail you only asked Basic</small></div>
        <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"18px"}}><b>Starter &lt;100</b><br/><span style={{fontSize:"28px", fontWeight:900}}>£4.9k/yr</span><br/><small>Own B1-B11 + 10 refusal letters</small></div>
        <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"18px"}}><b>Growth 100-500</b><br/><span style={{fontSize:"28px", fontWeight:900}}>£14.9k/yr</span><br/><small>Own B1-B11 + 50 sponsored T2s</small></div>
        <div style={{border:"1px solid #16a34a", background:"#f0fdf4", borderRadius:"16px", padding:"18px"}}><b>Enterprise 500-999</b><br/><span style={{fontSize:"28px", fontWeight:900}}>£30k/yr</span><br/><small>Own B1-B11 + 200 sponsored T2s — not required, that's why it wins work</small></div>
      </div>
    </div>
  );
}
