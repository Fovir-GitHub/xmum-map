/**
 * @file Sidebar.jsx
 * @description Sidebar used to contain other pages.
 * @author Fovir
 * @since 2025-09-16
 */

"use client";

import { Drawer, IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { isMobile } from "../../lib/isMobile";
import { clearHashTag } from "../../lib/routerOperation";
import GlobalEscListener from "../GlobalEscListener/GlobalEscListener";

export default function Sidebar({
  selectedPost,
  setSelectedPost,
  router,
  pathname,
  children,
}) {
  // Width of drawer.
  const DRAWER_WIDTH = "480px";

  const DrawerHeader = styled("div")(({}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 16px",
    minHeight: "16px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "sticky",
    top: "16px",
    zIndex: "2",
  }));

  const show = selectedPost !== null;

  // Function to run when closing the sidebar.
  const closeSidebarEffect = () => {
    setSelectedPost(null);
    clearHashTag(router, pathname);
  };

  return (
    <>
      <GlobalEscListener onEsc={closeSidebarEffect} />
      <Drawer
        variant="persistent"
        anchor={isMobile() ? "bottom" : "left"}
        open={show}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile() ? "100%" : DRAWER_WIDTH,
            height: isMobile() ? "70vh" : "100%",
            boxSizing: "border-box",
            backdropFilter: "blur(14px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            borderRight: "2px solid rgba(245,194,231,0.6)",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={closeSidebarEffect}>
            <CloseRounded />
          </IconButton>
        </DrawerHeader>
        {children}
      </Drawer>
    </>
  );
}
