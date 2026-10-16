import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterest: ${form.interest}%0D%0A%0D%0ARequesting Pack - NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request - ${form.interest} - ${form.name}&body=${body}`;
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
        <div style={{fontSize:"11px",fontWeight:800}}>COMMISSION RECOMMENDATION (EU) 2025/1710 · 30 JULY 2025</div>
        <h1 style={{fontSize:"56px",lineHeight:".95",margin:"12px 0 0",fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#00C08B"}}>Built for the 1,000-employee cap.</span></h1>
        <p style={{maxWidth:"680px",color:"#555",marginTop:"20px",fontSize:"18px"}}><b>Voluntary in law, pressured in contract.</b> VSMECAP is Workiva-compatible VSME collection and evidence workflow. VSME B1-B11 is own walls only — Scope 1+2 — no subcontractor spreadsheets needed for Basic. If you have less than 1000 employees you are protected under 2026/470. Right to refuse massive Excel under cap 2026/1560 Annex II. 3-year safe harbor C1-C9.</p>
        <div style={{display:"flex",gap:"12px",marginTop:"20px",flexWrap:"wrap"}}>
          <a href="#contact" style={{background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800}}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com?subject=Design Partner" style={{border:"1px solid #111",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800,color:"#111"}}>Become a Design Partner</a>
        </div>
        <h2 id="product" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PRODUCT — Three tiers, one passport</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>T0 LARGE &gt;1000 OR &gt;500M</div><b>Proposed Workiva-compatible Premium Connector</b><div style={small}>Wdata tables, Chains, Green Amber Red. Subject to approval.</div></div>
          <div style={card}><div style={micro}>T1 MID 250-1000 PAID</div><b>£30k platform + £99 / £199 / £299 per supplier</b><div style={small}>Reference cost model based on disclosed per-supplier pricing — illustrative, not universal.</div></div>
          <div style={card}><div style={micro}>T2 SMALL &lt;250 FREE</div><b>Free reporter</b><div style={small}>11 modules B1-B11. Free for own protection.</div></div>
        </div>
        <h2 id="whynow" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>WHY NOW — A dated regulation, a visible whitespace</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>REGULATION</div><b>VSME is now law-adjacent</b><div style={small}>2025/1710, OJ L 5.8.2025, 2026/1560 Annex II cap only, 2026/470 protected undertaking.</div></div>
          <div style={card}><div style={micro}>WHITESPACE</div><b>No branded Workiva VSME connector</b><div style={small}>As of 14 Oct 2026, no branded connector from Workiva, EcoVadis or Persefoni. Whitespace 6-12 months.</div></div>
          <div style={card}><div style={micro}>MOAT</div><b>Workflow, not the connector</b><div style={small}>Workiva-native workflow plus UK construction wedge.</div></div>
        </div>
        <h2 id="market" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>MARKET — Bottom-up, and labelled as such</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>ILLUSTRATIVE UNIVERSE</div><div style={{fontSize:"28px",fontWeight:800}}>49,600</div><div style={small}>43,100 EU + 6,500 UK 250-1000 band.</div></div>
          <div style={card}><div style={micro}>TAM</div><div style={{fontSize:"28px",fontWeight:800}}>£2.475bn</div><div style={small}>49,600 x 49,900 ACV.</div></div>
          <div style={card}><div style={micro}>SAM</div><div style={{fontSize:"28px",fontWeight:800}}>£249.5m</div><div style={small}>5,000 construction infrastructure logistics.</div></div>
          <div style={card}><div style={micro}>SOM</div><div style={{fontSize:"28px",fontWeight:800}}>£798k</div><div style={small}>20 x 39,900 contracted ARR if signed.</div></div>
        </div>
        <h2 id="partners" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PARTNERS — Built to sit inside an ecosystem</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>WORKIVA-COMPATIBLE</div><b>Wdata Chains OAuth2</b><div style={small}>tokenUrl https://api.workiva.com/oauth2/token</div></div>
          <div style={card}><div style={micro}>ASSURANCE-READINESS</div><b>Methodology review</b><div style={small}>Seeking partners. Not certification unless signed.</div></div>
          <div style={card}><div style={micro}>IMPLEMENTATION FINANCE</div><b>Deploy and fund</b><div style={small}>Green rates for evidenced suppliers.</div></div>
        </div>
        <h2 id="business" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>BUSINESS MODEL — Simple platform-plus-per-supplier pricing</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>BASIC £39,900</div><div style={{fontSize:"22px",fontWeight:800}}>£39
