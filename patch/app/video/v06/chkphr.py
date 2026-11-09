import sys, find as FM
bad=[]
orig=FM.find
def safe(d,p,ph,occ=0,pad=2):
    try: return orig(d,p,ph,occ,pad)
    except KeyError as e: bad.append(str(e)); return [0,0,10,10]
FM.find=safe
import lib; lib.find=safe
exec(open(sys.argv[1]).read().replace('write("','_w=("'))
print("\n".join(bad) or "alle Phrasen gefunden")
