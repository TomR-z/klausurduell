const {chromium}=require('/home/claude/app/node_modules/playwright-core');const fs=require('fs');
const MODE=process.argv[2]||'land'; const VW=MODE==='land'?1920:1080, VH=MODE==='land'?1080:1920;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p=await b.newPage({viewport:{width:VW,height:VH}});
const T=JSON.parse(fs.readFileSync('timing.json'));
await p.addInitScript(([t,m])=>{window.TIMING=t;window.MODE=m;},[T,MODE]);
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.cwd()+'/stage.html');await p.waitForTimeout(300);
fs.mkdirSync('prev',{recursive:true});
const which=process.argv.slice(3).map(Number);
for(const i of (which.length?which:T.map((_,i)=>i))){ for(const f of [0.45, 1.0]){ const t=T[i].dur*f; await p.evaluate(([i,t])=>window.show(i,t),[i,t]); await p.screenshot({path:`prev/${MODE}_${i}_${f}.jpg`,type:'jpeg',quality:70}); } }
console.log('errs',errs); await b.close()})();
