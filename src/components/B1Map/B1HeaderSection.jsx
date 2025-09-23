/**
 * @file B1HeaderSection.jsx
 * @description Header section of B1 map.
 * @author Fovir
 * @since 2025-09-23
 */

import Announcement from "../Announcement/Announcement";

/**
 * Header section of B1 map.
 *
 * It includes an `Announcement` component.
 *
 * @param {string} locale Current locale.
 */
export default function B1HeaderSection({ locale }) {
  return <Announcement slug={"b1-announcement"} locale={locale} />;
}
