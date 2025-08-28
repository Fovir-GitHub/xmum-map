/**
 * @file BellMaps.jsx
 * @description Create the `BellMaps` component which depends on another two components, `BellFloorMap` and `StoreBlock`.
 * @author Fovir
 * @date 2025-08-28
 */

"use client";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import IcecreamRoundedIcon from "@mui/icons-material/IcecreamRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

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
          style={{
            color: catppuccinMochaColors.surface0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </p>
          {icon}
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
 * @description Get icon by store.Icon or store.Category
 * @param {object} store The store object.
 * @returns A material UI icon component.
 */
function getStoreIcon(store) {
  const iconSize = "large";

  // Use `store.Icon`.
  if (store.Icon !== null) {
    const ICON_MAP = new Map([
      [
        "DirectionsCarFilledRoundedIcon",
        <DirectionsCarFilledRoundedIcon fontSize={iconSize} />,
      ],
    ]);

    if (ICON_MAP.has(store.Icon)) {
      return ICON_MAP.get(store.Icon);
    }
  }

  // Use category icons.
  const CATEGORY_ICON_MAP = new Map([
    ["restaurant", <RestaurantRoundedIcon fontSize={iconSize} />],
    ["drink", <LocalDrinkRoundedIcon fontSize={iconSize} />],
    ["store", <LocalGroceryStoreRoundedIcon fontSize={iconSize} />],
    ["entertainment", <SportsEsportsRoundedIcon fontSize={iconSize} />],
    ["coffee", <CoffeeRoundedIcon fontSize={iconSize} />],
    ["snack", <IcecreamRoundedIcon fontSize={iconSize} />],
    ["misc", <CategoryRoundedIcon fontSize={iconSize} />],
  ]);

  if (CATEGORY_ICON_MAP.has(store.Category)) {
    return CATEGORY_ICON_MAP.get(store.Category);
  } else {
    return CATEGORY_ICON_MAP.get("misc");
  }
}
