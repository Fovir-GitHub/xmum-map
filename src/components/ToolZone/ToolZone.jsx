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
import BackToHomeButton from "./BackToHomeButton";
import { usePathname } from "next/navigation";

/**
 * @typedef {object} ToolZoneProps
 *
 * @property locale Locale from `useState()`.
 * @property setLocale Callback function used to set locale.
 * @property layer Layer variable from `useState()`.
 * @property setLayer Callback function used to set `layer`.
 * @property layerRange Number of layers, which will be passed to `LayerSwitcher` component.
 * @property transformRef Ref of map used to reset state of map.
 * @property [layerStart=0] Start number of layers or floors.
 */

/**
 * It floats in the lower right corner of the web page, which contains two zones -- function zone and layer switcher zone.
 */
export default function ToolZone(
  /** @type {ToolZoneProps} */
  {
    locale,
    setLocale,
    layer,
    setLayer,
    layerRange,
    transformRef,
    layerStart = 0,
  },
) {
  const toggleButtonGroupStyle =
    getToggleButtonGroupStyle().toggleButtonGroupStyle;
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={toolZoneStyle.toolZone}>
      <ToggleButtonGroup
        orientation="vertical"
        size={toggleButtonGroupStyle.size}
        sx={{
          backgroundColor: toggleButtonGroupStyle.backgroundColor,
        }}
      >
        {!isHome && <BackToHomeButton />}
        <LanguageSwitcher locale={locale} setLocale={setLocale} />
        <ResetLocationButton transformRef={transformRef} />
      </ToggleButtonGroup>

      <LayerSwitcher
        layer={layer}
        layerRange={layerRange}
        setLayer={setLayer}
        layerStart={layerStart}
      />
    </div>
  );
}
