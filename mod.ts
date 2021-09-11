// Copyright 2021 TANIGUCHI Masaya. All rights reserved. git.io/mit-license

self.addEventListener("fetch", (event) => {
  let dest = "https://github.com/tani/sky.deno.dev";
  const url = new URL(event.request.url)
  if (url.pathname !== "/") {
    url.host = "cdn.skypack.dev"
    url.searchParams.set("dts", "")
  }
  event.respondWith(Response.redirect(url, 302));
});