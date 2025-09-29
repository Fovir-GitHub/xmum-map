/**
 * @file src/components/B1Map/B1GfMap.jsx
 * @description Map of B1 ground floor.
 * @author Fovir
 * @since 2025-09-24
 */

"use client";

import { StoresArea } from "../StoresArea/StoresArea";
import MapOverlay from "../StoresArea/MapOverlay";

/**
 * @typedef {object[]} B1GMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to select posts.
 */

/**
 * Map of B1 ground floor.
 */
export default function B1GfMap(
  /** @type {B1GMapProps} */
  { storeData, locale, setSelectedPost },
) {
  return (
    <div>
      <img src="maps/B1_GF.svg" width={10000} height={10000} />
      <MapOverlay>
        <StoresArea
          limit={12}
          top={100}
          left={3500}
          width={800}
          height={600}
          locale={locale}
          storeData={storeData}
          fontSize={"5rem"}
          setSelectedPost={setSelectedPost}
        />
      </MapOverlay>
    </div>
  );
}
