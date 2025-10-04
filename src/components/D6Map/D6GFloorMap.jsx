/**
 * @file src/components/D6Map/D6GFloorMap.jsx
 * @description Ground floor map of D6.
 * @author Fovir
 * @since 2025-10-04
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import { StoresArea } from "../StoresArea/StoresArea";
import MapOverlay from "../StoresArea/MapOverlay";

/**
 * @typedef {object} D6GFloorMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Ground floor map of D6.
 */
export default function D6GFloorMap(
  /** @type {D6GFloorMapProps} */
  { storeData, locale },
) {
  const leftStart = 0;
  const leftEnd = leftStart + 1;
  const middleStart = leftEnd;
  const middleEnd = middleStart + 2;
  const rightStart = middleEnd;
  const rightEnd = rightStart + 1;
  const outsideStart = rightEnd;
  const outsideEnd = outsideStart + 1;

  const width = 800;
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
        {/* Left Start */}
        {placeStores(leftStart, leftEnd, 100)}
        {/* Left End */}

        {/* Middle Start */}
        {placeStores(middleStart, middleEnd, 4000)}
        {/* Middle End */}

        {/* Right Start */}
        {placeStores(rightStart, rightEnd, 9200)}
        {/* Right End */}

        {/* Outside Start */}
        {placeStores(outsideStart, outsideEnd, 11000)}
        {/* Outside End */}
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
