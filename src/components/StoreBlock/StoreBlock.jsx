/**
 * @file src/components/StoreBlock/StoreBlock.jsx
 * @description Create component that is used to draw a single block of store.
 * @author Fovir
 * @since 2025-09-10
 */

"use client";

import utilStyles from "../../styles/utils.module.css";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import xmumConfig, {
  categoryInformation,
  extraIcons,
} from "../../config";

/**
 * @typedef {object} storeBlockProps
 *
 * @property {number} x x-coordinate of the store block.
 * @property {number} y y-coordinate of the store block.
 * @property {string} fill Filled color.
 * @property {number | string} width Width of the store block.
 * @property {number | string} height Height of the store block.
 * @property {string} stroke Color of stroke.
 * @property {number} strokeWidth Width of stroke.
 * @property {string} text Text displayed in the center of the store block.
 * @property {import("react").ComponentType} icon Material icons displayed under `text`.
 * @property {Function} handleClick Function to be called when the store block is clicked.
 * @property {boolean} [showIcon=true] Determine whether to show the icon.
 * @property {string} [fontSize=xmumConfig.storeBlock.style.fontSize] Font size of `text`. The default value can be set in the configuration file.
 */

/**
 * Generate a store block.
 */
export default function StoreBlock(
  /** @type {storeBlockProps} */
  {
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
    fontSize = xmumConfig.storeBlock.style.fontSize,
  },
) {
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
            fontSize: fontSize,
          }}
        >
          <p
            style={{
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
 * Get the fill color by the category of the store.
 *
 * @param {string} category The category name.
 * @returns {string} Color in #RRGGBBAA forms.
 */
export function getFillColor(category) {
  if (category in categoryInformation) {
    return categoryInformation[category].color;
  }

  return categoryInformation.other.color;
}

/**
 * Get icon by store.Icon or store.Category
 *
 * @param {object} store The store object.
 * @returns {import("react").ComponentType} A material UI icon component.
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
