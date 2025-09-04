/**
 * @file getPostHtml.jsx
 * @description Get post in `.html` format by `slug` and `locale`.
 * @author Fovir
 * @date 2025-09-04
 */

"use client";

/**
 * @description Fetch post in html format via API.
 * @param {string} slug Slug name of the post.
 * @param {string} locale Current locale.
 * @returns {string} Html content in string format.
 */
export async function getPostHtml(slug, locale) {
  let res = await fetch(`/api/posts/${slug}/${locale}`);
  if (!res.ok) {
    res = await fetch(`/api/posts/404/${locale}`);
  }

  const jsonContent = await res.json();
  return jsonContent.content;
}
