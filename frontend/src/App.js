import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{window.scrollTo(0,0); const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name} Company: ${form.company} Email: ${form.email} Phone: ${form.phone} Interest: ${form.interest}`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request ${form.interest} ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"20px",padding:"22px",background:"#fff",boxShadow:"0 4px 20px rgba(0,0,0,0.04)"};
  const inputS={width:"100%",padding:"12px",margin:"6px 0 14px",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"7px 12px",borderRadius:"999px"};
  const small={fontSize:"13px",color:"#555",lineHeight:"1.6"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".08em",color:"#00C08B"};
  const navLink={fontSize:"13px",fontWeight:600,textDecoration:"none",color:"#111",marginRight:"18px"};
  const btnGreen={background:"#00C08B",color:"#fff",padding:"13px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,display:"inline-block"};
  const btnBlack={background:"#111",color:"#fff",padding:"10px 16px",borderRadius:"12px",fontSize:"13px",textDecoration:"none",fontWeight:700};
  const btnWhite={border:"1.5px solid #111",padding:"12px 20px",borderRadius:"12px",textDecoration:"none",fontWeight:800,color:"#111",display:"inline-block"};
  const ticker="The cap that stops spreadsheet chaos. If you have less than 1000 employees + less than 450m EUR you are protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.";
  return(
    <div id="top" style={{fontFamily:"Inter,Arial",background:"#fcfcfd",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"28px",right:"28px",width:"52px",height:"52px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",cursor:"pointer",zIndex:99}}>UP</div>}
      <div style={{background:"#00C08B",color:"#fff",padding:"11px 16px",fontSize:"13px",fontWeight:800,textAlign:"center"}}>{ticker}</div>
      <div style={{maxWidth:"1240px",margin:"0 auto",padding:"16px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#fff",position:"sticky",top:0,zIndex:10,borderBottom:"1px solid #eef0f3"}}>
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
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"64px 28px 80px"}}>
        <div style={{fontSize:"11px",fontWeight:800,letterSpacing:".12em",color:"#6b7280"}}>COMMISSION RECOMMENDATION EU 2025/1710 30 JULY 2025</div>
        <h1 style={{fontSize:"64px",lineHeight:".92",margin:"16px 0 0",fontWeight:900,letterSpacing:"-2px"}}>The cap that stops<br/>spreadsheet chaos.</h1>
        <div style={{marginTop:"22px",borderLeft:"5px solid #00C08B",padding:"18px 22px",background:"#f0fdf4",borderRadius:"0 16px 16px 0",maxWidth:"860px"}}>
          <div style={{fontSize:"24px",fontWeight:900,lineHeight:"1.25"}}>If you have less than 1000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div>
        </div>
        <div style={{display:"flex",gap:"14px",marginTop:"28px",flexWrap:"wrap"}}>
          <a href="#contact" style={btnGreen}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com" style={btnWhite}>Become a Design Partner</a>
        </div>
        <h2 id="product" style={{marginTop:"80px",fontSize:"32px",fontWeight:800}}>PRODUCT Three tiers, one passport</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"18px",marginTop:"18px"}}>
          <div style={card}><div style={micro}>T0 LARGE GT1000 OR GT500M</div><div style={{fontWeight:800,marginTop:"6px"}}>Proposed Workiva-compatible Premium Connector</div><div style={small}>Wdata tables, Chains, Green Amber Red.</div></div>
          <div style={card}><div style={micro}>T1 MID 250-1000 PAID</div><div style={{fontWeight:800,marginTop:"6px"}}>GBP 30k platform + 99 / 199 / 299 per supplier</div><div style={small}>Reference cost model illustrative.</div></div>
          <div style={card}><div style={micro}>T2 SMALL LT250 FREE</div><div style={{fontWeight:800,marginTop:"6px"}}>Free reporter 11 modules B1-B11</div><div style={small}>Free for own protection.</div></div>
        </div>
        <h2 id="contact" style={{marginTop:"80px",fontSize:"32px",fontWeight:800}}>CONTACT US - info@vsmecap.com</h2>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"20px",padding:"24px",maxWidth:"680px",background:"#fff"}}>
          <div style={{fontSize:"12px",fontWeight:700}}>Name *</div>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Email *</div>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS} />
          <div style={{fontSize:"12px",fontWeight:700}}>Contact No *</div>
          <input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS} />
          <button onClick={send} style={{marginTop:"14px",background:"#00C08B",color:"#fff",padding:"13px 16px",borderRadius:"12px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
        </div>
      </div>
    </div>
  );
}
