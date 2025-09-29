/**
 * @file src/components/StoresArea/BackgroundMapWrapper.jsx
 * @description Component of the wrapper of a background map image.
 * @author Fovir
 * @since 2025-09-29
 */

import xmumConfig from "../../config";

/**
 * @typedef {object} BackgroundMapWrapperProps
 *
 * @property {string} backgroundSource URL of the source image.
 * @property {number} [backgroundWidth=xmumConfig.map.backgroundMapWidth] Width of the background image.
 * @property {number} [backgroundHeight=xmumConfig.map.backgroundMapHeight] Height of the background image.
 * @property {any} children Children elements.
 */

/**
 * Wrapper of background maps with overlays.
 *
 * @example
 * <BackgroundMapWrapper backgroundSource="maps/map.svg">
 *   <MapOverlay>
 *     <StoresArea props...>
 *     </StoresArea>
 *   </MapOverlay>
 * </BackgroundMapWrapper>
 */
export default function BackgroundMapWrapper(
  /** @type {BackgroundMapWrapperProps} */
  {
    backgroundSource,
    children,
    backgroundWidth = xmumConfig.map.backgroundMapWidth,
    backgroundHeight = xmumConfig.map.backgroundMapHeight,
  },
) {
  return (
    <div>
      <img
        src={backgroundSource}
        width={backgroundWidth}
        height={backgroundHeight}
      />
      {children}
    </div>
  );
}
