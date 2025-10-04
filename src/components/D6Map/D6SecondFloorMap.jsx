/**
 * @file src/components/D6Map/D6SecondFloorMap.jsx
 * @description Second floor map of D6.
 * @author Fovir
 * @since 2025-10-04
 */

/**
 * @typedef {object} D6SecondFloorMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * Second floor map of D6.
 */
export default function D6SecondFloorMap(
  /** @type {D6SecondFloorMapProps} */
  { storeData, locale },
) {
  const insideStart = 0;
  const insideEnd = 6;
  const outsideStart = insideEnd;
  const outsideEnd = outsideStart + 1;

  const width = 1000;
  const height = 800;
  const fontSize = "6rem";

  const placeStores = (left, right, x = 0, y = 300) => (
    <StoresArea
      limit={right - left + 1}
      storeData={storeData.slice(left, right)}
      width={width}
      height={height}
      locale={locale}
      fontSize={fontSize}
      left={x}
      top={y}
    />
  );

  return (
    <BackgroundMapWrapper backgroundSource="maps/canteen_template.svg">
      <MapOverlay>
        {/* Inside Start */}
        {placeStores(insideStart, insideEnd, 2000)}
        {/* Inside End */}

        {/* Outside Start */}
        {placeStores(outsideStart, outsideEnd, 11000)}
        {/* Outside End */}
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
