/**
 * @file src/components/B1Map/B1FirstFloor.jsx
 * @description First floor of B1.
 * @author Fovir
 * @since 2025-09-30
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";

/**
 * @typedef {object[]} B1FirstFloorMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

/**
 * Map of B1 first floor.
 */
export default function B1FirstFloorMap(
  /** @type {B1FirstFloorMapProps} */
  { storeData, locale },
) {
  return (
    <BackgroundMapWrapper backgroundSource="maps/B1_1F.svg"></BackgroundMapWrapper>
  );
}
