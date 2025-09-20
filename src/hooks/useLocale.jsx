/**
 * @file useLocale.jsx
 * @description Hook of setting locale.
 * @author Fovir
 * @since 2025-09-20
 */

import { useEffect, useState } from "react";
import xmumConfig from "../config";
import { normalizeLanguage } from "../lib/languageOperation";

/**
 * Hook of locale.
 *
 * @returns `[locale, setLocale]`
 *  - `locale` Current locale.
 *  - `setLocale` Function used to set locale.
 */
export function useLocale() {
  const [locale, setLocale] = useState(xmumConfig.language.default);

  // Set locale at the first time when visitors access the web page.
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setLocale(normalizeLanguage(navigator.language));
    }
  }, []);

  // Update locale when hash tag changes.
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        return;
      }
      let [, localeFromHash] = hash.split("-");
      if (!localeFromHash) {
        return;
      }
      setLocale(localeFromHash);
    }
    window.addEventListener("hashchange", handleHashChange);

    // Run on initialization.
    handleHashChange();
    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return [locale, setLocale];
}
