/**
 * @typedef {object} A3FirstFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to select post.
 */

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
      <img src="maps/A3_1F.svg" width={10000} height={10000} />
      <MapOverlay>
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
      </MapOverlay>
    </div>
  );
}
