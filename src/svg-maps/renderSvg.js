/**
 * @file renderSvg.js
 * @description Render SVG from `.xlsx` files.
 * @author Fovir
 * @date 2025-08-23
 */

import XLSX from "xlsx";

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

    // Read data.
    let data = XLSX.utils.sheet_to_json(workSheet);
    data = data.slice(0, MAX_ROWS);
    result.push(data);
  }

  console.log(typeof result);
  return result;
}
