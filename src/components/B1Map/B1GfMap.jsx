/**
 * @file src/components/B1Map/B1GfMap.jsx
 * @description Map of B1 ground floor.
 * @author Fovir
 * @since 2025-09-24
 */

"use client";

import { StoresArea } from "../StoresArea/StoresArea";
import MapOverlay from "../StoresArea/MapOverlay";
import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import StoreBlock from "../StoreBlock/StoreBlock";
import xmumConfig from "../../config";

/**
 * @typedef {object} B1GMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Map of B1 ground floor.
 */
export default function B1GfMap(
  /** @type {B1GMapProps} */
  { storeData, locale },
) {
  const topRowStart = 0;
  const topRowEnd = 5;
  const leftRowStart = topRowEnd;
  const leftRowEnd = storeData.length;

  return (
    <BackgroundMapWrapper backgroundSource="maps/B1_GF.svg">
      <MapOverlay>
        <StoresArea
          limit={topRowEnd - topRowStart + 1}
          top={100}
          left={3500}
          width={800}
          height={600}
          locale={locale}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          fontSize={"5rem"}
        />
        <StoresArea
          limit={leftRowEnd - leftRowStart + 1}
          storeData={storeData.slice(leftRowStart, leftRowEnd)}
          width={500}
          height={800}
          top={4950}
          left={2900}
          fontSize="5rem"
          locale={locale}
        />
        <svg width={"100%"} height={"100%"}>
          <StoreBlock
            width={820}
            height={1020}
            x={2110}
            y={1250}
            fill="#dc8a78"
            text={"Outdoor Sports Field\n室外运动场"}
            fontSize="10rem"
            slug="outdoor"
            locale={locale}
            showIcon={false}
            stroke={xmumConfig.storeBlock.style.stroke}
            strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
          />
        </svg>
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
