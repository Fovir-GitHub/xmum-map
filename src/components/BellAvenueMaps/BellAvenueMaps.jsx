/**
 * @file BellMaps.jsx
 * @description Create the `BellAvenueMaps` component which depends on another two components, `BellAvenueFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-09-11
 */

"use client";

import DrawAMap, { drawPathBlock } from "../DrawAMap/DrawAMap";
import xmumConfig from "../../config";
import MilliesVisionAndEncounteringNailArt from "./MilliesVisionAndEncounteringNailArt";

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
  showCategories,
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
  showPatch,
}) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const limit = 78;

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
      {DrawAMap(
        stores,
        ROW_INDEX_LIMIT,
        setSelectedPost,
        locale,
        limit,
      )}
      {showPatch &&
        MilliesVisionAndEncounteringNailArt(setSelectedPost, locale)}
    </svg>
  );
}
