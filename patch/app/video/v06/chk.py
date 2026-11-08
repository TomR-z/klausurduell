# Zeichnet alle Rechtecke/Ringe einer Szene direkt auf die Folie (Kontrolle ohne Kamera)
import json,sys,re
from PIL import Image,ImageDraw
part=sys.argv[1]; idx=[int(x) for x in sys.argv[2].split(',')]; out=sys.argv[3]
s=open(f'{part}/spec.js').read(); SPEC=json.loads(s[s.index('=')+1:].rstrip().rstrip(';'))
C={'r':(220,30,30),'g':(20,150,60),'b':(30,90,220),'o':(240,120,0),'y':(230,180,0),'p':(120,60,200)}
tiles=[]
for i in idx:
    sc=SPEC[i]; im=Image.open(sc['img']).convert('RGB'); d=ImageDraw.Draw(im)
    for k,ss in enumerate(sc['sents']):
        for a in ss:
            col=C.get(a.get('c','y'),(0,0,0))
            if a['t'] in('box','hl','ul') :
                x,y,w,h=[v*2 for v in a['r']]; d.rectangle([x,y,x+w,y+h],outline=col,width=3); d.text((x+3,y+h-12),str(k),fill=col)
            if a['t']=='anim' and a['n']=='ring':
                x,y,r=a['x']*2,a['y']*2,a['r']*2; d.ellipse([x-r,y-r,x+r,y+r],outline=col,width=3)
            if a['t']=='anim' and a['n']=='kreis':
                x,y,r=a['x']*2,a['y']*2,a['r']*2; d.ellipse([x-r,y-r,x+r,y+r],outline=(255,0,255),width=2)
    # Gitter alle 40 pt
    for gx in range(0,960,40): d.line([gx*2,0,gx*2,6],fill=(255,0,0)); d.text((gx*2+2,8),str(gx),fill=(255,0,0))
    for gy in range(0,540,40): d.line([0,gy*2,6,gy*2],fill=(255,0,0)); d.text((8,gy*2),str(gy),fill=(255,0,0))
    tiles.append(im.resize((960,540)))
W=Image.new('RGB',(1920,540*((len(tiles)+1)//2)),'white')
for j,t in enumerate(tiles): W.paste(t,((j%2)*960,(j//2)*540))
W.save(out,quality=85)
