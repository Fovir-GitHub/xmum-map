"use client";
import Map from "../Map/Map";
import BellMaps from "../BellMaps/BellMaps";
import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import appStyles from "./app.module.css";
import Sidebar from "../Sidebar/Sidebar";

export default function AppWrapper({ storeData }) {
  // Floor layers.
  const [layer, setLayer] = useState(0);

  const [selectedPost, setSelectedPost] = useState({});

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

      <div>
        <Button
          onClick={() =>
            setSelectedPost({ slug: "mamak", locale: "en" })
          }
        >
          Show
        </Button>
      </div>

      {selectedPost && (
        <div>
          <Sidebar
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        </div>
      )}

      <Map>
        <BellMaps storeData={storeData} currentFloor={layer} />
      </Map>
    </>
  );
}
