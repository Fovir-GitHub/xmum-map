/**
 * @file Ly3HeaderSection.jsx
 * @description Header section of LY3 map.
 * @author Fovir
 * @since 2025-09-23
 */

import Announcement from "../Announcement/Announcement";

/**
 * Wrapper of header section of LY3 map, which includes an `Announcement` component.
 *
 * @param {string} locale Current locale.
 */
export default function Ly3HeaderSection({ locale }) {
  return (
    <>
      <Announcement locale={locale} slug={"ly3-announcement"} />
    </>
  );
}
