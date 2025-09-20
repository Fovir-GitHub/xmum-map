/**
 * @file BellMap.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-09-20
 */

"use client";

import Map from "../Map/Map";
import BellAvenueMaps from "./BellAvenueMaps";
import BellSuiteMap from "./BellSuiteMap";
import XmumMap from "./XmumMap";
import { useEffect, useRef, useState } from "react";
import { CssBaseline } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import { theme } from "../../styles/materialUiTheme";
import GlobalEscListener from "../../components/GlobalEscListener/GlobalEscListener";
import { ThemeProvider } from "@emotion/react";
import Footer from "../Footer/Footer";
import Announcement from "../Announcement/Announcement";
import xmumConfig, { categoryInformation } from "../../config";
import ToolZone from "../ToolZone/ToolZone";
import FilterButtonGroup from "../FilterButtonGroup/FilterButtonGroup";
import { usePathname, useRouter } from "next/navigation";
import { normalizeLanguage } from "../../lib/languageOperation";
import { clearHashTag } from "../../lib/routerOperation";

export default function BellMap({ bellAvenueData, bellSuiteData }) {
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

  /**
   * Set locale and default locale.
   */
  const [locale, setLocale] = useState(null);
  useEffect(() => {
    setLocale(normalizeLanguage(navigator.language));
  }, []);

  // Width and height of map.
  const bellAvenueMapWidth = xmumConfig.map.bellAvenueWidth;
  const bellSuiteMapWidth = xmumConfig.map.bellSuiteWidth;
  const mapHeight = xmumConfig.map.height;

  // Ref to `TransformWrapper`.
  const transformRef = useRef(null);

  const [avenueData, setAvenueData] = useState(bellAvenueData);
  const [suiteData, setSuiteData] = useState(bellSuiteData);

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
    router.replace(`${pathname}#${slug}-${locale}`);
  }

  // Function to run when closing the sidebar.
  function closeSidebarEffect() {
    setSelectedPost(null);
    clearHashTag(router, pathname);
  }

  // Handle access to URL with hash tags.
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1);

      if (hash) {
        let [slug, localeFormat] = hash.split("-");
        if (!localeFormat) {
          localeFormat = xmumConfig.language.default;
        }
        handleStoreBlockClick(slug, localeFormat);
        setLocale(localeFormat);
      } else {
        clearHashTag(router, pathname);
      }
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Change locale when hash tag changes.
  useEffect(() => {
    if (selectedPost) {
      router.replace(`${pathname}#${selectedPost.slug}-${locale}`);
    }
  }, [locale]);

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
        layerRange={2}
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
          <XmumMap />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
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
