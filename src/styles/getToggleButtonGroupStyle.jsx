import { isMobile } from "../lib/isMobile";
import { catppuccinMochaColors } from "./materialUiTheme";

export default function getToggleButtonGroupStyle() {
  const toolBackgroundOpacity = "B2";

  const toggleButtonGroupStyle = {
    size: isMobile() ? "medium" : "large",
    backgroundColor: `${catppuccinMochaColors.surface2}${toolBackgroundOpacity}`,
  };

  return {
    toggleButtonGroupStyle: toggleButtonGroupStyle,
    opacity: toolBackgroundOpacity,
  };
}
