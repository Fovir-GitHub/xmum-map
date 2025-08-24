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
 * @returns {Object} - Data in JSON format.
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

  console.log(typeof result);
  return result;
}

/**
 * @param {import("@svgdotjs/svg.js").Svg} draw - SVG drawer.
 * @param {Array} stores - Data of stores.
 */
function renderASheet(draw, stores) {
  const ROW_INDEX_LIMIT = 39;
  const STORE_BLOCK_WIDTH = 100;
  const STORE_BLOCK_HEIGHT = 150;
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH;

  const firstRowY = 10;
  const secondRowY = 200;

  const drawRect = (x, y, store) => {
    if (!store.Name) {
      return;
    }
    draw
      .rect(STORE_BLOCK_WIDTH, STORE_BLOCK_HEIGHT)
      .fill("black")
      .stroke({ color: "white", width: 2 })
      .move(x, y);
  };

  for (let i = 0; i < ROW_INDEX_LIMIT; i++) {
    const x = (i + 1) * STORE_BLOCK_WIDTH;
    drawRect(x, firstRowY, stores[i]);
  }

  for (let i = ROW_INDEX_LIMIT; i < stores.length; i++) {
    const x =
      RIGHT_BOUNDARY - (i - ROW_INDEX_LIMIT + 1) * STORE_BLOCK_WIDTH;
    drawRect(x, secondRowY, stores[i]);
  }
}

function renderSvg() {
  // Read data.
  const storeData = readXlsx(SOURCE_FILE_NAME);

  console.log(storeData);

  // Create a virtual window.
  const window = createSVGWindow();
  const document = window.document;
  registerWindow(window, document);

  const draw = SVG(document.documentElement).size(
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
  );

  renderASheet(draw, storeData[0]);
  fs.writeFileSync("map.svg", draw.svg());
}

renderSvg();
