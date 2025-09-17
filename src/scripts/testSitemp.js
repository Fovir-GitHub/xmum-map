/**
 * @file testSitemap.js
 * @description Test whether all urls in sitemap are available.
 * @author Fovir
 * @date 2025-09-18
 */

import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import fs from "fs";
import path from "path";

async function checkSitemap(sitemapPath) {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const parsed = await parseStringPromise(xml);

  const urls = parsed.urlset.url.map((u) => u.loc[0]);

  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`${url} -> ${res.status}`);
    } catch (err) {
      console.error(`${url} -> ERROR`, err.message);
    }
  }
}

checkSitemap(path.join(process.cwd(), "public", "sitemap.xml"));
