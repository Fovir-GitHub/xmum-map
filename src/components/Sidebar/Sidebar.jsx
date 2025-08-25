/**
 * @file Sidebar.jsx
 * @description Sidebar used to display detail information of stores.
 * @author Fovir
 * @date 2025-08-25
 */

"use client";

import { marked } from "marked";
import { useEffect, useState } from "react";

export default function Sidebar({ post, onClose }) {
  const [content, setContent] = useState("");

  /**
   * TODO: Handle exceptions.
   */
  useEffect(() => {
    fetch(`/api/posts/${post.slug}/${post.locale}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(marked(data.content));
      });
  }, [post]);

  /**
   * TODO: Add styles.
   */
  return (
    <div className="sidebar">
      <button onClick={onClose}>Close</button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
