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

function renderSvg() {
  // Read data.
  const sourceFileName = "./data.xlsx";
  const storeData = readXlsx(sourceFileName);

  console.log(storeData);

  // Create a virtual window.
  const window = createSVGWindow();
  const document = window.document;
  registerWindow(window, document);

  const svgWidth = 1000;
  const svgHeight = 500;
  const draw = SVG(document.documentElement).size(svgWidth, svgHeight);
}

renderSvg();
