/**
 * @file Footer.jsx
 * @description Footer component that fixed on the bottom of the page.
 * @author Fovir
 * @date 2025-09-02
 */

"use client";

import { Box, Link, Typography } from "@mui/material";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

export default function Footer() {
  return (
    <>
      <Box
        component={"footer"}
        sx={{
          position: "absolute",
          bottom: 0,
          top: "auto",
          width: "100%",
          height: "8vh",
          zIndex: "0",
          background: catppuccinMochaColors.mantle,
        }}
      >
        <Typography
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
          }}
        >
          Copyright &copy; 2025 XMUM Map | Built by Mr.Oui &&nbsp;
          <Link
            href="https://www.fovir.fyi"
            sx={{
              color: catppuccinMochaColors.text,
              textDecoration: "underline",
              "&:hover": {
                color: catppuccinMochaColors.subtext0,
              },
              "&:visited": {
                color: "inherit",
              },
            }}
          >
            Fovir
          </Link>
        </Typography>
      </Box>
    </>
  );
}
