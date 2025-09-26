/**
 * @file src/components/BellMap/BellAvenueMaps.jsx
 * @description Create the `BellAvenueMaps` component which depends on another two components, `BellAvenueFloorMap` and `StoreBlock`.
 * @author Fovir
 * @since 2025-09-20
 */

"use client";

import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import xmumConfig from "../../config";
import MilliesVisionAndEncounteringNailArt from "./MilliesVisionAndEncounteringNailArt";

/**
 * @typedef {object} BellAvenueMapsProps
 *
 * @property {object[][]} storeData JSON data.
 * @property {number} mapWidth Width of the map.
 * @property {number} mapHeight Height of the map.
 * @property {string} locale Locale from `useState()`.
 * @property {string[]} showCategories An array to determine which stores can be displayed by their categories.
 * @property {Function} setSelectedPost Function used to set selected post.
 * @property {number} [currentFloor=0] The floor that users are on. By default, it is GF (0F).
 */

/**
 * Generate the map of bell avenue from the data file.
 *
 * Bell avenue map has two floors, which requires a `LayerSwitcher` component.
 */
export default function BellAvenueMaps(
  /** @type {BellAvenueMapsProps} */
  {
    storeData,
    mapWidth,
    mapHeight,
    locale,
    showCategories,
    setSelectedPost,
    currentFloor = 0,
  },
) {
  // Size of the map.
  const WIDTH = mapWidth;
  const HEIGHT = mapHeight;

  return (
    <>
      <BellAvenueFloorMap
        svgWidth={WIDTH}
        svgHeight={HEIGHT}
        stores={storeData[currentFloor]}
        locale={locale}
        setSelectedPost={setSelectedPost}
        showPatch={
          currentFloor === 0 &&
          showCategories.includes(
            xmumConfig.storeBlock.patches.milliesVision.category,
          )
        }
      />
    </>
  );
}

/**
 * @typedef {object} BellAvenueFloorMapProps
 *
 * @property {number} svgWidth The width of SVG.
 * @property {number} svgHeight The height of SVG.
 * @property {object[]} stores Data of stores on every floor.
 * @property {string} locale Locale from `useState()`.
 * @property {boolean} showPatch Determine whether to display patch stores.
 * @property {Function} setSelectedPost Function used to set selected post.
 */

/**
 * Generate maps for each floor of bell avenue.
 */
function BellAvenueFloorMap(
  /** @type {BellAvenueMapsProps} */
  { svgWidth, svgHeight, stores, locale, showPatch, setSelectedPost },
) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const limit = 78; // Maximum number of stores.

  // Draw path.
  const drawSvgPath = () => {
    // Calculate where to start.
    const pathY =
      xmumConfig.storeBlock.position.firstRowY +
      xmumConfig.storeBlock.size.height +
      xmumConfig.storeBlock.path.gap;
    const result = [];
    let index = 0;
    for (
      let x = 0;
      x <= svgWidth;
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
  };

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      fill={xmumConfig.map.backgroundColor}
    >
      {drawSvgPath().map((path) => {
        // Draw the path.
        return path;
      })}
      {DrawAMap({
        stores: stores,
        rowIndexLimit: ROW_INDEX_LIMIT,
        locale: locale,
        limit: limit,
        setSelectedPost: setSelectedPost,
      })}
      {showPatch &&
        MilliesVisionAndEncounteringNailArt({
          setSelectedPost: setSelectedPost,
          locale: locale,
        })}
    </svg>
  );
}
