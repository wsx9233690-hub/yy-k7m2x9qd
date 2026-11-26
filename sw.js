// YENYANG 外殼：只快取外殼本身，平台資料一律即時向伺服器拿
const C='yy-shell-v7',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||e.request.method!=='GET'||u.search)return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
