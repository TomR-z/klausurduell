import json, base64, subprocess, urllib.request, os, sys
exec(open("script.py").read())
K=open("/mnt/user-data/uploads/RWTH/_Claude/Schlüssel/elevenlabs.txt").read().strip()
VOICE="onwK4e9ZLuTAKqWW03F9"
os.makedirs("audio",exist_ok=True)
meta=[]
tot=0
for i,(title,sents) in enumerate(S):
    spoken=[sp or cap for cap,sp in sents]
    text=" ".join(spoken); tot+=len(text)
    out=f"audio/s{i:02d}.json"
    if not os.path.exists(out):
        req=urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_128",
            data=json.dumps({"text":text,"model_id":"eleven_multilingual_v2","language_code":"de","voice_settings":{"stability":0.55,"similarity_boost":0.75,"style":0.15,"speed":0.97}}).encode(),
            headers={"xi-api-key":K,"Content-Type":"application/json"})
        r=json.load(urllib.request.urlopen(req,timeout=120)); json.dump(r,open(out,"w"))
    r=json.load(open(out))
    open(f"audio/s{i:02d}.mp3","wb").write(base64.b64decode(r["audio_base64"]))
    al=r.get("normalized_alignment") or r["alignment"]
    chars="".join(al["characters"]); st=al["character_start_times_seconds"]
    # Satzanfänge finden
    starts=[]; pos=0
    for sp in spoken:
        idx=chars.find(sp[:12],pos)
        if idx<0: idx=pos
        starts.append(st[idx] if idx<len(st) else st[-1]); pos=idx+len(sp)
    dur=float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f"audio/s{i:02d}.mp3"],capture_output=True,text=True).stdout)
    meta.append({"title":title,"caps":[c for c,_ in sents],"starts":starts,"dur":dur})
    print(i,title,round(dur,1),"s",[round(x,1) for x in starts])
json.dump(meta,open("timing.json","w"),ensure_ascii=False,indent=1)
print("Zeichen gesamt",tot,"Dauer",round(sum(m["dur"] for m in meta),1),"s")
