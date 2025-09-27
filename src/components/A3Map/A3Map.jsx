/**
 * @file src/components/A3Map/A3Map.jsx
 * @description A3 map.
 * @author Fovir
 * @since 2025-09-27
 */

import { ThemeProvider } from "@emotion/react";
import { useLocale } from "../../hooks/useLocale";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";
import A3HeaderSection from "./A3HeaderSection";
import Footer from "../Footer/Footer";
import A3BodySection from "./A3BodySection";

/**
 * @typedef {object} A3MapProps
 *
 * @property {object[][]} a3Data Data of A3 areas or stores.
 */

/**
 * Map of A3.
 */
export default function A3Map(
  /** @type {A3MapProps} */
  { a3Data },
) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <A3HeaderSection locale={locale} />

      <A3BodySection
        locale={locale}
        setLocale={setLocale}
        a3Data={a3Data}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
