// Basic service worker for PWA Builder
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
  // You can add caching strategies here
  event.respondWith(fetch(event.request));
});
