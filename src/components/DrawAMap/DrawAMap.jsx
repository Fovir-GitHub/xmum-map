/**
 * @file DrawAMap.jsx
 * @description Draw a map with row index limit.
 * @author Fovir
 * @date 2025-09-05
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
) {
  const rightBoundary =
    (rowIndexLimit - 1) * xmumConfig.storeBlock.size.width;

  return (
    <>
      {stores.map((store, index) => {
        if (!store.Name) {
          return;
        }
        let x = 0;
        let y = 0;

        const widthOffset = store.Width === null ? 1 : store.Width;
        if (index < rowIndexLimit) {
          x = (index + 1) * xmumConfig.storeBlock.size.width;
          y = xmumConfig.storeBlock.position.firstRowY;
        } else {
          x =
            rightBoundary -
            (index - rowIndexLimit + 1) *
              xmumConfig.storeBlock.size.width;
          y = xmumConfig.storeBlock.position.secondRowY;
        }
        return (
          <StoreBlock
            x={x}
            y={y}
            width={xmumConfig.storeBlock.size.width * widthOffset}
            height={xmumConfig.storeBlock.size.height}
            fill={getFillColor(store.Category)}
            stroke={"white"}
            strokeWidth={2}
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
