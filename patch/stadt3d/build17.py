import sys
def build(app,fr,out):
    s=open(app,encoding='utf-8').read()
    s=s.replace('/*THREE*/',open('three.min.js',encoding='utf-8').read(),1)
    s=s.replace('/*FIGS*/',open('figs.js',encoding='utf-8').read()).replace('/*FRAGEN*/',open(fr,encoding='utf-8').read())
    open(out,'w',encoding='utf-8').write(s); return s
build(*sys.argv[1:4])
