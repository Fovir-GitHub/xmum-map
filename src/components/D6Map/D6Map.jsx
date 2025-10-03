/**
 * @file src/components/D6Map/D6Map.jsx
 * @description Wrapper of D6 map.
 * @author Fovir
 * @since 2025-10-03
 */

import { useLocale } from "../../hooks/useLocale";

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

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
