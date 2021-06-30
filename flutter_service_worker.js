'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "51030db491cae256b27ab7b65c162cc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "776f89cf99dcbe739be62cc01024f394",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95a0e2c8e0241b1fbe6eaece28371ef1",
".git/logs/refs/heads/main": "20b07c6873508af1d0ce882e1ff34448",
".git/logs/refs/remotes/origin/master": "80dd49984a1ec0b1df07db2706823de8",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/12/a964c215256436b4cd6d06732c99889eb1d2e9": "ad439f7e522ba46cc022375473a570f2",
".git/objects/15/b5c0d2e1b5e3feacff7135ee0205774b171477": "76e71bbf58311ee02b6703328ab38445",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/9f24c95514d35ae5e44fe4157e00ea3e67e07f": "8916e5ba0e4e7d25dbd18baeedb988bb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/42/d507aa828e631ac8f949673ee2cedd7304a266": "ef02bd9c81acba62c9a705b817710162",
".git/objects/4e/0d4e4507921ed5ce1359167284ccc4387129dd": "56218479ad326b3c20ff924b2d14a10f",
".git/objects/5b/b52ce4f58ac91217e78ae3a0a0ab043ee8e91f": "b408b29e8b9bd28c564651f03d34d002",
".git/objects/62/ce024d30df1e8c62d7e2f66a67371bdcce1d31": "8ec3e3f1240fe26f2a25cc88b4b4486a",
".git/objects/66/3e5cc37b5e981f2ad1ee54caafc4000d541862": "f5b6d0606ac0c55c1549dbfa769bc518",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7d8414beb1f4dc4195191da4b46bc25673a3cc": "c785ee36f7511fceddc80e1f24b60359",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/85/b4182a13a87548347caea043389939f9c1981d": "b20b9471294c0f371a09929b613fbe2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/98/376a7fff3a95cff74627d48ec76b288814a587": "7f4e96a6512a0838b6c6b5d7772a9105",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/34cb5bdc7faa4bbe9483dcb7cbf1653416e569": "0c039234acc5770ac20776a9aa7a4f0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/be/940e0bc62b06766a7f1a937b0d12ecfb750a90": "bb962c56d9907b75d41cc00971c4c0b4",
".git/objects/c0/802c5fba60f87fff58866a802530a8c179ea20": "a4de48639936aa7dad077eee23fda26c",
".git/objects/c1/c768a02cd5e5ca8298255d7a5a03fad615eed6": "33cc58ccd12eab4580bb07c836f66616",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/e171ef2abc24fa428b031d84ec6dd4e55dd286": "90301ee686364d58a515eeda08780ca8",
".git/objects/d1/ec5b86e9d5f4379ca2b5d4e131103ee4c1c5f6": "59aa2cbc81470f05eb9c3d56803ef020",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e3/db8936d8c94af33b17eeca766f68eaaa0f5c61": "c98a3998537e23dff7eef9d54600363b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/db3ec61a197dc8c85ffcedabfae94281909e42": "a4207a9ce3ab7f2d221d837fa80f86a1",
".git/objects/e6/9edc9a26eb5877077a912cfbaa242c2215e5b0": "93870a73b7f08db5734fdc6950d444e5",
".git/objects/f1/98d2f359d291b66e3a5aa79ef2529b554f22ce": "079ecdad20a46b44f1476dd029fe319b",
".git/objects/f5/616b6e18abd18e61ab0d6c90516669f7f51284": "244c3d6e761a667e0cbc3bb246d48f20",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/ff/7785382aef2204b9fe47b95751f8312862c6b2": "938197216e513664f2ac36c109dbde4a",
".git/refs/heads/main": "98620e64db48d7a3167f106b041b1545",
".git/refs/remotes/origin/master": "98620e64db48d7a3167f106b041b1545",
"assets/AssetManifest.json": "5b9841d71a86783528c4506d1394ee03",
"assets/assets/images/enderchest.png": "0e884cd33dc9821e450f79fa7c00964c",
"assets/assets/svgs/logo.svg": "5e14d3fbc62f9d0651950656c6cb5dd2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "340e590ca971c90271f5e493277d0433",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c5caf999382a2a18be0b9239ae621426",
"/": "c5caf999382a2a18be0b9239ae621426",
"main.dart.js": "1ba148000904e4cbf5af661b442cc5f1",
"manifest.json": "9dd32ab24831d1f03f825fe3c4a6f30c",
"README.md": "b485495cf5064dcb7200307aa1bfd2dc",
"version.json": "66ec05f3c3f69545e0353398e8c6220c"
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
