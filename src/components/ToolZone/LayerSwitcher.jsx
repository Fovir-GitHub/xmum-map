/**
 * @file src/components/ToolZone/LayerSwitcher.jsx
 * @description Component used to switch layers.
 * @author Fovir
 * @since 2025-09-20
 */

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import getToggleButtonGroupStyle from "../../styles/getToggleButtonGroupStyle";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

/**
 * @typedef {object} LayerSwitcherProps
 *
 * @property layer The layer variable from `useState()`.
 * @property setLayer Callback function used to set `layer`.
 * @property layerRange Number of layers. The component will generate layers or floors between [0, layerRange).
 * @property [layerStart=0] Start number of layers or floors.
 */

/**
 * A group of toggle buttons used to change layers or floors.
 *
 * It will display layers between [layerStart, layerRange), where `0F` will display as `GF` and `-1F` will be `B1`, and it will also highlight current layer.
 */
export default function LayerSwitcher(
  /** @type {LayerSwitcherProps} */
  { layer, layerRange, setLayer, layerStart = 0 },
) {
  const toolBackgroundOpacity = getToggleButtonGroupStyle().opacity;
  const toggleButtonGroupStyle =
    getToggleButtonGroupStyle().toggleButtonGroupStyle;

  // Style of toggle buttons.
  const layerSwitcherStyle = {
    "&.Mui-selected": {
      backgroundColor: `${catppuccinMochaColors.surface0}${toolBackgroundOpacity}`,
    },
    fontWeight: "bolder",
    color: catppuccinMochaColors.text,
  };

  // Switch layers when `nextLayer` is not `null`.
  const handleSwitchLayer = (_, nextLayer) => {
    if (nextLayer !== null) {
      setLayer(nextLayer);
    }
  };

  // Get the floor label.
  const getLayerLabel = (i) => {
    if (i === 0) {
      return "GF";
    } else if (i === -1) {
      return "B1";
    } else {
      return `${i}F`;
    }
  };

  return (
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
      {Array.from({ length: layerRange }, (_, i) => layerStart + i)
        .reverse()
        .map((i) => (
          <ToggleButton key={i} value={i} sx={layerSwitcherStyle}>
            {getLayerLabel(i)}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
}
