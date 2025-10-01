/**
 * @file src/components/B1Map/B1BFloorMap.jsx
 * @description B1 BF map.
 * @author Fovir
 * @since 2025-10-01
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";

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
    <BackgroundMapWrapper backgroundSource="maps/B1_BF.svg"></BackgroundMapWrapper>
  );
}
