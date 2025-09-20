import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import getToggleButtonGroupStyle from "../../styles/getToggleButtonGroupStyle";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

export default function LayerSwitcher({
  layer,
  handleSwitchLayer,
  layerRange,
}) {
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
