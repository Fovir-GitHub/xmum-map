/**
 * @file AppWrapper.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-09-08
 */

"use client";

import Map from "../Map/Map";
import BellAvenueMaps from "../BellAvenueMaps/BellAvenueMaps";
import { useEffect, useRef, useState } from "react";
import {
  CssBaseline,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import appStyles from "./app.module.css";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import {
  catppuccinMochaColors,
  theme,
} from "../../styles/materialUiTheme";
import GlobalEscListener from "../../components/GlobalEscListener/GlobalEscListener";
import { isMobile } from "../../lib/isMobile";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import BellSuiteMap from "../BellSuiteMap/BellSuiteMap";
import { ThemeProvider } from "@emotion/react";
import Footer from "../Footer/Footer";
import Announcement from "../Announcement/Announcement";
import xmumConfig from "../../config";

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

  // Opacity.
  const toolBackgroundOpacity = "B2";

  // Style of toggle buttons.
  const layerSwitcherStyle = {
    "&.Mui-selected": {
      backgroundColor: `${catppuccinMochaColors.surface0}${toolBackgroundOpacity}`,
    },
    fontWeight: "bolder",
    color: catppuccinMochaColors.text,
  };

  // Ref to `TransformWrapper`.
  const transformRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={appStyles.toolZone}>
        <ToggleButtonGroup
          orientation="vertical"
          onChange={handleSwitchLayer}
          size={isMobile() ? "medium" : "large"}
          exclusive
          value={layer}
          sx={{
            backgroundColor: `${catppuccinMochaColors.surface2}${toolBackgroundOpacity}`,
          }}
        >
          <ToggleButton
            onClick={() => {
              if (locale === "zh") {
                setLocale("en");
              } else {
                setLocale("zh");
              }
            }}
            sx={{
              backgroundColor: catppuccinMochaColors.blue,
              "&:hover": {
                backgroundColor: catppuccinMochaColors.sapphire,
              },
            }}
          >
            {locale}
          </ToggleButton>

          <ToggleButton
            onClick={() => {
              transformRef.current?.resetTransform();
            }}
          >
            <MyLocationRoundedIcon />
          </ToggleButton>

          <ToggleButton value={1} sx={layerSwitcherStyle}>
            1F
          </ToggleButton>
          <ToggleButton value={0} sx={layerSwitcherStyle}>
            GF
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <GlobalEscListener onEsc={() => setSelectedPost(null)} />
      <Sidebar
        onClose={() => setSelectedPost(null)}
        show={selectedPost !== null}
      >
        <DetailPage slug={selectedPost?.slug} locale={locale} />
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
