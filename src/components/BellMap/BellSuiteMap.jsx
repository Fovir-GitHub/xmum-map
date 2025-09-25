/**
 * @file BellSuiteMap.jsx
 * @description Draw map of bell suite.
 * @author Fovir
 * @since 2025-09-20
 */

"use client";

import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import xmumConfig from "../../config";

/**
 * @typedef {object} BellSuiteMapProps
 *
 * @property {object[]} storeData Data of stores in bell suite.
 * @property {number} mapWidth Width of the map.
 * @property {number} mapHeight Height of the map.
 * @property {Function} setSelectedPost Function used to set selected post.
 * @property {string} locale Locale from `useState()` function.
 */

/**
 * Bell suite map which has one floor.
 */
export default function BellSuiteMap(
  /** @type {BellSuiteMapProps} */
  { storeData, mapWidth, mapHeight, setSelectedPost, locale },
) {
  const ROW_INDEX_LIMIT = 8;
  const limit = 13;

  // Bell suite has a crossing road.
  const PATH_CROSS_POINT = 8;

  function drawHorizontalPath() {
    const pathY =
      xmumConfig.storeBlock.position.firstRowY +
      xmumConfig.storeBlock.size.height +
      xmumConfig.storeBlock.path.gap;
    const result = [];
    let index = 0;
    for (
      let x = 0;
      x <= mapWidth;
      x += xmumConfig.storeBlock.path.size
    ) {
      result.push(drawPathBlock(x, pathY, index++));
      result.push(
        drawPathBlock(
          x,
          pathY + xmumConfig.storeBlock.path.size,
          index++,
        ),
      );
    }
    return result;
  }

  function drawVerticalPath() {
    const pathX = PATH_CROSS_POINT * xmumConfig.storeBlock.path.size;
    const result = [];
    const bottomBoundary =
      (xmumConfig.storeBlock.size.height +
        xmumConfig.storeBlock.path.gap +
        xmumConfig.storeBlock.path.size) *
      2;
    let index = 0;
    for (
      let y = xmumConfig.storeBlock.position.firstRowY;
      y <= bottomBoundary;
      y += xmumConfig.storeBlock.path.size
    ) {
      result.push(drawPathBlock(pathX, y, index++));
      result.push(
        drawPathBlock(
          pathX + xmumConfig.storeBlock.path.size,
          y,
          index++,
        ),
      );
    }
    return result;
  }

  return (
    <>
      <svg
        width={mapWidth}
        height={mapHeight}
        fill={xmumConfig.map.backgroundColor}
      >
        {drawHorizontalPath().map((path) => {
          return path;
        })}
        {drawVerticalPath().map((path) => {
          return path;
        })}
        {DrawAMap({
          stores: storeData[0],
          rowIndexLimit: ROW_INDEX_LIMIT,
          setSelectedPost: setSelectedPost,
          locale: locale,
          limit: limit,
        })}
      </svg>
    </>
  );
}
