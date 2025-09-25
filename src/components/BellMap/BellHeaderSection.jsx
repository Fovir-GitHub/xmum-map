/**
 * @file BellHeaderSection.jsx
 * @description Header section of bell map.
 * @author Fovir
 * @since 2025-09-25
 */

import Announcement from "../Announcement/Announcement";
import FilterButtonGroup from "../FilterButtonGroup/FilterButtonGroup";

/**
 * @typedef {object} BellHeaderSectionProps
 * @property {string} locale Current locale.
 * @property {Function} setAvenueData Function used to change bell avenue data.
 * @property {Function} setSuiteData Function used to change bell suite data.
 * @property {string[]} categories Array of all categories.
 * @property {string[]} showCategories Categories that can be displayed.
 * @property {Function} setShowCategories Function used to change which categories can be displayed.
 */

/**
 * Header section of bell map.
 */
export default function BellHeaderSection(
  /** @type {BellHeaderSectionProps} */
  {
    locale,
    setAvenueData,
    setSuiteData,
    categories,
    showCategories,
    setShowCategories,
  },
) {
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
