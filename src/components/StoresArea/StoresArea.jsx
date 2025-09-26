/**
 * @file src/components/StoresArea/StoresArea.jsx
 * @description Component of `StoresArea`.
 * @author Fovir
 * @since 2025-09-25
 */

import DrawAMap from "../DrawAMap/DrawAMap";

/**
 * @typedef {object} StoresAreaProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {number} limit Index limit.
 * @property {number} top Top position in `absolute` layout.
 * @property {number} left Left position in `absolute` layout.
 * @property {number} width Width of a single store block.
 * @property {number} height Height of a single store block.
 * @property {string} fontSize Font size of the store block.
 * @property {Function} setSelectedPost Function used to set selected post.
 * @property {boolean} [useRowIndex=false] Determine whether to use `store.Row` as index.
 * @property {number} [rotate=0] The rotate degree. By default, it is 0.
 */

/**
 * Draw a row of stores.
 */
export function StoresArea(
  /** @type {StoresAreaProps} */
  {
    storeData,
    locale,
    limit,
    top,
    left,
    width,
    height,
    fontSize,
    setSelectedPost,
    useRowIndex = false,
    rotate = 0,
  },
) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: getTotalStoreWidth(storeData, width),
        height: height,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: limit,
          limit: limit,
          locale: locale,
          height: height,
          width: width,
          fontSize: fontSize,
          useRowIndex: useRowIndex,
          setSelectedPost: setSelectedPost,
        })}
      </svg>
    </div>
  );
}

/**
 * Calculate the total width of a row of stores.
 *
 * @param {object[]} stores Data of stores.
 * @param {number} width Width of a single store.
 *
 * @returns Total width of the row of stores.
 */
function getTotalStoreWidth(stores, width) {
  let totalWidth = 0;

  stores.map(
    (store) => (totalWidth += store.Width !== null ? store.Width : 1),
  );
  return totalWidth * width;
}
