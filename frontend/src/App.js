import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name} Company: ${form.company} Email: ${form.email} Phone: ${form.phone} Interest: ${form.interest} Requesting Pack NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request ${form.interest} ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",background:"#fff"};
  const inputS={width:"100%",padding:"11px",margin:"6px 0 12px",border:"1px solid #d1d5db",borderRadius:"10px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"6px 10px",borderRadius:"999px"};
  const small={fontSize:"12px",color:"#555",lineHeight:"1.5"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".06em",color:"#00C08B"};
  const navLink={fontSize:"12px",fontWeight:600,textDecoration:"none",color:"#111",marginRight:"14px"};
  const btnGreen={background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800};
  const btnBlack={background:"#111",color:"#fff",padding:"9px 14px",borderRadius:"10px",fontSize:"13px",textDecoration:"none",fontWeight:700};
  const btnWhite={border:"1px solid #111",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800,color:"#111"};
  const ticker="The cap that stops spreadsheet chaos. If you have less than 1000 employees + less than 450m EUR you are protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.";
  return(
    <div style={{fontFamily:"Inter,Arial",background:"#fff",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",cursor:"pointer",zIndex:99}}>UP</div>}
      <div style={{background:"#111",color:"#fff",padding:"10px 16px",fontSize:"13px",fontWeight:800,textAlign:"center"}}>{ticker}</div>
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee",position:"sticky",top:0,background:"#fff",zIndex:10,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
          <b>VSMECAP</b>
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
          <span style={badge}>EU 2026/1560 FY2027 READY</span>
          <a href="#contact" style={btnBlack}>Request Deck</a>
        </div>
      </div>
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"40px 24px 80px"}}>
        <div style={{fontSize:"11px",fontWeight:800}}>COMMISSION RECOMMENDATION EU 2025/1710 30 JULY 2025</div>
        <h1 style={{fontSize:"52px",lineHeight:".95",margin:"12px 0 0",fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.</h1>
        <div style={{marginTop:"18px",borderLeft:"4px solid #00C08B",padding:"14px 18px",background:"#f0fdf4",borderRadius:"0 12px 12px 0",maxWidth:"800px"}}>
          <div style={{fontSize:"22px",fontWeight:900,lineHeight:"1.2"}}>If you have less than 1000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div>
        </div>
        <p style={{maxWidth:"680px",color:"#555",marginTop:"20px",fontSize:"16px"}}>VSMECAP is Workiva-compatible VSME collection and evidence workflow - the cap-compliant shield, not a cascade collector. Right to refuse massive Excel under value chain cap Regulation EU 2026/1560 Annex II. 3-year safe harbor C1-C9.</p>
        <div style={{display:"flex",gap:"12px",marginTop:"20px",flexWrap:"wrap"}}>
          <a href="#contact" style={btnGreen}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com" style={btnWhite}>Become a Design Partner</a>
        </div>
        <h2 id="product" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PRODUCT Three tiers, one passport</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>T0 LARGE GT1000 OR GT500M</div><b>Proposed Workiva-compatible Premium Connector</b><div style={small}>Wdata tables, Chains, Green Amber Red. Subject to approval.</div></div>
          <div style={card}><div style={micro}>T1 MID 250-1000 PAID</div><b>GBP 30k platform + 99 / 199 / 299 per supplier</b><div style={small}>Reference cost model illustrative.</div></div>
          <div style={card}><div style={micro}>T2 SMALL LT250 FREE</div><b>Free reporter</b><div style={small}>11 modules B1-B11 free for own protection.</div></div>
        </div>
        <h2 id="whynow" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>WHY NOW</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>REGULATION</div><b>VSME law-adjacent</b><div style={small}>2025/1710 OJ L 5.8.2025, 2026/1560 Annex II cap, 2026/470 protected.</div></div>
          <div style={card}><div style={micro}>WHITESPACE</div><b>No branded Workiva VSME connector</b><div style={small}>As of 14 Oct 2026 none from Workiva, EcoVadis, Persefoni. 6-12 months.</div></div>
          <div style={card}><div style={micro}>MOAT</div><b>Workflow not connector</b><div style={small}>Workiva-native workflow plus UK construction wedge.</div></div>
        </div>
        <h2 id="market" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>MARKET Bottom-up</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>UNIVERSE</div><div style={{fontSize:"28px",fontWeight:800}}>49,600</div><div style={small}>43100 EU + 6500 UK.</div></div>
          <div style={card}><div style={micro}>TAM</div><div style={{fontSize:"28px",fontWeight:800}}>GBP 2.475bn</div><div style={small}>49600 x 49900 ACV.</div></div>
          <div style={card}><div style={micro}>SAM</div><div style={{fontSize:"28px",fontWeight:800}}>GBP 249.5m</div><div style={small}>5000 construction.</div></div>
          <div style={card}><div style={micro}>SOM</div><div style={{fontSize:"28px",fontWeight:800}}>GBP 798k</div><div style={small}>20 x 39900 ARR if signed.</div></div>
        </div>
        <h2 id="partners" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>PARTNERS</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>WORKIVA</div><b>Wdata Chains OAuth2</b><div style={small}>tokenUrl api.workiva.com/oauth2/token</div></div>
          <div style={card}><div style={micro}>ASSURANCE</div><b>Methodology review</b><div style={small}>Seeking partners not certification unless signed.</div></div>
          <div style={card}><div style={micro}>IMPLEMENTATION</div><b>Deploy and fund</b><div style={small}>Green rates for evidenced suppliers.</div></div>
        </div>
        <h2 id="business" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>BUSINESS MODEL</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"16px",marginTop:"16px"}}>
          <div style={card}><div style={micro}>BASIC 39900</div><div style={{fontSize:"22px",fontWeight:800}}>GBP 39900</div><div style={small}>30k + 100 x 99. LT250 AND LT50m AND 1-50 suppliers.</div></div>
          <div style={card}><div style={micro}>STANDARD 49900</div><div style={{fontSize:"22px",fontWeight:800}}>GBP 49900</div><div style={small}>30k + 100 x 199. 250-1000 OR 50-500m AND 51-150.</div></div>
          <div style={card}><div style={micro}>PREMIUM 89900</div><div style={{fontSize:"22px",fontWeight:800}}>GBP 89900</div><div style={small}>60k + 100 x 299. GT1000 OR GT500m AND 151 plus DPA SOC2.</div></div>
        </div>
        <h2 id="about" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>ABOUT US</h2>
        <p><b>Salil Patankar Founder</b></p>
        <p><a href="https://www.linkedin.com/in/salil-patankar-94892a367" target="_blank" rel="noreferrer" style={{color:"#0A66C2",fontWeight:700}}>LinkedIn - Salil Patankar</a></p>
        <h2 id="contact" style={{marginTop:"64px",fontSize:"28px",fontWeight:800}}>CONTACT US info at vsmecap.com</h2>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",maxWidth:"640px"}}>
          <div style={{fontSize:"12px",fontWeight:600}}>Name</div>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:600}}>Company</div>
          <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:600}}>Email</div>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:600}}>Contact No</div>
          <input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:600}}>Interest</div>
          <select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"12px",borderRadius:"8px",fontSize:"12px"}}><b>For Investment Deck:</b> All enquiries vetted for real person IDs and only upon signing NDA will you get the pack.</div>
          <button onClick={send} style={{marginTop:"12px",background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
        </div>
      </div>
    </div>
  );
}
