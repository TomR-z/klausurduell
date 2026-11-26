/* Klausurduell Offline-Speicher · Version 3.0 (e74c4050) */
const CACHE = "klausurduell-3.0-e74c4050";
const FILES = ["./", "index.html", "fragen.js", "three.min.js", "gltf-umd.js", "stadt.glb", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "v25/", "v25/index.html", "v25/fragen.js", "v25/three.min.js"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); if (e.data === "version" && e.ports && e.ports[0]) e.ports[0].postMessage(CACHE); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) return;
  /* Seite und Fragen: erst Netz (für Updates), sonst Offline-Kopie */
  if (r.mode === "navigate" || url.pathname.endsWith("fragen.js")) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r)));
});
/* v2.5: Erinnerungen (Push) */
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = {body: e.data ? e.data.text() : ""}; }
  e.waitUntil(self.registration.showNotification(d.title || "Klausurduell", {body: d.body || "", icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: d.tag || "klausurduell", data: {url: d.url || "./"}}));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope), hash = url.hash;
  e.waitUntil(clients.matchAll({type: "window", includeUncontrolled: true}).then(cs => {
    for (const c of cs) { if ("focus" in c) { c.postMessage({goto: hash}); return c.focus(); } }
    return clients.openWindow(url.href);
  }));
});
