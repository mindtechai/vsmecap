import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter,Arial,sans-serif", background:"#fff", color:"#111"}}>
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"16px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #eee"}}>
        <b style={{fontSize:"18px"}}>vsmecap.com</b>
        <div style={{display:"flex", gap:"12px", alignItems:"center"}}>
          <span style={{fontSize:"10px", fontWeight:800, border:"1px solid #16a34a", color:"#16a34a", padding:"6px 10px", borderRadius:"999px"}}>EU 2026/1560 • FY2027 READY</span>
          <a href="mailto:hello@vsmecap.com" style={{background:"#111", color:"#fff", padding:"8px 14px", borderRadius:"10px", fontSize:"13px", textDecoration:"none"}}>Contact</a>
        </div>
      </div>

      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"48px 24px 80px"}}>
        <h1 style={{fontSize:"64px", fontWeight:900, lineHeight:".9", letterSpacing:"-2px", margin:0}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#16a34a"}}>Built for the 1,000-employee cap.</span></h1>
        <p style={{maxWidth:"640px", fontSize:"18px", color:"#555", marginTop:"20px"}}>If you have &lt;1,000 employees you are a <b>protected undertaking</b> under Directive 2026/470. Large reporters cannot demand more than <b>VSME Basic B1-B11 — Scope 1+2 own bills/HR only</b>. T0 can ask T2 directly (ESRS 1 para 67 indirect allowed) but capped to Basic.</p>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginTop:"36px"}}>
          <div style={{border:"1px solid #eee", background:"#fafafa", borderRadius:"16px", padding:"20px"}}><div style={{fontSize:"11px", fontWeight:800, color:"#999"}}>OLD ILLEGAL — BANNED</div><b>T0→T1→must collect T2→forward — banned</b></div>
          <div style={{border:"2px solid #111", borderRadius:"16px", padding:"20px"}}><div style={{fontSize:"11px", fontWeight:800}}>NEW CAP-COMPLIANT — vsmecap OS</div><b>T0→T1 capped and T0→T2 capped (indirect allowed)</b><br/><small>T0 CAN ask T2 directly per ESRS 1 para 67. T1 sponsors free tool to T2.</small></div>
        </div>

        <h2 style={{marginTop:"56px", fontSize:"28px", fontWeight:800}}>Pricing for protected undertakings &lt;1,000</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"16px", marginTop:"20px"}}>
          <div style={{border:"2px solid #111", borderRadius:"16px", padding:"20px"}}><b>T0 Compliance</b><div style={{fontSize:"28px", fontWeight:900, margin:"8px 0"}}>£30k/yr</div><small>Audit trail you only asked Basic</small></div>
          <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"20px"}}><b>Starter &lt;100</b><div style={{fontSize:"28px", fontWeight:900, margin:"8px 0"}}>£4.9k/yr</div><small>Own B1-B11 + 10 refusal letters + L1 hash</small></div>
          <div style={{border:"1px solid #e5e7eb", borderRadius:"16px", padding:"20px"}}><b>Growth 100-500</b><div style={{fontSize:"28px", fontWeight:900, margin:"8px 0"}}>£14.9k/yr</div><small>Own B1-B11 + 50 sponsored T2s</small></div>
          <div style={{border:"1px solid #16a34a", background:"#f0fdf4", borderRadius:"16px", padding:"20px"}}><b>Enterprise 500-999</b><div style={{fontSize:"28px", fontWeight:900, margin:"8px 0"}}>£30k/yr</div><small>Own B1-B11 + 200 sponsored T2s — not required, that's why it wins work</small></div>
        </div>

        <div style={{marginTop:"40px", background:"#111", color:"#fff", borderRadius:"20px", padding:"24px"}}>Why Enterprise pays £30k when not required: If your 200 T2s have nothing when T0 asks them directly in 2027-28, T0 flags them as risk and you can't deliver. £30k is supply chain insurance.</div>
        <div style={{marginTop:"40px", fontSize:"12px", color:"#888"}}>vsmecap.com — Value Chain Cap OS. Contact: hello@vsmecap.com</div>
      </div>
    </div>
  );
}
