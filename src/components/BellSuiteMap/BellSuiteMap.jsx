/**
 * @file BellSuiteMap.jsx
 * @description Draw map of bell suite.
 * @author Fovir
 * @date 2025-09-02
 */

"use client";

import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import DrawAMap from "../DrawAMap/DrawAMap";

export default function BellSuiteMap({
  storeData,
  mapWidth,
  mapHeight,
  setSelectedPost,
  locale,
}) {
  const ROW_INDEX_LIMIT = 6;

  return (
    <>
      <svg
        width={mapWidth}
        height={mapHeight}
        fill={catppuccinMochaColors.base}
      >
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
