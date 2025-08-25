/**
 * @file app/api/posts/[slug]/[locale]/route.jsx
 * @description Provide API to fetch post contents.
 * @author Fovir
 * @date 2025-08-25
 */

import fs from "fs";
import path from "path";

/**
 * @description Get post content API.
 * @returns The post content in JSON format.
 */
export async function GET(req, { params }) {
  const { slug, locale } = params;
  const filePath = path.join(
    process.cwd(),
    "posts",
    `${slug}.${locale}.md`,
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  return new Response(JSON.stringify({ content: fileContent }));
}
