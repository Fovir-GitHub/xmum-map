/**
 * @file src/components/B1Map/B1BFloorMap.jsx
 * @description B1 BF map.
 * @author Fovir
 * @since 2025-10-01
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";
import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} B1BFMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Map of B1 BF.
 */
export default function B1BFloorMap(
  /** @type {B1BFMapProps} */
  { storeData, locale },
) {
  return (
    <BackgroundMapWrapper backgroundSource="maps/B1_BF.svg">
      <MapOverlay>
        <StoresArea
          limit={storeData.length}
          storeData={storeData}
          locale={locale}
          width={540}
          height={850}
          top={7260}
          left={4120}
          fontSize="5rem"
        />
      </MapOverlay>
    </BackgroundMapWrapper>
  );
}
