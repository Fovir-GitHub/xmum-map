/**
 * @file FilterButtonGroup.jsx
 * @description Component of filter buttons, which filter stores by their categories.
 * @author Fovir
 * @date 2025-09-11
 */

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { categoryInformation } from "../../config";
import { useEffect, useState } from "react";

export default function FilterButtonGroup({
  setAvenueData,
  setSuiteData,
  locale,
}) {
  // Get all categories.
  const categories = Object.keys(categoryInformation);

  // Categories that can be displayed.
  const [showCategories, setShowCategories] = useState(categories);

  const handleFilterButtonChange = (_, clickedCategory) => {
    setShowCategories(clickedCategory);
  };

  // Update map when `showCategories` changes.
  useEffect(() => {
    const updateMap = (prev) =>
      prev.map((innerArray) =>
        innerArray.map((item) => ({
          ...item,
          Show: showCategories.includes(item.Category),
        })),
      );
    setAvenueData(updateMap);
    setSuiteData(updateMap);
  }, [showCategories, setAvenueData, setSuiteData]);

  function FilterButton(category, locale) {
    return (
      <ToggleButton key={category} value={category}>
        {categoryInformation[category].displayName[locale]}
      </ToggleButton>
    );
  }

  return (
    <ToggleButtonGroup
      value={showCategories}
      onChange={handleFilterButtonChange}
    >
      {categories.map((category) => FilterButton(category, locale))}
    </ToggleButtonGroup>
  );
}
