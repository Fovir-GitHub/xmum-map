/**
 * @file getMarkdownHtml.jsx
 * @description Fetch markdown via API and parse it with `remark`.
 * @author Fovir
 * @date 2025-09-10
 */

"use client";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export async function getMarkdownHtml(slug, locale) {
  let res = await fetch(`/api/posts/${slug}/${locale}`);
  if (!res.ok) {
    return "<p>Not Found</p>";
  }

  const jsonContent = await res.json();
  const markdownContent = jsonContent.content;
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false }) // Enable HTML tags.
    .process(markdownContent);
  const htmlContent = processed.toString();

  return htmlContent;
}
