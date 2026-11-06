# baut timing.json aus vorhandenen Audios (ohne neue Anfragen); fehlende Szenen bekommen Platzhalter
import json, subprocess, os
exec(open("script.py").read())
meta=[]
for i,(title,sents) in enumerate(S):
    spoken=[sp or cap.replace("*","") for cap,sp in sents]; out=f"audio/s{i:02d}.json"
    if all(not sp for _,sp in sents):  # stumme Szene
        meta.append({"title":title,"caps":[c for c,_ in sents],"starts":[0.2],"dur":4.0,"silent":True}); continue
    if not os.path.exists(out): meta.append({"title":title,"caps":[c for c,_ in sents],"starts":[0]*len(sents),"dur":1,"missing":True}); continue
    r=json.load(open(out)); assert r["_text"]==" ".join(spoken), i
    open(f"audio/s{i:02d}.mp3","wb").write(__import__("base64").b64decode(r["audio_base64"]))
    al=r.get("normalized_alignment") or r["alignment"]; chars="".join(al["characters"]); st=al["character_start_times_seconds"]
    starts=[]; pos=0
    for sp in spoken:
        idx=chars.find(sp[:12],pos); idx=pos if idx<0 else idx
        starts.append(st[min(idx,len(st)-1)]); pos=idx+len(sp)
    dur=float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f"audio/s{i:02d}.mp3"],capture_output=True,text=True).stdout)
    meta.append({"title":title,"caps":[c for c,_ in sents],"starts":starts,"dur":dur})
json.dump(meta,open("timing.json","w"),ensure_ascii=False,indent=1)
print("fehlend",[i for i,m in enumerate(meta) if m.get("missing")])
