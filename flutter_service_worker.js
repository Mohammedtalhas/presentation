'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1cec4d3e78e3a6245b0f23b03739abde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "821241cf5492bf34f72715d2e6527cfd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "01141f646a552376c4dbcb98f0a24f83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f7603411aab6c4adf5b872528bdeec6",
".git/logs/refs/heads/main": "66a7843c21d8683e10884d87e98a44e4",
".git/logs/refs/remotes/origin/main": "6ae0af7853f1af359becdc6ed9d0a059",
".git/objects/08/eb4ee10fc2798cc7c3c7955c19517b8bf8355b": "36b13184acf5aefc60164053dbec74d6",
".git/objects/0b/7fdf9f5847d0ebc5fccc474a5fd242043c6c5c": "f406ed8e699053fcd480e8a7a7e4189c",
".git/objects/0d/eda3ae2e5d924e8b248e36a15b3fd9e64d2fa4": "b8e07081e645a7a01c6f82a9516dda83",
".git/objects/0e/8e72a7bdeb8fe31d5a3b1c80f578feb1c38c83": "f4a34268cbc5a023afe060cf4b9934f6",
".git/objects/1e/c4f267a1318111a23193a1e0054df218ed19dd": "fbaed8d04d958541d164678ec39f1b44",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/5801491c30d9f3245330d65c74a4a4fd779124": "7cbbf6b366e7d7af7af896a408d788d1",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/67e4e516f28ab3088e359f3de238584c676c09": "08436745a3c6fa4d9a1a1822f2f46bd9",
".git/objects/38/3ace6d9fa46f1df12db8fb335aeb6c3d697449": "8a85971524eebdd979ab15fbe3b988ea",
".git/objects/38/47ca4c64f15f2b455b8f3d9dd39ec946feb456": "24b467846234147c1a54df84d018dcba",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/42/cdfd7e54995b6959c398bf9a9256dff9319cca": "f0cc817cee94dac984208317f5ec08ee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e13fcfb18130a576fd01c6e9abf0bde6d1d60d": "372f49a933e668aa479d9a7b48e831bd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/baf9aae4678d2b2051617a56067239680306cf": "9fce2893301f0e5e9f5501b3492c7a7b",
".git/objects/57/226735f915c12e8d29ed2e212a55f9fd1e3a6c": "b8af5ac5d7ced26474c8475be8e031bb",
".git/objects/57/3f2ac6aa444566479bfc2d417cc4292da5bbe7": "1e706c2efe7cc2b663eff25f6b4dafde",
".git/objects/58/28616f1c2506eb7513276832c2bd85e9106737": "09e347d38ec3ec38558ed215ec6c74ca",
".git/objects/5b/4efe9328c8bac1064b738f489855ef2465a882": "33de8f4701d18b93380344aead5d0030",
".git/objects/5d/538c495a0d519bccd853865894d4e2f03b57c8": "66de1a420bf88a38405730f8e61ac837",
".git/objects/62/cbae90307f2066fcb104c04adb99f8f42a2144": "0f80a706009a609aa091b5cfa7ac9e11",
".git/objects/69/8d25edf7831fd3776fe27bcf6460096ae74be8": "f9b6bce82713d7b5f604676c52cfed79",
".git/objects/6d/98955c71b6f7701d2eb6af5114deda507c258a": "9dc31b44f2649074f63cdca32bbd8df5",
".git/objects/72/660a638ebf918a27586b12f123c89301038b4c": "38cd36406164d5ca70d334bc10aa429f",
".git/objects/73/b1a9380c0754a159a7b0085dd64dbe8fed947a": "58d943d4595a927978d60648b059ab65",
".git/objects/76/8960040dd8a70d9ae61fe68ebc117519934fb5": "75d4a41b9ce4deb76216e638dfc443a6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/ec2d5a83a9e58618af5e7e954afcc9188ee185": "2034155d50a56ec09f92d91999bbee6e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/81787c52c2946c0250bad738a95717f6cad2c7": "c25f5e814f175577758d999e15db4d16",
".git/objects/a0/65ab385164d527a2a7668c458ab1fbc2f94c2d": "4e72d38f1570400c868f1fa57f53c4bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/d33592c6ce1662c29c2717238633b1ef47becd": "a1b39ca1d9b58f44c9114e5ffa3e4a53",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d1174049ac507bdb474e6af87364ebe97a93f7": "fef1aad0e3dfe6fde524d619059746f3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b4/67ebb65e7fe79afce7274905dc601d83e3c2ef": "1fd11295ff4144577df066d1e4493144",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/97e0574501e1ea7ad02b68d41a02b58c75cd31": "456f5e7ecfa9372c5113e07feb5945f2",
".git/objects/c1/209d6d74b8cab328f4426d79f6fbe0c11bab21": "75eeb468f490bcefbdc92e74e1606495",
".git/objects/d6/28ce51f012b4d555406fa10cd6d0c263329f90": "87c737b9c723c4b19c5fa23fd7aed78d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/dd/64bfde279bce8ef7b1fe328e836794ebd5ec2a": "c8980d8f2b72669579da9f82b75f1e0b",
".git/objects/e1/06318501e9e9b1ccf91a5e7ad82ecd98552933": "dff1774629b486d25a94bfc84354e55f",
".git/objects/e1/6ef984627484015db5c3537ae18eeed66c21df": "08b54451c49f6bfb40ed14dc3842e82a",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/2ca7711d69b10d624b7e9de64b848233ae034b": "411ae9ee6398d4b90a8636c4dfceca19",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3016a2ef7f71e771e62233fe4c81f82b805044": "0c91dddee006e7a3dbe1894b67072231",
".git/objects/fb/4b90ece73978c9f78f565f61da7728bf5d5256": "1002dd9487aa706ade170f04b0f5f45b",
".git/objects/fb/616943ab7f5239b9848c6381c5ca6f19214469": "84b35c05106aa0f7e94e939ab0f6b97c",
".git/ORIG_HEAD": "fae2b75f3be9f516cbbf43952eace4e6",
".git/refs/heads/main": "7fe3c1e6751115bd0c7d8799f6a4cb39",
".git/refs/remotes/origin/main": "7fe3c1e6751115bd0c7d8799f6a4cb39",
".github/workflows/static.yml": "aa832477eb004ad7c238b05e9b2efc94",
"assets/AssetManifest.json": "3baf3097700486a277a6a746abb98d6e",
"assets/assets/icons/github_icon.svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/icons/Instagram_icon.png": "3f14e1cd87c2def0bd2dbd41bbe956d5",
"assets/assets/icons/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/about_me.jpg": "15dd6b77de1f18092e1729893d7ab88b",
"assets/assets/images/fasaha.png": "4add93cf6bc6cac427fcebca6c67f2ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "076221b2d8d0ee113057e05d29aa487c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12df6f915bcfe0e207fcb5c952e402e4",
"/": "12df6f915bcfe0e207fcb5c952e402e4",
"main.dart.js": "d8861812cedc7f86871da24601bc1132",
"manifest.json": "579c918953263b35e5c11aff940d5208",
"version.json": "e44293df329f91bca180262a700827ff"
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
