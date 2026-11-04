import json, os, struct, secrets, hashlib, datetime, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
M=json.load(open("mapping.json")); T=M["T"]; inv=M["inv"]
PASS=open("passwort.txt").read().strip()
names={}
for o in T: names.setdefault(o["key"],{"f":o["f"],"n":o["datei"]})
blob=b""; folien=[]
for o in T:
    b=open(f"img/{o['id']}.webp","rb").read()
    folien.append({"id":o["id"],"f":o["f"],"k":o["key"],"nr":o["nr"],"t":o["t"],"q":inv.get(o["id"],[]),"o":len(blob),"n":len(b)})
    blob+=b
meta={"app":"klausurduell-folien","v":1,"erstellt":datetime.date.today().isoformat(),"vl":names,"folien":folien}
mj=json.dumps(meta,ensure_ascii=False,separators=(",",":")).encode()
plain=b"KDFP"+struct.pack("<I",len(mj))+mj+blob
salt=secrets.token_bytes(16); iv=secrets.token_bytes(12)
key=hashlib.pbkdf2_hmac("sha256",PASS.lower().replace(" ","").encode(),salt,250000,32)
ct=AESGCM(key).encrypt(iv,plain,None)
os.makedirs("out",exist_ok=True)
open("out/folien.bin","wb").write(b"KDF1"+salt+iv+ct)
print(len(folien),"Folien",round(len(plain)/1e6,2),"MB, verlinkte Fragen/Aufgaben:",sum(len(f["q"]) for f in folien))
