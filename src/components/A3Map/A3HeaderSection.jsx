/**
 * @file src/components/A3Map/A3HeaderSection.jsx
 * @description Header section of A3.
 * @author Fovir
 * @since 2025-09-27
 */

import Announcement from "../Announcement/Announcement";

/**
 * @typedef {object} A3HeaderSectionProps
 *
 * @property {string} locale Current locale.
 */

/**
 * Header section of A3.
 */
export default function A3HeaderSection(
  /** @type {A3HeaderSectionProps} */
  { locale },
) {
  return <Announcement locale={locale} slug="a3-announcement" />;
}
