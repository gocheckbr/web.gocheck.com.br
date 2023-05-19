'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2cc993d7e079ceb42b888207989df8d6",
"index.html": "c7ec7fd436fd546762c57f6e4e139967",
"/": "c7ec7fd436fd546762c57f6e4e139967",
"main.dart.js": "c8b6a2f722861d6f169cefdae6194043",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8b7729638f5808b78e3bdfd8efb2b30",
"assets/AssetManifest.json": "f32029bde72fe8ce0737e5695bc7687e",
"assets/NOTICES": "d9ff101af40e831326a395ba49ed059e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/traducao.json": "f2f502b7c7f767dc7257f2164b2de1b1",
"assets/lib/internalization/translates.json": "e98a9fef403559e09539a484b03ea1ae",
"assets/lib/internalization/traducao.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "29f6e6ce19e4e39701d3024026aeff6c",
"assets/fonts/MaterialIcons-Regular.otf": "a0abd1eec8d167ab520037e18806e4cc",
"assets/imagens/documentos.png": "ea3ba20f27e6212927a44e4d26cebabb",
"assets/imagens/config.svg": "ee82cf8d97897df2d429b67997c1bdd5",
"assets/imagens/group.png": "02ed30ad96e56e6448106e3d41111ccd",
"assets/imagens/sigla.png": "0a444eac38efeace20e8e4e373a3bcad",
"assets/imagens/diario.jpg": "66b537f50d4186f94483a6ecd270fb0b",
"assets/imagens/home.jpg": "943965750fd8b8a87d01ef629ffd7e1a",
"assets/imagens/escala.png": "401d6f3a1ac9570d7f513e4f72533289",
"assets/imagens/user.png": "5a6fc7beab82d83346cfa3c5c3f3d821",
"assets/imagens/pilot.png": "8b7733ad0b7180fd8be342fb381ea2ac",
"assets/imagens/logo.png": "0f9383e9b50127c57025950e78431f22",
"assets/imagens/logo4.jpg": "0f9383e9b50127c57025950e78431f22",
"assets/imagens/icone_logo.png": "7ed4bd2910b95c7b568785bb3af1241c",
"assets/imagens/sigla_icone.png": "955a0c5d1f13687b4a41b218b9a8e2ef",
"assets/imagens/dados.jpg": "1c874bf183f9ce394192827c5f36251b",
"assets/imagens/LATOP_logo.jpg": "772ba25cf096fa562791275882219248",
"assets/imagens/apresentacao2.png": "d1eaae917e29a05cd55073f0f004d40e",
"assets/imagens/apresentacao.jpg": "597c11a11dcfd412418c16b811d6c34e",
"assets/imagens/folga.jpg": "e2fc61f73ce93b9c08762df1c538898b",
"assets/imagens/apresentacao1.png": "df2197ed850457493d68964899ca6414",
"assets/imagens/ic_aviao.png": "cedd3bca183fbe108cef50630a5bc508",
"assets/imagens/estrela.png": "4e42620ea3c4fbf423647439a29ef00e",
"canvaskit/skwasm.js": "7313e68a7969003a7d46549330a6bdba",
"canvaskit/skwasm.wasm": "b943ac3902333b76543e1cdb69f35555",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "cacb9bfbc25e150e4eea556351b73ff0",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "ec76639d72ae889a2e7f8e3fe2449dfa",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
