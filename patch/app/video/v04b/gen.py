# Generator für Lernvideo 04 v2: schreibt script.py (Text) und spec.js (Szenenbeschreibung)
import json
from zahl import w, f, p, SUB
BLUE="#2563eb"; ORA="#ea580c"; ACC="#5b3fb3"; GRN="#16a34a"
def sub(s): return str(s).translate(SUB)
def T(v,c): return f"<tspan fill='{c}'>{v}</tspan>"
def sw(n):  # Zahl gesprochen
    return w(n)
def plusminus(vals):
    out=[sw(vals[0])]
    for v in vals[1:]: out.append(("plus "+sw(v)) if v>=0 else ("minus "+sw(-v)))
    return ", ".join(out)
def minor(M,i,j):
    R=[[M[r][c] for c in range(3) if c!=j] for r in range(3) if r!=i]; return R
def cofv(M,i,j):
    (a,b),(c,d)=minor(M,i,j); m=a*d-b*c; s=1 if (i+j)%2==0 else -1; return a,b,c,d,m,s,s*m
def htm(M):  # kleine HTML-Matrix
    cols=len(M[0]); cells="".join(f"<span>{x}</span>" for r in M for x in r)
    return f"<span class='hm' style='grid-template-columns:repeat({cols},auto)'>{cells}</span>"
def colv(v): return [[x] for x in v]
def F(M): return [[f(x) if isinstance(x,int) else x for x in r] for r in M]

SC=[]  # (title, kind, strip, data, [(cap, spoken, tag)])
def scene(title,kind,strip,data,sents): SC.append((title,kind,strip,data,sents))

def cof_auto(M,i,j):
    a,b,c,d,m,s,cv=cofv(M,i,j); idx=sub(f"{i+1}{j+1}")
    cap=f"c{idx}: Zeile {i+1}, Spalte {j+1} weg → {p(a)}·{p(d)} − {p(b)}·{p(c)} = {f(m)} · Schachbrett {'+' if s>0 else '−'} → *{f(cv)}*"
    sp=f"c {w(i+1)} {w(j+1)}: {w(a)} mal {w(d)}, minus {w(b)} mal {w(c)}, ist {w(m)}. "
    if s>0: sp+=f"Vorzeichen plus: {w(cv)}."
    elif m<0: sp+=f"Vorzeichen minus, minus mal minus: {w(cv)}."
    elif m==0: sp+="Null bleibt null."
    else: sp+=f"Vorzeichen minus: {w(cv)}."
    return (cap,sp,[i,j,4])

def rowprod(L,v,r,lname,vname,res_label,check=None):
    """Formel Zeile r von L mal Vektor v (ganzzahlig) – Caption, gesprochen, SVG-Formel"""
    pr=[L[r][k]*v[k] for k in range(len(v))]; res=sum(pr)
    capf=" + ".join(f"{p(L[r][k])}·{p(v[k])}" for k in range(len(v)))
    svgf=" + ".join(f"{T(p(L[r][k]),BLUE)}·{T(p(v[k]),ORA)}" for k in range(len(v)))+f" = {T(f(res),GRN)}"
    return pr,res,capf,svgf

# ---------------- Texte der Aufgabenstellungen ----------------
EX=[[2,-1,2],[1,0,4],[-2,1,-3]]
A1=[[3,2,1],[2,4,2],[1,2,3]]; A2=[[4,0,2],[0,1,2],[8,2,6]]; b2=[0,8,4]
A3=[[4,8,2],[1,3,1],[6,14,4]]; b3=[4,3,7]; A3B=[[1,4],[2,6]]; b3b=[6,4]
A3C=[[1,2,5],[2,3,7],[3,4,8]]; b3c=[1,3,13]
KA=[["½","½","½","½"],["½","½","−½","−½"],["1/√2","−1/√2","0","0"],["0","0","1/√2","−1/√2"]]
AA=[[1,2,1],[2,2,1],[3,2,3]]; BB=[[1,2,1],[2,2,1],[3,3,2]]; bb=[1,4,2]
def K(n,s): return f"<span style='{{{{k{n}}}}}'>{s}</span>"
STRIPS={
 "ex": f"<b>Beispiel</b> · Bilde A⁻¹ über die Kofaktormatrix: A = {htm(F(EX))}",
 "a1": f"<b>Aufgabe 1</b> · A = {htm(F(A1))} · <b>A)</b> det A – regulär? · <b>B)</b> Kofaktormatrix C · <b>C)</b> A⁻¹ über det und C",
 "a2": f"<b>Aufgabe 2</b> · Bestimme x = A⁻¹ b mit A = {htm(F(A2))} b = {htm(colv(F([b2])[0]))}",
 "a3a": f"<b>Aufgabe 3 A</b> · Eindeutig lösbar? Falls ja: Gauß-Jordan · A = {htm(F(A3))} b = {htm(colv(F([b3])[0]))}",
 "a3b": f"<b>Aufgabe 3 B</b> · Eindeutig lösbar? Falls ja: Gauß-Jordan · A = {htm(F(A3B))} b = {htm(colv(F([b3b])[0]))}",
 "a3c": f"<b>Aufgabe 3 C</b> · Eindeutig lösbar? Falls ja: Determinantenformel · A = {htm(F(A3C))} b = {htm(colv(F([b3c])[0]))}",
 "a4": "<b>Aufgabe 4</b> · Mischung mit <b>0,08 % Salz</b> und <b>pH 7,0</b> aus Quelle 1 (0,02 % · pH 6,5) und Quelle 2 (2,0 % · pH 8,1) · A) Gleichungen · B) Ax = b · C) Determinantenformel · D) sinnvoll?",
 "kn": f"<b>Knobelaufgabe</b> · A = {htm(KA)} · <b>A)</b> invertierbar? · <b>B)</b> A⁻¹ bilden – welche Eigenschaft hat A⁻¹?",
 "alt": f"<b>Altklausur</b> · Ax = b und Bx = b lösbar? Lösung <b>nur</b> über Kofaktormatrix · A = {htm(F(AA))} B = {htm(F(BB))} b = {htm(colv(F([bb])[0]))}",
}
def big(html): return f"<div class='bigq'>{html}</div>"
STMT={
 "a1": big(f"<p>Gegeben ist folgende Matrix: &nbsp; A = {htm(F(A1))}</p><p>{K(1,'<b>A)</b> Berechnen Sie die Determinante von A. Ist A regulär?')}</p><p>{K(2,'<b>B)</b> Bestimmen Sie die Kofaktormatrix C von A.')}</p><p>{K(2,'<b>C)</b> Bilden Sie die Inverse von A über die Determinante und Kofaktormatrix C.')}</p>"),
 "a2": big(f"<p>{K(0,'Bestimmen Sie den Lösungsvektor x:')}</p><p>{K(1,'x = A⁻¹ b')} &nbsp; mit &nbsp; A = {htm(F(A2))} &nbsp; b = {htm(colv(F([b2])[0]))}</p>"),
 "a3a": big(f"<p><b>A)</b> {K(0,'Bestimmen Sie, ob der nachfolgende Ausdruck eine eindeutige Lösung hat.')} {K(1,'Falls ja, berechnen Sie diese über das Gauß-Jordan-Verfahren:')}</p><p>x = A⁻¹ b &nbsp; mit &nbsp; A = {htm(F(A3))} &nbsp; b = {htm(colv(F([b3])[0]))}</p>"),
 "a3b": big(f"<p><b>B)</b> {K(0,'Bestimmen Sie, ob der nachfolgende Ausdruck eine eindeutige Lösung hat.')} {K(0,'Falls ja, berechnen Sie diese über das Gauß-Jordan-Verfahren:')}</p><p>x = A⁻¹ b &nbsp; mit &nbsp; A = {htm(F(A3B))} &nbsp; {K(1,'b = '+htm(colv(F([b3b])[0])))}</p>"),
 "a3c": big(f"<p><b>C)</b> Bestimmen Sie, ob der nachfolgende Ausdruck eine eindeutige Lösung hat. {K(0,'Falls ja, berechnen Sie diese über die Determinantenformel:')}</p><p>x = A⁻¹ b &nbsp; mit &nbsp; A = {htm(F(A3C))} &nbsp; b = {htm(colv(F([b3c])[0]))}</p>"),
 "a4": big(f"<p style='font-size:30px'>Zum Anmischen von Beton muss das Wasser bestimmte Parameter einhalten. Für ein Bauvorhaben sind zwei Wasserquellen verfügbar:</p><table class='qt'><tr><th></th><th>Wasserquelle 1</th><th>Wasserquelle 2</th></tr><tr><td>Salzgehalt [%]</td><td>0,02</td><td>{K(0,'2,0')}</td></tr><tr><td>pH</td><td>6,5</td><td>8,1</td></tr></table><p style='font-size:30px'>{K(0,'Wasser aus Quelle 2 ist preiswert, aber der Salzgehalt ist deutlich zu hoch.')} {K(1,'Bestimmen Sie ein Mischverhältnis x für eine Mischung b mit 0,08 % Salz und pH 7,0:')}</p><p style='font-size:28px'>{K(2,'<b>A)</b> Zwei Zeilen a<sub>i1</sub>·x<sub>1</sub> + a<sub>i2</sub>·x<sub>2</sub> = b<sub>i</sub> aufstellen (i = 1 Salz, i = 2 pH) · <b>B)</b> in Matrizenschreibweise Ax = b · <b>C)</b> mit der Determinantenformel lösen · <b>D)</b> Ist Quelle 2 sinnvoll?')}</p>"),
 "kn": big(f"<p>Gegeben sei die Matrix &nbsp; A = {htm(KA)}</p><p>{K(1,'<b>A)</b> Prüfen Sie, ob A invertierbar ist.')}</p><p>{K(1,'<b>B)</b> Bilden Sie A⁻¹. Welche Eigenschaft hat A⁻¹?')}</p><p style='color:#6b5fa8'>{K(2,'Hinweis: Durch geschickte Auswahl der Rechenschritte können Sie viel Zeit sparen!')}</p>"),
 "alt": big(f"<p style='font-size:32px'>Gegeben seien die Matrizen A und B sowie der Vektor b. {K(1,'Ermitteln Sie zunächst, ob die Gleichungssysteme Ax = b und Bx = b lösbar sind,')} {K(1,'und bestimmen Sie anschließend, sofern möglich, die Lösung mithilfe der Kofaktormatrix')} {K(1,'(andere Lösungswege werden nicht akzeptiert!).')}</p><p>A = <span class='hm' style='grid-template-columns:repeat(3,auto)'><span>1</span><span>2</span><span>1</span><span>2</span><span>2</span><span>1</span>{K(2,'3')}{K(2,'2')}{K(2,'3')}</span> &nbsp; B = <span class='hm' style='grid-template-columns:repeat(3,auto)'><span>1</span><span>2</span><span>1</span><span>2</span><span>2</span><span>1</span>{K(2,'3')}{K(2,'3')}{K(2,'2')}</span> &nbsp; b = {htm(colv(F([bb])[0]))}</p>"),
}

# ================= Szenen =================
scene("Übung 2 Schritt für Schritt","intro",None,{},[
 ("Übung 2: *Matrizen invertieren* und *Gleichungssysteme* lösen.","In Übung zwei geht es darum, Matrizen zu invertieren und Gleichungssysteme zu lösen.",None),
 ("Zuerst der *komplette Weg* an einem ausführlichen Beispiel.","Zuerst rechnen wir den kompletten Weg an einem ausführlichen Beispiel durch, jeden Schritt einzeln.",None),
 ("Danach jede Aufgabe – mit dem *kürzesten* Rechenweg.","Danach kommt jede Aufgabe der Übung dran, jeweils mit dem kürzesten Rechenweg.",None),
 ("Die *Aufgabenstellung* bleibt dabei immer oben stehen.","Die Aufgabenstellung bleibt dabei immer oben eingeblendet, damit du jede Zahl nachrechnen kannst.",None)])
scene("Beispiel: der komplette Weg","plan","ex",{"M":F(EX)},[
 ("Beispiel: A ist *nicht symmetrisch* und hat *Minuszeichen*.","Unser Beispiel ist diese Matrix A. Sie ist nicht symmetrisch und hat Minuszeichen. Genau da passieren die typischen Fehler.",None),
 ("Ziel: *A⁻¹* – die Matrix mit *A · A⁻¹ = I*.","Gesucht ist die Inverse, also die Matrix, die mit A multipliziert die Einheitsmatrix ergibt.",None),
 ("Formel: *A⁻¹ = C′ / det A*","Die Formel dafür: Inverse gleich transponierte Kofaktormatrix, geteilt durch die Determinante.",None),
 ("Fünf Schritte – und am Schluss die *Probe*.","Das sind fünf Schritte: Determinante, Minoren, Vorzeichen, transponieren, teilen. Und am Schluss die Probe.",None)])
def sarrus_data(M):
    E=lambda r,c:M[r][c%3]
    down=[(0,0),(0,1),(0,2)]; d=[];u=[]
    for k in range(3):
        fs=[E(0,k),E(1,k+1),E(2,k+2)]; d.append(fs)
        gs=[E(0,k+2),E(1,k+1),E(2,k)]; u.append(gs)
    pd=[a*b*c for a,b,c in d]; pu=[a*b*c for a,b,c in u]
    return d,u,pd,pu
def sarrus_scene(title,strip,M,setup_sp,down_sp,up_sp,res_cap,res_sp,with_setup=True):
    d,u,pd,pu=sarrus_data(M); sd=sum(pd); su=sum(pu); det=sd-su
    fd=" · ".join(f"{'·'.join(p(x) for x in fs)} = {f(v)}" for fs,v in zip(d,pd))
    fu=" · ".join(f"{'·'.join(p(x) for x in fs)} = {f(v)}" for fs,v in zip(u,pu))
    data={"M":F(M),"down":[["·".join(p(x) for x in fs),f(v)] for fs,v in zip(d,pd)],"up":[["·".join(p(x) for x in fs),f(v)] for fs,v in zip(u,pu)],"sd":f(sd),"su":f(su),"det":f(det),"bad":det==0}
    s=[]
    if with_setup: s.append(("Sarrus: Spalte 1 und 2 *rechts daneben* schreiben.",setup_sp,"setup"))
    s+= [(f"↘ blau: {fd} → *{f(sd)}*",down_sp,"down"),(f"↙ orange: {fu} → *{f(su)}*",up_sp,"up"),(res_cap,res_sp,"res")]
    scene(title,"sarrus",strip,data,s)
sarrus_scene("Beispiel · Schritt 1: det A","ex",EX,
 "Schritt eins ist die Determinante. Für drei mal drei nimmst du die Regel von Sarrus: Schreib die ersten zwei Spalten noch einmal rechts daneben.",
 "Jetzt die drei blauen Diagonalen nach rechts unten. Zwei mal null mal minus drei ist null. Minus eins mal vier mal minus zwei ist plus acht, denn zwei Minus ergeben plus. Zwei mal eins mal eins ist zwei. Zusammen zehn.",
 "Dann die drei orangen Diagonalen nach links unten. Zwei mal null mal minus zwei ist null. Zwei mal vier mal eins ist acht. Minus eins mal eins mal minus drei ist drei. Zusammen elf.",
 "det A = blau − orange = 10 − 11 = *−1 ≠ 0* → A⁻¹ *existiert*.",
 "Die Determinante ist blau minus orange: zehn minus elf, also minus eins. Nicht null, also gibt es eine Inverse.")
scene("Beispiel · Schritt 2 und 3: Kofaktoren, Zeile 1","cof","ex",{"M":EX,"name":"A","done":[]},[
 ("Jeder Eintrag c_ij von C bekommt eine *eigene kleine Rechnung*.","Jetzt kommt die Kofaktormatrix C. Jeder ihrer neun Einträge bekommt eine eigene kleine Rechnung.",None),
 ("c₁₁: *Zeile 1* und *Spalte 1* abdecken.","Für c eins eins deckst du Zeile eins und Spalte eins ab. Die beiden Indizes sagen dir, welche Zeile und welche Spalte.",[0,0,1]),
 ("Übrig bleibt eine 2×2-Matrix aus *0, 4, 1, −3*.","Übrig bleiben vier Zahlen: null und vier oben, eins und minus drei unten. Das ist eine kleine zwei mal zwei Matrix.",[0,0,2]),
 ("Minor m₁₁ = *0·(−3)* − *4·1* = 0 − 4 = *−4*","Davon die Determinante: die blaue Diagonale, null mal minus drei, minus die orange Diagonale, vier mal eins. Null minus vier ist minus vier. Das ist der Minor.",[0,0,3]),
 ("Schachbrett oben links: *+* → c₁₁ = *−4*","Das Vorzeichen kommt aus dem Schachbrett. Oben links steht plus. Also bleibt es bei minus vier, und das kommt in C oben links.",[0,0,4]),
 ("Schachbrett = (−1)^(i+j): i+j *gerade* → +, *ungerade* → −","Das Schachbrett ist nichts anderes als minus eins hoch i plus j. Ist i plus j gerade, steht dort plus. Ist die Summe ungerade, minus.",None),
 ("c₁₂: Zeile 1 und *Spalte 2* weg → übrig *1, 4, −2, −3*","Weiter mit c eins zwei: Zeile eins und Spalte zwei weg. Übrig bleiben eins und vier, darunter minus zwei und minus drei.",[0,1,2]),
 ("m₁₂ = 1·(−3) − 4·(−2) = −3 + 8 = 5 · Schachbrett *−* → c₁₂ = *−5*","Blau: eins mal minus drei ist minus drei. Orange: vier mal minus zwei ist minus acht. Minus drei minus minus acht ist plus fünf. Das Schachbrett sagt hier minus, also ist c eins zwei minus fünf.",[0,1,4]),
 ("c₁₃: 1·1 − 0·(−2) = 1 · Schachbrett + → *1*","c eins drei: Zeile eins und Spalte drei weg. Blau eins mal eins, orange null mal minus zwei. Das ergibt eins, Vorzeichen plus, also eins.",[0,2,4])])
scene("Beispiel · Kofaktoren, Zeile 2","cof","ex",{"M":EX,"name":"A","done":[[0,0],[0,1],[0,2]]},[
 ("c₂₁: Zeile 2, Spalte 1 weg → (−1)·(−3) − 2·1 = 1 · Schachbrett *−* → *−1*","Zeile zwei. Für c zwei eins deckst du Zeile zwei und Spalte eins ab. Blau: minus eins mal minus drei ist drei. Orange: zwei mal eins ist zwei. Drei minus zwei ist eins. In Zeile zwei beginnt das Schachbrett mit minus, also minus eins.",[1,0,4]),
 ("c₂₂: 2·(−3) − 2·(−2) = −6 + 4 = −2 · Schachbrett + → *−2*","c zwei zwei: Zeile zwei und Spalte zwei weg. Zwei mal minus drei ist minus sechs. Zwei mal minus zwei ist minus vier, und das wird abgezogen. Minus sechs plus vier ist minus zwei. Vorzeichen plus, es bleibt minus zwei.",[1,1,4]),
 ("c₂₃: 2·1 − (−1)·(−2) = 2 − 2 = 0 → *0*","c zwei drei: Zeile zwei und Spalte drei weg. Zwei mal eins ist zwei. Minus eins mal minus zwei ist auch zwei. Zwei minus zwei ist null, und null bleibt null, egal welches Vorzeichen.",[1,2,4]),
 ("Das Vorzeichen hängt *nur von der Position* ab – nicht vom Minor.","Wichtig: Das Vorzeichen hängt nur von der Position ab, nicht davon, ob der Minor schon negativ ist.",None)])
scene("Beispiel · Kofaktoren, Zeile 3","cof","ex",{"M":EX,"name":"A","done":[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]]},[
 ("c₃₁: Zeile 3, Spalte 1 weg → (−1)·4 − 2·0 = −4 · Schachbrett + → *−4*","Zeile drei. c drei eins: Zeile drei und Spalte eins weg. Minus eins mal vier ist minus vier, zwei mal null ist null. Der Minor ist minus vier, Vorzeichen plus, also minus vier.",[2,0,4]),
 ("c₃₂: 2·4 − 2·1 = 8 − 2 = 6 · Schachbrett *−* → *−6*","c drei zwei: Spalte zwei weg. Zwei mal vier ist acht, zwei mal eins ist zwei. Acht minus zwei ist sechs. Vorzeichen minus, also minus sechs.",[2,1,4]),
 ("c₃₃: 2·0 − (−1)·1 = 0 + 1 = 1 · Schachbrett + → *1*","c drei drei: Spalte drei weg. Zwei mal null ist null, minus eins mal eins ist minus eins. Null minus minus eins ist plus eins. Vorzeichen plus, also eins.",[2,2,4]),
 ("C ist komplett: *neun* Minoren, *neun* Vorzeichen.","Damit ist die Kofaktormatrix komplett: neun Minoren und neun Vorzeichen.",None)])
EXC=[[-4,-5,1],[-1,-2,0],[-4,-6,1]]; EXCT=[list(r) for r in zip(*EXC)]; EXI=[[4,1,4],[5,2,6],[-1,0,-1]]
I3=[["1","0","0"],["0","1","0"],["0","0","1"]]
def pf(A,Bi,r,c):  # Probe-Formel Zeile r von A · Spalte c von Bi (Strings)
    return " + ".join(f"{T(A[r][k] if not A[r][k].startswith('−') else '('+A[r][k]+')',BLUE)}·{T(Bi[k][c] if not Bi[k][c].startswith('−') else '('+Bi[k][c]+')',ORA)}" for k in range(3))
scene("Beispiel · Schritt 4: transponieren","inv","ex",{"C":F(EXC),"CT":F(EXCT),"A":F(EX),"Ai":F(EXI),"det":"−1","I":I3},[
 ("C′: *Zeile 1* von C wird *Spalte 1* von C′ – Zeile 2 → Spalte 2 – Zeile 3 → Spalte 3","Schritt vier: transponieren. Die erste Zeile von C wird die erste Spalte von C strich. Dann die zweite Zeile zur zweiten Spalte, und die dritte zur dritten.","tr"),
 ("Die *Diagonale* bleibt, der Rest wird an ihr *gespiegelt*.","Die Diagonale bleibt stehen, alles andere wird an ihr gespiegelt. Zum Beispiel wandert die minus fünf aus Zeile eins, Spalte zwei nach Zeile zwei, Spalte eins.",None),
 ("Ohne Transponieren wäre A · A⁻¹ *nicht* I – bei nicht symmetrischem A.","Warum das Ganze? Nur mit der transponierten Kofaktormatrix ergibt A mal Inverse die Einheitsmatrix. Bei nicht symmetrischen Matrizen wäre es ohne Transponieren falsch.",None)])
scene("Beispiel · Schritt 5: teilen und Probe","inv","ex",{"C":F(EXC),"CT":F(EXCT),"A":F(EX),"Ai":F(EXI),"det":"−1","I":I3,"skiptr":True},[
 ("A⁻¹ = C′ / (−1): durch −1 teilen = *jedes Vorzeichen umdrehen*.","Schritt fünf: durch die Determinante teilen. Teilen durch minus eins heißt einfach: Jedes Vorzeichen dreht sich um.","div"),
 ("Probe mit A: Zeile 1 · Spalte 1 = 2·4 + (−1)·5 + 2·(−1) = 8 − 5 − 2 = *1* ✓","Jetzt die Probe, mit A unten eingeblendet. Zeile eins von A mal Spalte eins der Inversen: zwei mal vier ist acht, minus eins mal fünf ist minus fünf, zwei mal minus eins ist minus zwei. Acht minus fünf minus zwei ist eins. Genau die Eins der Einheitsmatrix.",["probe",0,0,pf(F(EX),F(EXI),0,0)+" = "+T("1",GRN)]),
 ("Zeile 1 · Spalte 2 = 2·1 + (−1)·2 + 2·0 = *0* ✓","Zeile eins mal Spalte zwei: zwei mal eins, minus eins mal zwei, zwei mal null. Zwei minus zwei ist null. Auch richtig.",["probe",0,1,pf(F(EX),F(EXI),0,1)+" = "+T("0",GRN)]),
 ("Zeile 2 · Spalte 2 = 1·1 + 0·2 + 4·0 = *1* ✓","Zeile zwei mal Spalte zwei: eins mal eins, null mal zwei, vier mal null. Das ergibt eins.",["probe",1,1,pf(F(EX),F(EXI),1,1)+" = "+T("1",GRN)]),
 ("Alle neun Einträge so → *A · A⁻¹ = I* ✓","So ergibt jede Kombination eins auf der Diagonale und null daneben. Damit ist die Inverse bestätigt.","fill")])

# ---------- Aufgabe 1 ----------
scene("Aufgabe 1: die Aufgabenstellung","stmt","a1",{"html":STMT["a1"]},[
 ("Aufgabe 1: *drei Teile* – genau die Schritte aus dem Beispiel.","Aufgabe eins hat drei Teile, genau die Schritte aus dem Beispiel.",None),
 ("A) det A – *regulär* heißt nur: *det A ≠ 0*.","Teil a: die Determinante, und ob A regulär ist. Regulär heißt nur: Die Determinante ist nicht null.",None),
 ("B) Kofaktormatrix C · C) A⁻¹ = C′ / det A","Teil b ist die Kofaktormatrix, Teil c die Inverse über die Formel.",None),
 ("Auffällig: A ist *symmetrisch* – das spart Arbeit.","Schau dir A genau an: Sie ist symmetrisch zur Diagonale. Das spart gleich Arbeit.",None)])
sarrus_scene("Aufgabe 1 A: die Determinante","a1",A1,"",
 "Sarrus wie im Beispiel. Blau nach rechts unten: drei mal vier mal drei ist sechsunddreißig, zwei mal zwei mal eins ist vier, eins mal zwei mal zwei ist vier. Zusammen vierundvierzig.",
 "Orange nach links unten: eins mal vier mal eins ist vier, drei mal zwei mal zwei ist zwölf, zwei mal zwei mal drei ist zwölf. Zusammen achtundzwanzig.",
 "det A = 44 − 28 = *16 ≠ 0* → A ist *regulär*.","Vierundvierzig minus achtundzwanzig ist sechzehn. Nicht null, also ist A regulär. Das ist Teil a.",with_setup=False)
s=[("B) A symmetrisch → *C symmetrisch*: nur 6 Einträge rechnen.","Teil b. Weil A symmetrisch ist, wird auch C symmetrisch. Es reichen die sechs Einträge auf und über der Diagonale.",None)]
for (i,j) in [(0,0),(0,1),(0,2),(1,1),(1,2),(2,2)]: s.append(cof_auto(A1,i,j))
s.append(("Spiegeln: c₂₁ = c₁₂ · c₃₁ = c₁₃ · c₃₂ = c₂₃","Die drei unteren Einträge spiegelst du einfach von oben an der Diagonale.",["sym"]))
scene("Aufgabe 1 B: die Kofaktormatrix","cof","a1",{"M":A1,"name":"A","done":[]},s)
A1C=[["8","−4","0"],["−4","8","−4"],["0","−4","8"]]; A1I=[["½","−¼","0"],["−¼","½","−¼"],["0","−¼","½"]]
scene("Aufgabe 1 C: die Inverse","inv","a1",{"C":A1C,"CT":A1C,"A":F(A1),"Ai":A1I,"det":"16","I":I3},[
 ("C′ = C, weil C *symmetrisch* ist.","Teil c. Transponieren ändert hier nichts, weil C symmetrisch ist.","tr"),
 ("A⁻¹ = C′ / 16: 8/16 = ½ · −4/16 = −¼ · 0/16 = 0","Dann jeden Eintrag durch sechzehn teilen. Acht durch sechzehn ist ein halb, minus vier durch sechzehn ist minus ein Viertel, null bleibt null.","div"),
 ("Probe mit A: Zeile 1 · Spalte 1 = 3·½ + 2·(−¼) + 1·0 = 1,5 − 0,5 = *1* ✓","Probe mit A: Zeile eins von A mal Spalte eins der Inversen. Drei mal ein halb ist eins Komma fünf, zwei mal minus ein Viertel ist minus null Komma fünf, eins mal null ist null. Zusammen eins.",["probe",0,0,pf(F(A1),A1I,0,0)+" = "+T("1",GRN)]),
 ("Zeile 1 · Spalte 2 = 3·(−¼) + 2·½ + 1·(−¼) = −¾ + 1 − ¼ = *0* ✓","Zeile eins mal Spalte zwei: minus drei Viertel plus eins minus ein Viertel. Ergibt null. Passt.",["probe",0,1,pf(F(A1),A1I,0,1)+" = "+T("0",GRN)]),
 ("→ *A · A⁻¹ = I* ✓","Alle anderen Einträge gehen genauso auf.","fill")])

# ---------- Aufgabe 2 ----------
scene("Aufgabe 2: die Aufgabenstellung","stmt","a2",{"html":STMT["a2"]},[
 ("Aufgabe 2: Gesucht ist der *Lösungsvektor x*.","Aufgabe zwei: Gesucht ist der Lösungsvektor x.",None),
 ("Weg: x = *A⁻¹ · b* – erst die Inverse, dann mal b.","Der Weg steht schon da: x ist die Inverse mal b. Also zuerst die Inverse wie im Beispiel, dann mal b.",None),
 ("A ist *nicht symmetrisch* → das Transponieren zählt.","A ist diesmal nicht symmetrisch. Das Transponieren wird also wichtig.",None)])
sarrus_scene("Aufgabe 2: die Determinante","a2",A2,"",
 "Sarrus. Blau: vier mal eins mal sechs ist vierundzwanzig. Die anderen zwei blauen Diagonalen treffen eine Null und fallen weg.",
 "Orange: zwei mal eins mal acht ist sechzehn, vier mal zwei mal zwei ist sechzehn, die dritte trifft eine Null. Zusammen zweiunddreißig.",
 "det A = 24 − 32 = *−8 ≠ 0* → A⁻¹ existiert.","Vierundzwanzig minus zweiunddreißig ist minus acht. Nicht null, also gibt es die Inverse.",with_setup=False)
s=[("Alle *neun* Kofaktoren – hier hilft keine Symmetrie.","Jetzt alle neun Kofaktoren, hier hilft keine Symmetrie. Achte auf die Farben: blau mal blau, minus orange mal orange.",None)]
for i in range(3):
    for j in range(3): s.append(cof_auto(A2,i,j))
scene("Aufgabe 2: die Kofaktormatrix","cof","a2",{"M":A2,"name":"A","done":[]},s)
A2C=[["2","16","−8"],["4","8","−8"],["−2","−8","4"]]; A2CT=[list(r) for r in zip(*A2C)]; A2I=[["−¼","−½","¼"],["−2","−1","1"],["1","1","−½"]]
scene("Aufgabe 2: transponieren und teilen","inv","a2",{"C":A2C,"CT":A2CT,"A":F(A2),"Ai":A2I,"det":"−8","I":I3},[
 ("C′: Zeile 1 von C (2 16 −8) wird *Spalte 1* – usw.","Transponieren: Die erste Zeile, zwei, sechzehn, minus acht, wird zur ersten Spalte. Genauso die zweite und die dritte Zeile.","tr"),
 ("Ohne Transponieren wäre hier *jede Zeile* der Inversen falsch.","Ohne diesen Schritt wäre hier jede Zeile der Inversen falsch.",None),
 ("A⁻¹ = C′ / (−8): 2/(−8) = −¼ · 16/(−8) = −2 · −8/(−8) = 1 …","Dann durch minus acht teilen. Zwei durch minus acht ist minus ein Viertel, sechzehn durch minus acht ist minus zwei, minus acht durch minus acht ist eins. Das Minus dreht jedes Vorzeichen um.","div")])
x2=[-3,-4,6]
def frow(L,v,r):  # Strings
    def q(s): return s if not s.startswith('−') else '('+s+')'
    return " + ".join(f"{T(q(L[r][k]),BLUE)}·{T(q(v[k]),ORA)}" for k in range(len(v)))
scene("Aufgabe 2: x berechnen und Probe","xvec","a2",{"L":A2I,"Ln":"A⁻¹","b":F([b2])[0],"y":F([x2])[0],"A":F(A2),"x":F([x2])[0]},[
 ("x₁ = Zeile 1 von A⁻¹ · b = (−¼)·0 + (−½)·8 + ¼·4 = 0 − 4 + 1 = *−3*","Jetzt x gleich Inverse mal b, Zeile mal Spalte. x eins: minus ein Viertel mal null ist null, minus ein halb mal acht ist minus vier, ein Viertel mal vier ist eins. Zusammen minus drei.",["mul",0,frow(A2I,F([b2])[0],0)+" = "+T("−3",GRN)]),
 ("x₂ = (−2)·0 + (−1)·8 + 1·4 = *−4*","x zwei: null, minus acht, plus vier. Ergibt minus vier.",["mul",1,frow(A2I,F([b2])[0],1)+" = "+T("−4",GRN)]),
 ("x₃ = 1·0 + 1·8 + (−½)·4 = 8 − 2 = *6*","x drei: null, plus acht, minus zwei. Ergibt sechs.",["mul",2,frow(A2I,F([b2])[0],2)+" = "+T("6",GRN)]),
 ("Probe mit A: Zeile 1 · x = 4·(−3) + 0·(−4) + 2·6 = −12 + 12 = *0* = b₁ ✓","Zur Probe nimmst du die ursprüngliche Matrix A, unten eingeblendet, mal x. Zeile eins: vier mal minus drei ist minus zwölf, null mal minus vier ist null, zwei mal sechs ist zwölf. Zusammen null, genau der erste Eintrag von b.",["probe",0,frow(F(A2),F([x2])[0],0)+" = "+T("0",GRN)]),
 ("Zeile 2 · x = 0·(−3) + 1·(−4) + 2·6 = *8* = b₂ ✓","Zeile zwei: null, minus vier, plus zwölf. Ergibt acht.",["probe",1,frow(F(A2),F([x2])[0],1)+" = "+T("8",GRN)]),
 ("Zeile 3 · x = 8·(−3) + 2·(−4) + 6·6 = −24 − 8 + 36 = *4* = b₃ ✓","Zeile drei: minus vierundzwanzig, minus acht, plus sechsunddreißig. Ergibt vier. Es kommt also wieder b heraus, x stimmt.",["probe",2,frow(F(A2),F([x2])[0],2)+" = "+T("4",GRN)])])

# ---------- Aufgabe 3 A ----------
scene("Aufgabe 3 A: die Aufgabenstellung","stmt","a3a",{"html":STMT["a3a"]},[
 ("Aufgabe 3 A: *Gibt es* eine eindeutige Lösung?","Aufgabe drei a fragt zuerst: Gibt es überhaupt eine eindeutige Lösung?",None),
 ("Nur *falls ja*: mit Gauß-Jordan berechnen.","Nur falls ja, sollst du sie mit Gauß-Jordan berechnen.",None),
 ("Also zuerst: *det A*.","Also kommt zuerst die Determinante.",None)])
sarrus_scene("Aufgabe 3 A: die Determinante","a3a",A3,"",
 "Blau: vier mal drei mal vier ist achtundvierzig, acht mal eins mal sechs ist achtundvierzig, zwei mal eins mal vierzehn ist achtundzwanzig. Zusammen hundertvierundzwanzig.",
 "Orange: zwei mal drei mal sechs ist sechsunddreißig, vier mal eins mal vierzehn ist sechsundfünfzig, acht mal eins mal vier ist zweiunddreißig. Zusammen auch hundertvierundzwanzig.",
 "det A = 124 − 124 = *0* → *keine* eindeutige Lösung.","Hundertvierundzwanzig minus hundertvierundzwanzig ist null. Damit gibt es keine eindeutige Lösung, und Gauß-Jordan entfällt.",with_setup=False)
scene("Aufgabe 3 A: warum det = 0?","a3a","a3a",{"M":F(A3),"b":F([b3])[0]},[
 ("Warum 0? Die *Zeilen* hängen voneinander ab.","Warum ist die Determinante null? Weil die Zeilen voneinander abhängen.",None),
 ("Spalte für Spalte: *Zeile I* + 2 · *Zeile II* = *Zeile III*","Nimm Zeile eins, blau, und addiere zweimal Zeile zwei, orange. Erste Spalte: vier plus zwei mal eins ist sechs. Zweite Spalte: acht plus zwei mal drei ist vierzehn. Dritte Spalte: zwei plus zwei mal eins ist vier. Das ist genau Zeile drei, lila.",None),
 ("Rechte Seite genauso: *4* + 2 · *3* = 10 – aber b₃ = *7*","Jetzt dieselbe Kombination rechts beim Vektor b: vier plus zwei mal drei ist zehn. In Zeile drei steht aber sieben.",None),
 ("III − I − 2·II: links *0*, rechts 7 − 10 = *−3* → 0 = −3","Rechnet man Zeile drei minus Zeile eins minus zweimal Zeile zwei, bleibt links null und rechts minus drei. Null gleich minus drei ist ein Widerspruch.",None),
 ("→ *gar keine* Lösung · rg A = 2 < rg (A|b) = 3","Das System hat also gar keine Lösung. In der Sprache der Ränge: A hat Rang zwei, die erweiterte Matrix Rang drei.",None)])

# ---------- Aufgabe 3 B ----------
scene("Aufgabe 3 B: die Aufgabenstellung","stmt","a3b",{"html":STMT["a3b"]},[
 ("Aufgabe 3 B: wieder erst *ob*, dann *Gauß-Jordan*.","Bei drei b genauso: erst prüfen, dann mit Gauß-Jordan rechnen.",None),
 ("Gegeben: A (2×2) und *b = (6; 4)*.","Diesmal ist A nur zwei mal zwei, und b ist sechs und vier.",None)])
scene("Aufgabe 3 B: Gauß-Jordan","gj","a3b",{},[
 ("det A = 1·6 − 4·2 = 6 − 8 = *−2 ≠ 0* → eindeutig lösbar.","Zuerst die Determinante: eins mal sechs minus vier mal zwei ist minus zwei. Nicht null, also eindeutig lösbar.",None),
 ("Start: *(A | I)* – Ziel: links *I*, dann steht rechts *A⁻¹*.","Für Gauß-Jordan schreibst du A und daneben die Einheitsmatrix. Du formst so lange um, bis links die Einheitsmatrix steht. Dann steht rechts die Inverse.",None),
 ("*II − 2·I*: 2−2·1 = 0 · 6−2·4 = −2 · 0−2·1 = −2 · 1−2·0 = 1","Unter der Eins soll eine Null entstehen. Dafür rechnest du Zeile zwei minus zweimal Zeile eins, über die ganze Zeile: zwei minus zwei ist null, sechs minus acht ist minus zwei, null minus zwei ist minus zwei, eins minus null ist eins.",None),
 ("*II : (−2)*: 0 · 1 · 1 · −½","Auf der Diagonale soll eine Eins stehen. Also teilst du Zeile zwei durch minus zwei: null, eins, eins und minus ein halb.",None),
 ("*I − 4·II*: 1−4·0 = 1 · 4−4·1 = 0 · 1−4·1 = −3 · 0−4·(−½) = 2","Über der Eins soll auch eine Null stehen: Zeile eins minus viermal Zeile zwei. Eins minus null ist eins, vier minus vier ist null, eins minus vier ist minus drei, null minus vier mal minus ein halb ist plus zwei.",None),
 ("Links *I* → rechts *A⁻¹ = (−3 2; 1 −½)*","Links steht jetzt die Einheitsmatrix. Rechts liest du die Inverse ab.",None)])
A3BI=[["−3","2"],["1","−½"]]
scene("Aufgabe 3 B: x und Probe","xvec","a3b",{"L":A3BI,"Ln":"A⁻¹","b":["6","4"],"y":["−10","4"],"A":F(A3B),"x":["−10","4"]},[
 ("x₁ = (−3)·6 + 2·4 = −18 + 8 = *−10*","Jetzt die Inverse mal b, mit b gleich sechs und vier. x eins: minus drei mal sechs ist minus achtzehn, zwei mal vier ist acht. Zusammen minus zehn.",["mul",0,frow(A3BI,["6","4"],0)+" = "+T("−10",GRN)]),
 ("x₂ = 1·6 + (−½)·4 = 6 − 2 = *4*","x zwei: eins mal sechs ist sechs, minus ein halb mal vier ist minus zwei. Ergibt vier.",["mul",1,frow(A3BI,["6","4"],1)+" = "+T("4",GRN)]),
 ("Probe mit A: 1·(−10) + 4·4 = *6* = b₁ ✓","Probe mit A: eins mal minus zehn plus vier mal vier ist sechs.",["probe",0,frow(F(A3B),["−10","4"],0)+" = "+T("6",GRN)]),
 ("2·(−10) + 6·4 = *4* = b₂ ✓","Zwei mal minus zehn plus sechs mal vier ist vier. Beides stimmt mit b überein.",["probe",1,frow(F(A3B),["−10","4"],1)+" = "+T("4",GRN)])])

# ---------- Aufgabe 3 C ----------
scene("Aufgabe 3 C: die Aufgabenstellung","stmt","a3c",{"html":STMT["a3c"]},[
 ("Aufgabe 3 C: diesmal mit der *Determinantenformel*.","Bei drei c ist das Werkzeug die Determinantenformel, also der Weg aus dem Beispiel.",None),
 ("det · Kofaktoren · transponieren · teilen · *mal b*","Erst prüfen, dann Kofaktoren, transponieren, teilen und mal b.",None)])
sarrus_scene("Aufgabe 3 C: die Determinante","a3c",A3C,"",
 "Blau: eins mal drei mal acht ist vierundzwanzig, zwei mal sieben mal drei ist zweiundvierzig, fünf mal zwei mal vier ist vierzig. Zusammen hundertsechs.",
 "Orange: fünf mal drei mal drei ist fünfundvierzig, eins mal sieben mal vier ist achtundzwanzig, zwei mal zwei mal acht ist zweiunddreißig. Zusammen hundertfünf.",
 "det A = 106 − 105 = *1* → durch 1 teilen ändert nichts: *A⁻¹ = C′*","Hundertsechs minus hundertfünf ist eins. Das ist ein Geschenk: Durch eins teilen ändert nichts. Die Inverse ist einfach die transponierte Kofaktormatrix.",with_setup=False)
s=[]
for i in range(3):
    for j in range(3): s.append(cof_auto(A3C,i,j))
scene("Aufgabe 3 C: die Kofaktormatrix","cof","a3c",{"M":A3C,"name":"A","done":[]},s)
A3CC=[[-4,5,-1],[4,-7,2],[-1,3,-1]]; A3CT=[list(r) for r in zip(*A3CC)]; x3c=[-5,23,-8]
scene("Aufgabe 3 C: transponieren","inv","a3c",{"C":F(A3CC),"CT":F(A3CT),"A":F(A3C),"Ai":F(A3CT),"det":"1","I":I3,"nodiv":True},[
 ("C′: Zeilen von C werden *Spalten* – und weil det = 1: *A⁻¹ = C′*","Transponieren: Zeile eins von C wird Spalte eins, und so weiter. Weil die Determinante eins ist, ist das schon die Inverse.","tr")])
def autox(L,v,r,nm,lab):
    pr=[L[r][k]*v[k] for k in range(len(v))]; res=sum(pr)
    cap=f"{lab} = "+" + ".join(f"{p(L[r][k])}·{p(v[k])}" for k in range(len(v)))+f" = *{f(res)}*"
    sp=f"{nm}: {plusminus(pr)}. Zusammen {w(res)}."
    return cap,sp,frow(F(L),F([v])[0],r)+" = "+T(f(res),GRN),res
s=[]
for r in range(3):
    cap,sp,fo,_=autox(A3CT,b3c,r,f"x {w(r+1)}",f"x{sub(r+1)}")
    if r==0: sp="Jetzt mal b, Zeile mal Spalte. "+sp
    s.append((cap,sp,["mul",r,fo]))
for r in range(3):
    cap,sp,fo,_=autox(A3C,x3c,r,f"Zeile {w(r+1)}",f"Probe Zeile {r+1}")
    cap+=f" = b{sub(r+1)} ✓"; 
    if r==0: sp="Probe mit A, unten eingeblendet. "+sp
    if r==2: sp+=" Also kommt genau b heraus."
    s.append((cap,sp,["probe",r,fo]))
scene("Aufgabe 3 C: x und Probe","xvec","a3c",{"L":F(A3CT),"Ln":"A⁻¹","b":F([b3c])[0],"y":F([x3c])[0],"A":F(A3C),"x":F([x3c])[0]},s)

# ---------- Aufgabe 4 ----------
scene("Aufgabe 4: die Aufgabenstellung","stmt","a4",{"html":STMT["a4"]},[
 ("Zwei Wasserquellen: Quelle 1 *salzarm*, Quelle 2 billig, aber *salzig*.","In Aufgabe vier gibt es zwei Wasserquellen. Quelle eins hat kaum Salz, Quelle zwei ist billig, aber viel zu salzig.",None),
 ("Gesucht: Mischverhältnis x mit *0,08 % Salz* und *pH 7,0*.","Gesucht ist ein Mischverhältnis x, so dass die Mischung null Komma null acht Prozent Salz und den pH-Wert sieben hat.",None),
 ("A) Gleichungen · B) A x = b · C) lösen · D) bewerten","Dazu sollst du die Gleichungen aufstellen, in Matrixform bringen, mit der Determinantenformel lösen und das Ergebnis bewerten.",None)])
scene("Aufgabe 4 A und B: das System aufstellen","a4set","a4",{},[
 ("x₁ = Anteil *Quelle 1* · x₂ = Anteil *Quelle 2*","x eins ist der Anteil aus Quelle eins, x zwei der Anteil aus Quelle zwei.",None),
 ("Zeile 1 Salz: 0,02 x₁ + 2,0 x₂ = *0,08*","Zeile eins ist der Salzgehalt: null Komma null zwei mal x eins plus zwei Komma null mal x zwei soll null Komma null acht ergeben.",None),
 ("Zeile 2 pH: 6,5 x₁ + 8,1 x₂ = *7,0*","Zeile zwei genauso mit den pH-Werten: sechs Komma fünf mal x eins plus acht Komma eins mal x zwei gleich sieben. Das ist Teil a.",None),
 ("B) Zahlen vor x → *A* · Zielwerte → *b*","Für Teil b schreibst du die Zahlen vor x eins und x zwei in die Matrix A und die Zielwerte in den Vektor b.",None)])
scene("Aufgabe 4 C: woher kommt die 2×2-Formel?","a4inv","a4",{},[
 ("det A = 0,02·8,1 − 2,0·6,5 = 0,162 − 13 = *−12,838*","Teil c. Zuerst die Determinante: null Komma null zwei mal acht Komma eins ist null Komma eins sechs zwei. Minus zwei mal sechs Komma fünf, also dreizehn. Ergibt minus zwölf Komma acht drei acht.",None),
 ("Was wird berechnet? *A⁻¹* – denn aus A x = b folgt *x = A⁻¹ · b*.","Was berechnen wir eigentlich? Wenn A mal x gleich b ist, dann ist x gleich Inverse mal b. Also brauchen wir zuerst die Inverse.",None),
 ("Gleiche Formel wie bei 3×3: A⁻¹ = C′ / det – nach dem Abdecken bleibt *eine Zahl*.","Die Inverse kommt aus derselben Formel wie bei drei mal drei. Bei zwei mal zwei bleibt nach dem Abdecken von Zeile und Spalte nur eine einzige Zahl übrig.",None),
 ("c₁₁ = *+d* · c₁₂ = *−c* · c₂₁ = *−b* · c₂₂ = *+a*","Für c eins eins bleibt d übrig, Vorzeichen plus. Für c eins zwei bleibt c, Vorzeichen minus. Für c zwei eins bleibt b, mit minus. Und für c zwei zwei bleibt a, mit plus.",None),
 ("Transponieren → C′ = (d −b; −c a): *Diagonale getauscht*, Nebendiagonale *Minus*","Jetzt transponieren. Dabei tauschen nur die beiden Minus-Einträge die Plätze. Heraus kommt: d und a haben auf der Diagonale getauscht, und die Nebendiagonale hat ein Minus. Genau das ist die Kurzregel.",None),
 ("Kontrolle: A · C′ = (ad−bc 0; 0 ad−bc) = *det · I* → durch det teilen → *I*","Warum stimmt das? A mal diese Matrix ergibt auf der Diagonale a mal d minus b mal c, also die Determinante, und daneben null. Teilst du noch durch die Determinante, steht dort die Einheitsmatrix.",None)])
scene("Aufgabe 4 C: mit unseren Zahlen","a4x","a4",{},[
 ("A⁻¹ = 1/(−12,838) · (8,1 −2,0; −6,5 0,02)","Mit unseren Zahlen: acht Komma eins und null Komma null zwei tauschen die Plätze, zwei Komma null und sechs Komma fünf bekommen ein Minus. Das Ganze geteilt durch minus zwölf Komma acht drei acht.",None),
 ("x₁ = (8,1·0,08 − 2,0·7,0) / (−12,838) = −13,352 / −12,838 ≈ *1,040*","Dann mal b. x eins: acht Komma eins mal null Komma null acht minus zwei mal sieben, das ist minus dreizehn Komma drei fünf zwei. Geteilt durch minus zwölf Komma acht drei acht ergibt etwa eins Komma null vier.",None),
 ("x₂ = (−6,5·0,08 + 0,02·7,0) / (−12,838) = −0,38 / −12,838 ≈ *0,030*","x zwei: minus sechs Komma fünf mal null Komma null acht plus null Komma null zwei mal sieben, das ist minus null Komma drei acht. Geteilt durch die Determinante etwa null Komma null drei.",None)])
scene("Aufgabe 4 D: lohnt sich Quelle 2?","a4bar","a4",{},[
 ("Verhältnis x₁ : x₂ ≈ 1,040 : 0,030 ≈ *35 : 1*","Teil d. Das Verhältnis: eins Komma null vier zu null Komma null drei, das sind etwa fünfunddreißig zu eins.",None),
 ("Auf 35 Teile Quelle 1 kommt nur *1 Teil* Quelle 2.","Auf fünfunddreißig Teile aus Quelle eins kommt also nur ein Teil aus Quelle zwei.",None),
 ("→ spart *kaum* teures Wasser – lohnt sich eher *nicht*.","Damit spart man kaum teures Wasser. Quelle zwei zu verwenden lohnt sich eher nicht.",None)])

# ---------- Knobel ----------
scene("Knobelaufgabe: die Aufgabenstellung","stmt","kn",{"html":STMT["kn"]},[
 ("Knobelaufgabe: eine 4×4-Matrix mit *Wurzeln*.","Die Knobelaufgabe: eine vier mal vier Matrix mit Wurzeln.",None),
 ("A) invertierbar? · B) A⁻¹ bilden und ihre *Eigenschaft* nennen","Du sollst prüfen, ob sie invertierbar ist, die Inverse bilden und sagen, welche Eigenschaft sie hat.",None),
 ("Hinweis: *geschickt* rechnen – Sarrus geht bei 4×4 *nicht*.","Der Hinweis verrät: Mit dem richtigen Trick sparst du viel Zeit. Sarrus geht bei vier mal vier gar nicht, und Gauß-Jordan mit Wurzeln dauert ewig.",None)])
scene("Knobel: der Trick mit dem Skalarprodukt","knob1","kn",{"M":KA},[
 ("Idee: Probier *A′* als Inverse – rechne *A · A′*.","Die Idee: Wir vermuten, dass die Transponierte schon die Inverse ist, und rechnen A mal A strich aus.",None),
 ("Spalte j von A′ = *Zeile j von A*.","Beim Transponieren werden die Zeilen von A zu den Spalten von A strich. Spalte j von A strich ist also Zeile j von A.",None),
 ("→ Eintrag (i, j) von A·A′ = *Zeile i · Zeile j* – ein Skalarprodukt","Deshalb ist jeder Eintrag von A mal A strich ein Skalarprodukt zweier Zeilen von A: Eintrag i j ist Zeile i mal Zeile j.",None),
 ("Diagonale: Zeile · *sich selbst* = Länge² → muss *1* sein.","Auf der Diagonale wird eine Zeile mit sich selbst multipliziert. Das ist ihre Länge zum Quadrat. Dort muss eine Eins herauskommen.",None),
 ("Daneben: zwei *verschiedene* Zeilen → muss *0* sein = *senkrecht*.","Neben der Diagonale treffen zwei verschiedene Zeilen aufeinander. Dort muss null herauskommen. Ein Skalarprodukt von null heißt: Die beiden Zeilen stehen senkrecht aufeinander.",None)])
scene("Knobel: nachrechnen","knob2","kn",{"M":KA},[
 ("Z1·Z1 = ¼+¼+¼+¼ = *1* · Z3·Z3 = ½+½+0+0 = *1*","Jetzt rechnen. Zeile eins mal sich selbst: viermal ein halb zum Quadrat, also viermal ein Viertel. Eins. Zeile drei mit sich selbst: ein halb plus ein halb. Auch eins. Die Zeilen zwei und vier gehen genauso.",None),
 ("Z1·Z2 = ¼ + ¼ − ¼ − ¼ = *0*","Zeile eins mal Zeile zwei: ein Viertel plus ein Viertel minus ein Viertel minus ein Viertel. Null.",None),
 ("Z1·Z3 = ½·1/√2 − ½·1/√2 + 0 + 0 = *0*","Zeile eins mal Zeile drei: Die beiden Wurzelterme heben sich gegenseitig auf. Wieder null.",None),
 ("Z3·Z4 = 0 + 0 + 0 + 0 = *0* – so ist *jedes Paar* 0.","Zeile drei mal Zeile vier: Wo die eine eine Zahl hat, hat die andere eine Null. Auch null. So ergibt jedes Paar null.",None),
 ("A · A′ = *I* → A⁻¹ = *A′* → A ist *invertierbar*","Damit ist A mal A strich die Einheitsmatrix. Genau so ist die Inverse definiert. Also ist A invertierbar, und die Inverse ist einfach die Transponierte.",None),
 ("Eigenschaft: A⁻¹ = A′ ist *orthogonal* – Zeilen Länge 1, paarweise senkrecht.","Die gesuchte Eigenschaft: Auch die Inverse ist orthogonal. Ihre Zeilen haben die Länge eins und stehen senkrecht aufeinander.",None)])

# ---------- Altklausur ----------
scene("Altklausur: die Aufgabenstellung","stmt","alt",{"html":STMT["alt"]},[
 ("Altklausur: *zwei* Systeme, A x = b und B x = b.","In der Altklausuraufgabe gibt es zwei Gleichungssysteme mit demselben b.",None),
 ("Erst: *lösbar*? Dann Lösung *nur* über die Kofaktormatrix.","Erst prüfst du, ob sie lösbar sind. Dann löst du sie, und zwar nur über die Kofaktormatrix. Andere Wege geben keine Punkte.",None),
 ("A und B unterscheiden sich nur in *Zeile 3*.","Achte darauf: A und B unterscheiden sich nur in der dritten Zeile.",None)])
sarrus_scene("Altklausur: det A","alt",AA,"",
 "Zuerst die Lösbarkeit. Für A blau: eins mal zwei mal drei ist sechs, zwei mal eins mal drei ist sechs, eins mal zwei mal zwei ist vier. Zusammen sechzehn.",
 "Orange: eins mal zwei mal drei ist sechs, eins mal eins mal zwei ist zwei, zwei mal zwei mal drei ist zwölf. Zusammen zwanzig.",
 "det A = 16 − 20 = *−4 ≠ 0* → Ax = b eindeutig lösbar","Sechzehn minus zwanzig ist minus vier. Nicht null, also ist A x gleich b eindeutig lösbar.",with_setup=False)
sarrus_scene("Altklausur: det B","alt",BB,"",
 "Für B blau: eins mal zwei mal zwei ist vier, zwei mal eins mal drei ist sechs, eins mal zwei mal drei ist sechs. Zusammen sechzehn.",
 "Orange: eins mal zwei mal drei ist sechs, eins mal eins mal drei ist drei, zwei mal zwei mal zwei ist acht. Zusammen siebzehn.",
 "det B = 16 − 17 = *−1 ≠ 0* → Bx = b eindeutig lösbar","Sechzehn minus siebzehn ist minus eins. Auch B x gleich b ist eindeutig lösbar. Beide Werte kennst du schon aus Übung eins.",with_setup=False)
s=[]
for i in range(3):
    for j in range(3): s.append(cof_auto(AA,i,j))
s[0]=(s[0][0],"Jetzt die Kofaktormatrix von A. "+s[0][1],s[0][2])
scene("Altklausur: Kofaktormatrix von A","cof","alt",{"M":AA,"name":"A","done":[]},s)
CA=[[4,-3,-2],[-4,0,4],[0,1,-2]]; CAT=[list(r) for r in zip(*CA)]
def xdiv_scene(title,C,CT,M,b,det,x,nm):
    v=[sum(CT[r][k]*b[k] for k in range(3)) for r in range(3)]
    s=[(f"C′: Zeilen von C werden *Spalten*.","Zuerst transponieren: Die Zeilen der Kofaktormatrix werden zu Spalten.","tr")]
    scene(title+": transponieren","inv","alt",{"C":F(C),"CT":F(CT),"A":F(M),"Ai":F(CT),"det":f(det),"I":I3,"nodiv":True,"cn":"C_"+nm},s)
    s=[]
    for r in range(3):
        cap,sp,fo,_=autox(CT,b,r,f"Zeile {w(r+1)}",f"Zeile {r+1}")
        if r==0: sp="Dann C strich mal b. "+sp
        s.append((cap,sp,["mul",r,fo]))
    xs=[str(v_) for v_ in x]
    s.append((f"x = ({'; '.join(f(z) for z in v)}) / ({f(det)}) = *({'; '.join(xs)})*",{"A":"Jetzt noch durch die Determinante, minus vier: Minus zwölf durch minus vier ist drei, minus eins durch minus vier ist null Komma zwei fünf, zehn durch minus vier ist minus zwei Komma fünf. Das ist genau die Lösung aus Übung eins.","B":"Jetzt noch durch minus eins teilen, also alle Vorzeichen umdrehen: drei, drei, minus acht. Auch das passt zu Übung eins."}[nm],["div"]))
    xs2=[z.replace('-','−') for z in xs]; xn=[float(z.replace('−','-').replace(',','.')) for z in xs]
    for r in range(3):
        fo=frow(F(M),xs2,r)+" = "+T(f(b[r]),GRN)
        terms=" + ".join(f"{p(M[r][k])}·{('('+xs2[k]+')') if xs2[k].startswith('−') else xs2[k]}" for k in range(3))
        cap=f"Probe Zeile {r+1}: {terms} = *{f(b[r])}* ✓"
        prs=[M[r][k]*xn[k] for k in range(3)]
        def sw2(v):
            v=round(v,2); 
            if abs(v-round(v))<1e-9: return w(int(round(v)))
            ip=int(abs(v)); fr=str(abs(v)).split('.')[1]
            return ("minus " if v<0 else "")+w(ip)+" Komma "+" ".join(w(int(ch)) for ch in fr)
        words=sw2(prs[0])+", "+", ".join(("plus "+sw2(q)) if q>=0 else ("minus "+sw2(-q)) for q in prs[1:])
        sp_=("Probe mit "+nm+": " if r==0 else "")+f"Zeile {w(r+1)}: {words}. Ergibt {w(b[r])}."
        s.append((cap,sp_,["probe",r,fo]))
    scene(title+": Lösung","xvec","alt",{"L":F(CT),"Ln":"C′"+("_A" if nm=="A" else "_B"),"b":F([b])[0],"y":F([v])[0],"div":{"det":f(det),"x":xs2},"A":F(M),"x":xs2,"An":nm},s)
xdiv_scene("Altklausur: Ax = b",CA,CAT,AA,bb,-4,["3","0,25","−2,5"],"A")
CB=[[1,-1,0],[-1,-1,3],[0,1,-2]]; CBT=[list(r) for r in zip(*CB)]
s=[("Zeile 3 gestrichen → *A und B gleich* → c₃₁, c₃₂, c₃₃ *wie bei A*","Jetzt B. Bei c drei eins, c drei zwei und c drei drei wird Zeile drei gestrichen. Genau die Zeile, in der sich A und B unterscheiden. Diese drei Kofaktoren sind also dieselben wie bei A.",["same"])]
for i in range(2):
    for j in range(3): s.append(cof_auto(BB,i,j))
scene("Altklausur: Kofaktormatrix von B","cof","alt",{"M":BB,"name":"B","done":[],"same":[[2,0],[2,1],[2,2]]},s)
xdiv_scene("Altklausur: Bx = b",CB,CBT,BB,bb,-1,["3","3","−8"],"B")

scene("Merke","merke",None,{},[
 ("1. *det A* – ist sie 0, gibt es *keine* Inverse.","Merke: Zuerst immer die Determinante. Ist sie null, gibt es keine Inverse.",None),
 ("2. c_ij: *Zeile i + Spalte j* abdecken, 2×2-det, *Schachbrett*.","Für jeden Kofaktor: Zeile und Spalte abdecken, die kleine Determinante rechnen, Vorzeichen aus dem Schachbrett.",None),
 ("3. C *transponieren*, durch det teilen.","Dann die Kofaktormatrix transponieren und durch die Determinante teilen.",None),
 ("4. *Probe* mit A: A · x = b bzw. A · A⁻¹ = I.","Und am Ende die Probe mit der ursprünglichen Matrix. Sie findet fast jeden Vorzeichenfehler.",None)])
scene("Selbst üben","end",None,{},[
 ("Rechne alles in deiner GoodNotes-Datei „Übung 02 ausführlich“ nach.","Rechne jetzt alles selbst in deiner GoodNotes-Datei nach. Die Schablonen sind schon vorgezeichnet.",None)])

scene("Teil 1 geschafft","end2",None,{},[("Weiter in *Teil 2*: Aufgabe 3 C, Aufgabe 4, Knobel und Altklausur.","",None)])
# ---- schreiben ----
S=[(t,[(c,sp) for c,sp,_ in ss]) for t,_,_,_,ss in SC]
open("script.py","w").write("# Lernvideo 04 v2 – erzeugt von gen.py\nS = "+repr(S)+"\n")
SPEC=[{"kind":k,"strip":st,"data":d,"tags":[tg for _,_,tg in ss]} for _,k,st,d,ss in SC]
open("spec.js","w").write("window.SPEC="+json.dumps(SPEC,ensure_ascii=False)+";\nwindow.STRIPS="+json.dumps(STRIPS,ensure_ascii=False)+";\n")
tot=sum(len(sp) for _,ss in S for _,sp in ss)
print("Szenen",len(S),"Zeichen",tot)
