/**
 * @file BellMaps.jsx
 * @description Create the `BellAvenueMaps` component which depends on another two components, `BellAvenueFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-09-02
 */

"use client";

import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import {
  STORE_BLOCK_WIDTH,
  STORE_BLOCK_HEIGHT,
  FIRST_ROW_Y,
  GAP_BETWEEN_STORES_AND_PATH,
  PATH_SIZE,
} from "../StoreBlock/StoreBlock";

/**
 * @description Generate the map from the data file.
 * @param storeData JSON data.
 */
export default function BellAvenueMaps({
  storeData,
  setSelectedPost,
  mapWidth,
  mapHeight,
  locale,
  currentFloor = 0,
}) {
  // Size of the map.
  const WIDTH = mapWidth;
  const HEIGHT = mapHeight;

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
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.

  // Draw path.
  const drawSvgPath = () => {
    // Calculate where to start.
    const pathY =
      FIRST_ROW_Y + STORE_BLOCK_HEIGHT + GAP_BETWEEN_STORES_AND_PATH;
    const result = [];
    let index = 0;
    for (let x = 0; x <= RIGHT_BOUNDARY; x += PATH_SIZE) {
      result.push(drawPathBlock(x, pathY, index++));
      result.push(drawPathBlock(x, pathY + PATH_SIZE, index++));
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
      {DrawAMap(stores, ROW_INDEX_LIMIT, setSelectedPost, locale)}
    </svg>
  );
}
