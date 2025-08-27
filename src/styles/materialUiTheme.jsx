import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#89B4FA",
      light: "#B4BEFE",
      dark: "#74C7EC",
      contrastText: "#1E1E2E",
    },
    secondary: {
      main: "#F5C2E7",
      light: "#F9E2AF",
      dark: "#E78284",
      contrastText: "#1E1E2E",
    },
    error: {
      main: "#F38BA8",
    },
    warning: {
      main: "#FAB387",
    },
    info: {
      main: "#89DCEB",
    },
    success: {
      main: "#A6E3A1",
    },
    background: {
      default: "#1E1E2E",
      paper: "#181825",
    },
    text: {
      primary: "#CDD6F4",
      secondary: "#BAC2DE",
    },
  },
});
