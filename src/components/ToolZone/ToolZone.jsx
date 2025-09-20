/**
 * @file ToolZone.jsx
 * @description Tool zone float in the lower right corner of web page.
 * @author Fovir
 * @date 2025-09-20
 */

import toolZoneStyle from "./toolzone.module.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import { isMobile } from "../../lib/isMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import ResetLocationButton from "./ResetLocationButton";

export default function ToolZone({
  locale,
  setLocale,
  layer,
  handleSwitchLayer,
  transformRef,
}) {
  // Opacity.
  const toolBackgroundOpacity = "B2";

  // Style of toggle buttons.
  const layerSwitcherStyle = {
    "&.Mui-selected": {
      backgroundColor: `${catppuccinMochaColors.surface0}${toolBackgroundOpacity}`,
    },
    fontWeight: "bolder",
    color: catppuccinMochaColors.text,
  };

  const toggleButtonGroupStyle = {
    size: isMobile() ? "medium" : "large",
    backgroundColor: `${catppuccinMochaColors.surface2}${toolBackgroundOpacity}`,
  };

  return (
    <div className={toolZoneStyle.toolZone}>
      <ToggleButtonGroup
        orientation="vertical"
        size={toggleButtonGroupStyle.size}
        sx={{
          backgroundColor: toggleButtonGroupStyle.backgroundColor,
        }}
      >
        <LanguageSwitcher locale={locale} setLocale={setLocale} />
        <ResetLocationButton transformRef={transformRef} />
      </ToggleButtonGroup>

      <ToggleButtonGroup
        orientation="vertical"
        onChange={handleSwitchLayer}
        size={toggleButtonGroupStyle.size}
        exclusive
        value={layer}
        sx={{
          backgroundColor: toggleButtonGroupStyle.backgroundColor,
        }}
      >
        <ToggleButton value={1} sx={layerSwitcherStyle}>
          1F
        </ToggleButton>
        <ToggleButton value={0} sx={layerSwitcherStyle}>
          GF
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
