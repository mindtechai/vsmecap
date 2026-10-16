import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{const f=()=>setShowTop(window.scrollY>300);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone required.");return;}
    const body=`Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterest: ${form.interest}`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request - ${form.interest} - ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",background:"#fff"};
  const inputS={width:"100%",padding:"11px",margin:"6px 0 12px",border:"1px solid #d1d5db",borderRadius:"10px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"6px 10px",borderRadius:"999px"};
  const small={fontSize:"12px",color:"#555",lineHeight:"1.5"};
  const micro={fontSize:"11px",fontWeight:800,letterSpacing:".06em",color:"#00C08B"};
  const navLink={fontSize:"12px",fontWeight:600,textDecoration:"none",color:"#111",marginRight:"14px"};
  const ticker="The cap that stops spreadsheet chaos. If you have less than 1,000 employees + less than 450m EUR you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.  •  ";
  return(
    <div style={{fontFamily:"Inter,Arial",background:"#fff",color:"#111"}}>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .ticker{white-space:nowrap;overflow:hidden;background:#111;color:#fff;padding:8px 0;font-size:13px;font-weight:800} .ticker-inner{display:inline-block;animation:scroll 40s linear infinite}`}</style>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",cursor:"pointer",zIndex:99}}>↑</div>}
      <div className="ticker"><div className="ticker-inner"><span>{ticker}{ticker}{ticker}</span></div></div>
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
          <span style={badge}>EU 2026/1560 • FY2027 READY • LT1000 PROTECTED</span>
          <a href="#contact" style={{background:"#111",color:"#fff",padding:"9px 14px",borderRadius:"10px",fontSize:"13px",textDecoration:"none",fontWeight:700}}>Request Deck</a>
        </div>
      </div>
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"40px 24px 80px"}}>
        <div style={{fontSize:"11px",fontWeight:800}}>COMMISSION RECOMMENDATION (EU) 2025/1710 · 30 JULY 2025</div>
        <h1 style={{fontSize:"54px",lineHeight:".95",margin:"12px 0 0",fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.</h1>
        <div style={{marginTop:"18px",borderLeft:"4px solid #00C08B",padding:"14px 18px",background:"#f0fdf4",borderRadius:"0 12px 12px 0",maxWidth:"800px"}}>
          <div style={{fontSize:"22px",fontWeight:900,lineHeight:"1.2"}}>If you have less than 1,000 employees + less than EUR 450m you are a protected undertaking under Directive 2026/470. Large reporters cannot demand more than VSME Basic from you. Basic is Scope 1+2 only, your own walls.</div>
        </div>
        <p style={{maxWidth:"680px",color:"#555",marginTop:"20px",fontSize:"16px"}}>VSMECAP is Workiva-compatible VSME collection and evidence workflow — the cap-compliant shield, not a cascade collector.</p>
        <div style={{display:"flex",gap:"12px",marginTop:"20px",flexWrap:"wrap"}}>
          <a href="#contact" style={{background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",textDecoration:"none",fontWeight:800}}>Request Investment Deck</a>
          <a href="mailto:info@vsmecap.com" style
