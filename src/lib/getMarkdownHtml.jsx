"use client";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export async function getMarkdownHtml(slug, locale) {
  let res = await fetch(`/api/posts/${slug}/${locale}`);
  if (!res.ok) {
    res = await fetch(`/api/posts/404/${locale}`);
  }

  const jsonContent = await res.json();
  const markdownContent = jsonContent.content;
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdownContent);
  const htmlContent = processed.toString();

  return htmlContent;
}
