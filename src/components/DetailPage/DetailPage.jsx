/**
 * @file DetailPage.jsx
 * @description Create the `DetailPage` component, which is the container of detail pages. The component fetches post html via API.
 * @author Fovir
 * @date 2025-09-09
 */

"use client";

import { useEffect, useState } from "react";
import { getMarkdownHtml } from "../../lib/getMarkdownHtml";
import ImageSlide from "../ImageSlide/ImageSlide";
import CircularProgress from "@mui/material/CircularProgress";

export default function DetailPage({ slug, locale }) {
  // Post html.
  const [postHtml, setPostHtml] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const html = await getMarkdownHtml(slug, locale);
      setPostHtml(html);
      setLoading(false);
    };
    fetchPost();
  }, [slug, locale]);

  return (
    <article className="markdown">
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: postHtml,
        }}
      />
      <ImageSlide />
    </article>
  );
}
