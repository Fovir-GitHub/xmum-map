/**
 * @file B1HeaderSection.jsx
 * @description Header section of B1 map.
 * @author Fovir
 * @since 2025-09-23
 */

import Announcement from "../Announcement/Announcement";

/**
 * @typedef {object} B1HeaderSectionProps
 *
 * @property {string} locale Current locale.
 */

/**
 * Header section of B1 map.
 *
 * It includes an `Announcement` component.
 *
 * @param {B1HeaderSectionProps} props
 */
export default function B1HeaderSection(props) {
  const { locale } = props;
  return <Announcement slug={"b1-announcement"} locale={locale} />;
}
