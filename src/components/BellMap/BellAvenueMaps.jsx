/**
 * @file BellMaps.jsx
 * @description Create the `BellAvenueMaps` component which depends on another two components, `BellAvenueFloorMap` and `StoreBlock`.
 * @author Fovir
 * @since 2025-09-20
 */

"use client";

import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import xmumConfig from "../../config";
import MilliesVisionAndEncounteringNailArt from "./MilliesVisionAndEncounteringNailArt";

/**
 * Generate the map of bell avenue from the data file.
 *
 * Bell avenue map has two floors, which requires a `LayerSwitcher` component.
 *
 * @param storeData JSON data.
 * @param mapWidth Width of the map.
 * @param mapHeight Height of the map.
 * @param locale Locale from `useState()`.
 * @param showCategories An array to determine which stores can be displayed by their categories.
 * @param handleStoreBlockClick Function to call when a store block is clicked.
 * @param currentFloor The floor that users are on. By default, it is GF (0F).
 */
export default function BellAvenueMaps({
  storeData,
  mapWidth,
  mapHeight,
  locale,
  showCategories,
  handleStoreBlockClick,
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
        locale={locale}
        handleStoreBlockClick={handleStoreBlockClick}
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
 * Generate maps for each floor of bell avenue.
 * @param svgWidth The width of SVG.
 * @param svgHeight The height of SVG.
 * @param stores Data of stores on every floor.
 * @param locale Locale from `useState()`.
 * @param showPatch Determine whether to display patch stores.
 * @param handleStoreBlockClick Function to call when a store block is clicked.
 */
function BellAvenueFloorMap({
  svgWidth,
  svgHeight,
  stores,
  locale,
  showPatch,
  handleStoreBlockClick,
}) {
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
        handleStoreBlockClick: handleStoreBlockClick,
      })}
      {showPatch &&
        MilliesVisionAndEncounteringNailArt({
          handleBlockClick: handleStoreBlockClick,
          locale: locale,
        })}
    </svg>
  );
}
