"use client";
import Map from "../Map/Map";
import BellMaps from "../BellMaps/BellMaps";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import appStyles from "./app.module.css";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";

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

  return (
    <>
      <div className={appStyles.layerSwitcher}>
        <ToggleButtonGroup
          orientation="vertical"
          onChange={handleSwitchLayer}
          size="large"
          color="primary"
          exclusive
          value={layer}
        >
          <ToggleButton value={1}>1F</ToggleButton>
          <ToggleButton value={0}>GF</ToggleButton>
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

      <Map>
        <BellMaps
          storeData={storeData}
          currentFloor={layer}
          setSelectedPost={setSelectedPost}
        />
      </Map>
    </>
  );
}
