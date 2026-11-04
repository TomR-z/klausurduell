import subprocess, glob, os, re
from PIL import Image, ImageDraw, ImageFont
U="/mnt/user-data/uploads/RWTH/1. Semester"
pdfs=sorted(glob.glob(U+"/*/1 Vorlesungen/*.pdf"))
KEY={"Angewandte Statistik":"stat","Bauinformatik":"binf","Baukonstruktion":"bauko","Baustoffkunde":"bsk","Data Analysis for Planning":"dap","Hydromechanik":"hydro","Physik":"phys"}
font=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",22) if os.path.exists("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf") else ImageFont.load_default()
idx=[]
for p in pdfs:
    fach=p.split("/")[-3]; name=os.path.basename(p)[:-4]
    m=re.match(r"(V\d+|NaWi \d+|Kapitel [\d-]+)",name); vl=m.group(1).replace(" ","") if m else name[:6]
    key=f"{KEY[fach]}-{vl}".lower() + ("e" if "Einheiten" in name and vl=="V01" else "m" if "Mechanik" in name else "")
    od=f"thumbs/{key}"; os.makedirs(od,exist_ok=True)
    if not glob.glob(od+"/*.png"):
        subprocess.run(["pdftoppm","-png","-scale-to","300",p,od+"/p"],check=True)
    pages=sorted(glob.glob(od+"/p-*.png"),key=lambda x:int(re.search(r"-(\d+)\.png",x).group(1)))
    idx.append((key,p,len(pages)))
    per=24; cols=4
    for s in range(0,len(pages),per):
        chunk=pages[s:s+per]; ims=[Image.open(x).convert("RGB") for x in chunk]
        w=max(i.width for i in ims); h=max(i.height for i in ims)
        rows=(len(ims)+cols-1)//cols
        sheet=Image.new("RGB",(cols*w,rows*(h+30)),"white"); d=ImageDraw.Draw(sheet)
        for k,(im,path) in enumerate(zip(ims,chunk)):
            n=int(re.search(r"-(\d+)\.png",path).group(1)); x=(k%cols)*w; y=(k//cols)*(h+30)
            sheet.paste(im,(x,y+30)); d.text((x+6,y+3),f"{n}",fill="red",font=font)
        sheet.save(f"sheets/{key}_{s//per+1}.jpg",quality=70)
for k,p,n in idx: print(k,n,os.path.basename(p))
