/**
 * @file BellMap.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @since 2025-09-20
 */

"use client";

import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { theme } from "../../styles/materialUiTheme";
import { ThemeProvider } from "@emotion/react";
import Footer from "../Footer/Footer";
import { useLocale } from "../../hooks/useLocale";
import HeaderSection from "./HeaderSection";
import BodySection from "./BodySection";

export default function BellMap({ bellAvenueData, bellSuiteData }) {
  // Floor layers.
  const [layer, setLayer] = useState(0);

  const [locale, setLocale] = useLocale();

  const [avenueData, setAvenueData] = useState(bellAvenueData);
  const [suiteData, setSuiteData] = useState(bellSuiteData);

  // Get all categories.
  const categories = Object.keys(categoryInformation);

  // Categories that can be displayed.
  const [showCategories, setShowCategories] = useState(categories);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HeaderSection
        locale={locale}
        setAvenueData={setAvenueData}
        setSuiteData={setSuiteData}
        categories={categories}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />

      <BodySection
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        setLayer={setLayer}
        avenueData={avenueData}
        suiteData={suiteData}
        showCategories={showCategories}
      />
      <Footer locale={locale} />
    </ThemeProvider>
  );
}
