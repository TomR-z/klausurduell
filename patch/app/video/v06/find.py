import json,re,unicodedata
W=json.load(open("src/words.json"))
def norm(s): return unicodedata.normalize("NFKC",s).replace("–","-").replace("−","-").lower()
def find(d,p,phrase,occ=0,pad=2):
    ws=W[str(d)][p-1]; toks=[norm(t) for t in phrase.split()]; hits=[]
    for i in range(len(ws)):
        ok=True
        for k,t in enumerate(toks):
            if i+k>=len(ws): ok=False;break
            w=norm(ws[i+k][4])
            if k==len(toks)-1 and len(toks)>1: ok=ok and w.startswith(t)
            elif k==0 and len(toks)>1: ok=ok and w.endswith(t)
            else: ok=ok and (w==t or (len(toks)==1 and t in w))
            if not ok: break
        if ok: hits.append(ws[i:i+len(toks)])
    if len(hits)<=occ: raise KeyError(f"{d}:{p} '{phrase}' ({len(hits)} Treffer)")
    h=hits[occ]; x0=min(w[0] for w in h); y0=min(w[1] for w in h); x1=max(w[2] for w in h); y1=max(w[3] for w in h)
    return [round(x0-pad,1),round(y0-pad,1),round(x1-x0+2*pad,1),round(y1-y0+2*pad,1)]
if __name__=="__main__":
    import sys; print(find(int(sys.argv[1]),int(sys.argv[2])," ".join(sys.argv[3:])))
