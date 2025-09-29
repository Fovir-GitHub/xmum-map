/**
 * @file src/components/A3Map/A3SecondFloor.jsx
 * @description Map of A3 second floor.
 * @author Fovir
 * @since 2025-09-29
 */

import xmumConfig from "../../config";

/**
 * Map of A3 second floor.
 */
export default function A3SecondFloor() {
  return (
    <div>
      <img
        src="maps/A3_2F.svg"
        width={xmumConfig.map.backgroundMapWidth}
        height={xmumConfig.map.backgroundMapHeight}
      />
    </div>
  );
}
