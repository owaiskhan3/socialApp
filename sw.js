// caching app shell
// dynamic cache

// install
// activate
// fetch

const appShellCache = "EXMS3-PWA-v1.1";
const assets = [
  "/",
  "/index.html",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
  "/css/style.css",
  "/js/main.js",
  "/manifest.json"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(appShellCache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(cacheKeys => {
      return Promise.all(
        cacheKeys
          .filter(cache => cache !== appShellCache)
          .map(cache => caches.delele(cache))
      );
    })
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheResponse => {
      return cacheResponse || fetch(evt.request);
    })
  );
});
