/**
 * @file ToolZone.jsx
 * @description Tool zone float in the lower right corner of web page.
 * @author Fovir
 * @since 2025-09-20
 */

import toolZoneStyle from "./toolzone.module.css";
import { ToggleButtonGroup } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import ResetLocationButton from "./ResetLocationButton";
import getToggleButtonGroupStyle from "../../styles/getToggleButtonGroupStyle";
import LayerSwitcher from "./LayerSwitcher";

/**
 * It floats in the lower right corner of the web page, which contains two zones -- function zone and layer switcher zone.
 *
 * @param locale Locale from `useState()`.
 * @param setLocale Callback function used to set locale.
 * @param layer Layer variable from `useState()`.
 * @param layerRange Number of layers, which will be passed to `LayerSwitcher` component.
 * @param handleSwitchLayer Function to be called when layer switcher is clicked.
 * @param transformRef Ref of map used to reset state of map.
 */
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
