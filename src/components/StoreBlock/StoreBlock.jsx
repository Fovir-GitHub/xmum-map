/**
 * @file StoreBlock.jsx
 * @description Create component that is used to draw a single block of store.
 * @author Fovir
 * @date 2025-09-01
 */

"use client";

import utilStyles from "../../styles/utils.module.css";
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
 * @description Generate a store block.
 */
export default function StoreBlock({
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
    <g onClick={handleClick} className={utilStyles.highlightOnHover}>
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
              fontSize: "1.6rem",
              textAlign: "center",
              wordBreak: "break-word",
              whiteSpace: "pre-line",
              textWrap: "wrap",
              padding: "0 10px",
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
export function getFillColor(category) {
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
export function getStoreIcon(store) {
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
