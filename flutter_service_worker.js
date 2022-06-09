'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "01577135c54d6b7dbb627162e2d111d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/NOTICES": "fe51b0d3b9f4946fa4df248439592fcb",
"assets/lib/map_style/dark.json": "180949dc06b0d075f7ef5acd7a89bbb1",
"assets/lib/svg/alarme.svg": "db40f0aa589fdffaaca98a742ce563b6",
"assets/lib/svg/solicitacao.svg": "b3141cc8e0a2a332681f882aff2f1b26",
"assets/lib/svg/pontos.svg": "0078ffe67a84e5cfb0e0f88b14213975",
"assets/lib/svg/notificacao.svg": "e58a7433212f7e72a2d0469394ce15f4",
"assets/lib/svg/arquivo_check.svg": "3d20b8f4411fd4ef2ca53ca48adca590",
"assets/lib/svg/calendario.svg": "34a2210d0f5987970fadb1f8aac36553",
"assets/lib/svg/relogio.svg": "ebe9337385bbf9756c279cfc1008027d",
"assets/lib/svg/angle_right.svg": "74c42c5a4b0718cfd8ef4c04f0a7d7f7",
"assets/lib/svg/local.svg": "7d38814437ed9defa2883d610c58765f",
"assets/lib/svg/edicao.svg": "a9ab05a955fe231b83d24247139dd585",
"assets/lib/svg/estrela.svg": "e75c66fed64ff8eea97e47c7df18b546",
"assets/lib/svg/pendente.svg": "1df07f7e093da5f813a59f5c39dd04d5",
"assets/lib/svg/lixeira.svg": "c268f1c525e92b807c8065646a45391d",
"assets/lib/svg/entrada.svg": "ae039194e6f6c3d934c858be514ba645",
"assets/lib/svg/recusado.svg": "5d18dc7aeadd391cd108ed0f70a3e84b",
"assets/lib/svg/arquivo_download.svg": "dd7b9492cf9450d937327cb58e596133",
"assets/lib/svg/timeline_small.svg": "e3d7318a018ba0d310d8a4227b8b8c42",
"assets/lib/svg/timeline_long.svg": "041cdecfb8c68bcb0f9d4dd8a841f54b",
"assets/lib/svg/saida.svg": "33009d7b02c58232feb1ea5c66c68d4e",
"assets/lib/svg/arquivo.svg": "222a7d551b396db4dcfbc27a2e4ea7c6",
"assets/lib/svg/seta_voltar.svg": "33718094b55cf6ea5b5f10b1679d8fb8",
"assets/lib/svg/off.svg": "9e97a8e57110814eb82ada8c00c58dbd",
"assets/lib/svg/loading-status.svg": "9111c19da49615b7200a16a649587e1c",
"assets/lib/svg/atraso.svg": "2f6393b42cc444959fde5c1a39d857c7",
"assets/lib/svg/config.svg": "ee82cf8d97897df2d429b67997c1bdd5",
"assets/lib/svg/senha.svg": "7286399e978fd56ee94d5d33f5012337",
"assets/lib/svg/calendario_data.svg": "0a0dcfb3e25159634fba459532262d43",
"assets/lib/svg/adicionar.svg": "376bdce8e5a77434fd29155e3bc93f6c",
"assets/lib/svg/pausa.svg": "3a07777557df61df7484ebc646bed30b",
"assets/lib/svg/calendario_tempo.svg": "7dd85f7bfa7f84684e9baecc2f4cc12c",
"assets/lib/svg/check-status.svg": "2fc050796b1b4485a7ace6b9ef624d26",
"assets/lib/svg/aprovado.svg": "4663f47407050250fe575427de582e54",
"assets/lib/svg/requisicoes.svg": "1449a9c38b0aa0a3dd83b77591142d1c",
"assets/lib/svg/facebook.svg": "fddba1bc379246c726c29e92bfe38ec9",
"assets/lib/svg/instagram.svg": "22cdabe8f553e5b53ca88573c2d985f6",
"assets/lib/svg/caret.svg": "40bc60dfd4e098585fae8bb16a9ee803",
"assets/lib/svg/chave.svg": "53513821ab1107c62260e6250aadac9d",
"assets/lib/svg/alert-status.svg": "329a5418882f4f3b04b4193cb5ad405b",
"assets/lib/svg/graficos.svg": "ccd59731177e88717230c1db54e7cb26",
"assets/lib/svg/null-status.svg": "b6e7ca23825a7a5fbbada9e24be130c0",
"assets/lib/svg/email.svg": "becae786e3f245bad347671a68b591b9",
"assets/lib/svg/map.svg": "166b2195ff7af81f208bf6a4d8186380",
"assets/lib/svg/mensagem.svg": "1a3fdfaafe549aa46d1bad313e73aad2",
"assets/lib/svg/inicio.svg": "773d351de4b74c4197df624bd9af6247",
"assets/lib/svg/chart-donut.svg": "cad702b1794d535148006082251eafe6",
"assets/lib/svg/earth.svg": "e853e8e040911a1d448eb7671da4b1f6",
"assets/lib/svg/qrcode.svg": "64aeb15d420ac198f4c25d4f90822ed0",
"assets/lib/svg/chart-bar.svg": "2b479a64063f0e38e2acdd80cafca786",
"assets/lib/svg/arquivo_exportar.svg": "7614bafc96448280aff825fa60085503",
"assets/lib/svg/fechar.svg": "73cb208c87c565fb6e386d2d7a22f260",
"assets/lib/svg/ferias.svg": "ed23c5b6c53ceb2d8bff8f359eefc067",
"assets/lib/svg/youtube.svg": "f63dafd0bea692dcbb7709b472c2ae71",
"assets/lib/svg/falta.svg": "e0cfae56983a24fbe3df84bce44b777f",
"assets/lib/svg/adicao.svg": "e341959426d6de7f0183927b6a9a4698",
"assets/lib/svg/camera.svg": "0b991f35b9af06bf5b4cc7f558b4716e",
"assets/lib/svg/seta_direita.svg": "2ccad2abd8adaf1d3cc6086e399c302a",
"assets/lib/img/file.svg": "52b2fb8fee1528dd7dcadb61d1da7f11",
"assets/lib/img/LOGO-ANIMADA-PARTE_02.gif": "d61e6b6a449e3396e431c823a460da41",
"assets/lib/img/completo.gif": "ef7c09dd08fcbd084b2d88d11df32b51",
"assets/lib/img/user.svg": "c893032fc0a3c390ae7d0c27b8f03679",
"assets/lib/img/LOGO-ANIMADA-PARTE_01.gif": "2287b81235c3727533e0dc0cc6723ec0",
"assets/lib/img/gocheck.png": "e65f1fbe72e31386f5b23ef60bcc9e2b",
"assets/lib/img/gocheck-noname.png": "ae7c05b3132ebbb2ee56ec3475c7f7b4",
"assets/lib/img/load.gif": "417525a3580c33907e3a695575ba2a2a",
"assets/lib/img/bar.svg": "94260353a9f906a7d08b8c812cc4b3e5",
"assets/lib/img/map.png": "4e4e8e498299ff69e70bfb758b9b76ac",
"assets/lib/img/earth.png": "7fd9d2165a582c107e8b26c0c8c01e44",
"assets/lib/img/building.png": "3740ffc32d24c025078f2c009ef0cb97",
"assets/lib/img/cara.gif": "68222ce7852a6b64cf2557d5bb501e95",
"assets/lib/img/camera.png": "495fa156fa1893489838994017511375",
"assets/lib/img/upload.svg": "e18dba56d70ccd9e1448cd5e91bba299",
"assets/lib/fonts/Comfortaa-Regular.ttf": "d350ce249a30596db0ed98838873a907",
"assets/lib/fonts/Comfortaa-Bold.ttf": "7695aeab83089e2ceacc05dfa159a17f",
"assets/lib/fonts/SF-Pro-Rounded-Heavy.otf": "a498f369bb8b0a1687c87c827bfbc2b0",
"assets/lib/fonts/SF-Pro-Rounded-Medium.otf": "ea4c85c19095900dfbb7d06a0b9f815f",
"assets/lib/fonts/SF-Pro-Rounded-Thin.otf": "b2592df4ccd6db5a0d865cc246cc0995",
"assets/lib/fonts/SF-Pro-Rounded-Black.otf": "f0dac5b3d3b0feb3e6f93527c14333aa",
"assets/lib/fonts/SF-Pro-Rounded-Semibold.otf": "dc24eab86e4e07b110036711737402d9",
"assets/lib/fonts/SF-Pro-Rounded-Light.otf": "a2ed024298c297a4b313731d28429aeb",
"assets/lib/fonts/SF-Pro-Rounded-Ultralight.otf": "a22dc354e3ce24cd6f5f265fc908178e",
"assets/lib/fonts/SF-Pro-Rounded-Bold.otf": "7ca9a509e5a22c576b796a16658a9ad9",
"assets/lib/fonts/Comfortaa-Light.ttf": "866333be226453f3a24c2ff09b665702",
"assets/lib/fonts/SF-Pro-Rounded-Regular.otf": "65e44011e184b9ff8f36248614d71139",
"assets/FontManifest.json": "0c88efbefeb0ef9d6ceaf0610bd2ad03",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "fdae53acfbaf7f9ccfc13415a475062f",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "ea49a6f395c5072138fac38f5adb8905",
"/": "ea49a6f395c5072138fac38f5adb8905",
"manifest.json": "75b550bf966fecfd2675c94785dce373",
"main.dart.js": "5ecbd794738b876c63942654c76de362"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
