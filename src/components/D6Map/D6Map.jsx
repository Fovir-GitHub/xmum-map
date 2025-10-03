import { useLocale } from "../../hooks/useLocale";

export default function D6Map({ d6Data }) {
  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
