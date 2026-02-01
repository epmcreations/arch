// Empty service worker - just for PWA Builder
self.addEventListener('install', event => {
  // Skip waiting
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Claim clients
  event.waitUntil(self.clients.claim());
});

// DON'T intercept fetch requests for GitHub Pages
// Leave fetch events alone
