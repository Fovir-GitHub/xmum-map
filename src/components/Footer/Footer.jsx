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
    <MyTypography>
      Copyright &copy; 2025 XMUM Map | Built by {""}
      <MyLink href={xmumConfig.footer.links.oui}>Mr.Oui</MyLink>
      {" & "}
      <MyLink href={xmumConfig.footer.links.fovir}>Fovir</MyLink>
    </MyTypography>
  );
}

/**
 * Telephone information.
 */
function Telephone({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.tel[locale]}
      {xmumConfig.footer.tel.number}
    </MyTypography>
  );
}

/**
 * Email information.
 */
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

/**
 * Information of the last update time.
 */
function LastUpdateTime({ locale }) {
  return (
    <MyTypography>
      {xmumConfig.footer.lastUpdateTime[locale]}
      {xmumConfig.footer.lastUpdateTime.time}
    </MyTypography>
  );
}

/**
 * Link of GitHub repository.
 */
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
