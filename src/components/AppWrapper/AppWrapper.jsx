/**
 * @file AppWrapper.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-09-10
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
import xmumConfig from "../../config";
import ToolZone from "../ToolZone/ToolZone";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        handleSwitchLayer={handleSwitchLayer}
        transformRef={transformRef}
      />

      <GlobalEscListener onEsc={() => setSelectedPost(null)} />
      <Sidebar
        onClose={() => setSelectedPost(null)}
        show={selectedPost !== null}
      >
        <DetailPage
          slug={selectedPost?.slug || "404"}
          locale={locale}
        />
      </Sidebar>

      <Announcement locale={locale} />

      <Map transformRef={transformRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10cm",
          }}
        >
          <BellAvenueMaps
            storeData={bellAvenueData}
            currentFloor={layer}
            setSelectedPost={setSelectedPost}
            mapWidth={bellAvenueMapWidth}
            mapHeight={mapHeight}
            locale={locale}
          />
          <BellSuiteMap
            storeData={bellSuiteData}
            setSelectedPost={setSelectedPost}
            locale={locale}
            mapWidth={bellSuiteMapWidth}
            mapHeight={mapHeight}
          />
        </div>
      </Map>
      <Footer locale={locale} />
    </ThemeProvider>
  );
}
