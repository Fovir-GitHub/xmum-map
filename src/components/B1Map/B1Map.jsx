"use client";

import { useLocale } from "../../hooks/useLocale";
import Footer from "../Footer/Footer";
import B1BodySection from "./B1BodySection";
import B1HeaderSection from "./B1HeaderSection";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";

export default function B1Map({ b1Data }) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <B1HeaderSection locale={locale} />

      <B1BodySection
        locale={locale}
        setLocale={setLocale}
        ly3Data={b1Data}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
