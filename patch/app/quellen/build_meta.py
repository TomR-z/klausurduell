import json, re, math, subprocess, collections
T=json.load(open("texts.json"))
def clean(s): return re.sub(r"[••▪]","",s).strip(" -–")
def title(o):
    L=[clean(l) for l in o["lines"]]; k=o["key"]; f=o["f"]
    L=[l for l in L if l]
    if f=="hydro":
        t=L[0]
        if t.startswith("Physikalische Eigenschaften"): return "Eigenschaften des Wassers – "+L[2]
        if re.search(r"(des|bei|eines|stationären|Strahls)$",t) or len(t)<14: t=t+" "+L[1]
        if L[1].startswith("- ") or L[1].startswith("-"): t=t+" "+L[1]
        return re.sub(r"\s+"," ",t)
    if f=="phys":
        if k=="phys-v01e": return L[0].replace("Einheiten – ","").replace("Einheiten - ","")
        return L[1]
    if f=="bsk": return L[0]
    if f=="bauko":
        if L[0] in ("Einführung",): return {23:"Ablauf der Tragwerksplanung",26:"Grundlage der Bemessung: E_d ≤ R_d"}[o["page"]]
        if L[0].startswith("Ausblick"): return "Einwirkungsgruppen"
        t=L[1]; return t if len(t)>4 else L[0]
    if f=="binf":
        if L[0] in ("Arbeiten mit Variablen","Sprachelemente","Variablen","Zahlenkodierung"): return L[0]+" – "+re.sub(r"\(.*","",L[1]).strip()
        return L[0]
    if f=="stat":
        if L[1] in ("Operationen","Vektoroperationen","Sonderfälle","Lineare Gleichungssysteme","Lösung linearer Gleichungssysteme"): return L[2] if L[1]!="Sonderfälle" else "Sonderfälle von Matrizen"
        return L[1]
    if f=="dap":
        t=L[0]
        if t.endswith(":") or t.endswith("the") or t.endswith("of the"): t=t.rstrip(":")+" "+L[1]
        return t
    return L[0]
FOOT={"bsk":"BSK|NaWi","phys":"Physik|Vorlage","bauko":"BAUKONSTRUKTION"}
for o in T:
    o["t"]=title(o)
    nr=o["page"]
    pat=FOOT.get(o["f"])
    if pat:
        for l in reversed([x for x in o["text"].split("\n") if x.strip()][-5:]):
            m=re.match(r"^\s*(\d{1,3})\s+.*("+pat+")",l)
            if m: nr=int(m.group(1)); break
    o["nr"]=nr
    o["id"]=f'{o["key"]}-{nr}'
ids=[o["id"] for o in T]; assert len(set(ids))==len(ids), [i for i,c in collections.Counter(ids).items() if c>1]
json.dump(T,open("meta.json","w"),ensure_ascii=False)
for o in T: print(o["id"].ljust(22), o["t"][:90])
