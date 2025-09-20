/**
 * @file DetailPage.jsx
 * @description Create the `DetailPage` component, which is the container of detail pages. The component fetches post html via API.
 * @author Fovir
 * @since 2025-09-10
 */

"use client";

import { useEffect, useState } from "react";
import { getMarkdownHtml } from "../../lib/getMarkdownHtml";
import ImageSlide from "../ImageSlide/ImageSlide";
import CircularProgress from "@mui/material/CircularProgress";

export default function DetailPage({ slug, locale }) {
  const [postHtml, setPostHtml] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const { html, isLoading, notFound } = await getMarkdownHtml(
        slug,
        locale,
      );

      setPostHtml(html);
      setIsLoading(isLoading);
      setNotFound(notFound);
    };

    fetchPost();
  }, [slug, locale]);

  return (
    <article className="markdown">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      ) : notFound ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Article not found.</p>
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: postHtml,
          }}
        />
      )}
      <ImageSlide />
    </article>
  );
}
