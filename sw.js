let cache_name = "mydb";
let url_tobeload = [
                    '/',
                    '/css/styles.css',
                    '/data/restaurants.json',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/8.jpg',
                    '/img/9.jpg',
                    '/img/10.jpg',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/restaurant_info.js',
                    'index.html',
                    'restaurant.html',
                    'restaurant.html?id=1',
                    'restaurant.html?id=2',
                    'restaurant.html?id=3',
                    'restaurant.html?id=4',
                    'restaurant.html?id=5',
                    'restaurant.html?id=6',
                    'restaurant.html?id=7',
                    'restaurant.html?id=8',
                    'restaurant.html?id=9',
                    'restaurant.html?id=10',
                   ];

this.addEventListener('install',(e)=>{
  e.waitUntil(
    caches.open(cache_name)
     .then((ca)=>{
       ca.addAll(url_tobeload)
     })
  )
})

this.addEventListener('fetch',(e)=>{
  e.respondWith(
    caches.open(cache_name)
     .then((ca)=>{
       return ca.match(e.request)
        .then((res)=>{
          return res || fetch(e.request)
           .then((res)=>{
             ca.put(e.request,res.clone())
             return res
           })
        })
     })
  )
})

self.addEventListener('activate', function(event) {

  var listCache = ['cache_name', 'blog-posts-cache-v1'];
  console.log("Service Worker activated successfully");
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (listCache.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);

          }
        })
      );
    })
  );
});
