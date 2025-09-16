/**
 * @file AppWrapper.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-09-16
 */

"use client";

import Map from "../Map/Map";
import BellAvenueMaps from "../BellAvenueMaps/BellAvenueMaps";
import { useEffect, useRef, useState } from "react";
import { CssBaseline } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import { theme } from "../../styles/materialUiTheme";
import GlobalEscListener from "../../components/GlobalEscListener/GlobalEscListener";
import BellSuiteMap from "../BellSuiteMap/BellSuiteMap";
import { ThemeProvider } from "@emotion/react";
import Footer from "../Footer/Footer";
import Announcement from "../Announcement/Announcement";
import xmumConfig, { categoryInformation } from "../../config";
import ToolZone from "../ToolZone/ToolZone";
import FilterButtonGroup from "../FilterButtonGroup/FilterButtonGroup";
import { usePathname, useRouter } from "next/navigation";
import XmumMap from "../XmumMap/XmumMap";
import CcisMap from "../CcisMap/CcisMap";

export default function AppWrapper({ bellAvenueData, bellSuiteData }) {
  // Floor layers.
  const [layer, setLayer] = useState(0);

  // Clicked store.
  const [selectedPost, setSelectedPost] = useState(null);

  // Switch layers when `nextLayer` is not `null`.
  const handleSwitchLayer = (_, nextLayer) => {
    if (nextLayer !== null) {
      setLayer(nextLayer);
    }
  };

  // Locale settings.
  const defaultLanguage = xmumConfig.language.default;
  const [locale, setLocale] = useState(null);

  // Get user's locale.
  useEffect(() => {
    /**
     * @description Transform language code from `zh-*` or `en-*` to `zh` or `en`.
     * @param {string} lang Language code.
     * @returns If the language code starts with `zh` or `en`, then returns corresponding codes. Otherwise, it returns `defaultLanguage`.
     */
    function normalizeLang(lang) {
      if (!lang) {
        return defaultLanguage;
      }
      const code = lang.toLowerCase();
      if (code.startsWith("en")) {
        return "en";
      }
      if (code.startsWith("zh")) {
        return "zh";
      }
      return defaultLanguage;
    }
    setLocale(normalizeLang(navigator.language));
  }, []);

  // Width and height of map.
  const bellAvenueMapWidth = xmumConfig.map.bellAvenueWidth;
  const bellSuiteMapWidth = xmumConfig.map.bellSuiteWidth;
  const mapHeight = xmumConfig.map.height;

  // Ref to `TransformWrapper`.
  const transformRef = useRef(null);

  const [avenueData, setAvenueData] = useState(bellAvenueData);
  const [suiteData, setSuiteData] = useState(bellSuiteData);
  //
  // Get all categories.
  const categories = Object.keys(categoryInformation);

  // Categories that can be displayed.
  const [showCategories, setShowCategories] = useState(categories);

  // Hash tag operations.
  const router = useRouter();
  const pathname = usePathname();

  function handleStoreBlockClick(slug, locale) {
    setSelectedPost({
      slug: slug,
      locale: locale,
    });
    router.replace(`${pathname}#${slug}`);
  }

  // Clear hash tag.
  function clearHashTag() {
    router.replace(pathname);
  }

  // Function to run when closing the sidebar.
  function closeSidebarEffect() {
    setSelectedPost(null);
    clearHashTag();
  }

  // Handle access to URL with hash tags.
  useEffect(() => {
    function handleHashChange() {
      const slug = window.location.hash.slice(1);
      if (slug) {
        handleStoreBlockClick(slug, locale);
      }
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Announcement locale={locale} />
        <FilterButtonGroup
          setAvenueData={setAvenueData}
          setSuiteData={setSuiteData}
          locale={locale}
          categories={categories}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        />
      </div>

      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        handleSwitchLayer={handleSwitchLayer}
        transformRef={transformRef}
      />

      <GlobalEscListener onEsc={closeSidebarEffect} />
      <Sidebar
        onClose={closeSidebarEffect}
        show={selectedPost !== null}
      >
        <DetailPage
          slug={selectedPost?.slug || "404"}
          locale={locale}
        />
      </Sidebar>

      <Map transformRef={transformRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "500px",
          }}
        >
          <div
            style={{
              position: "relative",
              top: 0,
              left: 4900,
            }}
          >
            <XmumMap />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                flex: "1 0 auto",
                position: "relative",
                left: -1000,
              }}
            >
              <CcisMap />
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <BellAvenueMaps
                storeData={avenueData}
                currentFloor={layer}
                mapWidth={bellAvenueMapWidth}
                mapHeight={mapHeight}
                showCategories={showCategories}
                locale={locale}
                handleStoreBlockClick={handleStoreBlockClick}
              />
            </div>
            <div
              style={{
                flex: 1,
                marginLeft: "200px",
              }}
            >
              <BellSuiteMap
                storeData={suiteData}
                handleStoreBlockClick={handleStoreBlockClick}
                locale={locale}
                mapWidth={bellSuiteMapWidth}
                mapHeight={mapHeight}
              />
            </div>
          </div>
        </div>
      </Map>
      <Footer locale={locale} />
    </ThemeProvider>
  );
}
