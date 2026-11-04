import subprocess, glob, os, re, json
exec(open("picks.py").read())
U="/mnt/user-data/uploads/RWTH/1. Semester"
KEY={"Angewandte Statistik":"stat","Bauinformatik":"binf","Baukonstruktion":"bauko","Baustoffkunde":"bsk","Data Analysis for Planning":"dap","Hydromechanik":"hydro","Physik":"phys"}
src={}
for p in sorted(glob.glob(U+"/*/1 Vorlesungen/*.pdf")):
    fach=p.split("/")[-3]; name=os.path.basename(p)[:-4]
    m=re.match(r"(V\d+|NaWi \d+|Kapitel [\d-]+)",name); vl=m.group(1).replace(" ","") if m else name[:6]
    key=f"{KEY[fach]}-{vl}".lower() + ("e" if "Einheiten" in name and vl=="V01" else "m" if "Mechanik" in name else "")
    src[key]=(p,fach,name)
out=[]
for key,pages in P.items():
    p,fach,name=src[key]
    for n in pages:
        t=subprocess.run(["pdftotext","-f",str(n),"-l",str(n),"-layout",p,"-"],capture_output=True,text=True).stdout
        lines=[l.strip() for l in t.split("\n") if l.strip()]
        nr=n
        for l in reversed(lines[-4:]):
            m=re.match(r"^(\d{1,3})\s",l)
            if m: nr=int(m.group(1)); break
        out.append({"key":key,"f":KEY[fach],"datei":name,"page":n,"nr":nr,"text":t,"lines":lines[:6]})
json.dump(out,open("texts.json","w"),ensure_ascii=False)
for o in out: print(o["key"],o["page"],o["nr"],"|"," ¦ ".join(o["lines"][:3])[:150])
