/**
 * @file generateSitemap.js
 * @description Generate sitemap for SEO.
 * @author Fovir
 * @date 2025-09-18
 */

import fs from "fs";
import path from "path";

const baseUrl = "https://www.xmummap.com";
const changeFrequency = "weekly";
const priority = 0.8;

const sourceFileNames = ["bell_avenue.json", "bell_suite.json"];
const outputFileName = "sitemap.xml";
const outputFilePath = path.join(
  process.cwd(),
  "public",
  outputFileName,
);

function getSlugs(fileName) {
  const filePath = path.join(process.cwd(), "src/data", fileName);
  const rawContent = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawContent);
  const slugs = [];

  jsonData.map((row) => {
    row.map((data) => {
      if (data.Slug !== null && data.Slug != 404) {
        slugs.push(data.Slug.toString());
      }
    });
  });

  return slugs;
}

function getAllSlugs(fileNames) {
  let slugs = [];
  fileNames.map((file) => {
    slugs = slugs.concat(getSlugs(file));
  });
  return slugs;
}

const allSlugs = getAllSlugs(sourceFileNames);
const urls = allSlugs
  .map(
    (slug) =>
      `
<url>
  <loc>${baseUrl}/en/${slug}</loc>
  <changefreq>${changeFrequency}</changefreq>
  <priority>${priority}</priority>
</url>

<url>
  <loc>${baseUrl}/zh/${slug}</loc>
  <changefreq>${changeFrequency}</changefreq>
  <priority>${priority}</priority>
</url>
`,
  )
  .join("");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>
`;

fs.writeFileSync(outputFilePath, sitemap);
console.log("✅ Sitemap generated!");
