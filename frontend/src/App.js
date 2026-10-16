import React, { useState, useEffect } from "react";
export default function App(){
  const [showTop,setShowTop]=useState(false);
  const [form,setForm]=useState({name:"",company:"",email:"",phone:"",interest:"Investor"});
  useEffect(()=>{const h=()=>setShowTop(window.scrollY>300);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[]);
  const send=()=>{
    if(!form.name||!form.email||!form.phone) return alert("Full Name, Email and Phone are required for verification.");
    const body=`Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterest: ${form.interest}%0D%0A%0D%0ARequesting Investment Pack - I understand vetting for real person ID and NDA is required.`;
    window.location.href=`mailto:info@vsmecap.com?subject=VSMECAP Deck Request - ${form.interest} - ${form.name}&body=${body}`;
  };
  const card={border:"1px solid #e5e7eb",borderRadius:16,padding:20,background:"#fff"};
  const cardB={border:"2px solid #111",borderRadius:16,padding:20,background:"#fff"};
  const badge={fontSize:10,fontWeight:800,border:"1px solid #00C08B",color:"#00C08B",padding:"6px 10px",borderRadius:999};
  const inputS={width:"100%",padding:11,margin:"6px 0 12px",border:"1px solid #d1d5db",borderRadius:10,fontSize:14};
  return (
    <div style={{fontFamily:"Inter,Arial,sans-serif",background:"#fff",color:"#111"}}>
      {showTop && <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:24,right:24,width:48,height:48,borderRadius:"50%",background:"#111",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,cursor:"pointer",zIndex:99}}>↑</div>}
      <div style={{maxWidth:1120,margin:"0 auto",padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee",position:"sticky",top:0,background:"#fff",zIndex:10}}><b>vsmecap.com</b><span style={badge}>EU 2026/1560 • FY2027 READY</span></div>
      <div style={{maxWidth:1120,margin:"0 auto",padding:"40px 24px 80px"}}>
        <h1 style={{fontSize:62,lineHeight:.9,margin:0,fontWeight:900}}>The cap that stops<br/>spreadsheet chaos.<br/><span style={{color:"#00C08B"}}>Built for the 1,000-employee cap.</span></h1>
        <p style={{maxWidth:660,color:"#555",marginTop:20,fontSize:18}}>If you have &lt;1,000 employees you are a <b>protected undertaking</b> under Directive 2026/470. Large reporters cannot demand more than <b>VSME Basic B1-B11 — own bills/HR only, Scope 1+2</b>. No subcontractor spreadsheets for B1-B11. <b>VSMECAP is the cap-compliant shield, not a cascade collector.</b></p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:32}}>
          <div style={{...card,background:"#fafafa"}}><div style={{fontSize:11,fontWeight:800,color:"#999"}}>OLD ILLEGAL — BANNED</div><b>T0→T1→must collect T2→forward — banned</b><br/><span style={{fontSize:12,color:"#666"}}>T1 does NOT need T2 data for own B1-B11. Scope 3 excluded.</span></div>
          <div style={cardB}><div style={{fontSize:11,fontWeight:800}}>NEW CAP-COMPLIANT</div><b>T0→T1 capped and T0→T2 capped (indirect allowed per ESRS 1 para 67)</b><br/><span style={{fontSize:12}}>T1 produces own B1-B11 + auto refusal letter. Sponsors free tool to T2 for T2's own protection.</span></div>
        </div>

        <h2 style={{marginTop:48}}>Three tiers, one passport</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>T0 LARGE &gt;1000 OR &gt;€500m</div><b>Proposed Workiva-compatible</b><br/><span style={{fontSize:12}}>Wdata, Chains, Green/Amber/Red. Subject to approval.</span></div>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>T1 MID 250-1000</div><b>£30k platform + £99/£199/£299</b><br/><span style={{fontSize:12}}>Reference cost model based on disclosed per-supplier pricing — illustrative, not universal.</span></div>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>T2 SMALL &lt;250 FREE</div><b>Free reporter</b><br/><span style={{fontSize:12}}>11 modules B1-B11. Free for own protection.</span></div>
        </div>

        <h2 style={{marginTop:48}}>Simple platform-plus-per-supplier pricing</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16,marginTop:12}}>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>BASIC £39,900</div><span style={{fontSize:12}}>£30k + 100x£99. Qualifies if &lt;250 AND &lt;€50m AND 1-50 suppliers.</span></div>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>STANDARD £49,900</div><span style={{fontSize:12}}>£30k + 100x£199. Qualifies if 250-1000 OR €50-500m AND 51-150 suppliers.</span></div>
          <div style={card}><div style={{fontSize:11,fontWeight:800,color:"#00C08B"}}>PREMIUM £89,900</div><span style={{fontSize:12}}>£60k + 100x£299. Qualifies if &gt;1000 OR &gt;€500m AND 151+ suppliers. DPA SOC2.</span></div>
        </div>
        <div style={{background:"#f8fafc",borderLeft:"3px solid #00C08B",padding:12,marginTop:12,fontSize:13,borderRadius:"0 8px 8px 0"}}>Pricing is reference model for illustration — final ACV subject to scope, integration and assurance-readiness.</div>

        <h2 style={{marginTop:48}}>About</h2>
        <p><b>Salil Patankar — Founder, VSMECAP London UK</b></p>
        <a href="https:[STRIPPED 590 bytes]

        <h2>Contact — Investor Deck gated</h2>
        <div style={{border:"1px solid #e5e7eb",borderRadius:16,padding:20,maxWidth:640}}>
          <label><span style={{fontSize:12,fontWeight:600}}>Full Name *</span><br/><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:12,fontWeight:600}}>Company *</span><br/><input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:12,fontWeight:600}}>Email *</span><br/><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:12,fontWeight:600}}>Phone No *</span><br/><input placeholder="+44..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputS}/></label>
          <label><span style={{fontSize:12,fontWeight:600}}>Interest *</span><br/><select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} style={inputS}><option>Investor</option><option>Partner</option><option>Customer</option></select></label>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:12,borderRadius:8,fontSize:12}}><b>For Investment Pack:</b> All enquiries shall be vetted for real person IDs and only upon signing NDA will you get the pack. Deck is shared after verification call for SEIS/EIS eligibility. Phone used only for verification — not marketing.</div>
          <button onClick={send} style={{marginTop:12,background:"#00C08B",color:"#fff",padding:"11px 16px",borderRadius:10,border:"none",fontWeight:800,cursor:"pointer",width:"100%"}}>Send via Email</button>
        </div>
        <div style={{borderTop:"1px solid #eee",marginTop:64,paddingTop:16,fontSize:11,color:"#888"}}>© 2026 VSMECAP London UK · info@vsmecap.com · Proposed connector subject to review. Investment materials only after verification + NDA — not public offer.</div>
      </div>
    </div>
  );
}
