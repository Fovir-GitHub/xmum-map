/**
 * @file DrawAMap.jsx
 * @description Draw a map with row index limit.
 * @author Fovir
 * @since 2025-09-15
 */

"use client";

import StoreBlock, {
  getFillColor,
  getStoreIcon,
} from "../StoreBlock/StoreBlock";
import xmumConfig from "../../config";

/**
 * Draw a row of bell map.
 *
 * @param {object[]} stores Data of stores.
 * @param {number} rowIndexLimit Determine how many stores should be placed in a row.
 * @param {string} locale Current locale.
 * @param {number} limit Total number of stores.
 * @param {Function} setSelectedPost Function used to set selected post.
 */
export default function DrawAMap({
  stores,
  rowIndexLimit,
  locale,
  limit,
  setSelectedPost,
  width = xmumConfig.storeBlock.size.width,
  height = xmumConfig.storeBlock.size.height,
  fontSize = xmumConfig.storeBlock.style.fontSize,
  useRowIndex = true,
}) {
  let arrayIndex = 0;
  return (
    <>
      {stores.map((store) => {
        if (!store.Name || !store.Show) {
          arrayIndex++;
          return;
        }
        let x = 0;
        let y = 0;

        const widthOffset = store.Width === null ? 1 : store.Width;
        const index = useRowIndex ? store.Row : arrayIndex++;
        if (index < rowIndexLimit) {
          x = index * width;
          y = xmumConfig.storeBlock.position.firstRowY;
        } else {
          x = (limit - store.Row) * width;
          y = xmumConfig.storeBlock.position.secondRowY;
        }
        return (
          <StoreBlock
            x={x}
            y={y}
            width={width * widthOffset}
            height={height}
            fill={getFillColor(store.Category)}
            stroke={xmumConfig.storeBlock.style.stroke}
            strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
            text={store.Name}
            fontSize={fontSize}
            key={crypto.randomUUID()}
            icon={getStoreIcon(store)}
            handleClick={() =>
              setSelectedPost({ slug: store.Slug, locale: locale })
            }
          />
        );
      })}
    </>
  );
}

/**
 * Draw a path block in (x,y) with `fill` color.
 *
 * @param {number} x X-coordinate.
 * @param {number} y Y-coordinate.
 * @param {number} index The index of store.
 */
export function drawPathBlock(x, y, index) {
  return (
    <rect
      x={x}
      y={y}
      width={xmumConfig.storeBlock.path.size}
      height={xmumConfig.storeBlock.path.size}
      fill={xmumConfig.storeBlock.path.fill}
      stroke={xmumConfig.storeBlock.path.stroke}
      strokeWidth={xmumConfig.storeBlock.path.strokeWidth}
      key={index}
    />
  );
}
