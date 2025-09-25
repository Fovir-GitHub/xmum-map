/**
 * @file FilterButtonGroup.jsx
 * @description Component of filter buttons, which filter stores by their categories.
 * @author Fovir
 * @since 2025-09-12
 */

import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { categoryInformation } from "../../config";
import { useEffect } from "react";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { isMobile } from "../../lib/isMobile";

/**
 * @typedef FilterButtonGroupProps
 *
 * @property {Function} setAvenueData Function used to change data of bell avenue.
 * @property {Function} setSuiteData Function used to change data of bell suite.
 * @property {string} locale Website locale from `useState()` function.
 * @property {string[]} categories Array of all categories.
 * @property {string[]} showCategories Categories that can be displayed.
 * @property {Function} setShowCategories Function used to change which categories can be displayed.
 */

export default function FilterButtonGroup(
  /** @type {FilterButtonGroupProps} */
  {
    setAvenueData,
    setSuiteData,
    locale,
    categories,
    showCategories,
    setShowCategories,
  },
) {
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
      <ToggleButton
        key={category}
        value={category}
        sx={{
          "&.Mui-selected": {
            backgroundColor: categoryInformation[category].color,
            color: "black",
          },
          "&.Mui-selected:hover": {
            backgroundColor: categoryInformation[category].color,
            filter: "brightness(1.2)",
          },
        }}
      >
        {categoryInformation[category].displayName[locale]}
      </ToggleButton>
    );
  }

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
    ({ theme }) => ({
      width: "100%",
      display: "flex",
      gap: "2rem",
      justifyContent: isMobile() ? "flex-start" : "center",
      paddingBottom: "10px",

      [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
        {
          borderTopRightRadius: (theme.vars || theme).shape
            .borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape
            .borderRadius,
        },
      [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
        {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomLeftRadius: (theme.vars || theme).shape
            .borderRadius,
          borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
        },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
        {
          borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
        },
    }),
  );

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: isMobile() ? "none" : "thin",
        width: "100%",
      }}
    >
      <StyledToggleButtonGroup
        value={showCategories}
        onChange={handleFilterButtonChange}
      >
        {categories.map((category) => FilterButton(category, locale))}
      </StyledToggleButtonGroup>
    </Box>
  );
}
