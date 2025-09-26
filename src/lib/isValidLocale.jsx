/**
 * @file src/lib/isValidLocale.jsx
 * @author Fovir
 * @since 2025-09-20
 */

/**
 * Check whether the locale is valid.
 *
 * @param {string} locale The locale to be checked.
 */
export function isValidLocale(locale) {
  return locale && (locale === "zh" || locale === "en");
}
