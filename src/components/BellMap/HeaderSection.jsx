/**
 * @file HeaderSection.jsx
 * @description Header section of bell map.
 * @author Fovir
 * @since 2025-09-21
 */

import Announcement from "../Announcement/Announcement";
import FilterButtonGroup from "../FilterButtonGroup/FilterButtonGroup";

/**
 * @typedef {Object} HeaderSectionProps
 * @property {string} locale
 * @property {Function} setAvenueData
 * @property {Function} setSuiteData
 * @property {string[]} categories
 * @property {string[]} showCategories
 * @property {Function} setShowCategories
 */

/**
 * Header section of bell map.
 *
 * @param {HeaderSectionProps} props
 */
export default function HeaderSection(props) {
  const {
    locale,
    setAvenueData,
    setSuiteData,
    categories,
    showCategories,
    setShowCategories,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Announcement locale={locale} slug={"bell-announcement"} />
      <FilterButtonGroup
        setAvenueData={setAvenueData}
        setSuiteData={setSuiteData}
        locale={locale}
        categories={categories}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />
    </div>
  );
}
