/**
 * @file src/components/Ly3Map/Ly3GFloor.jsx
 * @description Map of LY3 G floor.
 * @author Fovir
 * @since 2025-09-25
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} Ly3GFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Map of LY3 G floor.
 */
export default function Ly3GFloor(
  /** @type {Ly3GFloorProps} */
  { storeData, locale },
) {
  return (
    <BackgroundMapWrapper backgroundSource="maps/LY3_GF.svg">
      <MapOverlay>
        <StoresArea
          storeData={storeData}
          locale={locale}
          limit={storeData.length}
          top={4100}
          left={4400}
          width={650}
          height={950}
          fontSize="8rem"
        />
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
