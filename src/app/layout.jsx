"use client";

import "../styles/global.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/materialUiTheme";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
