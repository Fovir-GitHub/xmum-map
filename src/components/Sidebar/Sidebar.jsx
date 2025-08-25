/**
 * @file Sidebar.jsx
 * @description Sidebar used to display detail information of stores.
 * @author Fovir
 * @date 2025-08-25
 */

"use client";

import { marked } from "marked";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export default function Sidebar({ post, onClose, show }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function loadMarkdown() {
      const res = await fetch(`/api/posts/${post.slug}/${post.locale}`);
      if (!res.ok) {
        setContent({ content: "<p>Failed</p>" });
        return;
      }

      const data = await res.json();
      setContent(marked(data.content));
    }

    loadMarkdown();
  }, [post]);

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  }));

  /**
   * TODO: Add styles.
   */
  return (
    <Drawer variant="persistent" anchor="left" open={show}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </DrawerHeader>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Drawer>
  );
}
