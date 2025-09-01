/**
 * @file BellMaps.jsx
 * @description Create the `BellAvenueMaps` component which depends on another two components, `BellAvenueFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-09-01
 */

"use client";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import { getFillColor, getStoreIcon } from "../StoreBlock/StoreBlock";
import StoreBlock from "../StoreBlock/StoreBlock";

/**
 * @description Generate the map from the data file.
 * @param storeData JSON data.
 */
export default function BellAvenueMaps({
  storeData,
  setSelectedPost,
  mapWidth,
  locale,
  currentFloor = 0,
}) {
  // Size of the map.
  const WIDTH = mapWidth;
  const HEIGHT = 1000;

  return (
    <>
      <BellAvenueFloorMap
        svgWidth={WIDTH}
        svgHeight={HEIGHT}
        stores={storeData[currentFloor]}
        setSelectedPost={setSelectedPost}
        locale={locale}
      />
    </>
  );
}

/**
 * @description Generate maps for each floor.
 * @param svgWidth The width of SVG.
 * @param svgHeight The height of SVG.
 * @param stores Data of stores on every floor.
 */
function BellAvenueFloorMap({
  svgWidth,
  svgHeight,
  stores,
  setSelectedPost,
  locale,
}) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const STORE_BLOCK_WIDTH = 150; // Width of a store.
  const STORE_BLOCK_HEIGHT = 200; // Height of a store.
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.
  const FIRST_ROW_Y = 100;
  const SECOND_ROW_Y = 700;

  // Write path.
  const PATH_SIZE = 100;

  // Center justify the path.
  const GAP_BETWEEN_STORES_AND_PATH =
    (SECOND_ROW_Y - FIRST_ROW_Y - STORE_BLOCK_HEIGHT - 2 * PATH_SIZE) /
    2;

  const drawSvgPath = () => {
    // Draw a single block.
    function drawSinglePathBlock(x, y, index) {
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

    // Calculate where to start.
    const pathY =
      FIRST_ROW_Y + STORE_BLOCK_HEIGHT + GAP_BETWEEN_STORES_AND_PATH;
    const result = [];
    let index = 0;
    for (let x = 0; x <= RIGHT_BOUNDARY; x += PATH_SIZE) {
      result.push(drawSinglePathBlock(x, pathY, index++));
      result.push(drawSinglePathBlock(x, pathY + PATH_SIZE, index++));
    }

    return result;
  };

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      fill={catppuccinMochaColors.base}
    >
      {drawSvgPath().map((path) => {
        // Draw the path.
        return path;
      })}

      {stores.map((store, index) => {
        // Ignore empty position.
        if (!store.Name) {
          return;
        }

        let x = 0;
        let y = 0;

        // Get the width of stores.
        const widthOffset = store.Width === null ? 1 : store.Width;

        // Determine which row does the store exist.
        if (index < ROW_INDEX_LIMIT) {
          x = (index + 1) * STORE_BLOCK_WIDTH;
          y = FIRST_ROW_Y;
        } else {
          x =
            RIGHT_BOUNDARY -
            (index - ROW_INDEX_LIMIT + 1) * STORE_BLOCK_WIDTH;
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
    </svg>
  );
}
