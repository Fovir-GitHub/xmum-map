/**
 * @file getMarkdownHtml.jsx
 * @description Fetch markdown via API and parse it with `remark`.
 * @author Fovir
 * @since 2025-09-10
 */

"use client";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export async function getMarkdownHtml(slug, locale) {
  let res;
  try {
    res = await fetch(`/api/posts/${slug}/${locale}`);
    if (!res.ok) {
      return {
        html: "<p>Article not found</p>",
        isLoading: false,
        notFound: true,
      };
    }

    const jsonContent = await res.json();
    const markdownContent = jsonContent.content;
    const processed = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false }) // Enable HTML tags.
      .process(markdownContent);
    const htmlContent = processed.toString();

    return { html: htmlContent, isLoading: false, notFound: false };
  } catch (error) {
    return {
      html: "<p>Not Found</p>",
      isLoading: false,
      notFound: true,
    };
  }
}
