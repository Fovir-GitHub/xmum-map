/**
 * @file src/components/D6Map/D6HeaderSection.jsx
 * @description Wrapper of D6 header.
 * @author Fovir
 * @since 2025-10-03
 */

import Announcement from "../Announcement/Announcement";

/**
 * @typedef {object} D6HeaderSectionProps
 *
 * @property {string} locale Current locale.
 */

/**
 * Wrapper of D6 header section.
 */
export default function D6HeaderSection(
  /** @type {D6HeaderSectionProps} */
  { locale },
) {
  return (
    <>
      <Announcement locale={locale} slug="d6-announcement" />
    </>
  );
}
