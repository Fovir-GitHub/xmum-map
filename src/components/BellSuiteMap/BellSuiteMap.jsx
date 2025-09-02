/**
 * @file BellSuiteMap.jsx
 * @description Draw map of bell suite.
 * @author Fovir
 * @date 2025-09-02
 */

"use client";

import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import {
  FIRST_ROW_Y,
  GAP_BETWEEN_STORES_AND_PATH,
  PATH_SIZE,
  STORE_BLOCK_HEIGHT,
  STORE_BLOCK_WIDTH,
} from "../StoreBlock/StoreBlock";

export default function BellSuiteMap({
  storeData,
  mapWidth,
  mapHeight,
  setSelectedPost,
  locale,
}) {
  const ROW_INDEX_LIMIT = 7;
  const rightBoundary = (ROW_INDEX_LIMIT + 1) * STORE_BLOCK_WIDTH;
  const PATH_CROSS_POINT = 8;

  function drawHorizontalPath() {
    const pathY =
      FIRST_ROW_Y + STORE_BLOCK_HEIGHT + GAP_BETWEEN_STORES_AND_PATH;
    const result = [];
    let index = 0;
    for (let x = 0; x <= rightBoundary; x += PATH_SIZE) {
      result.push(drawPathBlock(x, pathY, index++));
      result.push(drawPathBlock(x, pathY + PATH_SIZE, index++));
    }
    return result;
  }

  function drawVerticalPath() {
    const pathX = PATH_CROSS_POINT * PATH_SIZE;
    const result = [];
    const bottomBoundary =
      (STORE_BLOCK_HEIGHT + GAP_BETWEEN_STORES_AND_PATH + PATH_SIZE) *
      2;
    let index = 0;
    for (let y = FIRST_ROW_Y; y <= bottomBoundary; y += PATH_SIZE) {
      result.push(drawPathBlock(pathX, y, index++));
      result.push(drawPathBlock(pathX + PATH_SIZE, y, index++));
    }
    return result;
  }

  return (
    <>
      <svg
        width={mapWidth}
        height={mapHeight}
        fill={catppuccinMochaColors.base}
      >
        {drawHorizontalPath().map((path) => {
          return path;
        })}
        {drawVerticalPath().map((path) => {
          return path;
        })}
        {DrawAMap(
          storeData[0],
          ROW_INDEX_LIMIT,
          setSelectedPost,
          locale,
        )}
      </svg>
    </>
  );
}
