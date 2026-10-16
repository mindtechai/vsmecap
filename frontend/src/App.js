import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterest: ${form.interest}%0D%0A%0D%0ARequesting Investment Pack - I understand vetting for real person ID and NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=VSMECAP Deck Request - ${form.interest} - ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",background:"#fff"};
  const inputS={width:"100%",padding:"11px",margin:"6px 0 12px",border:"1px solid #d1d5db",borderRadius:"10px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"6px 10px",borderRadius:"999px"};
  const small={fontSize:"12px",color:"#555",lineHeight:"1.5"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".06em",color:"#00C08B"};
  const navLink={fontSize:"12px",fontWeight:600,textDecoration:"none",color:"#111",marginRight:"14px"};
  return(
    <div style={{fontFamily:"Inter,Arial",background:"#fff",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",cursor:"pointer",zIndex:99}}>↑</div>}
      
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee",position:"sticky",top:0,background:"#fff",zIndex:10,flexWrap:"wrap",gap:"10px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
          <b>VSMECAP™</b>
          <nav style={{display:"flex",flexWrap:"wrap"}}>
            <a href="#product" style={navLink}>Product</a>
            <a href="#whynow" style={navLink}>Why Now</a>
            <a href="#market" style={navLink}>Market</a>
            <a href="#partners" style={navLink}>Partners</a>
            <a href="#business" style={navLink}>Business Model</a>
            <a href="#about" style={navLink}>About Us</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={badge}>EU 2026/1560 • FY2027 READY • &lt;1000 PROTECTED</span>
          <a href="#contact" style={{background:"#111",color:"#fff",padding:"9px 14px",borderRadius:"10px",fontSize:"13px",textDecoration:"none",fontWeight:700}}>Request Deck</a>
        </div>
      </div>

      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"40px 24px 80px"}}>
        <div style={{fontSize:"11px",fontWeight:800,letterSpacing:".06em"}}>COMMISSION RECOMMENDATION (EU) 2025/1710 · 30 JULY 2025</div>
        <h1 style={{fontSize:"56px",lineHeight:".95",margin:"12px 0 0",fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#00C08B"}}>Built for the 1,000-employee cap.</span></h1>
        <p style={{maxWidth:"680px",color:"#555",marginTop:"20px",fontSize:"18px"}}><b>Voluntary in law, pressured in contract.</b><br/>VSMECAP is a Workiva-compatible VSME collection and evidence workflow for value-chain reporting. VSME B1–B11 is own walls only — Scope 1+2 — no subcontractor spreadsheets needed for Basic. If you have &lt;1000 employees you are a protected undertaking under Directive 2026/470. Right to refuse massive Excel under value chain cap Regulation (EU) 2026/1560 Annex II. 3-year safe harbor for Comprehensive C1–C9.</p>
        <div style={{display:"flex",gap:"12px",marginTop:"20px",flexWrap:"wrap"}}>
          <a href="#contact" style={{background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800}}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com?subject=Design Partner - VSMECAP" style={{border:"1px solid #111",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800,color:"#111"}}>Become a Design Partner</a>
        </div>
        <div style={{marginTop:"16px",fontSize:"11px",fontWeight:700,letterSpacing:".05em"}}>WORKIVA-COMPATIBLE • ASSURANCE-READINESS PARTNERS • IMPLEMENTATION PARTNERS • GREEN FINANCE PARTNERS • LONDON, UK</div>

        <h2 id="product" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PRODUCT — Three tiers, one passport</h2>
        <p style={small}>A single reporting spine from the largest enterprises down to the smallest subcontractors in their value chains.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>T0 · LARGE ENTERPRISE · &gt;1000 EMPLOYEES OR &gt;€500M TURNOVER</div><b>Proposed Workiva-compatible Premium Connector</b><ul style={small}><li>Wdata tables (vsmecap_reports)</li><li>Chains and Bridge integration</li><li>Green / Amber / Red evidence status</li><li>Subject to partner approval and listing.</li></ul></div>
          <div style={card}><div style={micro}>T1 · MID-MARKET COLLECTOR · 250–1000 EMPLOYEES · €50–500M TURNOVER · PAID</div><b>£30k platform + £99 / £199 / £299 per supplier</b><ul style={small}><li>Reference cost model based on disclosed per-supplier rating pricing in selected public sources — illustrative, not universal — actual savings depend on incumbent scope, methodology and volume</li><li>2 hours vs days to complete</li><li>Produces own B1–B11 from own bills/HR — no subcontractor spreadsheets needed</li></ul></div>
          <div style={card}><div style={micro}>T2 · SMALL SUBCONTRACTOR · &lt;250 EMPLOYEES · &lt;€50M TURNOVER · FREE</div><b>Free reporter</b><ul style={small}><li>11 modules, VSME B1–B11</li><li>Free to use — viral into the supply base for own protection</li></ul></div>
        </div>

        <h2 id="whynow" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>WHY NOW — A dated regulation, a visible whitespace</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>REGULATION</div><b>VSME is now law-adjacent</b><ul style={small}><li>Commission Recommendation (EU) 2025/1710 of 30 July 2025</li><li>Published OJ L, 5.8.2025</li><li>Delegated Regulation (EU) 2026/1560 — Annex II cap only — 24 Sept 2026</li><li>Directive (EU) 2026/470 — &gt;1000 employees + €450m — protected undertaking</li></ul></div>
          <div style={card}><div style={micro}>WHITESPACE</div><b>No branded Workiva VSME connector</b><p style={small}>As of 14 October 2026, a public review did not identify a Workiva connector explicitly branded EFRAG VSME B1–B11 from Workiva, EcoVadis or Persefoni. Estimated whitespace: 6–12 months.</p></div>
          <div style={card}><div style={micro}>MOAT</div><b>Workflow, not the connector</b><p style={small}>The moat is not the connector — it's the Workiva-native workflow plus assurance-readiness and the UK construction/infrastructure wedge, which incumbents' horizontal ESG products do not serve.</p></div>
        </div>

        <h2 id="market" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>MARKET — Bottom-up, and labelled as such</h2>
        <p style={small}>Illustrative figures based on an assumed population and ACV — presented for discussion, not as independently validated research.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>ILLUSTRATIVE UNIVERSE</div><div style={{fontSize:"28px",fontWeight:800}}>49,600</div><span style={small}>43,100 EU + 6,500 UK companies in the 250–1000 employee band. Subject to validation.</span></div>
          <div style={card}><div style={micro}>TAM</div><div style={{fontSize:"28px",fontWeight:800}}>£2.475bn</div><span style={small}>49,600 × £49,900 ACV, bottom-up scenario. Not independently validated.</span></div>
          <div style={card}><div style={micro}>SAM</div><div style={{fontSize:"28px",fontWeight:800}}>£249.5m</div><span style={small}>5,000 companies across construction, infrastructure and logistics.</span></div>
          <div style={card}><div style={micro}>SOM</div><div style={{fontSize:"28px",fontWeight:800}}>£798k</div><span style={small}>20 × £39,900 = £798k contracted ARR, if signed.</span></div>
        </div>

        <h2 id="partners" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PARTNERS — Built to sit inside an ecosystem</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>WORKIVA-COMPATIBLE WORKFLOW</div><b>Wdata · Chains · OAuth2</b><ul style={small}><li>Wdata tables and Chains orchestration</li><li>OAuth2 client credentials</li><li>tokenUrl: https://api.workiva.com/oauth2/token</li></ul></div>
          <div style={card}><div style={micro}>ASSURANCE-READINESS PARTNERS</div><b>Methodology review</b><p style={small}>Seeking partners for methodology review and implementation support. Not certification — unless and until signed.</p></div>
          <div style={card}><div style={micro}>IMPLEMENTATION & FINANCE</div><b>Deploy and fund</b><p style={small}>Seeking partners to deploy the connector and to provide green finance — cheaper Green rates for evidenced suppliers.</p></div>
        </div>
        <div style={{background:"#f8fafc",borderLeft:"3px solid #00C08B",padding:"12px 16px",marginTop:"16px",fontSize:"13px",borderRadius:"0 8px 8px 0"}}>We are not naming existing partners until agreements are signed. If you are a Workiva SI, an audit firm or a lender, we need to partner with you.</div>

        <h2 id="business" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>BUSINESS MODEL — Simple platform-plus-per-supplier pricing</h2>
        <p style={small}>A separate product line, priced per deployment.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>BASIC £39,900</div><div style={{fontSize:"22px",fontWeight:800}}>£39,900</div><span style={small}>£30k platform + 100 × £99<br/><br/>Qualifies if &lt;250 employees AND turnover &lt;€50m AND 1–50 suppliers.</span></div>
          <div style={card}><div style={micro}>STANDARD £49,900</div><div style={{fontSize:"22px",fontWeight:800}}>£49,900</div><span style={small}>£30k platform + 100 × £199<br/><br/>Qualifies if 250–1000 employees OR turnover €50–500m AND 51–150 suppliers.</span></div>
          <div style={card}><div style={micro}>PREMIUM £89,900</div><div style={{fontSize:"22px",fontWeight:800}}>£89,900</div><span style={small}>£60k platform + 100 × £299<br/><br/>Qualifies if &gt;1000 employees OR turnover &gt;€500m AND 151+ suppliers. DPA, SOC 2.</span></div>
        </div>
        <div style={{background:"#f8fafc",borderLeft:"3px solid #00C08B",padding:"12px 16px",marginTop:"12px",fontSize:"13px",borderRadius:"0 8px 8px 0"}}>Pricing is a reference model for illustration — final ACV subject to scope, integration and assurance-readiness. Not a claim of being universally cheaper.</div>

        <h2 id="about" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>ABOUT US</h2>
        <p><b>Salil Patankar — Founder</b><br/><span style={small}>VSMECAP, London, UK. Building the SME Sustainability Data Passport: a Workiva-native VSME B1–B11 collection and evidence workflow. VSME is the wedge; the passport is the company. Trademark filing pending, Classes 9 and 42.</span></p>
        <a href="https://www.linkedin.com/in/salil-patankar-94892a367" target="_blank" rel="noreferrer"><svg width="36" height="36" viewBox="0 0 24 24"><path fill="#0A66C2" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.47.62-1.71 1.22-.09.21-.11.51-.11.81v5.82h-3s.04-9.44 0-11h3v1.56c.4-.61 1.11-1.48 2.7-1.48 1.97 0 3.45 1.29 3.45 4.06v6.86z"/><path fill="#fff" d="M4 19h3V8H4v11z"/></svg></a>

        <h2 id="contact" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>CONTACT US — Email only: info@vsmecap.com</h2>
        <p style={small}>Tell us who you are and what you'd like to discuss — the form opens your email client addressed to us.</p>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",maxWidth:"640px"}}>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Name *</span><br/><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Company *</span><br/><input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Email *</span><br/><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Contact No *</span><br/><input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Interest *</span><br/><select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select></label>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"12px",borderRadius:"8px",fontSize:"12px"}}><b>For Investment Deck:</b> Deck is shared after a brief verification call to confirm SEIS/EIS eligibility
