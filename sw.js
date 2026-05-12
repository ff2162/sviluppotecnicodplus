const CACHE_NAME = 'dplus-mach1-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo-icon-192.png',
  './logo-icon-512.png'
];

// Installazione: scarica i file nella cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Funzionamento offline: se non c'è rete, usa i file in cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
