const CACHE_NAME = 'atchat-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['index.html', 'manifest.json']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Listener for background notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New Secure Message',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png'
  };
  event.waitUntil(self.registration.showNotification('ATchat', options));
});
