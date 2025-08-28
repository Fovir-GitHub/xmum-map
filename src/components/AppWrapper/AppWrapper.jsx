/**
 * @file AppWrapper.jsx
 * @description This component wraps all components of the application.
 * @author Fovir
 * @date 2025-08-28
 */

"use client";
import Map from "../Map/Map";
import BellMaps from "../BellMaps/BellMaps";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
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

  // Width of map.
  const mapWidth = 3800;

  // Style of toggle buttons.
  const toggleButtonStyle = {
    "&.Mui-selected": {
      backgroundColor: `${catppuccinMochaColors.surface0}B2`,
    },
    fontWeight: "bolder",
    color: catppuccinMochaColors.text,
  };

  return (
    <>
      <div className={appStyles.layerSwitcher}>
        <ToggleButtonGroup
          orientation="vertical"
          onChange={handleSwitchLayer}
          size="large"
          exclusive
          value={layer}
          sx={{
            backgroundColor: `${catppuccinMochaColors.surface2}B2`,
          }}
        >
          <ToggleButton value={1} sx={toggleButtonStyle}>
            1F
          </ToggleButton>
          <ToggleButton value={0} sx={toggleButtonStyle}>
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
        />
      </Map>
    </>
  );
}
