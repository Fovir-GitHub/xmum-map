import { useMediaQuery } from "@mui/material";
import { theme } from "../styles/materialUiTheme";

export function isMobile() {
  return useMediaQuery(theme.breakpoints.down("md"));
}
