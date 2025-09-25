/**
 * @file Footer.jsx
 * @description Footer component that fixed on the bottom of the page.
 * @author Fovir
 * @since 2025-09-18
 */

"use client";

import { Box, Link, Typography } from "@mui/material";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import xmumConfig from "../../config";

/**
 * @typedef {object} FooterProps
 *
 * @property {string} locale Website locale from `useState()` function.
 */

/**
 * Footer component displayed in the bottom of web page.
 */
export default function Footer(
  /** @type {FooterProps} */
  { locale },
) {
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

/**
 * Display copyright information.
 */
function CopyRight() {
  return (
    <FooterTypography>
      Copyright &copy; 2025 XMUM Map | Built by {""}
      <FooterLink href={xmumConfig.footer.links.oui}>Mr.Oui</FooterLink>
      {" & "}
      <FooterLink href={xmumConfig.footer.links.fovir}>
        Fovir
      </FooterLink>
    </FooterTypography>
  );
}

/**
 * Telephone information.
 */
function Telephone({ locale }) {
  return (
    <FooterTypography>
      {xmumConfig.footer.tel[locale]}
      {xmumConfig.footer.tel.number}
    </FooterTypography>
  );
}

/**
 * Email information.
 */
function Email({ locale }) {
  return (
    <FooterTypography>
      {xmumConfig.footer.email[locale]}
      <FooterLink href={xmumConfig.footer.email.address} isEmail={true}>
        {xmumConfig.footer.email.address}
      </FooterLink>
    </FooterTypography>
  );
}

/**
 * Information of the last update time.
 */
function LastUpdateTime({ locale }) {
  return (
    <FooterTypography>
      {xmumConfig.footer.lastUpdateTime[locale]}
      {xmumConfig.footer.lastUpdateTime.time}
    </FooterTypography>
  );
}

/**
 * Link of GitHub repository.
 */
function Repository({ locale }) {
  return (
    <FooterTypography>
      {xmumConfig.footer.repository[locale]}
      <FooterLink
        href={xmumConfig.footer.repository.link}
        isEmail={false}
      >
        GitHub
      </FooterLink>
    </FooterTypography>
  );
}

function FooterLink({ children, href, isEmail }) {
  return (
    <>
      <Link
        target="_blank"
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

function FooterTypography({ children }) {
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
