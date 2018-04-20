importScripts('/assets/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "NuxtWithFirebase",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/assets/app.3644dc5c31de414355eb.js",
    "revision": "feb1c7b32cbb4c8b3802d09fb65beca9"
  },
  {
    "url": "/assets/common.a73b5a5183b1e4be1b3b.js",
    "revision": "e1dc26537e42ee4eae5f0fc7d3354d96"
  },
  {
    "url": "/assets/common.bc35257661150fa55f19fa5726fe83ae.css",
    "revision": "bd5a1561d6fd9fc5c73ec834732fa5e8"
  },
  {
    "url": "/assets/layouts/default.b10078b0c50d86f53005.js",
    "revision": "9b64c06cf21d542db22eef9f6dfe724d"
  },
  {
    "url": "/assets/manifest.cdb303b3775418e73f29.js",
    "revision": "bb6901c0b85a81e30d6c030f1f3e3ae6"
  },
  {
    "url": "/assets/pages/_id.0321a0c24212434d7a60.js",
    "revision": "f0df888c21eb6c17224cc901ac520e28"
  },
  {
    "url": "/assets/pages/index.e314ad7f42341a02a544.js",
    "revision": "20d15d0e20ae9c67a3e2416b3474c65d"
  }
])


workboxSW.router.registerRoute(new RegExp('/assets/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

