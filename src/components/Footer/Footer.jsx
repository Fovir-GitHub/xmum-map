/**
 * @file Footer.jsx
 * @description Footer component that fixed on the bottom of the page.
 * @author Fovir
 * @date 2025-09-12
 */

"use client";

import { Box, Link, Typography } from "@mui/material";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import xmumConfig from "../../config";

export default function Footer({ locale }) {
  return (
    <>
      <Box
        component={"footer"}
        sx={{
          position: "absolute",
          bottom: 0,
          top: "auto",
          width: "100%",
          height: "auto",
          padding: "3px 0",
          zIndex: "0",
          background: catppuccinMochaColors.mantle,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
        }}
      >
        <LastUpdateTime locale={locale} />
        <Telephone locale={locale} />
        <Email locale={locale} />
        <Repository locale={locale} />
        <CopyRight />
      </Box>
    </>
  );
}

function CopyRight() {
  return (
    <MyTypography>
      Copyright &copy; 2025 XMUM Map | Built by Mr.Oui &&nbsp;
      <MyLink href={"https://www.fovir.fyi"}>Fovir</MyLink>
    </MyTypography>
  );
}

function Telephone({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.tel[locale]}
      {xmumConfig.footer.tel.number}
    </MyTypography>
  );
}

function Email({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.email[locale]}
      <MyLink href={xmumConfig.footer.email.address} isEmail={true}>
        {xmumConfig.footer.email.address}
      </MyLink>
    </MyTypography>
  );
}

function LastUpdateTime({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.lastUpdateTime[locale]}
      {xmumConfig.footer.lastUpdateTime.time}
    </MyTypography>
  );
}

function Repository({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.repository[locale]}
      <MyLink href={xmumConfig.footer.repository.link} isEmail={false}>
        GitHub
      </MyLink>
    </MyTypography>
  );
}

function MyLink({ children, href, isEmail }) {
  return (
    <>
      <Link
        href={isEmail ? `mailto:${href}` : href}
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
          whiteSpace: "pre",
        }}
      >
        {children}
      </Typography>
    </>
  );
}
