/**
 * @file DetailPage.jsx
 * @description Create the `DetailPage` component, which is the container of detail pages. The component fetches markdown contents via API and parses the frontmatter.
 * @author Fovir
 * @date 2025-08-29
 */

"use client";

import matter from "gray-matter";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import markdownStyle from "./markdown.module.css";
import remarkGfm from "remark-gfm";

export default function DetailPage({ slug, locale }) {
  // State of detail page data.
  const [detailPageData, setDetailPageData] = useState({});

  /**
   * @description Fetch post content via API.
   * @param {string} slug The slug of post.
   * @param {string} locale The locale of post.
   * @returns Plain text of post content in `string` type.
   */
  async function getPlainPostContent(slug, locale) {
    let res = await fetch(`/api/posts/${slug}/${locale}`);

    // If failed to fetch resources, then returns 404.
    if (!res.ok) {
      console.log("Failed to fetch resources.");
      res = await fetch(`/api/posts/404/${locale}`);
    }

    const plainText = await res.json();
    return plainText.content;
  }

  /**
   * @description Parse markdown contents from plain text.
   * @param {string} plainText The plain text of post.
   * @returns {object} An object including frontmatter/meta information and HTML content.
   */
  async function parseMarkdown(plainText) {
    const { data: frontmatter, content } = matter(plainText);
    const processed = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content);
    const contentHtml = processed.toString();
    return { meta: frontmatter, contentHtml };
  }

  useEffect(() => {
    (async () => {
      const plainText = await getPlainPostContent(slug, locale);

      if (!plainText) {
        return;
      }

      const parsed = await parseMarkdown(plainText);
      setDetailPageData(parsed);
    })();
  }, [slug, locale]);

  /**
   * TODO:
   *  - Add styles.
   */
  return (
    <article className={markdownStyle.markdown}>
      <h1>{detailPageData?.meta?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: detailPageData?.contentHtml,
        }}
      />
    </article>
  );
}
