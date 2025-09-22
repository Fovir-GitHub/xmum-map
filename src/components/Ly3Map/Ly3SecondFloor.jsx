"use client";

import xmumConfig from "../../config";
import DrawAMap from "../DrawAMap/DrawAMap";

export default function Ly3SecondFloor({ storeData, locale }) {
  return (
    <>
      <svg
        width={10000}
        height={1000}
        fill={xmumConfig.map.backgroundColor}
      >
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: 33,
          handleStoreBlockClick: () => console.log("Clicked"),
          locale: locale,
          limit: 33,
        })}
      </svg>
    </>
  );
}
