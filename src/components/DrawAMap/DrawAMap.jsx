/**
 * @file DrawAMap.jsx
 * @description Draw a map with row index limit.
 * @author Fovir
 * @date 2025-09-11
 */

"use client";

import StoreBlock, {
  getFillColor,
  getStoreIcon,
} from "../StoreBlock/StoreBlock";
import xmumConfig from "../../config";

export default function DrawAMap(
  stores,
  rowIndexLimit,
  setSelectedPost,
  locale,
  limit,
) {
  return (
    <>
      {stores.map((store) => {
        if (!store.Name || !store.Show) {
          return;
        }
        let x = 0;
        let y = 0;

        const widthOffset = store.Width === null ? 1 : store.Width;
        const index = store.Row;
        if (index < rowIndexLimit) {
          x = index * xmumConfig.storeBlock.size.width;
          y = xmumConfig.storeBlock.position.firstRowY;
        } else {
          x = (limit - store.Row) * xmumConfig.storeBlock.size.width;
          y = xmumConfig.storeBlock.position.secondRowY;
        }
        return (
          <StoreBlock
            x={x}
            y={y}
            width={xmumConfig.storeBlock.size.width * widthOffset}
            height={xmumConfig.storeBlock.size.height}
            fill={getFillColor(store.Category)}
            stroke={xmumConfig.storeBlock.style.stroke}
            strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
            text={store.Name}
            key={crypto.randomUUID()}
            icon={getStoreIcon(store)}
            handleClick={() =>
              setSelectedPost({
                slug: store.Slug,
                locale: locale,
              })
            }
          />
        );
      })}
    </>
  );
}

/**
 * @description Draw a path block in (x,y) with `fill` color.
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
