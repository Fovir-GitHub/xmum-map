/**
 * @file Ly3Map.jsx
 * @description Wrapper of LY3 map.
 * @author Fovir
 * @since 2025-09-21
 */

"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";
import { useLocale } from "../../hooks/useLocale";
import Footer from "../Footer/Footer";
import Ly3BodySection from "./Ly3BodySection";
import Ly3HeaderSection from "./Ly3HeaderSection";

/**
 * Map of LY3.
 *
 * @param {object[][]} ly3Data Data of LY3 stores.
 */
export default function Ly3Map({ ly3Data }) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Ly3HeaderSection locale={locale} />

      <Ly3BodySection
        locale={locale}
        setLocale={setLocale}
        ly3Data={ly3Data}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
