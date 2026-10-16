import React,{useState,useEffect} from "react";
export default function App(){
const [showTop,setShowTop]=useState(false);const [menuOpen,setMenuOpen]=useState(false);const [active,setActive]=useState("top");
const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
useEffect(()=>{
window.scrollTo(0,0);
const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);
const obs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);});},{rootMargin:"-80px 0px -70% 0px",threshold:0});
["product","whynow","market","partners","business","faq","about","contact"].forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el);});
return()=>{window.removeEventListener("scroll",f);obs.disconnect();}
},[]);
const goTop=()=>{window.scrollTo({top:0,behavior:"smooth"});window.history.replaceState(null,"","/");setMenuOpen(false);setActive("top");};
const goTo=(id)=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});setMenuOpen(false);};
const send=()=>{if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}const b=`Name:${form.name} Company:${form.company} Email:${form.email} Phone:${form.phone} Interest:${form.interest} NDA required.`;window.location.href=`mailto:info@vsmecap.com?subject=Deck ${form.interest} ${form.name}&body=${b}`;};
const card={border:"1px solid #e5e7eb",borderRadius:"20px",padding:"24px",background:"#fff",boxShadow:"0 6px 24px rgba(0,0,0,0.05)"};
const inputS={width:"100%",padding:"12px",margin:"6px 0 14px",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"14px",boxSizing:"border-box"};
const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"7px 12px",borderRadius:"999px"};
const small={fontSize:"13px",color:"#4b5563",lineHeight:"1.7"};const micro={fontSize:"11px",fontWeight:800,letterSpacing:".08em",color:"#00C08B"};
const h2Style={marginTop:"88px",fontSize:"clamp(24px,5vw,32px)",fontWeight:900,scrollMarginTop:"110px"};
const navLink=(id,label)=><a key={id} onClick={()=>goTo(id)} style={{fontSize:"13px",fontWeight:700,cursor:"pointer",marginRight:"18px",color:active===id?"#00C08B":"#111",borderBottom:active===id?"2px solid #00C08B":"2px solid transparent",paddingBottom:"4px",whiteSpace:"nowrap"}}>{label}</a>;
return(<div id="top" style={{fontFamily:"Inter,Arial",background:"#fcfcfd",color:"#111",overflowX:"hidden"}}>
<style>{`.header{max-width:1240px;margin:0 auto;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;background:#fff;position:sticky;top:0;z-index:50;border-bottom:1px solid #eef0f3}.logo img{height:62px;width:auto}.nav-links{display:flex;align-items:center}.header-right{display:flex;align-items:center;gap:12px}.hamburger{display:none;background:#111;color:#fff;border:none;border-radius:10px;padding:8px 12px;font-size:18px;cursor:pointer}.hero-title{font-size:clamp(34px,7vw,64px);line-height:.92;margin:16px 0 0;font-weight:900;letter-spacing:-1.5px}.green-box{margin-top:22px;border-left:5px solid #00C08B;padding:18px;background:#f0fdf4;border-radius:0 16px 16px 0;max-width:860px}.container{max-width:1120px;margin:0 auto;padding:32px 16px 40px}@media(max-width:1100px){.nav-links{display:none}.nav-links.open{display:flex;position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;align-items:flex-start;padding:16px 16px 20px;border-bottom:1px solid #eef0f3}.nav-links.open a{padding:10px 0}.hamburger{display:block}.logo img{height:46px !important}}`}</style>
{showTop&&<div onClick={goTop} style={{position:"fixed",bottom:"20px",right:"16px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",cursor:"pointer",zIndex:99}}>UP</div>}
<div style={{background:"#00C08B",color:"#fff",padding:"10px 12px",fontSize:"13px",fontWeight:800,textAlign:"center"}}>The cap that stops spreadsheet chaos. If you have less than 1000 employees + less than 450m EUR you are protected undertaking under Directive 2026/470.</div>
<div className="header">
<a onClick={goTop} style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}}><img src="/android-chrome-512x512.png?v=5" alt="VSMECAP"/></a>
<div className="header-right"><span style={badge}>EU 2026/1560 FY2027 READY</span><button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"X":"☰"}</button></div>
<nav className={`nav-links ${menuOpen?"open":""}`}>
{navLink("product","Product")}{navLink("whynow","Why Now")}{navLink("market","Market")}{navLink("partners","Partners")}{navLink("business","Business Model")}{navLink("faq","FAQ")}{navLink("about","About Us")}{navLink("contact","Contact")}
<a onClick={()=>goTo("contact")} style={{background:"#111",color:"#fff",padding:"10px 16px",borderRadius:"12px",fontSize:"13px",fontWeight:700,cursor:"pointer",marginLeft:"4px"}}>Request Deck</a>
</nav>
</div>
<div className="container">
<h1 className="hero-title">The cap that stops<br/>spreadsheet chaos.</h1>
<div className="green-box"><div style={{fontSize:"24px",fontWeight:900,lineHeight:"1.25"}}>If you have less than 1000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div></div>

<h2 id="product" style={h2Style}>PRODUCT — Three tiers, one passport</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>T0 LARGE GT1000</div><div style={{fontWeight:800}}>Proposed Workiva-compatible workflow</div><div style={small}>Wdata table vsmecap_reports, Chains, Bridge. Full spec in NDA deck only.</div></div>
<div style={card}><div style={micro}>T1 MID 250-1000</div><div style={{fontWeight:800}}>Produces own B1-B11 from own bills and HR</div><div style={small}>No subcontractor spreadsheets for Basic. Includes refusal letter generator under 2026/1560 Annex II cap.</div></div>
<div style={card}><div style={micro}>T2 SMALL LT250 FREE</div><div style={{fontWeight:800}}>Free reporter 11 modules B1-B11</div><div style={small}>Free for own protection. T0 can ask T2 directly per ESRS 1 para 67 but capped to Basic only.</div></div>
</div>

<h2 id="whynow" style={h2Style}>WHY NOW</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>REGULATION</div><div style={{fontWeight:800}}>VSME is now law-adjacent</div><div style={small}>Recommendation 2025/1710 30 July 2025, Regulation 2026/1560 Annex II 24 Sep 2026, Directive 2026/470 18 Mar 2026.</div></div>
<div style={card}><div style={micro}>WHITESPACE</div><div style={{fontWeight:800}}>No branded Workiva VSME workflow</div><div style={small}>Public review 14 Oct 2026 — no Marketplace listing branded EFRAG VSME B1-B11.</div></div>
<div style={card}><div style={micro}>MOAT — AUDIT READY</div><div style={{fontWeight:800}}>Timestamped verified output</div><div style={small}>Moat is Workiva-native workflow plus audit-ready timestamped verified evidence pack with source document linkage, assurance-readiness and UK construction wedge.</div></div>
</div>

<h2 id="market" style={h2Style}>MARKET — Bottom-up with basis</h2>
<p style={small}>Basis: Commission impact assessment ~50k firms move out when threshold moves to GT1000 + EUR 450m, leaving 43,100 EU in 250-1000 band per Eurostat SBS + UK BEIS 2024 ~6,500 UK firms. Illustrative ACV in NDA deck.</p>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>UNIVERSE — BASIS STATED</div><div style={{fontSize:"30px",fontWeight:900}}>49,600</div><div style={small}>43,100 EU (Eurostat) + 6,500 UK (BEIS) in 250-1000 band.</div></div>
<div style={card}><div style={micro}>TAM ILLUSTRATIVE</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 2.475bn</div><div style={small}>Illustrative — population x reference ACV scenario.</div></div>
<div style={card}><div style={micro}>SAM — UK CONSTRUCTION WEDGE</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 249.5m</div><div style={small}>~5,000 firms construction infra logistics — initial wedge.</div></div>
<div style={card}><div style={micro}>SOM</div><div style={{fontSize:"30px",fontWeight:900}}>Contact</div><div style={small}>Contracted ARR scenario — NDA deck only.</div></div>
</div>

<h2 id="partners" style={h2Style}>PARTNERS — Collaborative approach</h2>
<p style={small}>Partnership discussions are in progress under mutual NDA. Specific names and terms shared upon qualified interest and NDA execution.</p>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>WORKIVA-COMPATIBLE CONCEPT</div><div style={{fontWeight:800}}>Wdata — Chains — OAuth2 concept</div><div style={small}>Designed to use Wdata tables and Chains. Concept subject to approval. Not affiliated with Workiva Inc.</div></div>
<div style={card}><div style={micro}>ASSURANCE-READINESS</div><div style={{fontWeight:800}}>Methodology review — in discussion</div><div style={small}>Engaging with assurance providers for methodology alignment. Details under NDA.</div></div>
<div style={card}><div style={micro}>IMPLEMENTATION & GREEN FINANCE</div><div style={{fontWeight:800}}>Deployment and financing — in discussion</div><div style={small}>System integrator and green finance discussions underway.</div></div>
</div>

<h2 id="business" style={h2Style}>BUSINESS MODEL — How value is created</h2>
<p style={small}>Public site does not list fixed pricing. Model is platform access plus evidence volume. Full unit economics in NDA deck only.</p>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>BASIC — OWN WALLS B1-B11</div><div style={{fontWeight:800}}>Platform + per evidence pack</div><div style={small}>VSME B1-B11 own-walls Scope 1+2 from own bills and HR exports. Timestamped verified output.</div></div>
<div style={card}><div style={micro}>STANDARD — PROTECTED UNDERTAKING</div><div style={{fontWeight:800}}>Platform + refusal letter + pack</div><div style={small}>Includes cap enforcement: legal refusal letter generator under 2026/1560 Annex II.</div></div>
<div style={card}><div style={micro}>PREMIUM — ENTERPRISE SCALE</div><div style={{fontWeight:800}}>Enterprise controls at scale</div><div style={small}>DPA, SOC 2, SSO, multi-entity, Wdata sync concept, audit trail.</div></div>
</div>

<h2 id="faq" style={h2Style}>FAQ — VSME Value Chain Cap</h2>
<div style={{display:"grid",gap:"16px",marginTop:"18px"}}>
<div style={card}><div style={micro}>WHAT IS THE VSME VALUE CHAIN CAP?</div><div style={{fontWeight:800}}>Legal boundary under Directive 2026/470</div><div style={small}>Large CSRD buyer cannot require supplier &lt;1000 employees to provide beyond VSME Basic B1-B11 own-walls Scope 1+2.</div></div>
<div style={card}><div style={micro}>WHO IS PROTECTED?</div><div style={{fontWeight:800}}>&lt;1000 employees + &lt;EUR 450m</div><div style={small}>Protected undertaking per Directive 2026/470 Omnibus.</div></div>
<div style={card}><div style={micro}>WHAT DOES B1-B11 ASK?</div><div style={{fontWeight:800}}>Energy kWh fuel, workforce headcount H&S, governance yes/no</div><div style={small}>Per EFRAG VSME and Recommendation 2025/1710.</div></div>
<div style={card}><div style={micro}>WHAT IS VSMECAP.COM?</div><div style={{fontWeight:800}}>The cap that stops spreadsheet chaos</div><div style={small}>Proposed Workiva-compatible workflow to produce reusable passport mapped to B1-B11 and generate refusal letter when request exceeds cap.</div></div>
</div>

<h2 id="about" style={h2Style}>ABOUT US</h2>
<div style={card}><div style={{fontWeight:800}}>Salil Patankar — Founder, VSMECAP London UK</div><div style={small}>Building SME Sustainability Data Passport — proposed Workiva-compatible VSME B1-B11 workflow concept. Trade mark filing pending Classes 9 and 42.</div></div>

<h2 id="contact" style={{marginTop:"88px",fontSize:"32px",fontWeight:900,scrollMarginTop:"110px"}}>CONTACT US — info@vsmecap.com</h2>
<div style={{border:"1px solid #e5e7eb",borderRadius:"20px",padding:"20px",maxWidth:"680px",background:"#fff"}}>
<div style={{fontSize:"12px",fontWeight:700}}>Full Name *</div><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS}/>
<div style={{fontSize:"12px",fontWeight:700}}>Company *</div><input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS}/>
<div style={{fontSize:"12px",fontWeight:700}}>Email *</div><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS}/>
<div style={{fontSize:"12px",fontWeight:700}}>Contact No *</div><input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS}/>
<div style={{fontSize:"12px",fontWeight:700}}>Interest *</div><select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select>
<button onClick={send} style={{marginTop:"14px",background:"#00C08B",color:"#fff",padding:"13px 16px",borderRadius:"12px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
</div>

<div style={{borderTop:"1px solid #e5e7eb",marginTop:"80px",paddingTop:"24px",fontSize:"11px",color:"#6b7280",textAlign:"center"}}>
<div style={{display:"flex",justifyContent:"center",marginBottom:"18px"}}><img src="/android-chrome-512x512.png?v=5" alt="VSMECAP" style={{height:"72px",width:"auto"}}/></div>
© 2026 VSMECAP London UK — info@vsmecap.com — All methodology © 2026 VSMECAP confidential trade secrets.
</div>
</div>
</div>
);
}