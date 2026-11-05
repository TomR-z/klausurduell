const {chromium}=require('/home/claude/app/node_modules/playwright-core');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p=await b.newPage({viewport:{width:1920,height:1080}});
const T=JSON.parse(fs.readFileSync('timing.json'));
await p.addInitScript(t=>{window.TIMING=t;},T);
await p.goto('file://'+process.cwd()+'/stage.html');await p.waitForTimeout(300);
const which=process.argv.slice(2).map(Number);
for(const i of (which.length?which:T.map((_,i)=>i))){ for(const f of [0.5, 1.0]){ const t=T[i].dur*f; await p.evaluate(([i,t])=>window.show(i,t),[i,t]); await p.screenshot({path:`prev_${i}_${f}.jpg`,type:'jpeg',quality:80}); } }
await b.close()})();
