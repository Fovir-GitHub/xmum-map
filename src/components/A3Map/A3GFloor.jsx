/**
 * @file src/components/A3Map/A3GFloor.jsx
 * @description Map of A3 ground floor.
 * @author Fovir
 * @since 2025-09-29
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} A3GFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Map of A3 ground floor.
 */
export default function A3GFloor(
  /** @type {A3GFloorProps} */
  { storeData, locale },
) {
  return (
    <BackgroundMapWrapper backgroundSource="maps/A3_GF.svg">
      <MapOverlay>
        <StoresArea
          storeData={storeData}
          locale={locale}
          limit={storeData.length}
          width={650}
          height={1100}
          top={1450}
          left={6700}
          fontSize="9rem"
        />
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
