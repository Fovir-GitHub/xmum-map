/**
 * @file renderSvg.js
 * @description Render SVG from `.xlsx` files.
 * @author Fovir
 * @date 2025-08-23
 */

import XLSX from "xlsx";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from "svgdom";
import fs from "fs";

// Begin constants.

const SOURCE_FILE_NAME = "./data.xlsx";
const WINDOW_WIDTH = 5000;
const WINDOW_HEIGHT = 1000;

// End constants.

/**
 * @description Read data from `.xlsx` files.
 * @param {string} fileName - The `.xlsx` file to read.
 * @returns {Array} - JSON array.
 */
function readXlsx(fileName) {
  const MAX_ROWS = 78; // Max row of data to be read.
  const workBook = XLSX.readFile(fileName); // Open the file.
  const result = []; // The result array.

  for (const sheetName of workBook.SheetNames) {
    // Get the work sheet.
    const workSheet = workBook.Sheets[sheetName];

    // Read data with blank lines.
    let data = XLSX.utils.sheet_to_json(workSheet, {
      defval: null,
      blankrows: true,
    });
    data = data.slice(0, MAX_ROWS);
    result.push(data);
  }

  return result;
}

/**
 * @param {import("@svgdotjs/svg.js").Svg} draw - SVG drawer.
 * @param {Array} stores - Data of stores.
 */
function renderASheet(draw, stores) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const STORE_BLOCK_WIDTH = 100; // Width of a store.
  const STORE_BLOCK_HEIGHT = 150; // Height of a store.
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.

  // Category-color map.
  const CATEGORY_COLOR_MAP = new Map([
    ["rest", "black"],
    ["drink", "red"],
    ["store", "blue"],
    ["enter", "purple"],
  ]);

  // `y` index of two rows.
  const firstRowY = 10;
  const secondRowY = 200;

  /**
   * @param {number} x - x-coordinate of the left-top point of the rectangle.
   * @param {number} y - y-coordinate of the left-top point of the rectangle.
   * @param {object} store - Store information.
   */
  const drawRect = (x, y, store) => {
    // If the item is `null`, then skip it.
    if (!store.Name) {
      return;
    }

    // Draw a store block: different colored rectangles with white border at (x, y).
    draw
      .rect(STORE_BLOCK_WIDTH, STORE_BLOCK_HEIGHT)
      .fill(CATEGORY_COLOR_MAP.get(store.Category))
      .stroke({ color: "white", width: 2 })
      .move(x, y)
      .on("click", () => {
        alert("clicked");
      });

    // CSS style for text.
    const css = fs.readFileSync("./svg.module.css");
    draw.add(`<style>${css}</style>`);
    draw
      .foreignObject(STORE_BLOCK_WIDTH, STORE_BLOCK_HEIGHT)
      .move(x, y)
      .add(
        '<div xmlns="http://www.w3.org/1999/xhtml" class="svg-text">' +
          store.Name +
          "</div>",
      );
  };

  // Generate the first row.
  for (let i = 0; i < ROW_INDEX_LIMIT; i++) {
    // Since the first row of the source data file is the header, so the index should plus 1 to be the real position.
    const x = (i + 1) * STORE_BLOCK_WIDTH;
    drawRect(x, firstRowY, stores[i]);
  }

  // Generate the second row.
  for (let i = ROW_INDEX_LIMIT; i < stores.length; i++) {
    const x =
      RIGHT_BOUNDARY - (i - ROW_INDEX_LIMIT + 1) * STORE_BLOCK_WIDTH;
    drawRect(x, secondRowY, stores[i]);
  }
}

function renderSvg() {
  // Read data.
  const storeData = readXlsx(SOURCE_FILE_NAME);

  // Create a virtual window.
  const window = createSVGWindow();
  const document = window.document;
  registerWindow(window, document);

  const draw = SVG(document.documentElement).size(
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
  );

  // Generate SVG from each sheet.
  storeData.forEach((stores, index) => {
    draw.clear(); // Clear the drawer.

    // Render SVG and output to files.
    renderASheet(draw, stores);
    fs.writeFileSync(`${index}.svg`, draw.svg());
  });
}

renderSvg();
