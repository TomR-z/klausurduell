import json, subprocess, os, io
from PIL import Image
M=json.load(open("mapping.json")); T=M["T"]
U="/mnt/user-data/uploads/RWTH/1. Semester"
import glob
paths={os.path.basename(p)[:-4]:p for p in glob.glob(U+"/*/1 Vorlesungen/*.pdf")}
tot=0
for o in T:
    out=f"img/{o['id']}.webp"
    if not os.path.exists(out):
        subprocess.run(["pdftoppm","-f",str(o["page"]),"-l",str(o["page"]),"-png","-singlefile","-scale-to-x","1400","-scale-to-y","-1",paths[o["datei"]],"/tmp/slide"],check=True)
        im=Image.open("/tmp/slide.png").convert("RGB")
        im.save(out,"WEBP",quality=58,method=6)
    tot+=os.path.getsize(out)
print(len(T),"Folien,",round(tot/1e6,1),"MB")
