import { ToggleButton } from "@mui/material";
import { categoryInformation } from "../../config";

export default function FilterButtonGroup({
  setAvenueData,
  setSuiteData,
  locale,
}) {
  // Get all categories.
  const categories = Object.keys(categoryInformation);

  function handleFilterButtonClick(category) {
    const filterCategory = (prev) =>
      prev.map((innerArray) =>
        innerArray.map((item) =>
          item.Category === category
            ? { ...item, Show: !item.Show }
            : item,
        ),
      );

    setAvenueData(filterCategory);
    setSuiteData(filterCategory);
  }

  function FilterButton(category, locale) {
    return (
      <ToggleButton onClick={() => handleFilterButtonClick(category)}>
        {categoryInformation[category].displayName[locale]}
      </ToggleButton>
    );
  }

  return categories.map((category) => FilterButton(category, locale));
}
