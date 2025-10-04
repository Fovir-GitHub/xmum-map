/**
 * @file src/components/D6Map/D6Map.jsx
 * @description Wrapper of D6 map.
 * @author Fovir
 * @since 2025-10-03
 */

"use client";

import { useLocale } from "../../hooks/useLocale";
import D6BodySection from "./D6BodySection";
import D6HeaderSection from "./D6HeaderSection";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";
import Footer from "../Footer/Footer";

/**
 * @typedef {object} {D6MapProps}
 *
 * @property {object[][]} d6Data Store data of D6.
 */

/**
 * Map of D6.
 */
export default function D6Map(
  /** @type {D6MapProps} */
  { d6Data },
) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <D6HeaderSection locale={locale} />

      <D6BodySection
        locale={locale}
        setLocale={setLocale}
        d6Data={d6Data}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
