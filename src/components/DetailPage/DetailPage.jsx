/**
 * @file DetailPage.jsx
 * @description Create the `DetailPage` component, which is the container of detail pages. The component fetches post html via API.
 * @author Fovir
 * @date 2025-09-05
 */

"use client";

import { useEffect, useState } from "react";
import { getMarkdownHtml } from "../../lib/getMarkdownHtml";
import ImageSlide from "../ImageSlide/ImageSlide";

export default function DetailPage({ slug, locale }) {
  // Post html.
  const [postHtml, setPostHtml] = useState("");

  useEffect(() => {
    getMarkdownHtml(slug, locale).then((html) => {
      setPostHtml(html);
    });
  }, [slug, locale]);

  return (
    <article className="markdown">
      <div
        dangerouslySetInnerHTML={{
          __html: postHtml,
        }}
      />
      <ImageSlide />
    </article>
  );
}
