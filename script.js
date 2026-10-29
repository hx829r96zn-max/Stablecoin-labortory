const $=i=>document.getElementById(i),f=(x,d=1)=>(x<0?"−":"")+Math.abs(x).toFixed(d),cs=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
document.querySelectorAll("#nav button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#nav button").forEach(x=>x.classList.toggle("on",x===b));document.querySelectorAll("section").forEach((s,i)=>s.classList.toggle("on",i==b.dataset.t));R()});
let shape=0,gen=true;
function bars(a,b,labels){const W=640,H=250,l=36,t=16,bt=34,mx=Math.max(8,...a.map(Math.abs),...b.map(Math.abs))*1.15,y=v=>t+(H-t-bt)*(1-(v+mx)/(2*mx)),z=y(0),gw=(W-l-10)/a.length;let s=`<svg viewBox="0 0 ${W} ${H}"><line x1="${l}" x2="${W-10}" y1="${z}" y2="${z}" stroke="${cs("--line")}" stroke-width="2"/>`;
[mx,-mx].forEach(v=>s+=`<text x="2" y="${y(v)+4}">${f(v,0)}</text>`);
a.forEach((v,i)=>{const x=l+gw*i+gw*.14,w=gw*.34;[[v,cs("--navy2"),0],[b[i],cs("--gold"),1]].forEach(([q,c,k])=>{const yy=y(q);s+=`<rect x="${x+k*(w+4)}" y="${Math.min(yy,z)}" width="${w}" height="${Math.max(2,Math.abs(yy-z))}" rx="3" fill="${c}"/><text x="${x+k*(w+4)+w/2}" y="${q>=0?yy-4:yy+13}" text-anchor="middle">${f(q)}</text>`});s+=`<text x="${l+gw*i+gw/2}" y="${H-10}" text-anchor="middle">${labels[i]}</text>`});return s+"</svg>"}
function r1(){const p=+$("i1p").value/100,w=+$("i1w").value/100,H=500*w,off=[[0,0,0,0],[-.15,.1,-.15,0],[-.3,-.25,-.1,0]][shape],ms=[1,2,3,4].map((q,i)=>Math.max(.05,1+p*q/4+off[i]));
$("v1p").textContent=(p>=0?"+":"−")+Math.abs(p*100)+"%";$("v1w").textContent=(w*100)+"%";
let prev=1,carry=1,mp=1,o=[],n=[],io=0,inn=0;ms.forEach(m=>{const c=Math.min(carry,m),imp=(carry-c)*H;carry=c;o.push(5-imp);io+=5-imp;const e=(m-mp)*H;mp=m;n.push(5+e);inn+=5+e});
const cl=v=>v<0?"neg":"";$("k1a").innerHTML=`<span class="${cl(io)}">${f(io)}</span>`;$("k1b").innerHTML=`<span class="${cl(inn)}">${f(inn)}</span>`;const eq=(inn-20)/200*100;$("k1c").innerHTML=`<span class="${cl(eq)}">${f(eq,0)}%</span>`;
$("c1").innerHTML=bars(o,n,["1분기","2분기","3분기","4분기"]);
$("t1").textContent=p>=0?"가격이 오르면 구 회계는 이익을 인식하지 못하지만, 신 회계는 평가이익이 그대로 순이익에 들어옵니다. 올라도 내려도 순이익이 크게 흔들립니다.":"구 회계는 하락 때만 손상차손을 쌓고 반등은 반영하지 않습니다. 신 회계는 하락과 반등이 매 분기 실적에 그대로 나타납니다."}
document.querySelectorAll("#shp button").forEach(b=>b.onclick=()=>{shape=+b.dataset.s;document.querySelectorAll("#shp button").forEach(x=>x.classList.toggle("on",x===b));r1()});
const vr=(w,sb,ss)=>1.645*Math.sqrt((w*sb)**2+((1-w)*ss)**2+2*.1*w*(1-w)*sb*ss)/2*100;
function r2(){const w=+$("i2w").value/100,sb=+$("i2s").value/100,ss=gen?.01:.04,cr=+$("i2c").value/100,dp=+$("i2d").value/100;
$("v2w").textContent=`${w*100}% : ${100-w*100}%`;$("v2s").textContent=(sb*100)+"%";$("v2c").textContent="−"+(cr*100)+"%";$("v2d").textContent="−"+f(dp*100)+"%";
const v=vr(w,sb,ss),st=w*100*cr+(1-w)*100*dp;$("k2a").textContent=f(v)+"억";$("k2b").innerHTML=`<span class="neg">−${f(st)}억</span>`;$("k2c").textContent=f(v/5*100,0)+"%";
const W=640,H=250,l=34,t=14,bt=30,mx=vr(1,sb,ss)*1.1,x=q=>l+(W-l-12)*q,y=u=>t+(H-t-bt)*(1-u/mx);let pts="";for(let i=0;i<=50;i++)pts+=`${x(i/50)},${y(vr(i/50,sb,ss))} `;
$("c2").innerHTML=`<svg viewBox="0 0 ${W} ${H}"><line x1="${l}" x2="${W-12}" y1="${y(0)}" y2="${y(0)}" stroke="${cs("--line")}" stroke-width="2"/>${5<mx?`<line x1="${l}" x2="${W-12}" y1="${y(5)}" y2="${y(5)}" stroke="${cs("--gold")}" stroke-width="2" stroke-dasharray="6 5"/><text x="${W-14}" y="${y(5)-5}" text-anchor="end">분기 영업이익 5억</text>`:""}<polyline points="${pts}" fill="none" stroke="${cs("--navy2")}" stroke-width="4" stroke-linecap="round"/><circle cx="${x(w)}" cy="${y(v)}" r="9" fill="${cs("--gold")}" stroke="${cs("--card")}" stroke-width="3"/><text x="${x(w)}" y="${y(v)-14}" text-anchor="middle" style="font-weight:700">${f(v)}억</text>${[0,.5,1].map(q=>`<text x="${x(q)}" y="${H-8}" text-anchor="middle">${q*100}%</text>`).join("")}<text x="${W/2}" y="${H-8}" text-anchor="middle">← 스테이블코인 · 비트코인 비중 →</text></svg>`}
$("pre").onclick=e=>{if(e.target.dataset.w){$("i2w").value=e.target.dataset.w;r2()}};$("gen").onclick=()=>{gen=!gen;$("gen").classList.toggle("on",gen);$("gen").textContent=gen?"GENIUS법 규제 반영 (스테이블 변동성 1%)":"규제 미반영 (스테이블 변동성 4%)";r2()};
const N=[["서방",90,150],["중국",320,40],["제재국",545,90],["중립 신흥",215,260],["걸프·BRICS+",545,230]];
const CP={"1":[.5,.9,.7,.9]},MB={"1,4":1,"1,3":.5,"3,4":.5,"1,2":.7,"2,4":.5};
function r3(){const s=+$("i3s").value/100,a=+$("i3a").value/100,b=+$("i3b").value/100;$("v3s").textContent=(s*100)+"%";$("v3a").textContent=(a*100)+"%";$("v3b").textContent=(b*100)+"%";
let svg=`<svg viewBox="0 0 640 300">`,tot=0,alt=0,ie=[],ce=[],nodes="";
for(let i=0;i<5;i++)for(let j=i+1;j<5;j++){const sw=(i==2||j==2)?1-s:1,cp=i==1||j==1?(i==0||j==0?.5:(i==2||j==2?.9:(i==3||j==3?.7:.9)))*a:0,mb=(MB[i+","+j]||0)*a,pen=(i==0&&j!=3)?1-.7*b:1;
const S=sw*pen,C=cp*pen,M=mb*pen,best=Math.max(S,C,M);tot+=best;if(Math.max(C,M)>S+.01)alt++;(i==0?ce:ie).push(best);
const col=best==S?cs("--navy2"):(best==M?cs("--teal"):cs("--gold"));svg+=`<line x1="${N[i][1]}" y1="${N[i][2]}" x2="${N[j][1]}" y2="${N[j][2]}" stroke="${col}" stroke-width="${1+best*8}" stroke-opacity="${.15+.85*best}" stroke-linecap="round"${best<.05?' stroke-dasharray="3 6"':''}/>`}
N.forEach(n=>nodes+=`<circle cx="${n[1]}" cy="${n[2]}" r="26" fill="${cs("--navy")}" stroke="${cs("--card")}" stroke-width="3"/><text x="${n[1]}" y="${n[2]+4}" text-anchor="middle" style="fill:#fff;font-weight:700">${n[0]}</text>`);
$("c3").innerHTML=svg+nodes+"</svg>";
const mean=x=>x.reduce((p,c)=>p+c,0)/x.length,conn=tot/10,dep=alt/10,gap=mean(ie)-mean(ce);
const m=(t,v)=>`<div class="m"><div class="t"><span>${t}</span><span>${f(v*100,0)}%</span></div><div class="bar"><i style="width:${Math.max(0,Math.min(1,v))*100}%"></i></div></div>`;
$("m3").innerHTML=m("전체 결제 연결성",conn)+m("대안망 우회 의존도(경로 비율)",dep)+m("진영화 지수(블록 내부 − 서방 연결)",gap);
$("vd").textContent=gap<.15?"공존에 가까움: 서방과 대안망이 비슷하게 연결돼요":gap<.35?"이중 트랙: 대안망이 보완 우회로로 작동해요":"진영화 위험: 블록 안은 촘촘하고 서방과는 끊겨요"}
$("sc").onclick=e=>{const v=e.target.dataset.v;if(!v)return;const [s,a,b]=v.split(",");$("i3s").value=s*100;$("i3a").value=a*100;$("i3b").value=b*100;document.querySelectorAll("#sc button").forEach(x=>x.classList.toggle("on",x===e.target));r3()};
function R(){r1();r2();r3()}
document.querySelectorAll("input[type=range]").forEach(i=>i.addEventListener("input",()=>{if(i.id.startsWith("i3"))document.querySelectorAll("#sc button").forEach(x=>x.classList.remove("on"));R()}));
matchMedia("(prefers-color-scheme:dark)").addEventListener("change",R);R();
