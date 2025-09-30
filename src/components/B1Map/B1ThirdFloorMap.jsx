/**
 * @file src/components/B1Map/B1ThirdFloorMap.jsx
 * @description Map of b1 third floor.
 * @author Fovir
 * @since 2025-09-30
 */

/**
 * @typedef {object} B1ThirdFloorMapProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 */

import BackgroundMapWrapper from "../StoresArea/BackgroundMapWrapper";

/**
 * Map of B1 third floor.
 */
export default function B1ThirdFloorMap(
  /** @type {B1ThirdFloorMapProps} */
  { storeData, locale },
) {
  return (
    <BackgroundMapWrapper backgroundSource="maps/B1_3F.svg"></BackgroundMapWrapper>
  );
}
