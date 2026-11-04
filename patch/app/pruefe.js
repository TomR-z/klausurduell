/* Prüft die Fragenbank vor jedem Patch: node pruefe.js fragen.js figs.js */
const fs=require('fs');
eval(fs.readFileSync(process.argv[2],'utf8')+';globalThis.R={FRAGEN,THEMEN,AUFGABEN:typeof AUFGABEN!=="undefined"?AUFGABEN:[],EXTRA:typeof EXTRA!=="undefined"?EXTRA:{},K:typeof KORREKTUR!=="undefined"?KORREKTUR:{}}');
eval(fs.readFileSync(process.argv[3],'utf8')+';globalThis.FIGS=FIG');
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
const F=R.FRAGEN, err=[];
F.forEach(q=>q.id=q.f+"-"+hash(q.q+(q.a?q.a[0]:"")+(q.steps?q.steps[0]:"")+(q.pairs?q.pairs[0][0]:"")));
F.forEach(q=>{const x=R.EXTRA[q.q]; if(x) Object.assign(q,x);});
const ids=new Set(F.map(q=>q.id)); if(ids.size!==F.length) err.push('doppelte Frage-IDs');
const aidsK=new Set(R.AUFGABEN.map(a=>a.id)); Object.keys(R.K).forEach(id=>{ if(!ids.has(id)&&!aidsK.has(id)) err.push('KORREKTUR ohne Frage: '+id); });
F.forEach(q=>{const x=R.K[q.id]; if(x) Object.assign(q,x);});
const dup=a=>new Set(a).size<a.length;
F.forEach(q=>{
  if(q.typ==='mc'&&(q.a.length!==4||dup(q.a))) err.push('Auswahl: '+q.q);
  if(q.typ==='pair'&&(dup(q.pairs.map(p=>p[0]))||dup(q.pairs.map(p=>p[1])))) err.push('Zuordnen doppelt: '+q.q);
  if(q.typ==='ord'&&dup(q.steps)) err.push('Reihenfolge doppelt: '+q.q);
  if(!q.e||!q.s) err.push('ohne Erklärung/Quelle: '+q.q);
  if(q.v&&!FIGS[q.v]) err.push('Skizze fehlt: '+q.v);
  if(q.ev&&!FIGS[q.ev]) err.push('Erklär-Skizze fehlt: '+q.ev);
  if(!R.THEMEN[q.f+'|'+q.t]) err.push('Thema ohne Text: '+q.f+'|'+q.t);
});
const aids=new Set(R.AUFGABEN.map(a=>a.id)); if(aids.size!==R.AUFGABEN.length) err.push('doppelte Aufgaben-IDs');
R.AUFGABEN.forEach(a=>{ if(a.v&&!FIGS[a.v]) err.push('Skizze fehlt: '+a.v);
  a.schritte.forEach((s,i)=>{ if(s.o.length!==4||dup(s.o.map(o=>o[0]))||s.o.some(o=>!o[1])) err.push(`Aufgabe ${a.id} Schritt ${i+1}`); }); });
console.log(`${F.length} Fragen · ${R.AUFGABEN.length} Aufgaben · ${Object.keys(R.K).length} Korrekturen`);
if(err.length){ console.log('FEHLER:\n'+err.join('\n')); process.exit(1); } else console.log('Prüfung ok');
