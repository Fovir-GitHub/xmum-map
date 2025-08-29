/**
 * @file AppWrapper.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-08-28
 */

"use client";
import Map from "../Map/Map";
import BellMaps from "../BellMaps/BellMaps";
import { useEffect, useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import appStyles from "./app.module.css";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

export default function AppWrapper({ storeData }) {
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
  const defaultLanguage = "zh";
  const [locale, setLocale] = useState(null);

  // Get user's locale.
  useEffect(() => {
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

  // Width of map.
  const mapWidth = 3800;

  // Transparent value.
  const toolBackgroundTransparent = "B2";

  // Style of toggle buttons.
  const layerSwitcherStyle = {
    "&.Mui-selected": {
      backgroundColor: `${catppuccinMochaColors.surface0}${toolBackgroundTransparent}`,
    },
    fontWeight: "bolder",
    color: catppuccinMochaColors.text,
  };

  return (
    <>
      <div className={appStyles.toolZone}>
        <ToggleButtonGroup
          orientation="vertical"
          onChange={handleSwitchLayer}
          size="large"
          exclusive
          value={layer}
          sx={{
            backgroundColor: `${catppuccinMochaColors.surface2}${toolBackgroundTransparent}`,
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
          <ToggleButton value={1} sx={layerSwitcherStyle}>
            1F
          </ToggleButton>
          <ToggleButton value={0} sx={layerSwitcherStyle}>
            GF
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Sidebar
        onClose={() => setSelectedPost(null)}
        show={selectedPost !== null}
      >
        <DetailPage
          slug={selectedPost?.slug}
          locale={selectedPost?.locale}
        />
      </Sidebar>

      <Map mapWidth={mapWidth}>
        <BellMaps
          storeData={storeData}
          currentFloor={layer}
          setSelectedPost={setSelectedPost}
          mapWidth={mapWidth}
          locale={locale}
        />
      </Map>
    </>
  );
}
