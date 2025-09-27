import { ThemeProvider } from "@emotion/react";
import { useLocale } from "../../hooks/useLocale";
import { theme } from "../../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";
import A3HeaderSection from "./A3HeaderSection";
import Footer from "../Footer/Footer";

export default function A3Map({ a3Data }) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <A3HeaderSection locale={locale} />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
