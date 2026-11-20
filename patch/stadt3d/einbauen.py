# Fügt CSS und JS der 3D-Stadt zwischen Markern in app.html ein (wiederholbar)
import re
p='app.html'; s=open(p,encoding='utf-8').read()
css=open('c3/stadt3d.css',encoding='utf-8').read()
js=''.join(open('c3/'+f,encoding='utf-8').read() for f in ['f_wirtschaft.js','a_basis.js','b_gebaeude.js','g_bauten23.js','c_welt.js','d_leben.js','e_ui.js','h_ui23.js'])
CS,CE='/* ── 3D-STADT CSS START ── */','/* ── 3D-STADT CSS ENDE ── */'
JS,JE='/* ── 3D-STADT START ── */','/* ── 3D-STADT ENDE ── */'
if CS not in s: s=s.replace('/* tab bar */',CS+'\n'+CE+'\n\n/* tab bar */',1)
if JS not in s: s=s.replace('\nlet dropT = 0;','\n'+JS+'\n'+JE+'\n\nlet dropT = 0;',1)
s=re.sub(re.escape(CS)+'.*?'+re.escape(CE), lambda m: CS+'\n'+css+CE, s, flags=re.S)
s=re.sub(re.escape(JS)+'.*?'+re.escape(JE), lambda m: JS+'\n'+js+'\n'+JE, s, flags=re.S)
open(p,'w',encoding='utf-8').write(s); print('ok', len(s))
