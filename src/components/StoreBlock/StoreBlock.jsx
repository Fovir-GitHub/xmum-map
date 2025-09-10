/**
 * @file StoreBlock.jsx
 * @description Create component that is used to draw a single block of store.
 * @author Fovir
 * @date 2025-09-10
 */

"use client";

import utilStyles from "../../styles/utils.module.css";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import { categoryInformation, extraIcons } from "../../config";

export const STORE_BLOCK_WIDTH = 150; // Width of a store.
export const STORE_BLOCK_HEIGHT = 200; // Height of a store.
export const FIRST_ROW_Y = 100; // y of the first row of stores.
export const SECOND_ROW_Y = 700; // y of the second row of stores.
export const PATH_SIZE = 100; // Size of a single path block.
export const GAP_BETWEEN_STORES_AND_PATH =
  (SECOND_ROW_Y - FIRST_ROW_Y - STORE_BLOCK_HEIGHT - 2 * PATH_SIZE) / 2; // Center justify the path.

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
  showIcon = true,
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
          {showIcon && icon}
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
  if (category in categoryInformation) {
    return categoryInformation[category].color;
  }

  return categoryInformation.other.color;
}

/**
 * @description Get icon by store.Icon or store.Category
 * @param {object} store The store object.
 * @returns A material UI icon component.
 */
export function getStoreIcon(store) {
  // Use `store.Icon`.
  if (store.Icon !== null && store.Icon in extraIcons) {
    return extraIcons[store.Icon];
  }

  if (store.Category in categoryInformation) {
    return categoryInformation[store.Category].icon;
  }

  return categoryInformation.other.icon;
}
