import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter, system-ui, Arial", background:"#fff", color:"#111"}}>
      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"24px"}}>
        {/* HEADER */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontWeight:900, fontSize:"22px", letterSpacing:"-0.5px"}}>vsmecap</div>
          <div style={{fontSize:"12px", padding:"8px 12px", border:"1px solid #e5e5e5", borderRadius:"20px"}}>B1-B11 • Value Chain Cap OS</div>
        </div>

        {/* HERO */}
        <div style={{marginTop:"80px"}}>
          <h1 style={{fontSize:"56px", lineHeight:"0.95", fontWeight:900, maxWidth:"700px", letterSpacing:"-2px"}}>
            The Value Chain Cap OS for VSME reporting.
          </h1>
          <p style={{marginTop:"20px", fontSize:"18px", color:"#555", maxWidth:"600px", lineHeight:1.5}}>
            T0 gets verified data. T1 gets £30k/yr + £99/supplier cost coverage. T2 gets free reporter, private to T1. 
            Bridge ID + L1 hash + enterprise Wdata connector = auditable stamp.
          </p>
          <div style={{marginTop:"28px", display:"flex", gap:"12px"}}>
            <a href="mailto:hello@vsmecap.com" style={{background:"#111", color:"#fff", padding:"12px 20px", borderRadius:"10px", textDecoration:"none", fontWeight:600}}>Request T1 Demo</a>
            <a href="#how" style={{border:"1px solid #ddd", padding:"12px 20px", borderRadius:"10px", textDecoration:"none", color:"#111", fontWeight:600}}>How B1-B11 works</a>
          </div>
        </div>

        {/* 3 TIERS - NO NAMES */}
        <div id="how" style={{marginTop:"90px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"16px"}}>
          <div style={{border:"1px solid #eee", borderRadius:"16px", padding:"20px"}}>
            <div style={{fontSize:"12px", fontWeight:700, color:"#888"}}>T0 • ULTIMATE CLIENT</div>
            <h3 style={{marginTop:"8px", fontSize:"18px", fontWeight:800}}>Free Connector</h3>
            <p style={{fontSize:"14px", color:"#555", marginTop:"8px", lineHeight:1.5}}>Wdata-compatible connector. Receives verified, hash-anchored reports. No licence fee.</p>
          </div>
          <div style={{border:"2px solid #111", borderRadius:"16px", padding:"20px"}}>
            <div style={{fontSize:"12px", fontWeight:700, color:"#111"}}>T1 • PRINCIPAL CONTRACTOR</div>
            <h3 style={{marginTop:"8px", fontSize:"18px", fontWeight:800}}>£30k / yr + £99 / supplier</h3>
            <p style={{fontSize:"14px", color:"#555", marginTop:"8px", lineHeight:1.5}}>Runs the cap. Covers verification cost. Owns Bridge ID registry. Private supplier data stays private.</p>
          </div>
          <div style={{border:"1px solid #eee", borderRadius:"16px", padding:"20px"}}>
            <div style={{fontSize:"12px", fontWeight:700, color:"#888"}}>T2 • SUPPLY CHAIN SME</div>
            <h3 style={{marginTop:"8px", fontSize:"18px", fontWeight:800}}>Free Reporter</h3>
            <p style={{fontSize:"14px", color:"#555", marginTop:"8px", lineHeight:1.5}}>Free to report B1-B11. Data is private to their T1 only, not public. No direct fee.</p>
          </div>
        </div>

        {/* B1-B11 */}
        <div style={{marginTop:"80px", borderTop:"1px solid #eee", paddingTop:"40px"}}>
          <h2 style={{fontSize:"28px", fontWeight:800}}>B1-B11 Verification Flow</h2>
          <div style={{marginTop:"20px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px", fontSize:"13px"}}>
            <div><b>B1-B3</b> General</div><div><b>B4-B6</b> Environment</div><div><b>B7-B9</b> Social</div>
            <div><b>B10</b> Governance</div><div><b>B11</b> Final Statement</div><div><b>Bridge ID</b> + Hash anchor</div>
          </div>
          <p style={{marginTop:"16px", fontSize:"14px", color:"#666"}}>Each submission = Bridge ID + L1 public hash (tamper-evident) + enterprise connector push. No client or contractor names stored publicly.</p>
        </div>

        <div style={{marginTop:"80px", padding:"20px", background:"#f7f7f7", borderRadius:"16px", fontSize:"13px", color:"#666"}}>
          vsmecap.com • No client names used • No trademarked contractor names • B1-B11 generic model only • Contact: hello@vsmecap.com
        </div>
      </div>
    </div>
  );
}
