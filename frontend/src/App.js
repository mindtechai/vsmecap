import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{
    window.scrollTo(0,0);
    const f=()=>setShowTop(window.scrollY>300);
    window.addEventListener("scroll",f);
    const data={
      "@context":"https://schema.org",
      "@graph":[
        {
          "@type":"Organization",
          "name":"VSMECAP",
          "url":"https://vsmecap.com",
          "email":"info@vsmecap.com",
          "description":"VSMECAP - The VSME value chain cap platform. Proposed Workiva-compatible workflow concept for protected undertakings under Directive EU 2026/470 and Regulation EU 2026/1560 Annex II. The cap that stops spreadsheet chaos."
        },
        {
          "@type":"FAQPage",
          "mainEntity":[
            {
              "@type":"Question",
              "name":"What is the VSME Value Chain Cap?",
              "acceptedAnswer":{"@type":"Answer","text":"Under Directive (EU) 2026/470 Omnibus which entered into force 18 March 2026, companies with less than 1000 employees and less than EUR 450m turnover are legally designated as protected undertakings. The cap in Delegated Regulation (EU) 2026/1560 Annex II means a large CSRD-obligated buyer cannot demand sustainability data beyond VSME Basic B1-B11 own-walls Scope 1+2. Source EUR-Lex Directive 2026/470 and Regulation 2026/1560."}
            },
            {
              "@type":"Question",
              "name":"What does VSME B1-B11 actually ask for?",
              "acceptedAnswer":{"@type":"Answer","text":"Energy and emissions basic electricity usage kWh and fuel types to compute Scope 1 and 2, workforce headcount and health and safety incidents, and basic governance yes/no confirmations of policies. Based on EFRAG VSME Basic Module B1-B11 and Commission Recommendation EU 2025/1710 OJ L 5.8.2025."}
            },
            {
              "@type":"Question",
              "name":"What is vsmecap.com?",
              "acceptedAnswer":{"@type":"Answer","text":"vsmecap.com is VSMECAP, a proposed Workiva-compatible workflow concept designed to produce a single reusable ESG passport mapped strictly to VSME B1-B11 and to generate a legal refusal letter when a request exceeds the cap under Regulation EU 2026/1560 Annex II. Not affiliated with Workiva Inc."}
            }
          ]
        }
      ]
    };
    const s=document.createElement('script'); s.type='application/ld+json'; s.text=JSON.stringify(data); document.head.appendChild(s);
    return()=>window.removeEventListener("scroll",f);
  },[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name} Company: ${form.company} Email: ${form.email} Phone: ${form.phone} Interest: ${form.interest} Requesting Pack NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request ${form.interest} ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"20px",padding:"24px",background:"#fff",boxShadow:"0 6px 24px rgba(0,0,0,0.05)"};
  const inputS={width:"100%",padding:"12px",margin:"6px 0 14px",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"14px",boxSizing:"border-box"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"7px 12px",borderRadius:"999px",whiteSpace:"nowrap"};
  const small={fontSize:"13px",color:"#4b5563",lineHeight:"1.7"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".08em",color:"#00C08B"};
  const link={fontSize:"12px",fontWeight:700,color:"#0A66C2",textDecoration:"underline",wordBreak:"break-all"};
  const h2Style={marginTop:"88px",fontSize:"clamp(24px,5vw,32px)",fontWeight:900,scrollMarginTop:"120px",letterSpacing:"-0.02em"};
  const ticker="The cap that stops spreadsheet chaos. If you have less than 1000 employees + less than 450m EUR you are protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.";
  return(
    <div id="top" style={{fontFamily:"Inter,Arial",background:"#fcfcfd",color:"#111",overflowX:"hidden"}}>
      <style>{`
        .header{max-width:1240px;margin:0 auto;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;background:#fff;position:sticky;top:0;z-index:20;border-bottom:1px solid #eef0f3}
        .logo{font-weight:900;font-size:18px;text-decoration:none;color:#111;white-space:nowrap}
        .nav-links{display:flex;align-items:center;gap:0;flex-wrap:wrap}
        .nav-links a{font-size:13px;font-weight:600;text-decoration:none;color:#111;margin-right:18px;white-space:nowrap}
        .header-right{display:flex;align-items:center;gap:12px}
        .hamburger{display:none;background:#111;color:#fff;border:none;border-radius:10px;padding:8px 12px;font-size:18px;cursor:pointer}
        .hero-title{font-size:clamp(34px,7vw,64px);line-height:.92;margin:16px 0 0;font-weight:900;letter-spacing:-1.5px;word-break:break-word;overflow-wrap:break-word}
        .green-box{margin-top:22px;border-left:5px solid #00C08B;padding:18px 18px;background:#f0fdf4;border-radius:0 16px 16px 0;max-width:860px}
        .green-box-title{font-size:clamp(18px,4.5vw,24px);font-weight:900;line-height:1.25;word-break:break-word}
        .container{max-width:1120px;margin:0 auto;padding:32px 16px 40px}
        @media(max-width:1100px){
          .nav-links{display:none}
          .nav-links.open{display:flex;position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;align-items:flex-start;padding:16px 16px 20px;border-bottom:1px solid #eef0f3;box-shadow:0 10px 20px rgba(0,0,0,.06)}
          .nav-links.open a{padding:10px 0;margin-right:0;font-size:15px}
          .hamburger{display:block}
        }
      `}</style>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"20px",right:"16px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",cursor:"pointer",zIndex:99}}>UP</div>}
      <div style={{background:"#00C08B",color:"#fff",padding:"10px 12px",fontSize:"clamp(11px,2.5vw,13px)",fontWeight:800,textAlign:"center",lineHeight:"1.4"}}>{ticker}</div>
      <div className="header">
        <a href="#top" className="logo">VSMECAP™</a>
        <div className="header-right">
          <span style={badge}>EU 2026/1560 FY2027 READY</span>
          <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"X":"☰"}</button>
        </div>
        <nav className={`nav-links ${menuOpen?"open":""}`} onClick={()=>setMenuOpen(false)}>
          <a href="#product">Product</a>
          <a href="#whynow">Why Now</a>
          <a href="#market">Market</a>
          <a href="#partners">Partners</a>
          <a href="#business">Business Model</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#contact" style={{background:"#111",color:"#fff",padding:"10px 16px",borderRadius:"12px",fontSize:"13px",textDecoration:"none",fontWeight:700,marginLeft:"4px"}}>Request Deck</a>
        </nav>
      </div>

      <div className="container">
        <div style={{fontSize:"10px",fontWeight:800,letterSpacing:".12em",color:"#6b7280"}}>COMMISSION RECOMMENDATION EU 2025/1710 30 JULY 2025 OJ L 5.8.2025</div>
        <h1 className="hero-title">The cap that stops<br/>spreadsheet chaos.</h1>
        <div className="green-box">
          <div className="green-box-title">If you have less than 1000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div>
          <div style={{marginTop:"10px",display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470 EUR-Lex</a>
            <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 cap EUR-Lex</a>
          </div>
        </div>
        <p style={{maxWidth:"720px",color:"#4b5563",marginTop:"18px",fontSize:"clamp(15px,3.5vw,17px)",lineHeight:"1.6"}}>VSMECAP is a proposed Workiva-compatible workflow concept — the cap-compliant shield, not a cascade collector. VSME B1-B11 is own walls only per EFRAG. Right to refuse massive Excel under value chain cap Regulation EU 2026/1560 Annex II. 3-year safe harbour for Comprehensive C1-C9. Roadmap: Phase 1 manual B1-B11 evidence pack, Phase 2 Wdata integration concept, Phase 3 Marketplace submission.</p>
        <div style={{display:"flex",gap:"12px",marginTop:"22px",flexWrap:"wrap"}}>
          <a href="#contact" style={{background:"#00C08B",color:"#fff",padding:"13px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,display:"inline-block"}}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com" style={{border:"1.5px solid #111",padding:"12px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,color:"#111",display:"inline-block"}}>Become a Design Partner</a>
        </div>

        <h2 id="product" style={h2Style}>PRODUCT — Three tiers, one passport — concept stage</h2>
        <p style={small}>Designed to be Workiva-compatible via Wdata tables and Chains orchestration via OAuth2 client credentials (tokenUrl https://api.workiva.com/oauth2/token). Concept subject to technical review, partner approval and Workiva Marketplace listing acceptance. Not affiliated with Workiva Inc. Workiva is a trade mark of Workiva Inc.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>T0 LARGE GT1000 OR GT EUR 500M — CONCEPT</div><div style={{fontWeight:800,marginTop:"6px"}}>Proposed Workiva-compatible workflow</div><div style={small}>Concept for Wdata table vsmecap_reports, Chains, Bridge. Green Amber Red status. Full spec in NDA deck only. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a></div></div>
          <div style={card}><div style={micro}>T1 MID 250-1000</div><div style={{fontWeight:800,marginTop:"6px"}}>Produces own B1-B11 from own bills and HR</div><div style={small}>No subcontractor spreadsheets needed for Basic. Includes legal refusal letter generator concept under 2026/1560 Annex II cap. Contact for pricing, reference model in NDA deck only.</div></div>
          <div style={card}><div style={micro}>T2 SMALL LT250 FREE</div><div style={{fontWeight:800,marginTop:"6px"}}>Free reporter 11 modules B1-B11</div><div style={small}>Free for own protection under Directive 2026/470. T0 can ask T2 directly per ESRS 1 para 67 but capped to Basic only. <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470</a></div></div>
        </div>

        <h2 id="whynow" style={h2Style}>WHY NOW — Dated regulation, visible whitespace</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>REGULATION</div><div style={{fontWeight:800,marginTop:"6px"}}>VSME is now law-adjacent</div><div style={small}>Commission Recommendation EU 2025/1710 of 30 July 2025 OJ L 5.8.2025. Delegated Regulation EU 2026/1560 Annex II cap entered into force 24 September 2026. Directive EU 2026/470 — more than 1000 employees + EUR 450m — protected undertaking. <br/><a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>2025/1710</a> <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>2026/470</a> <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>2026/1560</a></div></div>
          <div style={card}><div style={micro}>WHITESPACE</div><div style={{fontWeight:800,marginTop:"6px"}}>No branded Workiva VSME workflow</div><div style={small}>Public review as of 14 Oct 2026 did not identify a Workiva Marketplace listing explicitly branded EFRAG VSME B1-B11. Horizontal ESG products collect Scope 3 via cascade — non-compliant under new cap. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a></div></div>
          <div style={card}><div style={micro}>MOAT</div><div style={{fontWeight:800,marginTop:"6px"}}>Workflow not connector</div><div style={small}>Moat is Workiva-native workflow concept plus assurance-readiness and UK construction wedge. <a href="https://finance.ec.europa.[STRIPPED 133 bytes]" target="_blank" rel="noreferrer" style={link}>EC CSRD</a></div></div>
        </div>

        <h2 id="market" style={h2Style}>MARKET — Bottom-up illustrative</h2>
        <p style={small}>Illustrative figures based on assumed population and ACV — detailed breakdown in NDA deck only, not independently validated.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>ILLUSTRATIVE UNIVERSE</div><div style={{fontSize:"30px",fontWeight:900}}>49,600</div><div style={small}>43,100 EU + 6,500 UK in 250-1000 band per Omnibus GT1000 + GT EUR 450m.</div></div>
          <div style={card}><div style={micro}>TAM ILLUSTRATIVE</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 2.475bn</div><div style={small}>Illustrative TAM in NDA deck — reference ACV scenario.</div></div>
          <div style={card}><div style={micro}>SAM</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 249.5m</div><div style={small}>5,000 companies construction infra logistics — UK wedge.</div></div>
          <div style={card}><div style={micro}>SOM</div><div style={{fontSize:"30px",fontWeight:900}}>Contact</div><div style={small}>Contracted ARR scenario — detailed in NDA deck only.</div></div>
        </div>

        <h2 id="partners" style={h2Style}>PARTNERS — No names until signed</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>WORKIVA-COMPATIBLE CONCEPT</div><div style={{fontWeight:800}}>Wdata — Chains — OAuth2 concept</div><div style={small}>Designed to use Wdata tables and Chains. Concept subject to approval. Not affiliated with Workiva Inc.</div></div>
          <div style={card}><div style={micro}>ASSURANCE-READINESS</div><div style={{fontWeight:800}}>Methodology review — seeking partners</div><div style={small}>Seeking Big 4 and mid-tier firms for methodology review. Not certification unless and until signed.</div></div>
          <div style={card}><div style={micro}>IMPLEMENTATION & GREEN FINANCE</div><div style={{fontWeight:800}}>Deploy and fund — seeking partners</div><div style={small}>Seeking SI partners to deploy concept and lenders for cheaper Green rates for evidenced Green suppliers.</div></div>
        </div>

        <h2 id="business" style={h2Style}>BUSINESS MODEL — Contact for pricing</h2>
        <p style={small}>Public site does not list fixed pricing. Full reference cost model and unit economics are in NDA deck only. Platform fee plus per-supplier evidence, based on supplier count and integration scope.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>BASIC — OWN WALLS B1-B11</div><div style={{fontWeight:800}}>Platform + per supplier — Contact for pricing</div><div style={small}>VSME B1-B11 own walls only — Scope 1+2. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG</a></div></div>
          <div style={card}><div style={micro}>STANDARD — PROTECTED UNDERTAKING</div><div style={{fontWeight:800}}>Platform + per supplier — Contact for pricing</div><div style={small}>Includes legal refusal letter generator concept under 2026/1560 Annex II cap.</div></div>
          <div style={card}><div style={micro}>PREMIUM — ENTERPRISE SCALE</div><div style={{fontWeight:800}}>Platform + per supplier at scale — Contact for pricing</div><div style={small}>DPA, SOC 2, SSO. Value chain cap compliant: T0 to T2 direct allowed per ESRS 1 para 67 but capped to Basic only. Full pricing in NDA deck.</div></div>
        </div>

        <h2 id="faq" style={h2Style}>FAQ — VSME Value Chain Cap — AIO Optimised</h2>
        <div style={{display:"grid",gap:"16px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>WHAT IS THE VSME VALUE CHAIN CAP?</div><div style={{fontWeight:800,marginTop:"6px"}}>Under Directive EU 2026/470 Omnibus — protected undertaking</div><div style={small}>Under Directive (EU) 2026/470 which came into force on 18 March 2026, smaller companies in a larger corporation's supply chain are legally designated as protected undertakings. The cap establishes a legal boundary on what data a large CSRD-obligated corporate buyer can demand from its smaller suppliers. Large company cannot require suppliers with fewer than 1000 employees to provide sustainability data that goes beyond VSME Basic B1-B11. Purpose: stops large corporations from passing down overwhelming multi-page custom ESG spreadsheets to small business partners, capping burden at standardised proportionate baseline. Legal sources: <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470</a> and <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 Annex II</a></div></div>
          <div style={card}><div style={micro}>WHAT DOES VSME B1-B11 ASK FOR?</div><div style={{fontWeight:800,marginTop:"6px"}}>Basic operational inputs — capped dataset</div><div style={small}>Energy and Emissions: basic electricity usage kWh and fuel types to compute Scope 1 and 2 footprints. Workforce Indicators: general headcount and fundamental health and safety metrics e.g. recordable incidents. Basic Governance: high-level confirmations yes/no of whether basic environmental or sustainability policies exist. SMEs facing supplier questionnaires often use this standard to push back on overly broad corporate data audits, choosing to build a single reusable ESG Passport mapped strictly to VSME rules. Sources: <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a> and <a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>Recommendation 2025/1710</a></div></div>
          <div style={card}><div style={micro}>WHAT IS VSMECAP.COM?</div><div style={{fontWeight:800,marginTop:"6px"}}>The cap that stops spreadsheet chaos — reusable ESG Passport</div><div style={small}>vsmecap.com is VSMECAP — the VSME value chain cap platform. Proposed Workiva-compatible workflow concept that helps protected undertakings produce a single reusable ESG Passport mapped strictly to VSME B1-B11 and generate a legal refusal letter under Regulation 2026/1560 Annex II when a request exceeds the cap. Concept subject to technical review and Marketplace listing acceptance. Not affiliated with Workiva Inc.</div></div>
        </div>

        <h2 id="about" style={h2Style}>ABOUT US</h2>
        <div style={card}><div style={{fontWeight:800}}>Salil Patankar — Founder</div><div style={small}>VSMECAP, London, UK. Building the SME Sustainability Data Passport: a proposed Workiva-compatible VSME B1-B11 workflow concept. Trade mark filing pending, Classes 9 and 42. <br/><a href="https://www.linkedin.com/in/salil-patankar-94892a367" target="_blank" rel="noreferrer" style={link}>LinkedIn</a> — <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470</a> — <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560</a></div></div>

        <h2 id="contact" style={{marginTop:"88px",fontSize:"clamp(24px,6vw,36px)",fontWeight:900,scrollMarginTop:"140px",paddingTop:"12px",letterSpacing:"-0.02em"}}>CONTACT US — info@vsmecap.com</h2>
        <p style={small}>Email only: info@vsmecap.com. Form opens your email client. Phone used only for verification — not marketing.</p>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"20px",padding:"20px",maxWidth:"680px",background:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,.06)",boxSizing:"border-box"}}>
          <div style={{fontSize:"12px",fontWeight:700}}>Full Name *</div>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Company *</div>
          <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Email *</div>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Contact No *</div>
          <input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Interest *</div>
          <select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"14px",borderRadius:"12px",fontSize:"12px"}}><b>For Investment Deck:</b> Deck shared after brief verification call to confirm SEIS/EIS eligibility. All enquiries vetted for real person IDs and only upon signing NDA will you get the pack.</div>
          <button onClick={send} style={{marginTop:"14px",background:"#00C08B",color:"#fff",padding:"13px 16px",borderRadius:"12px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
        </div>

        <div style={{borderTop:"1px solid #e5e7eb",marginTop:"80px",paddingTop:"24px",fontSize:"11px",color:"#6b7280",lineHeight:"1.7"}}>
          <div style={{fontWeight:800,marginBottom:"8px"}}>© 2026 VSMECAP, London, United Kingdom — info@vsmecap.com</div>
          <div>Proposed Workiva-compatible workflow concept. Subject to technical review, partner approval and Workiva Marketplace listing acceptance. The concept is a workflow using Wdata tables and Chains orchestration via OAuth2 client credentials (tokenUrl https://api.workiva.com/oauth2/token). Not affiliated with Workiva Inc., EcoVadis or Persefoni. Workiva is a trade mark of Workiva Inc. No partnership, sponsorship or endorsement is claimed unless and until signed.</div>
          <div style={{marginTop:"8px"}}>Legal sources: Commission Recommendation (EU) 2025/1710 of 30 July 2025, OJ L 5.8.2025, on a voluntary sustainability reporting standard for SMEs based on EFRAG VSME. Delegated Regulation (EU) 2026/1560, Annex II value chain cap, entered into force on 24 September 2026. Directive (EU) 2026/470 (Omnibus I) of 24 February 2026, entered into force on 18 March 2026, narrows CSRD mandatory scope to undertakings exceeding net turnover of EUR 450,000,000 and an average of 1,000 employees — protected undertaking. ESRS 1, paragraph 67, indirect value chain requests permitted but capped to VSME Basic B1-B11, own-walls only, Scope 1+2.</div>
          <div style={{marginTop:"8px"}}>Illustrative market figures are based on an assumed population and reference ACV — a bottom-up scenario not independently validated. Detailed breakdown in NDA deck only. Reference cost model based on disclosed per-supplier pricing in selected public sources — illustrative, not universal. No fixed pricing on public site; contact for pricing based on supplier count and integration scope.</div>
          <div style={{marginTop:"8px"}}>Investment materials provided only after investor verification and NDA; not a public offer. No partner names disclosed until agreements signed. Trade mark filing pending, Classes 9 and 42. SEIS/EIS eligibility subject to verification. This website does not constitute legal advice. EFRAG VSME B1-B11: Basic Module — Disclosures B1, B2 and Basic Metrics B3-B11. C1-C9: Comprehensive Module, 3-year safe harbour.</div>
          <div style={{marginTop:"12px",display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a>
            <a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>2025/1710 EUR-Lex</a>
            <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>2026/470 EUR-Lex</a>
            <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>2026/1560 EUR-Lex</a>
          </div>
        </div>
      </div>
    </div>
  );
}
