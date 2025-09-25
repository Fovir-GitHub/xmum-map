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
import { categoryInformation } from "../../config";
import BellHeaderSection from "./BellHeaderSection";
import BellBodySection from "./BellBodySection";

/**
 * @typedef {object} BellMapProps
 *
 * @property {object[][]} bellAvenueData Store data of bell avenue.
 * @property {object[][]} bellSuiteData Store data of bell suite.
 */

/**
 * Wrapper of bell map.
 */
export default function BellMap(
  /** @type {BellMapProps} */
  { bellAvenueData, bellSuiteData },
) {
  // Get all categories.
  const categories = Object.keys(categoryInformation);

  // Locale of the website.
  const [locale, setLocale] = useLocale();

  // Data of stores.
  const [avenueData, setAvenueData] = useState(bellAvenueData);
  const [suiteData, setSuiteData] = useState(bellSuiteData);

  // Categories to display.
  const [showCategories, setShowCategories] = useState(categories);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BellHeaderSection
        locale={locale}
        setAvenueData={setAvenueData}
        setSuiteData={setSuiteData}
        categories={categories}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />

      <BellBodySection
        locale={locale}
        setLocale={setLocale}
        avenueData={avenueData}
        suiteData={suiteData}
        showCategories={showCategories}
      />

      <Footer locale={locale} />
    </ThemeProvider>
  );
}
