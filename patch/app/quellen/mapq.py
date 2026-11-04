import json, re, math, collections, subprocess
T=json.load(open("meta.json"))
OV={"hydro-v02-8":"Umrechnungen der Druckeinheiten","hydro-v03-12":"Prinzip des Archimedes","hydro-v05-29":"Staudruck","bauko-v01-54":"Beispiel: Kombination im GZT","bauko-v02-35":"Schneeüberhang an der Traufe","bauko-v02-41":"Windlast: Vereinfachung bis 25 m Höhe","hydro-v05-16":"Bernoulli-Gleichung bei Gerinneströmung","hydro-v07-8":"Energiehöhe und Wassertiefe"}
for o in T:
    o["t"]=re.sub(r"\s+"," ",re.sub(r"[\uf000-\uf8ff]","",OV.get(o["id"],o["t"]))).strip()
# Fragen laden
js=subprocess.run(["node","-e",r'''
const fs=require("fs");const src=fs.readFileSync("/home/claude/app/fragen_v16.js","utf8");
eval(src+";globalThis.FR=FRAGEN;globalThis.KO=(typeof KORREKTUR!='undefined'?KORREKTUR:{});globalThis.EX=(typeof EXTRA!='undefined'?EXTRA:{});globalThis.AU=AUFGABEN;");
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
FR.forEach(q=>q.id=q.f+"-"+hash(q.q+(q.a?q.a[0]:"")+(q.steps?q.steps[0]:"")+(q.pairs?q.pairs[0][0]:"")));
FR.forEach(q=>{const x=EX[q.q]; if(x) Object.assign(q,x);}); FR.forEach(q=>{const x=KO[q.id]; if(x) Object.assign(q,x);});
console.log(JSON.stringify({q:FR.map(q=>({id:q.id,f:q.f,t:q.t,s:q.s,x:[q.q,(q.a||[])[0]||"",(q.steps||[]).join(" "),(q.pairs||[]).map(p=>p.join(" ")).join(" "),q.e].join(" ")})),a:AU.map(a=>({id:a.id,f:a.f,s:a.s,x:[a.titel,a.angabe,a.schritte.map(s=>s.f+" "+s.o[0][0]).join(" ")].join(" ")}))}));'''],capture_output=True,text=True,check=True).stdout
D=json.loads(js)
STOP=set("eine einer eines einem einen der die das den dem des und oder nicht wird werden wenn dann sind ist auch bei mit von vom zum zur für auf aus als wie was welche welcher welches wieder durch nach über unter sich sein seine ihre ihr dass kann können muss nur noch immer mehr sehr viel weil zwei drei beim also etwa diese dieser dieses jede jeder jedes hier dort ohne gilt gibt sieht heißt the and with that this from which for are not have will".split())
def toks(s):
    s=s.lower().replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")
    return [w for w in re.findall(r"[a-z][a-z0-9_]{3,}",s) if w not in STOP]
for o in T: o["tok"]=collections.Counter(toks(o["t"]+" "+o["t"]+" "+o["text"]))
df=collections.Counter(); [df.update(set(o["tok"])) for o in T]
N=len(T); idf={w:math.log(N/(1+c))+1 for w,c in df.items()}
def lec(f,s):
    s=s or ""
    m=re.search(r"Folie (\d+)",s)
    if f=="hydro": m2=re.search(r"Hydromechanik V0?(\d)",s); return ([f"hydro-v0{m2.group(1)}"] if m2 else None), m
    if f=="phys":
        if re.search(r"V01 Mechanik|Geradlinig",s): return ["phys-v01m"],m
        if "Einheiten" in s: return ["phys-v01e"],m
        m2=re.search(r"Physik V0?(\d)",s); return ([f"phys-v0{m2.group(1)}"] if m2 else None),m
    if f=="bsk":
        if "NaWi" in s: return ["bsk-nawi01"],m
        m2=re.search(r"Baustoffkunde V0?(\d)",s); return ([f"bsk-v0{m2.group(1)}"] if m2 else None),m
    if f=="bauko": m2=re.search(r"Baukonstruktion V0?(\d)",s); return ([f"bauko-v0{m2.group(1)}"] if m2 else None),m
    if f=="binf": return (["binf-v01"] if re.search(r"Block 1|V01",s) else None),m
    if f=="stat": return (["stat-kapitel1-2"] if re.search(r"Kapitel|Statistik V",s) else None),m
    if f=="dap": m2=re.search(r"(?:L|V)0?(\d)",s); return ([f"dap-v0{m2.group(1)}"] if m2 and "Exercise" not in s and "Übung" not in s else None),m
    return None,m
def assign(items):
    out={}
    for it in items:
        keys,folie=lec(it["f"],it["s"])
        cand=[o for o in T if o["f"]==it["f"] and (keys is None or o["key"] in keys)]
        if folie and keys:
            hit=[o for o in cand if o["nr"]==int(folie.group(1))]
            if hit: out[it["id"]]=[hit[0]["id"]]; continue
        qt=collections.Counter(toks(it["x"]))
        sc=[]
        for o in cand:
            s=sum(idf.get(w,0)*min(c,2)*min(o["tok"][w],3)**.5 for w,c in qt.items() if w in o["tok"])
            sc.append((s/ (1+math.log(1+sum(o["tok"].values())))**.5,o["id"]))
        sc.sort(reverse=True)
        thr=9 if keys else 12
        if sc and sc[0][0]>=thr:
            sel=[sc[0][1]]+[i for v,i in sc[1:2] if v>=max(thr,.85*sc[0][0])]
            out[it["id"]]=sel
    return out
QM=assign(D["q"]); AM=assign(D["a"])
inv=collections.defaultdict(list)
for qid,sl in list(QM.items())+list(AM.items()):
    for s in sl: inv[s].append(qid)
json.dump({"T":[{k:o[k] for k in ("id","key","f","datei","page","nr","t")} for o in T],"inv":inv},open("mapping.json","w"),ensure_ascii=False)
print(len(QM),"von",len(D["q"]),"Fragen mit Folie;",len(AM),"von",len(D["a"]),"Aufgaben;", sum(1 for o in T if inv.get(o["id"])),"von",len(T),"Folien verlinkt")
import random; random.seed(3)
qs={q["id"]:q for q in D["q"]}
byid={o["id"]:o for o in T}
for qid in random.sample(list(QM),25): print(qs[qid]["x"][:80].replace("\n"," "),"→",[byid[s]["t"][:45] for s in QM[qid]])
