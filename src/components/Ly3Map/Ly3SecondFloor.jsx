/**
 * @file src/components/Ly3Map/Ly3SecondFloor.jsx
 * @description Map of LY3 second floor.
 * @author Fovir
 * @since 2025-09-22
 */

"use client";

import { StoresArea } from "../StoresArea/StoresArea";
import MapOverlay from "../StoresArea/MapOverlay";
import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";

/**
 * @typedef {object} Ly3SecondFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Draw the map of LY3 second floor.
 */
export default function Ly3SecondFloor(
  /** @type {Ly3SecondFloorProps} */
  { storeData, locale },
) {
  const rightRowStart = 0;
  const rightRowEnd = 9;

  const topRowStart = rightRowEnd;
  const topRowEnd = 17;

  const tmallStart = 28;
  const tmallEnd = 31;

  const bottomRightStart = 31;
  const bottomRightEnd = bottomRightStart + 2;

  return (
    <BackgroundMapWrapper backgroundSource="maps/LY3_2F.svg">
      <MapOverlay>
        {/* Top Row Start */}
        <StoresArea
          limit={topRowEnd - topRowStart + 1}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          top={1000}
          left={2500}
          width={300}
          height={500}
          locale={locale}
          useRowIndex={false}
          fontSize="3.2rem"
        />
        {/* Top Row End */}
        {/* Right Row Start */}
        <StoresArea
          limit={rightRowEnd - rightRowStart + 1}
          storeData={storeData.slice(rightRowStart, rightRowEnd)}
          locale={locale}
          top={3000}
          left={5500}
          width={300}
          height={500}
          useRowIndex={true}
          rotate={90}
          fontSize="5rem"
        />
        {/* Right Row End */}
        {/* Tmall Zone Start */}
        <TmallZoneMap
          storeData={storeData.slice(tmallStart, tmallEnd)}
          locale={locale}
        />
        {/* Tmall Zone End */}
        {/* Bottom Right Corner Start */}
        <StoresArea
          limit={bottomRightEnd - bottomRightStart + 1}
          storeData={storeData.slice(bottomRightStart, bottomRightEnd)}
          locale={locale}
          top={5800}
          left={7200}
          width={400}
          height={500}
          useRowIndex={false}
          fontSize="4rem"
        />
        {/* Bottom Right Corner End */}
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}

function TmallZoneMap({ storeData, locale }) {
  const leftStart = 0;
  const leftEnd = leftStart + 1;

  const rightTopStart = leftEnd;
  const rightTopEnd = rightTopStart + 1;
  const rightBottomStart = rightTopEnd;
  const rightBottomEnd = rightBottomStart + 1;

  const width = 500;

  return (
    <div>
      <StoresArea
        limit={1}
        storeData={storeData.slice(leftStart, leftEnd)}
        locale={locale}
        top={5200}
        left={4500}
        width={width}
        height={800}
        fontSize="4rem"
      />
      <StoresArea
        limit={1}
        storeData={storeData.slice(rightTopStart, rightTopEnd)}
        locale={locale}
        top={5200}
        left={4500 + width}
        width={width}
        height={450}
        fontSize="4rem"
      />
      <StoresArea
        limit={1}
        storeData={storeData.slice(rightBottomStart, rightBottomEnd)}
        locale={locale}
        top={5550}
        left={4500 + width}
        width={width}
        height={450}
        fontSize="4rem"
      />
    </div>
  );
}
