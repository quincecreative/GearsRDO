self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
        .open("fox-store")
        .then((cache) =>
            cache.addAll([
                "/RDO/",
                "/RDO/index.html",
                "/RDO/index.js",
                "/RDO/style.css",
                "/RDO/main.js",
                "/RDO/cage.JPG",
                "/RDO/innerRace.JPG",
                "/RDO/outerRace.JPG",
                "/RDO/Cheveron_process copy-frei.png",
                "/RDO/download.png",
                "/RDO/environment.env",
                "/RDO/gkn-au-stacked.svg",
                "/RDO/RDO-2.glb",
                "/RDO/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
                "/RDO/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
            ])
        )
    );
});

self.addEventListener("fetch", (e) => {
    console.log(e.request.url);
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});