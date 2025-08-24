/**
 * @file BellMaps.jsx
 * @description Create the `BellMaps` component which depends on another two components, `BellFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-08-24
 */

"use client";
import { useState } from "react";
import mapStyle from "./bellmap.module.css";

/**
 * @description Generate the map from the data file.
 * @param storeData JSON data.
 */
export default function BellMaps({ storeData, currentFloor = 0 }) {
  // Size of the map.
  const WIDTH = 5000;
  const HEIGHT = 1000;

  const [floor, setFloor] = useState(currentFloor);

  return (
    <BellFloorMap
      svgWidth={WIDTH}
      svgHeight={HEIGHT}
      stores={storeData[floor]}
    />
  );
}

/**
 * @description Generate maps for each floor.
 * @param svgWidth The width of SVG.
 * @param svgHeight The height of SVG.
 * @param stores Data of stores on every floor.
 */
function BellFloorMap({ svgWidth, svgHeight, stores }) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const STORE_BLOCK_WIDTH = 100; // Width of a store.
  const STORE_BLOCK_HEIGHT = 150; // Height of a store.
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.
  const FIRST_ROW_Y = 10;
  const SECOND_ROW_Y = 200;

  return (
    <svg width={svgWidth} height={svgHeight}>
      {stores.map((store, index) => {
        // Ignore empty position.
        if (!store.Name) {
          return;
        }

        let x = 0;
        let y = 0;

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
            width={STORE_BLOCK_WIDTH}
            height={STORE_BLOCK_HEIGHT}
            fill={getFillColor(store.Category)}
            stroke={"white"}
            strokeWidth={2}
            text={store.Name}
            key={crypto.randomUUID()}
            handleClick={() => alert("Hello")}
          />
        );
      })}
    </svg>
  );
}

/**
 * @description Generate a store block.
 */
function StoreBlock({
  x,
  y,
  fill,
  width,
  height,
  stroke,
  strokeWidth,
  text,
  handleClick,
}) {
  return (
    <g onClick={handleClick}>
      <rect
        x={x}
        y={y}
        fill={fill}
        width={width}
        height={height}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <foreignObject width={width} height={height} x={x} y={y}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={mapStyle.svgText}
        >
          {text}
        </div>
      </foreignObject>
    </g>
  );
}

/**
 * @description Get the fill color by the category of the store.
 * @param {string} category
 */
function getFillColor(category) {
  const CATEGORY_COLOR_MAP = new Map([
    ["rest", "pink"],
    ["drink", "red"],
    ["store", "blue"],
    ["enter", "purple"],
    ["default", "grey"],
  ]);

  if (CATEGORY_COLOR_MAP.has(category)) {
    return CATEGORY_COLOR_MAP.get(category);
  } else {
    return CATEGORY_COLOR_MAP.get("default");
  }
}
