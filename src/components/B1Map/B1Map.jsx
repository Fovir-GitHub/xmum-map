/**
 * @file B1Map.jsx
 * @description Wrapper of B1 map.
 * @author Fovir
 * @since 2025-09-23
 */

"use client";

import { useLocale } from "../../hooks/useLocale";
import Footer from "../Footer/Footer";
import B1BodySection from "./B1BodySection";
import B1HeaderSection from "./B1HeaderSection";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";

/**
 * @typedef {object} B1MapProps
 *
 * @property {object[][]} b1Data Data of B1 stores.
 */

/**
 * Wrapper of B1 map.
 */
export default function B1Map(
  /** @type {B1MapProps} */
  { b1Data },
) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <B1HeaderSection locale={locale} />

      <B1BodySection
        locale={locale}
        setLocale={setLocale}
        b1Data={b1Data}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
