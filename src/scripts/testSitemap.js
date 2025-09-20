/**
 * @file testSitemap.js
 * @description Test whether all urls in sitemap are available.
 * @author Fovir
 * @since 2025-09-18
 */

import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import fs from "fs";
import path from "path";

async function checkSitemap(sitemapPath) {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const parsed = await parseStringPromise(xml);

  const urls = parsed.urlset.url.map((u) => u.loc[0]);

  let hashError = false;
  const errorUrls = [];

  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`${url} -> ${res.status}`);
      if (res.status >= 400) {
        hashError = true;
        errorUrls.push(url);
      }
    } catch (err) {
      console.error(`${url} -> ERROR`, err.message);
      hashError = true;
      errorUrls.push(url);
    }
  }

  if (hashError) {
    console.log("Error URLs:");
    console.log(errorUrls);
    process.exit(1);
  } else {
    console.log("✅ Sitemap Check Pass!");
  }
}

checkSitemap(path.join(process.cwd(), "public", "sitemap.xml"));
