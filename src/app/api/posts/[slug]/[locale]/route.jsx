/**
 * @file route.jsx
 * @description Provide API to fetch post html.
 * @author Fovir
 * @date 2025-09-04
 */

import fs from "fs";
import path from "path";

/**
 * @description Get post html API.
 * @returns The post html in JSON format.
 */
export async function GET(req, { params }) {
  const { slug, locale } = params;
  const filePath = path.join(
    process.cwd(),
    "public/mdx-html",
    `${slug}.${locale}.html`,
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  return new Response(JSON.stringify({ content: fileContent }));
}
