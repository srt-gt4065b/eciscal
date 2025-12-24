// 파일명: sw.js
self.addEventListener('install', (event) => {
  console.log('[Service Worker] 설치됨');
});

self.addEventListener('fetch', (event) => {
  // 네트워크 요청을 가로채서 처리하는 로직 (기본 패스스루)
  event.respondWith(fetch(event.request));
});
