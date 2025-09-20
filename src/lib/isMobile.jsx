/**
 * @file isMobile.jsx
 * @description Judge whether the client is on mobile phones.
 * @author Fovir
 * @since 2025-08-30
 */

import { useMediaQuery } from "@mui/material";
import { theme } from "../styles/materialUiTheme";

export function isMobile() {
  return useMediaQuery(theme.breakpoints.down("sm"));
}
