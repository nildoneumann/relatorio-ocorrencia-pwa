self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('offline').then((cache) =>
      cache.match(event.request).then(
        (res) => res || fetch(event.request)
      )
    )
  );
});
