"use client";

export async function getPostHtml(slug, locale) {
  let res = await fetch(`/api/posts/${slug}/${locale}`);
  if (!res.ok) {
    res = await fetch(`/api/posts/404/${locale}`);
  }

  const jsonContent = await res.json();
  return jsonContent.content;
}
