/**
 * @typedef {object} A3GFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to select post.
 */

import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

export default function A3GFloor(
  /** @type {A3GFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  /**
   * TODO:
   *  - Change font color of the SVG map.
   */
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
        />
      </MapOverlay>
    </div>
  );
}
