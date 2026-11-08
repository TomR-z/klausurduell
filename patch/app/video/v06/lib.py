# Bausteine für die Folien-Videos (Physik V01–V03)
import json, sys
sys.path.insert(0, "/home/claude/video/v06")
from find import find

SC = []          # Szenen: dict(img,label,title,sents=[(cap,spoken,[acts])])
CUR = {"d": None, "p": None}

def slide(d, p, title, label, sents):
    SC.append({"img": f"slides/d{d}-{p:02d}.jpg", "label": label, "title": title, "sents": sents})

def F(phrase, occ=0, pad=2, d=None, p=None):
    return find(d or CUR["d"], p or CUR["p"], phrase, occ, pad)

def U(*rs, m=8):  # Hüllrechteck mehrerer Rechtecke plus Rand
    x0 = min(r[0] for r in rs) - m; y0 = min(r[1] for r in rs) - m
    x1 = max(r[0] + r[2] for r in rs) + m; y1 = max(r[1] + r[3] for r in rs) + m
    return [round(x0, 1), round(y0, 1), round(x1 - x0, 1), round(y1 - y0, 1)]

def on(d, p): CUR["d"] = d; CUR["p"] = p

def _r(x): return F(x) if isinstance(x, str) else x
def cam(r, at=0): return {"t": "cam", "r": _r(r) if r != "full" else [0, 0, 960, 540], "at": at}
def hl(x, c="y", at=0, occ=0, dur=.7): r = F(x, occ) if isinstance(x, str) else x; return {"t": "hl", "r": r, "c": c, "at": at, "dur": dur}
def box(x, c="r", at=0, occ=0, pad=3, sw=2.6): r = F(x, occ, pad) if isinstance(x, str) else x; return {"t": "box", "r": r, "c": c, "at": at, "sw": sw}
def ul(x, c="r", at=0, occ=0): r = F(x, occ) if isinstance(x, str) else x; return {"t": "ul", "r": r, "c": c, "at": at}
def strike(x, at=0, occ=0): r = F(x, occ) if isinstance(x, str) else x; return {"t": "x", "r": r, "at": at}
def arr(x1, y1, x2, y2, c="r", at=0): return {"t": "arr", "p": [x1, y1, x2, y2], "c": c, "at": at}
def note(x, y, s, c="r", fs=15, a="middle", at=0): return {"t": "note", "x": x, "y": y, "s": s, "c": c, "fs": fs, "a": a, "at": at}
def card(html, x, y, w, k=None, cls="", at=0): return {"t": "card", "html": (f"<div class='k'>{k}</div>" if k else "") + html, "x": x, "y": y, "w": w, "cls": cls, "at": at}
def clear(at=0, cards=True): return {"t": "clear", "at": at, "cards": cards}
def anim(n, at=0, dur=2.0, **kw): d = {"t": "anim", "n": n, "at": at, "dur": dur}; d.update(kw); return d

def write(prefix, part_label):
    first = 0
    S = [(sc["title"], [(c, sp) for c, sp, _ in sc["sents"]]) for sc in SC]
    open(f"{prefix}/script.py", "w").write("S = " + repr(S) + "\n")
    spec = []
    for i, sc in enumerate(SC):
        spec.append({"img": sc["img"], "label": sc["label"], "first": 0, "count": len(SC), "sents": [a for _, _, a in sc["sents"]]})
    open(f"{prefix}/spec.js", "w").write("window.SPEC=" + json.dumps(spec, ensure_ascii=False) + ";\n")
    n = sum(len(sp) for _, ss in S for _, sp in ss)
    print(prefix, "Szenen", len(S), "Zeichen", n)
