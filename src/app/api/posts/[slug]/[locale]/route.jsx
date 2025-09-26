/**
 * @file src/app/api/posts/[slug]/[locale]/route.jsx
 * @description Provide API to fetch markdown content.
 * @author Fovir
 * @since 2025-08-25
 */

import fs from "fs";
import path from "path";

/**
 * Get markdown content API.
 *
 * @returns The post content in JSON format.
 */
export async function GET(_, { params }) {
  const { slug, locale } = await params;
  const filePath = path.join(
    process.cwd(),
    "posts",
    `${slug}.${locale}.md`,
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  return new Response(JSON.stringify({ content: fileContent }));
}
