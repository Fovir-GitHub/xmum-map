/**
 * @file languageOperation.jsx
 * @description Language operation functions.
 * @author Fovir
 * @date 2025-09-20
 */

import xmumConfig from "../config";

/**
 * Normalize language.
 *
 * Transform `zh-*` to `zh` or `en-*` to `en`.
 * If the language code is neither `zh-*` nor `en-*`, it will use default language from the configuration file.
 *
 * @param {string} language Language code.
 *
 * @returns Normalized language code.
 */
export function normalizeLanguage(language) {
  const defaultLanguage = xmumConfig.language.default;

  if (!language) {
    return defaultLanguage;
  }
  const code = language.toLowerCase();
  if (code.startsWith("en")) {
    return "en";
  }
  if (code.startsWith("zh")) {
    return "zh";
  }
  return defaultLanguage;
}
