/**
 * @file BellMaps.jsx
 * @description Create the `BellMaps` component which depends on another two components, `BellFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-08-25
 */

"use client";
import svgMapStyle from "./bellmap.module.css";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import IcecreamRoundedIcon from "@mui/icons-material/IcecreamRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

/**
 * @description Generate the map from the data file.
 * @param storeData JSON data.
 */
export default function BellMaps({
  storeData,
  setSelectedPost,
  currentFloor = 0,
}) {
  // Size of the map.
  const WIDTH = 5000;
  const HEIGHT = 1000;

  return (
    <BellFloorMap
      svgWidth={WIDTH}
      svgHeight={HEIGHT}
      stores={storeData[currentFloor]}
      setSelectedPost={setSelectedPost}
    />
  );
}

/**
 * @description Generate maps for each floor.
 * @param svgWidth The width of SVG.
 * @param svgHeight The height of SVG.
 * @param stores Data of stores on every floor.
 */
function BellFloorMap({
  svgWidth,
  svgHeight,
  stores,
  setSelectedPost,
}) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const STORE_BLOCK_WIDTH = 100; // Width of a store.
  const STORE_BLOCK_HEIGHT = 150; // Height of a store.
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.
  const FIRST_ROW_Y = 100;
  const SECOND_ROW_Y = 500;

  // Write path.
  const PATH_SIZE = 100;

  // Center justify the path.
  const GAP_BETWEEN_STORES_AND_PATH =
    (SECOND_ROW_Y - FIRST_ROW_Y - STORE_BLOCK_HEIGHT - 2 * PATH_SIZE) /
    2;

  const drawSvgPath = () => {
    // Draw a single block.
    function drawSinglePathBlock(x, y) {
      return (
        <rect
          x={x}
          y={y}
          width={PATH_SIZE}
          height={PATH_SIZE}
          fill="#A0A1A6"
          stroke="#66676B"
          strokeWidth={3}
        />
      );
    }

    // Calculate where to start.
    const pathY =
      FIRST_ROW_Y + STORE_BLOCK_HEIGHT + GAP_BETWEEN_STORES_AND_PATH;
    const result = [];
    for (let x = 0; x <= RIGHT_BOUNDARY; x += PATH_SIZE) {
      result.push(drawSinglePathBlock(x, pathY));
      result.push(drawSinglePathBlock(x, pathY + PATH_SIZE));
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
            icon={getDefaultIcon(store.Category)}
            handleClick={() =>
              setSelectedPost({
                slug: store.Slug,
                locale: "en",
              })
            }
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
  icon,
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
          className={svgMapStyle.svgText}
          style={{
            color: catppuccinMochaColors.surface0,
          }}
        >
          <p>{text}</p>
          <div>{icon}</div>
        </div>
      </foreignObject>
    </g>
  );
}

/**
 * @description Get the fill color by the category of the store.
 * @param {string} category The category name.
 * @returns Color in #RRGGBBAA forms.
 */
function getFillColor(category) {
  const transparent = "E2";
  const CATEGORY_COLOR_MAP = new Map([
    ["restaurant", `${catppuccinMochaColors.pink}${transparent}`],
    ["drink", `${catppuccinMochaColors.red}${transparent}`],
    ["store", `${catppuccinMochaColors.blue}${transparent}`],
    ["entertainment", `${catppuccinMochaColors.sky}${transparent}`],
    ["coffee", `${catppuccinMochaColors.yellow}${transparent}`],
    ["sanck", `${catppuccinMochaColors.green}${transparent}`],
    ["misc", `${catppuccinMochaColors.flamingo}${transparent}`],
  ]);

  if (CATEGORY_COLOR_MAP.has(category)) {
    return CATEGORY_COLOR_MAP.get(category);
  } else {
    return CATEGORY_COLOR_MAP.get("misc");
  }
}

/**
 * @description Get default icon by category of the store.
 * @param {string} category The name of category.
 * @returns A material UI icon component.
 */
function getDefaultIcon(category) {
  const CATEGORY_ICON_MAP = new Map([
    ["restaurant", <RestaurantRoundedIcon />],
    ["drink", <LocalDrinkRoundedIcon />],
    ["store", <LocalGroceryStoreRoundedIcon />],
    ["entertainment", <SportsEsportsRoundedIcon />],
    ["coffee", <CoffeeRoundedIcon />],
    ["snack", <IcecreamRoundedIcon />],
    ["misc", <CategoryRoundedIcon />],
  ]);

  if (CATEGORY_ICON_MAP.has(category)) {
    return CATEGORY_ICON_MAP.get(category);
  } else {
    return CATEGORY_ICON_MAP.get("misc");
  }
}
