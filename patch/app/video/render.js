const {chromium}=require('/home/claude/app/node_modules/playwright-core');const fs=require('fs');const crypto=require('crypto');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p=await b.newPage({viewport:{width:1920,height:1080}});
const T=JSON.parse(fs.readFileSync('timing.json'));
await p.addInitScript(t=>{window.TIMING=t;},T);
await p.goto('file://'+process.cwd()+'/stage.html');await p.waitForTimeout(400);
fs.mkdirSync('frames',{recursive:true});
const only=process.argv.slice(2).map(Number);
for(let i=0;i<T.length;i++){ if(only.length && !only.includes(i)) continue;
  const D=T[i].dur+0.7, N=Math.round(D*30); let last=null, list=[], cnt=0, hold=0, cur=null;
  for(let f=0;f<N;f++){ const t=f/30;
    const h=await p.evaluate(([i,t])=>{window.show(i,t);return document.getElementById('stage').innerHTML;},[i,t]);
    const key=crypto.createHash('md5').update(h).digest('hex');
    if(key!==last){ if(cur){ list.push([cur,hold]); } cur=`frames/s${i}_${String(cnt).padStart(5,'0')}.jpg`; await p.screenshot({path:cur,type:'jpeg',quality:92}); cnt++; hold=1; last=key; } else hold++;
  }
  list.push([cur,hold]);
  let txt=''; for(const [fn,h] of list){ txt+=`file '${process.cwd()}/${fn}'\nduration ${(h/30).toFixed(5)}\n`; } txt+=`file '${process.cwd()}/${list[list.length-1][0]}'\n`;
  fs.writeFileSync(`frames/s${i}.txt`,txt); console.log('Szene',i,'Frames',N,'Bilder',cnt);
}
await b.close()})();
