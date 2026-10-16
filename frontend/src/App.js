import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{
    const h=()=>setShowTop(window.scrollY>300);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone){alert("Full Name, Email and Phone are required.");return;}
    const body=`Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterest: ${form.interest}%0D%0A%0D%0ARequesting Pack - I understand vetting + NDA required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=Deck Request - ${form.interest} - ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",background:"#fff"};
  const cardB={border:"2px solid #111",borderRadius:"16px",padding:"20px",background:"#fff"};
  const inputS={width:"100%",padding:"11px",margin:"6px 0 12px",border:"1px solid #d1d5db",borderRadius:"10px",fontSize:"14px"};
  const badge={fontSize:"10px",fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"6px 10px",borderRadius:"999px"};
  return(
    <div style={{fontFamily:"Inter,Arial",background:"#fff",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",cursor:"pointer",zIndex:99}}>↑</div>}
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee",position:"sticky",top:0,background:"#fff",zIndex:10}}><b>vsmecap.com</b><span style={badge}>EU 2026/1560 READY</span></div>
      <div style={{maxWidth:"1120px",margin:"0 auto",padding:"40px 24px 80px"}}>
        <h1 style={{fontSize:"62px",lineHeight:".9",margin:0,fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#00C08B"}}>Built for 1000 cap.</span></h1>
        <p style={{maxWidth:"660px",color:"#555",marginTop:"20px",fontSize:"18px"}}>If you have &lt;1000 employees you are protected undertaking under 2026/470. Cannot demand more than VSME Basic B1-B11 own bills/HR only. VSMECAP is shield not cascade.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginTop:"32px"}}>
          <div style={{border:"1px solid #eee",background:"#fafafa",borderRadius:"16px",padding:"20px"}}><b>OLD ILLEGAL</b><br/>T0 to T1 must collect T2 forward - banned</div>
          <div style={cardB}><b>NEW CAP-COMPLIANT</b><br/>T0 to T1 capped and T0 to T2 capped indirect allowed ESRS 1 para 67</div>
        </div>
        <h2 style={{marginTop:"48px"}}>Pricing</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"16px",marginTop:"12px"}}>
          <div style={card}>BASIC 39900 - Qualifies if less than 250 AND less than 50m AND 1-50 suppliers</div>
          <div style={card}>STANDARD 49900 - Qualifies if 250-1000 OR 50-500m AND 51-150</div>
          <div style={card}>PREMIUM 89900 - Qualifies if more than 1000 OR more than 500m AND 151 plus DPA SOC2</div>
        </div>
        <h2 style={{marginTop:"48px"}}>Contact - Investor Deck gated</h2>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",maxWidth:"640px"}}>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Full Name *</span><br/><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Company *</span><br/><input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Email *</span><br/><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Phone No *</span><br/><input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:"12px",fontWeight:600}}>Interest *</span><br/><select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select></label>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"12px",borderRadius:"8px",fontSize:"12px"}}><b>For Investment Pack:</b> All enquiries shall be vetted for real person IDs and only upon signing NDA will you get the pack. Phone used only for verification.</div>
          <button onClick={send} style={{marginTop:"12px",background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:"10px",border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
        </div>
      </div>
    </div>
  );
}
