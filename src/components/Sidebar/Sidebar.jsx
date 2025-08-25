"use client";

import { marked } from "marked";
import { useEffect, useState } from "react";

export default function Sidebar({ post, onClose }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/api/posts/${post.slug}/${post.locale}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(marked(data.content));
      });
  }, [post]);

  return (
    <div className="sidebar">
      <button onClick={onClose}>Close</button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
