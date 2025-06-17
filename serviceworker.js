console.log('I am a worker');

globalThis.addEventListener('fetch', event => {
  console.log('http requested' + ` ${event.request.url}`);

  event.respondWith(new Response('Hey hehe'))
});