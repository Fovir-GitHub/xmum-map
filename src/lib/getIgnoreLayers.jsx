/**
 * @file src/lib/getIgnoreLayers.jsx
 * @description Function used to get ignore layers.
 * @author Fovir
 * @since 2025-09-30
 */

/**
 * Get an array contains all indexs of `null` element in `layerMaps`.
 *
 * @param {number} layerStart Start number of layers.
 * @param {React.Component[]} layerMaps Maps of layer.
 *
 * @returns {number[]} Indexs of `null` elements.
 */
export function getIgnoreLayers(layerStart, layerMaps) {
  const result = [];
  layerMaps.map((map, index) => {
    if (map === null) {
      result.push(index + layerStart);
    }
  });
  return result;
}
