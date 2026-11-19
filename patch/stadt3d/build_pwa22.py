import re, json, hashlib, os, sys, shutil
OUT=sys.argv[1] if len(sys.argv)>1 else 'pwa'
app=open('app.html',encoding='utf-8').read()
fr=open('fragen_v20full.js',encoding='utf-8').read()
app=app.replace('/*FIGS*/',open('figs.js',encoding='utf-8').read())
ver=re.search(r'APP_VERSION = "([^"]+)"',app).group(1)
body=app.replace('<meta name="claude:viewport-fit-sides" content="cover">\n','')
body=body.replace('<script>\n/*FRAGEN*/\n</script>','<script src="fragen.js"></script>')
body=body.replace('<script>\n/*THREE*/\n</script>','<script src="three.min.js"></script>')
assert '<script src="three.min.js">' in body
assert '<script src="fragen.js">' in body
i=body.index('</style>')+len('</style>')
head='''<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Klausurduell">
<meta name="theme-color" content="#eef1f6" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#07090f" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}</style>
'''
os.makedirs(OUT,exist_ok=True); shutil.copy('three.min.js', OUT+'/three.min.js')
open(OUT+'/index.html','w',encoding='utf-8').write(head+body[:i]+'\n</head><body>\n'+body[i:]+'\n</body></html>\n')
open(OUT+'/fragen.js','w',encoding='utf-8').write(fr)
open(OUT+'/manifest.webmanifest','w').write(json.dumps({"name":"Klausurduell","short_name":"Klausurduell","description":"Spielerisch lernen für die Klausuren im Bauingenieurwesen","lang":"de","start_url":"./","scope":"./","display":"standalone","background_color":"#eef1f6","theme_color":"#0a7cff","icons":[{"src":"icons/icon-192.png","sizes":"192x192","type":"image/png"},{"src":"icons/icon-512.png","sizes":"512x512","type":"image/png","purpose":"any"},{"src":"icons/icon-512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]},ensure_ascii=False,indent=1))
h=hashlib.sha1((open(OUT+'/index.html').read()+fr).encode()).hexdigest()[:8]
open(OUT+'/sw.js','w').write(f'''/* Klausurduell Offline-Speicher · Version {ver} ({h}) */
const CACHE = "klausurduell-{ver}-{h}";
const FILES = ["./", "index.html", "fragen.js", "three.min.js", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => {{ e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); }});
self.addEventListener("activate", e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener("fetch", e => {{
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) return;
  /* Seite und Fragen: erst Netz (für Updates), sonst Offline-Kopie */
  if (r.mode === "navigate" || url.pathname.endsWith("fragen.js")) {{
    e.respondWith(fetch(r).then(res => {{ const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }}).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
    return;
  }}
  e.respondWith(caches.match(r).then(m => m || fetch(r)));
}});
''')
open(OUT+'/README.md','w').write(f'''# Klausurduell

Lern-App für das Bauingenieurstudium an der RWTH: Merk- und Vorgehensfragen mit Lernstufen, Tagesziel und Serie.

- App öffnen: `https://<benutzername>.github.io/klausurduell/`
- iPhone: in Safari öffnen → Teilen → „Zum Home-Bildschirm“
- Der Lernstand liegt nur auf dem Gerät. Backup unter „Lernstand → Daten sichern“.

Version {ver} · Fragen in `fragen.js`, App in `index.html`, 3D-Grafik der Stadt mit three.js (MIT-Lizenz) in `three.min.js`.
''')
print(ver,h)
