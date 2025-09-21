"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";
import HeaderSection from "./HeaderSection";
import { useLocale } from "../../hooks/useLocale";
import BodySection from "./BodySection";
import Footer from "../Footer/Footer";

export default function Ly3Map({ ly3Data }) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderSection locale={locale} />

      <BodySection locale={locale} setLocale={setLocale} />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
