import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{window.scrollTo(0,0); const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name} Company: ${form.company} Email: ${form.email} Phone: ${form.phone} Interest: ${form.interest} Requesting Pack NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request ${form.interest} ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"20px",padding:"24px",background:"#fff",boxShadow:"0 6px 24px rgba(0,0,0,0.05)"};
  const inputS={width:"100%",padding:"12px",margin:"6px 0 14px",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"7px 12px",borderRadius:"999px"};
  const small={fontSize:"13px",color:"#4b5563",lineHeight:"1.7"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".08em",color:"#00C08B"};
  const navLink={fontSize:"13px",fontWeight:600,textDecoration:"none",color:"#111",marginRight:"18px"};
  const btnGreen={background:"#00C08B",color:"#fff",padding:"13px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,display:"inline-block"};
  const btnBlack={background:"#111",color:"#fff",padding:"10px 16px",borderRadius:"12px",fontSize:"13px",textDecoration:"none",fontWeight:700};
  const btnWhite={border:"1.5px solid #111",padding:"12px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,color:"#111",display:"inline-block"};
  const link={fontSize:"12px",fontWeight:700,color:"#0A66C2",textDecoration:"underline"};
  const h2Style={marginTop:"88px",fontSize:"32px",fontWeight:900,scrollMarginTop:"120px",letterSpacing:"-0.02em"};
  const ticker="The cap that stops spreadsheet chaos. If you have less than 1000 employees + less than 450m EUR you are protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.";
  return(
    <div id="top" style={{fontFamily:"Inter,Arial",background:"#fcfcfd",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"28px",right:"28px",width:"52px",height:"52px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",cursor:"pointer",zIndex:99}}>UP</div>}
      <div style={{background:"#00C08B",color:"#fff",padding:"11px 16px",fontSize:"13px",fontWeight:800,textAlign:"center"}}>{ticker}</div>
      <div style={{maxWidth:"1240px",margin:"0 auto",padding:"16px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#fff",position:"sticky",top:0,zIndex:20,borderBottom:"1px solid #eef0f3"}}>
        <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
          <a href="#top" style={{textDecoration:"none",color:"#111",fontWeight:900,fontSize:"18px"}}>VSMECAP™</a>
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
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={badge}>EU 2026/1560 FY2027 READY</span>
          <a href="#contact" style={btnBlack}>Request Deck</a>
        </div>
      </div>
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"64px 28px 40px"}}>
        <div style={{fontSize:"11px",fontWeight:800,letterSpacing:".12em",color:"#6b7280"}}>COMMISSION RECOMMENDATION EU 2025/1710 30 JULY 2025 OJ L 5.8.2025</div>
        <h1 style={{fontSize:"64px",lineHeight:".92",margin:"16px 0 0",fontWeight:900,letterSpacing:"-2px"}}>The cap that stops<br/>spreadsheet chaos.</h1>
        <div style={{marginTop:"22px",borderLeft:"5px solid #00C08B",padding:"18px 22px",background:"#f0fdf4",borderRadius:"0 16px 16px 0",maxWidth:"860px"}}>
          <div style={{fontSize:"24px",fontWeight:900,lineHeight:"1.25"}}>If you have less than 1000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div>
        </div>
        <p style={{maxWidth:"720px",color:"#4b5563",marginTop:"18px",fontSize:"17px",lineHeight:"1.6"}}>VSMECAP is Workiva-compatible VSME collection and evidence workflow - the cap-compliant shield, not a cascade collector. VSME B1-B11 is own walls only. Right to refuse massive Excel under value chain cap Regulation EU 2026/1560 Annex II. 3-year safe harbor for Comprehensive C1-C9.</p>
        <div style={{display:"flex",gap:"14px",marginTop:"24px",flexWrap:"wrap"}}>
          <a href="#contact" style={btnGreen}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com" style={btnWhite}>Become a Design Partner</a>
        </div>

        <h2 id="product" style={h2Style}>PRODUCT - Three tiers, one passport</h2>
        <p style={small}>A single reporting spine from the largest enterprises down to the smallest subcontractors - without illegal cascade collection. Basic Module B1-B11 own walls only per EFRAG VSME.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>T0 LARGE ENTERPRISE GT1000 OR GT EUR 500M</div><div style={{fontWeight:800,marginTop:"6px"}}>Proposed Workiva-compatible Premium Connector</div><div style={small}>Wdata tables vsmecap_reports, Chains orchestration, Bridge, OAuth2 client credentials tokenUrl https://api.workiva.com/oauth2/token. Green Amber Red evidence status. Subject to partner approval and Workiva Marketplace listing. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a></div></div>
          <div style={card}><div style={micro}>T1 MID-MARKET COLLECTOR 250-1000 PAID</div><div style={{fontWeight:800,marginTop:"6px"}}>GBP 30k platform + 99 / 199 / 299 per supplier</div><div style={small}>Produces own B1-B11 from own bills and HR - no subcontractor spreadsheets needed for Basic. Reference cost model based on disclosed per-supplier rating pricing in selected public sources - illustrative not universal. 2 hours vs days to complete. <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 Annex II cap</a></div></div>
          <div style={card}><div style={micro}>T2 SMALL SUBCONTRACTOR LT250 FREE</div><div style={{fontWeight:800,marginTop:"6px"}}>Free reporter 11 modules B1-B11</div><div style={small}>Free to use for own protection under Directive 2026/470, not because T1 needs it for B1-B11. T0 can ask T2 directly per ESRS 1 para 67 indirect value chain but capped to Basic only. <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470 protected undertaking</a></div></div>
        </div>

        <h2 id="whynow" style={h2Style}>WHY NOW - A dated regulation, a visible whitespace</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>REGULATION</div><div style={{fontWeight:800,marginTop:"6px"}}>VSME is now law-adjacent</div><div style={small}>Commission Recommendation EU 2025/1710 of 30 July 2025 published OJ L 5.8.2025. Based on EFRAG VSME draft. Delegated Regulation EU 2026/1560 Annex II value chain cap only - 24 Sept 2026 entered into force. Directive EU 2026/470 - more than 1000 employees + EUR 450m - protected undertaking - right to refuse beyond VSME Basic. <br/><a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>Recommendation 2025/1710 EUR-Lex</a> <br/><a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470 EUR-Lex</a> <br/><a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 EUR-Lex</a></div></div>
          <div style={card}><div style={micro}>WHITESPACE</div><div style={{fontWeight:800,marginTop:"6px"}}>No branded Workiva VSME connector</div><div style={small}>As of 14 Oct 2026 a public review did not identify a Workiva connector explicitly branded EFRAG VSME B1-B11 from Workiva, EcoVadis or Persefoni. Horizontal ESG products collect Scope 3 via cascade - illegal under new cap. Estimated whitespace 6-12 months. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME page</a> <br/><a href="https://xbrl.org/news/voluntary-sustainability-standard-and-value-chain-cap-enter-eu-law/" target="_blank" rel="noreferrer" style={link}>XBRL: Voluntary Standard + cap enters EU law</a></div></div>
          <div style={card}><div style={micro}>MOAT</div><div style={{fontWeight:800,marginTop:"6px"}}>Workflow not the connector</div><div style={small}>The moat is not the connector - it is the Workiva-native workflow plus assurance-readiness and the UK construction and infrastructure wedge which incumbents horizontal ESG products do not serve. Own walls evidence auto-generated from bills and HR. Legal refusal letter auto-generated when request exceeds Basic. <a href="https://finance.ec.europa.[STRIPPED 133 bytes]" target="_blank" rel="noreferrer" style={link}>EC CSRD page</a></div></div>
        </div>

        <h2 id="market" style={h2Style}>MARKET - Bottom-up, and labelled as such</h2>
        <p style={small}>Illustrative figures based on assumed population and ACV - presented for discussion not as independently validated research. Subject to validation.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>ILLUSTRATIVE UNIVERSE</div><div style={{fontSize:"30px",fontWeight:900}}>49,600</div><div style={small}>43,100 EU + 6,500 UK companies in the 250-1000 employee band per Omnibus scope reduction to GT1000 + GT EUR 450m under Directive 2026/470. <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470</a></div></div>
          <div style={card}><div style={micro}>TAM</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 2.475bn</div><div style={small}>49,600 x 49,900 ACV bottom-up scenario. Not independently validated. ACV based on platform 30k + 100 suppliers x 199 average.</div></div>
          <div style={card}><div style={micro}>SAM</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 249.5m</div><div style={small}>5,000 companies across construction, infrastructure and logistics - UK wedge where VSMECAP has domain.</div></div>
          <div style={card}><div style={micro}>SOM</div><div style={{fontSize:"30px",fontWeight:900}}>GBP 798k</div><div style={small}>20 x 39,900 = 798k contracted ARR if signed. Reference cost model based on disclosed per-supplier rating pricing - illustrative.</div></div>
        </div>

        <h2 id="partners" style={h2Style}>PARTNERS - Built to sit inside an ecosystem</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>WORKIVA-COMPATIBLE WORKFLOW</div><div style={{fontWeight:800}}>Wdata - Chains - OAuth2</div><div style={small}>Wdata tables vsmecap_reports, Chains orchestration, Bridge integration. OAuth2 client credentials tokenUrl https://api.workiva.com/oauth2/token. Proposed Workiva Marketplace connector subject to technical review, partner approval and listing acceptance. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME spec</a></div></div>
          <div style={card}><div style={micro}>ASSURANCE-READINESS PARTNERS</div><div style={{fontWeight:800}}>Methodology review</div><div style={small}>Seeking Big 4 and mid-tier audit firms for methodology review and implementation support. Not certification unless and until signed. Assurance-readiness for VSME B1-B11 evidence pack. <a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>Recommendation 2025/1710</a></div></div>
          <div style={card}><div style={micro}>IMPLEMENTATION & GREEN FINANCE</div><div style={{fontWeight:800}}>Deploy and fund</div><div style={small}>Seeking Workiva SI partners to deploy connector and lenders to provide cheaper Green rates for evidenced Green suppliers. T2 free reporter viral into supply base for own protection under cap. <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 cap</a></div></div>
        </div>
        <div style={{background:"#f8fafc",borderLeft:"4px solid #00C08B",padding:"14px 18px",marginTop:"16px",fontSize:"13px",borderRadius:"0 12px 12px 0"}}>We are not naming existing partners until agreements are signed. If you are a Workiva SI, an audit firm or a lender, we need to partner with you.</div>

        <h2 id="business" style={h2Style}>BUSINESS MODEL - Simple platform-plus-per-supplier pricing</h2>
        <p style={small}>A separate product line priced per deployment. Reference model for illustration - final ACV subject to scope, integration and assurance-readiness. Not a claim of being universally cheaper.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>BASIC GBP 39,900</div><div style={{fontSize:"26px",fontWeight:900}}>GBP 39,900</div><div style={small}>GBP 30k platform + 100 x 99. Qualifies if LT250 employees AND turnover LT EUR 50m AND 1-50 suppliers. VSME B1-B11 own walls only - Scope 1+2. <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>B1-B11 EFRAG</a></div></div>
          <div style={card}><div style={micro}>STANDARD GBP 49,900</div><div style={{fontSize:"26px",fontWeight:900}}>GBP 49,900</div><div style={small}>GBP 30k platform + 100 x 199. Qualifies if 250-1000 employees OR turnover EUR 50-500m AND 51-150 suppliers. Includes legal refusal letter generator under 2026/1560 Annex II.</div></div>
          <div style={card}><div style={micro}>PREMIUM GBP 89,900</div><div style={{fontSize:"26px",fontWeight:900}}>GBP 89,900</div><div style={small}>GBP 60k platform + 100 x 299. Qualifies if GT1000 employees OR turnover GT EUR 500m AND 151+ suppliers. DPA, SOC 2. Value chain cap compliant: T0 to T2 direct allowed per ESRS 1 para 67 but capped to Basic only.</div></div>
        </div>

        <h2 id="about" style={h2Style}>ABOUT US</h2>
        <div style={card}><div style={{fontWeight:800}}>Salil Patankar - Founder</div><div style={small}>VSMECAP, London, UK. Building the SME Sustainability Data Passport: a Workiva-native VSME B1-B11 collection and evidence workflow. VSME is the wedge; the passport is the company. Trademark filing pending, Classes 9 and 42. CSRD scope narrowed by Omnibus Directive 2026/470 to GT1000 employees + GT EUR 450m turnover - creating protected undertaking right to refuse beyond VSME Basic per Regulation 2026/1560 Annex II. <br/><a href="https://www.linkedin.com/in/salil-patankar-94892a367" target="_blank" rel="noreferrer" style={link}>LinkedIn Salil Patankar</a> - <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470</a> - <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560</a> - <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a></div></div>

        <h2 id="contact" style={{marginTop:"88px",fontSize:"36px",fontWeight:900,scrollMarginTop:"140px",paddingTop:"12px",letterSpacing:"-0.02em"}}>CONTACT US - info@vsmecap.com</h2>
        <p style={small}>Email only: info@vsmecap.com. Tell us who you are and what you would like to discuss - the form opens your email client addressed to us. Phone used only for verification - not marketing.</p>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"20px",padding:"24px",maxWidth:"680px",background:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,.06)"}}>
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
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"14px",borderRadius:"12px",fontSize:"12px"}}><b>For Investment Deck:</b> Deck is shared after a brief verification call to confirm SEIS/EIS eligibility and suitability. All enquiries shall be vetted for real person IDs and only upon signing NDA will you get the pack. Phone used only for verification - not marketing.</div>
          <button onClick={send} style={{marginTop:"14px",background:"#00C08B",color:"#fff",padding:"13px 16px",borderRadius:"12px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
          <div style={{fontSize:"11px",color:"#888",marginTop:"8px"}}>Submitting opens your email client with a pre-filled message to info@vsmecap.com.</div>
        </div>

        <div style={{borderTop:"1px solid #e5e7eb",marginTop:"80px",paddingTop:"24px",fontSize:"11px",color:"#6b7280",lineHeight:"1.7"}}>
          <div style={{fontWeight:800,marginBottom:"8px"}}>© 2026 VSMECAP, London, UK - info@vsmecap.com</div>
          <div>Proposed Workiva-compatible connector subject to technical review, partner approval and listing acceptance. The connector is a proposed workflow using Wdata tables and Chains orchestration via OAuth2 client credentials tokenUrl https://api.workiva.com/oauth2/token.</div>
          <div style={{marginTop:"8px"}}>Legal sources: Commission Recommendation EU 2025/1710 of 30 July 2025 OJ L 5.8.2025 on voluntary sustainability reporting standard for SMEs based on EFRAG VSME. Delegated Regulation EU 2026/1560 Annex II value chain cap entered into force 24 Sept 2026 OJ L. Directive EU 2026/470 Omnibus I of 24 Feb 2026 entered into force 18 Mar 2026 - narrows CSRD mandatory scope to undertakings exceeding net turnover EUR 450,000,000 and average 1000 employees - protected undertaking. ESRS 1 para 67 indirect value chain allowed but capped to VSME Basic B1-B11 own walls Scope 1+2 only.</div>
          <div style={{marginTop:"8px"}}>Illustrative TAM based on assumed population 49,600 and ACV 49,900 - bottom-up scenario not independently validated. SAM 5,000 companies across construction infrastructure logistics. SOM 20 x 39,900 = 798k contracted ARR if signed. Pricing is reference model for illustration - final ACV subject to scope integration and assurance-readiness - not a claim of being universally cheaper. Reference cost model based on disclosed per-supplier rating pricing in selected public sources - illustrative not universal.</div>
          <div style={{marginTop:"8px"}}>Investment materials provided only after investor verification + NDA - not a public offer. No partner names disclosed until agreements signed. Trademark filing pending Classes 9 and 42. SEIS/EIS eligibility subject to verification. This website does not constitute legal advice. EFRAG VSME B1-B11 Basic Module Disclosures B1 B2 and Basic Metrics B3-B11. C1-C9 Comprehensive Module 3-year safe harbor.</div>
          <div style={{marginTop:"12px",display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href="https://www.efrag.org/en/sustainability-reporting/vsme" target="_blank" rel="noreferrer" style={link}>EFRAG VSME</a>
            <a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj" target="_blank" rel="noreferrer" style={link}>Recommendation 2025/1710 EUR-Lex</a>
            <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noreferrer" style={link}>Directive 2026/470 EUR-Lex</a>
            <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noreferrer" style={link}>Regulation 2026/1560 EUR-Lex</a>
            <a href="https://finance.ec.europa.[STRIPPED 133 bytes]" target="_blank" rel="noreferrer" style={link}>EC CSRD page</a>
            <a href="https://xbrl.[STRIPPED 76 bytes]" target="_blank" rel="noreferrer" style={link}>XBRL cap law</a>
          </div>
        </div>
      </div>
    </div>
  );
}
