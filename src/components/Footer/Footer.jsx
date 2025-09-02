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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
        }}
      >
        <MyTypography>
          Copyright &copy; 2025 XMUM Map | Built by Mr.Oui &&nbsp;
          <MyLink href={"https://www.fovir.fyi"}>Fovir</MyLink>
        </MyTypography>
        <MyTypography>Contact: 123456790</MyTypography>
        <MyTypography>
          Email:&nbsp;
          <MyLink href="mailto:example@example.com">
            example@example.com
          </MyLink>
        </MyTypography>
      </Box>
    </>
  );
}

function MyLink({ children, href }) {
  return (
    <>
      <Link
        href={href}
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
        {children}
      </Link>
    </>
  );
}

function MyTypography({ children }) {
  return (
    <>
      <Typography
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "inherit",
        }}
      >
        {children}
      </Typography>
    </>
  );
}
