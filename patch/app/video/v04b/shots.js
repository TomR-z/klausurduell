const {chromium}=require('/home/claude/app/node_modules/playwright-core');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p=await b.newPage({viewport:{width:1920,height:1080}});
const T=JSON.parse(fs.readFileSync('timing.json'));
await p.addInitScript(([t])=>{window.TIMING=t;},[T]);
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+process.cwd()+'/stage.html');await p.waitForTimeout(300);
fs.mkdirSync('shots',{recursive:true});
const which=process.argv.slice(2).map(Number);
for(const i of (which.length?which:T.map((_,i)=>i))){ const st=T[i].starts;
  for(let k=0;k<st.length;k++){ const end=(k+1<st.length?st[k+1]:T[i].dur); const tt=st[k]+(end-st[k])*0.93;
    try{ await p.evaluate(([i,t])=>window.show(i,t),[i,tt]); }catch(e){ errs.push(`s${i}k${k}: `+e.message); }
    await p.screenshot({path:`shots/s${String(i).padStart(2,'0')}_${k}.jpg`,type:'jpeg',quality:60}); } }
console.log('errs',errs); await b.close()})();
