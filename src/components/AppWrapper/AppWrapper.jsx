"use client";
import Map from "../Map/Map";
import BellMaps from "../BellMaps/BellMaps";
import { useState } from "react";

export default function AppWrapper({ storeData }) {
  const [layer, setLayer] = useState(0);

  return (
    <>
      <Map>
        <BellMaps storeData={storeData} currentFloor={layer} />
      </Map>
    </>
  );
}
