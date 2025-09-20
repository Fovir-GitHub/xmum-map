/**
 * @file materialUiTheme.jsx
 * @description Theme for material UI.
 * @author Fovir
 * @since 2025-08-27
 */

import { createTheme } from "@mui/material";
import { flavorEntries } from "@catppuccin/palette";

// Get all catppuccin mocha colors.
const mocha = flavorEntries.find(([key]) => key === "mocha")[1];
export const catppuccinMochaColors = mocha.colorEntries.reduce(
  (acc, [name, { hex }]) => {
    acc[name] = hex;
    return acc;
  },
  {},
);

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: catppuccinMochaColors.blue,
      light: catppuccinMochaColors.lavender,
      dark: catppuccinMochaColors.sapphire,
      contrastText: catppuccinMochaColors.base,
    },
    secondary: {
      main: catppuccinMochaColors.pink,
      light: catppuccinMochaColors.yellow,
      dark: catppuccinMochaColors.red,
      contrastText: catppuccinMochaColors.base,
    },
    error: {
      main: catppuccinMochaColors.red,
    },
    warning: {
      main: catppuccinMochaColors.peach,
    },
    info: {
      main: catppuccinMochaColors.sky,
    },
    success: {
      main: catppuccinMochaColors.green,
    },
    background: {
      default: catppuccinMochaColors.base,
      paper: catppuccinMochaColors.mantle,
    },
    text: {
      primary: catppuccinMochaColors.text,
      secondary: catppuccinMochaColors.subtext1,
    },
  },
});
