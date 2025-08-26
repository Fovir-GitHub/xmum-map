/**
 * @file Sidebar.jsx
 * @description Sidebar used to contain other pages.
 * @author Fovir
 * @date 2025-08-26
 */

"use client";

import { Drawer, IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export default function Sidebar({ onClose, show, children }) {
  // Width of drawer.
  const DRAWER_WIDTH = "30%";

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
    <Drawer
      variant="persistent"
      anchor="left"
      open={show}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </DrawerHeader>
      {children}
    </Drawer>
  );
}
