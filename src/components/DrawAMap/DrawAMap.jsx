/**
 * @file DrawAMap.jsx
 * @description Draw a map with row index limit.
 * @author Fovir
 * @date 2025-09-02
 */

"use client";

import StoreBlock, {
  FIRST_ROW_Y,
  getFillColor,
  getStoreIcon,
  SECOND_ROW_Y,
  STORE_BLOCK_HEIGHT,
  STORE_BLOCK_WIDTH,
  PATH_SIZE,
} from "../StoreBlock/StoreBlock";

export default function DrawAMap(
  stores,
  rowIndexLimit,
  setSelectedPost,
  locale,
) {
  const rightBoundary = (rowIndexLimit - 1) * STORE_BLOCK_WIDTH;

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
          x = (index + 1) * STORE_BLOCK_WIDTH;
          y = FIRST_ROW_Y;
        } else {
          x =
            rightBoundary -
            (index - rowIndexLimit + 1) * STORE_BLOCK_WIDTH;
          y = SECOND_ROW_Y;
        }
        return (
          <StoreBlock
            x={x}
            y={y}
            width={STORE_BLOCK_WIDTH * widthOffset}
            height={STORE_BLOCK_HEIGHT}
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
      width={PATH_SIZE}
      height={PATH_SIZE}
      fill="#A0A1A6"
      stroke="#66676B"
      strokeWidth={3}
      key={index}
    />
  );
}
