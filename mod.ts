// Copyright 2021 TANIGUCHI Masaya. All rights reserved. git.io/mit-license

self.addEventListener("fetch", (event) => {
  let dest = "https://github.com/tani/sky.deno.dev";
  if (new URL(event.request.url).pathname !== "/") {
    dest = event.request.url + '?dts';
  }
  event.respondWith(Response.redirect(dest, 302));
});