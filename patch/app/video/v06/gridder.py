import sys
from PIL import Image, ImageDraw
def g(d,p):
    im=Image.open(f"slides/d{d}-{p:02d}.jpg").resize((960,540)); dr=ImageDraw.Draw(im)
    for x in range(0,960,40): dr.line([(x,0),(x,540)],fill=(255,0,0) if x%200==0 else (255,170,170),width=1); 
    for y in range(0,540,40): dr.line([(0,y),(960,y)],fill=(255,0,0) if y%200==0 else (255,170,170),width=1)
    for x in range(0,960,80):
        for y in range(0,540,80): dr.text((x+2,y+2),f"{x},{y}",fill=(200,0,0))
    return im
pairs=[tuple(map(int,a.split(':'))) for a in sys.argv[2:]]
im=Image.new("RGB",(1920,1080),"white")
for k,(d,p) in enumerate(pairs[:4]): im.paste(g(d,p),((k%2)*960,(k//2)*540))
im.save(sys.argv[1],quality=85)
