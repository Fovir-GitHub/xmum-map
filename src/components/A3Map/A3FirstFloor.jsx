/**
 * @file src/components/A3Map/A3FirstFloor.jsx
 * @description Map of A3 first floor.
 * @author Fovir
 * @since 2025-09-29
 */

/**
 * @typedef {object} A3FirstFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to select post.
 */

import xmumConfig from "../../config";
import MapOverlay from "../StoresArea/MapOverlay";
import { StoresArea } from "../StoresArea/StoresArea";

/**
 * Map of A3 first floor.
 */
export default function A3FirstFloor(
  /** @type {A3FirstFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  const printAreaStart = 0;
  const printAreaEnd = printAreaStart + 1;

  const cinemaStart = printAreaEnd;
  const cinemaEnd = cinemaStart + 1;

  return (
    <div>
      <img
        src="maps/A3_1F.svg"
        width={xmumConfig.map.backgroundMapWidth}
        height={xmumConfig.map.backgroundMapHeight}
      />

      <MapOverlay>
        {/* Print Area Start */}
        <StoresArea
          storeData={storeData.slice(printAreaStart, printAreaEnd)}
          locale={locale}
          limit={printAreaEnd - printAreaStart + 1}
          setSelectedPost={setSelectedPost}
          width={900}
          height={1300}
          top={600}
          left={8600}
          fontSize="10rem"
        />
        {/* Print Area End */}
        {/* MINI Cinema Start */}
        <StoresArea
          storeData={storeData.slice(cinemaStart, cinemaEnd)}
          limit={cinemaEnd - cinemaStart + 1}
          locale={locale}
          setSelectedPost={setSelectedPost}
          width={900}
          height={1300}
          top={4000}
          left={500}
          fontSize="10rem"
        />
        {/* MINI Cinema End */}
      </MapOverlay>
    </div>
  );
}
