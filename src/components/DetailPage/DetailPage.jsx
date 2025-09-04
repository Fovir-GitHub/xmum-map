/**
 * @file DetailPage.jsx
 * @description Create the `DetailPage` component, which is the container of detail pages. The component fetches post html via API.
 * @author Fovir
 * @date 2025-09-04
 */

"use client";

import { useEffect, useState } from "react";
import markdownStyle from "./markdown.module.css";
import { getPostHtml } from "../../lib/getPostHtml";

export default function DetailPage({ slug, locale }) {
  // State of detail page data.
  const [postHtml, setPostHtml] = useState("");

  useEffect(() => {
    getPostHtml(slug, locale).then((html) => {
      setPostHtml(html);
    });
  }, [slug, locale]);

  return (
    <article className={markdownStyle.markdown}>
      <div
        dangerouslySetInnerHTML={{
          __html: postHtml,
        }}
      />
    </article>
  );
}
