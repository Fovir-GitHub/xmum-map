/**
 * @file ToolZone.jsx
 * @description Tool zone float in the lower right corner of web page.
 * @author Fovir
 * @date 2025-09-20
 */

import toolZoneStyle from "./toolzone.module.css";
import { ToggleButtonGroup } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import ResetLocationButton from "./ResetLocationButton";
import getToggleButtonGroupStyle from "../../styles/getToggleButtonGroupStyle";
import LayerSwitcher from "./LayerSwitcher";

export default function ToolZone({
  locale,
  setLocale,
  layer,
  layerRange,
  handleSwitchLayer,
  transformRef,
}) {
  const toggleButtonGroupStyle =
    getToggleButtonGroupStyle().toggleButtonGroupStyle;

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

      <LayerSwitcher
        layer={layer}
        layerRange={layerRange}
        handleSwitchLayer={handleSwitchLayer}
      />
    </div>
  );
}
