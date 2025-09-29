/**
 * @file src/components/A3Map/A3GFloor.jsx
 * @description Map of A3 ground floor.
 * @author Fovir
 * @since 2025-09-29
 */

import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} A3GFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to select post.
 */

/**
 * Map of A3 ground floor.
 */
export default function A3GFloor(
  /** @type {A3GFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  return (
    <div>
      <img src="maps/A3_GF.svg" width={10000} height={10000} />
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
          setSelectedPost={setSelectedPost}
        />
      </MapOverlay>
    </div>
  );
}
