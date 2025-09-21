/**
 * @file LayerSwitcher.jsx
 * @description Component used to switch layers.
 * @author Fovir
 * @since 2025-09-20
 */

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import getToggleButtonGroupStyle from "../../styles/getToggleButtonGroupStyle";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

/**
 * A group of toggle buttons used to change layers or floors.
 *
 * It will display layers between [0, layerRange), where `0F` will display as `GF`, and it will also highlight current layer.
 *
 * When buttons are clicked, the component will call `handleSwitchLayer()` function.
 *
 * @param layer The layer variable from `useState()`.
 * @param layerRange Number of layers. The component will generate layers or floors between [0, layerRange).
 * @param handleSwitchLayer Function used to handle click on switch layer buttons.
 */
export default function LayerSwitcher({ layer, layerRange, setLayer }) {
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
      {Array.from({ length: layerRange }, (_, i) => i)
        .reverse()
        .map((i) => (
          <ToggleButton key={i} value={i} sx={layerSwitcherStyle}>
            {i === 0 ? "GF" : `${i}F`}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
}
