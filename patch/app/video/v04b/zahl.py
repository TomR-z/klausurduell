E=["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"]
Z={20:"zwanzig",30:"dreißig",40:"vierzig",50:"fünfzig",60:"sechzig",70:"siebzig",80:"achtzig",90:"neunzig"}
def w(n):
    if n<0: return "minus "+w(-n)
    if n<20: return E[n]
    if n<100:
        z,e=divmod(n,10)
        return Z[z*10] if e==0 else ("ein" if e==1 else E[e])+"und"+Z[z*10]
    h,r=divmod(n,100)
    return ("ein" if h==1 else E[h])+"hundert"+("" if r==0 else w(r))
SUB=str.maketrans("0123456789","₀₁₂₃₄₅₆₇₈₉")
def f(n): return str(n).replace("-","−")
def p(n): return f"({f(n)})" if n<0 else f(n)
def minor(M,i,j):
    R=[[M[r][c] for c in range(3) if c!=j] for r in range(3) if r!=i]
    return R
def cof_sentence(M,i,j,detail=True):
    (a,b),(c,d)=minor(M,i,j); m=a*d-b*c; s=1 if (i+j)%2==0 else -1; cv=s*m
    idx=f"{i+1}{j+1}".translate(SUB)
    cap=f"c{idx}: Zeile {i+1}, Spalte {j+1} weg → *{p(a)}·{p(d)} − {p(b)}·{p(c)} = {f(m)}* · Schachbrett {'+' if s>0 else '−'} → *c{idx} = {f(cv)}*"
    sp=(f"c {w(i+1)} {w(j+1)}: Zeile {w(i+1)} und Spalte {w(j+1)} weg. Übrig: {w(a)}, {w(b)}, {w(c)}, {w(d)}. "
        f"{w(a).capitalize()} mal {w(d)}, minus {w(b)} mal {w(c)}, ergibt {w(m)}. Vorzeichen {'plus' if s>0 else 'minus'}: {w(cv)}.")
    return cap,sp,cv
def cof_row(M,i):
    parts=[]; sp=[]
    for j in range(3):
        (a,b),(c,d)=minor(M,i,j); m=a*d-b*c; s=1 if (i+j)%2==0 else -1; cv=s*m; idx=f"{i+1}{j+1}".translate(SUB)
        parts.append(f"c{idx} = {'+' if s>0 else '−'}({p(a)}·{p(d)} − {p(b)}·{p(c)}) = *{f(cv)}*")
        sp.append(f"c {w(i+1)} {w(j+1)} ist {w(cv)}")
    return " · ".join(parts), f"Zeile {w(i+1)}: "+", ".join(sp)+"."
