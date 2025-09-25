/**
 * @file Ly3HeaderSection.jsx
 * @description Header section of LY3 map.
 * @author Fovir
 * @since 2025-09-23
 */

import Announcement from "../Announcement/Announcement";

/**
 * @typedef {object} Ly3HeaderSectionProps
 *
 * @property {string} locale Current locale.
 */

/**
 * Wrapper of header section of LY3 map, which includes an `Announcement` component.
 */
export default function Ly3HeaderSection(
  /** @type {Ly3HeaderSectionProps} */
  { locale },
) {
  return (
    <>
      <Announcement locale={locale} slug={"ly3-announcement"} />
    </>
  );
}
